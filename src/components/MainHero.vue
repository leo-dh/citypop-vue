<template>
  <div class="flex items-center justify-center w-full h-screen relative overflow-hidden">
    <div class="flex flex-col items-center">
      <h1 class="uppercase text-5xl leading-tight font-bold text-center title-color sm:text-6xl">
        Discover<br />
        Citypop
      </h1>
      <btn
        class="px-4 py-2 bg-mojo-500 text-center rounded-full mt-8 font-cursive elevation-2 z-10 sm:text-xl sm:px-6"
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
.title-color {
  background: -webkit-linear-gradient(
    315deg,
    theme('colors.japonica.500'),
    theme('colors.deluge.500')
  );
  background-clip: text;
  color: transparent;
}
.watermark {
  @apply absolute bottom-0 w-full;
  opacity: 0.1;
  min-height: 40vh;
}
</style>
