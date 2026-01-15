import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { SiInstagram, SiFacebook, SiX, SiYoutube } from "react-icons/si";
import amplifyLogo from "@assets/amplify-logo_1768435198168.png";

export function Footer() {
  return (
    <>
      {/* FAQ Contact Section */}
      <div className="bg-slate-900 py-12">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
          <p className="text-gray-400 mb-6">
            Our team is here to help. Contact us for any questions not covered above.
          </p>
          <Button
            className="bg-violet-600 hover:bg-violet-700 text-white rounded-full px-6"
            onClick={() => window.location.href = "mailto:support@useamplify.ai"}
            data-testid="button-contact-support"
          >
            <Mail className="mr-2 h-4 w-4" /> Contact Support
          </Button>
        </div>
      </div>

      {/* CTA Section */}
      <section className="relative bg-violet-600 py-20 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-violet-500/30 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-violet-500/30 rounded-full translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-32 h-32 bg-violet-500/30 rounded-full translate-x-1/2" />
        
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to amplify your sales?
          </h2>
          <p className="text-violet-100 text-lg mb-8">
            Join thousands of Shopify merchants who are growing their business with Amplify.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="bg-white text-violet-700 hover:bg-gray-100 border-0 rounded-full px-8 py-3 font-medium"
              onClick={() => window.open("https://app.useamplify.ai/", "_blank")}
              data-testid="button-cta-try-free"
            >
              Try for Free
            </Button>
            <Button
              className="bg-violet-700 hover:bg-violet-800 text-white rounded-full px-8 py-3 font-medium"
              onClick={() => window.open("https://calendly.com/useamplify/30min", "_blank")}
              data-testid="button-cta-book-demo"
            >
              Book a demo
            </Button>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Logo & Description */}
            <div>
              <div className="flex items-center mb-4">
                <img src={amplifyLogo} alt="Amplify" className="h-7 brightness-0 invert" />
              </div>
              <p className="text-gray-400 text-sm mb-6 max-w-xs">
                Automate your ad campaigns and amplify your sales with AI-powered optimization.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <SiInstagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <SiFacebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <SiX className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <SiYoutube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="text-gray-400 hover:text-white text-sm transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white text-sm transition-colors">Pricing</a></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Legal & Privacy</h4>
              <ul className="space-y-3">
                <li><a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a></li>
                <li><a href="/data-deletion" className="text-gray-400 hover:text-white text-sm transition-colors">Delete My Data</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Amplify. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Amplify - AI-Powered Ad Automation for Shopify Merchants
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
