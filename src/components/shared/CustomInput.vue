<template>
  <div class="wrapper-input">
    <input
      class="custom-input"
      v-on="listeners"
      v-bind="$attrs"
      :class="!isValid && 'custom-input--error'"
    />
    <span class="custom-input__error" v-if="!isValid">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  inheritAttrs: false,
  props: {
    value: { type: String, default: '' },
    errorMessage: { type: String, default: '' },
    rules: { type: Array, default: () => [] },
  },
  data() {
    return { isValid: true, error: '' };
  },
  inject: { form: { default: null } },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit('input', event.target.value),
      };
    },
  },
  watch: {
    value() {
      this.validate();
    },
  },
  mounted() {
    if (!this.form) return;
    this.form.registerInput(this);
  },
  beforeDestroy() {
    if (!this.form) return;
    this.form.unregisterInput(this);
  },
  methods: {
    validate() {
      this.isValid = this.rules.every((rule) => {
        const { hasPassed, message } = rule(this.value);

        if (!hasPassed) this.error = message || this.errorMessage;

        return hasPassed;
      });
      return this.isValid;
    },
    reset() {
      this.$emit('input', '');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
.wrapper-input {
  position: relative;

  display: inline-flex;
}
.custom-input {
  padding: 8px 15px;
  height: 40px;
  width: 100%;

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
