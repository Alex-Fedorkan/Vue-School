<template>
  <div id="app">
    <h2>{{ text }}</h2>
    <Container>
      <ApartmentFilterForm class="apartments-filter" @submit="logger" />
    </Container>
    <ApartmentsList :items="apartments">
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem
          :key="apartment.id"
          :descr="apartment.descr"
          :raiting="apartment.raiting"
          :imgSrc="apartment.imgUrl"
          :price="apartment.price"
          @click.native="handleItemClick(1, $event)"
        />
      </template>
    </ApartmentsList>
  </div>
</template>

<script>
import ApartmentsList from './components/Apartment/ApartmentsList.vue';
import ApartmentsItem from './components/Apartment/ApartmentsItem.vue';
import ApartmentFilterForm from './components/Apartment/ApartmentFilterForm.vue';
import Container from './components/shared/Container.vue';

import apartments from './components/Apartment/apartments';

export default {
  name: 'App',
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentFilterForm,
    Container,
  },
  data() {
    return {
      text: '',
      apartments,
    };
  },
  methods: {
    logger(value) {
      console.log('Form value ', value);
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.apartments-filter {
  margin-bottom: 40px;
}
</style>
