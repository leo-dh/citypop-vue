<template>
  <div class="flex items-center justify-center w-full h-screen relative overflow-hidden">
    <div class="flex flex-col items-center">
      <h2 class="text-center sm:text-5xl lg:text-6xl xl:text-7xl">Love what you hear?</h2>
      <router-link to="/about">
        <btn
          class="font-cursive bg-mojo-500 px-4 py-2 rounded-full mt-4 btn-elevation btn-hover sm:text-lg sm:px-5 lg:text-xl lg:mt-8 xl:text-2xl xl:mt-12"
        >
          find out more!
        </btn>
      </router-link>
      <h6 class="watermark watermark--top">DISCOVER</h6>
      <h6 class="watermark watermark--bottom">CITY POP</h6>
    </div>
  </div>
</template>

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
  @screen lg {
    font-size: 6em;
  }
  @screen xl {
    font-size: 8em;
  }

  &--top {
    top: 0px;
    left: 0px;
    @screen sm {
      top: -0.1em;
      left: -0.1em;
    }
  }
  &--bottom {
    bottom: 0px;
    right: 0px;
    @screen sm {
      bottom: -0.1em;
      right: -0.1em;
    }
  }
}
</style>
