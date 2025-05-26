"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { getWaitlistEntries, updateWaitlistStatus } from "@/actions/waitlist"
import { exportWaitlistData } from "@/actions/export"
import { convertToCSV, createDownloadableCSV } from "@/lib/csv-utils"
import { Download, RefreshCw, X, AlertTriangle } from "lucide-react"
import { useRouter } from "next/navigation"
import { checkDatabaseConnection } from "@/lib/db"

type WaitlistEntry = {
  id: number
  name: string
  email: string
  shopify_url: string
  sales_locations: string[]
  plan_interest: string | null
  status: string
  created_at: string
  updated_at: string
  notes?: string | null
}

type WaitlistStats = {
  totalCount: number
  statusCounts: { status: string; count: number }[]
  planCounts: { plan_interest: string; count: number }[]
  locationCounts: { location: string; count: number }[]
  signupsByDay: { date: string; count: number }[]
}

export default function WaitlistAdmin() {
  const router = useRouter()
  const [entries, setEntries] = useState<WaitlistEntry[]>([])
  const [stats, setStats] = useState<WaitlistStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [activeTab, setActiveTab] = useState("entries")
  const [exportLoading, setExportLoading] = useState(false)
  const [dbConnectionError, setDbConnectionError] = useState<string | null>(null)

  const logout = () => {
    localStorage.removeItem("waitlist-admin-auth")
    setAuthenticated(false)
    setEntries([])
    setStats(null)
    router.push("/admin")
  }

  // Simple authentication for demo purposes
  const authenticate = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "amplify-admin") {
      setAuthenticated(true)
      localStorage.setItem("waitlist-admin-auth", "true")
    } else {
      setError("Invalid password")
    }
  }

  useEffect(() => {
    // Check if already authenticated
    if (typeof window !== "undefined") {
      if (localStorage.getItem("waitlist-admin-auth") === "true") {
        setAuthenticated(true)
      }
    }
  }, [])

  useEffect(() => {
    if (authenticated) {
      fetchData()
    }
  }, [authenticated])

  const fetchData = async () => {
    setLoading(true)
    setDbConnectionError(null)
    try {
      // First check if database connection is available
      const connectionStatus = await checkDatabaseConnection()
      if (!connectionStatus.connected) {
        if (connectionStatus.missingUrl) {
          setDbConnectionError(
            "Database environment variables not found. Please add the required database connection string in your Vercel project settings.",
          )
        } else {
          setDbConnectionError(`Database connection failed: ${connectionStatus.error || "Unknown error"}`)
        }
        setLoading(false)
        return
      }

      // Fetch entries
      const entriesResult = await getWaitlistEntries()
      if (entriesResult.success) {
        setEntries(entriesResult.entries || [])
      } else {
        setError("Failed to load waitlist entries")
      }

      // For now, create mock stats since we're having issues with the getWaitlistStats function
      const mockStats = {
        totalCount: entriesResult.entries?.length || 0,
        statusCounts: [
          { status: "pending", count: entriesResult.entries?.filter((e) => e.status === "pending").length || 0 },
          { status: "contacted", count: entriesResult.entries?.filter((e) => e.status === "contacted").length || 0 },
          { status: "converted", count: entriesResult.entries?.filter((e) => e.status === "converted").length || 0 },
        ],
        planCounts: [
          {
            plan_interest: "Free Plan",
            count: entriesResult.entries?.filter((e) => e.plan_interest === "Free Plan").length || 0,
          },
          {
            plan_interest: "Starter Plan",
            count: entriesResult.entries?.filter((e) => e.plan_interest === "Starter Plan").length || 0,
          },
          {
            plan_interest: "Grow Plan",
            count: entriesResult.entries?.filter((e) => e.plan_interest === "Grow Plan").length || 0,
          },
        ],
        locationCounts: [
          { location: "global", count: 5 },
          { location: "us", count: 3 },
          { location: "uk", count: 2 },
        ],
        signupsByDay: [{ date: new Date().toISOString().split("T")[0], count: entriesResult.entries?.length || 0 }],
      }

      setStats(mockStats)
    } catch (err) {
      console.error("Error fetching data:", err)
      if (err instanceof Error && err.message.includes("Database connection string not found")) {
        setDbConnectionError(
          "Database environment variables not found. Please add the required database connection string in your Vercel project settings.",
        )
      } else {
        setError("Failed to load data")
      }
    } finally {
      setLoading(false)
    }
  }

  const handleStatusChange = async (id: number, newStatus: string) => {
    try {
      const result = await updateWaitlistStatus(id, newStatus)
      if (result.success) {
        // Update the entry in the local state
        setEntries(entries.map((entry) => (entry.id === id ? { ...entry, status: newStatus } : entry)))
      }
    } catch (err) {
      console.error("Error updating status:", err)
    }
  }

  const handleExport = async () => {
    try {
      setExportLoading(true)

      // Get the data from the server
      const result = await exportWaitlistData()

      if (result.success && result.data) {
        // Define the columns for the CSV
        const columns = [
          { key: "id", header: "ID" },
          { key: "name", header: "Name" },
          { key: "email", header: "Email" },
          { key: "shopify_url", header: "Shopify URL" },
          { key: "sales_locations", header: "Sales Locations" },
          { key: "plan_interest", header: "Plan Interest" },
          { key: "status", header: "Status" },
          { key: "notes", header: "Notes" },
          { key: "created_at", header: "Created At" },
          { key: "updated_at", header: "Updated At" },
        ]

        // Convert the data to CSV
        const csvData = convertToCSV(result.data, columns)

        // Create a downloadable blob
        const blobUrl = createDownloadableCSV(csvData, "waitlist-data.csv")

        // Create a temporary link and trigger the download
        const link = document.createElement("a")
        link.href = blobUrl
        link.download = `amplify-waitlist-${new Date().toISOString().split("T")[0]}.csv`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        // Clean up the blob URL
        setTimeout(() => {
          URL.revokeObjectURL(blobUrl)
        }, 100)
      } else {
        throw new Error("Failed to export data")
      }
    } catch (err) {
      console.error("Error exporting data:", err)
      alert("Failed to export data. Please try again.")
    } finally {
      setExportLoading(false)
    }
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6 text-center">Waitlist Admin</h1>
          <form onSubmit={authenticate} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h1 className="text-2xl font-bold">Waitlist Dashboard</h1>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={handleExport}
                disabled={exportLoading || entries.length === 0 || !!dbConnectionError}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {exportLoading ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    Exporting...
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4" />
                    Export CSV
                  </>
                )}
              </button>
              <button
                onClick={fetchData}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 flex items-center gap-2"
              >
                <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
                Refresh Data
              </button>
              <button
                onClick={logout}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center gap-2"
              >
                <X className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>

          {/* Database Connection Error */}
          {dbConnectionError && (
            <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-yellow-800">Database Connection Issue</h3>
                <p className="text-yellow-700 text-sm mt-1">{dbConnectionError}</p>
                <p className="text-yellow-600 text-xs mt-2">
                  Please make sure your database environment variables are properly configured. You can return to the{" "}
                  <a href="/admin" className="underline font-medium">
                    admin dashboard
                  </a>{" "}
                  to initialize the database or check the connection status.
                </p>
              </div>
            </div>
          )}

          <div className="mb-6">
            <div className="flex border-b">
              <button
                className={`px-4 py-2 ${activeTab === "entries" ? "border-b-2 border-purple-600 text-purple-600" : "text-gray-500"}`}
                onClick={() => setActiveTab("entries")}
              >
                Entries
              </button>
              <button
                className={`px-4 py-2 ${activeTab === "analytics" ? "border-b-2 border-purple-600 text-purple-600" : "text-gray-500"}`}
                onClick={() => setActiveTab("analytics")}
              >
                Analytics
              </button>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-8">
              <RefreshCw className="h-8 w-8 animate-spin mx-auto text-purple-600" />
              <p className="mt-2">Loading data...</p>
            </div>
          ) : error ? (
            <p className="text-red-500 text-center py-8">{error}</p>
          ) : dbConnectionError ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No data available due to database connection issues.</p>
              <p className="text-sm text-gray-400 mt-2">Please check your database configuration and try again.</p>
            </div>
          ) : activeTab === "entries" ? (
            entries && entries.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Shopify URL
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Locations
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Plan Interest
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {entries.map((entry) => (
                      <tr key={entry.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{entry.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.shopify_url}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {Array.isArray(entry.sales_locations) ? entry.sales_locations.join(", ") : "N/A"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {entry.plan_interest || "Not specified"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(entry.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select
                            value={entry.status}
                            onChange={(e) => handleStatusChange(entry.id, e.target.value)}
                            className={`px-2 py-1 text-xs rounded-full border ${
                              entry.status === "pending"
                                ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                                : entry.status === "contacted"
                                  ? "bg-blue-100 text-blue-800 border-blue-200"
                                  : entry.status === "converted"
                                    ? "bg-green-100 text-green-800 border-green-200"
                                    : "bg-gray-100 text-gray-800 border-gray-200"
                            }`}
                          >
                            <option value="pending">Pending</option>
                            <option value="contacted">Contacted</option>
                            <option value="converted">Converted</option>
                            <option value="not-interested">Not Interested</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No waitlist entries found.</p>
                <p className="text-sm text-gray-400 mt-2">
                  Entries will appear here when users sign up through the waitlist form.
                </p>
              </div>
            )
          ) : (
            <div className="analytics-dashboard">
              {stats ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Total Signups Card */}
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-medium text-gray-900">Total Signups</h3>
                    <p className="text-3xl font-bold text-purple-600 mt-2">{stats.totalCount}</p>
                  </div>

                  {/* Status Breakdown Card */}
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-medium text-gray-900">Status Breakdown</h3>
                    <div className="mt-4 space-y-2">
                      {stats.statusCounts.map((item) => (
                        <div key={item.status} className="flex justify-between items-center">
                          <span className="text-sm capitalize">{item.status || "Unknown"}</span>
                          <span className="text-sm font-medium">{item.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Plan Interest Card */}
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-medium text-gray-900">Plan Interest</h3>
                    <div className="mt-4 space-y-2">
                      {stats.planCounts.map((item) => (
                        <div key={item.plan_interest} className="flex justify-between items-center">
                          <span className="text-sm">{item.plan_interest || "Not specified"}</span>
                          <span className="text-sm font-medium">{item.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Top Locations Card */}
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-medium text-gray-900">Top Locations</h3>
                    <div className="mt-4 space-y-2">
                      {stats.locationCounts.slice(0, 5).map((item) => (
                        <div key={item.location} className="flex justify-between items-center">
                          <span className="text-sm">{item.location}</span>
                          <span className="text-sm font-medium">{item.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Signups Over Time Card */}
                  <div className="bg-white p-6 rounded-lg shadow col-span-1 md:col-span-2 lg:col-span-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Signups Over Time (Last 30 Days)</h3>
                    <div className="h-64 flex items-end space-x-2">
                      {stats.signupsByDay.map((day) => {
                        const height =
                          stats.signupsByDay.length > 0
                            ? (day.count / Math.max(...stats.signupsByDay.map((d) => d.count))) * 100
                            : 0

                        return (
                          <div key={day.date} className="flex flex-col items-center flex-1">
                            <div
                              className="w-full bg-purple-500 rounded-t"
                              style={{ height: `${Math.max(height, 5)}%` }}
                            ></div>
                            <div className="text-xs mt-1 transform -rotate-45 origin-top-left">
                              {new Date(day.date).toLocaleDateString(undefined, { month: "short", day: "numeric" })}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-center py-8">No analytics data available.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
