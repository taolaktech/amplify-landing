"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { WaitlistForm } from "@/components/waitlist-form"

export default function PricingSection({ isVisible }: { isVisible: boolean }) {
  const [annualBilling, setAnnualBilling] = useState(false)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for trying Amplify risk-free.",
      price: "$19",
      period: "/month",
      features: [
        "Launch 1 ad campaign on Google & Meta",
        "Add up to 2 products",
        "Generate up to 10 AI ad creatives",
        "Unlimited ad spend",
        "0% commission on ad spend",
      ],
      idealFor: "New users testing the platform",
      cta: "Get Started",
      popular: false,
      ctaVariant: "outline",
    },
    {
      name: "Grow",
      description: "Unlock more monthly campaigns with no commission fees.",
      price: "$39",
      period: "/month",
      features: [
        "7-day free trial",
        "Everything in Starter",
        "Launch up to 3 AI-powered campaigns",
        "Add up to 15 products",
        "Generate up to 300 AI ad creatives",
      ],
      idealFor: "Small stores looking to scale profitably",
      cta: "Start Trial",
      popular: true,
      ctaVariant: "default",
    },
    {
      name: "Scale",
      description: "More campaigns, more products, more creative output.",
      price: "$99",
      period: "/month",
      features: [
        "7-day free trial",
        "Everything in Grow",
        "Launch up to 10 AI-powered campaigns",
        "Add up to 50 products per campaign",
        "Generate up to 600 AI ad creatives",
        "Automated campaign optimization",
        "Automated A/B testing",
      ],
      idealFor: "Stores with 50+ products looking to scale aggressively",
      cta: "Start Trial",
      popular: false,
      ctaVariant: "outline",
      gradient: true,
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

      <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
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
                    ? "bg-purple-600 hover:bg-purple-700"
                    : plan.gradient
                    ? "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white border-0"
                    : "bg-white text-purple-600 border-purple-600 hover:bg-purple-50",
                )}
                planInterest={plan.name}
              />
            </div>
          </div>
        ))}

        {/* Lifetime Grow Plan */}
        <div
          className={cn(
            "relative rounded-xl sm:rounded-2xl border-2 border-purple-300 p-5 sm:p-6 shadow-sm transition-all duration-500 hover:shadow-lg transform",
            "bg-gradient-to-br from-purple-200 via-purple-100 to-pink-100",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="absolute -top-3 sm:-top-4 left-0 right-0 mx-auto w-32 sm:w-36 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-2 sm:px-3 py-1 text-center text-xs sm:text-sm font-medium text-white">
            Limited Time Offer
          </div>

          <div className="mt-2">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Lifetime Scale Plan</h3>
          </div>

          <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
            Get lifetime access to the scale plan benefits and unlock every feature we offer now and everything we build next.
          </p>
          
          <p className="mt-2 text-xs sm:text-sm font-semibold text-purple-700">
            One payment, forever powerful.
          </p>

          <div className="mt-3 sm:mt-4 flex flex-wrap items-baseline gap-1">
            <span className="text-base sm:text-lg text-gray-400 line-through">$2,199</span>
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">$599</span>
            <span className="text-xs sm:text-sm font-medium text-purple-600">Early Access</span>
          </div>
          <p className="mt-0.5 text-xs text-gray-500">
            ($899 After 2,000 Spots Sold)*
          </p>

          <div className="mt-3 sm:mt-4">
            <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2">Everything in Scale +</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 flex-shrink-0">✓</span>
                <span className="text-xs sm:text-sm text-gray-700">Unlimited AI-Powered Campaigns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 flex-shrink-0">✓</span>
                <span className="text-xs sm:text-sm text-gray-700">Unlimited Products per Campaign</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 flex-shrink-0">✓</span>
                <span className="text-xs sm:text-sm text-gray-700">Unlimited AI Ad Creatives</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 flex-shrink-0">✓</span>
                <span className="text-xs sm:text-sm text-gray-700">Zero commission — forever</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 flex-shrink-0">✓</span>
                <span className="text-xs sm:text-sm text-gray-700">Lifetime access to all features</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 flex-shrink-0">✓</span>
                <span className="text-xs sm:text-sm text-gray-700">Early access to future updates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 flex-shrink-0">✓</span>
                <span className="text-xs sm:text-sm text-gray-700">Priority support</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 sm:mt-6">
            <WaitlistForm
              buttonText="Get Lifetime Access"
              buttonVariant="default"
              buttonClassName="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold"
              planInterest="Lifetime Scale Plan"
            />
            <p className="mt-2 text-xs text-center text-gray-500 font-medium">
              Only 10,000 Lifetime Licenses Available
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
