<template>
  <div class="d-datepicker">
    <div class="d-datepicker--header">
      <month-year-picker
        :prev-month-label="prevMonthLabel"
        :next-month-label="nextMonthLabel"
        :prev-year-label="prevYearLabel"
        :next-year-label="nextYearLabel"
        :selected-date="selectedDate"
        @calendar-days="updateCalendarDays"
      />
    </div>
    <div class="d-datepicker--body">
      <calendar
        :locale="locale"
        :calendar-days="calendarDays"
        :selected-date="selectedDate"
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

  props: {
    prevMonthLabel: {
      type: String,
      required: true,
    },

    nextMonthLabel: {
      type: String,
      required: true,
    },

    prevYearLabel: {
      type: String,
      required: true,
    },

    nextYearLabel: {
      type: String,
      required: true,
    },

    locale: {
      type: String,
      default: 'en-US',
    },

    selectedDate: {
      type: Date,
      default: () => (new Date()),
    },
  },

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
