// DEFAULT THEME: https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js

/** @type {import('tailwindcss').Config} */
// module.exports = {
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
