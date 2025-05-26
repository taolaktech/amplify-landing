import { NextResponse } from "next/server"

export async function GET() {
  // Collect all environment variables related to database connections
  // without exposing the actual connection strings
  const dbEnvVars = Object.keys(process.env)
    .filter(
      (key) => key.includes("DATABASE") || key.includes("POSTGRES") || key.includes("NEON") || key.includes("SUPABASE"),
    )
    .reduce(
      (acc, key) => {
        acc[key] = process.env[key] ? `${process.env[key]?.substring(0, 10)}...` : "Not set"
        return acc
      },
      {} as Record<string, string>,
    )

  // Check if we have any database connection strings
  const hasDatabaseUrl =
    !!process.env.NEON_NEON_DATABASE_URL || !!process.env.NEON_NEON_NEON_DATABASE_URL || !!process.env.POSTGRES_URL

  return NextResponse.json({
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "unknown",
    hasDatabaseUrl,
    databaseEnvironmentVariables: dbEnvVars,
    runtimeInfo: {
      nodejs: process.version,
      platform: process.platform,
      arch: process.arch,
    },
  })
}
