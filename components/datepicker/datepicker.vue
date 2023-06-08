<template>
  <div class="d-datepicker">
    <div class="d-datepicker--header">
      <month-year-picker
        @calendar-days="updateCalendarDays"
      />
    </div>
    <div class="d-datepicker--body">
      <calendar
        :calendar-days="calendarDays"
        @select-date="$emit('selected-date', $event)"
      />
    </div>
  </div>
</template>

<script>
import MonthYearPicker from './modules/month-year-picker.vue';
import Calendar from './modules/calendar.vue';

export default {
  name: 'DtDatepicker',

  components: { MonthYearPicker, Calendar },

  props: {},

  emits: [
    /**
     * Event fired when a date is selected
     *
     * @event selected-date
     * @type {Date}
     */
    'selected-date',
  ],

  data () {
    return {
      calendarDays: [],
    };
  },

  computed: {},

  watch: {},

  methods: {
    updateCalendarDays (days) {
      this.calendarDays = days;
    },
  },
};
</script>

<style lang="less">

</style>
