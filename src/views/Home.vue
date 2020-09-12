<template>
  <div class="flex flex-col">
    <main-hero />
    <div class="flex justify-center">
      <div id="scrollTo" class="layout space-y-12 lg:space-y-0">
        <div
          class="flex flex-col items-start sm:items-center sm:text-center lg:text-left lg:items-start"
        >
          <h2>What is City pop?</h2>
          <p class="mt-6 max-w-ch">
            City pop (シティーポップ) is a genre of music popular in Japan in the late 70s and 80s
            that blended pop, jazz, and funk
          </p>
          <p class="font-cursive mt-4">Music made by city people, for city people</p>
          <btn class="rounded-full px-5 py-2 bg-mojo-500 mt-8 elevation-2" @click="play = !play">
            <div class="flex items-center">
              <h6 class="font-bold">PLAY SAMPLE</h6>
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-white ml-2">
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
                />
              </svg>
            </div>
          </btn>
        </div>
        <youtube-i-frame :play="play" @video-state-change="handleVideoState" />
        <div class="sm:text-center lg:text-left">
          <h2>Origins</h2>
          <p class="mt-6 max-w-ch">
            It was originally termed as an offshoot of Japan's Western-influenced 'new music', but
            came to include a wide range of styles associated with the country's nascent economic
            boom, such as AOR, soft rock, R&B, funk, and boogie.
            <br />
            <br />
            It was also associated with new emerging technologies, such as the Walkman, cars with
            built-in cassette decks and FM stereos, and various electronic musical instruments.
          </p>
        </div>
        <image-card
          title="'Pacific Breeze' Album Cover"
          artist="Hiroshi Nagai"
          img-src="PacificBreezeAlbumArtByHiroshiNagai.jpg"
        />
        <div class="sm:text-center lg:text-left">
          <h2>21st Century</h2>
          <p class="mt-6 max-w-ch">
            Though the golden age of city pop has long passed, the genre is slowly finding its
            relevance in the 21st century through other offshoot genres like vaporwave and
            futurefunk.
            <br />
            <br />
            One prime example is Plastic Love by Mariya Takeuchi. The song, released in 1984, was
            favoured by Youtube’s recommendation algorithm, giving it the attention it never had
            when it was first released.
          </p>
        </div>
        <image-card
          title="Plastic Love Thumbnail Artwork"
          artist="Usagihime"
          img-src="PlasticLoveArtworkByUsagiHime.jpg"
        />
        <div class="sm:text-center lg:text-left">
          <h2>Sound Signature</h2>
          <p class="mt-6 max-w-ch">
            City pop does not have a definite sound signature, it can sound like anything from soft,
            album-oriented rock to sophisticated boogie disco.
            <br />
            <br />
            Given that city pop is an opulent amalgamation multiple music genres, ‘City pop’ is less
            a strict genre term but rather a broad vibe classification, an aesthetic experience.
            <br />
            <br />
            <b>Experience it for yourself to find out more!</b>
          </p>
        </div>
        <image-card
          title="Sony Music Edition City Pop Album"
          artist="Eizin Suzuki"
          img-src="SonyMusicEditionCityPopAlbumArtbyEizinSuzuki.jpg"
        />
        <div>
          <h2 class="text-left sm:text-center">Popular Albums</h2>
          <album-grid class="mt-6 sm:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl" />
        </div>
      </div>
    </div>
    <end-section />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MainHero from '@/components/MainHero.vue';
import ImageCard from '@/components/ImageCard.vue';
import AlbumGrid from '@/components/AlbumGrid.vue';
import YoutubeIFrame from '@/components/YoutubeIFrame.vue';
import EndSection from '@/components/EndSection.vue';

export default defineComponent({
  name: 'Home',
  components: {
    MainHero,
    ImageCard,
    AlbumGrid,
    YoutubeIFrame,
    EndSection
  },
  setup() {
    const play = ref(false);

    const handleVideoState = (playing: boolean) => {
      play.value = playing;
    };

    return { play, handleVideoState };
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
.layout {
  @apply py-12 flex flex-col items-center px-4;
  @screen sm {
    @apply max-w-screen-sm;
  }
  @screen md {
    @apply max-w-screen-md;
  }
  @screen lg {
    @apply max-w-screen-lg;
    display: grid;
    grid-template-columns: 4fr 5fr;
    gap: 96px 102px;
    > :nth-child(3),
    > :nth-child(5),
    > :nth-child(7) {
      grid-column: 2 / -1;
      align-self: start;
    }
    > :nth-child(4) {
      grid-row: 2;
    }
    > :nth-child(6) {
      grid-row: 3;
    }
    > :nth-child(8) {
      grid-row: 4;
    }
    > :nth-child(9) {
      grid-column: span 2;
    }
  }
  @screen xl {
    @apply max-w-screen-xl;
    gap: 96px 128px;
  }
}
</style>
