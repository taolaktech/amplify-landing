import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import type { Metadata } from "next"

// Define metadata for the page using Next.js App Router metadata API
export const metadata: Metadata = {
  title: "Amplify Blog - E-commerce Marketing Insights & Strategies",
  description:
    "Discover the latest e-commerce marketing strategies, Shopify optimization tips, and advertising insights to grow your online store.",
  openGraph: {
    title: "Amplify Blog - E-commerce Marketing Insights & Strategies",
    description:
      "Discover the latest e-commerce marketing strategies, Shopify optimization tips, and advertising insights to grow your online store.",
    images: [
      {
        url: "/amplify-share-logo.png",
        width: 800,
        height: 400,
        alt: "Amplify logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Amplify Blog - E-commerce Marketing Insights & Strategies",
    description:
      "Discover the latest e-commerce marketing strategies, Shopify optimization tips, and advertising insights to grow your online store.",
    images: ["/amplify-share-logo.png"],
  },
}

// Sample blog posts data
const blogPosts = [
  {
    id: "maximizing-roas-shopify",
    title: "Maximizing ROAS for Your Shopify Store: A Complete Guide",
    excerpt:
      "Learn proven strategies to maximize your Return on Ad Spend (ROAS) for your Shopify store with AI-powered optimization techniques.",
    date: "May 10, 2023",
    author: "Marketing Team",
    category: "Marketing Strategy",
    image: "/placeholder-d8h4b.png",
    readTime: "8 min read",
  },
  {
    id: "ai-powered-ad-campaigns",
    title: "How AI is Revolutionizing E-commerce Ad Campaigns",
    excerpt:
      "Discover how artificial intelligence is transforming the way Shopify merchants create, manage, and optimize their advertising campaigns.",
    date: "April 28, 2023",
    author: "Tech Team",
    category: "AI Technology",
    image: "/placeholder-ztwkw.png",
    readTime: "6 min read",
  },
  {
    id: "multi-platform-advertising",
    title: "Multi-Platform Advertising: Reaching Customers Everywhere",
    excerpt:
      "Why limiting your advertising to a single platform is holding back your Shopify store, and how to effectively expand your reach.",
    date: "April 15, 2023",
    author: "Marketing Team",
    category: "Advertising",
    image: "/placeholder-y79ss.png",
    readTime: "5 min read",
  },
  {
    id: "shopify-marketing-automation",
    title: "The Ultimate Guide to Marketing Automation for Shopify",
    excerpt:
      "Step-by-step guide to implementing marketing automation for your Shopify store to save time and increase conversions.",
    date: "March 30, 2023",
    author: "E-commerce Team",
    category: "Automation",
    image: "/placeholder-z6jgw.png",
    readTime: "10 min read",
  },
]

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Blog Header */}
        <section className="bg-gradient-to-b from-purple-50 to-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Amplify Blog</h1>
              <p className="mt-4 text-xl text-gray-600">
                Insights, strategies, and tips to grow your Shopify store with smart advertising
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="h-48 w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-purple-600">{post.category}</p>
                      <Link href={`/blog/${post.id}`} className="mt-2 block">
                        <h3 className="text-xl font-semibold text-gray-900 hover:text-purple-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                      </Link>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <span className="sr-only">{post.author}</span>
                        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                          {post.author.charAt(0)}
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{post.author}</p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <time dateTime={post.date}>{post.date}</time>
                          <span aria-hidden="true">&middot;</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-purple-600 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white">Subscribe to our newsletter</h2>
              <p className="mt-4 text-lg text-purple-100">
                Get the latest e-commerce marketing insights delivered to your inbox
              </p>
              <form className="mt-8 sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-700"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-purple-800 px-5 py-3 text-base font-medium text-white hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-700"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
