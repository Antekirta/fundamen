import confectioneryTheme from './tailwind-themes/confectionery.js'

module.exports = {
  // ...
  plugins: [
    // ...
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
  theme: {
    extend: {
      ...confectioneryTheme
    }
  }
}
