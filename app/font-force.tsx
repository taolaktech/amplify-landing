"use client"

import { useEffect } from "react"

export default function FontForce() {
  useEffect(() => {
    // Force the font to be applied
    document.documentElement.style.setProperty(
      "font-family",
      "var(--font-eudoxus-sans), system-ui, sans-serif",
      "important",
    )

    // Apply to all elements
    const allElements = document.querySelectorAll("*")
    allElements.forEach((el) => {
      if (el instanceof HTMLElement) {
        el.style.setProperty("font-family", "var(--font-eudoxus-sans), system-ui, sans-serif", "important")
      }
    })
  }, [])

  return null
}
