<template>
  <section class="reviews-item">
    <ReviewsHeading :rating="review.rating" :author="review.author" />
    <p class="reviews-item__content">{{ review.content }}</p>
  </section>
</template>

<script>
import ReviewsHeading from './ReviewsHeading.vue';

export default {
  name: 'ReviewsItem',
  components: { ReviewsHeading },
  props: { review: { type: Object, required: true } },
};
</script>

<style lang="scss" scoped>
.reviews-item {
  margin-bottom: 2px;
  padding: 20px 22px;

  line-height: 1.3;

  background: #fff;

  &:last-child {
    margin-bottom: 0;
  }
  &__content {
    margin-top: 20px;
    display: -webkit-box;

    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
  }
}
</style>
