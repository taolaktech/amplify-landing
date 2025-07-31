import type React from "react"
import Image from "next/image"

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

interface FeatureSectionProps {
  title: string
  description: string
  features: Feature[]
  image: string
  isVisible: boolean
}

export default function FeatureSection({ title, description, features, image, isVisible }: FeatureSectionProps) {
  return (
    <section className="bg-white py-16 sm:py-24 px-6 sm:px-10 md:px-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div
            className={`flex flex-col justify-center transition-all duration-1000 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg text-gray-600">{description}</p>

            <div className="mt-10 space-y-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex transition-all duration-700 transform ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                    <p className="mt-2 text-base text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative lg:mt-0 transition-all duration-1000 delay-300 transform ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-xl bg-white shadow-xl transition-transform duration-500 hover:shadow-2xl hover:scale-[1.02]">
                <Image
                  src={image || "/placeholder.svg"}
                  alt="Amplify Feature"
                  width={800}
                  height={600}
                  className="w-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
