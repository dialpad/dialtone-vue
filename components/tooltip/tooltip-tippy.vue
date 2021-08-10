<template>
  <div data-tippy-root>
    <div
      ref="anchor"
      class="d-d-inline-block"
    >
      <slot name="anchor" />
    </div>
    <div
      ref="content"
      data-qa="dt-tooltip"
      :class="[
        'd-ps-absolute',
        'd-tooltip',
        'd-tooltip__arrow--top-center',
        TOOLTIP_KIND_MODIFIERS[shouldShowTooltip ? 'show' : 'hide'],
        {
          [ TOOLTIP_KIND_MODIFIERS.inverted ]: inverted,
        },
      ]"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import tippy from 'tippy.js/headless';
import defaultProps, { booleanProps } from './props';
import { TOOLTIP_KIND_MODIFIERS } from './tooltip_constants';
import { getUniqueString } from '../utils';
export default {
  name: 'TooltipTippy',
  props: {
    /**
     * The id of the tooltip
     */
    id: {
      type: String,
      default () { return getUniqueString(); },
    },

    visible: {
      type: Boolean,
      default: false,
    },

    flip: {
      type: Array,
      default: () => ['right', 'top'],
    },

    /**
     * Add inverted class
     */
    inverted: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      shouldShowTooltip: false,
      TOOLTIP_KIND_MODIFIERS,
      tip: null,
      options: {},
    };
  },

  mounted () {
    this.tip = tippy(this.$refs.anchor.children[0], this.getOptions());
  },

  // beforeDestroy () {
  //   if (!this.tip) return;
  //   this.tip.destroy();
  // },

  methods: {
    filterOptions () {
      const getValue = (key, value) => {
        if (booleanProps[key] !== undefined) {
          if (value === '') return true;
          if (value === 'false') return false;
          if (value === 'true') return true;
        }
        return value;
      };
      for (const key of Object.keys(this.options)) {
        if (!defaultProps[key] === undefined) {
          // We're replacing this.options anyway, we don't have to worry about modifying the object
          delete this.options[key];
        } else {
          this.options[key] = getValue(key, this.options[key]);
        }
      }
      return this.options;
    },

    toCamelCase (str) {
      return str.split('-').map((word, index) => {
        if (!index) return word.toLowerCase();

        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }).join('');
    },

    attrsToCamelCase () {
      return Object.entries(this.$attrs).reduce((acc, [key, value]) => {
        return {
          ...acc,
          [this.toCamelCase(key)]: value,
        };
      }, {});
    },

    getOptions () {
      const popper = this.$refs.content;
      this.options = { ...this.attrsToCamelCase() };

      this.filterOptions();

      return {
        ...this.options,
        render () {
          return {
            popper,
          };
        },

        allowHTML: true,
        trigger: 'mouseenter focus click',
        popperOptions: {
          modifiers: [
            {
              name: 'flip',
              options: {
                fallbackPlacements: this.flip,
              },
            },
          ],
        },

        onHide: () => {
          this.shouldShowTooltip = false;
        },

        onShow: () => {
          this.shouldShowTooltip = true;
        },

        onDestroy () {},
        onTrigger () {},
        onBeforeUpdate () {},
      };
    },
  },
};
</script>

<style lang="less">
@import (reference) '@dialpad/dialtone/lib/build/less/dialtone.less';
div[data-popper-placement="bottom"] {
  .d-tooltip__arrow--top-center();
}

div[data-popper-placement="right"] {
  .d-tooltip__arrow--left-center();
}

div[data-popper-placement="left"] {
  .d-tooltip__arrow--right-center();
}

div[data-popper-placement="top"] {
  .d-tooltip__arrow--bottom-center();
}
</style>
