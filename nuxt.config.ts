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
    head: {
      title: 'Абисрс',
      meta: [
        { name: 'apple-mobile-web-app-title', content: 'Абисрс' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },
  routeRules: {
    '/': { static: true },
    '/about': { static: true },
    '/blog/**': { static: true },
  }
});
