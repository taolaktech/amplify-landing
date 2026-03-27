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
        "relative rounded-2xl p-8 flex flex-col h-full border",
        highlight 
          ? "border-violet-200 shadow-lg bg-white" 
          : "border-gray-200 bg-white"
      )}
    >
      {highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
          Most Popular
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
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
              <Check className="h-4 w-4 text-violet-600 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
              <span className="text-sm text-gray-600">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {bestFor && (
        <div className="mb-6 bg-gray-50 rounded-lg px-4 py-3 border border-gray-100">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Best for</p>
          <p className="text-sm text-gray-700">{bestFor}</p>
        </div>
      )}

      <div className="mt-auto">
        <Button 
          className={cn(
            "w-full rounded-full font-medium transition-transform hover:scale-105",
            highlight 
              ? "bg-violet-600 hover:bg-violet-700 text-white" 
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
