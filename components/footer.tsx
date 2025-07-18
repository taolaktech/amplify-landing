import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center">
              <Image
                src="/amplify-logo.png"
                alt="Amplify - AI-Powered Ad Automation for Shopify"
                width={140}
                height={35}
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Automate your ad campaigns and amplify your sales with AI-powered optimization.
            </p>
            <div className="mt-4 flex space-x-6">
              <Link
                href="https://www.instagram.com/useamplify_ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 hover:text-purple-400 transition-colors duration-300" />
              </Link>
              <Link
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="X (Twitter)"
              >
                <Twitter className="h-5 w-5 hover:text-purple-400 transition-colors duration-300" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 hover:text-purple-400 transition-colors duration-300" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 hover:text-purple-400 transition-colors duration-300" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Product</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/#features"
                  className="text-base text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="text-base text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-base text-gray-400 hover:text-white transition-colors duration-200">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Legal & Privacy</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/privacy"
                  className="text-base text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-base text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/data-deletion"
                  className="text-base text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Delete My Data
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Amplify. All rights reserved.</p>
            <p className="mt-4 text-sm text-gray-400 md:mt-0">
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
