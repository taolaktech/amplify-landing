import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertSubscriberSchema, type InsertSubscriber } from "@shared/schema";
import { useCreateSubscriber } from "@/hooks/use-subscribers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PricingCard } from "@/components/PricingCard";
import { VideoModal } from "@/components/VideoModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { 
  ArrowRight, 
  Check,
  Play,
  Star,
  Sparkles,
  CircleCheck
} from "lucide-react";

import step1Image from "@assets/Connect_store_1768435395497.gif";
import step2Image from "@assets/campaign-snapshot_(1)_1768435612757.jpeg";
import step3Image from "@assets/insights-screenshot_(2)_1768435612765.png";
import modelImage from "@assets/Kahe_set_in_S_P_6_610x_crop_center_(1)_1768434928821.webp";
import insightsScreenshot from "@assets/insights-screenshot_(1)_1768434928822.png";

import adVideo1 from "@assets/c7b6bc98-06b5-4abe-b953-d711054aa817_1768436430392.mp4";
import adVideo2 from "@assets/AQM5E_KyXvEkXlDaJzULHef3U3ucw0ALNHOBTdWQhm0THUpyVxZEBzJ6uwhfAS_1768436430396.mp4";
import adVideo3 from "@assets/AQNKvb0XrvGGeMdXKdSpf6XVFDlVt-w90uoCq4Y1GEzMlg9kEqz0WDbwdLrtNV_1768436430397.mp4";
import adVideo4 from "@assets/AQP8eyx5D8yntxpO7rCFFWxb7gSKlojV0dcA6loTB-tl462LjLSTB4CaYtV57e_1768436430397.mp4";
import adVideo5 from "@assets/AQPdjIi8QFIM2GG9T0nvkISyhZBFUWW7wA02iq1BUZlxw0t6CUMDiTIHwRswe4_1768436430397.mp4";
import adVideo6 from "@assets/AQPRTgBVdYj83IchzmGk4NrNf2XZQR3IcDDCwIx8X96g8Fvy7mSQjyFl24hnUi_1768436430398.mp4";
import adVideo7 from "@assets/a5928bf1-8cca-4f11-80c1-d48602facf5a_1768436430398.mp4";
import adVideo8 from "@assets/b45b2243-c01d-4719-a6d7-4aec7dfac4e5_1768436430398.mp4";
import adVideo9 from "@assets/a069269c-49e5-4068-a750-007e54a3d580_1768436430399.mp4";
import adVideo10 from "@assets/a7aa648c-6d7b-463a-8c47-998e25342aaa_1768436430399.mp4";
import adVideo11 from "@assets/Download_(1)_1768436430400.mp4";
import adVideo12 from "@assets/Download_(4)_1768436430400.mp4";
import adVideo13 from "@assets/Download_(5)_1768436430400.mp4";
import adVideo14 from "@assets/Download_(6)_1768436430400.mp4";
import adVideo15 from "@assets/Download_(9)_1768436430401.mp4";
import adImage1 from "@assets/b82c1957-5f8a-4cd2-998e-bf7f45f86db2_1768436430399.png";

