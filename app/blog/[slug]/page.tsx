import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import type { Metadata } from "next"

// Sample blog posts data - same as in blog/page.tsx
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
    content: `
      <h2>Understanding ROAS for Shopify Stores</h2>
      <p>Return on Ad Spend (ROAS) is a critical metric for any e-commerce business. It measures the effectiveness of your advertising campaigns by calculating the revenue generated for every dollar spent on ads. For Shopify merchants, optimizing ROAS is essential for sustainable growth and profitability.</p>
      
      <p>The formula for calculating ROAS is simple:</p>
      <blockquote>ROAS = Revenue from Ad Campaign / Cost of Ad Campaign</blockquote>
      
      <p>For example, if you spend $1,000 on ads and generate $3,000 in revenue, your ROAS is 3:1 (or simply 3). This means you're earning $3 for every $1 spent on advertising.</p>
      
      <h2>Why ROAS Matters for Shopify Merchants</h2>
      <p>In the competitive world of e-commerce, efficient ad spending can make the difference between a thriving business and one that struggles to stay afloat. Here's why ROAS should be a top priority:</p>
      
      <ul>
        <li><strong>Budget Optimization:</strong> Understanding your ROAS helps allocate your marketing budget more effectively across different channels and campaigns.</li>
        <li><strong>Profitability Insights:</strong> ROAS directly impacts your bottom line, helping you identify which products and campaigns are most profitable.</li>
        <li><strong>Competitive Edge:</strong> Merchants who optimize their ROAS can afford to scale their advertising while maintaining profitability, outpacing competitors.</li>
      </ul>
      
      <h2>Strategies to Maximize Your ROAS</h2>
      
      <h3>1. Implement Advanced Audience Targeting</h3>
      <p>The more precisely you can target potential customers, the higher your conversion rates will be. Utilize:</p>
      <ul>
        <li>Lookalike audiences based on your best customers</li>
        <li>Retargeting campaigns for visitors who showed interest but didn't purchase</li>
        <li>Segmentation based on shopping behavior and preferences</li>
      </ul>
      
      <h3>2. Optimize Your Ad Creative and Copy</h3>
      <p>Even with perfect targeting, poor creative will limit your results. Focus on:</p>
      <ul>
        <li>High-quality product images that showcase benefits</li>
        <li>Compelling copy that addresses customer pain points</li>
        <li>Clear calls-to-action that guide the customer journey</li>
        <li>A/B testing different versions to identify winners</li>
      </ul>
      
      <h3>3. Leverage AI for Campaign Optimization</h3>
      <p>Artificial intelligence can analyze patterns and optimize campaigns faster and more effectively than manual management. AI can help:</p>
      <ul>
        <li>Automatically adjust bids based on conversion probability</li>
        <li>Identify the best-performing ad placements</li>
        <li>Optimize ad delivery timing for maximum engagement</li>
        <li>Predict which products will generate the highest ROAS</li>
      </ul>
      
      <h2>How Amplify Helps Maximize ROAS</h2>
      <p>Amplify's AI-powered platform is specifically designed to help Shopify merchants maximize their ROAS through:</p>
      
      <h3>Automated Campaign Management</h3>
      <p>Our platform continuously monitors campaign performance and makes real-time adjustments to improve results. This includes bid management, budget allocation, and audience targeting refinements.</p>
      
      <h3>Cross-Platform Optimization</h3>
      <p>Amplify manages campaigns across multiple platforms (Facebook, Instagram, Google, etc.) and automatically shifts budget to the channels delivering the best results.</p>
      
      <h3>AI-Generated Creative</h3>
      <p>Our AI analyzes your product catalog and brand guidelines to generate high-converting ad creative tailored to each platform's specifications and audience preferences.</p>
      
      <h3>Predictive Analytics</h3>
      <p>Amplify's predictive models forecast campaign performance and recommend optimizations before issues arise, ensuring your ad spend is always working efficiently.</p>
      
      <h2>Conclusion</h2>
      <p>Maximizing ROAS is an ongoing process that requires attention to detail, continuous testing, and leveraging the right tools. By implementing the strategies outlined in this guide and utilizing AI-powered platforms like Amplify, Shopify merchants can significantly improve their advertising efficiency and drive sustainable growth.</p>
      
      <p>Ready to take your ROAS to the next level? <a href="/">Learn how Amplify can help</a> or <a href="#cta">join our waitlist</a> to be among the first to access our platform.</p>
    `,
  },
  // Add more blog posts with content here
]

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((post) => post.id === params.slug)

  if (!post) {
    return {
      title: "Post Not Found | Amplify Blog",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Amplify Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Amplify Blog`,
      description: post.excerpt,
      type: "article",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Amplify Blog`,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.id === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Blog Post Header */}
        <div className="bg-gradient-to-b from-purple-50 to-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <Link
                href="/blog"
                className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-800"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Back to blog
              </Link>

              <div className="mt-6">
                <div className="text-sm font-medium text-purple-600">{post.category}</div>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{post.title}</h1>
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
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-96 w-full">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>

        {/* Blog Post Content */}
        <div className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="prose prose-lg prose-purple mx-auto" dangerouslySetInnerHTML={{ __html: post.content }} />
              <p className="mt-2 text-sm text-gray-500">
                If you have any questions about this article, please{" "}
                <a href="mailto:contact@useamplify.ai">contact us</a>.
              </p>

              {/* Tags */}
              <div className="mt-12 flex flex-wrap gap-2">
                {["Shopify", "ROAS", "Marketing", "Advertising", "E-commerce", "AI"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-purple-100 px-3 py-0.5 text-sm font-medium text-purple-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Share */}
              <div className="mt-8 border-t border-gray-200 pt-8">
                <h3 className="text-lg font-medium text-gray-900">Share this article</h3>
                <div className="mt-4 flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* CTA */}
              <div id="cta" className="mt-12 rounded-lg bg-purple-50 p-8">
                <h3 className="text-xl font-medium text-gray-900">Ready to maximize your ROAS?</h3>
                <p className="mt-2 text-base text-gray-600">
                  Join thousands of Shopify merchants who are using Amplify to automate their ad campaigns and boost
                  their sales.
                </p>
                <div className="mt-6">
                  <Link
                    href="/"
                    className="inline-flex items-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  >
                    Join the waitlist
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
