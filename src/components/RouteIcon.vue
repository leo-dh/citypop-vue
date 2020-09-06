<template>
  <component :is="iconComponent"></component>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
  props: {
    icon: {
      type: String,
      default: 'home'
    }
  },
  setup(props) {
    const iconComponent = defineAsyncComponent(() =>
      import(`@/components/RouteIcons/${props.icon}.vue`)
    );
    return { iconComponent };
  }
});
</script>

<style scoped></style>
