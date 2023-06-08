<template>
  <div class="d-datepicker__calendar">
    {{ weekDays }}
    <div
      v-for="(week, indexWeek) in calendarDays"
      :key="indexWeek"
    >
      {{ indexWeek }}
      <button
        v-for="(day, indexDays) in week.days"
        :key="indexWeek + indexDays"
        type="button"
        :aria-label="day.text"
        @click="selectDay(day)"
        @keydown="$emit('select-date', day.value)"
      >
        {{ day.text }}
      </button>
    </div>
  </div>
</template>

<script>
import { getDayNames } from '@/components/datepicker/utils.js';
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

  data () {
    return {
      thisCalendarDays: this.calendarDays,
    };
  },

  computed: {
    weekDays () {
      return getDayNames(this.locale, WEEK_START);
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
