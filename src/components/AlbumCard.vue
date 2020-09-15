<template>
  <img :src="imgSrc" alt="" @click="showAlbumModal" />
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
  emits: ['show-album-modal'],
  setup(props, context) {
    const showAlbumModal = () => {
      context.emit('show-album-modal');
    };
    return { showAlbumModal };
  }
});
</script>

<style scoped>
img {
  filter: brightness(70%);
  transition: all 0.3s ease;
  cursor: pointer;
}
img:hover {
  filter: brightness(100%);
}
</style>
