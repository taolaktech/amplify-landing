import type React from "react"
import Script from 'next/script';
import { GA_TRACKING_ID } from '@/lib/gtag';
import type { Metadata } from "next"
import { eudoxusSans } from "./fonts"
import FontForce from "./font-force"
import FontScript from "./font-script"
import "./globals.css"
import { Analytics } from "./analytics";

export const metadata: Metadata = {
  title: "Amplify - AI-Powered Ad Automation for Shopify Merchants",
  description:
    "Automate your ad campaigns and amplify your sales with AI-powered optimization. Maximize ROAS and grow your Shopify store with smart, automated advertising.",
  keywords:
    "Shopify ad automation, ecommerce marketing, AI ad optimization, Shopify marketing, ROAS optimization, automated ad campaigns, Shopify ads, ecommerce advertising, AI marketing platform, ad spend optimization",
  openGraph: {
    title: "Amplify - AI-Powered Ad Automation for Shopify Merchants",
    description:
      "Automate your ad campaigns and amplify your sales with AI-powered optimization. Maximize ROAS and grow your Shopify store with smart, automated advertising.",
    url: "https://useamplify.ai",
    siteName: "Amplify",
    images: [
      {
        url: "https://useamplify.ai/amplify-share-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Shopify merchant using Amplify to grow their business",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amplify - AI-Powered Ad Automation for Shopify Merchants",
    description:
      "Automate your ad campaigns and amplify your sales with AI-powered optimization. Maximize ROAS and grow your Shopify store with smart, automated advertising.",
    images: ["https://useamplify.ai/amplify-share-thumbnail.png"],
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
  alternates: {
    canonical: "https://useamplify.ai",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={eudoxusSans.variable} style={{ fontFamily: "var(--font-eudoxus-sans), sans-serif" }}>
      <head>
        <link rel="preload" href="/fonts/EudoxusSans-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/EudoxusSans-Medium.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/EudoxusSans-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @font-face {
              font-family: 'Eudoxus Sans';
              src: url('/fonts/EudoxusSans-ExtraLight.ttf') format('truetype');
              font-weight: 200;
              font-style: normal;
              font-display: swap;
            }
            
            @font-face {
              font-family: 'Eudoxus Sans';
              src: url('/fonts/EudoxusSans-Light.ttf') format('truetype');
              font-weight: 300;
              font-style: normal;
              font-display: swap;
            }
            
            @font-face {
              font-family: 'Eudoxus Sans';
              src: url('/fonts/EudoxusSans-Regular.ttf') format('truetype');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }
            
            @font-face {
              font-family: 'Eudoxus Sans';
              src: url('/fonts/EudoxusSans-Medium.ttf') format('truetype');
              font-weight: 500;
              font-style: normal;
              font-display: swap;
            }
            
            @font-face {
              font-family: 'Eudoxus Sans';
              src: url('/fonts/EudoxusSans-Bold.ttf') format('truetype');
              font-weight: 700;
              font-style: normal;
              font-display: swap;
            }
            
            @font-face {
              font-family: 'Eudoxus Sans';
              src: url('/fonts/EudoxusSans-ExtraBold.ttf') format('truetype');
              font-weight: 800;
              font-style: normal;
              font-display: swap;
            }
            
            html, body, * {
              font-family: 'Eudoxus Sans', var(--font-eudoxus-sans), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
            }
          `,
          }}
        />
      </head>
      <body>
        {/* Google Analytics Scripts */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <FontForce />
        <FontScript />
        <Analytics />
        {children}
      </body>
    </html>
  )
}
