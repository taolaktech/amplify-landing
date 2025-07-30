import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AdSpendCalculator from "@/components/ad-spend-calculator"

export const metadata: Metadata = {
  title: "Ad Spend Calculator - Amplify",
  description:
    "Calculate your optimal ad spend based on target ROAS, AOV, and industry conversion rates. Get data-driven insights for your Shopify advertising campaigns.",
  keywords: "ad spend calculator, ROAS calculator, advertising budget, Shopify ads, conversion rate optimization",
}

export default function AdSpendPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Ad Spend Calculator</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Calculate your optimal ad spend based on target ROAS, average order value, and industry-specific
              conversion rates.
            </p>
          </div>
          <AdSpendCalculator />
        </div>
      </main>
      <Footer />
    </div>
  )
}
