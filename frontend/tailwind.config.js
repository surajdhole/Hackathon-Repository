/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['"Spline Sans"', "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: "#4CAF50",
        black: "#1C1C1E",
        white: "#FFFFFF",
        input: "rgba(255,255,255, 0.1)",
        "black-secondary": "#141414",
        "green" : "#4CAF50",
        "red": "#500505",
        "grey" : "#757575",
        "txtgrey": "#5A5A5F",
        "icongrey":"#636363",

      },
    },
  },
  plugins: [],
};