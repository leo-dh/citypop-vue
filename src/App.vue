<template>
  <div id="main">
    <navigation />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navigation from '@/components/Navigation.vue';

export default defineComponent({
  components: {
    Navigation
  },
  setup() {
    return {};
  }
});
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: whitesmoke;
  @apply bg-blackcurrant;
}
#main {
  @apply w-screen max-w-full;
}
</style>
