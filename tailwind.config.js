/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,jsx}",
    "./src/styles/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#F15412",
        secondary: "#301003",
        danger: "#ff5252",
        success: "#198754",
        error: "#dc3545",
        info: "#0dcaf0",
        warning: "#FFC107",
        white: "#ffffff",
        lightPrimary: "#f4753e",
        veryLightPrimary: "#fbcbb7",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
