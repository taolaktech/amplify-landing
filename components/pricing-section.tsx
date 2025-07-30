"use client"

import { useState } from "react"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PricingSectionProps {
  isVisible: boolean
}

export default function PricingSection({ isVisible }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const plans = [
    {
      name: "Free",
      price: billingCycle === "monthly" ? 0 : 0,
      originalPrice: null,
      description: "Perfect for getting started with AI-powered ads",
      badge: "Get Started",
      badgeVariant: "secondary" as const,
      features: [
        "Shopify Integration",
        "Up to $100 in ad credit after 5 successful referrals",
        "Launch 1 AI-Powered Ad Product campaign across multiple ad platforms",
        "2 Set of AI-Generated Ad Creatives & Copy",
        "AI-Powered marketing campaign setup, automation and optimization",
        "2 AI Pre-Generated product ads optimized to increase your product sales",
        "AI-Powered A/B Testing",
        "Unlimited Ad Spend",
        "15% commission on ad spend",
      ],
      notIncluded: [],
      buttonText: "Start Free",
      buttonVariant: "outline" as const,
    },
    {
      name: "Starter",
      price: billingCycle === "monthly" ? 35 : 350,
      originalPrice: billingCycle === "yearly" ? 420 : null,
      description: "Ideal for growing Shopify stores ready to scale",
      badge: "Most Popular",
      badgeVariant: "default" as const,
      features: [
        "Everything in Free plan plus",
        "Launch up to 15 AI-Powered Ad Product ad campaigns across multiple ad platforms",
        "Generate Up to 250 AI-Generated Product Ad Creatives & Copy",
        "Unlimited AI pre-generated product ads optimized to increase your product sales",
        "Unlimited Ad Spend",
        "Pay 0% commission on ad spend",
      ],
      notIncluded: [],
      buttonText: "Start Starter Plan",
      buttonVariant: "default" as const,
    },
    {
      name: "Grow",
      price: billingCycle === "monthly" ? 99 : 990,
      originalPrice: billingCycle === "yearly" ? 1188 : null,
      description: "For established stores ready to dominate their market",
      badge: "Best Value",
      badgeVariant: "secondary" as const,
      features: [
        "Everything in Starter plan plus",
        "Launch up to 30 AI-Powered Ad Product Campaigns across multiple ad platforms",
        "Generate Up to 450 AI-Generated Product Ad Creatives & Copy",
        "Pay 0% commission on ad spend",
      ],
      notIncluded: [],
      buttonText: "Start Grow Plan",
      buttonVariant: "default" as const,
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-4xl text-center transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Simple, transparent pricing</h2>
        <p className="mt-4 text-lg text-gray-300">
          Choose the perfect plan to grow your Shopify store with AI-powered advertising
        </p>

        {/* Billing Toggle */}
        <div className="mt-8 flex items-center justify-center">
          <div className="flex items-center rounded-lg bg-gray-800 p-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                billingCycle === "monthly" ? "bg-purple-600 text-white shadow-sm" : "text-gray-300 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                billingCycle === "yearly" ? "bg-purple-600 text-white shadow-sm" : "text-gray-300 hover:text-white"
              }`}
            >
              Yearly
              <span className="ml-1 text-xs text-purple-300">(Save 17%)</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <Card
            key={plan.name}
            className={`relative bg-gray-800/50 border-gray-700 transition-all duration-700 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            } ${plan.name === "Starter" ? "ring-2 ring-purple-500 scale-105 lg:scale-110" : "hover:scale-105"}`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {plan.badge && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge variant={plan.badgeVariant} className="px-3 py-1">
                  {plan.badge}
                </Badge>
              </div>
            )}

            <CardHeader className="text-center pb-8 pt-8">
              <CardTitle className="text-xl font-bold text-white">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                <span className="text-gray-400">/{billingCycle === "monthly" ? "month" : "year"}</span>
                {plan.originalPrice && (
                  <div className="mt-1">
                    <span className="text-sm text-gray-500 line-through">
                      ${plan.originalPrice}/{billingCycle === "monthly" ? "month" : "year"}
                    </span>
                  </div>
                )}
              </div>
              <CardDescription className="mt-4 text-gray-300">{plan.description}</CardDescription>
            </CardHeader>

            <CardContent className="pt-0">
              <Button
                className={`w-full mb-6 ${
                  plan.buttonVariant === "default"
                    ? "bg-purple-600 hover:bg-purple-700 text-white"
                    : "bg-transparent border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white"
                }`}
                variant={plan.buttonVariant}
              >
                {plan.buttonText}
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
                {plan.notIncluded.map((feature, featureIndex) => (
                  <li key={`not-${featureIndex}`} className="flex items-start">
                    <X className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-500 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div
        className={`mx-auto mt-12 max-w-4xl text-center transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        style={{ transitionDelay: "600ms" }}
      >
        <p className="text-gray-400 text-sm">
          All plans include our core AI-powered advertising features. Upgrade or downgrade at any time.
        </p>
      </div>
    </div>
  )
}
