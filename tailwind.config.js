/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          'primary': '#DF6F3A',
          'primary-focus': '#D35A22',
          'secondary': '#FBA94F',
          'secondary-focus': '#FB9C37',
          'accent': '#429EBD',
          'accent-focus': '#3A8BA6',
          'neutral': '#585859',
          'base-100': '#FFFFFF',
          'info': '#60A5FA',
          'success': '#10B981',
          'warning': '#FFCA40',
          'error': '#E25E4C',
        },
      },
    ],
  },
}