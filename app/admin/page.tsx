"use client"

import type React from "react"

import Link from "next/link"
import { useState, useEffect } from "react"
import { initDatabase, checkDatabaseConnection } from "@/lib/db"
import { useRouter } from "next/navigation"
import DbConnectionForm from "@/components/db-connection-form"
import DbConfigGuide from "@/components/db-config-guide"

export default function AdminPage() {
  const [initializing, setInitializing] = useState(false)
  const [initResult, setInitResult] = useState<{ success: boolean; message: string } | null>(null)
  const [dbStatus, setDbStatus] = useState<{ connected: boolean; error?: string; missingUrl?: boolean } | null>(null)
  const [showDbGuide, setShowDbGuide] = useState(false)

  const router = useRouter()
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Check if already authenticated
    if (typeof window !== "undefined") {
      if (localStorage.getItem("waitlist-admin-auth") === "true") {
        setAuthenticated(true)
      }
    }
  }, [])

  // Only check database connection if authenticated
  useEffect(() => {
    if (authenticated) {
      checkDbConnection()
    }
  }, [authenticated])

  const checkDbConnection = async () => {
    try {
      const status = await checkDatabaseConnection()
      setDbStatus(status)

      // Automatically show the guide if there's a connection issue
      if (!status.connected) {
        setShowDbGuide(true)
      }
    } catch (error) {
      console.error("Error checking database connection:", error)
      setDbStatus({
        connected: false,
        error: error instanceof Error ? error.message : "Unknown error",
      })
      setShowDbGuide(true)
    }
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

  const logout = () => {
    localStorage.removeItem("waitlist-admin-auth")
    setAuthenticated(false)
    // Redirect to admin login page
    router.push("/admin")
  }

  const handleInitDatabase = async () => {
    try {
      setInitializing(true)
      setInitResult(null) // Clear previous results

      console.log("Initializing database from admin page...")
      const result = await initDatabase()
      console.log("Database initialization result:", result)

      if (result.success) {
        setInitResult({ success: true, message: "Database initialized successfully!" })
        // Refresh database connection status
        checkDbConnection()
      } else if (result.missingUrl) {
        setInitResult({
          success: false,
          message: "Database connection string not found. Please add the required environment variables.",
        })
        setShowDbGuide(true)
      } else {
        setInitResult({
          success: false,
          message: `Failed to initialize database: ${result.error || "Unknown error"}`,
        })
      }
    } catch (error) {
      console.error("Error initializing database:", error)
      setInitResult({
        success: false,
        message: `An error occurred: ${error instanceof Error ? error.message : "Unknown error"}`,
      })
    } finally {
      setInitializing(false)
    }
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6 text-center">Amplify Admin</h1>
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
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Amplify Admin</h1>
            <button
              onClick={logout}
              className="px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>

          {/* Database Status */}
          {dbStatus && (
            <div
              className={`p-3 mb-4 rounded-md ${
                dbStatus.connected
                  ? "bg-green-100 text-green-800"
                  : dbStatus.missingUrl
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
              }`}
            >
              {dbStatus.connected ? (
                "✅ Database connection successful"
              ) : dbStatus.missingUrl ? (
                <div>
                  <p>⚠️ Database environment variables not found</p>
                  <p className="text-xs mt-1">
                    Please add the NEON_DATABASE_URL environment variable or use the form below to set it for this
                    session.
                  </p>
                  <button
                    onClick={() => setShowDbGuide(!showDbGuide)}
                    className="text-xs mt-1 text-yellow-800 underline"
                  >
                    {showDbGuide ? "Hide configuration guide" : "Show configuration guide"}
                  </button>
                </div>
              ) : (
                <div>
                  <p>❌ Database connection failed: {dbStatus.error || "Unknown error"}</p>
                  <button onClick={() => setShowDbGuide(!showDbGuide)} className="text-xs mt-1 text-red-800 underline">
                    {showDbGuide ? "Hide configuration guide" : "Show configuration guide"}
                  </button>
                </div>
              )}
            </div>
          )}

          {initResult && (
            <div
              className={`p-3 mb-4 rounded-md ${initResult.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
            >
              {initResult.message}
            </div>
          )}

          <div className="space-y-4">
            <Link
              href="/admin/waitlist"
              className="block w-full py-2 px-4 bg-purple-600 text-white text-center rounded-md hover:bg-purple-700 transition-colors"
            >
              Waitlist Management
            </Link>

            <button
              onClick={handleInitDatabase}
              disabled={initializing}
              className="block w-full py-2 px-4 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400"
            >
              {initializing ? "Initializing..." : "Initialize Database"}
            </button>

            <Link
              href="/"
              className="block w-full py-2 px-4 border border-gray-300 text-gray-700 text-center rounded-md hover:bg-gray-50 transition-colors"
            >
              Back to Website
            </Link>
          </div>

          <div className="mt-6 text-xs text-gray-500 text-center">
            <p>
              Use the "Initialize Database" button if you're setting up the admin dashboard for the first time or if
              you're experiencing database issues.
            </p>
          </div>

          {/* Database Configuration Guide */}
          {showDbGuide && <DbConfigGuide />}

          {/* Database Connection Form */}
          {(!dbStatus || !dbStatus.connected) && <DbConnectionForm />}
        </div>
      </div>
    </div>
  )
}
