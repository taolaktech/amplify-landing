import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { eudoxusSans } from "./fonts"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "./analytics"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Amplify - AI-Powered Marketing Automation for Shopify",
  description:
    "Launch, manage, and optimize ad campaigns across multiple platforms with minimal manual intervention using Amplify's proprietary DAO AI technology.",
  keywords: "AI marketing, Shopify automation, ad optimization, e-commerce marketing, digital advertising",
  authors: [{ name: "Amplify Team" }],
  creator: "Amplify",
  publisher: "Amplify",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://useamplify.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Amplify - AI-Powered Marketing Automation for Shopify",
    description:
      "Launch, manage, and optimize ad campaigns across multiple platforms with minimal manual intervention using Amplify's proprietary DAO AI technology.",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://useamplify.ai",
    siteName: "Amplify",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amplify - AI-Powered Marketing Automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amplify - AI-Powered Marketing Automation for Shopify",
    description:
      "Launch, manage, and optimize ad campaigns across multiple platforms with minimal manual intervention using Amplify's proprietary DAO AI technology.",
    images: ["/og-image.png"],
    creator: "@useamplify",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
    generator: 'v0.dev'
}

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
    </div>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/EudoxusSans-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/EudoxusSans-Medium.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/EudoxusSans-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#8B5CF6" />
      </head>
      <body className={`${eudoxusSans.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <Suspense fallback={<LoadingFallback />}>
            <Analytics />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
