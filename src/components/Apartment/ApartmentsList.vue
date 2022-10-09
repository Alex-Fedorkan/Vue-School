<template>
  <Container>
    <div class="apartments-list">
      <ApartmentsItem
        v-for="{ id, descr, raiting, imgUrl, price } in items"
        :key="id"
        :descr="descr"
        :raiting="raiting"
        :imgSrc="imgUrl"
        :price="price"
        class="apartments-list__item"
      /></div
  ></Container>
</template>

<script>
import Container from '../shared/Container.vue';
import ApartmentsItem from './ApartmentsItem.vue';

export default {
  name: 'ApartmentsList',
  components: { ApartmentsItem, Container },
  props: {
    items: { type: Array, default: () => [] },
  },
};
</script>

<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;

  &__item {
    margin-bottom: 30px;
  }
}
</style>
