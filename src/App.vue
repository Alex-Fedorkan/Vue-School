<template>
  <div :id="$style.app">
    <h2>{{ text }}</h2>
    <CustomInput type="text" v-model="text" />
    <ApartmentsList :items="apartments">
      <template v-slot:title>New Title</template>
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
import CustomInput from './components/shared/CustomInput.vue';

import apartments from './components/Apartment/apartments';

export default {
  name: 'App',
  components: { ApartmentsList, ApartmentsItem, CustomInput },
  data() {
    return {
      text: '',
      apartments,
    };
  },
  methods: {
    handleItemClick(index, event) {
      console.log(index, ' Item App click ', event);
    },
  },
};
</script>

<style module>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
