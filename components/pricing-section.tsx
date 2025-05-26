"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Rocket, Star, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { WaitlistForm } from "@/components/waitlist-form"

export default function PricingSection({ isVisible }: { isVisible: boolean }) {
  const [annualBilling, setAnnualBilling] = useState(false)

  const plans = [
    {
      name: "Free Plan",
      description: "Perfect for getting started with AI-powered ads",
      icon: <Rocket className="h-6 w-6" />,
      emoji: "🚀",
      price: "$0",
      period: "/month",
      features: [
        "Shopify Integration",
        "Up to $100 in ad credit after 5 referrals",
        "Launch 1 AI-Powered Ad Product campaign across multiple ad platforms",
        "2 Set of AI-Generated Ad Creatives & Copy",
        "AI-Powered marketing campaign setup, automation and optimization",
        "2 AI Pre-Generated product ads optimized to increase your product sales",
        "AI-Powered A/B Testing",
        "Unlimited Ad Spend",
        "15% commission on ad spend",
      ],
      cta: "Join Waitlist",
      popular: false,
      ctaVariant: "outline",
    },
    {
      name: "Starter Plan",
      description: "For growing businesses ready to scale their ads",
      icon: <Star className="h-6 w-6" />,
      emoji: "🌟",
      price: "$35",
      period: "/month",
      features: [
        "Everything in free plan plus",
        "Launch up to 15 AI-Powered Ad Product ad campaigns across multiple ad platforms",
        "Generate Up to 250 AI-Generated Product Ad Creatives & Copy",
        "Unlimited AI pre-generated product ads optimized to increase your product sales",
        "Unlimited Ad Spend",
        "Pay 0% commission for the first 3 months, then only 2.5% on ad spend",
      ],
      cta: "Join Waitlist",
      popular: true,
      ctaVariant: "default",
    },
    {
      name: "Grow Plan",
      description: "For established businesses looking to maximize ROAS",
      icon: <TrendingUp className="h-6 w-6" />,
      emoji: "📈",
      price: "$99",
      period: "/month",
      features: [
        "Everything in Starter plan plus",
        "Launch up to 30 AI-Powered Ad Product Campaigns across multiple ad platforms",
        "Generate Up to 450 AI-Generated Product Ad Creatives & Copy",
        "Pay 0% commission for the first 3 months, then only 1.5% on ad spend",
      ],
      cta: "Join Waitlist",
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
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, transparent pricing</h2>
        <p className="mt-4 text-lg text-gray-600">
          Choose the plan that's right for your business and start amplifying your sales today.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl border ${
              plan.popular ? "border-purple-600" : "border-gray-200"
            } bg-white p-10 shadow-sm transition-all duration-500 hover:shadow-lg transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-purple-600 px-3 py-1 text-center text-sm font-medium text-white">
                Most Popular
              </div>
            )}

            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                <span className="mr-2 text-2xl">{plan.emoji}</span> {plan.name}
              </h3>
            </div>

            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold tracking-tight text-gray-900">{plan.price}</span>
              <span className="ml-1 text-base font-medium text-gray-500">{plan.period}</span>
            </div>

            <p className="mt-2 text-sm text-gray-500">{plan.description}</p>

            <ul className="mt-6 space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="h-5 w-5 flex-shrink-0 text-purple-600" />
                  <span className="ml-3 text-sm text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
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

      <div
        className={`mt-16 mx-auto max-w-3xl rounded-2xl bg-purple-50 p-8 shadow-sm transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        style={{ transitionDelay: "600ms" }}
      >
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900">Need a custom plan?</h3>
          <p className="mt-2 text-lg text-gray-600">
            Contact us for a custom plan tailored to your specific business needs.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <WaitlistForm
              buttonClassName="w-full sm:w-auto bg-purple-600 hover:bg-purple-700"
              planInterest="Custom Plan"
            />
            <Link
              href="https://calendly.com/useamplify/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
                Book a demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
