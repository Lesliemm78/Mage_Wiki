<!-- main frontend file -->

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { provideHooksContext } from "./lib/hooks/index";

const config = useRuntimeConfig()

provideHooksContext({
  endpoint: `${config.app.baseURL}/model`,
})

</script>
