import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import locale from '../locales/en.js'

export default defineNuxtPlugin(async ({ vueApp }) => {
  await i18next.init({
    lng: 'en',
    resources: {
      en: locale
    }
  })

  vueApp.use(I18NextVue, { i18next })
})
