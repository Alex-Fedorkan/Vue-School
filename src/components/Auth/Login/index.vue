<template>
  <AuthContainer class="login">
    <MainTitle class="login__title">Login</MainTitle>
    <Form ref="form" class="login__form" @submit.prevent="handleSubmit">
      <CustomInput
        class="login__input"
        v-model="formData.email"
        placeholder="Email"
        autocomplete="email"
        name="email"
        :rules="emailRules"
        type="email"
      />
      <CustomInput
        class="login__input"
        v-model="formData.password"
        placeholder="Password"
        autocomplete="current-password"
        name="password"
        :rules="passwordRules"
        type="password"
      />
      <Button class="login__btn" type="submit" :loading="loading">Вхід</Button>
    </Form>
  </AuthContainer>
</template>

<script>
import Form from '../../shared/form';
import CustomInput from '../../shared/CustomInput.vue';
import Button from '@/components/shared/Button.vue';
import AuthContainer from '../AuthContainer.vue';
import MainTitle from '@/components/shared/MainTitle.vue';
import { loginUser } from '../../../services/auth.service';

import {
  isRequired,
  emailValidation,
  passwordValidation,
} from '@/utils/validationRules';

export default {
  name: 'LoginForm',
  components: { Form, CustomInput, Button, AuthContainer, MainTitle },
  data() {
    return { loading: false, formData: { email: '', password: '' } };
  },
  computed: {
    rules() {
      return { isRequired, emailValidation, passwordValidation };
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired];
    },
  },
  methods: {
    async handleSubmit() {
      const isFormValid = this.$refs.form.validate();

      if (isFormValid) {
        try {
          this.loading = true;
          const { data } = await loginUser(this.formData);
          console.log(data);
        } catch (error) {
          console.log('Login error', error);
        } finally {
          this.loading = false;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
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
