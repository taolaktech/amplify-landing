"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { WaitlistForm } from "@/components/waitlist-form"

export default function PricingSection({ isVisible }: { isVisible: boolean }) {
  const [annualBilling, setAnnualBilling] = useState(false)

  const plans = [
    {
      name: "Launch",
      description: "Perfect for new or curious users testing the waters.",
      price: "$0",
      period: "/month",
      features: [
        "Run 1 AI-Powered Product Campaign across Facebook, Instagram, and Google",
        "2 AI-Generated Ad Sets (Creative + Copy)",
        "Automated Campaign Optimization",
        "AI-Powered A/B Testing",
        "Unlimited Ad Spend",
        "0 percent commission on ad spend",
      ],
      idealFor: "Trying Amplify completely risk-free.",
      cta: "Try for free",
      popular: false,
      ctaVariant: "outline",
    },
    {
      name: "Starter",
      description: "Unlock more campaigns, more creatives, and more reach.",
      price: "$35",
      period: "/month",
      features: [
        "Everything in Launch, plus:",
        "Run up to 15 AI-Powered Product Campaigns",
        "Generate up to 250 AI Ad Creatives & Copies",
        "Unlimited Pre-Generated Product Ads",
      ],
      idealFor: "Small to mid-size stores ready to scale profitably with AI.",
      cta: "Sign Up",
      popular: true,
      ctaVariant: "default",
    },
    {
      name: "Grow",
      description: "Double your creative output and expand your campaign reach.",
      price: "$99",
      period: "/month",
      features: [
        "Everything in Starter, plus:",
        "Run up to 30 AI-Powered Product Campaigns",
        "Generate up to 450 AI Ad Creatives & Copies",
        "Upload your own Product Ads Images & Videos",
      ],
      idealFor: "Shopify brands with an AOV that is higher than $100",
      cta: "Sign Up",
      popular: false,
      ctaVariant: "outline",
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-2xl text-center transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">Simple, transparent pricing</h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
          Choose the plan that's right for your business and start amplifying your sales today.
        </p>
      </div>

      <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`relative rounded-xl sm:rounded-2xl border ${
              plan.popular ? "border-purple-600 border-2" : "border-gray-200"
            } bg-white p-5 sm:p-6 shadow-sm transition-all duration-500 hover:shadow-lg transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {plan.popular && (
              <div className="absolute -top-3 sm:-top-4 left-0 right-0 mx-auto w-28 sm:w-32 rounded-full bg-purple-600 px-2 sm:px-3 py-1 text-center text-xs sm:text-sm font-medium text-white">
                Most Popular
              </div>
            )}

            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{plan.name}</h3>
            </div>

            <div className="mt-3 sm:mt-4 flex items-baseline">
              <span className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">{plan.price}</span>
              <span className="ml-1 text-sm sm:text-base font-medium text-gray-500">{plan.period}</span>
            </div>

            <p className="mt-2 text-xs sm:text-sm text-gray-500 leading-relaxed">{plan.description}</p>

            <div className="mt-3 sm:mt-4">
              <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2">Includes:</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className="text-xs sm:text-sm text-gray-700 leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-3 sm:mt-4 p-2.5 sm:p-3 bg-gray-50 rounded-lg">
              <p className="text-xs sm:text-sm text-gray-600">
                <span className="font-medium">Ideal for:</span> {plan.idealFor}
              </p>
            </div>

            <div className="mt-6">
              <WaitlistForm
                buttonText={plan.cta}
                buttonVariant={plan.ctaVariant as "default" | "outline"}
                buttonClassName={cn(
                  "w-full",
                  plan.popular
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "bg-white text-purple-600 border-purple-600 hover:bg-purple-50",
                )}
                planInterest={plan.name}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
