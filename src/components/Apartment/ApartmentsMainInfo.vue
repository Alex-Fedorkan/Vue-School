<template>
  <article class="apartment-main-info">
    <div class="apartment-main-info__heading">
      <h1 class="apartment-main-info__title">{{ apartment.title }}</h1>
      <Rating :rating="apartment.rating" />
    </div>
    <img :src="apartment.imgUrl" alt="" class="apartment-main-info__photo" />
    <p class="apartment-main-info__description">{{ apartment.descr }}</p>
    <div class="apartment-main-info__btn">
      <Button
        type="button"
        @click="handleApartmentsBooking"
        :loading="isLoading"
      >
        Забронювати
      </Button>
    </div>
  </article>
</template>

<script>
import Rating from '../StarRating.vue';
import Button from '../shared/Button.vue';
import { bookApartment } from '../../services/orders.service';

export default {
  name: 'ApartmentsMainInfo',
  components: { Rating, Button },
  props: {
    apartment: { type: Object, required: true },
  },
  data() {
    return { isLoading: false };
  },
  methods: {
    async handleApartmentsBooking() {
      const body = { date: Date.now(), apartmentId: this.$route.params.id };

      try {
        this.isLoading = true;
        await bookApartment(body);
        this.$notify({
          type: 'success',
          title: 'Замовлення додано',
        });
      } catch (error) {
        console.log('Book apartments error', error);
        this.$notify({ type: 'error', title: 'Помилка', text: error.message });
      } finally {
        this.isLoading = false;
      }
    },
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
