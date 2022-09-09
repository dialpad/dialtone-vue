<template>
  <dt-card
    class="d-w264"
    :container-class="containerClass"
    :header-class="headerClass"
    :content-class="contentClass"
    :footer-class="footerClass"
    :max-height="maxHeight"
  >
    <template
      v-if="showHeader && variants"
      #header
    >
      <p>Header</p>
      <button class="d-btn d-btn--xs d-fc-black-400">
        <icon-menu-vertical />
      </button>
    </template>
    <template
      v-else
      #header
    >
      <span v-html="header" />
    </template>
    <template #content>
      <div v-if="content">
        <span v-html="content" />
      </div>
      <div
        v-else
        tabindex="0"
      >
        <p class="d-fs14 d-fw-bold d-fc-black-800">
          Lorem ipsum
        </p>
        <p class="d-fs12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec fermentum molestie semper. Morbi finibus nulla turpis, nec molestie mi rutrum.
        </p>
      </div>
    </template>
    <template
      v-if="showFooter & variants"
      #footer
    >
      <button
        class="d-btn d-btn--sm d-fc-black-400"
        name="button1"
      >
        Button 1
      </button>
      <button
        class="d-btn d-btn--sm d-fc-black-400"
        name="button2"
      >
        Button 2
      </button>
    </template>
    <template
      v-else
      #footer
    >
      <span v-html="footer" />
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

    variants: {
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
