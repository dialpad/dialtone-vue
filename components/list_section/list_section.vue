<template>
  <div
    :id="id"
    role="group"
    :aria-labelledby="`${id}-list-section-header`"
    tabindex="-1"
    :class="['dt-list-section', { 'dt-list-section__separator': separator }]"
  >
    <h3
      v-if="header"
      :id="`${id}-list-section-header`"
      class="dt-list-section__header"
    >
      {{ header }}
    </h3>
    <ol
      v-if="!isCollapsible || showAll"
      :id="`${id}-list-section-content`"
    >
      <slot />
    </ol>
    <ol
      v-else
      :id="`${id}-list-section-content`"
    >
      <vnodes :vnodes="displayedItems" />
    </ol>
    <div
      class="dt-list-section__show-more"
    >
      <dt-button
        v-if="isCollapsible"
        :id="`${id}-list-section-show-more-less`"
        link
        class="dt-list-section__show-more-button"
        @click="showMoreLessClicked"
      >
        {{ showMoreLessText }}
      </dt-button>
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
/* Sections a group of list items within a list. Useful for
   more complex lists that are really a series of "sublists".

   - Can add a header for each section
   - Can add border lines to visually separate the section
   - Allows a list to have a max number of visible items, and any items
     above the max you'd press "show more" to display.
  -  Allows to add additional content to list footer.
*/
import utils from '@/common/utils';
import { DtButton } from '../button';

export default {
  name: 'ListSection',

  components: {
    // little trick to render vnode objects via a render function
    Vnodes: {
      name: 'vnodes',
      functional: true,
      render: (h, ctx) => ctx.props.vnodes,
    },

    DtButton,
  },

  props: {
    id: {
      type: String,
      default () { return utils.getUniqueString(); },
    },

    // Leave blank if you want no header
    header: {
      type: String,
      default: null,
    },

    // Will visually separate this section with a border
    separator: {
      type: Boolean,
      default: false,
    },

    // Will only display this maximum number of items, if you
    // would like to see the rest press "show more". 0 means show all
    maxDisplayed: {
      type: Number,
      default: 0,
    },

    textMore: {
      type: String,
      // TODO needs to be translated, but Dialtone Vue can't do it.
      default: 'Show more',
    },

    textLess: {
      type: String,
      // TODO needs to be translated, but Dialtone Vue can't do it.
      default: 'Show less',
    },
  },

  data () {
    return {
      showAll: false,
    };
  },

  computed: {
    isCollapsible () {
      if (this.maxDisplayed === 0 || this.itemCount <= this.maxDisplayed) {
        return false;
      }
      return true;
    },

    showMoreLessText () {
      return this.showAll ? this.textLess : this.textMore;
    },

    hiddenCount () {
      return this.itemCount - this.displayedItems.length;
    },

    itemCount () {
      // eslint-disable-next-line vue/require-slots-as-functions
      return this.$slots.default.length;
    },

    displayedItems () {
      // filtering the slot v-nodes to only display up to maxDisplayed items
      // eslint-disable-next-line vue/require-slots-as-functions
      return this.$slots.default.filter((item, index) => index <= this.maxDisplayed - 1);
    },
  },

  methods: {
    showMoreLessClicked () {
      this.showAll = !this.showAll;
    },
  },
};
</script>

<style lang="less">
.dt-list-section {
  font-size: var(--dt-font-size-200);
  line-height: var(--lh6);
  padding-top: var(--dt-space-350);
  padding-bottom: var(--dt-space-350);
  --bco: 100%;
  border-color: hsla(var(--dt-color-black-400-h)
    var(--dt-color-black-400-s) var(--dt-color-black-400-l) / var(--bco));

  &__separator {
    border-bottom: var(--dt-size-100) solid
  }

  &__header {
    padding-left: var(--dt-space-450);
    margin-top: var(--dt-space-350);
  }

  &__show-more {
    display: flex;
  }

  &__show-more-button {
    margin-left: var(--dt-space-450);
    padding-top: var(--dt-space-350);
    padding-bottom: var(--dt-space-350);
  }
}
.dt-list-section[tabindex="-1"]:focus {
  outline: none;
}
</style>
