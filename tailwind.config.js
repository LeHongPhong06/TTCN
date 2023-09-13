/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        saira: "'Saira', sans-serif;",
      },
      colors: {
        rootGreen: '#005B30',
      },
      boxShadow: {
        custom: 'rgba(0, 91, 48, 0.35) 0px 25px 50px -12px;',
      },
      backgroundImage: {},
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/line-clamp')],
};
