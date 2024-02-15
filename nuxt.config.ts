// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
    // pinia: {
  //   storesDirs: ['./stores/**', './custom-folder/stores/**'],
  // },
  modules: ['nuxt-icon', '@pinia/nuxt',, '@vueuse/nuxt'],
  spaLoadingTemplate: './loading.html',
})
