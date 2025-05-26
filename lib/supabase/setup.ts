"use server"

import { createClient } from "./server"

export async function setupWaitlistTable() {
  const supabase = createClient()

  // SQL to create the waitlist table and related functions
  const createTableSQL = `
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

    -- Add a function to update the updated_at timestamp
    CREATE OR REPLACE FUNCTION update_updated_at_column()
    RETURNS TRIGGER AS $$
    BEGIN
      NEW.updated_at = NOW();
      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;

    -- Create a trigger to automatically update the updated_at column
    DROP TRIGGER IF EXISTS update_waitlist_updated_at ON waitlist;
    CREATE TRIGGER update_waitlist_updated_at
    BEFORE UPDATE ON waitlist
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
  `

  // Create a stored procedure to create the waitlist table
  const { error: createProcedureError } = await supabase.rpc("exec_sql", {
    sql: `
    CREATE OR REPLACE FUNCTION create_waitlist_table()
    RETURNS void AS $$
    BEGIN
      ${createTableSQL}
    END;
    $$ LANGUAGE plpgsql;
  `,
  })

  if (createProcedureError) {
    console.error("Error creating stored procedure:", createProcedureError)
    return { success: false, error: createProcedureError }
  }

  return { success: true }
}
