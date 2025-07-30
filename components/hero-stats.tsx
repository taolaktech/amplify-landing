interface HeroStatsProps {
  isVisible: boolean
}

export default function HeroStats({ isVisible }: HeroStatsProps) {
  return (
    <div className="container mx-auto mt-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 rounded-xl bg-white p-6 shadow-lg sm:grid-cols-2 md:grid-cols-4 border border-gray-200">
        {[
          { label: "Average ROAS", value: "2.5x" },
          { label: "Ad spend managed", value: "$10M+" },
          { label: "Revenue generated", value: "$25M+" },
          { label: "Happy merchants", value: "1,000+" },
        ].map((stat, index) => (
          <div
            key={index}
            className={`text-center transition-all duration-700 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <p className="text-3xl font-bold text-purple-600">{stat.value}</p>
            <p className="mt-1 text-sm font-medium text-gray-700">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
