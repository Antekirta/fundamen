import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import locale from '../../locales/en.js'

export default defineNuxtPlugin(async ({ vueApp }) => {
  await i18next.init({
    lng: 'en',
    resources: {
      en: locale
    }
  })

  vueApp.use(I18NextVue, { i18next })

  // vueApp.use(VueGoogleMaps, {
  //   load: {
  //     key: 'AIzaSyDzKjO5i1PjsO4oy1jbXOMdcJulNIG8qj8', // Replace 'YOUR_API_KEY' with your actual Google Maps API key
  //     libraries: 'places' // This is required if you use the Autocomplete plugin
  //     // Add other libraries as needed
  //   }
  // })
})
