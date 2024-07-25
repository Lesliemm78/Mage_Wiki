<script setup lang="ts">
import NavigationBar from "~/components/app-frame/NavigationBar.vue";
import AppFrameHeader from "~/components/app-frame/Header.vue";
import InfoBox from "~/components/app-frame/InfoBox.vue";
</script>

<template>
  <div class="frame">
    <AppFrameHeader />
    <NavigationBar />
    <slot></slot>
    <InfoBox />
  </div>
</template>

<style lang="scss" scoped>
.frame {
  display: flex;
}
</style>
