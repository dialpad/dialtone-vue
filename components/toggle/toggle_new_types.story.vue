<template>
  <div id="components-toggle--new-types-container">
    <div class="toggle-type-1">
      <h2>
        Version 1
      </h2>
      <dt-toggle
        class="d-mt6"
        label-class="d-mr6"
        label="Initially Unchecked"
      />
      <dt-toggle
        class="d-mt6"
        label-class="d-mr6"
        label="Disabled"
        disabled
      />
      <dt-toggle
        class="d-mt6"
        label-class="d-mr6"
        label="Disabled Checked"
        disabled
        checked
      />
    </div>

    <div class="toggle-type-2 dmr6">
      <h2>
        Version 2
      </h2>
      <dt-toggle-new
        class="d-mt6"
        label-class="d-mr6"
        label="Initially Unchecked"
      />
      <dt-toggle-new
        class="d-mt6"
        label-class="d-mr6"
        label="Disabled"
        disabled
      />
      <dt-toggle-new
        class="d-mt6"
        label-class="d-mr6"
        label="Disabled Checked"
        disabled
        checked
      />
    </div>
  </div>
</template>

<script>
import DtToggle from './toggle';
import DtToggleNew from './toggle_v2.vue';

export default {
  name: 'ToggleNewTypes',
  components: { DtToggle, DtToggleNew },
};
</script>
