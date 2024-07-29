export default defineNuxtPlugin({
  setup () {
    const config = useRuntimeConfig()

    const customFetch = $fetch.create({
      baseURL: config.public.API_BASE_URL
    })

    return {
      provide: {
        customFetch
      }
    }
  }
})
