// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui"],

  devtools: { enabled: true },

  runtimeConfig: {
    DB_NAME: process.env.DB_NAME,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,

    FIREBASE_APIKEY: process.env.FIREBASE_APIKEY,
    FIREBASE_APPID: process.env.FIREBASE_APPID,
  },
});
