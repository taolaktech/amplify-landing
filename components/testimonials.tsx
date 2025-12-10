"use client"

interface TestimonialsProps {
  isVisible: boolean
}

interface VideoTestimonial {
  id: string
  title: string
}

export default function Testimonials({ isVisible }: TestimonialsProps) {
  const videoTestimonials: VideoTestimonial[] = [
    {
      id: "lIEPeEHZZH8",
      title: "Shopify Merchant Review 1",
    },
    {
      id: "18XqlvyiYco",
      title: "Shopify Merchant Review 2",
    },
    {
      id: "EKejm_BetE8",
      title: "Shopify Merchant Review 3",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">Loved by Shopify merchants</h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-300">See what our customers have to say about Amplify</p>
        </div>

        <div
          className={`mt-10 sm:mt-12 md:mt-16 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {videoTestimonials.map((video, index) => (
              <div
                key={video.id}
                className="relative rounded-xl overflow-hidden shadow-lg ring-1 ring-gray-700 transition-all duration-500 hover:shadow-xl hover:scale-[1.02]"
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  width="315"
                  height="560"
                  className="w-[180px] h-[320px] sm:w-[280px] sm:h-[500px] md:w-[315px] md:h-[560px]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
