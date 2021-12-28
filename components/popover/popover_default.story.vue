<template>
  <dt-popover
    :id="id"
    :open="isOpen"
    :fixed-alignment="fixedAlignment"
    :fixed-vertical-alignment="fixedVerticalAlignment"
    :content-class="contentClass"
    :has-caret="hasCaret"
    :padding="padding"
    :hide-on-click="hideOnClick"
    :role="role"
    :element-type="elementType"
    :transition="transition"
    :aria-labelledby="ariaLabelledby"
    :aria-label="ariaLabel"
    :focus-anchor-on-close="focusAnchorOnClose"
    :offset="offset"
    :append-to="appendTo"
    :interactive="interactive"
    :flip-boundary="flipBoundary"
    :interactive-border="interactiveBorder"
    :trigger="trigger"
    :modal="modal"
    :content-width="contentWidth"
    :show-close-button="showCloseButton"
    :title="title"
    width-content="anchor"
    @update:open="updateOpen"
  >
    <template #anchor="{ attrs }">
      <dt-button
        v-bind="attrs"
        @click="isOpen = !isOpen"
      >
        Click to open and see width adjusted popover Lorem ipsum dolor sit
      </dt-button>
    </template>
    <template #content>
      <div class="d-fs14 d-m0">
        <p
          v-if="content"
          v-html="content"
        />
        <div v-else>
          <dt-button
            @click="isOpen = !isOpen"
          >
            Click to close
          </dt-button>
        </div>
      </div>
    </template>
    <template
      v-if="title"
      #title
    >
      <p
        v-if="title"
        v-html="title"
      />
    </template>
  </dt-popover>
</template>

<script>
import { DtPopover } from './';
import { DtButton } from '../button';
// import IconMenuVertical from '@dialpad/dialtone/lib/dist/vue/icons/IconMenuVertical';
// import IconLaunch from '@dialpad/dialtone/lib/dist/vue/icons/IconLaunch';

export default {
  name: 'PopoverDefaultStory',
  components: {
    DtPopover,
    DtButton,
    // IconMenuVertical,
    // IconLaunch,
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

  methods: {
    updateOpen (isOpen) {
      this.isOpen = isOpen;
      this.onClose(isOpen);
    },
  },
};
</script>
