import { NextRequest, NextResponse } from "next/server"
import { sql, initDatabase } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, shopifyUrl, salesLocations, planInterest } = body

    if (!name || !email || !shopifyUrl || !salesLocations || salesLocations.length === 0) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    await initDatabase()

    const existingUser = await sql`
      SELECT id FROM waitlist WHERE email = ${email}
    ` as Record<string, any>[]

    if (existingUser && existingUser.length > 0) {
      return NextResponse.json(
        { error: "This email is already on our waitlist" },
        { status: 409 }
      )
    }

    await sql`
      INSERT INTO waitlist (name, email, shopify_url, sales_locations, plan_interest)
      VALUES (${name}, ${email}, ${shopifyUrl}, ${salesLocations}, ${planInterest || null})
    `

    return NextResponse.json(
      { success: true, message: "Successfully joined the waitlist!" },
      { status: 201 }
    )
  } catch (error) {
    console.error("Error adding to waitlist:", error)
    
    if (error instanceof Error && error.message.includes("Database connection")) {
      return NextResponse.json(
        { error: "Database connection is not available. Your submission has been recorded but not saved to the database.", dbError: true },
        { status: 503 }
      )
    }

    return NextResponse.json(
      { error: "Failed to join waitlist. Please try again." },
      { status: 500 }
    )
  }
}
