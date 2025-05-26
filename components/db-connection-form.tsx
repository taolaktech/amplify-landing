"use client"

import type React from "react"

import { useState } from "react"
import { AlertTriangle, CheckCircle, Database } from "lucide-react"

export default function DbConnectionForm() {
  const [dbUrl, setDbUrl] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!dbUrl.trim()) {
      setResult({
        success: false,
        message: "Please enter a database URL",
      })
      return
    }

    setIsSubmitting(true)
    setResult(null)

    try {
      const response = await fetch("/api/set-db-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: dbUrl }),
      })

      const data = await response.json()

      setResult({
        success: data.success,
        message: data.success ? data.message : data.error || "Failed to set database URL",
      })

      if (data.success) {
        // Clear the form on success
        setDbUrl("")

        // Reload the page after a short delay to refresh the connection status
        setTimeout(() => {
          window.location.reload()
        }, 1500)
      }
    } catch (error) {
      setResult({
        success: false,
        message: "An error occurred while setting the database URL",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <h3 className="text-lg font-medium flex items-center gap-2">
        <Database className="h-5 w-5 text-gray-600" />
        Set Database Connection
      </h3>

      <p className="mt-2 text-sm text-gray-600">
        Enter your Neon PostgreSQL connection string to connect to your database.
      </p>

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="space-y-2">
          <label htmlFor="dbUrl" className="block text-sm font-medium text-gray-700">
            Database URL
          </label>
          <input
            id="dbUrl"
            type="text"
            value={dbUrl}
            onChange={(e) => setDbUrl(e.target.value)}
            placeholder="postgres://username:password@hostname/database"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-sm"
          />
          <p className="text-xs text-gray-500">
            Example: postgres://neondb_owner:password@ep-example-12345.us-east-1.aws.neon.tech/neondb
          </p>
        </div>

        {result && (
          <div
            className={`mt-3 p-2 rounded-md ${result.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"} flex items-center gap-2`}
          >
            {result.success ? (
              <CheckCircle className="h-4 w-4 flex-shrink-0" />
            ) : (
              <AlertTriangle className="h-4 w-4 flex-shrink-0" />
            )}
            <span className="text-sm">{result.message}</span>
          </div>
        )}

        <div className="mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:bg-purple-400"
          >
            {isSubmitting ? "Setting..." : "Set Database URL"}
          </button>
        </div>
      </form>

      <div className="mt-4 text-xs text-gray-500">
        <p>
          Note: This sets the database URL for the current session only. For production use, add the NEON_DATABASE_URL
          environment variable to your Vercel project.
        </p>
      </div>
    </div>
  )
}
