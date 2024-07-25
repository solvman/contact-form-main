import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        radio: "url(/images/icon-radio-selected.svg)",
        checkbox: "url(/images/icon-checkbox-check.svg)",
        "button-hover":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), #0C7D69",
      },
      fontFamily: {
        sans: ["var(--font-karla)"],
      },
      colors: {
        primary: {
          200: "hsl(148, 38%, 91%)",
          600: "hsl(169, 82%, 27%)",
        },
        secondary: {
          500: "hsl(186, 15%, 59%)",
          900: "hsl(187, 24%, 22%)",
        },
        error: "hsl(0, 66%, 54%)",
      },
      spacing: {
        100: "8px",
        150: "12px",
        200: "16px",
        300: "24px",
        400: "32px",
        500: "40px",
        1600: "128px",
      },
      keyframes: {
        toast: {
          "0%, 50%": {
            opacity: "1",
            transform: "translateY(calc(100% + 24px))",
          },
          "80%, 100%": {
            opacity: "0",
            transform: "translateY(-calc(100% + 24px))",
          },
        },
      },
      animation: {
        toast: "toast 5000ms cubic-bezier(0, 0.46, 0, 1.04) both",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
