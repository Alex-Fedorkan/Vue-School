<template>
  <main class="my-orders-page">
    <SectionWithHeaderSpacer>
      <Container>
        <section class="my-orders-page__content">
          <MainTitle>Замовлення</MainTitle>
          <OrdersList :items="orders" />
        </section>
      </Container>
    </SectionWithHeaderSpacer>
  </main>
</template>

<script>
import OrdersList from '@/components/MyOrders/OrdersList.vue';
import Container from '@/components/shared/Container.vue';
import MainTitle from '@/components/shared/MainTitle.vue';
import SectionWithHeaderSpacer from '@/components/shared/SectionWithHeaderSpacer.vue';
import { getOrders } from '../services/orders.service';

export default {
  name: 'MyOrdersPage',
  components: { SectionWithHeaderSpacer, Container, MainTitle, OrdersList },
  data() {
    return { orders: [] };
  },
  async created() {
    try {
      this.orders = (await getOrders()).data;
    } catch (error) {
      this.$notify({ type: 'error', title: 'Помилка', text: error.message });
    }
  },
};
</script>

<style lang="scss" scoped>
.my-orders-page {
  &__content {
    margin: 0 auto 100px;
    max-width: 730px;
  }
}
</style>
