module.exports = {
  darkMode: false, // or 'media' or 'class'
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding : '1rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
