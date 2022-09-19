/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#DF6F3A",
          "secondary": "#FBA94F",
          "accent": "#429EBD",
          "neutral": "#585859",
          "base-100": "#FFFFFF",
          "info": "#60A5FA",
          "success": "#10B981",
          "warning": "#FFCA40",
          "error": "#E25E4C",
        },
      },
    ],
  },
}