"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { BarChart2, Zap, Shield, LineChart, Target, TrendingUp, Palette, Sparkles } from "lucide-react"

interface FeatureTab {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  image: string
  alt: string
}

export default function FeatureTabs() {
  // Add dark mode styling
  const [activeTab, setActiveTab] = useState("dashboard")

  const tabs: FeatureTab[] = [
    {
      id: "dashboard",
      title: "Comprehensive Dashboard",
      description:
        "Get a complete overview of your store's performance with real-time metrics on sales, orders, and ROAS. Track your revenue, ad spend, and conversions all in one place.",
      icon: <BarChart2 className="h-5 w-5" />,
      image: "/dashboard-screenshot.png",
      alt: "Amplify Dashboard",
    },
    {
      id: "campaigns",
      title: "Automated Campaign Management",
      description:
        "Easily create, monitor, and optimize ad campaigns across multiple platforms. View detailed performance metrics and make data-driven decisions to maximize your ROAS.",
      icon: <Target className="h-5 w-5" />,
      image: "/campaign-snapshot.jpeg",
      alt: "Campaign Management",
    },
    {
      id: "ads",
      title: "High-Quality Ads",
      description:
        "Auto-generate high quality ads that capture your brand's unique identity—logos, colors, fonts, and tone of voice—to maintain perfect brand consistency across all advertising channels.",
      icon: <Sparkles className="h-5 w-5" />,
      image: "/brand-assets.jpeg",
      alt: "Brand Assets Management",
    },
    {
      id: "insights",
      title: "AI-Powered Insights",
      description:
        "Receive smart suggestions to boost your ad results. Our AI analyzes your data to provide actionable recommendations for budget optimization and campaign improvements.",
      icon: <Zap className="h-5 w-5" />,
      image: "/insights-screenshot.png",
      alt: "AI Insights",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Powerful features to grow your business
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Everything you need to create, manage, and optimize your ad campaigns
        </p>
      </div>

      <div className="mt-16">
        <div className="flex flex-wrap justify-center gap-2 mb-8 px-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-full transition-all duration-200 text-sm sm:text-base",
                activeTab === tab.id
                  ? "bg-purple-600 text-white shadow-md"
                  : "bg-gray-800 text-gray-200 hover:bg-gray-700",
              )}
            >
              {tab.icon}
              <span>{tab.title}</span>
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={cn(
                "transition-all duration-500 transform",
                activeTab === tab.id ? "opacity-100 translate-x-0" : "opacity-0 absolute -translate-x-8",
              )}
              style={{ display: activeTab === tab.id ? "block" : "none" }}
            >
              <div className="flex flex-col justify-center h-full">
                <h3 className="text-2xl font-bold text-white">{tab.title}</h3>
                <p className="mt-4 text-lg text-gray-300">{tab.description}</p>
                <ul className="mt-8 space-y-4">
                  {tab.id === "dashboard" && (
                    <>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <TrendingUp className="h-6 w-6 text-purple-600" />
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-white">Performance Metrics</p>
                          <p className="mt-1 text-sm text-gray-300">
                            Track sales, orders, and average order value in real-time
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <LineChart className="h-6 w-6 text-purple-600" />
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-white">Revenue Analytics</p>
                          <p className="mt-1 text-sm text-gray-300">
                            Monitor your revenue, ad spend, and ROAS with visual charts
                          </p>
                        </div>
                      </li>
                    </>
                  )}
                  {tab.id === "campaigns" && (
                    <>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <Target className="h-6 w-6 text-purple-600" />
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-white">Multi-platform Campaigns</p>
                          <p className="mt-1 text-sm text-gray-300">
                            Create and manage ads across Facebook, Instagram, Google, and more
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <BarChart2 className="h-6 w-6 text-purple-600" />
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-white">AI-Generated Ad Creatives</p>
                          <p className="mt-1 text-sm text-gray-300">
                            Let our AI create optimized ad content based on your products and brand
                          </p>
                        </div>
                      </li>
                    </>
                  )}
                  {tab.id === "ads" && (
                    <>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <Palette className="h-6 w-6 text-purple-600" />
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-white">Complete Brand Capture</p>
                          <p className="mt-1 text-sm text-gray-300">
                            Upload your logos, colors, fonts, and brand guidelines to ensure perfect brand consistency
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <Sparkles className="h-6 w-6 text-purple-600" />
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-white">Platform-Optimized Ads</p>
                          <p className="mt-1 text-sm text-gray-300">
                            AI automatically adapts your ads for each platform's unique specifications and audience
                          </p>
                        </div>
                      </li>
                    </>
                  )}
                  {tab.id === "insights" && (
                    <>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <Zap className="h-6 w-6 text-purple-600" />
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-white">Smart Recommendations</p>
                          <p className="mt-1 text-sm text-gray-300">
                            Get AI-powered suggestions like "Boost on Instagram" or "Double Down on Google"
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <Shield className="h-6 w-6 text-purple-600" />
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-white">Campaign Suggestions</p>
                          <p className="mt-1 text-sm text-gray-300">
                            Receive ready-to-launch campaign ideas like "Weekend Clearance Sale"
                          </p>
                        </div>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          ))}

          <div className="relative rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl mt-8 lg:mt-0">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={cn(
                  "transition-all duration-500",
                  activeTab === tab.id ? "opacity-100" : "opacity-0 absolute inset-0",
                )}
                style={{ display: activeTab === tab.id ? "block" : "none" }}
              >
                <Image
                  src={tab.image || "/placeholder.svg"}
                  alt={`${tab.title} - ${tab.alt} feature screenshot showing Amplify's ${tab.id} functionality`}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
