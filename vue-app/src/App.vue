<template>
  <div id="app">
    <h1>Vue example</h1>
    <Button>Button</Button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "./components/Button.vue";

export default Vue.extend({
  name: "App",
  components: {
    Button,
  },
});
</script>

<style lang="postcss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  @apply text-4xl font-bold mb-4;
}
</style>
