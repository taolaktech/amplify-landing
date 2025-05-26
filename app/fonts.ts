import localFont from "next/font/local"

// Load Eudoxus Sans font
export const eudoxusSans = localFont({
  src: [
    {
      path: "/fonts/EudoxusSans-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "/fonts/EudoxusSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "/fonts/EudoxusSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/EudoxusSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/EudoxusSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/EudoxusSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-eudoxus-sans",
})
