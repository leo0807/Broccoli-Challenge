module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'broccoli-pattern': "url('/src/assets/Broccoli_1920.jpg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
