/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        applePrimary: "#1d4ed8",
        applePrimaryFocus: "#1e40af",
        applePrimaryDark: "#3b82f6",
        appleInk: "#1d1d1f",
        appleBodyMuted: "#86868b",
        appleInkMuted: "#7a7a7a",
        appleHairline: "#e0e0e0",
        appleHairlineDark: "rgba(255, 255, 255, 0.12)",
        appleCanvas: "#ffffff",
        appleParchment: "#f5f5f7",
        applePearl: "#fafafc",
        appleTile1: "#272729",
        appleTile2: "#2a2a2c",
        appleTile3: "#252527",
        appleBlack: "#000000",
        appleGreen: "#16a34a",
        appleAmber: "#d97706",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "sans-serif"
        ],
        mono: [
          "SF Mono",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace"
        ],
        openCodeMono: [
          "Geist Mono",
          "JetBrains Mono",
          "Berkeley Mono",
          "SF Mono",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace"
        ]
      },
      boxShadow: {
        product: "rgba(0, 0, 0, 0.22) 3px 5px 30px 0px",
        productDark: "rgba(0, 0, 0, 0.5) 0px 20px 40px 0px"
      },
      borderRadius: {
        appleCard: "18px",
        appleSm: "8px",
        appleMd: "11px"
      }
    },
  },
  plugins: [],
}
