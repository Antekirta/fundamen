import { resolve } from 'path'
import { config as loadEnv } from 'dotenv'
import svgLoader from 'vite-svg-loader'

loadEnv({
  path: resolve(__dirname, '../env.dev')
})

console.log('process.env.NUXT_DOCKER_PORT: ', process.env.NUXT_DOCKER_PORT)

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
  buildModules: [
    ['@nuxtjs/dotenv', { path: '../env.dev' }]
  ],
  build: {
    transpile: ['pinia-plugin-persistedstate']
  },
  plugins: [
    '~/plugins/vue-google-maps.js',
    '~/plugins/vue-the-mask.js'
  ],
  runtimeConfig: {
    public: {
      STRIPE_PUBLIC_KEY: process.env.NUXT_PUBLIC_STRIPE_PUBLIC_KEY
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
