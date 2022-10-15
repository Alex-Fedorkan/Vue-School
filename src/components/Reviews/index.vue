<template>
  <section class="reviews">
    <div class="reviews__heading">
      <h2 class="reviews__title">Сумарний рейтинг</h2>
      <div class="reviews__rating">
        <span>{{ amountOfReviews }} відгук(ів)</span>
        <Rating :rating="totalRating" />
      </div>
    </div>
    <ReviewsItem
      v-for="review in currentReviews"
      :key="review.author"
      :review="review"
    />
    <button class="reviews__show-more" @click="toggleReviews">
      {{ buttonText }}
    </button>
  </section>
</template>

<script>
import ReviewsItem from './ReviewsItem';
import Rating from '../StarRating.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Reviews',
  components: { ReviewsItem, Rating },
  props: { reviews: { type: Array, required: true } },
  data() {
    return { reviewsLimit: 2 };
  },
  computed: {
    totalRating() {
      const total = this.reviews.reduce(
        (acc, review) => acc + review.rating,
        0,
      );
      return total / this.reviews.length;
    },
    amountOfReviews() {
      return this.reviews.length;
    },
    currentReviews() {
      return this.reviews.slice(0, this.reviewsLimit);
    },
    buttonText() {
      return this.reviewsLimit === this.reviews.length
        ? 'Згорнути'
        : 'Читати ще...';
    },
  },
  methods: {
    toggleReviews() {
      if (this.reviewsLimit === this.reviews.length)
        return (this.reviewsLimit = 2);
      this.reviewsLimit = this.reviews.length;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
.reviews {
  margin-top: 20px;
  padding: 0 2px;

  background: $card-bg;

  &__heading {
    padding: 20px 20px 10px;
  }

  &__title {
    margin-bottom: 10px;

    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
  }

  &__rating {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__show-more {
    padding: 12px;
    width: 100%;

    font-family: inherit;
    font-size: 16px;

    background: none;

    border: none;

    cursor: pointer;
  }
}
</style>
