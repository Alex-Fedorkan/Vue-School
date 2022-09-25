<template>
  <div :id="$style.app">
    <h1>{{ title }}</h1>
    <BasicButton @click="increment" type="button" outlined
      >Click me</BasicButton
    >
    <DirectivesTest />
  </div>
</template>

<script>
import BasicButton from './components/BasicButton';
import DirectivesTest from './components/DirectivesTest.vue';

export default {
  name: 'App',
  components: {
    BasicButton,
    DirectivesTest,
  },
  data() {
    return { amountOfClicks: 0 };
  },
  computed: {
    title() {
      return `Amount of clicks ${this.amountOfClicks}`;
    },
  },
  methods: {
    increment() {
      this.amountOfClicks += 1;
    },
  },
};
</script>

<style module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
