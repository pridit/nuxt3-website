<template>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'min-h-screen font-sans leading-normal text-gray-700 transition ease-in-out bg-gray-100 dark:bg-night dark:text-gray-300 print:bg-white'
  }
});
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
  border-bottom: 1px dotted #444;
  @apply font-semibold;
}

.dark a:not(.inline-block) {
  border-bottom: 1px dotted #DDD;
  @apply text-slate-200;
}
</style>
