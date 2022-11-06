<template>
  <header class="header">
    <Container>
      <div class="header__content">
        <router-link :to="{ name: 'home-page' }">
          <Logo />
        </router-link>
        <AccountActions v-if="isLoggedIn" />
        <AuthActions v-else />
      </div>
    </Container>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

import Container from '../shared/Container.vue';
import Logo from '../Logo.vue';
import AuthActions from './AuthActions.vue';
import AccountActions from './AccountActions.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
  components: { Container, Logo, AuthActions, AccountActions },
  computed: { ...mapGetters('auth', ['isLoggedIn']) },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
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
