<template>
  <div
    id="forms-select-menu--variants-container"
    class="d-d-flex d-fd-column d-stack32 d-p32"
  >
    <!-- Default -->
    <dt-select-menu
      id="default"
      name="default"
      label="Default"
      :options="options"
    />
    <!-- Default -->

    <!-- With Description -->
    <dt-select-menu
      id="with-description"
      name="with-description"
      label="With"
      description="Description"
      :options="options"
    />
    <!-- With Description -->

    <!-- With Slotted Label -->
    <dt-select-menu
      id="with-slotted-label"
      name="with-slotted-label"
      :options="options"
    >
      <template #label>
        With Slotted Label
      </template>
    </dt-select-menu>
    <!-- With Slotted Label -->

    <!-- With Slotted Description -->
    <dt-select-menu
      id="with-slotted-description"
      name="with-slotted-description"
      label="With"
      :options="options"
    >
      <template #description>
        Slotted Description
      </template>
    </dt-select-menu>
    <!-- With Slotted Description -->

    <!-- With Slotted Options -->
    <dt-select-menu
      id="with-slotted-options"
      name="with-slotted-options"
      label="With Slotted Options"
    >
      <option
        v-for="option in options"
        :key="`with-slotted-options-${option.value}`"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </dt-select-menu>
    <!-- With Slotted Options -->

    <!-- With Validation Messages -->
    <dt-select-menu
      id="with-validation-messages"
      name="with-validation-messages"
      label="With Validation Messages"
      :options="options"
      :messages="validationMessages"
    />
    <!-- With Validation Messages -->

    <!-- Disabled -->
    <dt-select-menu
      id="disabled"
      name="disabled"
      label="Disabled"
      :options="options"
      disabled
    />
    <!-- Disabled -->

    <!-- Extra Small -->
    <dt-select-menu
      id="extra-small"
      name="extra-small"
      label="Extra Small"
      :options="options"
      size="xs"
    />
    <!-- Extra Small -->

    <!-- Small -->
    <dt-select-menu
      id="small"
      name="small"
      label="Small"
      :options="options"
      size="sm"
    />
    <!-- Small -->

    <!-- Large -->
    <dt-select-menu
      id="large"
      name="large"
      label="Large"
      :options="options"
      size="lg"
    />
    <!-- Large -->

    <!-- Extra Large -->
    <dt-select-menu
      id="extra-large"
      name="extra-large"
      label="Extra Large"
      :options="options"
      size="xl"
    />
    <!-- Extra Large -->
  </div>
</template>

<script>
import { VALIDATION_MESSAGE_TYPES } from '../constants';
import DtSelectMenu from './select_menu';

export default {
  name: 'DtSelectMenuVariants',

  components: { DtSelectMenu },

  data () {
    return {
      validationMessages: [
        { message: 'Success Validation Message 1', type: VALIDATION_MESSAGE_TYPES.SUCCESS },
        { message: 'Success Validation Message 2', type: VALIDATION_MESSAGE_TYPES.SUCCESS },
      ],
    };
  },
};
</script>
