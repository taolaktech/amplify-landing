import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertSubscriberSchema, type InsertSubscriber } from "@shared/schema";
import { useCreateSubscriber } from "@/hooks/use-subscribers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PricingCard } from "@/components/PricingCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  ArrowRight, 
  BarChart3, 
  Layout, 
  Wand2, 
  Zap, 
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Play
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "quarterly" | "annual">("monthly");
  const createSubscriber = useCreateSubscriber();

  const form = useForm<InsertSubscriber>({
    resolver: zodResolver(insertSubscriberSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = (data: InsertSubscriber) => {
    createSubscriber.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background font-sans blob-bg">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="pt-32 pb-20 md:pt-48 md:pb-32 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance leading-[1.1]">
                Run proven ads that <span className="gradient-text">work</span> and stop wasting money.
              </h1>
              <p className="text-xl text-muted-foreground text-balance leading-relaxed">
                Amplify helps Shopify merchants generate winning creatives, cut losers fast, and scale what converts automatically.
                <br/>
                <span className="text-primary font-medium italic">(yes, it's really that simple)</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="rounded-full px-8 h-14 text-lg shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-1"
                  onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full px-8 h-14 text-lg border-2 hover:bg-secondary/50"
                >
                  <Play className="mr-2 h-5 w-5 fill-current" />
                  Watch Demo
                </Button>
              </div>
              
              <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  Trusted by 100+ Shopify stores
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 blur-3xl rounded-full -z-10" />
              <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden aspect-[4/3] flex items-center justify-center relative group">
                {/* Hero Placeholder Image */}
                <div className="absolute inset-0 bg-slate-800/50 flex flex-col items-center justify-center text-slate-400">
                  <div className="p-4 bg-slate-800 rounded-xl mb-4 shadow-lg border border-slate-700 transform group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=60" 
                      alt="Fashion Product Ad"
                      className="w-64 h-auto rounded-lg shadow-md mb-2 opacity-80"
                    />
                    <div className="h-2 bg-slate-700 rounded w-3/4 mb-2"></div>
                    <div className="h-2 bg-slate-700 rounded w-1/2"></div>
                  </div>
                  <span className="font-mono text-sm bg-black/50 px-3 py-1 rounded-full">Fashion Product Ad Preview</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features" className="py-24 bg-slate-50 border-y border-slate-200">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
            
            {/* Feature 1 */}
            <motion.div {...fadeInUp} className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="absolute -inset-4 bg-indigo-500/10 rounded-3xl blur-xl -z-10" />
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 overflow-hidden aspect-video flex items-center justify-center">
                   {/* Campaign Suggestion Interface Placeholder */}
                   <div className="flex flex-col items-center gap-4 w-full px-8">
                     <div className="w-full h-8 bg-slate-100 rounded-lg animate-pulse" />
                     <div className="grid grid-cols-3 gap-4 w-full">
                       <div className="aspect-square bg-slate-100 rounded-lg animate-pulse" />
                       <div className="aspect-square bg-slate-100 rounded-lg animate-pulse" />
                       <div className="aspect-square bg-slate-100 rounded-lg animate-pulse" />
                     </div>
                     <p className="text-xs text-muted-foreground text-center mt-2">AI generating stunning ads from competitor data...</p>
                   </div>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Wand2 className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Copy Competitor Ads, <br/>
                  <span className="text-primary">Generate stunning on brand ads</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Launch fast across Meta and Google, uncover winning hooks early, and kill weak creatives before they waste spend. Our AI analyzes what works in your niche and adapts it to your brand voice.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div {...fadeInUp} className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Actionable insights that <br/>
                  <span className="text-primary">drives real results</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Smart insights from Shopify, Meta, and Google power AI decisions like when to pause, scale, or relaunch — without manual checks.
                </p>
                <div className="flex items-center gap-8 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-muted-foreground/60">1.2x</div>
                    <div className="text-sm font-medium text-muted-foreground">ROAS Before</div>
                  </div>
                  <ArrowRight className="text-primary h-6 w-6" />
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary">3x</div>
                    <div className="text-sm font-medium text-muted-foreground">ROAS After</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-pink-500/10 rounded-3xl blur-xl -z-10" />
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 aspect-video flex items-center justify-center">
                  {/* Insights Graph Placeholder */}
                  <div className="w-full h-full flex items-end justify-between gap-2 px-4 pb-4 border-b border-l border-slate-200">
                    {[30, 45, 35, 60, 50, 80, 95].map((h, i) => (
                      <div key={i} className="w-full bg-primary/20 rounded-t-sm relative group">
                        <div 
                          className="absolute bottom-0 w-full bg-primary rounded-t-sm transition-all duration-1000"
                          style={{ height: `${h}%` }} 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div {...fadeInUp} className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 relative">
                 <div className="absolute -inset-4 bg-purple-500/10 rounded-3xl blur-xl -z-10" />
                 <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden aspect-video flex items-center justify-center">
                   {/* Campaign Config Placeholder */}
                   <img 
                     src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60"
                     alt="Campaign Configuration"
                     className="w-full h-full object-cover opacity-90"
                   />
                 </div>
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Launch your ads with <br/>
                  <span className="text-primary">total confidence</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Meta and Google offer hundreds of optimization rules. Amplify automatically starts your campaigns with proven configurations that remove guesswork and drive real returns.
                </p>
              </div>
            </motion.div>

          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 bg-background">
          <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">How Amplify works</h2>
              <p className="text-xl text-muted-foreground">Get started in minutes and see results in days, not months.</p>
            </div>

            <div className="space-y-24 relative before:absolute before:left-[19px] md:before:left-1/2 before:top-0 before:h-full before:w-0.5 before:bg-slate-200 before:-z-10">
              
              {/* Step 1 */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 relative items-center">
                <div className="hidden md:block text-right space-y-4 pr-8">
                  <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-100 rotate-2 hover:rotate-0 transition-transform duration-300">
                    <img 
                      src="https://pixabay.com/get/g01b0fbf50977c8ce4d993ef1ae6059eaa7bb24c7c3aeac0e55a05c39513ea00704d487d1c5ef9ffb87f7d32c086171741d1efa3e1c422ea66a89c0cb6d13f96e_1280.jpg" 
                      alt="Connect Shopify" 
                      className="rounded-lg shadow-sm"
                    />
                  </div>
                </div>
                
                <div className="absolute left-0 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg ring-4 ring-white shadow-md">
                  1
                </div>

                <div className="pl-12 md:pl-8 space-y-4">
                  <h3 className="text-2xl font-bold">Connect your Shopify store</h3>
                  <p className="text-muted-foreground">
                    Get started by connecting your Shopify store with just a few clicks. Our seamless integration imports all your products, customers, and sales data automatically.
                  </p>
                  <ul className="space-y-2 text-sm font-medium">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500"/> One-click Shopify integration</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500"/> Secure data connection</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500"/> Automatic product syncing</li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 relative items-center">
                <div className="pl-12 md:pl-0 md:text-right space-y-4 md:pr-8 order-2 md:order-1">
                  <h3 className="text-2xl font-bold">Create AI-powered campaigns</h3>
                  <p className="text-muted-foreground">
                    Generate high-converting ads automatically across Google, Instagram, and Facebook with built-in protections.
                  </p>
                  <ul className="space-y-2 text-sm font-medium inline-block text-left">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500"/> Copy winning ads from competitors</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500"/> Preview platform-optimized creatives</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500"/> AI guardrails protect your budget</li>
                  </ul>
                </div>

                <div className="absolute left-0 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg ring-4 ring-white shadow-md order-1">
                  2
                </div>

                <div className="hidden md:block pl-8 order-2">
                   <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-100 -rotate-2 hover:rotate-0 transition-transform duration-300">
                    <img 
                      src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&auto=format&fit=crop&q=60" 
                      alt="Campaign Dashboard" 
                      className="rounded-lg shadow-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 relative items-center">
                <div className="hidden md:block text-right pr-8">
                   <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-100 rotate-1 hover:rotate-0 transition-transform duration-300">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60" 
                      alt="AI Insights" 
                      className="rounded-lg shadow-sm"
                    />
                  </div>
                </div>

                <div className="absolute left-0 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg ring-4 ring-white shadow-md">
                  3
                </div>

                <div className="pl-12 md:pl-8 space-y-4">
                  <h3 className="text-2xl font-bold">Optimize with AI insights</h3>
                  <p className="text-muted-foreground">
                    Let our AI analyze your performance data and provide actionable insights to improve your ROAS and grow your sales.
                  </p>
                  <ul className="space-y-2 text-sm font-medium">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500"/> AI-powered recommendations</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500"/> Performance analytics</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500"/> Automated budget adjustments</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TEMPLATES GALLERY */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven ads that drive real results</h2>
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {["Top Ads of the Week", "Social & UGC Ads", "Viral Video Stitches", "Video Ads", "Image Ads", "Product Shoots"].map(tag => (
                <span key={tag} className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium transition-colors cursor-pointer border border-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-8 px-8 snap-x snap-mandatory no-scrollbar">
             {[
               { title: "Viral Product Ad", subtitle: "High-converting video ad that drove 10x ROAS", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" },
               { title: "Trending Style Reel", subtitle: "Scroll-stopping creative boosted engagement by 300%", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600" },
               { title: "Product Showcase", subtitle: "Clean visual storytelling that converts browsers", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600" },
               { title: "Lifestyle Feature", subtitle: "Authentic content that resonates with target audiences", img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600" },
               { title: "Brand Story Ad", subtitle: "Compelling narrative that builds emotional connection", img: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600" },
             ].map((card, idx) => (
               <div key={idx} className="min-w-[300px] w-[350px] snap-center bg-white/5 rounded-2xl overflow-hidden border border-white/10 group hover:border-primary/50 transition-all duration-300">
                 <div className="aspect-[4/5] relative overflow-hidden">
                   <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                     <h3 className="font-bold text-xl mb-1">{card.title}</h3>
                     <p className="text-sm text-gray-300">{card.subtitle}</p>
                   </div>
                 </div>
               </div>
             ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 bg-slate-50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Loved by Shopify merchants</h2>
            <p className="text-xl text-muted-foreground">See what our customers have to say about Amplify</p>
          </div>
          
          <div className="container max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
            {[
              { name: "Kyra", role: "Fashion Founder", quote: "We scaled from 50 to 500 daily orders in just two months. The AI creates better ads than my agency did.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" },
              { name: "Kaya", role: "Home Decor", quote: "The automated budget adjustments saved us thousands. It cuts losers instantly and scales winners while I sleep.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
              { name: "Haley", role: "Beauty Brand", quote: "I was skeptical about AI creatives, but the engagement rates speak for themselves. 300% increase in CTR.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop" }
            ].map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-primary/10">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div className="mb-6 flex gap-1 justify-center text-yellow-400">
                  {[1,2,3,4,5].map(i => <Zap key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-lg italic text-muted-foreground mb-6">"{t.quote}"</p>
                <div>
                  <h4 className="font-bold text-lg">{t.name}</h4>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-24 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple, transparent pricing</h2>
            <div className="inline-flex items-center gap-1 bg-slate-100 p-1 rounded-full text-sm font-medium">
              <button 
                onClick={() => setBillingPeriod("monthly")}
                className={`px-4 py-2 rounded-full transition-all ${billingPeriod === 'monthly' ? 'bg-white shadow text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setBillingPeriod("quarterly")}
                className={`px-4 py-2 rounded-full transition-all ${billingPeriod === 'quarterly' ? 'bg-white shadow text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Quarterly <span className="text-xs text-green-600 font-bold ml-1">10% off</span>
              </button>
              <button 
                onClick={() => setBillingPeriod("annual")}
                className={`px-4 py-2 rounded-full transition-all ${billingPeriod === 'annual' ? 'bg-white shadow text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Annual <span className="text-xs text-green-600 font-bold ml-1">20% off</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              title="Starter Plan"
              price={billingPeriod === 'monthly' ? "$29" : billingPeriod === 'quarterly' ? "$26" : "$23"}
              description="Launch ad creatives fast and validate your products across multiple channels."
              features={[
                { text: "2,000 AI credits/month" },
                { text: "Import up to 5 Shopify products" },
                { text: "Generate multiple ad concepts" },
                { text: "Run automated ads on Google & Meta" },
                { text: "Unlimited ad spend" },
                { text: "0% commission on ad spend" },
                { text: "1GB assets storage" }
              ]}
            />
            
            <PricingCard
              title="Grow Plan"
              price={billingPeriod === 'monthly' ? "$59" : billingPeriod === 'quarterly' ? "$53" : "$47"}
              description="Built for brands moving past testing into consistent growth."
              highlight={true}
              features={[
                { text: "Everything in Starter" },
                { text: "7-day free trial" },
                { text: "Up to 3 seats" },
                { text: "Import up to 20 Shopify products" },
                { text: "10GB assets storage" },
                { text: "5,000 AI credits/month" }
              ]}
            />
            
            <PricingCard
              title="Scale Plan"
              price={billingPeriod === 'monthly' ? "$189" : billingPeriod === 'quarterly' ? "$170" : "$151"}
              description="Unlimited speed for brands scaling across many campaigns and channels."
              features={[
                { text: "Everything in Grow" },
                { text: "Up to 10 seats" },
                { text: "Import up to 50+ Shopify products" },
                { text: "1TB assets storage" },
                { text: "10,000+ AI credits/month" },
                { text: "Automated A/B testing" }
              ]}
            />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 bg-slate-50">
          <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently asked questions</h2>
              <p className="text-xl text-muted-foreground">Everything you need to know about Amplify.</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-2 md:p-6">
              <Accordion type="single" collapsible className="w-full">
                {[
                  { q: "What is Amplify?", a: "Amplify is an AI-powered ad automation platform designed specifically for Shopify merchants. It helps you create, manage, and optimize ad campaigns across multiple platforms to maximize your ROAS." },
                  { q: "How does Amplify work with my Shopify store?", a: "Amplify integrates directly with your Shopify store through a one-click installation. It automatically imports your products and sales data to train the AI on what works for your specific store." },
                  { q: "Which ad platforms does Amplify support?", a: "Currently we support Facebook, Instagram, and Google Ads. We are constantly adding new platforms to help you reach customers everywhere." },
                  { q: "Do I need technical knowledge to use Amplify?", a: "Not at all! Amplify is designed to be user-friendly. Our AI handles the complex technical optimization while you maintain control over strategy and budget." },
                  { q: "Can I control my ad spend with Amplify?", a: "Yes, absolutely. You set the budget limits and Amplify works within them. You always have full control over your investment." },
                  { q: "How long does it take to see results?", a: "Many merchants see improvements within the first week. The AI learns rapidly from your data, so performance typically improves consistently over the first month." },
                  { q: "Is there a contract or commitment?", a: "No long-term contracts. All plans are month-to-month and you can cancel anytime." }
                ].map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b-0 mb-2 last:mb-0">
                    <AccordionTrigger className="hover:bg-slate-50 px-4 rounded-lg text-left font-medium text-lg">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 text-muted-foreground pt-2 pb-4 text-base leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">Still have questions?</p>
              <a href="mailto:support@useamplify.ai" className="font-semibold text-primary hover:underline">Contact Support</a>
            </div>
          </div>
        </section>

        {/* CTA / WAITLIST FORM */}
        <section id="waitlist" className="py-32 container max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-indigo-900 to-violet-800 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">Ready to amplify your sales?</h2>
              <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
                Join thousands of Shopify merchants who are growing their business with Amplify.
              </p>
              
              <div className="max-w-md mx-auto bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <Input 
                    {...form.register("email")}
                    placeholder="Enter your email address" 
                    className="h-12 bg-white/90 text-foreground placeholder:text-muted-foreground border-0 text-lg px-4"
                  />
                  <Button 
                    type="submit" 
                    disabled={createSubscriber.isPending}
                    className="w-full h-12 text-lg font-bold bg-white text-primary hover:bg-indigo-50"
                  >
                    {createSubscriber.isPending ? "Joining..." : "Join Waitlist"}
                  </Button>
                  {form.formState.errors.email && (
                    <p className="text-red-300 text-sm text-left px-2">{form.formState.errors.email.message}</p>
                  )}
                </form>
              </div>
              
              <p className="text-sm text-indigo-200 pt-4">
                Limited spots available for early access.
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
