export default defineNuxtPlugin({
  setup () {
    const customFetch = $fetch.create({
      baseURL: '/api'
    })

    return {
      provide: {
        customFetch
      }
    }
  }
})
