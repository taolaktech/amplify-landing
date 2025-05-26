import { Database, ExternalLink } from "lucide-react"

export default function DbConfigGuide() {
  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <h3 className="text-lg font-medium flex items-center gap-2">
        <Database className="h-5 w-5 text-gray-600" />
        Database Configuration Guide
      </h3>

      <div className="mt-4 space-y-4 text-sm">
        <p>To properly set up your database connection, follow these steps:</p>

        <div className="space-y-2">
          <h4 className="font-medium">Option 1: Set Environment Variables in Vercel (Recommended)</h4>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Go to your Vercel project dashboard</li>
            <li>Navigate to Settings → Environment Variables</li>
            <li>
              Add a new environment variable with the name{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded">NEON_DATABASE_URL</code>
            </li>
            <li>Set the value to your Neon PostgreSQL connection string</li>
            <li>Save and redeploy your application</li>
          </ol>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">Option 2: Use the Connection Form (Temporary)</h4>
          <p>
            You can use the form below to set the database URL for the current session. This is useful for testing but
            will not persist across deployments.
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">Connection String Format</h4>
          <p>Your Neon PostgreSQL connection string should look like this:</p>
          <pre className="bg-gray-100 p-2 rounded-md overflow-x-auto text-xs">
            postgres://username:password@hostname/database?sslmode=require
          </pre>
          <p>Example:</p>
          <pre className="bg-gray-100 p-2 rounded-md overflow-x-auto text-xs">
            postgres://neondb_owner:npg_VyLPKW8xp6qR@ep-frosty-sea-a49qa1bp-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require
          </pre>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">Troubleshooting</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Make sure SSL mode is set to <code className="bg-gray-100 px-1 py-0.5 rounded">require</code>
            </li>
            <li>Check that your IP is allowed in the Neon database settings</li>
            <li>Verify that the database user has the necessary permissions</li>
            <li>For migrations, use a direct (non-pooled) connection string</li>
          </ul>
        </div>

        <div className="mt-4">
          <a
            href="https://neon.tech/docs/connect/connect-from-any-app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-800 flex items-center gap-1"
          >
            <span>Neon Connection Documentation</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  )
}
