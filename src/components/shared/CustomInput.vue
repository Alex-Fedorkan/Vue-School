<template>
  <input class="custom-input" v-on="listeners" />
</template>

<script>
export default {
  name: 'CustomInput',
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit('input', event.target.value),
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
.custom-input {
  padding: 8px 15px;
  min-height: 40px;

  font-size: 18px;
  line-height: inherit;

  border: 2px solid $main-color;

  outline: none;

  &::placeholder {
    color: inherit;
  }

  &--error {
    border-color: red;
  }

  &__error {
    position: absolute;
    top: 100%;
    right: 0;

    width: 100%;

    font-size: 12px;
    line-height: 1.3;
    color: red;
  }
}
</style>
