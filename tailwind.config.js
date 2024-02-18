/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./loadingScreen.html"
  ],
  theme: {
    extend: {
      screens: {
        'screen-xs': {min: '350px'},
        'screen-sm': {min: '550px'},
        'screen-md': {min: '730px'},
        'screen-lg': {min: '930px'}
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
