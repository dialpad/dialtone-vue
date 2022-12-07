<template>
  <div
    :id="id"
    :class="[
      'd-avatar',
      AVATAR_KIND_MODIFIERS[kind],
      AVATAR_SIZE_MODIFIERS[size],
      avatarClass,
    ]"
    :style="initialKindStyle"
    data-qa="dt-avatar"
  >
    <!-- @slot Slot for avatar content -->
    <slot v-if="shouldShowContent" />
    <span v-else-if="showInitials">
      {{ formattedInitials }}
    </span>
    <dt-presence
      v-if="presence"
      :presence="presence"
      :class="[
        'd-avatar__presence',
        AVATAR_PRESENCE_SIZE_MODIFIERS[size],
      ]"
      v-bind="presenceProps"
      data-qa="dt-presence"
    />
  </div>
</template>

<script>
import { getUniqueString, getRandomElement } from '@/common/utils';
import Vue from 'vue';
import { DtPresence } from '../presence';
import {
  AVATAR_KIND_MODIFIERS, AVATAR_SIZE_MODIFIERS,
  AVATAR_PRESENCE_SIZE_MODIFIERS,
  AVATAR_ANGLES,
  MAX_GRADIENT_COLORS,
  MAX_GRADIENT_COLORS_100,
} from './avatar_constants.js';

/**
 * An avatar is a visual representation of a user or object.
 * @see https://dialpad.design/components/avatar.html
 */
export default {
  name: 'DtAvatar',
  components: { DtPresence },

  inheritAttrs: false,

  props: {
    /**
     * Id of the avatar content wrapper element
     */
    id: {
      type: String,
      default () { return getUniqueString(); },
    },

    /**
     * The size of the avatar
     * @values xs, sm, md, lg, xl
     */
    size: {
      type: String,
      default: 'md',
      validator: (size) => Object.keys(AVATAR_SIZE_MODIFIERS).includes(size),
    },

    /**
     * Used to customize the avatar container
     */
    avatarClass: {
      type: [String, Array, Object],
      default: '',
    },

    /**
     * Determines whether to show the presence indicator for
     * Avatar - accepts PRESENCE_STATES values: 'busy', 'away', 'offline',
     * or 'active'. By default, it's null and nothing is shown.
     */
    presence: {
      type: String,
      default: null,
    },

    /**
     * A set of props to be passed into the presence component.
     */
    presenceProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     * Initials to be shown in the avatar. Used as fallback if image fails to load.
     */
    initials: {
      type: String,
      default: '',
    },
  },

  data () {
    return {
      // initials, image or icon
      kind: 'initials',
      AVATAR_SIZE_MODIFIERS,
      AVATAR_KIND_MODIFIERS,
      AVATAR_PRESENCE_SIZE_MODIFIERS,
      imageLoadedSuccessfully: null,
      formattedInitials: '',
    };
  },

  computed: {
    shouldShowContent () {
      return this.kind !== 'initials' && this.imageLoadedSuccessfully !== false;
    },

    showInitials () {
      return this.kind === 'initials' || this.initials;
    },

    initialKindStyle () {
      const randomGradientColorStops = this.randomizeGradientColorStops();
      const styles = {
        '--avatar-gradient-angle': `${this.randomizeGradientAngle()}deg`,
        '--avatar-gradient-stop-1': `var(--${randomGradientColorStops[0]})`,
        '--avatar-gradient-stop-2': `var(--${randomGradientColorStops[1]})`,
        '--avatar-gradient-stop-3': `var(--${randomGradientColorStops[2]})`,
      };

      return (this.kind === 'initials' || this.kind === 'icon') ? styles : null;
    },
  },

  mounted () {
    this.init();
  },

  updated () {
    this.init();
  },

  methods: {
    async init () {
      const firstChild = this.$slots.default[0]?.elm || this.$slots.default[0];
      const iconChild = this.$slots.default[0]?.componentOptions?.tag === 'dt-icon';

      if (firstChild || iconChild) {
        if (iconChild) {
          this.kind = 'icon';
        } else {
          this.setKind(firstChild);
        }

        await this.$nextTick();
        const childEl = this.$el;

        if (this.kind === 'image') {
          childEl.firstChild.classList.add('d-avatar__image');
          // TO DO: remove attached event listener
          childEl.firstChild.addEventListener('error', () => {
            this.kind = 'initials';
            this.imageLoadedSuccessfully = false;
            childEl.firstChild.classList.remove('d-avatar__image');
          });
          childEl.firstChild.addEventListener('load', () => {
            this.imageLoadedSuccessfully = true;
          });

          if (this.initials) {
            this.formatInitials(this.initials);
          }
        }
        if (this.kind === 'initials') {
          this.formatInitials(firstChild.textContent);
        }
        this.validateImageAttrsPresence();
      }
    },

    formatInitials (initials) {
      if (!initials) return;

      if (this.size === 'xs') {
        this.formattedInitials = '';
      } else if (this.size === 'sm') {
        this.formattedInitials = initials[0];
      } else {
        this.formattedInitials = initials.slice(0, 2);
      }
    },

    setKind (element) {
      if (this.isSvgType(element)) { this.kind = 'icon'; return; }
      if (this.isImageType(element)) { this.kind = 'image'; return; }
      this.kind = 'initials';
    },

    isSvgType (element) {
      return element?.tagName?.toUpperCase() === 'SVG' || element?.tag?.toUpperCase() === 'SVG';
    },

    isImageType (element) {
      return element?.tagName?.toUpperCase() === 'IMG' || element?.tag?.toUpperCase() === 'IMG';
    },

    randomizeGradientAngle () {
      return getRandomElement(AVATAR_ANGLES);
    },

    randomizeGradientColorStops () {
      const colors = new Set();
      const colorsWith100 = ['purple-100', 'magenta-100', 'gold-100', 'blue-100'];
      const colorsWith200 = ['purple-200', 'magenta-200', 'gold-200', 'blue-200'];

      // get 3 unique colors, 2 from colorsWith100 and one from colorsWith200
      while (colors.size < MAX_GRADIENT_COLORS) {
        if (colors.size === MAX_GRADIENT_COLORS_100) {
          colors.add(getRandomElement(colorsWith200));
        } else {
          colors.add(getRandomElement(colorsWith100));
        }
      }

      const shuffledColors = Array.from(colors).sort(() => 0.5 - Math.random());

      return Array.from(shuffledColors);
    },

    validateImageAttrsPresence () {
      if (this.kind === 'image' && this.imageLoadedSuccessfully) {
        // Check that default slot image required attributes are provided
        if (!this.$el.firstChild.getAttribute('src') || !this.$el.firstChild.getAttribute('alt')) {
          Vue.util.warn('src and alt attributes are required for image avatars', this);
        }
      }
    },
  },
};
</script>
