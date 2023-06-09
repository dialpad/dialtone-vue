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
          size="300"
          :description="prevYearLabel"
        />
      </button>
    </div>
    <div>
      <button
        type="button"
        :aria-label="prevMonthLabel"
        @click="handleMonth(false)"
      >
        <dt-icon
          name="chevron-left"
          size="300"
          :description="prevMonthLabel"
        />
      </button>
    </div>
    <div>
      <p>
        {{ getMonth }}
        <br>
        <br>
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
          :description="nextMonthLabel"
        />
      </button>
    </div>
    <div>
      <button
        type="button"
        :aria-label="nextYearLabel"
        @click="handleYear(true)"
      >
        <dt-icon
          name="chevrons-right"
          size="300"
          :description="nextYearLabel"
        />
      </button>
    </div>
  </div>
</template>

<script>
import { DtIcon } from '@/components/icon';
import { getYear, addMonths, format, getMonth, set, subMonths } from 'date-fns';
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
    };
  },

  computed: {
    // Get days for the currently selected month and year
    calendarDays () {
      return getCalendarDays(this.month, this.year);
    },

    getMonth () {
      return format(new Date(2000, this.month, 1), 'MMMM');
    },
  },

  mounted () {
    this.$emit('calendar-days', this.calendarDays);
  },

  methods: {
    handleMonth (isNext = false) {
      const initialDate = set(this.selectedDate, { month: this.month, year: this.year });
      const date = isNext ? addMonths(initialDate, 1) : subMonths(initialDate, 1);

      this.month = getMonth(date);
      this.$emit('calendar-days', this.calendarDays);
    },

    handleYear (increment = false) {
      this.year = increment ? this.year + 1 : this.year - 1;
      this.$emit('calendar-days', this.calendarDays);
    },
  },
};
</script>
