import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff0f6",
          100: "#ffe0ed",
          200: "#ffc1db",
          300: "#ff91bf",
          400: "#ff5299",
          500: "#ff2077",
          600: "#e8005a",
          700: "#c40048",
          800: "#a2003d",
          900: "#880036",
        },
      },
    },
  },
  plugins: [],
};

export default config;
