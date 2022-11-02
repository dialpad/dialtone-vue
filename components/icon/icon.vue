<template>
  <component
    :is="icon"
    data-qa="dt-icon"
    :class="iconSize"
  />
</template>

<script>
import { ICON_SIZE_MODIFIERS } from './icon_constants';
import { kebabCaseToPascalCase } from '@/common/utils';

/**
 * The Icon component provides a set of glyphs and sizes to provide context your application.
 * @see https://dialpad.design/components/icon.html
 */
export default {
  name: 'DtIcon',

  props: {
    /**
     * The size of the icon.
     * @values 100, 200, 300, 400, 500, 600, 700, 800
     */
    size: {
      type: String,
      default: '500',
      validator: (s) => Object.keys(ICON_SIZE_MODIFIERS).includes(s),
    },

    /**
     * The icon name in kebab-case
     */
    name: {
      type: String,
      required: true,
    },
  },

  data () {
    return {
      icon: null,
    };
  },

  computed: {
    iconSize () {
      return ICON_SIZE_MODIFIERS[this.size];
    },

    iconName () {
      return kebabCaseToPascalCase(this.name);
    },
  },

  watch: {
    $props: {
      immediate: true,
      deep: true,
      handler () {
        this.getIcon();
      },
    },
  },

  methods: {
    async getIcon () {
      const { default: icon } = await import(
          /* webpackChunkName: "dialtone-icons" */
          /* webpackMode: "weak" */
          `@dialpad/dialtone/lib/dist/vue/v7/${this.iconName}.vue`
      );
      this.icon = icon;
    },
  },
};
</script>
