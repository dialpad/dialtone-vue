<template>
  <div class="d-datepicker__month-year-picker">
    <div>
      <button
        type="button"
        :aria-label="prevYearLabel"
        @click="handleYear(false)"
      >
        <dt-icon
          name="chevrons-left"
          size="400"
        />
      </button>
      <button
        type="button"
        :aria-label="prevMonthLabel"
        @click="handleMonth(false)"
      >
        <dt-icon
          name="chevron-left"
          size="300"
        />
      </button>
    </div>
    <div>
      <p>
        {{ getMonth }}
        {{ year }}
      </p>
    </div>
    <div>
      <button
        type="button"
        :aria-label="nextMonthLabel"
        @click="handleMonth(true)"
      >
        <dt-icon
          name="chevron-right"
          size="300"
        />
      </button>
      <button
        type="button"
        :aria-label="nextYearLabel"
        @click="handleYear(true)"
      >
        <dt-icon
          name="chevrons-right"
          size="300"
        />
      </button>
    </div>
  </div>
</template>

<script>
import { DtIcon } from '@/components/icon';
import { getYear, addMonths, format, getMonth, set, subMonths, getDate } from 'date-fns';
import { getCalendarDays } from '../utils';

export default {
  name: 'DtDatepickerMonthYearPicker',

  components: { DtIcon },

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

    selectedDate: {
      type: Date,
      required: true,
    },
  },

  emits: [
    /**
     * Will retrieve the calendar days of the given date
     *
     * @event calendar-days
     * @type {Array}
     */
    'calendar-days',
  ],

  data () {
    return {
      year: getYear(this.selectedDate),
      month: getMonth(this.selectedDate),
      highlightedDay: null,
    };
  },

  computed: {
    // Get days for the currently selected month and year and highlight the selected day
    calendarDays () {
      return getCalendarDays(this.month, this.year, this.highlightedDay);
    },

    getMonth () {
      return format(new Date(2000, this.month, 1), 'MMMM');
    },
  },

  watch: {
    month: {
      handler () {
        this.highlightDay();
        this.$emit('calendar-days', this.calendarDays);
      },

      immediate: true,
    },

    year: {
      handler () {
        this.highlightDay();
        this.$emit('calendar-days', this.calendarDays);
      },

      immediate: true,
    },

  },

  methods: {
    highlightDay () {
      const year = getYear(this.selectedDate);
      const month = getMonth(this.selectedDate);

      if (year !== this.year || month !== this.month) {
        this.highlightedDay = null;
      } else {
        this.highlightedDay = getDate(this.selectedDate);
      }
    },

    handleMonth (isNext = false) {
      const initialDate = set(this.selectedDate, { month: this.month, year: this.year });
      const date = isNext ? addMonths(initialDate, 1) : subMonths(initialDate, 1);

      this.month = getMonth(date);
    },

    handleYear (increment = false) {
      this.year = increment ? this.year + 1 : this.year - 1;
    },
  },
};
</script>

<style lang="less">
.d-datepicker__month-year-picker{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  margin-bottom: 20px;

  > div {
      display: inline-flex;
    }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: var(--primary-color);
    display: inline-flex;
    align-items: center;
    padding: 0;
  }

}
</style>
