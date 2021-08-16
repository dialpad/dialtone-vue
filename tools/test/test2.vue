<template>
  <div class="d-btn d-btn d-btn--outlined d-btn d-btn--inverted">
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
    .d-btn(); .d-btn(); .d-btn--outlined();
  }
</style>
