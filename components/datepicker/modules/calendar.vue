<template>
  <div class="d-datepicker__calendar">
    <div
      class="d-datepicker__week-day"
    >
      <p
        v-for="day in weekDays"
        :key="day"
      >
        {{ day }}
      </p>
    </div>
    <div
      v-for="(week, indexWeek) in calendarDays"
      :key="indexWeek"
      class="d-datepicker__week"
    >
      <button
        v-for="(day, indexDays) in week.days"
        :key="indexWeek + indexDays"
        class="d-datepicker__day"
        :class="{
          'd-datepicker__day--disabled': !day.currentMonth,
          'd-datepicker__day--selected': highlightDay ? ((day.text === highlightDay) && day.currentMonth) : day.selected,
        }"
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

  data () {
    return {
      // local highlightDay to override the received by props calendarDays
      highlightDay: null,
    };
  },

  computed: {
    weekDays () {
      return getWeekDayNames(this.locale, WEEK_START);
    },
  },

  watch: {
    calendarDays () {
      // local highlightDay is reset when calendarDays is updated
      this.highlightDay = null;
    },
  },

  methods: {
    selectDay (day) {
      if (!day.currentMonth) { return; }

      // local highlightDay is updated when a day is selected
      this.highlightDay = day.text;
      this.$emit('select-date', day.value);
    },
  },
};
</script>

<style lang="less">
.d-datepicker{
  &__calendar {
    margin-bottom: 6px;
  }

  &__week-day{
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    p{
      color: var(--black-600);
    }
  }

  &__week{
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__day{
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
    width: 24px;
    height: 24px;
    font-size: 12px;

    &--disabled{
      color: var(--black-300);
    }
    &--selected{
     color: #ffffff;
     background: #7C52FF;
     border-radius: 50px;
    }
  }
}
</style>
