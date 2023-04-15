// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Jordan Heale',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'description', name: 'description', content: 'Full stack web developer in Greater London, England' },
        { hid: 'keywords', name: 'keywords', content: 'vuejs, nuxt, javascript, laravel, development, software' },
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
    '@dargmuesli/nuxt-cookie-control',
    '@nuxtjs/color-mode',
    '@nuxtjs/robots',
    '@nuxtjs/tailwindcss',
    'nuxt-gtag',
  ],

  cookieControl: {
    barPosition: 'bottom-right',

    colors: {
      barBackground: '#3f3f46',
      barButtonColor: "#52525b",
      barButtonHoverBackground: "#e4e4e7",
      barButtonHoverColor: "#52525b",
    },

    cookies: {
      optional: [
        {
          description: {
            en:  'These cookies gather information about how many people visit and use our website. Switching these off means we can\'t gather information to improve the experience.'
          },
          id: 'ga',
          name: {
            en: 'Analytics'
          },
          targetCookieIds: ['cookie_control_consent', 'cookie_control_enabled_cookies'],
        }
      ],
    },

    localeTexts: {
      en: {
        accept: "Accept all",
        bannerDescription: "This website uses cookies to improve your experience.",
        manageCookies: "Manage cookies",
        save: "Save preferences",
      },
    },

    isAcceptNecessaryButtonEnabled: false,
  },

  colorMode: {
    classSuffix: '',
  },

  gtag: {
    initialConsent: false,
  },
})
