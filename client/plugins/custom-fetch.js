export default defineNuxtPlugin({
  setup () {
    const customFetch = $fetch.create({
      baseURL: process.client ? '/api' : 'http://nest:3002'
    })

    return {
      provide: {
        customFetch
      }
    }
  }
})
