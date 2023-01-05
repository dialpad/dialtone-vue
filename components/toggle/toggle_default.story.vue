<template>
  <dt-toggle
    v-model="internalChecked"
    :disabled="disabled"
    :size="size"
    :show-icon="showIcon"
    :label-class="labelClass"
    :label-child-props="labelChildProps"
  >
    <span
      v-if="defaultSlot"
      v-html="defaultSlot"
    />
  </dt-toggle>
</template>

<script>
import DtToggle from './toggle';

export default {
  name: 'ToggleDefault',
  components: { DtToggle },
  data () {
    return {
      internalChecked: this.checked,
    };
  },
};
</script>
