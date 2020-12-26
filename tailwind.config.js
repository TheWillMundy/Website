

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "light-yellow": "#FFF48C",
        "light-green": "#B9FFA8",
        "light-blue": "#A4DEFF",
        "light-orange": "#FFD7A8"
      }
    },
    fontFamily: {
      sans: ['Avenir', 'sans-serif'],
      serif: ['Avenir', 'serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
