<template>
  <div id="components-toggle--variants-container">
    <!-- Unchecked Initially -->
    <dt-toggle
      name="Value"
      class="d-mt6"
      label-class="d-mr6"
      label="Unchecked Initial"
    />
    <!-- Checked Initially -->
    <dt-toggle
      name="Value"
      class="d-mt6"
      label-class="d-mr6"
      label="Checked Initial"
      :checked="true"
    />
    <!-- Checked Disabled -->
    <dt-toggle
      name="Value"
      class="d-mt6"
      label-class="d-mr6"
      label="Disabled Checked"
      :checked="true"
      :disabled="true"
    />
    <!-- Unchecked Disabled -->
    <dt-toggle
      name="Value"
      class="d-mt6"
      label-class="d-mr6"
      label="Disabled Unchecked"
      :disabled="true"
    />
  </div>
</template>

<script>
import DtToggle from './toggle';

export default {
  name: 'ToggleVariants',
  components: { DtToggle },
};
</script>
