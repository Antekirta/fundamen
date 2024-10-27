import VueTheMask from 'vue-the-mask'

export default defineNuxtPlugin(({ vueApp }) => {
  // @ts-ignore
  vueApp.use(VueTheMask)
})
