<template>
  <div :id="$style.app">
    <ApartmentsItem
      :descr="apartment.descr"
      :price="apartment.price"
      :rating="apartment.rating"
      imgSrc="https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR-1200-80.jpg.webp"
    />
  </div>
</template>

<script>
import ApartmentsItem from './components/Apartment/ApartmentsItem.vue';

export default {
  name: 'App',
  components: { ApartmentsItem },
  data() {
    return {
      apartment: {
        id: '5f05c9dad2c9bc0f773444bc',
        title:
          'Aut qui adipisci distinctio maiores molestiae sit est inventore vero.',
        descr:
          'Non perferendis rerum a in nisi exercitationem dolorum perferendis. Eligendi sit error sed a . Facere maiores sit adipisci sequi eveniet. Qui est voluptatum maiores eos qui vitae.',
        price: 2032,
        rating: 4.4,
        location: { city: 'Kherson' },
        owner: {
          name: 'Ellen',
          phone: ' 115-355-5652',
          email: 'Tracey.Morar86@hotmail.com',
        },
      },
    };
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
