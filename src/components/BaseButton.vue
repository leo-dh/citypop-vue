<template>
  <button ref="button" class="btn" @click="triggerRipple">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const button = ref(null);

    function triggerRipple(e: Event): void {
      const buttonElement = (button.value as unknown) as HTMLElement;
      const { left, top } = buttonElement.getBoundingClientRect();
      const { clientX, clientY } = e as MouseEvent;
      const x = clientX - left;
      const y = clientY - top;
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      buttonElement.appendChild(ripple);
      setTimeout(() => {
        ripple.remove();
      }, 400);
    }

    return { triggerRipple, button };
  }
});
</script>

<style lang="postcss">
.btn {
  @apply relative overflow-hidden;
  .ripple {
    @apply bg-white opacity-50 absolute rounded-full h-24 w-24 -mt-12 -ml-12;
    animation: ripple 1.5s;
  }
  &:focus {
    outline: none;
  }
}
@keyframes ripple {
  from {
    @apply opacity-50;
    transform: scale(0);
  }

  to {
    @apply opacity-0;
    transform: scale(10);
  }
}
</style>
