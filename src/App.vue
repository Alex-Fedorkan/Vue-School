<template>
  <div id="app">
    <Notification />
    <div class="content">
      <AppHeader />
      <router-view></router-view>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import AppHeader from './components/Header.vue';
import AppFooter from './components/Footer.vue';
import Notification from './components/Notification';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    Notification,
  },
  computed: {
    ...mapGetters('auth', ['isLoggedIn']),
  },
  mounted() {
    console.log(this.isLoggedIn);
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
}
</style>
