<template>
  <div id="app">
    <div class="content">
      <AppHeader />
      <router-view></router-view>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/Header.vue';
import AppFooter from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss" scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.content {
  flex-grow: 1;
  padding-top: 120px;
}
</style>
