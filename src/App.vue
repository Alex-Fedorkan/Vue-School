<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <BtnR>Click me</BtnR>
    <Title></Title>
  </div>
</template>

<script>
import BtnR from './components/Button';
import Title from './components/TitleEX.vue';

export default {
  name: 'App',
  components: {
    BtnR,
    Title,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
