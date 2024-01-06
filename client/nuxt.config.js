// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  mode: 'universal',
  modules: [
    // '@nuxtjs/storybook',
    '@nuxt/ui'
  ],
  typescript: {
    tsConfig: {
      compilerOptions: {
        baseUrl: './',
        paths: {
          '@/*': './*'
        }
      }
    }
  },
  css: [
    '@/assets/global.scss'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
