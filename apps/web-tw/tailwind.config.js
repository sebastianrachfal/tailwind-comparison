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
      boxShadow: {
        avatar: '0px 9px 32px rgba(89, 92, 219, 0.1)',
      },
    },
    colors: {
      white: '#FFFFFF',
      headline: '#1B1C57',
      subheadline: '#68799F',
      transparent: '#00000000',
      yellow: {
        500: '#F59E0B',
      },
      neutral: {
        100: '#F0F3FD',
        300: '#E0E3EB',
        500: '#888B97',
        600: '#626687',
        700: '#3C4563',
        900: '#0E1735',
      },
      green: {
        100: '#D1FAE5',
        500: '#10B981',
        700: '#047857',
      },
    },
  },
  plugins: [],
};
