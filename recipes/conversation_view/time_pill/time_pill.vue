<template>
  <time
    data-qa="dt-time-pill"
    :dateTime="dateTime"
    class="d-ba d-bar-pill d-baw1 d-bc-black-300 d-px16 d-py4 d-fs-100"
  >
    {{ dateTimeDisplay }}
  </time>
</template>

<script>
import {} from './time_pill_constants.js';

export default {
  name: 'DtRecipeTimePill',

  components: {},

  mixins: [],

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
      validator: (t) => {
        // This is actually only accounting for a subset of valid values for datetime,
        // however I don't think we'll ever need to accept values aside from Date

        const x = new Date(t);
        if (x instanceof Date && !isNaN(x)) {
          return true;
        } else {
          const PTDHMSregex = /^P(\d+D)?(T(\d+H)?(\d+M)?(\d+S)?)?$/;
          return PTDHMSregex.test(t);
        }
      },
    },
  },
};
</script>

<style lang="less">

</style>
