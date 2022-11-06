<template>
  <button
    v-on="$listeners"
    v-bind:type="type"
    :class="{ btn: true, 'btn--outlined': outlined }"
    style="opacity: 0.5"
    :disabled="loading"
  >
    <CircleLoader v-if="loading" width="38" height="38" />
    <span class="btn__content" :class="contentStyle">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import CircleLoader from '../Loaders/Circle.vue';

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
    loading: { type: Boolean, default: false },
  },
  components: { CircleLoader },
  computed: {
    contentStyle() {
      return {
        'btn__content--hidden': this.loading,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  position: relative;

  padding: 8px 15px;
  min-width: 220px;
  display: inline-block;

  font-family: Montserrat, sans-serif;
  font-size: 18px;
  color: #fff;

  background: #ff662d;
  border: 1px solid transparent;

  cursor: pointer;

  transition: background-color 0.4s, color 0.4s;

  &:hover {
    color: #ff662d;

    background: #fff;
    border: 1px solid #ff662d;
  }

  &--outlined {
    color: #ff662d;

    background: none;
    border: 1px solid #ff662d;
  }

  &__content {
    &--hidden {
      opacity: 0;
    }
  }

  &__loader {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
  }
}
</style>
