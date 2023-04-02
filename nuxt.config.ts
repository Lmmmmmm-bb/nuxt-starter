// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxtjs/device',
    '@vueuse/nuxt',
  ],
  css: [
    '~/index.css',
    '@unocss/reset/tailwind.css',
  ],
  colorMode: { classSuffix: '' },
  device: {
    refreshOnResize: true,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Nuxt Starter',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
      ],
      meta: [
        { name: 'description', content: 'Nuxt3 starter' },
      ],
    },
  },
});
