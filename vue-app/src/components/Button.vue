<template>
  <button>
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
<style scoped lang="scss">
button {
  background-color: steelblue;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  padding: 0.75rem 1rem;
  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: #346085;
  }
}

@media (min-width: 800px) {
  button {
    background-color: rebeccapurple;
    &:hover {
      background-color: #472469;
    }
  }
}
</style>
