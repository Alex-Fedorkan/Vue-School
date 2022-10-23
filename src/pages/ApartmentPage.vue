<template>
  <main class="apartment-page">
    <Container>
      <div v-if="apartment" class="apartment-page__content">
        <ApartmentsMainInfo :apartment="apartment" />
        <div class="apartment-page__additional-info">
          <ApartmentsOwner
            class="apartment-page__owner"
            :owner="apartment.owner"
          />
          <Reviews :reviews="reviewsList" />
        </div>
      </div>
    </Container>
  </main>
</template>

<script>
import Container from '../components/shared/Container.vue';
import ApartmentsMainInfo from '../components/Apartment/ApartmentsMainInfo.vue';
import ApartmentsOwner from '../components/Apartment/ApartmentsOwner.vue';
import Reviews from '../components/Reviews';
import { getApartmentById } from '@/services/apartments.service';

import reviewsList from '../components/Reviews/reviews.json';

export default {
  name: 'ApartmentPage',
  components: { Container, ApartmentsMainInfo, ApartmentsOwner, Reviews },
  data() {
    return { apartment: null };
  },
  computed: {
    reviewsList() {
      return reviewsList;
    },
  },
  async created() {
    try {
      const { data } = await getApartmentById(this.$route.params.id);
      this.apartment = data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;
  &__content {
    display: flex;
    align-items: flex-start;
  }
  &__additional-info {
    margin-left: 30px;
    max-width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
  }
}
</style>
