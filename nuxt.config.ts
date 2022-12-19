// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@nuxtjs/color-mode'],
  css: [
    '~/index.css',
    '@unocss/reset/tailwind.css'
  ],
  colorMode: { classSuffix: '' }
});
