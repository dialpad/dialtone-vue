<template>
  <div class="d-datepicker">
    <div class="d-datepicker--header">
      <month-year-picker />
    </div>
    <div class="d-datepicker--body">
      <calendar />
    </div>
  </div>
</template>

<script>
import {} from './datepicker_constants';
import MonthYearPicker from './modules/month-year-picker.vue';
import Calendar from './modules/calendar.vue';

export default {
  name: 'DtDatepicker',

  components: { MonthYearPicker, Calendar },

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
