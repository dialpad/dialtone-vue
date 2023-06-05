<template>
  <div class="d-datepicker">
    <div class="d-datepicker--header">
      <month-year-picker />
    </div>
  </div>
</template>

<script>
import {} from './datepicker_constants';
import MonthYearPicker from './modules/month-year-picker.vue';

export default {
  name: 'DtDatepicker',

  components: { MonthYearPicker },

  mixins: [],

  /* inheritAttrs: false is generally an option we want to set on library
    components. This allows any attributes passed in that are not recognized
    as props to be passed down to another element or component using v-bind:$attrs
    more info: https://vuejs.org/v2/api/#inheritAttrs */
  // inheritAttrs: false,

  props: {
    /**
     * description of this generic prop
     */
    genericProp: {
      type: String,
      default: 'a generic prop',
    },
  },

  emits: [
    /**
     * Event fired when something happens
     *
     * @event generic-event
     * @type {Boolean}
     */
    'generic-event',
  ],

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
