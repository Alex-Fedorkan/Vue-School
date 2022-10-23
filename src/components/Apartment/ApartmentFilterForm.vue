<template>
  <form class="form" @submit.prevent="handleSubmit">
    <CustomSelect :items="cities" v-model="city" class="form__select" />
    <CustomInput
      v-model="price"
      placeholder="Ціна від"
      errorMessage="Не повинно бути порожнім"
      :rules="rules"
    />
    <SubmitButton class="form__submit" type="submit">Підбір житла</SubmitButton>
  </form>
</template>

<script>
import CustomSelect from '../shared/CustomSelect.vue';
import CustomInput from '../shared/CustomInput.vue';
import SubmitButton from '../shared/Button.vue';
import { isRequired, charLimit } from '@/utils/validationRules';

export default {
  name: 'ApartmentFilterForm',
  components: {
    CustomSelect,
    CustomInput,
    SubmitButton,
  },
  data() {
    return { price: '', city: '' };
  },
  computed: {
    cities() {
      return [
        { label: 'Місто', value: '', selected: true },
        'Kyiv',
        'Odesa',
        'Poltava',
        'Kharkiv',
        'Dnipro',
        'Lviv',
        'Kherson',
        'Mariupol',
      ];
    },
    rules() {
      return [isRequired, charLimit(10)];
    },
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', { city: this.city, price: this.price });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  &__select {
    margin-right: 30px;
  }
  &__submit {
    margin-left: auto;
  }
}
</style>
