// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vesp/nuxt-fontawesome',
    '@nuxt/icon',
  ],
  fontawesome: {
    icons: {
      solid: ['cog'],
      regular: ['user']
    }},
  ssr: true,
  nitro: {
    preset: 'node-server'
  },

})