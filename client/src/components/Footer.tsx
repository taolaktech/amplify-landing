import { Zap, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-16 mt-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-primary fill-primary" />
              </div>
              <span className="font-bold text-xl">Amplify</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Helping Shopify merchants scale with AI-powered creative intelligence and automated ad management.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="mailto:support@useamplify.ai" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Amplify. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hover:bg-slate-200 rounded-full">
              <Twitter className="h-5 w-5 text-slate-500" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-slate-200 rounded-full">
              <Linkedin className="h-5 w-5 text-slate-500" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-slate-200 rounded-full">
              <Instagram className="h-5 w-5 text-slate-500" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
