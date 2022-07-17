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
    },
  },
  plugins: [],
};
