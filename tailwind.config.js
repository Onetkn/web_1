/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4B9CD3',
          DEFAULT: '#2C5282',
          dark: '#1A365D',
        },
        secondary: {
          light: '#F6AD55',
          DEFAULT: '#ED8936',
          dark: '#C05621',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Noto Serif SC', 'serif'],
      },
    },
  },
  plugins: [],
} 