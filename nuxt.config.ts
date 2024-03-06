// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtPage } from 'nuxt/schema'

export default defineNuxtConfig({
  hooks: {
    'pages:extend'(pages) {
      function setMiddleware(pages: NuxtPage[]) {
        for (const page of pages) {
          page.meta ||= {}
          // Note that this will override any middleware set in `definePageMeta` in the page
          page.meta.middleware = ['auth']
          if (page.children) {
            setMiddleware(page.children)
          }
        }
      }
      setMiddleware(pages)
    },
  },

  modules: ['@nuxt/ui'],

  devtools: { enabled: true },

  runtimeConfig: {
    DB_NAME: process.env.DB_NAME,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,

    FIREBASE_APIKEY: process.env.FIREBASE_APIKEY,
    FIREBASE_APPID: process.env.FIREBASE_APPID,
  },
})
