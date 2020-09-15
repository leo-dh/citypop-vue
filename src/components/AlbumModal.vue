<template>
  <transition name="fade">
    <div
      v-if="showAlbumModal"
      class="fixed w-screen h-screen bg-black opacity-25 z-30 cursor-pointer top-0 left-0 hidden"
      @click="closeAlbumModal"
    ></div>
  </transition>
  <div
    v-if="showAlbumModal"
    class="fixed w-screen h-screen bg-blackcurrant z-30 top-0 left-0 flex flex-col p-2"
  >
    <div class="flex-1">
      Hello World
    </div>
    <div class="flex-grow-0 justify-end flex">
      <btn
        class="font-serif font-semibold px-2 py-1 button-hover rounded text-center"
        @click="closeAlbumModal"
      >
        Close
      </btn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';

export default defineComponent({
  props: {
    showAlbumModal: {
      type: Boolean,
      required: true
    }
  },
  emits: ['close-album-modal'],
  setup(props, context) {
    watch(
      () => props.showAlbumModal,
      (newValue: boolean, oldValue: boolean) => {
        if (newValue) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      }
    );
    const closeAlbumModal = () => {
      context.emit('close-album-modal');
    };
    return { closeAlbumModal };
  }
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.button-hover {
  transition: background-color 0.3s ease;
  &:hover {
    @apply bg-white bg-opacity-20;
  }
}
</style>
