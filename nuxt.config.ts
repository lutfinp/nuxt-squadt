// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@vueuse/nuxt",
    "@nuxt/test-utils/module",
  ],
  ssr: true,
  nitro: {
    preset: "node-server",
  },
});
