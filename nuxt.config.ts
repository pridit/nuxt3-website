// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },

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
    '@nuxtjs/sitemap',
    '@nuxtjs/tailwindcss',
    'nuxt-gtag',
  ],

  cookieControl: {
    barPosition: 'bottom-full',

    colors: {
      barBackground: '#fff',
      barButtonColor: '#444',
      barButtonHoverBackground: "#e4e4e7",
      barButtonHoverColor: '#444',
      barTextColor: '#444',
      checkboxActiveBackground: '#11599C',
      checkboxDisabledBackground: '#444',
      checkboxInactiveBackground: '#e4e4e7',
      modalButtonBackground: false,
      modalButtonColor: false,
      modalButtonHoverBackground: '#e4e4e7',
      modalButtonHoverColor: false,
    },

    isDashInDescriptionEnabled: true,

    cookies: {
      necessary: [
        {
          description: {
            en:  'Necessary cookies are fundamental to enable core functionality of the website, such as adjusting consent preferences. These do not contain personally identifiable information.'
          },
          id: 'ncc',
          name: {
            en: 'Necessary'
          },
          targetCookieIds: ['ncc_c', 'ncc_e'],
        }
      ],
      optional: [
        {
          description: {
            en: 'Analytical cookies are used to gain insight into the way visitors engage with our website. Providing metrics such as visitor count, bounce rate, traffic source, and other relevant data.'
          },
          id: 'ga',
          name: {
            en: 'Analytics'
          },
          targetCookieIds: ['_ga', '_ga_3SRQ0GWQHQ'],
        }
      ],
    },

    isCookieIdVisible: true,

    localeTexts: {
      en: {
        accept: "Accept All",
        acceptAll: "Accept All",
        bannerDescription: "Our website uses cookies to analyse the traffic we receive. By clicking \"Accept All\", you consent to our use of cookies.",
        bannerTitle: 'We use cookies',
        close: '',
        decline: "Reject All",
        declineAll: "Reject All",
        manageCookies: "Manage Cookies",
        save: "Save Preferences",
      },
    }
  },

  colorMode: {
    classSuffix: '',
  },

  gtag: {
    id: 'G-3SRQ0GWQHQ',
    initialConsent: false,
  },

  robots: {
    rules: {
      Sitemap: process.env.BASE_URL + '/sitemap.xml'
    },
  },

  sitemap: {
    xsl: false,
  },
})
