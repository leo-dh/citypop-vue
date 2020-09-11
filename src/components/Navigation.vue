<template>
  <nav class="fixed z-10 flex justify-center w-full" :class="showNav ? 'nav--show' : 'nav--hide'">
    <div class="max-w-screen-xl p-1 flex justify-between w-full sm:justify-end">
      <btn
        class="p-3 rounded-full hover:bg-gray-600 hover:bg-opacity-25 hover-fade sm:hidden"
        @click="toggleSideBar(true)"
      >
        <svg
          class="w-6 h-6 fill-current text-white"
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
          />
        </svg>
      </btn>
      <div class="hidden sm:flex space-x-8 mr-8 py-6">
        <template v-for="(route, i) in routes" :key="i">
          <router-link :to="route.path" exact-active-class="text-japonica-500">
            <span class="font-bold text-lg">{{ route.name }}</span>
          </router-link>
        </template>
      </div>
    </div>
  </nav>
  <div>
    <transition name="fade">
      <div
        v-if="showSideBar"
        class="w-full h-screen fixed cursor-pointer bg-black bg-opacity-25 z-20"
        @click="toggleSideBar(false)"
      ></div>
    </transition>
    <div
      class="h-screen fixed bg-blackcurrant z-30 w-56 sidebar elevation-16 flex flex-col space-y-1 p-2"
      :class="showSideBar ? 'sidebar--show' : 'sidebar--hide'"
    >
      <template v-for="(route, i) in routes" :key="i">
        <router-link :to="route.path" exact-active-class="text-japonica-500">
          <btn class="rounded w-full" @click="toggleSideBar(false)">
            <div class="flex w-full px-1 py-5 items-center">
              <route-icon :icon="route.meta.icon" class="w-6 h-6  fill-current mx-2" />
              <span class="font-serif font-bold ml-4">{{ route.name }}</span>
            </div>
          </btn>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, watch } from 'vue';
import RouteIcon from '@/components/RouteIcon.vue';
import { throttle } from 'lodash';
import { routes } from '@/router/routes';
import { useRoute } from 'vue-router';

function useSideBar() {
  const showSideBar = ref(false);
  function toggleSideBar(open: boolean) {
    if (open) {
      showSideBar.value = true;
      document.body.style.overflow = 'hidden';
    } else {
      showSideBar.value = false;
      document.body.style.overflow = 'auto';
    }
  }
  watch(useRoute(), () => {
    toggleSideBar(false);
  });
  return {
    showSideBar,
    toggleSideBar
  };
}
function useNavBar() {
  const showNav = ref(true);
  let prevYOffset = 0;
  const scrollCallback = throttle(
    () => {
      const yOffset = window.pageYOffset;
      showNav.value = yOffset <= prevYOffset;
      prevYOffset = yOffset;
    },
    150,
    { leading: true }
  );
  onMounted(() => {
    window.addEventListener('scroll', scrollCallback);
  });
  onUnmounted(() => {
    window.removeEventListener('scroll', scrollCallback);
  });
  return {
    showNav
  };
}

export default defineComponent({
  components: {
    RouteIcon
  },
  setup() {
    const { showSideBar, toggleSideBar } = useSideBar();
    const { showNav } = useNavBar();

    return { showNav, showSideBar, toggleSideBar, routes };
  }
});
</script>

<style lang="postcss" scoped>
.hover-fade {
  transition: all 0.2s ease-in-out;
}
nav {
  transition: transform 0.2s ease;
}
.nav--show {
  transform: translateY(0);
}
.nav--hide {
  transform: translateY(-100%);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.sidebar {
  transition: transform 0.3s ease;
}
.sidebar--show {
  transform: translateX(0);
}
.sidebar--hide {
  transform: translateX(-100%);
}
</style>
