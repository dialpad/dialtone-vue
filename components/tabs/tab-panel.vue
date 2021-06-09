<template>
  <div
    :id="tabId"
    role="tabpanel"
    tabindex="0"
    :aria-labelledby="tabId"
    :aria-hidden="ariaHidden"
    :style="togglePanel"
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
    ariaHidden () {
      return `${this.isShow}`;
    },

    isShow () {
      return this.groupContext.selected === this.tabId;
    },

    togglePanel () {
      return this.isShow ? 'display: block' : 'display: none';
    },
  },
};
</script>
