<template>
  <CookieControl locale="en">
    <template #modal>
      <h3 class="text-lg font-semibold shadow-lg">Manage Cookies</h3>
    </template>
  </CookieControl>
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

const {
  gtag,
  grantConsent,
  revokeConsent
} = useGtag()

watch(
  () => cookiesEnabledIds.value,
  (current, previous) => {
    if (
      (!previous?.includes('ga') &&
        current?.includes('ga'))
    ) {
      grantConsent()
    } else {
      revokeConsent()
    }
  },
  { deep: true }
)

if (cookiesEnabledIds.value != undefined && cookiesEnabledIds.value.includes('ga')) {
  grantConsent()
}
</script>

<style>
.cookieControl__BarContainer {
  border-top: 1px solid #f4f4f4;
  box-shadow: 0 -1px 10px 0 #acabab4d;
}

.cookieControl__BarContainer h2 {
  font-weight: 600;
}

@media only screen and (min-width: 768px) {
  .cookieControl__BarContainer {
    align-items: center;
  }

  .cookieControl__BarContainer p {
    margin-right: 30px;
  }
}

.cookieControl__BarButtons {
  white-space: nowrap;
}

.cookieControl__BarButtons button,
.cookieControl__ModalButtons button {
  border: 1px solid #acabab4d;
}

.cookieControl__BarButtons button:first-child,
.cookieControl__ModalButtons button:nth-child(2) {
  background-color: #11599C;
  color: white;
}

.cookieControl__BarButtons button:last-child::after {
  content: " \2934";
}

.cookieControl__ModalContent {
  overflow: hidden;
}

.cookieControl__ModalContentInner h3 {
  padding: 20px;
}

.cookieControl__ModalContentInner .cookieControl__ModalInputWrapper {
  padding: 20px 20px 0 20px;
}

.cookieControl__ModalContentInner .cookieControl__ModalButtons {
  padding: 0 20px 20px 20px;
  margin-top: 20px;
}

.cookieControl__ModalContentInner {
  padding: 0;
}

.cookieControl__ModalButtons {
  align-self: center;
  width: 100%;
  white-space: nowrap;
}

.cookieControl__ModalButtons button {
  width: 100%;
}

.cookieControl__ModalContentInner h2,
.cookieControl__ModalClose {
  display: none;
}

.cookieControl__ModalContentInner > button {
  background-color: unset;
  color: white;
}

.cookieControl__ModalContentInner > button:hover {
  background-color: unset;
}

.cookieControl__ModalContentInner > button::after {
  content: "\2716";
}
</style>
