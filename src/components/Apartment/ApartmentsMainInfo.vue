<template>
  <article class="apartment-main-info">
    <div class="apartment-main-info__heading">
      <h1 class="apartment-main-info__title">{{ apartment.title }}</h1>
      <Rating :rating="apartment.rating" />
    </div>
    <img :src="apartment.imgUrl" alt="" class="apartment-main-info__photo" />
    <p class="apartment-main-info__description">{{ apartment.descr }}</p>
  </article>
</template>

<script>
import Rating from '../StarRating.vue';
export default {
  name: 'ApartmentsMainInfo',
  comments: { Rating },
  props: {
    apartment: { type: Object, required: true },
  },
};
</script>

<style lang="scss" scoped>
.apartment-main-info {
  &__heading {
    display: flex;
  }
  &__title {
    margin-right: 20px;
    margin-bottom: 20px;

    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
  }
  &__photo {
    max-width: 100%;
  }
  &__description {
    margin-top: 30px;

    line-height: 1.3;
  }
  &__btn {
    margin-top: 20px;

    text-align: center;
  }
}
</style>
