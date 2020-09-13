<template>
  <div class="sm:text-center lg:text-left">
    <h2 class="lg:leading-none">
      <slot name="title"></slot>
    </h2>
    <p class="mt-6 max-w-ch lg:mt-10 xl:mt-12">
      <slot name="content"></slot>
    </p>
  </div>
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
.max-w-ch {
  @media (min-width: theme('screens.sm')) {
    max-width: 60ch;
  }
  @media (min-width: theme('screens.lg')) {
    max-width: none;
  }
}
</style>
