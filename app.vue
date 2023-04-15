<template>
  <CookieControl locale="en" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const {
  cookiesEnabled,
  cookiesEnabledIds,
  isConsentGiven,
  isModalActive,
  moduleOptions
} = useCookieControl()
watch(
  () => cookiesEnabledIds.value,
  (current, previous) => {
    if (
      (!previous?.includes('ga') &&
        current?.includes('ga'))
    ) {
      useGtagConsent(true)
    }
  },
  { deep: true }
)

if (cookiesEnabledIds.value != undefined && cookiesEnabledIds.value.includes('ga')) {
  useGtagConsent(true)
}
</script>
