import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  highlight?: boolean;
  buttonText?: string;
}

export function PricingCard({ 
  title, 
  price, 
  description, 
  features, 
  highlight = false,
  buttonText = "Join Waitlist"
}: PricingCardProps) {
  return (
    <div 
      className={cn(
        "relative rounded-2xl p-8 transition-all duration-300 flex flex-col h-full",
        highlight 
          ? "bg-foreground text-background shadow-2xl scale-105 border-0 ring-4 ring-primary/20" 
          : "bg-card border border-border shadow-lg hover:shadow-xl hover:border-primary/50"
      )}
    >
      {highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-md">
          Most Popular
        </div>
      )}
      
      <div className="mb-8">
        <h3 className={cn("text-xl font-bold mb-2", highlight ? "text-primary-foreground" : "text-foreground")}>
          {title}
        </h3>
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-4xl font-bold tracking-tight">{price}</span>
          <span className={highlight ? "text-primary-foreground/70" : "text-muted-foreground"}>/month</span>
        </div>
        <p className={cn("text-sm leading-relaxed", highlight ? "text-primary-foreground/80" : "text-muted-foreground")}>
          {description}
        </p>
      </div>

      <div className="space-y-4 mb-8 flex-1">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className={cn(
              "mt-0.5 rounded-full p-1", 
              highlight ? "bg-primary text-white" : "bg-primary/10 text-primary"
            )}>
              <Check className="h-3 w-3" strokeWidth={3} />
            </div>
            <span className={cn("text-sm", highlight ? "text-primary-foreground/90" : "text-foreground/90")}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      <Button 
        variant={highlight ? "default" : "outline"}
        className={cn(
          "w-full font-semibold h-12 rounded-xl", 
          highlight 
            ? "bg-primary hover:bg-primary/90 text-white border-0" 
            : "border-2 hover:bg-primary/5 hover:text-primary hover:border-primary"
        )}
        onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
      >
        {buttonText}
      </Button>
    </div>
  );
}
