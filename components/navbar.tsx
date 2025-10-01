"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { WaitlistForm } from "@/components/waitlist-form"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur-md py-2 sm:py-2" : "bg-white/80 backdrop-blur-sm py-3 sm:py-4"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/amplify-logo.png" alt="Amplify" width={160} height={40} className="h-8 sm:h-10 w-auto" style={{height: "auto"}} priority />
          </Link>

          <div className="hidden md:ml-10 md:flex md:items-center md:space-x-8">
            {[
              { name: "Features", href: "#features" },
              { name: "Pricing", href: "#pricing" },
              { name: "How It Works", href: "#how-it-works" },
              { name: "Testimonials", href: "#testimonials" },
              { name: "FAQ", href: "#faq" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-600 hover:text-purple-600 transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:flex md:items-center md:space-x-4">
          <WaitlistForm buttonClassName="bg-purple-600 hover:bg-purple-700 transition-all duration-300 transform hover:scale-105" />
          <Link href="https://calendly.com/useamplify/30min" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="transition-all duration-300 hover:bg-purple-50">
              Book a demo
            </Button>
          </Link>
        </div>

        <div className="flex md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="space-y-1 px-4 py-4">
            {[
              { name: "Features", href: "#features" },
              { name: "Pricing", href: "#pricing" },
              { name: "How It Works", href: "#how-it-works" },
              { name: "Testimonials", href: "#testimonials" },
              { name: "FAQ", href: "#faq" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 space-y-3">
              <WaitlistForm buttonClassName="w-full bg-purple-600 hover:bg-purple-700 transition-colors duration-200 py-3 text-base" />
              <Link
                href="https://calendly.com/useamplify/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button
                  variant="outline"
                  className="w-full transition-all duration-300 hover:bg-purple-50 py-3 text-base"
                  onClick={() => setIsOpen(false)}
                >
                  Book a demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