export default function Home() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "quarterly" | "annual">("monthly");
  const [activeCategory, setActiveCategory] = useState("Top Ads of the Week");
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [testimonialVideo, setTestimonialVideo] = useState<string | null>(null);
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

  const getPriceMultiplier = () => {
    if (billingPeriod === "quarterly") return 0.9;
    if (billingPeriod === "annual") return 0.8;
    return 1;
  };

  const formatPrice = (base: number) => {
    const price = Math.round(base * getPriceMultiplier());
    return `$${price}`;
  };

  const categories = [
    "Top Ads of the Week",
    "Social & UGC Ads", 
    "Viral Video Stitches",
    "Video Ads",
    "Image Ads",
    "Product Shoots"
  ];

  const adTemplates: { title: string; subtitle: string; media: string; type: "video" | "image"; category: string }[] = [
    { title: "Viral Product Ad", subtitle: "High-converting video ad that drove 10x ROAS.", media: adVideo1, type: "video", category: "Top Ads of the Week" },
    { title: "Trending Style Reel", subtitle: "Scroll-stopping creative that boosted engagement.", media: adVideo2, type: "video", category: "Top Ads of the Week" },
    { title: "Product Showcase", subtitle: "Clean visual storytelling that converts.", media: adVideo3, type: "video", category: "Top Ads of the Week" },
    { title: "Lifestyle Feature", subtitle: "Authentic content that resonates.", media: adVideo4, type: "video", category: "Top Ads of the Week" },
    { title: "Brand Story Ad", subtitle: "Compelling narrative that builds connection.", media: adVideo5, type: "video", category: "Top Ads of the Week" },
    { title: "UGC Review", subtitle: "Authentic customer testimonial content.", media: adVideo6, type: "video", category: "Social & UGC Ads" },
    { title: "Influencer Feature", subtitle: "Social-first content that drives engagement.", media: adVideo7, type: "video", category: "Social & UGC Ads" },
    { title: "User Story", subtitle: "Real customer experiences shared.", media: adVideo8, type: "video", category: "Social & UGC Ads" },
    { title: "Viral Stitch", subtitle: "Trending duet-style content.", media: adVideo9, type: "video", category: "Viral Video Stitches" },
    { title: "Reaction Video", subtitle: "Engaging response format content.", media: adVideo10, type: "video", category: "Viral Video Stitches" },
    { title: "Product Demo", subtitle: "Clear product demonstration video.", media: adVideo11, type: "video", category: "Video Ads" },
    { title: "Feature Highlight", subtitle: "Key benefits showcased.", media: adVideo12, type: "video", category: "Video Ads" },
    { title: "Brand Video", subtitle: "Premium brand storytelling.", media: adVideo13, type: "video", category: "Video Ads" },
    { title: "Lifestyle Ad", subtitle: "Product in real-world context.", media: adVideo14, type: "video", category: "Video Ads" },
    { title: "Quick Promo", subtitle: "Fast-paced promotional content.", media: adVideo15, type: "video", category: "Video Ads" },
    { title: "Product Shot", subtitle: "Professional product photography.", media: adImage1, type: "image", category: "Product Shoots" },
    { title: "Product Shot", subtitle: "Professional product photography.", media: adImage1, type: "image", category: "Image Ads" },
  ];

  const filteredAds = adTemplates.filter(ad => ad.category === activeCategory);

  const testimonials = [
    { name: "Kyra", channel: "Amplify Ads", videoId: "lIEPeEHZZH8" },
    { name: "Kaya", channel: "Amplify Ads", videoId: "18XqlvyiYco" },
    { name: "Haley", channel: "Amplify Ads", videoId: "EKejm_BetE8" },
  ];

  const faqItems = [
    {
      question: "What is Amplify?",
      answer: "Amplify is an AI-powered ad automation platform designed specifically for Shopify merchants. It helps you create, manage, and optimize ad campaigns across multiple platforms to maximize your ROAS (Return on Ad Spend) and grow your sales."
    },
    {
      question: "How does Amplify work with my Shopify store?",
      answer: "Amplify integrates directly with your Shopify store through a simple one-click installation. Once connected, it automatically imports your products, analyzes your store data, and uses AI to create and optimize ad campaigns tailored to your specific business needs."
    },
    {
      question: "Which ad platforms does Amplify support?",
      answer: "Amplify currently supports Facebook, Instagram, and Google. We're constantly adding more platforms to help you reach your customers wherever they are."
    },
    {
      question: "Do I need technical knowledge to use Amplify?",
      answer: "Not at all! Amplify is designed to be user-friendly and accessible to merchants of all technical levels. Our AI handles the complex parts of ad creation and optimization, while you maintain control over your strategy and budget."
    },
    {
      question: "How much does Amplify cost?",
      answer: "Amplify offers several pricing tiers to fit businesses of all sizes. We have plans starting at $29/month. Our pricing is transparent with no hidden fees. Check our pricing section for more details."
    },
    {
      question: "Can I control my ad spend with Amplify?",
      answer: "You set your budget, and Amplify works within those constraints. Our AI optimizes your campaigns to get the most out of every dollar you spend, but you always maintain complete control over how much you invest."
    },
    {
      question: "How long does it take to see results with Amplify?",
      answer: "Many merchants see improvements in their ad performance within the first week of using Amplify. However, as our AI learns more about your store and customers over time, results typically continue to improve. Most merchants report significant ROAS improvements within the first month."
    },
    {
      question: "Is there a contract or commitment?",
      answer: "No long-term contracts required. All Amplify plans are month-to-month, and you can upgrade, downgrade, or cancel at any time. We're confident you'll love the results you get with Amplify."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="pt-24 pb-16 relative overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-violet-50/30 to-violet-100/50" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-violet-200/40 to-transparent" />
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in-up opacity-0">
              Run proven ads that work
              <br />
              <span className="italic text-violet-600">and stop wasting money.</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-2 animate-fade-in-up opacity-0 animate-delay-100">
              Amplify helps Shopify merchants generate winning creatives, cut losers fast, and scale what converts automatically.
            </p>
            
            <p className="text-sm text-gray-500 italic mb-8 animate-fade-in-up opacity-0 animate-delay-200">
              (yes, it's really that simple)
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6 animate-fade-in-up opacity-0 animate-delay-300">
              <Button 
                className="bg-violet-600 hover:bg-violet-700 text-white rounded-full px-8 py-3 text-base font-medium transition-transform hover:scale-105"
                onClick={() => window.open("http://app.useamplify.ai/", "_blank")}
                data-testid="button-hero-try-free"
              >
                Try for Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline"
                className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-8 py-3 text-base font-medium"
                onClick={() => setDemoModalOpen(true)}
                data-testid="button-hero-watch-demo"
              >
                <Play className="mr-2 h-4 w-4 fill-current" /> Watch Demo
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-gray-400" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-gray-400 fill-gray-400" />
                Trusted by 100+ Shopify stores
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Feature 1 - Ad Generation */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={modelImage} 
                    alt="Fashion Model" 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <Button size="sm" className="bg-gray-900 hover:bg-gray-800 text-white rounded-md text-xs px-4">
                      Shop Now
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-0.5">Copy Competitor Ads,</h3>
                  <h3 className="font-semibold text-emerald-500 mb-3">Generate stunning on brand ads</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Launch fast across Meta and Google, uncover winning hooks early, and kill weak creatives before they waste spend.
                  </p>
                </div>
              </div>

              {/* Feature 2 - AI Insights */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-4 w-4 text-violet-500" />
                    <span className="font-semibold text-gray-900 text-sm">AI Insights</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-4">Smart suggestions to boost your ad results.</p>
                  
                  <div className="flex gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">All</span>
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-medium">Campaign Suggestion</span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Budget Optimization</span>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-orange-600">S</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 text-sm mb-0.5">'Weekend Clearance Sale' Campaign Ready</p>
                        <p className="text-[10px] text-orange-500 font-medium uppercase tracking-wide mb-1">CAMPAIGN SUGGESTION</p>
                        <p className="text-xs text-gray-500 leading-relaxed">Your campaign is complete and ready to go. Launch now to capture weekend shoppers.</p>
                        
                        <div className="flex items-center gap-2 mt-3">
                          <div className="flex -space-x-2">
                            <div className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white" />
                            <div className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white" />
                            <div className="w-6 h-6 bg-gray-500 rounded-full border-2 border-white" />
                          </div>
                          <span className="text-xs text-gray-400">+12</span>
                          <span className="text-xs text-gray-500">View Products</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-2">
                  <h3 className="font-semibold text-gray-900 mb-0.5">Actionable insights that</h3>
                  <h3 className="font-semibold text-emerald-500 mb-3">drives real results</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Smart insights from Shopify, Meta, and Google power AI decisions like when to pause, scale, or relaunch — without manual checks.
                  </p>
                </div>
              </div>

              {/* Feature 3 - ROAS */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-100 overflow-hidden shadow-sm">
                <div className="p-6">
                  <div className="flex justify-end mb-6">
                    <span className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      ROAS
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-light text-gray-400">1.2<span className="text-xl">x</span></div>
                      <div className="text-xs text-gray-400 mt-1">Before</div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-orange-400" />
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-900">3<span className="text-orange-500">x</span></div>
                      <div className="text-xs text-gray-500 mt-1">After</div>
                    </div>
                  </div>
                  
                  <div className="h-2.5 bg-white/60 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-teal-400 to-emerald-400 w-3/4 rounded-full" />
                  </div>
                </div>
                <div className="p-6 pt-4">
                  <h3 className="font-semibold text-gray-900 mb-0.5">Meta and Google offer hundreds of optimization rules –</h3>
                  <h3 className="font-semibold text-orange-500 mb-3">launch your ads with confidence</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Amplify automatically starts your campaigns with proven configurations that remove guesswork and drive real returns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Amplify works</h2>
              <p className="text-gray-600">Get started in minutes and see results in days, not months.</p>
            </div>

            {/* Step 1 */}
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center text-sm font-semibold">
                      1
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Connect your Shopify store</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Get started by connecting your Shopify store with just a few clicks. Our seamless integration imports all your products, customers, and sales data automatically.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CircleCheck className="h-4 w-4 text-teal-500" /> One-click Shopify integration
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CircleCheck className="h-4 w-4 text-teal-500" /> Secure data connection
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CircleCheck className="h-4 w-4 text-teal-500" /> Automatic product syncing
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden group">
                  <img src={step1Image} alt="Connect Shopify" className="w-full h-auto transition-transform duration-300 group-hover:scale-105" />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden group">
                  <img src={step2Image} alt="Create Campaigns" className="w-full h-auto transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center text-sm font-semibold">
                      2
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Create AI-powered campaigns that protect your ad spend</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Generate high-converting ads automatically across Google, Instagram, and Facebook.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CircleCheck className="h-4 w-4 text-teal-500" /> Copy and launch winning ads from competitors
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CircleCheck className="h-4 w-4 text-teal-500" /> Preview and launch with confidence using platform-optimized creatives
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CircleCheck className="h-4 w-4 text-teal-500" /> AI guardrails protect your budget by auto-pausing ads when ROAS drops and scaling winners
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center text-sm font-semibold">
                      3
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Optimize with AI insights</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Let our AI analyze your performance data and provide actionable insights to improve your ROAS and grow your sales.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CircleCheck className="h-4 w-4 text-teal-500" /> AI-powered recommendations
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CircleCheck className="h-4 w-4 text-teal-500" /> Performance analytics
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CircleCheck className="h-4 w-4 text-teal-500" /> Automated budget adjustments
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden group">
                  <img src={step3Image} alt="AI Insights" className="w-full h-auto transition-transform duration-300 group-hover:scale-105" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AD TEMPLATES GALLERY */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
              Proven ads that drive real results for your store
            </h2>
            
            {/* Category Tabs - Horizontal scroll on mobile */}
            <div className="flex md:flex-wrap md:justify-center gap-2 mb-12 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                    activeCategory === cat 
                      ? "bg-violet-600 text-white" 
                      : "bg-slate-800 text-gray-300 hover:bg-slate-700"
                  }`}
                  data-testid={`button-category-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">TOP ADS OF THE WEEK</h3>
              <p className="text-gray-400">Copy winning ad creatives trending across Shopify right now — proven to convert.</p>
            </div>

            {/* Ad Cards - Horizontal scroll on mobile */}
            <div className="flex md:grid md:grid-cols-5 gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible">
              {filteredAds.length > 0 ? filteredAds.map((ad, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-800 rounded-xl overflow-hidden group flex-shrink-0 w-[160px] md:w-auto snap-start"
                  data-testid={`card-ad-${idx}`}
                >
                  <div className="aspect-[9/16] bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
                    {ad.type === "video" ? (
                      <video 
                        src={ad.media}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        muted
                        loop
                        playsInline
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                      />
                    ) : (
                      <img 
                        src={ad.media}
                        alt={ad.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                    {ad.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                          <Play className="h-6 w-6 text-white fill-white" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-white text-sm mb-1">{ad.title}</h4>
                    <p className="text-xs text-gray-400">{ad.subtitle}</p>
                  </div>
                </div>
              )) : (
                <div className="col-span-5 text-center py-12 text-gray-500">
                  No ads in this category yet.
                </div>
              )}
            </div>
            <p className="text-center text-gray-500 text-xs mt-2 md:hidden">Swipe to see more</p>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Loved by Shopify merchants
            </h2>
            <p className="text-gray-400 text-center mb-12">
              See what our customers have to say about Amplify
            </p>

            {/* Testimonials - Horizontal scroll on mobile */}
            <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible">
              {testimonials.map((t, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 cursor-pointer group flex-shrink-0 w-[280px] md:w-auto snap-start"
                  onClick={() => setTestimonialVideo(t.videoId)}
                  data-testid={`card-testimonial-${idx}`}
                >
                  <div className="p-4 flex items-center justify-between border-b border-slate-700">
                    <div>
                      <p className="text-white text-sm font-medium">Review from {t.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-5 h-5 bg-violet-600 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white">A</span>
                        </div>
                        <span className="text-gray-400 text-xs">{t.channel}</span>
                        <Button variant="outline" size="sm" className="text-xs h-6 px-2 bg-transparent border-gray-600 text-gray-300">
                          Subscribe
                        </Button>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 -rotate-45" />
                  </div>
                  <div className="aspect-[9/16] relative overflow-hidden">
                    <img 
                      src={`https://img.youtube.com/vi/${t.videoId}/maxresdefault.jpg`}
                      alt={`${t.name} testimonial`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 text-white fill-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-xs mt-2 md:hidden">Swipe to see more</p>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h2>
              <p className="text-gray-600 mb-8">
                Choose the plan that's right for your business and start amplifying your sales today.
              </p>
              
              <div className="inline-flex flex-wrap justify-center items-center gap-1 bg-gray-100 p-1 rounded-full text-sm">
                <button 
                  onClick={() => setBillingPeriod("monthly")}
                  className={`px-3 sm:px-4 py-2 rounded-full transition-all text-xs sm:text-sm ${billingPeriod === 'monthly' ? 'bg-white shadow text-gray-900 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                  data-testid="button-billing-monthly"
                >
                  Monthly
                </button>
                <button 
                  onClick={() => setBillingPeriod("quarterly")}
                  className={`px-3 sm:px-4 py-2 rounded-full transition-all text-xs sm:text-sm ${billingPeriod === 'quarterly' ? 'bg-white shadow text-gray-900 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                  data-testid="button-billing-quarterly"
                >
                  Quarterly <span className="text-violet-600 font-medium ml-1">10%</span>
                </button>
                <button 
                  onClick={() => setBillingPeriod("annual")}
                  className={`px-3 sm:px-4 py-2 rounded-full transition-all text-xs sm:text-sm ${billingPeriod === 'annual' ? 'bg-white shadow text-gray-900 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                  data-testid="button-billing-annual"
                >
                  Annual <span className="text-violet-600 font-medium ml-1">20%</span>
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <PricingCard 
                title="Starter Plan"
                price={formatPrice(35)}
                description="Perfect for launching your first ad creatives and validating product ideas."
                bestFor="New Shopify stores testing Meta ads."
                features={[
                  { text: "500 AI credits/month for ad generation" },
                  { text: "Facebook & Instagram ads only" },
                  { text: "Generate image ads, video ads, and ad copy" },
                  { text: "Generate up to 50 AI ad creatives per month" },
                  { text: "Unlimited ad spend" },
                  { text: "0% commission on ad spend" },
                  { text: "1GB asset storage" },
                  { text: "Use your brand kit (fonts, colors, logo)" },
                ]}
              />
              
              <PricingCard 
                title="Grow Plan"
                price={formatPrice(99)}
                description="Built for brands moving past testing into consistent growth."
                highlight={true}
                bestFor="Brands running multiple campaigns across Meta and Google."
                features={[
                  { text: "1,500 AI credits/month" },
                  { text: "Facebook, Instagram + Google Ads generation" },
                  { text: "Generate image ads, video ads, ad copy and Google text ads" },
                  { text: "Generate up to 200 AI ad creatives per month" },
                  { text: "10GB asset storage" },
                  { text: "Everything in Starter" },
                ]}
              />
              
              <PricingCard 
                title="Scale Plan"
                price={formatPrice(199)}
                description="Unlimited creative production for brands scaling multiple campaigns."
                bestFor="Scaling brands running multiple campaigns and testing creatives weekly."
                features={[
                  { text: "3,000 AI credits/month" },
                  { text: "Facebook, Instagram + Google Ads generation" },
                  { text: "Generate image ads, video ads, ad copy and Google text ads" },
                  { text: "Generate up to 500 AI ad creatives per month" },
                  { text: "Automated A/B testing for offers and creatives" },
                  { text: "1TB asset storage" },
                  { text: "Everything in Grow" },
                ]}
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 bg-slate-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Frequently asked questions
            </h2>
            <p className="text-gray-400 text-center mb-12">
              Everything you need to know about Amplify and how it can help grow your Shopify store.
            </p>

            <Accordion type="single" collapsible className="space-y-2">
              {faqItems.map((item, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`item-${idx}`}
                  className="border-b border-slate-700 py-2"
                  data-testid={`accordion-faq-${idx}`}
                >
                  <AccordionTrigger className="text-white hover:no-underline text-left font-medium py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* WAITLIST FORM - Visible with proper styling */}
        <section id="waitlist" className="py-16 bg-white">
          <div className="max-w-md mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">Join the Waitlist</h3>
            <p className="text-gray-600 text-center mb-6">Be the first to know when we launch.</p>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className={cn(
                    "w-full rounded-full px-4",
                    form.formState.errors.email && "border-red-500 focus-visible:ring-red-500"
                  )}
                  {...form.register("email")}
                  data-testid="input-waitlist-email"
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-xs mt-1.5 px-4" data-testid="text-waitlist-error">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
              <Button 
                type="submit" 
                disabled={createSubscriber.isPending}
                className="bg-violet-600 hover:bg-violet-700 text-white rounded-full px-6 h-10"
                data-testid="button-waitlist-submit"
              >
                {createSubscriber.isPending ? "Joining..." : "Try for Free"}
              </Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />

      <VideoModal 
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        videoId="UdMbWqs2h8w"
      />

      <VideoModal 
        isOpen={!!testimonialVideo}
        onClose={() => setTestimonialVideo(null)}
        videoId={testimonialVideo || ""}
        isShort
      />
    </div>
  );
}
