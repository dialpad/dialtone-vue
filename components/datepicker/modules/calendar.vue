<template>
  <div class="d-datepicker__calendar">
    {{ weekDays }}
    <div
      v-for="(week, indexWeek) in calendarDays"
      :key="indexWeek"
    >
      <button
        v-for="(day, indexDays) in week.days"
        :key="indexWeek + indexDays"
        type="button"
        :aria-label="day.text"
        @click="selectDay(day)"
        @keydown.enter="selectDay(day)"
        @keydown.space="selectDay(day)"
      >
        {{ day.text }}
      </button>
    </div>
  </div>
</template>

<script>
import { getWeekDayNames } from '@/components/datepicker/utils.js';
import { WEEK_START } from '@/components/datepicker/datepicker_constants.js';

export default {
  name: 'DtDatepickerCalendar',

  props: {
    calendarDays: {
      type: Array,
      required: true,
    },

    locale: {
      type: String,
      required: true,
    },
  },

  emits: [
    /**
     * Event fired when a date is selected
     *
     * @event select-date
     * @type {Date}
     */
    'select-date',
  ],

  computed: {
    weekDays () {
      return getWeekDayNames(this.locale, WEEK_START);
    },
  },

  watch: {},

  methods: {
    selectDay (day) {
      if (!day.current) { return; }
      this.$emit('select-date', day.value);
    },
  },
};
</script>
