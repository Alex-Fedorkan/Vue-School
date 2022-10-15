<template>
  <header class="header">
    <Container>
      <router-link :to="{ name: 'home-page' }">
        <Logo />
      </router-link>
    </Container>
  </header>
</template>

<script>
import Container from './shared/Container.vue';
import Logo from './Logo.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
  components: { Container, Logo },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
.header {
  position: absolute;
  top: 0;
  left: 0;

  padding: 16px 0;
  width: 100%;

  background: $secondary-color;

  z-index: 100;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
