<template>
  <div class="d-input-message--warning d-some-other-class-that-wont-be-matched">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'SomeComponent',
  data () {
    return {
      text: 'Some text',
    };
  },
};
</script>

<style lang="less" scoped>
  .some-local-class {
    .d-some-class1();
    .d-some-other-class-that-wont-be-matched();
    .d-some-class2();
  }
</style>
