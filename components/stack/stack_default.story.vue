<template>
  <dt-stack
    :dir="dir"
    :as="as"
    :gap="gap"
  >
    <div>element 1</div>
    <div>element 2</div>
  </dt-stack>
</template>

<script>
import DtStack from './stack';

export default {
  name: 'StackDefault',
  components: { DtStack },
  data: () => ({
    key: '',
  }),

};
</script>
