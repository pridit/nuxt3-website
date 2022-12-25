<template>
  <NuxtLayout>
    <Head>
      <Title>{{ error.statusCode == 404 ? '404 Not Found' : error.statusCode }}</Title>
    </Head>

    <div class="flex items-center justify-center min-h-screen p-6 md:flex">
      <div class="text-center">
        <h1 class="mb-12 font-semibold text-9xl" v-if="error.statusCode == 404">404</h1>
        <h1 class="mb-12 text-4xl" v-else>Internal Server Error</h1>

        <p class="mb-4">We could not find what you were looking for.</p>

        <NuxtLink to="/">Back to the home page</NuxtLink>
      </div>
    </div>
  </NuxtLayout>
</template>

<script>
export default {
  props: {
    error: Object
  }
}
</script>
