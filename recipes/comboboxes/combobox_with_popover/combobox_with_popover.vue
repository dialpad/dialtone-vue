<template>
  <dt-combobox
    :show-list="showList"
  >
    <template #input>
      <slot name="input" />
    </template>
    <template #list="{ opened }">
      <dt-popover
        :open="true"
        :hide-on-click="false"
        padding="small"
        :modal="false"
        :auto-focus="false"
        @opened="opened"
      >
        <template #anchor>
          <div class="d-h0 d-vi-hidden" />
        </template>
        <template #footerContent>
          <slot name="footer" />
        </template>
        <template #content>
          <slot name="content" />
        </template>
      </dt-popover>
    </template>
  </dt-combobox>
</template>

<script>
import { DtCombobox, DtPopover } from '@';
import {} from './combobox_with_popover_constants.js';

export default {
  name: 'DtRecipeComboboxWithPopover',

  components: {
    DtCombobox,
    DtPopover,
  },

  mixins: [],

  /* inheritAttrs: false is generally an option we want to set on library
    components. This allows any attributes passed in that are not recognized
    as props to be passed down to another element or component using v-bind:$attrs
    more info: https://vuejs.org/v2/api/#inheritAttrs */
  // inheritAttrs: false,

  props: {
    /**
     * Determines when to show the list element and also controls the aria-expanded attribute.
     */
    showList: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {};
  },

  computed: {},

  watch: {},

  methods: {},
};
</script>

<style lang="less">

</style>
