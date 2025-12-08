"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { WaitlistForm } from "@/components/waitlist-form"

type BillingPeriod = "monthly" | "quarterly" | "annual"

export default function PricingSection({ isVisible }: { isVisible: boolean }) {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly")

  const getDiscount = (period: BillingPeriod) => {
    switch (period) {
      case "quarterly":
        return 0.05
      case "annual":
        return 0.15
      default:
        return 0
    }
  }

  const getPrice = (basePrice: number, period: BillingPeriod) => {
    const discount = getDiscount(period)
    const discountedPrice = basePrice * (1 - discount)
    return Math.round(discountedPrice)
  }

  const getPeriodLabel = (period: BillingPeriod) => {
    switch (period) {
      case "quarterly":
        return "/month"
      case "annual":
        return "/month"
      default:
        return "/month"
    }
  }

  const getBillingNote = (period: BillingPeriod, basePrice: number) => {
    switch (period) {
      case "quarterly":
        return `Billed $${getPrice(basePrice, period) * 3} every 3 months`
      case "annual":
        return `Billed $${getPrice(basePrice, period) * 12} annually`
      default:
        return "Billed monthly"
    }
  }

  const plans = [
    {
      name: "Starter",
      description: "Best for new stores testing AI-powered ads",
      basePrice: 29,
      features: [
        "2,000 AI credits/month for ad generation",
        "Import up to 50 Shopify products",
        "Generate multiple ad concepts, offers, copy, video and image ads for each campaign",
        "Run automated ads on Google, Facebook & Instagram",
        "Unlimited ad spend",
        "0% commission on ad spend",
        "1GB downloadable ad assets storage",
        "Use your custom brand kit (fonts, colors, logo)",
      ],
      idealFor: "New stores testing AI-powered ads",
      cta: "Get Started",
      popular: false,
      ctaVariant: "outline",
    },
    {
      name: "Grow",
      description: "Best for growing brands that want more scale",
      basePrice: 59,
      features: [
        "7-day free trial",
        "Up to 5 seats",
        "Everything in Starter",
        "Import up to 100 Shopify products",
        "10GB downloadable ad assets storage",
        "5,000 AI credits/month for ad generation",
      ],
      idealFor: "Stores running multiple products and campaigns monthly",
      cta: "Start Trial",
      popular: true,
      ctaVariant: "default",
      gradient: true,
    },
    {
      name: "Scale",
      description: "Built for high-volume stores and aggressive advertisers",
      basePrice: 189,
      features: [
        "7-day free trial",
        "Up to 15 seats",
        "Everything in Grow",
        "Import up to 100 Shopify products",
        "1TB downloadable ad assets storage",
        "10,000+ AI credits/month for ad generation",
        "Automated A/B testing for offers and ad creatives",
      ],
      idealFor: "Brands with large catalogs and large monthly ad budgets",
      cta: "Start Trial",
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

        <div className="mt-6 sm:mt-8 inline-flex items-center rounded-full bg-gray-100 p-1">
          <button
            onClick={() => setBillingPeriod("monthly")}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
              billingPeriod === "monthly"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingPeriod("quarterly")}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 relative",
              billingPeriod === "quarterly"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            )}
          >
            Quarterly
            <span className="ml-1 text-xs text-green-600 font-semibold">5% off</span>
          </button>
          <button
            onClick={() => setBillingPeriod("annual")}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 relative",
              billingPeriod === "annual"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            )}
          >
            Annual
            <span className="ml-1 text-xs text-green-600 font-semibold">15% off</span>
          </button>
        </div>
      </div>

      <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={cn(
              "relative rounded-xl sm:rounded-2xl border p-5 sm:p-6 shadow-sm transition-all duration-500 hover:shadow-lg transform",
              plan.popular ? "border-purple-600 border-2" : "border-gray-200",
              plan.gradient 
                ? "bg-gradient-to-br from-orange-100 via-pink-100 to-rose-200 border-pink-200" 
                : "bg-white",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {plan.popular && (
              <div className="absolute -top-3 sm:-top-4 left-0 right-0 mx-auto w-28 sm:w-32 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-2 sm:px-3 py-1 text-center text-xs sm:text-sm font-medium text-white">
                Most Popular
              </div>
            )}

            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{plan.name}</h3>
            </div>

            <div className="mt-3 sm:mt-4 flex items-baseline flex-wrap gap-1">
              <span className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                ${getPrice(plan.basePrice, billingPeriod)}
              </span>
              <span className="text-sm sm:text-base font-medium text-gray-500">{getPeriodLabel(billingPeriod)}</span>
              {billingPeriod !== "monthly" && (
                <span className="text-sm text-gray-400 line-through ml-1">${plan.basePrice}</span>
              )}
            </div>
            <p className="mt-1 text-xs text-gray-500">{getBillingNote(billingPeriod, plan.basePrice)}</p>

            <p className="mt-2 text-xs sm:text-sm text-gray-500 leading-relaxed">{plan.description}</p>

            <div className="mt-3 sm:mt-4">
              <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2">Includes:</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className={cn("flex-shrink-0", plan.gradient ? "text-pink-600" : "text-purple-600")}>✓</span>
                    <span className="text-xs sm:text-sm text-gray-700 leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={cn(
              "mt-3 sm:mt-4 p-2.5 sm:p-3 rounded-lg",
              plan.gradient ? "bg-white/60" : "bg-gray-50"
            )}>
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
                    ? "bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white"
                    : "bg-white text-purple-600 border-purple-600 hover:bg-purple-50",
                )}
                planInterest={`${plan.name} (${billingPeriod})`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
