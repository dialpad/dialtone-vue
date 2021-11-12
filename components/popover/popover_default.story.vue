<template>
  <popover-tippy
    :fixed-alignment="fixedAlignment"
    :fixed-vertical-alignment="fixedVerticalAlignment"
    :content-class="contentClass"
    :has-caret="hasCaret"
    :padding="padding"
    :open="isOpen"
    @update:open="isOpen = $event"
  >
    <template #anchor="{ attrs }">
      <dt-button
        importance="outlined"
        v-bind="attrs"
      >
        Click to open
      </dt-button>
    </template>
    <template #content>
      <p class="d-fs14 d-m0">
        I will be displayed in the popover!
      </p>
    </template>
  </popover-tippy>
</template>

<script>
import PopoverTippy from './popover';
import { DtButton } from '../button';

export default {
  name: 'PopoverTippyStory',
  components: {
    PopoverTippy,
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
