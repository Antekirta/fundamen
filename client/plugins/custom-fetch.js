export default defineNuxtPlugin({
  setup () {
    const getBaseUrl = () => {
      if (process.env.NODE_ENV === 'development') {
        return process.client ? '/api' : 'http://localhost:3002'
      }

      return process.client ? '/api' : 'http://nest:3002'
    }

    const customFetch = $fetch.create({
      baseURL: getBaseUrl()
    })

    return {
      provide: {
        customFetch
      }
    }
  }
})
