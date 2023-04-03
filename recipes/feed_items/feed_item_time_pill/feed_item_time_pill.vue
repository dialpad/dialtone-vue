<template>
  <time
    data-qa="dt-feed-item-time-pill"
    :dateTime="dateTime"
    class="d-ba d-bar-pill d-baw1 d-bc-black-300 d-px16 d-py4 d-fs-100"
  >
    {{ dateTimeDisplay }}
  </time>
</template>

<script>
import {} from './feed_item_time_pill_constants.js';

export default {
  name: 'DtRecipeFeedItemTimePill',

  components: {},

  mixins: [],

  /* inheritAttrs: false is generally an option we want to set on library
    components. This allows any attributes passed in that are not recognized
    as props to be passed down to another element or component using v-bind:$attrs
    more info: https://vuejs.org/v2/api/#inheritAttrs */
  // inheritAttrs: false,

  props: {
    /**
     * Date time display value
     */
    dateTimeDisplay: {
      type: String,
      required: true,
    },

    /**
     * Machine-readable attribute
     * Accepts a string value of YYYY-MM-DDThh:mm:ssTZD or PTDHMS
     */
    dateTime: {
      type: String,
      required: true,
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
