<template>
  <dt-popover
    width-content="anchor"
    :open="open"
    :has-caret="false"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template #anchor="{ attrs }">
      <!-- @slot Anchor element that activates the dropdown. -->
      <slot name="anchor"></slot>
    </template>
    <template #content>
      <!-- @slot default content -->
      <slot></slot>
    </template>
  </dt-popover>
</template>

<script>
import {} from './dropdown_constants.js';
import { DtPopover } from '../popover';
import { DtLink } from '../link';
import { DtListItem } from '../list_item';

export default {
  name: 'DtDropdown',

  components: { DtPopover, DtLink, DtListItem },

  mixins: [],

  /* inheritAttrs: false is generally an option we want to set on library
    components. This allows any attributes passed in that are not recognized
    as props to be passed down to another element or component using v-bind:$attrs
    more info: https://vuejs.org/v2/api/#inheritAttrs */
  // inheritAttrs: false,

  props: {
    /**
     * Whether or not the popover content is shown. Supports .sync modifier.
     */
    open: {
      type: Boolean,
      required: true,
    },
  },

  data () {
    return {
    };
  },

  computed: {},

  watch: {},

  methods: {
  },
};
</script>

<style lang="less">

</style>
