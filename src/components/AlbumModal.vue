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
    <div class="flex-1 flex flex-col items-center">
      <img :src="selectedAlbum.cover" alt="" class="w-56 h-56 rounded-2xl" />
      <div>
        <h6>{{ selectedAlbum.title }}</h6>
        <h6>{{ selectedAlbum.artist }}</h6>
      </div>
      <div class="relative h-full w-full mt-4">
        <ul class="overflow-y-scroll h-full w-full absolute space-y-2">
          <template v-for="(track, i) in selectedAlbum.tracks" :key="i">
            <li class="flex justify-between pr-5 items-center">
              <div class="flex items-center">
                <svg
                  v-if="track.titleTrack"
                  class="fill-current w-4 h-4 text-japonica-500 flex-shrink-0"
                  viewBox="0 0 24 24"
                  title="Title Track"
                >
                  <title>Title Track</title>
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"
                  />
                </svg>
                <svg v-else class="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24"></svg>
                <span class="font-bold ml-1">{{ track.title }}</span>
              </div>
              <span class="font-bold ml-4">{{ track.duration }}</span>
            </li>
          </template>
        </ul>
      </div>
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
    },
    selectedAlbum: {
      type: Object,
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
