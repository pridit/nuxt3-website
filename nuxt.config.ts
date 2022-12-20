// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      title: 'Jordan Heale',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'description', name: 'description', content: 'Full stack web developer in Greater London, England' },
        { hid: 'keywords', name: 'keywords', content: 'vuejs, nuxt, javascript, laravel, development, software, portfolio' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url',  property: 'og:url', content: process.env.BASE_URL },
        { hid: 'og:description', property: 'og:description', content: 'Full stack web developer in Greater London, England' },
      ],
      link: [
        { rel: 'canonical', href: process.env.BASE_URL },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ]
    },
  },

  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/robots',
    '@nuxtjs/tailwindcss',
  ],

  colorMode: {
    classSuffix: '',
  },

  robots: {
    Sitemap: process.env.BASE_URL + '/sitemap.xml'
  },

  generate: {
    fallback: '404.html'
  },
})
