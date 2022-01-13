<template>
  <div id="components-toggle--variants-container">
    <!-- Default -->
    <dt-toggle
      name="Value"
      class="d-mt6"
      label-class="d-mr6"
      label="Default"
    />

    <dt-toggle
      name="Value"
      class="d-mt6"
      label-class="d-mr6"
      label="Checked"
      :checked="true"
    />

    <dt-toggle
      name="Value"
      class="d-mt6"
      label-class="d-mr6"
      label="Disabled Checked"
      :checked="true"
      :disabled="true"
    />

    <dt-toggle
      name="Value"
      class="d-mt6"
      label-class="d-mr6"
      label="Disabled Unchecked"
      :disabled="true"
    />
    <!-- Default -->
  </div>
</template>

<script>
import DtToggle from './toggle';
import { VALIDATION_MESSAGE_TYPES } from '../constants';

export default {
  name: 'ToggleVariants',
  components: { DtToggle },
  created () {
    this.VALIDATION_MESSAGE_TYPES = VALIDATION_MESSAGE_TYPES;
  },
};
</script>
