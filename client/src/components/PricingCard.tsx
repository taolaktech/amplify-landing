import { Check, ArrowRight } from "lucide-react";
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
  includesLabel?: string;
  bestFor?: string;
}

export function PricingCard({ 
  title, 
  price, 
  description, 
  features, 
  highlight = false,
  includesLabel = "Includes",
  bestFor,
}: PricingCardProps) {
  return (
    <div 
      className={cn(
        "relative rounded-2xl p-8 flex flex-col h-full transition-transform",
        highlight 
          ? "bg-gradient-to-br from-violet-100 via-fuchsia-50 to-rose-100 shadow-2xl scale-[1.03] border-0" 
          : "bg-white border border-gray-200 shadow-sm hover:shadow-md"
      )}
    >
      {highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white px-5 py-1.5 rounded-full text-xs font-semibold shadow-md whitespace-nowrap">
          Most Popular
        </div>
      )}
      
      <div className="mb-6">
        <h3 className={cn("text-lg font-semibold mb-3", highlight ? "text-gray-900" : "text-gray-900")}>
          {title}
        </h3>
        <div className="flex items-baseline gap-1 mb-3">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-500">/month</span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mb-6 flex-1">
        <p className="text-sm font-semibold text-gray-900 mb-4">{includesLabel}</p>
        <div className="space-y-3">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <Check
                className={cn("h-4 w-4 mt-0.5 flex-shrink-0", highlight ? "text-violet-600" : "text-violet-600")}
                strokeWidth={2.5}
              />
              <span className="text-sm text-gray-700">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {bestFor && (
        <div className={cn(
          "mb-6 rounded-xl px-4 py-3 border",
          highlight ? "bg-white/50 border-white/60" : "bg-gray-50 border-gray-100"
        )}>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Best for</p>
          <p className="text-sm text-gray-700">{bestFor}</p>
        </div>
      )}

      <div className="mt-auto">
        <Button 
          className={cn(
            "w-full rounded-full font-medium transition-all hover:scale-105",
            highlight 
              ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white shadow-md border-0" 
              : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
          )}
          onClick={() => window.open("http://app.useamplify.ai/", "_blank")}
          data-testid={`button-pricing-${title.toLowerCase().replace(/\s+/g, "-")}`}
        >
          Try for Free {highlight && <ArrowRight className="ml-2 h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
}
