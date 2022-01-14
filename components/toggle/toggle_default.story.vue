<template>
  <dt-toggle
    :label="label"
    :checked="checked"
    :disabled="disabled"
    :label-class="labelClass"
    :label-child-props="labelChildProps"
    @change="onChange"
  />
</template>

<script>
import DtToggle from './toggle';

export default {
  name: 'ToggleDefault',
  components: { DtToggle },
};
</script>
