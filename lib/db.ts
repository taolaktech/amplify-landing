import { neon } from "@neondatabase/serverless"

// Get the database URL from environment variables
export const getDatabaseUrl = () => {
  // Check all possible environment variable names
  const possibleEnvVars = [
    "NEON_DATABASE_URL", // Add this as the first option to check
    "POSTGRES_URL",
    "NEON_DATABASE_URL",
    "NEON_NEON_DATABASE_URL",
    "NEON_NEON_NEON_DATABASE_URL",
    "NEON_NEON_NEON_NEON_DATABASE_URL",
  ]

  // Log which environment variables are available (without exposing values)
  console.log("Available database environment variables:")
  possibleEnvVars.forEach((varName) => {
    console.log(`- ${varName}: ${process.env[varName] ? "Set" : "Not set"}`)
  })

  // Find the first available database URL
  const envVarName = possibleEnvVars.find((varName) => !!process.env[varName])

  if (!envVarName) {
    console.warn("No database URL found in environment variables")

    // IMPORTANT: For development/testing, you can uncomment this line to use a hardcoded connection string
    // return "postgres://neondb_owner:npg_VyLPKW8xp6qR@ep-frosty-sea-a49qa1bp-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require"

    return null
  }

  return process.env[envVarName]
}

// Create SQL query executor using the Neon connection string - but only when needed
let sqlInstance: ReturnType<typeof neon> | null = null
let dbConnectionFailed = false

export const sql = (...args: Parameters<ReturnType<typeof neon>>) => {
  if (dbConnectionFailed) {
    throw new Error("Database connection previously failed")
  }

  if (!sqlInstance) {
    try {
      const url = getDatabaseUrl()
      if (!url) {
        dbConnectionFailed = true
        throw new Error("Database connection string not found")
      }

      console.log("Connecting to database with URL:", url.substring(0, 10) + "..." + url.substring(url.indexOf("@")))
      sqlInstance = neon(url)
    } catch (error) {
      dbConnectionFailed = true
      console.error("Failed to initialize database connection:", error)
      throw error
    }
  }
  return sqlInstance(...args)
}

// Helper function to initialize the database
export async function initDatabase() {
  try {
    console.log("Attempting to initialize database...")

    // Check if database URL is available
    const url = getDatabaseUrl()
    if (!url) {
      return {
        success: false,
        error: "Database connection string not found",
        missingUrl: true,
      }
    }

    // Create waitlist table if it doesn't exist
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
    console.log("Waitlist table created or already exists")

    // Create index on email for faster lookups
    try {
      await sql`CREATE INDEX IF NOT EXISTS waitlist_email_idx ON waitlist(email)`
      console.log("Email index created or already exists")
    } catch (error) {
      console.error("Error creating email index:", error)
      // Continue even if index creation fails
    }

    // Create index on created_at for faster date-based queries
    try {
      await sql`CREATE INDEX IF NOT EXISTS waitlist_created_at_idx ON waitlist(created_at)`
      console.log("Created_at index created or already exists")
    } catch (error) {
      console.error("Error creating created_at index:", error)
      // Continue even if index creation fails
    }

    console.log("Database initialized successfully")
    return { success: true }
  } catch (error) {
    console.error("Error initializing database:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}

// Helper function to check if database connection is available
export async function checkDatabaseConnection() {
  try {
    // First check if we have a database URL
    const url = getDatabaseUrl()
    if (!url) {
      return {
        connected: false,
        error: "Database connection string not found",
        missingUrl: true,
      }
    }

    // Then try a simple query
    await sql`SELECT 1`
    return { connected: true }
  } catch (error) {
    console.error("Database connection check failed:", error)
    return {
      connected: false,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}

// Helper function to get waitlist stats
export async function getWaitlistStats() {
  try {
    // Get total count
    const totalCountResult = await sql`SELECT COUNT(*) as count FROM waitlist`
    const [totalCountRow] = totalCountResult as Record<string, any>[]

    // Get count by status
    const statusCounts = await sql`
      SELECT status, COUNT(*) as count 
      FROM waitlist 
      GROUP BY status
    `

    // Get count by plan interest
    const planCounts = await sql`
      SELECT plan_interest, COUNT(*) as count 
      FROM waitlist 
      WHERE plan_interest IS NOT NULL
      GROUP BY plan_interest
    `

    // Get count by location
    const locationCounts = await sql`
      SELECT unnest(sales_locations) as location, COUNT(*) as count 
      FROM waitlist 
      GROUP BY location
    `

    // Get signups by day for the last 30 days
    const signupsByDay = await sql`
      SELECT 
        DATE(created_at) as date, 
        COUNT(*) as count 
      FROM waitlist 
      WHERE created_at > NOW() - INTERVAL '30 days'
      GROUP BY DATE(created_at)
      ORDER BY date
    `

    return {
      totalCount: totalCountRow?.count || 0,
      statusCounts: statusCounts || [],
      planCounts: planCounts || [],
      locationCounts: locationCounts || [],
      signupsByDay: signupsByDay || [],
    }
  } catch (error) {
    console.error("Error getting waitlist stats:", error)
    // Return default values if query fails
    return {
      totalCount: 0,
      statusCounts: [],
      planCounts: [],
      locationCounts: [],
      signupsByDay: [],
    }
  }
}
