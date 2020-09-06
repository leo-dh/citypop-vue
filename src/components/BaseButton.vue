<template>
  <button
    ref="button"
    class="btn"
    @mousedown="addRipple"
    @mouseup="removeRipple"
    @mouseleave="removeRipple"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const button = ref<HTMLElement | null>(null);

    function addRipple(e: Event): void {
      const buttonElement = button.value as HTMLElement;
      if (buttonElement.querySelector('.ripple')) return;
      const { left, top } = buttonElement.getBoundingClientRect();
      const { clientX, clientY } = e as MouseEvent;
      const x = clientX - left;
      const y = clientY - top;
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      buttonElement.appendChild(ripple);
    }
    function removeRipple(): void {
      const buttonElement = button.value as HTMLElement;
      const ripple = buttonElement.querySelector('.ripple');
      if (!ripple) return;
      (ripple as HTMLElement).style.opacity = '0';
      setTimeout(() => {
        ripple.remove();
      }, 500);
    }

    return { addRipple, removeRipple, button };
  }
});
</script>

<style lang="postcss">
.btn {
  @apply relative overflow-hidden;
  .ripple {
    @apply bg-white opacity-50 absolute rounded-full h-24 w-24 -mt-12 -ml-12;
    animation: ripple 1.5s;
    animation-fill-mode: forwards;
    transition: opacity 1s;
  }
  &:focus {
    outline: none;
  }
}
@keyframes ripple {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(10);
  }
}
</style>
