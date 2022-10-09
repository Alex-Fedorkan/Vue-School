<template>
  <button
    v-on="$listeners"
    v-bind:type="type"
    :class="{ btn: true, 'btn--outlined': outlined }"
    style="opacity: 0.5"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button',
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 8px 15px;
  min-width: 220px;
  display: inline-block;

  font-size: 18px;
  color: #fff;

  background-color: #ff662d;
  border: 1px solid transparent;

  cursor: pointer;

  &--outlined {
    color: #ff662d;

    background: none;
    border: 1px solid #ff662d;
  }
}
</style>
