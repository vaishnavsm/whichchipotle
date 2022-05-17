const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      yellow: colors.yellow,
      brown: {
        500: '#A57F60'
      },
      fg: {
        400: '#E8AE68',
        200: '#FFD275',
        'A': '#DB5A42'
      }
    }
  },
  plugins: [],
}
