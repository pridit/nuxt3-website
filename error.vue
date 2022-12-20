<template>
  <div class="flex items-center justify-center min-h-screen p-6 md:flex">
    <div class="text-center">
      <h1 class="mb-12 font-semibold text-9xl" v-if="error.statusCode === 404">404</h1>
      <h1 class="mb-12 text-4xl" v-else>Internal Server Error</h1>

      <p class="mb-4">We could not find what you were looking for.</p>

      <NuxtLink to="/">Back to the home page</NuxtLink>
    </div>
  </div>
</template>

<script>
useHead({
  bodyAttrs: [{
    'class': 'min-h-screen font-sans leading-normal bg-gray-100 text-gray-700 dark:bg-night dark:text-gray-300 print:bg-white'
  }]
})

export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode () {
      return (this.error && this.error.statusCode) || 500
    },
    message () {
      return this.error.message || '<%= messages.client_error %>'
    }
  },
  head () {
    return {
      title: this.message,
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
        }
      ]
    }
  }
}
</script>

<style>
html {
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

a {
  font-weight: 600;
  border-bottom: 1px dotted #444;
}

.dark a:not(.inline-block) {
  border-bottom: 1px dotted #DDD;
}

.dark a:not(.inline-block) {
  @apply text-slate-200;
}
</style>
