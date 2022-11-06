<template>
  <AuthContainer class="registration">
    <MainTitle class="registration__title">Registration</MainTitle>
    <Form ref="form" class="registration__form" @submit.prevent="handleSubmit">
      <CustomInput
        class="registration__input"
        v-model="formData.name"
        placeholder="Name"
        autocomplete="username"
        name="name"
        :rules="nameRules"
        type="text"
      />
      <CustomInput
        class="registration__input"
        v-model="formData.email"
        placeholder="Email"
        autocomplete="email"
        name="email"
        :rules="emailRules"
        type="email"
      />
      <CustomInput
        class="registration__input"
        v-model="formData.password"
        placeholder="Password"
        autocomplete="current-password"
        name="password"
        :rules="passwordRules"
        type="password"
      />
      <CustomInput
        class="registration__input"
        v-model="formData.confirmPassword"
        placeholder="Confirm Password"
        autocomplete="current-password"
        name="confirm-password"
        :rules="confirmPassword"
        type="password"
      />
      <Button class="registration__btn" type="submit" :loading="loading">
        Вхід
      </Button>
    </Form>
  </AuthContainer>
</template>

<script>
import Form from '../../shared/form';
import CustomInput from '../../shared/CustomInput.vue';
import Button from '@/components/shared/Button.vue';
import AuthContainer from '../AuthContainer.vue';
import MainTitle from '@/components/shared/MainTitle.vue';

import {
  isRequired,
  emailValidation,
  passwordValidation,
} from '@/utils/validationRules';

export default {
  name: 'RegistrationForm',
  components: { Form, CustomInput, Button, AuthContainer, MainTitle },
  data() {
    return {
      loading: false,
      formData: { name: '', email: '', password: '', confirmPassword: '' },
    };
  },
  computed: {
    rules() {
      return { isRequired, emailValidation, passwordValidation };
    },
    nameRules() {
      return [this.rules.isRequired];
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
    confirmPassword() {
      return [
        (val) => ({
          hasPassed: val === this.formData.password,
          message: 'Паролі не співпадають',
        }),
      ];
    },
  },
  methods: {
    async handleSubmit() {
      const { form } = this.$refs;
      const isFormValid = form.validate();
      const { name, password, email } = this.formData;

      if (isFormValid) {
        try {
          this.loading = true;

          await this.$store.dispatch('registration', { name, password, email });

          this.$router.push({ name: 'home-page' });
          form.reset();
        } catch (error) {
          console.log('Register error', error);
          this.$notify({
            type: 'error',
            title: 'Помилка',
            text: error.message,
          });
        } finally {
          this.loading = false;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.registration {
  &__form {
    display: block;
    flex-direction: column;
  }
  &__title {
    text-align: center;
  }
  &__input {
    margin-bottom: 20px;
    width: 100%;
  }
  &__btn {
    margin-top: 15px;
    width: 100%;
  }
}
</style>
