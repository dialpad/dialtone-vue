<!-- eslint-disable vue/no-deprecated-v-bind-sync -->
<template>
  <dt-popover
    :id="$attrs.id"
    :key="$attrs.uniqueKey"
    :open.sync="$attrs.isOpen"
    :placement="$attrs.placement"
    :content-class="$attrs.contentClass"
    :fallback-placements="$attrs.fallbackPlacements"
    :padding="$attrs.padding"
    :hide-on-click="$attrs.hideOnClick"
    :role="$attrs.role"
    :element-type="$attrs.elementType"
    :transition="$attrs.transition"
    :aria-labelledby="$attrs.ariaLabelledby"
    :aria-label="$attrs.ariaLabel"
    :offset="$attrs.offset"
    :modal="$attrs.modal"
    :auto-focus="$attrs.autoFocus"
    :content-width="$attrs.contentWidth"
    :show-close-button="$attrs.showCloseButton"
    :header-class="$attrs.headerClass"
    :footer-class="$attrs.footerClass"
    :max-height="$attrs.maxHeight"
    :max-width="$attrs.maxWidth"
    @opened="$attrs.onOpened"
  >
    <template
      slot="anchor"
      slot-scope="{ attrs }"
    >
      <dt-button
        v-bind="attrs"
      >
        Click to open
      </dt-button>
    </template>
    <template
      slot="content"
      slot-scope="{ close }"
    >
      <div class="d-fs14 d-m0">
        <span
          v-if="content"
          v-html="content"
        />
        <template v-else>
          <p class="d-mb4">
            I will be displayed in the popover!
          </p>
          <dt-button @click="close">
            Click to close
          </dt-button>
        </template>
      </div>
    </template>
    <template
      v-if="headerContent"
      slot="headerContent"
    >
      <span v-html="headerContent" />
    </template>
    <template
      v-if="footerContent"
      slot="footerContent"
    >
      <span v-html="footerContent" />
    </template>
  </dt-popover>
</template>

<script>
import { DtPopover } from './';
import { DtButton } from '../button';
import { getUniqueString } from '@/common/utils';

export default {
  name: 'PopoverDefaultStory',
  components: {
    DtPopover,
    DtButton,
  },

  data: function () {
    return {
      isOpen: this.open,
    };
  },

  computed: {
    uniqueKey () {
      return getUniqueString();
    },
  },

  watch: {
    open: function (open) {
      this.isOpen = open;
    },
  },
};
</script>
