"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, Quote } from "lucide-react"

interface TestimonialsProps {
  isVisible: boolean
}

export default function Testimonials({ isVisible }: TestimonialsProps) {
  const [columns, setColumns] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(1)
      } else if (window.innerWidth < 1024) {
        setColumns(2)
      } else {
        setColumns(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const testimonials = [
    {
      name: "Adeola Obaseki",
      company: "Fashion Boutique",
      image: "/shopify-merchant-1.png",
      backgroundImage: "/clothing-store.jpeg",
      quote:
        "Amplify has transformed our ad strategy. We've seen a 3x increase in ROAS since we started using the platform. The AI recommendations are spot on!",
      stars: 5,
      height: "tall",
    },
    {
      name: "Lita",
      company: "Tech Accessories",
      image: "/shopify-merchant-2.png",
      backgroundImage: "/electronics-shop-women.jpeg",
      quote:
        "The automation saves me hours every week. I used to spend all day managing ads, now Amplify does it better than I could.",
      stars: 5,
      height: "medium",
    },
    {
      name: "Jamie Rodriguez",
      company: "Handmade Crafts",
      image: "/woman-taking-photos.jpeg",
      backgroundImage: "/craft-making-hands.jpeg",
      quote:
        "As a small business owner, I don't have time to become an ads expert. Amplify makes it simple and the results speak for themselves. 4.2x ROAS in our first month!",
      stars: 5,
      height: "medium",
    },
  ]

  // Distribute testimonials into columns for masonry layout
  const getColumnTestimonials = () => {
    const result = Array.from({ length: columns }, () => [])

    testimonials.forEach((testimonial, index) => {
      const columnIndex = index % columns
      result[columnIndex].push(testimonial)
    })

    return result
  }

  const columnTestimonials = getColumnTestimonials()

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Loved by Shopify merchants</h2>
          <p className="mt-4 text-lg text-gray-300">See what our customers have to say about Amplify</p>
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          {columnTestimonials.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-1 flex-col gap-4 min-w-[280px]">
              {column.map((testimonial, testimonialIndex) => {
                const delay = columnIndex * 100 + testimonialIndex * 200
                const heightClass =
                  testimonial.height === "tall"
                    ? "min-h-[320px]"
                    : testimonial.height === "medium"
                      ? "min-h-[260px]"
                      : "min-h-[220px]"

                return (
                  <div
                    key={`${columnIndex}-${testimonialIndex}`}
                    className={`relative rounded-lg overflow-hidden shadow-sm ring-1 ring-gray-700 transition-all duration-700 transform hover:shadow-md hover:translate-y-[-4px] ${heightClass} ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: `${delay}ms` }}
                  >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 w-full h-full">
                      <Image
                        src={testimonial.backgroundImage || "/placeholder.svg"}
                        alt={`${testimonial.company} store environment`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gray-900 bg-opacity-85"></div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="relative z-10 p-6 h-full flex flex-col">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <Image
                            className="h-12 w-12 rounded-full object-cover transition-transform duration-300 hover:scale-110"
                            src={testimonial.image || "/placeholder.svg"}
                            alt={`${testimonial.name} from ${testimonial.company} - Amplify customer testimonial`}
                            width={48}
                            height={48}
                          />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-white">{testimonial.name}</h3>
                          <p className="text-sm text-gray-300">{testimonial.company}</p>
                        </div>
                      </div>
                      <div className="mt-4 flex">
                        {Array.from({ length: testimonial.stars }).map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className="h-5 w-5 fill-yellow-400 text-yellow-400 transition-transform duration-300 hover:scale-110"
                            style={{ transitionDelay: `${starIndex * 50}ms` }}
                          />
                        ))}
                      </div>
                      <div className="relative mt-4 flex-grow">
                        <Quote className="absolute -left-1 -top-1 h-6 w-6 text-purple-600/60" />
                        <p className="pl-5 text-base text-gray-300">"{testimonial.quote}"</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
