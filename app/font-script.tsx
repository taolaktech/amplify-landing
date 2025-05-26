"use client"

import { useEffect } from "react"

export default function FontScript() {
  useEffect(() => {
    // Create a style element
    const style = document.createElement("style")

    // Set the CSS content
    style.textContent = `
      @font-face {
        font-family: 'Eudoxus Sans';
        src: url('/fonts/EudoxusSans-ExtraLight.ttf') format('truetype');
        font-weight: 200;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Eudoxus Sans';
        src: url('/fonts/EudoxusSans-Light.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Eudoxus Sans';
        src: url('/fonts/EudoxusSans-Regular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Eudoxus Sans';
        src: url('/fonts/EudoxusSans-Medium.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Eudoxus Sans';
        src: url('/fonts/EudoxusSans-Bold.ttf') format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Eudoxus Sans';
        src: url('/fonts/EudoxusSans-ExtraBold.ttf') format('truetype');
        font-weight: 800;
        font-style: normal;
        font-display: swap;
      }
      
      html, body, * {
        font-family: 'Eudoxus Sans', var(--font-eudoxus-sans), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
      }
    `

    // Append the style element to the head
    document.head.appendChild(style)

    // Apply the font to all elements
    const applyFont = () => {
      document.documentElement.style.setProperty(
        "font-family",
        "'Eudoxus Sans', var(--font-eudoxus-sans), system-ui, sans-serif",
        "important",
      )

      const allElements = document.querySelectorAll("*")
      allElements.forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.setProperty(
            "font-family",
            "'Eudoxus Sans', var(--font-eudoxus-sans), system-ui, sans-serif",
            "important",
          )
        }
      })
    }

    // Apply immediately
    applyFont()

    // Apply again after a short delay to catch any dynamically added elements
    setTimeout(applyFont, 500)

    // Apply again after the page has fully loaded
    window.addEventListener("load", applyFont)

    return () => {
      window.removeEventListener("load", applyFont)
    }
  }, [])

  return null
}
