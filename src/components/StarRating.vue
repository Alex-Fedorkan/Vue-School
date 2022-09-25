<template>
  <div class="star-rating">
    <span class="star star--outlined" v-for="index in starLimit" :key="index" />
    <div class="star-rating__colored" :style="ratingWidthStyle">
      <span
        class="star star--colored"
        v-for="index in starLimit"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'StarRating',
  props: {
    rating: {
      type: Number,
      default: 0,
    },
    starLimit: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    ratingWidth() {
      return (this.rating / this.starLimit) * 100;
    },
    ratingWidthStyle() {
      return `width: ${this.ratingWidth}%;`;
    },
  },
};
</script>

<style lang="scss" scoped>
.star-rating {
  position: relative;

  display: inline-flex;

  &__colored {
    position: absolute;
    top: 0;
    left: 0;

    display: inline-flex;
    width: 0;
    height: 100%;

    overflow: hidden;
  }
}

.star {
  margin: 0 3px;
  display: inline-flex;
  flex-shrink: 0;
  width: 16px;
  height: 16px;

  &--colored {
    background: url('../../public/img/star-yellow.svg') center no-repeat;
  }

  &--outlined {
    background: url('../../public/img/star-outlined.svg') center no-repeat;
  }
}
</style>
