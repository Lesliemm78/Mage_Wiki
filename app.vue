<!-- main frontend file -->

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { provideHooksContext } from "./lib/hooks";

provideHooksContext({
  endpoint: `${process.env.API_ROOT}/model`,
});
</script>
