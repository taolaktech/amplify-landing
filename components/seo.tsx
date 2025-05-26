"use client"

import { useEffect } from "react"
import Head from "next/head"
import { usePathname } from "next/navigation"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  ogType?: string
  twitterCard?: string
  canonicalUrl?: string
  noIndex?: boolean
}

export default function SEO({
  title = "Amplify - AI-Powered Ad Automation for Shopify Merchants",
  description = "Automate your ad campaigns and amplify your sales with AI-powered optimization. Maximize ROAS and grow your Shopify store with smart, automated advertising.",
  keywords = [
    "Shopify ad automation",
    "ecommerce marketing",
    "AI ad optimization",
    "Shopify marketing",
    "ROAS optimization",
    "automated ad campaigns",
    "Shopify ads",
    "ecommerce advertising",
    "AI marketing platform",
    "ad spend optimization",
  ],
  ogImage = "/amplify-share-thumbnail.png",
  ogType = "website",
  twitterCard = "summary",
  canonicalUrl,
  noIndex = false,
}: SEOProps) {
  const pathname = usePathname()
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://useamplify.ai"
  const fullUrl = canonicalUrl || `${siteUrl}${pathname}`

  // Use useEffect to ensure this only runs on the client
  useEffect(() => {
    // This is just to ensure the component is marked as client-side
  }, [])

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="400" />
      <meta property="og:image:alt" content="Amplify logo" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      <meta name="twitter:image:alt" content="Amplify logo" />

      {/* Robots */}
      {noIndex ? <meta name="robots" content="noindex, nofollow" /> : <meta name="robots" content="index, follow" />}

      {/* Additional SEO tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="application-name" content="Amplify" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Amplify" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Apple specific */}
      <link rel="apple-touch-icon" href="/amplify-logo.png" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
    </Head>
  )
}
