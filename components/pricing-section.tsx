"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { WaitlistForm } from "@/components/waitlist-form"

export default function PricingSection({ isVisible }: { isVisible: boolean }) {
  const [annualBilling, setAnnualBilling] = useState(false)

  const plans = [
    {
      name: "Launch",
      description: "Perfect for trying Amplify risk-free.",
      price: "$0",
      period: "/month",
      features: [
        "Launch 1 AI-Powered Campaign per month",
        "Add up to 2 products per campaign",
        "Generate up to 10 AI Ad Creatives for A/B testing & optimization",
        "Automated Campaign Optimization",
        "AI-Powered A/B Testing",
        "Unlimited Ad Spend",
        "0% commission on ad spend",
      ],
      idealFor: "New users testing the platform",
      cta: "Sign Up",
      popular: false,
      ctaVariant: "outline",
    },
    {
      name: "Starter",
      description: "Unlock more monthly campaigns with no commission fees.",
      price: "$35",
      period: "/month",
      features: [
        "Everything in Launch, plus:",
        "Launch up to 3 AI-Powered Campaigns per month",
        "Generate up to 300 AI Ad Creatives for A/B testing & optimization",
        "Unlimited Ad Spend",
        "0% commission on ad spend",
      ],
      idealFor: "Small stores looking to scale profitably",
      cta: "Sign Up",
      popular: true,
      ctaVariant: "default",
    },
    {
      name: "Grow",
      description: "More campaigns, more products, more creative output.",
      price: "$99",
      period: "/month",
      features: [
        "Everything in Starter, plus:",
        "Launch up to 10 AI-Powered Campaigns per month",
        "Generate up to 600 AI Ad Creatives per month for A/B testing & optimization",
        "0% commission on ad spend",
      ],
      idealFor: "Stores with 50+ products looking to scale aggressively",
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

      {/* Lifetime Grow Plan */}
      <div
        className={`mt-10 sm:mt-12 lg:mt-16 max-w-4xl mx-auto transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        style={{ transitionDelay: "600ms" }}
      >
        <div className="relative rounded-xl sm:rounded-2xl border-2 border-purple-600 bg-gradient-to-br from-purple-50 to-white p-6 sm:p-8 shadow-lg">
          <div className="absolute -top-3 sm:-top-4 left-0 right-0 mx-auto w-36 sm:w-44 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 px-3 py-1.5 text-center text-xs sm:text-sm font-semibold text-white">
            Limited Time Offer
          </div>

          <div className="mt-4 sm:mt-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Lifetime Grow</h3>
            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl">
              Future-proof your marketing workflow once and for all. Get lifetime access to Amplify Pro and unlock every feature we offer today — plus everything we build next.
            </p>
            <p className="mt-2 text-sm sm:text-base font-semibold text-purple-600">
              One payment, forever powerful.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-baseline gap-2">
            <span className="text-xl sm:text-2xl text-gray-400 line-through">$2,199</span>
            <span className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">$599</span>
            <span className="text-base sm:text-lg font-medium text-purple-600">Early Access</span>
          </div>
          <p className="mt-1 text-xs sm:text-sm text-gray-500">
            ($899 after the first 2,000 spots are sold)
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Everything in Grow +</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  <span className="text-sm text-gray-700">Unlimited AI-Powered Campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  <span className="text-sm text-gray-700">Add Unlimited Products per Campaign</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  <span className="text-sm text-gray-700">Unlimited AI Ad Creatives for testing & optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  <span className="text-sm text-gray-700">Unlimited Pre-Generated Product Ads</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-3 sm:opacity-0">Plus</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  <span className="text-sm text-gray-700">Zero commission fees — forever</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  <span className="text-sm text-gray-700">Lifetime access to all current features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  <span className="text-sm text-gray-700">Early access to all future features & updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  <span className="text-sm text-gray-700">Priority support for scaling brands</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <WaitlistForm
              buttonText="Get Lifetime Access"
              buttonVariant="default"
              buttonClassName="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 px-8 py-3 text-base font-semibold"
              planInterest="Lifetime Grow"
            />
            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              Only 10,000 Lifetime Licenses Will Ever Be Sold
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
