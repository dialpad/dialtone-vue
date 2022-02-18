<!-- eslint-disable vue/no-deprecated-v-bind-sync -->
<template>
  <dt-popover
    :open.sync="isOpen"
    v-bind="propsWithoutSlot"
    @opened="onOpened"
  >
    <template #anchor="{ attrs }">
      <dt-button
        v-bind="attrs"
      >
        Click to open
      </dt-button>
    </template>
    <template #content="{ close }">
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
      #headerContent
    >
      <span v-html="headerContent" />
    </template>
    <template
      v-if="footerContent"
      #footerContent
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
