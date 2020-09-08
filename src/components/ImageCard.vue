<template>
  <div class="flex justify-center">
    <div class="flex flex-col w-48">
      <div class="relative">
        <div class="aspect-ratio-square"></div>
        <img
          :src="require(`@/assets/imagecards/${imgSrc}`)"
          alt=""
          class="absolute left-0 top-0 w-full h-full object-cover"
        />
      </div>
      <span class="font-cursive text-sm text-center mt-2"
        >{{ title }}<br />
        by {{ artist }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    artist: {
      type: String,
      default: ''
    },
    imgSrc: {
      type: String,
      default: ''
    }
  },
  setup() {
    return {};
  }
});
</script>

<style scoped></style>
