import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  mode: 'universal',
  modules: [
    // '@nuxtjs/storybook',
    '@nuxt/ui', '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  build: {
    transpile: ['pinia-plugin-persistedstate']
  },
  plugins: [
    '~/plugins/vue-google-maps.js'
  ],
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
      STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY
    }
  },
  alias: {
    pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs'
  },
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
  },
  vite: {
    optimizeDeps: {
      include: [
        'fast-deep-equal'
      ]
    },
    plugins: [
      svgLoader()
    ]
  }
})
