<template>
  <div class="flex flex-col">
    <main-hero />
    <div class="flex justify-center">
      <div class="max-w-screen-xl py-12 flex flex-col items-center px-4 space-y-12">
        <div>
          <h2>What is City pop?</h2>
          <p class="mt-6">
            City pop (シティーポップ) is a genre of music popular in Japan in the late 70s and 80s
            that blended pop, jazz, and funk
          </p>
          <p class="font-cursive mt-4">Music made by city people, for city people</p>
          <btn class="rounded-full px-5 py-2 bg-mojo-500 mt-8">
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
        <div>
          <h2>Origins</h2>
          <p class="mt-6">
            It was originally termed as an offshoot of Japan's Western-influenced 'new music', but
            came to include a wide range of styles associated with the country's nascent economic
            boom, such as AOR, soft rock, R&B, funk, and boogie. <br />
            <br />It was also associated with new emerging technologies, such as the Walkman, cars
            with built-in cassette decks and FM stereos, and various electronic musical instruments.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainHero from '@/components/MainHero.vue';

export default defineComponent({
  name: 'Home',
  components: {
    MainHero
  }
});
</script>

<style lang="postcss" scoped></style>
