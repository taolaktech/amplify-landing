import Head from "next/head"

interface SocialMetaProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export default function SocialMeta({
  title = "Amplify - AI-Powered Ad Automation for Shopify Merchants",
  description = "Automate your ad campaigns and amplify your sales with AI-powered optimization. Maximize ROAS and grow your Shopify store with smart, automated advertising.",
  image = "/amplify-share-thumbnail.png",
  url = "https://useamplify.ai",
}: SocialMetaProps) {
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://useamplify.ai"
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`

  return (
    <Head>
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Shopify merchant using Amplify to grow their business" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content="Shopify merchant using Amplify to grow their business" />
    </Head>
  )
}
