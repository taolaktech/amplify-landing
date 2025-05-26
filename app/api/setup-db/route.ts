import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function GET() {
  try {
    const supabase = createClient()

    // SQL to create the waitlist table
    const sql = `
      -- Create waitlist table if it doesn't exist
      CREATE TABLE IF NOT EXISTS waitlist (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        shopify_url TEXT NOT NULL,
        sales_locations TEXT[] NOT NULL,
        plan_interest TEXT,
        status TEXT DEFAULT 'pending',
        notes TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );

      -- Create index on email for faster lookups
      CREATE INDEX IF NOT EXISTS waitlist_email_idx ON waitlist(email);
    `

    // Execute the SQL directly
    const { error } = await supabase.rpc("exec_sql", { sql })

    if (error) {
      console.error("Error setting up database:", error)
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "Database setup completed successfully" })
  } catch (error) {
    console.error("Error in setup-db route:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
