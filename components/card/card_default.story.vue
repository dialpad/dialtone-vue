<template>
  <dt-card
    class="d-w264"
    :max-height="maxHeight"
  >
    <template
      v-if="showHeader"
      #header
    >
      <p>Header</p>
      <button class="d-btn d-btn--xs d-fc-black-400">
        <icon-menu-vertical />
      </button>
    </template>
    <template #content>
      <p class="d-fs14 d-fw-bold d-fc-black-800">
        Lorem ipsum
      </p>
      <p class="d-fs12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec fermentum molestie semper. Morbi finibus nulla turpis, nec molestie mi rutrum.
      </p>
    </template>
    <template
      v-if="showFooter"
      #footer
    >
      <button class="d-btn d-btn--sm d-fc-black-400">
        Button 1
      </button>
      <button class="d-btn d-btn--sm d-fc-black-400">
        Button 2
      </button>
    </template>
  </dt-card>
</template>

<script>
import DtCard from './card';
import IconMenuVertical from '@dialpad/dialtone/lib/dist/vue/icons/IconMenuVertical';

export default {
  name: 'DtCardDefault',
  components: {
    DtCard,
    IconMenuVertical,
  },

  props: {
    showHeader: {
      type: Boolean,
      default: false,
    },

    showFooter: {
      type: Boolean,
      default: false,
    },

    maxHeight: {
      type: String,
      default: null,
    },
  },
};
</script>
