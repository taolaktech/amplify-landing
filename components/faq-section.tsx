"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { ContactSupport } from "@/components/contact-support"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  isVisible: boolean
}

export default function FAQSection({ isVisible }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      question: "What is Amplify?",
      answer:
        "Amplify is an AI-powered ad automation platform designed specifically for Shopify merchants. It helps you create, manage, and optimize ad campaigns across multiple platforms to maximize your ROAS (Return on Ad Spend) and grow your sales.",
    },
    {
      question: "How does Amplify work with my Shopify store?",
      answer:
        "Amplify integrates directly with your Shopify store through a simple one-click installation. Once connected, it automatically imports your products, analyzes your store data, and uses AI to create and optimize ad campaigns tailored to your specific business needs.",
    },
    {
      question: "Which ad platforms does Amplify support?",
      answer:
        "Amplify currently supports Facebook, Instagram, Google, TikTok, and Pinterest. We're constantly adding more platforms to help you reach your customers wherever they are.",
    },
    {
      question: "Do I need technical knowledge to use Amplify?",
      answer:
        "Not at all! Amplify is designed to be user-friendly and accessible to merchants of all technical levels. Our AI handles the complex parts of ad creation and optimization, while you maintain control over your strategy and budget.",
    },
    {
      question: "How much does Amplify cost?",
      answer:
        "Amplify offers several pricing tiers to fit businesses of all sizes. We have a free plan to get you started, and paid plans starting at $35/month. Our pricing is transparent with no hidden fees, and we charge a small commission on ad spend for some plans. Check our pricing section for more details.",
    },
    {
      question: "Can I control my ad spend with Amplify?",
      answer:
        "You set your budget, and Amplify works within those constraints. Our AI optimizes your campaigns to get the most out of every dollar you spend, but you always maintain complete control over how much you invest.",
    },
    {
      question: "How long does it take to see results with Amplify?",
      answer:
        "Many merchants see improvements in their ad performance within the first week of using Amplify. However, as our AI learns more about your store and customers over time, results typically continue to improve. Most merchants report significant ROAS improvements within the first month.",
    },
    {
      question: "Is there a contract or commitment?",
      answer:
        "No long-term contracts required. All Amplify plans are month-to-month, and you can upgrade, downgrade, or cancel at any time. We're confident you'll love the results you get with Amplify.",
    },
  ]

  return (
    <div className="bg-slate-800 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-4 text-lg text-gray-300">
            Everything you need to know about Amplify and how it can help grow your Shopify store.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-gray-600">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-700 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-start justify-between py-6 text-left"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <span className="ml-6 flex h-7 items-center">
                  <ChevronDown
                    className={cn(
                      "h-6 w-6 text-purple-400 transition-transform duration-200",
                      openIndex === index ? "rotate-180 transform" : "",
                    )}
                  />
                </span>
              </button>
              <div
                className={cn(
                  "pr-12 pb-6 text-base text-gray-300 transition-all duration-300",
                  openIndex === index ? "block opacity-100" : "hidden opacity-0",
                )}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mx-auto mt-12 max-w-3xl rounded-2xl bg-slate-700/50 p-8 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold text-white">Still have questions?</h3>
            <p className="mt-2 text-gray-300">
              Our team is here to help. Contact us for any questions not covered above.
            </p>
            <div className="mt-6">
              <ContactSupport className="bg-purple-600 hover:bg-purple-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
