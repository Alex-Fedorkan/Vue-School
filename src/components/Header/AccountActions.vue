<template>
  <div class="account-actions" @mouseover="open" @mouseleave="close">
    <button class="account-actions__btn" @click="toggle">
      <span class="account-actions__text">Профіль</span>
      <svg
        class="account-actions__icon"
        width="16"
        height="18"
        viewBox="0 0 16 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 0C5.38286 0 3.25391 2.12896 3.25391 4.74609C3.25391 7.36323 5.38286 9.49219 8 9.49219C10.6171 9.49219 12.7461 7.36323 12.7461 4.74609C12.7461 2.12896 10.6171 0 8 0Z"
        />
        <path
          d="M15.8216 14.0161C14.4028 11.8877 12.0282 10.6172 9.4708 10.6172H6.5292C3.9718 10.6172 1.5972 11.8877 0.178438 14.0161L0.0898438 14.1489V18H15.9102H15.9102V14.1489L15.8216 14.0161Z"
        />
      </svg>
    </button>
    <ul v-show="isOpen" class="account-actions__list">
      <li class="account-actions__item">
        <router-link class="account-actions__link" :to="{ name: 'my-orders' }">
          Мої замовлення
        </router-link>
      </li>
      <li class="account-actions__item">
        <button class="account-actions__logout" @click="handleLogOut">
          Вийти
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AccountActions',
  data() {
    return { isOpen: false };
  },
  methods: {
    ...mapActions('auth', ['logout']),
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
    async handleLogOut() {
      try {
        await this.logout();
        const { requiresAuth } = this.$route.meta;

        if (requiresAuth) this.$router.push({ name: 'login-page' });
      } catch (error) {
        this.$notify({ type: 'error', title: 'Помилка', text: error.message });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.account-actions {
  position: relative;

  padding: 5px 0;
  display: inline-flex;

  color: #fff;

  &__btn {
    padding: 0;
    display: flex;
    align-items: center;

    font-family: inherit;
    font-size: 16px;
    color: inherit;

    background: none;
    border: none;

    cursor: pointer;

    transition: color 0.4s;

    &:hover {
      color: $main-color;
    }
  }

  &__text {
    margin-right: 5px;
  }

  &__icon {
    width: 16px;
    height: 18px;

    fill: currentColor;

    transition: fill 0.4s;
  }

  &__list {
    position: absolute;
    top: 100%;
    right: 0;

    padding: 15px;
    width: 150px;

    color: #000;

    background: #fff;
    border: 1px solid $secondary-color;
  }

  &__item {
    margin-bottom: 5px;

    transition: color 0.4s;

    &:hover {
      color: $main-color;
    }
  }

  &__link {
    text-decoration: none;
    color: inherit;
  }

  &__logout {
    padding: 0;

    font-family: inherit;
    font-size: inherit;
    color: inherit;

    background: none;
    border: none;

    cursor: pointer;
  }
}
</style>
