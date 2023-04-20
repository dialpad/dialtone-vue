import {
  DEFAULT_PREFIX,
  DEFAULT_VALIDATION_MESSAGE_TYPE,
  VALIDATION_MESSAGE_TYPES,
} from './constants';
import Vue from 'vue';
const seedrandom = require('seedrandom');

let UNIQUE_ID_COUNTER = 0;
let TIMER;

// selector to find focusable not hidden inputs
const FOCUSABLE_SELECTOR_NOT_HIDDEN = 'input:not([type=hidden]):not(:disabled)';
// selector to find focusable not disables elements
const FOCUSABLE_SELECTOR_NOT_DISABLED = 'select:not(:disabled),textarea:not(:disabled),button:not(:disabled)';
// // selector to find focusable not hidden and disabled elements
const FOCUSABLE_SELECTOR_NOT_HIDDEN_DISABLED = `${FOCUSABLE_SELECTOR_NOT_HIDDEN},${FOCUSABLE_SELECTOR_NOT_DISABLED}`;
// selector to find focusable elements
const FOCUSABLE_SELECTOR = `a,frame,iframe,${FOCUSABLE_SELECTOR_NOT_HIDDEN_DISABLED},*[tabindex]`;

const scheduler = typeof setImmediate === 'function' ? setImmediate : setTimeout;

export function getUniqueString (prefix = DEFAULT_PREFIX) {
  return `${prefix}${UNIQUE_ID_COUNTER++}`;
}

/**
 * Returns a random element from array
 * @param array - the array to return a random element from
 * @param {string} seed - use a string to seed the randomization, so it returns the same element each time
 * based on that string.
 * @returns {*} - the random element
 */
export function getRandomElement (array, seed) {
  const rng = seedrandom(seed);
  return array[Math.floor(rng() * array.length)];
}

export function formatMessages (messages) {
  if (!messages) {
    return [];
  }

  return messages.map(message => {
    if (typeof message === 'string') {
      return {
        message,
        type: DEFAULT_VALIDATION_MESSAGE_TYPE,
      };
    }

    return message;
  });
}

export function filterFormattedMessages (formattedMessages) {
  const validationState = getValidationState(formattedMessages);

  if (!formattedMessages || !validationState) {
    return [];
  }

  return formattedMessages.filter(message => !!message.message && message.type === validationState);
}

/*
 * The priority order of message types is as flows: 'error' > 'warning' > 'success'.
 * If any message of type 'error' is present in messages, the input state is considered
 * to be 'error', then 'warning' and lastly 'success'.
 */
export function getValidationState (formattedMessages) {
  if (!formattedMessages) {
    return null;
  }

  if (hasFormattedMessageOfType(formattedMessages, VALIDATION_MESSAGE_TYPES.ERROR)) {
    return VALIDATION_MESSAGE_TYPES.ERROR;
  }
  if (hasFormattedMessageOfType(formattedMessages, VALIDATION_MESSAGE_TYPES.WARNING)) {
    return VALIDATION_MESSAGE_TYPES.WARNING;
  }
  if (hasFormattedMessageOfType(formattedMessages, VALIDATION_MESSAGE_TYPES.SUCCESS)) {
    return VALIDATION_MESSAGE_TYPES.SUCCESS;
  }

  return null;
}

export function hasFormattedMessageOfType (formattedMessages, messageType) {
  if (!formattedMessages || !messageType) {
    return false;
  }

  return formattedMessages.some(message => message?.type === messageType);
}

export function findFirstFocusableNode (element) {
  return element?.querySelector(FOCUSABLE_SELECTOR);
}

/* html-fragment component:
 * To render html without wrapping in another element as when using v-html.
 * props: html
 */
export const htmlFragment = {
  name: 'html-fragment',
  functional: true,
  props: ['html'],
  render (h, ctx) {
    return new Vue({
      // eslint-disable-next-line vue/multi-word-component-names
      name: 'Inner',
      beforeCreate () { this.$createElement = h; },
      template: `<div>${ctx.props.html}</div>`,
    }).$mount()._vnode.children;
  },
};

export const flushPromises = () => {
  return new Promise((resolve) => {
    scheduler(resolve);
  });
};

/**
 * Transform a string from kebab-case to PascalCase
 * @param string
 * @returns {string}
 */
export const kebabCaseToPascalCase = (string) => {
  return string?.toLowerCase()
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};

/**
 * Transform a string from PascalCase to kebab-case
 * @param string
 * @returns {string}
 */
export const pascalCaseToKebabCase = (string) => {
  return string
    .replace(/\.?([A-Z0-9]+)/g, (x, y) => '-' + y.toLowerCase())
    .replace(/^-/, '');
};

/*
* Set's a global timer to debounce the execution of a function.
* @param { object } func - the function that is going to be called after timeout
* @param { number } [timeout=300] timeout
* */
export function debounce (func, timeout = 300) {
  clearTimeout(TIMER);
  TIMER = setTimeout(func, timeout);
}

/**
 * Checks if the element is out of the viewport
 * https://gomakethings.com/how-to-check-if-any-part-of-an-element-is-out-of-the-viewport-with-vanilla-js/
 * @param  {HTMLElement} element The element to check
 * @return {Object} A set of booleans for each side of the element
 */

export function isOutOfViewPort (element) {
  const bounding = element.getBoundingClientRect();

  const isOut = {
    top: bounding.top < 0,
    left: bounding.left < 0,
    bottom: bounding.bottom > (window.innerHeight || document.documentElement.clientHeight),
    right: bounding.right > (window.innerWidth || document.documentElement.clientWidth),
  };
  isOut.any = Object.values(isOut).some(val => val);
  isOut.all = Object.values(isOut).every(val => val);
  return isOut;
}
export default {
  getUniqueString,
  getRandomElement,
  formatMessages,
  filterFormattedMessages,
  hasFormattedMessageOfType,
  getValidationState,
  htmlFragment,
  flushPromises,
  kebabCaseToPascalCase,
  debounce,
  isOutOfViewPort,
};