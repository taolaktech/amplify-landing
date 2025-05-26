import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json({ success: false, error: "No URL provided" }, { status: 400 })
    }

    // In a real production app, you would validate the URL format and security
    // For this demo, we'll just set it in process.env
    process.env.NEON_DATABASE_URL = url

    // Test the connection
    try {
      const { sql } = await import("@/lib/db")
      await sql`SELECT 1`
      return NextResponse.json({
        success: true,
        message: "Database URL set and connection successful",
      })
    } catch (error) {
      return NextResponse.json(
        {
          success: false,
          error: "Database URL set but connection failed",
          details: error instanceof Error ? error.message : "Unknown error",
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error setting database URL:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to set database URL",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
