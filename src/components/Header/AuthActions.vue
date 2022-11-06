<template>
  <div class="auth-actions">
    <router-link class="auth-actions__link" :to="{ name: 'login-page' }">
      Вхід
    </router-link>
    /
    <router-link class="auth-actions__link" :to="{ name: 'registration-page' }">
      Регістрація
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'AuthActions',
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.auth-actions {
  color: #fff;

  &__link {
    text-decoration: none;
    color: inherit;

    transition: color 0.4s;

    &:hover {
      color: $main-color;
    }
  }
}
</style>
