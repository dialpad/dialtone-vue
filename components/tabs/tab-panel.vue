<template>
  <div
    :id="`base-panel-${tabId}`"
    role="tabpanel"
    tabindex="0"
    :aria-labelledby="`base-tab-${tabId}`"
    :aria-hidden="`${!isShow}`"
    :class="{
      'd-d-none': !isShow,
    }"
    data-qa="dt-tab-panel"
  >
    <template v-if="!hidden">
      <slot />
    </template>
  </div>
</template>

<script>
export default {
  name: 'DtTabPanel',

  inject: ['groupContext'],
  props: {
    /**
     * Id of the associated tab
     */
    tabId: {
      type: String,
      required: true,
    },

    /**
    * If true, hides the tab content
    */
    hidden: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    isShow () {
      return this.groupContext.selected === this.tabId;
    },
  },
};
</script>
