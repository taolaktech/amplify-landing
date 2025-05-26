"use server"

import { sql } from "@/lib/db"

export async function exportWaitlistData() {
  try {
    // Check if database connection is available
    const { checkDatabaseConnection } = await import("@/lib/db")
    const connectionStatus = await checkDatabaseConnection()

    if (!connectionStatus.connected) {
      return {
        success: false,
        error: connectionStatus.missingUrl ? "Database connection string not found" : "Database connection failed",
      }
    }

    const entries = await sql`
      SELECT 
        id,
        name,
        email,
        shopify_url,
        sales_locations,
        plan_interest,
        status,
        notes,
        created_at,
        updated_at
      FROM waitlist 
      ORDER BY created_at DESC
    `

    return {
      success: true,
      data: entries.map((entry) => ({
        ...entry,
        created_at: entry.created_at ? new Date(entry.created_at).toISOString() : null,
        updated_at: entry.updated_at ? new Date(entry.updated_at).toISOString() : null,
      })),
    }
  } catch (error) {
    console.error("Error exporting waitlist data:", error)
    return { success: false, error: "Failed to export waitlist data" }
  }
}
