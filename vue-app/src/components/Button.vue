<template>
  <button class="md:uppercase">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Button",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
button {
  @apply bg-primary text-white border-0 rounded px-3 py-2 cursor-pointer transition-colors duration-300;
}
button:hover {
  @apply bg-primary-dark;
}

@media (min-width: 768px) {
  button {
    @apply bg-secondary;
  }
  button:hover {
    @apply bg-secondary-dark;
  }
}
</style>
