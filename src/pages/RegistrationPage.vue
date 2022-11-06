<template>
  <main class="registration">
    <AuthSection><RegistrationForm /></AuthSection>
  </main>
</template>

<script>
import AuthSection from '@/components/Auth/AuthSection.vue';
import RegistrationForm from '@/components/Auth/Registration';

export default {
  name: 'RegistrationPage',
  components: { AuthSection, RegistrationForm },
};
</script>

<style lang="scss" scoped></style>
