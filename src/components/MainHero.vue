<template>
  <div class="flex items-center justify-center w-full h-screen relative overflow-hidden">
    <div class="flex flex-col items-center">
      <h1
        class="uppercase text-5xl leading-tight font-bold text-center sm:text-6xl lg:text-7xl xl:text-8xl bg-clip-text text-transparent bg-gradient-to-tl from-japonica-500 to-deluge-500"
      >
        Discover<br />
        Citypop
      </h1>
      <btn
        class="px-4 py-2 bg-mojo-500 text-center rounded-full mt-8 font-cursive z-10 sm:text-xl sm:px-6 lg:text-xl lg:mt-10 xl:text-2xl xl:mt-12 btn-elevation btn-hover"
        @click="scrollIntoView"
      >
        Let's go!
      </btn>
    </div>
    <img src="@/assets/skyline.svg" alt="skyline watermark" class="watermark" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const scrollIntoView = () => {
      document.querySelector('#scrollTo')?.scrollIntoView({ behavior: 'smooth' });
    };
    return { scrollIntoView };
  }
});
</script>

<style lang="postcss" scoped>
.watermark {
  @apply absolute bottom-0;
  opacity: 0.1;
  min-height: 40vh;
  max-width: initial;
}
</style>
