<template>
  <div class="container"><slot></slot></div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Container',
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 1110px;
}
</style>
