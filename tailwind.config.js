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
        'screen-md': {min: '730px'}
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
