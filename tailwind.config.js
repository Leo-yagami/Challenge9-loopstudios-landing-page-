/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,css}"],
  theme: {
    extend: {
      fontFamily: {
        alata: ['Alata', 'sans-serif'],
        josefin: ['"Josefin Sans"', 'sans-serif']
      },
      screens: {
        '3xl': '1736px',
      },
    },
  },
  plugins: [],
};
