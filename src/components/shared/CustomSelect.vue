<template>
  <select class="custom-select" v-on="listeners">
    <option
      v-for="item in formatedItems"
      :key="item.value"
      :value="item.value"
      :selected="item.selected"
    >
      {{ item.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'CustomSelect',
  props: {
    items: { type: Array, required: true },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit('input', event.target.value),
      };
    },
    formatedItems() {
      return this.items.map((item) =>
        typeof item === 'object'
          ? item
          : {
              value: item,
              label: item,
            },
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
.custom-select {
  padding: 8px 15px;
  max-width: 220px;
  width: 100%;
  height: 40px;
  display: inline-block;

  font-size: 18px;

  border: 2px solid $main-color;

  outline: none;

  cursor: pointer;
}
</style>
