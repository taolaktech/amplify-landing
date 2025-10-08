"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

interface StructuredDataProps {
  type?: "Organization" | "WebSite" | "Product" | "FAQPage" | "Article"
  data?: Record<string, any>
}

export default function StructuredData({ type = "WebSite", data = {} }: StructuredDataProps) {
  const pathname = usePathname()
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://useamplify.ai"

  // Use useEffect to ensure this only runs on the client
  useEffect(() => {
    // This is just to ensure the component is marked as client-side
  }, [])

  // Default structured data for the website
  const defaultWebsiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteUrl,
    name: "Amplify - AI-Powered Ad Automation for Shopify",
    description:
      "Automate your ad campaigns and amplify your sales with AI-powered optimization for Shopify merchants.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }

  // Default structured data for the organization
  const defaultOrganizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: siteUrl,
    name: "Amplify",
    logo: `${siteUrl}/amplify-logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "909 Reinli Street",
      addressLocality: "Austin",
      addressRegion: "TX",
      postalCode: "78751",
      addressCountry: "US",
    },
    sameAs: [
      "https://twitter.com/useamplify",
      "https://www.instagram.com/useamplify",
      "https://www.linkedin.com/company/useamplify",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "",
      contactType: "customer service",
      email: "support@useamplify.ai",
      availableLanguage: "English",
    },
  }

  // Default structured data for the product
  const defaultProductData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Amplify",
    operatingSystem: "Web",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1000",
    },
  }

  // Default structured data for FAQ page
  const defaultFAQData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Amplify?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Amplify is an AI-powered ad automation platform designed specifically for Shopify merchants. It helps you create, manage, and optimize ad campaigns across multiple platforms to maximize your ROAS (Return on Ad Spend) and grow your sales.",
        },
      },
      {
        "@type": "Question",
        name: "How does Amplify work with my Shopify store?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Amplify integrates directly with your Shopify store through a simple one-click installation. Once connected, it automatically imports your products, analyzes your store data, and uses AI to create and optimize ad campaigns tailored to your specific business needs.",
        },
      },
      {
        "@type": "Question",
        name: "Which ad platforms does Amplify support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Amplify currently supports Facebook, Instagram, Google, TikTok, and Pinterest. We're constantly adding more platforms to help you reach your customers wherever they are.",
        },
      },
    ],
  }

  let structuredData = {}

  switch (type) {
    case "Organization":
      structuredData = { ...defaultOrganizationData, ...data }
      break
    case "Product":
      structuredData = { ...defaultProductData, ...data }
      break
    case "FAQPage":
      structuredData = { ...defaultFAQData, ...data }
      break
    case "WebSite":
    default:
      structuredData = { ...defaultWebsiteData, ...data }
      break
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
