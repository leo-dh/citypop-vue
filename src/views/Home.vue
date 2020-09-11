<template>
  <div class="flex flex-col">
    <main-hero />
    <div class="flex justify-center">
      <div id="scrollTo" class="max-w-screen-xl py-12 flex flex-col items-center px-4 space-y-12">
        <div>
          <h2>What is City pop?</h2>
          <p class="mt-6">
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
        <div>
          <h2>Origins</h2>
          <p class="mt-6">
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
        <div>
          <h2>21st Century</h2>
          <p class="mt-6">
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
        <div>
          <h2>Sound Signature</h2>
          <p class="mt-6">
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
          <h2 class="text-left">Popular Albums</h2>
          <album-grid class="mt-6" />
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center w-full h-screen relative overflow-hidden">
      <div class="flex flex-col items-center">
        <h2 class="text-center">Love what you hear?</h2>
        <btn class="font-cursive bg-mojo-500 px-4 py-2 rounded-full mt-4 elevation-2">
          find out more!
        </btn>
        <h6 class="watermark watermark--top">DISCOVER</h6>
        <h6 class="watermark watermark--bottom">CITY POP</h6>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MainHero from '@/components/MainHero.vue';
import ImageCard from '@/components/ImageCard.vue';
import AlbumGrid from '@/components/AlbumGrid.vue';
import YoutubeIFrame from '@/components/YoutubeIFrame.vue';

export default defineComponent({
  name: 'Home',
  components: {
    MainHero,
    ImageCard,
    AlbumGrid,
    YoutubeIFrame
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
.watermark {
  position: absolute;
  opacity: 0.05;
  font-size: 5em;
  line-height: 0.8em;
  white-space: nowrap;
  font-weight: bold;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  &--top {
    top: 0px;
  }
  &--bottom {
    bottom: 0px;
  }
}
</style>
