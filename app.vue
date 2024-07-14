<!-- main frontend file -->

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
import { provideHooksContext } from "./lib/hooks";

provideHooksContext({
  endpoint: `${process.env.API_ROOT}/model`,
});
</script>
