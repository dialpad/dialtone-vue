<template>
  <dt-popover
    :open="isOpen"
    :fixed-alignment="fixedAlignment"
    :fixed-vertical-alignment="fixedVerticalAlignment"
    :content-class="contentClass"
    :has-caret="hasCaret"
    :padding="padding"
    @update:open="isOpen = $event"
  >
    <template #anchor="{ attrs }">
      <dt-button v-bind="attrs">
        Click to open
      </dt-button>
    </template>
    <template #content>
      <p>
        I will be displayed in the popover!
      </p>
    </template>
  </dt-popover>
</template>

<script>
import DtPopover from './popover';
import { DtButton } from '../button';

export default {
  name: 'PopoverDefaultStory',
  components: {
    DtPopover,
    DtButton,
  },

  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      isOpen: this.open || false,
    };
  },

  watch: {
    open (isOpen) {
      this.isOpen = isOpen;
    },
  },
};
</script>
