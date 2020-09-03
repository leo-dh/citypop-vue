<template>
  <div class="home h-screen">
    <h1 class="uppercase text-4xl font-bold text-center title-color">Discover Citypop</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home'
});
</script>

<style lang="postcss" scoped>
.title-color {
  background: -webkit-linear-gradient(315deg, #da7c71, #8260a3);
  background-clip: text;
  color: transparent;
}
</style>
