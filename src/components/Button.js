import Vue from 'vue';

const Button = Vue.component('BtnR', {
  render(createElement) {
    return createElement('button', this.$slots.default);
  },
});

export default Button;
