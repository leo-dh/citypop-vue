<template>
  <nav class="flex justify-start p-1">
    <btn class="p-3 rounded-full hover:bg-gray-600 hover:bg-opacity-25 hover-fade">
      <svg
        class="w-6 h-6 fill-current text-white"
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
        />
      </svg>
    </btn>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<style lang="postcss" scoped>
.hover-fade {
  transition: all 0.2s ease-in-out;
}
</style>
