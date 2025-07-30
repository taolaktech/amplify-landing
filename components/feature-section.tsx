import { Zap, Target, BarChart3, Shield, Clock, Users } from "lucide-react"

export function FeatureSection() {
  const features = [
    {
      icon: Zap,
      title: "AI-Powered Optimization",
      description:
        "Advanced machine learning algorithms continuously optimize your campaigns for maximum ROAS and performance.",
    },
    {
      icon: Target,
      title: "Multi-Platform Management",
      description: "Manage Google Ads, Meta Ads, and AdRoll campaigns from a single, unified dashboard.",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description:
        "Get instant insights into campaign performance with detailed analytics and actionable recommendations.",
    },
    {
      icon: Shield,
      title: "Automated Budget Control",
      description:
        "Smart budget allocation and spend limits protect your advertising investment while maximizing results.",
    },
    {
      icon: Clock,
      title: "24/7 Campaign Monitoring",
      description: "Round-the-clock monitoring ensures your campaigns are always performing at their best.",
    },
    {
      icon: Users,
      title: "Audience Targeting",
      description: "Leverage customer data and AI insights to reach the most valuable audiences for your business.",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Powerful Features for Modern E-commerce
          </h2>
          <p className="text-xl text-gray-200 leading-7 max-w-3xl mx-auto">
            Everything you need to automate, optimize, and scale your advertising campaigns across all major platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-200 leading-6">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
