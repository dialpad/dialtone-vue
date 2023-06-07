<template>
  <div class="d-datepicker__month-year-picker">
    <div>
      <button
        @click="handleYear(false)"
      >
        <dt-icon
          name="chevrons-left"
          size="300"
        />
      </button>
    </div>
    <div>
      <button
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
        {{ month }}
        <br>
        <br>
        {{ year }}
        <br>
        <br>
        {{ getDays }}
        <br>
        <br>
        {{ getMonth }}
        <br>
        <br>
        {{ weekDays }}
        <br>
        <br>
      </p>
      <div v-for="week in dates">
        <span v-for="day in week.days">
          {{ day.text }}
        </span>
      </div>
    </div>
    <div>
      <button
        @click="handleMonth(true)"
      >
        <dt-icon
          name="chevron-right"
          size="300"
        />
      </button>
    </div>
    <div>
      <button
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
import { addMonths, format, getDaysInMonth, getMonth, set, subMonths } from 'date-fns';
import { getDayNames, getCalendarDays } from '../utils';

export default {
  name: 'DtDatepickerMonthYearPicker',

  components: { DtIcon },

  data () {
    return {
      minDate: null,
      maxDate: null,

      year: 2023,
      month: 0,
    };
  },

  computed: {
    // Get dates for the currently selected month and year
    dates () {
      return getCalendarDays(this.month, this.year);
    },

    getMonth () {
      return format(new Date(this.year, this.month), 'MMMM');
    },

    getDays () {
      return getDaysInMonth(new Date(this.year, this.month));
    },

    weekDays () {
      return getDayNames('en-US', 0);
    },
  },

  methods: {
    handleMonth (isNext = false) {
      const initialDate = set(new Date(), { month: this.month, year: this.year });
      const date = isNext ? addMonths(initialDate, 1) : subMonths(initialDate, 1);

      this.month = getMonth(date);
      // emit('update-month-year', { month, year });
    },

    handleYear (increment = false) {
      this.year = increment ? this.year + 1 : this.year - 1;
      // emit('update-month-year', { year: increment ? props.year + 1 : props.year - 1, month: props.month });
    },

  },
};
</script>
