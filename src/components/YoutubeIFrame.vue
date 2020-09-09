<template>
  <div class="relative w-full h-full">
    <div class="aspect-ratio-16/9"></div>
    <div id="player" class="absolute left-0 top-0 w-full h-full"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  props: {
    videoId: {
      type: String,
      default: '9Gj47G2e1Jc'
    },
    play: {
      type: Boolean,
      default: false
    }
  },
  emits: ['video-state-change'],
  setup(props, context) {
    const player = ref<YT.Player | null>(null);
    const YOUTUBE_API_SRC = 'https://www.youtube.com/iframe_api';

    const createYTPlayer = () => {
      player.value = new window.YT.Player('player', {
        videoId: props.videoId,
        events: {
          onStateChange: event => {
            if (event.data === window.YT.PlayerState.PAUSED) {
              context.emit('video-state-change', false);
            } else if (event.data === window.YT.PlayerState.PLAYING) {
              context.emit('video-state-change', true);
            }
          },
          onError: () => {
            console.error('ERROR');
          },
          onReady: () => {
            // console.info("Player Ready");
          }
        }
      });
    };

    if (!document.querySelector(`script[src="${YOUTUBE_API_SRC}"]`)) {
      const tag = document.createElement('script');
      tag.src = YOUTUBE_API_SRC;
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      (window as any).onYouTubeIframeAPIReady = () => {
        createYTPlayer();
      };
    } else {
      if (window.YT) {
        createYTPlayer();
      }
    }

    watch(
      () => props.play,
      (newVal, _) => {
        if (newVal) {
          player.value?.playVideo();
        } else {
          player.value?.pauseVideo();
        }
      }
    );

    const playVideo = () => {
      if (!player.value) return;
      player.value.playVideo();
    };

    return { player, playVideo };
  }
});
</script>

<style scoped></style>
