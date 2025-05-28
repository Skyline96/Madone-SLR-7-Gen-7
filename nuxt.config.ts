// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-25',
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/Madone-SLR-7-Gen-7/' : '/',
  },
  ssr: false,
  css: ['/node_modules/locomotive-scroll/dist/locomotive-scroll.css'],
  modules: ["@nuxtjs/tailwindcss"]
})
