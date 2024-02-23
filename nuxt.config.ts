export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxtjs/color-mode"],

  css: ["~/assets/css/tailwind.css"],

  routeRules: {
    // Generated at build time for SEO purpose
    // "/": { prerender: true },
    // Cached for 1 hour
    // "/api/*": { cache: { maxAge: 60 * 60 } },
    // Redirection to avoid 404
    // "/old-page": {
    //   redirect: { to: "/new-page", statusCode: 302 },
    // },
  },

  runtimeConfig: {
    // Will be available in the browser
    DB_URL: process.env.DB_URL,
  },
});
