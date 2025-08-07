"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Testimonials from "@/components/testimonials"
import HeroStats from "@/components/hero-stats"
import FeatureTabs from "@/components/feature-tabs"
import HowItWorks from "@/components/how-it-works"
import PricingSection from "@/components/pricing-section"
import FAQSection from "@/components/faq-section"
import { WaitlistForm } from "@/components/waitlist-form"
import StructuredData from "@/components/structured-data"
import SEO from "@/components/seo"
import SocialMeta from "@/components/social-meta"

export default function Home() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    stats: false,
    features: false,
    howItWorks: false,
    testimonials: false,
    pricing: false,
    faq: false,
    cta: false,
  })

  const observerRefs = {
    hero: useRef<HTMLElement | null>(null),
    stats: useRef<HTMLDivElement | null>(null),
    features: useRef<HTMLElement | null>(null),
    howItWorks: useRef<HTMLElement | null>(null),
    testimonials: useRef<HTMLDivElement | null>(null),
    pricing: useRef<HTMLElement | null>(null),
    faq: useRef<HTMLElement | null>(null),
    cta: useRef<HTMLElement | null>(null),
  }

  useEffect(() => {
    const observers: Record<string, IntersectionObserver> = {}

    Object.entries(observerRefs).forEach(([key, ref]) => {
      observers[key] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [key]: true }))
          }
        },
        { threshold: 0.1 }
      )

      if (ref.current) {
        observers[key].observe(ref.current)
      }
    })

    return () => {
      Object.values(observers).forEach((observer) => {
        observer.disconnect()
      })
    }
  }, [])

  // Hero trusted by images
  const heroTrustedImages = [
    { name: "Satya Organic", image: "/satya-organic-logo.png" },
    { name: "Koya", image: "/koya-logo.png" },
    { name: "Kanra Lagos", image: "/kanra-lagos-logo.jpeg" },
    { name: "Fashion Boutique", image: "/shopify-merchant-1.png" },
  ]

  return (
    <>
      <SEO ogImage="/amplify-share-thumbnail.png" twitterCard="summary_large_image" />
      <SocialMeta image="/amplify-share-thumbnail.png" />
      <StructuredData type="WebSite" />
      <StructuredData type="Organization" />
      <StructuredData type="Product" />
      <StructuredData type="FAQPage" />

      <div className="flex min-h-screen flex-col">
        <Navbar />

        {/* Hero Section */}
        <section
          id="hero"
          ref={observerRefs.hero}
          className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white pt-24 md:pt-32 lg:pt-40"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
              <div
                className={`flex flex-col justify-center transition-all duration-1000 transform ${
                  isVisible.hero ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Automate your ads.</span>
                  <span className="block text-purple-600">Amplify your sales.</span>
                </h1>
                <p className="mt-6 text-xl text-gray-600">
                  Amplify helps Shopify merchants automate their ad campaigns with AI-powered optimization to maximize
                  ROAS and grow sales.
                </p>
                <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <WaitlistForm
                    buttonSize="lg"
                    buttonClassName="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
                  />
                  <Link
                    href="https://calendly.com/useamplify/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                    aria-label="Book a demo"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full transition-all duration-300 hover:bg-purple-50 bg-transparent"
                    >
                      Book a demo
                    </Button>
                  </Link>
                </div>

                <div className="mt-8 flex items-center">
                  <div className="flex -space-x-2">
                    {heroTrustedImages.map((image, i) => (
                      <div
                        key={i}
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white transition-transform duration-300 hover:scale-110 hover:z-10 relative overflow-hidden"
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                        <Image
                          src={image.image || "/placeholder.svg"}
                          alt={`${image.name} logo`}
                          fill
                          className="object-cover"
                          sizes="32px"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="ml-4 text-sm font-medium text-gray-600">Trusted by +100 Shopify Stores</p>
                </div>
              </div>

              <div
                className={`relative lg:mt-0 transition-all duration-1000 delay-300 transform ${
                  isVisible.hero ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="overflow-hidden rounded-xl bg-white shadow-xl transition-transform duration-500 hover:shadow-2xl hover:scale-[1.02]">
                    <Image
                      src="/shopify-merchant-header.png"
                      alt="Shopify merchant using Amplify to automate ad campaigns"
                      width={800}
                      height={600}
                      className="w-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref={observerRefs.stats}>
            <HeroStats isVisible={isVisible.stats} />
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          ref={observerRefs.features}
          className="dark-section py-16 sm:py-24"
          aria-labelledby="features-heading"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-purple-900 opacity-20"></div>
            <div className="absolute top-1/2 -right-24 w-64 h-64 rounded-full bg-purple-800 opacity-20"></div>
            <div className="absolute -bottom-32 left-1/4 w-72 h-72 rounded-full bg-purple-700 opacity-20"></div>
          </div>
          <h2 id="features-heading" className="sr-only">
            Amplify Features
          </h2>
          {isVisible.features && <FeatureTabs />}
        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          ref={observerRefs.howItWorks}
          className="bg-gray-50 py-16 sm:py-24"
          aria-labelledby="how-it-works-heading"
        >
          <h2 id="how-it-works-heading" className="sr-only">
            How Amplify Works
          </h2>
          <HowItWorks isVisible={isVisible.howItWorks} />
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="dark-section py-16 sm:py-24" aria-labelledby="testimonials-heading">
          <h2 id="testimonials-heading" className="sr-only">
            Customer Testimonials
          </h2>
          <div ref={observerRefs.testimonials}>
            <Testimonials isVisible={isVisible.testimonials} />
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          ref={observerRefs.pricing}
          className="bg-gray-50 py-16 sm:py-24"
          aria-labelledby="pricing-heading"
        >
          <h2 id="pricing-heading" className="sr-only">
            Pricing Plans
          </h2>
          <PricingSection isVisible={isVisible.pricing} />
        </section>

        {/* FAQ Section */}
        <section id="faq" ref={observerRefs.faq} className="dark-section py-16 sm:py-24" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="sr-only">
            Frequently Asked Questions
          </h2>
          <FAQSection isVisible={isVisible.faq} />
        </section>

        {/* CTA Section */}
        <section
          ref={observerRefs.cta}
          className="bg-purple-600 py-16 sm:py-24 relative overflow-hidden"
          aria-labelledby="cta-heading"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-purple-500 opacity-20"></div>
            <div className="absolute top-1/2 -right-24 w-64 h-64 rounded-full bg-purple-400 opacity-20"></div>
            <div className="absolute -bottom-32 left-1/4 w-72 h-72 rounded-full bg-purple-300 opacity-20"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div
              className={`mx-auto max-w-2xl text-center transition-all duration-1000 transform ${
                isVisible.cta ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h2 id="cta-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to amplify your sales?
              </h2>
              <p className="mt-4 text-xl text-purple-100">
                Join thousands of Shopify merchants who are growing their business with Amplify.
              </p>
              <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
                <WaitlistForm
                  buttonSize="lg"
                  buttonClassName="w-full sm:w-auto bg-white text-purple-600 hover:bg-purple-50 transition-all duration-300 transform hover:scale-105"
                  buttonVariant="outline"
                />
                <Link
                  href="https://calendly.com/useamplify/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                  aria-label="Book a demo"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full bg-transparent border-white text-white hover:bg-white/10 transition-all duration-300"
                  >
                    Book a demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
