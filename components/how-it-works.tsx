import { CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"

interface HowItWorksProps {
  isVisible: boolean
}

export default function HowItWorks({ isVisible }: HowItWorksProps) {
  const steps = [
    {
      number: "01",
      title: "Connect Your Store",
      description: "Link your Shopify store and advertising accounts in minutes with our secure integration.",
      image: "/connect-shopify-screenshot.png",
      features: [
        "One-click Shopify integration",
        "Secure OAuth connections",
        "Multi-platform account linking",
        "Real-time data sync",
      ],
    },
    {
      number: "02",
      title: "AI Analyzes Your Data",
      description: "Our AI examines your products, customer data, and market trends to create optimized campaigns.",
      image: "/dashboard-screenshot.png",
      features: [
        "Product catalog analysis",
        "Customer behavior insights",
        "Market trend identification",
        "Competitor research",
      ],
    },
    {
      number: "03",
      title: "Launch Optimized Campaigns",
      description: "Deploy AI-generated campaigns across Google, Meta, and AdRoll with automated optimization.",
      image: "/create-campaign-screenshot.png",
      features: [
        "Multi-platform deployment",
        "Dynamic ad creative generation",
        "Automated bid optimization",
        "Real-time performance tracking",
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">How Amplify Works</h2>
        <p className="text-xl text-gray-700 leading-7 max-w-3xl mx-auto">
          Get started in minutes with our simple three-step process that transforms your advertising strategy.
        </p>
      </div>

      <div className="space-y-24">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="flex items-center mb-6">
                <span className="text-4xl font-bold text-purple-600 mr-4">{step.number}</span>
                <ArrowRight className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-lg text-gray-700 leading-7 mb-6">{step.description}</p>
              <ul className="space-y-3">
                {step.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 leading-6">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="relative">
                <div className="overflow-hidden rounded-xl bg-white shadow-xl border border-gray-200">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={`${step.title} interface screenshot`}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
