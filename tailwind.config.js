/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './views/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#e6f0fa',
          100: '#c2dbf0',
          200: '#99c2e4',
          300: '#66a3d6',
          400: '#3386c7',
          500: '#105ea9', // biru utama
          600: '#0d4f91',
          700: '#0b4076',
          800: '#08325c',
          900: '#062545',
        },
        secondary: {
          50:  '#e8f7eb',
          100: '#c9ebd0',
          200: '#9edcae',
          300: '#6ecf87',
          400: '#45c45f',
          500: '#41ab35', // hijau utama
          600: '#37932d',
          700: '#2c7824',
          800: '#215d1b',
          900: '#174313',
        },
        accent: {
          50:  '#f9fbe8',
          100: '#f1f6c6',
          200: '#e5f097',
          300: '#d9e96b',
          400: '#cde23e',
          500: '#a4cd1c', // kuning utama
          600: '#8faf18',
          700: '#728c13',
          800: '#56680e',
          900: '#3a4609',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}