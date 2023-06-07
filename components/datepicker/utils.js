import {
  startOfWeek, addDays, getMonth, isEqual, setHours,
  setMinutes,
  setSeconds,
  setMilliseconds,
} from 'date-fns';

const resetDateTime = (value) => {
  let dateParse = getDate(JSON.parse(JSON.stringify(value)));
  dateParse = setHours(dateParse, 0);
  dateParse = setMinutes(dateParse, 0);
  dateParse = setSeconds(dateParse, 0);
  dateParse = setMilliseconds(dateParse, 0);

  return dateParse;
};

const getDate = (value) => (value ? new Date(value) : new Date());

/**
 * Get 7 days from the provided start date, month is used to check
 * whether the date is from the specified month or in the offset
 */
const getWeekDays = (startDay, month) => {
  const startDate = getDate(JSON.parse(JSON.stringify(startDay)));
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const next = addDays(startDate, i);
    const isNext = getMonth(next) !== month;
    dates.push({
      text: next.getDate(),
      value: next,
      current: !isNext,
      classData: {},
    });
  }
  return dates;
};

const isDateEqual = (date, dateToCompare) => {
  if (!date || !dateToCompare) {
    return false;
  }
  return isEqual(resetDateTime(date), resetDateTime(dateToCompare));
};

/**
 * Get days for the calendar to be displayed in a table grouped by weeks
 */
export const getCalendarDays = (month, year) => {
  const weeks = [];
  const firstDate = getDate(new Date(year, month));
  const lastDate = getDate(new Date(year, month + 1, 0));

  const weekStartsOn = 0;

  const firstDateInCalendar = startOfWeek(firstDate, { weekStartsOn });

  const addDaysToWeek = (date) => {
    const days = getWeekDays(date, month);
    weeks.push({ days });
    if (
      !weeks[weeks.length - 1].days.some((day) =>
        isDateEqual(resetDateTime(day.value), resetDateTime(lastDate)),
      )
    ) {
      const nextDate = addDays(date, 7);
      addDaysToWeek(nextDate);
    }
  };

  addDaysToWeek(firstDateInCalendar);

  return weeks;
};

/**
 * Generate week day names based on locale and in order specified in week start
 */
export const getDayNames = (locale, weekStart) => {
  // Get list in order from sun ... sat
  const days = [1, 2, 3, 4, 5, 6, 7].map((day) => {
    return new Intl.DateTimeFormat(locale, { weekday: 'short', timeZone: 'UTC' })
      .format(new Date(`2017-01-0${day}T00:00:00+00:00`))
      .slice(0, 2);
  });

  // Get days that are in order before specified week start
  const beforeWeekStart = days.slice(0, weekStart);
  // Get days that are in order after specified week start
  const afterWeekStart = days.slice(weekStart + 1, days.length);

  // return them in correct order
  return [days[weekStart]].concat(...afterWeekStart).concat(...beforeWeekStart);
};
