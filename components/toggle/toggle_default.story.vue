<template>
  <dt-toggle
    :label="label"
    :name="name"
    :value="value"
    :checked="checked"
    :description="description"
    :validation-state="validationState"
    :disabled="disabled"
    :input-class="inputClass"
    :label-class="labelClass"
    :description-class="descriptionClass"
    :label-child-props="labelChildProps"
    :description-child-props="descriptionChildProps"
    :messages="messages"
    @input="onInput"
    @focusin="onFocusIn"
    @focusout="onFocusOut"
  />
</template>

<script>
import DtToggle from './toggle';

export default {
  name: 'ToggleDefault',
  components: { DtToggle },
};
</script>
