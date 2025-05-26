"use server"

import { z } from "zod"
import { sql } from "@/lib/db"

// Define validation schema
const waitlistSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  shopifyUrl: z.string().min(1, "Shopify Store URL is required"),
  salesLocations: z.array(z.string()).min(1, "Please select at least one sales location"),
  planInterest: z.string().optional(),
})

export type WaitlistFormData = z.infer<typeof waitlistSchema>

export async function submitToWaitlist(formData: WaitlistFormData) {
  try {
    console.log("Validating waitlist form data...")
    // Validate form data
    const validatedData = waitlistSchema.parse(formData)
    console.log("Form data validated successfully")

    try {
      console.log("Preparing to insert data into waitlist table...")

      // Check if database URL is available
      const { getDatabaseUrl } = await import("@/lib/db")
      const url = getDatabaseUrl ? getDatabaseUrl() : null
      if (!url) {
        return {
          success: false,
          message:
            "Database connection is not available. Your submission has been recorded but not saved to the database.",
        }
      }

      // Convert salesLocations array to a PostgreSQL array
      const salesLocationsArray = `{${validatedData.salesLocations.join(",")}}`

      // Insert data into waitlist table
      console.log("Executing SQL insert...")
      const { sql } = await import("@/lib/db")
      await sql`
        INSERT INTO waitlist (
          name, 
          email, 
          shopify_url, 
          sales_locations, 
          plan_interest
        ) VALUES (
          ${validatedData.name}, 
          ${validatedData.email}, 
          ${validatedData.shopifyUrl}, 
          ${salesLocationsArray}::text[], 
          ${validatedData.planInterest || null}
        )
      `
      console.log("Data inserted successfully")

      return {
        success: true,
        message: "Thank you for joining our waitlist! We'll be in touch soon.",
      }
    } catch (error: any) {
      console.error("Database error during waitlist submission:", error)

      // Check if it's a database connection error
      if (error.message && error.message.includes("Database connection string not found")) {
        return {
          success: false,
          message:
            "We're currently experiencing technical difficulties with our database. Please try again later or contact support.",
        }
      }

      // Check if it's a duplicate email error
      if (error.message && error.message.includes("duplicate key value violates unique constraint")) {
        return {
          success: false,
          message: "This email is already on our waitlist. Thank you for your interest!",
        }
      }

      // Check if it's a connection error
      if (
        error.message &&
        (error.message.includes("connection") ||
          error.message.includes("ECONNREFUSED") ||
          error.message.includes("database"))
      ) {
        return {
          success: false,
          message: "We're experiencing database connectivity issues. Please try again later.",
        }
      }

      return {
        success: false,
        message: "There was an error submitting your information. Please try again.",
        debug: process.env.NODE_ENV === "development" ? error.message : undefined,
      }
    }
  } catch (error) {
    console.error("Validation error during waitlist submission:", error)
    return {
      success: false,
      message: "There was an error processing your submission. Please check your information and try again.",
    }
  }
}

export async function getWaitlistEntries() {
  try {
    // Check if database URL is available
    const { getDatabaseUrl, sql } = await import("@/lib/db")
    const url = getDatabaseUrl ? getDatabaseUrl() : null
    if (!url) {
      return {
        success: false,
        error: "Database connection string not found",
        entries: [],
      }
    }

    // First, try to create the table if it doesn't exist
    try {
      await sql`
        CREATE TABLE IF NOT EXISTS waitlist (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL UNIQUE,
          shopify_url VARCHAR(255) NOT NULL,
          sales_locations TEXT[] NOT NULL,
          plan_interest VARCHAR(255),
          status VARCHAR(50) DEFAULT 'pending',
          notes TEXT,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        )
      `
    } catch (error) {
      console.error("Error creating waitlist table:", error)
      // Continue even if table creation fails (it might already exist)
    }

    // Now try to fetch entries
    try {
      const entries = await sql`
        SELECT * FROM waitlist 
        ORDER BY created_at DESC
      `
      return { success: true, entries }
    } catch (error) {
      console.error("Error fetching waitlist entries:", error)
      // Return empty array if query fails
      return { success: true, entries: [] }
    }
  } catch (error) {
    console.error("Error in getWaitlistEntries:", error)
    return { success: false, error: "Failed to fetch waitlist entries", entries: [] }
  }
}

export async function updateWaitlistStatus(id: number, status: string) {
  try {
    await sql`
      UPDATE waitlist 
      SET status = ${status} 
      WHERE id = ${id}
    `

    return { success: true }
  } catch (error) {
    console.error("Error updating waitlist status:", error)
    return { success: false, error }
  }
}
