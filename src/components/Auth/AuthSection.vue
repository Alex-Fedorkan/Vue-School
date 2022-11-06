<template>
  <section class="auth-section"><slot></slot></section>
</template>

<script>
export default {
  name: 'AuthSection',
};
</script>

<style lang="scss" scoped>
.auth-section {
  position: relative;

  min-height: calc(100vh - 30px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')
    no-repeat;
  background-size: cover;
  background-position: center;

  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: rgba(15, 29, 45, 0.5);

    z-index: -1;
  }
}
</style>
