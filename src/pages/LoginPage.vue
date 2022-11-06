<template>
  <main class="login">
    <AuthSection>
      <LoginForm />
    </AuthSection>
  </main>
</template>

<script>
import AuthSection from '@/components/Auth/AuthSection.vue';
import LoginForm from '../components/Auth/Login/index.vue';

export default {
  name: 'LoginPage',
  components: { LoginForm, AuthSection },
};
</script>

<style lang="scss" scoped></style>
