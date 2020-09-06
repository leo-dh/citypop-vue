<template>
  <div class="flex flex-col">
    <main-hero />
    <main-hero />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainHero from '@/components/MainHero.vue';

export default defineComponent({
  name: 'Home',
  components: {
    MainHero
  }
});
</script>

<style lang="postcss" scoped></style>
