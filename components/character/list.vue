<script lang="ts">
import { useFindManyCharacter } from "../../lib/hooks";

export default {
  data() {
    return useFindManyCharacter({
      include: { npc: true, user: true },
      where: {
        npc: { isNot: null },
      },
    });
  },
};
</script>

<template>
  <div v-if="isLoading">loading...</div>
  <div v-else-if="isError">{{ error.message }}</div>
  <ul v-else-if="data">
    <li v-for="character in data" :key="character.id">
      <img :href="character.imageurl" />{{ character.name }}
    </li>
  </ul>
</template>
