import type { Config } from "tailwindcss"

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    extend: {
      colors: {
        primaryColor: "#49326B",
        secondaryColor: "#666769",
        inputBorderColor: "#BAC8FC",
      },
      fontFamily: {
        garamond: ["Cormorant Garamond", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [], // require("tailwindcss-animate")
} satisfies Config

export default config