import Link from "next/link"
import Image from "next/image"
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-10 sm:py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center">
              <Image
                src="/amplify-logo.png"
                alt="Amplify - AI-Powered Ad Automation for Shopify"
                width={140}
                height={35}
                className="h-7 sm:h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
              Automate your ad campaigns and amplify your sales with AI-powered optimization.
            </p>
            <div className="mt-4 sm:mt-6 flex gap-2 sm:gap-3">
              <Link
                href="https://www.instagram.com/useamplify_ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 sm:h-10 sm:w-10 items-center justify-center rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 hover:text-purple-400 transition-colors duration-300" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61576198067484"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 sm:h-10 sm:w-10 items-center justify-center rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 hover:text-purple-400 transition-colors duration-300" />
              </Link>
              <Link
                href="https://x.com/amplifyai_?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 sm:h-10 sm:w-10 items-center justify-center rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200"
                aria-label="X (Twitter)"
              >
                <Twitter className="h-5 w-5 hover:text-purple-400 transition-colors duration-300" />
              </Link>
              <Link
                href="https://www.youtube.com/@UseAmplify"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 sm:h-10 sm:w-10 items-center justify-center rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 hover:text-purple-400 transition-colors duration-300" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-gray-300 tracking-wider uppercase">Product</h3>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/#features"
                  className="inline-flex items-center min-h-[44px] py-2 text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="inline-flex items-center min-h-[44px] py-2 text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-gray-300 tracking-wider uppercase">Legal & Privacy</h3>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="inline-flex items-center min-h-[44px] py-2 text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="inline-flex items-center min-h-[44px] py-2 text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/data-deletion"
                  className="inline-flex items-center min-h-[44px] py-2 text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Delete My Data
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-gray-400 text-center md:text-left">&copy; {new Date().getFullYear()} Amplify. All rights reserved.</p>
            <p className="text-xs sm:text-sm text-gray-400 text-center md:text-right">
              <span itemScope itemType="http://schema.org/Organization">
                <span itemProp="name">Amplify</span> -
                <span itemProp="description">AI-Powered Ad Automation for Shopify Merchants</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
