import type React from "react"
import type { Metadata } from "next"
import { eudoxusSans } from "@/app/fonts"
import "@/app/globals.css"

export const metadata: Metadata = {
  title: "Admin Dashboard - Amplify",
  description: "Admin dashboard for Amplify waitlist management",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={eudoxusSans.variable}>
      <body className="bg-gray-100 min-h-screen">{children}</body>
    </html>
  )
}
