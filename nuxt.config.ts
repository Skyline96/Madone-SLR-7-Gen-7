// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-25',
  ssr: false,
  css: ['/node_modules/locomotive-scroll/dist/locomotive-scroll.css'],
  modules: ["@nuxtjs/tailwindcss"]
})
