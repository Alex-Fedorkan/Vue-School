<template>
  <section class="error">
    <SectionWithHeaderSpacer>
      <h1 class="error__title">Page not found</h1>
    </SectionWithHeaderSpacer>
  </section>
</template>

<script>
import SectionWithHeaderSpacer from '@/components/shared/SectionWithHeaderSpacer.vue';

export default {
  name: 'ErrorPage',
  components: { SectionWithHeaderSpacer },
};
</script>

<style lang="scss" scoped>
.error {
  &__title {
    font-size: 60px;
    text-align: center;
  }
}
</style>
