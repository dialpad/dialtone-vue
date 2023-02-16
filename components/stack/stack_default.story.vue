<template>
  <dt-stack
    :direction="$attrs.direction"
    :as="$attrs.as"
    :gap="$attrs.gap"
  >
    <div class="d-bgc-magenta-100">
      Stack item 1
    </div>
    <div class="d-bgc-magenta-100">
      Stack item 2
    </div>
    <div class="d-bgc-magenta-100">
      Stack item 3
    </div>
  </dt-stack>
</template>

<script>
import DtStack from './stack';

export default {
  name: 'StackDefault',
  components: { DtStack },
};
</script>
