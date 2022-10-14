<template>
  <div class="apartments-item">
    <div class="apartments-item__inner">
      <img class="apartments-item__photo" :src="imgSrc" alt="" />
      <div class="apartments-item__content">
        <p class="apartments-item__description">{{ descr }}</p>
        <div class="apartments-item__rating">
          <StarRating :rating="rating" />
        </div>
        <div class="apartments-item__price">UAH {{ price }}</div>
        <router-link
          :to="{ name: 'apartment', params: { id }, query: { name: 'John' } }"
          class="apartments-item__link"
        />
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from '../StarRating.vue';

export default {
  name: 'ApartmentsItem',
  components: { StarRating },
  props: {
    id: {
      type: String,
      required: true,
    },

    descr: {
      type: String,
      default: '',
    },
    rating: {
      type: Number,
      default: 0,
    },
    price: { type: Number, required: true },
    imgSrc: { type: String, default: '' },
  },
};
</script>

<style lang="scss" scoped>
.apartments-item {
  position: relative;

  margin-bottom: 30px;
  padding: 0 15px;
  width: 33.333%;

  &__inner {
    position: relative;
  }

  &__content {
    position: relative;

    padding: 20px;
    min-height: 200px;

    line-height: 1.4;
    text-align: start;
    color: #fff;

    background: rgba(#0f1d2d, 0.7);

    opacity: 0;

    transition: opacity 0.4s;

    z-index: 1;

    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  &__description {
    margin-bottom: 20px;
    max-height: calc(1em * 1.4 * 3);

    overflow: hidden;
  }

  &__rating {
    margin-bottom: 20px;
  }

  &__price {
    font-size: 20px;
    font-weight: 600;
  }

  &__photo {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
  }
}
</style>
