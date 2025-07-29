import localFont from "next/font/local"

// Load Satoshi font
export const satoshi = localFont({
  src: [
    {
      path: "/fonts/Satoshi-Variable.ttf",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "/fonts/Satoshi-VariableItalic.ttf",
      weight: "300 900",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-satoshi",
})
