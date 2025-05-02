// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  css: ["@/assets/css/reset.sass"],
  ssr: true, 
  nitro: {
    preset: 'static',
  },
  app: {
    baseURL: '/',
  },
  routeRules: {
    '/': { static: true },
    '/about': { static: true },
    '/blog/**': { static: true },
  }
});
