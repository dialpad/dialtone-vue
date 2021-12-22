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
          <p>I will be displayed in the popover!</p>
          <dt-button
            @click="isOpen = !isOpen"
          >
            Click to close
          </dt-button>
          <p>I will be displayed in the popover!</p>
          <dt-button
            @click="isOpen = !isOpen"
          >
            Click to close
          </dt-button>
          <p>I will be displayed in the popover!</p>
        </div>
      </div>
    </template>
    <template #header>
      <p class="d-fw-bold">
        Potential longer
      </p>
    </template>

    <template #header-actions>
      <dt-button
        circle
        icon="IconLaunch"
        kind="inverted"
        class="d-mx2"
      >
        <template #icon>
          <icon-menu-vertical />
        </template>
      </dt-button>
      <dt-button
        circle
        icon="IconLaunch"
        kind="inverted"
        class="d-mx2"
      >
        <template #icon>
          <icon-launch />
        </template>
      </dt-button>
    </template>
  </dt-popover>
</template>

<script>
import { DtPopover } from './';
import { DtButton } from '../button';
import IconMenuVertical from '@dialpad/dialtone/lib/dist/vue/icons/IconMenuVertical';
import IconLaunch from '@dialpad/dialtone/lib/dist/vue/icons/IconLaunch';

export default {
  name: 'PopoverDefaultStory',
  components: {
    DtPopover,
    DtButton,
    IconMenuVertical,
    IconLaunch,
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
