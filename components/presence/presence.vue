<template>
  <div
    :class="['d-presence', BACKGROUND_COLOR_FOR_THEME[theme]]"
    data-qa="dt-presence"
    role="status"
  >
    <span
      v-if="srText"
      data-qa="dt-presence-sr-text"
      class="sr-only"
    >{{ srText }} </span>
    <div
      class="d-presence__inner"
      :class="{
        'd-presence__inner--active': presence === 'active',
        'd-presence__inner--away': presence === 'away',
        'd-presence__inner--busy': presence === 'busy',
        'd-presence__inner--offline': presence === 'offline',
      }"
    />
  </div>
</template>

<script>
import { BACKGROUND_COLOR_FOR_THEME, PRESENCE_STATES, PRESENCE_STATES_LIST } from './presence_constants';
/**
 * Presence is a user status visual indicator element.
 * @see https://dialpad.design/components/presence.html
 */
export default {
  name: 'Presence',
  props: {

    /**
     * Determines the color of the inner presence circle, indicating status.
     * Accepts one of 4 values: 'busy', 'away', 'active', 'offline'
     */
    presence: {
      type: String,
      default: PRESENCE_STATES.ACTIVE,
      validator: (role) => {
        return PRESENCE_STATES_LIST.includes(role);
      },
    },

    /**
     * A theme prop to customize the color of the outer border of presence
     */
    theme: {
      type: String,
      default: 'none',
      validator: (theme) => {
        return Object.keys(BACKGROUND_COLOR_FOR_THEME).includes(theme);
      },
    },

    /**
     * Since Presence is a visual element, we need SRs to read out any state changes
     * that occur.
     * Text entered here will be read by assistive technology. If null this component will be ignored by AT.
     */
    srText: {
      type: String,
      default: null,
    },

  },

  data () {
    return {
      BACKGROUND_COLOR_FOR_THEME,
    };
  },
};
</script>
