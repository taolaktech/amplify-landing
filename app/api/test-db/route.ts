import { NextResponse } from "next/server"
import { sql } from "@/lib/db"

export async function GET() {
  try {
    console.log("Testing database connection...")

    // Log available environment variables (without exposing actual values)
    const envVars = {
      POSTGRES_URL: process.env.POSTGRES_URL ? "Set" : "Not set",
      NEON_NEON_DATABASE_URL: process.env.NEON_DATABASE_URL ? "Set" : "Not set",
      NEON_NEON_DATABASE_URL: process.env.NEON_NEON_DATABASE_URL ? "Set" : "Not set",
      NEON_NEON_NEON_DATABASE_URL: process.env.NEON_NEON_NEON_DATABASE_URL ? "Set" : "Not set",
      // Add other potential database URLs
      POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL ? "Set" : "Not set",
      NEON_POSTGRES_URL: process.env.NEON_POSTGRES_URL ? "Set" : "Not set",
    }

    console.log("Environment variables status:", envVars)

    // Test the database connection with a simple query
    const result = await sql`SELECT NOW() as time`
    console.log("Database query successful:", result)

    return NextResponse.json({
      success: true,
      message: "Database connection successful",
      time: result[0]?.time,
      environmentVariables: envVars,
    })
  } catch (error) {
    console.error("Database connection error:", error)

    // Prepare error details for debugging
    const errorDetails = {
      message: error instanceof Error ? error.message : "Unknown error",
      stack: process.env.NODE_ENV === "development" && error instanceof Error ? error.stack : undefined,
      type: error instanceof Error ? error.constructor.name : typeof error,
    }

    return NextResponse.json(
      {
        success: false,
        error: "Database connection failed",
        details: errorDetails,
        environmentVariablesStatus: {
          POSTGRES_URL: process.env.POSTGRES_URL ? "Set" : "Not set",
          NEON_DATABASE_URL: process.env.NEON_DATABASE_URL ? "Set" : "Not set",
          NEON_NEON_DATABASE_URL: process.env.NEON_NEON_DATABASE_URL ? "Set" : "Not set",
          NEON_NEON_NEON_DATABASE_URL: process.env.NEON_NEON_NEON_DATABASE_URL ? "Set" : "Not set",
        },
      },
      { status: 500 },
    )
  }
}
