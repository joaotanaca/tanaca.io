const colors = require('./src/styles/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors,
      borderRadius: {
        '4xl': '2.375rem',
      },
      animation: {
        scroll: 'scroll 12s linear infinite',
        scrollReverse: 'scrollReverse 12s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-49.6%)' },
        },
        scrollReverse: {
          '0%': { transform: 'translateX(-49.6%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
