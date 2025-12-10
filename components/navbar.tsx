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

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ]

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur-md" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto flex h-16 sm:h-18 lg:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8 lg:gap-10">
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/amplify-logo.png" 
              alt="Amplify" 
              width={160} 
              height={40} 
              className="w-auto"
              style={{ height: "auto", maxHeight: "40px" }}
              priority 
            />
          </Link>

          <div className="hidden md:flex items-center gap-5 lg:gap-7">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm lg:text-base font-medium text-gray-600 hover:text-purple-600 transition-colors duration-200 relative group whitespace-nowrap"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <WaitlistForm buttonText="Join Waitlist" buttonClassName="bg-purple-600 hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 h-10 px-5 text-sm lg:text-base" />
        </div>

        <div className="flex md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 min-h-[44px] min-w-[44px] text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-4 py-3 min-h-[44px] text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 space-y-2">
              <WaitlistForm buttonText="Join Waitlist" buttonClassName="w-full bg-purple-600 hover:bg-purple-700 transition-colors duration-200 py-3 text-base min-h-[44px]" />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
