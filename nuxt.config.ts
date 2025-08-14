// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-25',
  ssr: false,
  css: ['/node_modules/locomotive-scroll/dist/locomotive-scroll.css'],
  modules: ["@nuxtjs/tailwindcss"],
  
  // GitHub Pages configuration
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/Madone-SLR-7-Gen-7/' : '/',
    buildAssetsDir: '/_nuxt/'
  },
  
  // Static generation for GitHub Pages
  nitro: {
    prerender: {
      routes: ['/']
    }
  }
})
