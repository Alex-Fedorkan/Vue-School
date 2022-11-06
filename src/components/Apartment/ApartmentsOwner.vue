<template>
  <section class="apartments-owner">
    <h2 class="apartments-owner__title">Інформація про власника:</h2>
    <p class="apartments-owner__info">{{ owner.name }}</p>
    <p class="apartments-owner__info">Tel: {{ owner.phone }}</p>
    <p class="apartments-owner__info">E-mail: {{ owner.email }}</p>
  </section>
</template>

<script>
export default {
  name: 'ApartmentsOwner',
  props: { owner: { type: Object, required: true } },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
.apartments-owner {
  padding: 20px;

  font-weight: 400;

  background: $card-bg;
  &__title {
    margin-bottom: 20px;

    font-size: 18px;
    font-weight: 700;
  }
  &__info {
    margin-top: 6px;
  }
}
</style>
