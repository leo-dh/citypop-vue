<template>
  <img :src="imgSrc" alt="" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
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
