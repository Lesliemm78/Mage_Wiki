<script setup lang="ts">
// import { AppFrameNavigationBar, AppFrameHeader, AppFrameInfoBox } from '#components'
</script>

<template>
  <div class="frame">
    <AppFrameHeader />
    <AppFrameNavigationBar />
    <slot></slot>
    <AppFrameInfoBox />
  </div>
</template>

<style lang="scss" scoped>
.frame {
  display: flex;
}
</style>
