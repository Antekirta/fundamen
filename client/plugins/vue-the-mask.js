import VueTheMask from 'vue-the-mask'

export default defineNuxtPlugin(({ vueApp }) => {
  console.log('VueTheMask: ', VueTheMask)

  // @ts-ignore
  vueApp.use(VueTheMask)
})
