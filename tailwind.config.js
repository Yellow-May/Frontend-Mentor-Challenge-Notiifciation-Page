/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      red: 'hsl(1, 90%, 64%)',
      blue: 'hsl(219, 85%, 26%)',
      white: 'hsl(0, 0%, 100%)',
      'grayish-blue': {
        DEFAULT: 'hsl(219, 14%, 63%)',
        50: 'hsl(210, 60%, 98%)',
        100: 'hsl(211, 68%, 94%)',
        200: 'hsl(205, 33%, 90%)',
        300: 'hsl(219, 12%, 42%)',
        400: 'hsl(224, 21%, 14%)'
      }
    },
    extend: {
      fontFamily: {
        main: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
