import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function HowItWorks({ isVisible }: { isVisible: boolean }) {
  const steps = [
    {
      title: "Connect your Shopify store",
      description:
        "Get started by connecting your Shopify store with just a few clicks. Our seamless integration imports all your products, customers, and sales data automatically.",
      image: "/connect-shopify-screenshot.png",
      features: ["One-click Shopify integration", "Secure data connection", "Automatic product syncing"],
    },
    {
      title: "Create AI-powered campaigns",
      description:
        "Design beautiful, high-converting ad campaigns across multiple platforms. Our AI automatically generates ad creatives and optimizes them for each platform.",
      image: "/campaign-snapshot.jpeg",
      features: [
        "Multi-platform ad creation (Google, Instagram, Facebook)",
        "AI-generated ad creatives",
        "Preview ads before launching",
      ],
      reversed: true,
      bgClass: "bg-gray-50",
    },
    {
      title: "Optimize with AI insights",
      description:
        "Let our AI analyze your performance data and provide actionable insights to improve your ROAS and grow your sales.",
      image: "/insights-screenshot.png",
      features: ["AI-powered recommendations", "Performance analytics", "Automated budget adjustments"],
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-2xl text-center transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How Amplify works</h2>
        <p className="mt-4 text-lg text-gray-600">Get started in minutes and see results in days, not months.</p>
      </div>

      <div className="mt-16 space-y-0">
        {steps.map((step, index) => (
          <div key={index} className={`py-16 px-6 sm:px-10 md:px-16 ${step.bgClass || "bg-white"}`}>
            <div
              className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 ${
                step.reversed ? "" : "lg:flex-row-reverse"
              } transition-all duration-700 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Image Column - Always first for mobile, positioned based on reversed prop for desktop */}
              <div className={`relative ${step.reversed ? "order-1 lg:order-1" : "order-1 lg:order-2"}`}>
                <div className="overflow-hidden rounded-xl bg-white shadow-xl transition-transform duration-500 hover:shadow-2xl hover:scale-[1.02]">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={`Step ${index + 1}: ${step.title} - Detailed view of how to ${step.title.toLowerCase()} with Amplify`}
                    width={800}
                    height={600}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Text Column - Always second for mobile, positioned based on reversed prop for desktop */}
              <div
                className={`flex flex-col justify-center ${step.reversed ? "order-2 lg:order-2" : "order-2 lg:order-1"}`}
              >
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                    {index + 1}
                  </div>
                  <h3 className="ml-4 text-2xl font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="mt-4 text-lg text-gray-600">{step.description}</p>
                <ul className="mt-8 space-y-4 px-6">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-6 w-6 flex-shrink-0 text-purple-600" />
                      <span className="ml-3 text-base text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
