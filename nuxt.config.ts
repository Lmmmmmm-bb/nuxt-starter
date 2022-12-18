
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],
  css: [
    '~/index.css',
    '@unocss/reset/tailwind.css'
  ]
});
