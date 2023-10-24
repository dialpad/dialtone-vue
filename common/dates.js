import {
  format,
  formatDuration,
  intervalToDuration,
  formatDistance,
  isToday,
  isYesterday,
  isThisWeek,
  isSameYear,
} from 'date-fns';
import { capitalizeFirstLetter } from './utils';

// Base functions just wrap core date-fns functions, but this allows us to do checks and set default options.

function _baseFormat (date, formatString) {
  _checkLocaleSet();
  return format(date, formatString, {
    locale: global.locale,
  });
}

function _baseFormatDuration (duration, formatString) {
  _checkLocaleSet();
  return formatDuration(duration, {
    locale: global.locale,
    format: formatString,
  });
}

function _baseFormatDistance (date, baseDate) {
  _checkLocaleSet();
  return formatDistance(date, baseDate, {
    locale: global.locale,
  });
}

function _isLocaleSet () {
  return global.locale !== undefined;
}

function _checkLocaleSet () {
  if (!_isLocaleSet()) {
    throw new Error('Locale not set, please call setDateLocale(locale) and pass ' +
    'in a datefns locale object as the locale param before calling this function');
  }
}

/**
 * Sets the locale for date-fns. This should be called before any date-fns functions are called.
 * @param {Locale} locale A date-fns locale object
 */
export function setDateLocale (locale) {
  global.locale = locale;
}

/**
 * This formats a date to the Dialtone standard medium date format as shown here:
 * https://dialpad.design/guides/writing-guidelines/#formats-by-length
 * @param {Date} date A javascript date object
 * @returns {string} A string in the format of 'September 2, 2022'
 */
export function getDateMedium (date) {
  return _baseFormat(date, 'MMMM d, y');
}

/**
 * Converts a call duration in total number of seconds to a human readable string
 * such as 'less than a minute' or '4 hours 34 minutes'.
 * @param {number} durationInSeconds The duration of the call in seconds
 * @returns {string} A human readable string representing the duration of the call
 */
export function callDurationToHumanReadable (durationInSeconds) {
  if (durationInSeconds < 60) {
    // returns 'less than a minute', we're doing it like this instead of returning a string
    // so datefns handles i18n.
    return _baseFormatDistance(0, 29 * 1000);
  }
  const duration = intervalToDuration({
    start: 0,
    end: durationInSeconds * 1000,
  });
  return _baseFormatDuration(duration, ['hours', 'minutes']);
}

/**
 * Returns the distance between the passed in date and now in a human readable format, typically used
 * when showing a history of items in a log such as a feed list.
 *
 * datefns does not support 'today' and 'yesterday' without showing time so we use Intl for these cases.
 *
 * examples below to explain
 * the different potential formats:
 *
 * If current day:
 * Today
 *
 * If previous day:
 * Yesterday
 *
 * Older than yesterday, but in the same calendar week:
 * Monday
 *
 * Older than the most recent calendar week, but in the same year:
 * Monday, October 14
 *
 * older than a calendar year:
 * October 14, 2022
 *
 *
 * @param {Date} date The timestamp of the item's date
 * @returns {string} A human readable string representing the distance between the date and now
 */
export function dateRelativeToNow (date) {
  if (isToday(date)) {
    const rtl = new Intl.RelativeTimeFormat(global.locale.code, { numeric: 'auto' });
    return capitalizeFirstLetter(rtl.formatToParts(0, 'day')[0].value, global.locale.code);
  } else if (isYesterday(date)) {
    const rtl = new Intl.RelativeTimeFormat(global.locale.code, { numeric: 'auto' });
    return capitalizeFirstLetter(rtl.formatToParts(-1, 'day')[0].value, global.locale.code);
  } else if (isThisWeek(date)) {
    return _baseFormat(date, 'EEEE');
  } else if (isSameYear(date, Date.now())) {
    return _baseFormat(date, 'EEEE, MMMM d');
  } else {
    return _baseFormat(date, 'MMMM d, y');
  }
}