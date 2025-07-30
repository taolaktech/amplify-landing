import { Star, Quote } from "lucide-react"
import Image from "next/image"

interface TestimonialsProps {
  isVisible: boolean
}

export default function Testimonials({ isVisible }: TestimonialsProps) {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder",
      company: "Satya Organic",
      image: "/diverse-woman-smiling.png",
      content:
        "Amplify transformed our advertising strategy. We saw a 3x increase in ROAS within the first month, and the AI optimization saves us hours of manual work every week.",
      rating: 5,
      results: "300% ROAS increase",
    },
    {
      name: "Marcus Johnson",
      role: "Marketing Director",
      company: "Koya",
      image: "/thoughtful-man-glasses.png",
      content:
        "The multi-platform management is incredible. Being able to run Google, Meta, and AdRoll campaigns from one dashboard has streamlined our entire marketing operation.",
      rating: 5,
      results: "50% time savings",
    },
    {
      name: "Priya Patel",
      role: "E-commerce Manager",
      company: "Kanra Lagos",
      image: "/short-haired-woman.png",
      content:
        "The AI insights helped us discover new customer segments we never knew existed. Our conversion rates improved by 40% after implementing Amplify's recommendations.",
      rating: 5,
      results: "40% conversion boost",
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">Trusted by Growing Businesses</h2>
        <p className="text-xl text-gray-200 leading-7 max-w-3xl mx-auto">
          See how Amplify is helping e-commerce businesses achieve remarkable results with AI-powered advertising
          automation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transition-all duration-1000 transform hover:bg-white/15 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div className="flex items-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>

            <Quote className="h-8 w-8 text-purple-400 mb-4" />

            <p className="text-gray-200 leading-6 mb-6">"{testimonial.content}"</p>

            <div className="flex items-center">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={`${testimonial.name} profile`}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-200">{testimonial.role}</div>
                <div className="text-sm text-gray-200">{testimonial.company}</div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="text-sm font-medium text-purple-300">{testimonial.results}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
