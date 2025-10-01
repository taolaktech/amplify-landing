"use client"

import { useEffect, useState } from "react"

const stats = [
  {
    value: "2.5x",
    label: "Average ROAS",
    color: "text-purple-600",
  },
  {
    value: "$10M+",
    label: "Ad spend managed",
    color: "text-purple-600",
  },
  {
    value: "$25M+",
    label: "Revenue generated",
    color: "text-purple-600",
  },
  {
    value: "100+",
    label: "Happy merchants",
    color: "text-purple-600",
  },
]

export default function HeroStats({ isVisible }: { isVisible?: boolean }) {
  const [internalVisible, setInternalVisible] = useState(false)

  useEffect(() => {
    if (isVisible !== undefined) {
      setInternalVisible(isVisible)
    } else {
      setInternalVisible(true)
    }
  }, [isVisible])

  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by leading Shopify merchants
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Join hundreds of successful merchants who have transformed their advertising with Amplify
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.label}</dt>
                <dd className={`order-first text-3xl font-semibold tracking-tight ${stat.color} sm:text-5xl`}>
                  <AnimatedValue value={stat.value} isVisible={internalVisible} delay={index * 100} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

function AnimatedValue({ value, isVisible, delay }: { value: string; isVisible: boolean; delay: number }) {
  const [displayValue, setDisplayValue] = useState("0")

  useEffect(() => {
    if (!isVisible) return

    const timer = setTimeout(() => {
      if (value === "2.5x") {
        let current = 0
        const target = 2.5
        const increment = target / 30
        const interval = setInterval(() => {
          current += increment
          if (current >= target) {
            setDisplayValue("2.5x")
            clearInterval(interval)
          } else {
            setDisplayValue(`${current.toFixed(1)}x`)
          }
        }, 50)
      } else if (value === "$10M+") {
        let current = 0
        const target = 10
        const increment = target / 30
        const interval = setInterval(() => {
          current += increment
          if (current >= target) {
            setDisplayValue("$10M+")
            clearInterval(interval)
          } else {
            setDisplayValue(`$${Math.floor(current)}M+`)
          }
        }, 50)
      } else if (value === "$25M+") {
        let current = 0
        const target = 25
        const increment = target / 30
        const interval = setInterval(() => {
          current += increment
          if (current >= target) {
            setDisplayValue("$25M+")
            clearInterval(interval)
          } else {
            setDisplayValue(`$${Math.floor(current)}M+`)
          }
        }, 50)
      } else if (value === "100+") {
        let current = 0
        const target = 100
        const increment = target / 30
        const interval = setInterval(() => {
          current += increment
          if (current >= target) {
            setDisplayValue("100+")
            clearInterval(interval)
          } else {
            setDisplayValue(`${Math.floor(current)}+`)
          }
        }, 50)
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [isVisible, value, delay])

  return <span>{displayValue}</span>
}
