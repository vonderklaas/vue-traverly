<template>
  <Navbar />
  <div class="container">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #f7f8f9;
}
.container {
  max-width: 1170px;
  margin: 0 auto;
}
</style>
