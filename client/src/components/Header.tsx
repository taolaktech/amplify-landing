import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Zap className="h-6 w-6 text-primary fill-primary" />
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground">
            Amplify
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            className="hidden md:flex text-muted-foreground hover:text-foreground"
            onClick={() => window.open('https://demo.amplify.ai', '_blank')}
          >
            Watch Demo
          </Button>
          <Button 
            onClick={scrollToWaitlist}
            className="rounded-full px-6 font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </header>
  );
}
