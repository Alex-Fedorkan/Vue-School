<template>
  <footer class="footer"></footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
.footer {
  height: 30px;

  background: $secondary-color;
}
</style>
