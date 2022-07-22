<template>
  <dt-popover
    :disabled="disabled"
    :open="open"
    :placement="placement"
    :initial-focus-element="initialFocusElement"
    padding="none"
    dialog-class="d-h464 d-w512 callbar-popover"
    header-class="d-d-flex d-ai-center d-fw-normal d-px12"
    v-bind="$attrs"
    @opened="onModalIsOpened"
  >
    <template #anchor>
      <div class="button">
        <dt-recipe-callbar-button
          :disabled="disabled"
          :active="active"
          :danger="danger"
          @click="buttonClick"
        >
          <slot
            slot="icon"
            name="icon"
          />
          <slot
            slot="tooltip"
            name="tooltip"
          />
          <slot
            slot="label"
            name="label"
          />
          <slot />
        </dt-recipe-callbar-button>
        <dt-button
          v-if="!disabled"
          circle
          importance="clear"
          size="lg"
          class="arrow"
          :active="open"
          @click="arrowClick"
        >
          <template #icon>
            <icon-arrow-drop-up class="d-svg--size-16" />
          </template>
        </dt-button>
      </div>
    </template>
    <slot
      v-for="(_, name) in $slots"
      :slot="name"
      :name="name"
    />
  </dt-popover>
</template>

<script>
import { DtRecipeCallbarButton, DtPopover, DtButton } from '@';
import IconArrowDropUp from '@dialpad/dialtone/lib/dist/vue/icons/IconArrowDropUp.vue';
import utils from '@/common/utils';

export default {
  name: 'DtRecipeCallbarButtonWithPopover',

  components: { DtRecipeCallbarButton, DtPopover, DtButton, IconArrowDropUp },

  /* inheritAttrs: false is generally an option we want to set on library
    components. This allows any attributes passed in that are not recognized
    as props to be passed down to another element or component using v-bind:$attrs
    more info: https://vuejs.org/v2/api/#inheritAttrs */
  inheritAttrs: false,

  props: {
    /**
     * Id for the item.
     */
    id: {
      type: String,
      default () {
        return utils.getUniqueString();
      },
    },

    placement: {
      type: String,
      default: 'top',
    },

    initialFocusElement: {
      type: String,
      default: 'first',
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    active: {
      type: Boolean,
      default: false,
    },

    danger: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['arrowClick', 'click'],

  data () {
    return {
      open: false,
    };
  },

  computed: {
    hasTooltip () {
      return Boolean(this.$slots.tooltip);
    },

    hasIcon () {
      return Boolean(this.$slots.icon);
    },
  },

  methods: {
    arrowClick (ev) {
      this.$emit('arrowClick', ev);
      return (this.open = !this.open);
    },

    buttonClick (ev) {
      if (!this.$listeners.click) {
        this.arrowClick(ev);
      } else {
        this.$emit('click', ev);
      }
    },

    onModalIsOpened (isOpened) {
      this.open = isOpened;
    },
  },

};
</script>

<style lang="less">
.button {
  position: relative;
  display: inline-block;
}
.arrow.d-btn--circle {
  position: absolute;
  top: var(--su4);
  right: 0;
  width: var(--su16);
  height: var(--su16);
  padding: var(--su8);
  border-radius: var(--su4);

  &.d-btn--active {
    background: var(--black-025);
  }
}
.callbar-popover {
  .d-popover__header {
    background: var(--black-900);
    color: var(--white);

    button {
      color: var(--white);
    }
  }

}
.d-tab--selected::after, .d-tab--selected:hover::after {
  --tab--bgc: var(--black-900);
}
.tab-group {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.tab-content {
  flex: 1 1 100%;
  overflow-y: auto;
}
</style>
