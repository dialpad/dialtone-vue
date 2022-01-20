<template>
  <div id="components-toggle--variants-container">
    <!-- Unchecked Initially -->
    <dt-toggle
      class="d-mt6"
      label-class="d-mr6"
      label="Unchecked Initial"
    />

    <!-- Checked Initially -->
    <dt-toggle
      class="d-mt6"
      label-class="d-mr6"
      label="Checked Initial"
      :checked="true"
    />

    <!-- Checked Disabled -->
    <dt-toggle
      class="d-mt6"
      label-class="d-mr6"
      label="Disabled Checked"
      :checked="true"
      :disabled="true"
    />

    <!-- Unchecked Disabled -->
    <dt-toggle
      class="d-mt6"
      label-class="d-mr6"
      label="Disabled Unchecked"
      :disabled="true"
    />

    <!-- With Flex grow -->
    <dt-toggle
      class="d-mt6"
      label-class="d-d-flex d-fl-grow1"
      label="With Flex Grow"
    />

    <!-- With Slots -->
    <dt-toggle
      class="d-mt6"
    >
      <div class="d-mr6">
        With Slot Label
      </div>
    </dt-toggle>

    <!-- With v-model -->
    <dt-toggle
      v-model="vModelValue"
      class="d-mt6"
    >
      <div class="d-mr6">
        With V-Model
      </div>
    </dt-toggle>
  </div>
</template>

<script>
import DtToggle from './toggle';

export default {
  name: 'ToggleVariants',
  components: { DtToggle },

  data () {
    return {
      vModelValue: false,
    };
  },
};
</script>
