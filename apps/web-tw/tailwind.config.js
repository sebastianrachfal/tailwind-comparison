// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Lexend, sans-serif',
      },
    },
    colors: {
      white: '#FFFFFF',
      headline: '#1B1C57',
      transparent: '#00000000',
      yellow: {
        500: '#F59E0B',
      },
      neutral: {
        100: '#E5E5E5',
        300: '#E0E3EB',
        500: '#888B97',
        600: '#626687',
        700: '#3C4563',
        900: '#0E1735',
      },
      green: {
        500: '#10B981',
      },
    },
  },
  plugins: [],
};
