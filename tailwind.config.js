/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      accent: {
        base: '#7765FB',
        light: '#966bff'
      },
      base: {
        1: '#1A182A',
        2: '#222237',
      },
      white: colors.white,
      slate: colors.slate,
      black: colors.black,
      rose: colors.rose,
      blue: colors.blue,
      purple: colors.purple,
      transparent: 'transparent'
    },
    extend: {},
  },
  plugins: [],
}
