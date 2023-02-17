<template>
  <dt-icon
    v-if="shouldRenderWithIcon"
    :name="getIconName"
    :class="iconColor"
    :size="isDialbotType ? '500' : '300'"
  />
  <div
    v-else-if="isContactCenterType"
    :class="contactCenterIconClasses"
  />
  <div
    v-else-if="isDialbotType"
    :class="dialbotClasses"
  >
    <icon-dialpad-glyph
      class="d-svg--size16"
      color="white"
    />
  </div>
</template>

<script>
import { DtIcon } from '@/components/icon';
import IconDialpadGlyph from '@dialpad/dialtone/lib/dist/vue/icons/IconDialpadGlyph';
import {
  LEFTBAR_GENERAL_ROW_ICON_MAPPING,
  LEFTBAR_GENERAL_ROW_TYPES,
  LEFTBAR_GENERAL_ROW_CONTACT_CENTER_COLORS,
} from '@/recipes/leftbar/general_row/general_row_constants';

export default {
  name: 'DtRecipeLeftbarGeneralRowIcon',
  components: { DtIcon, IconDialpadGlyph },
  props: {
    type: {
      type: String,
      default: null,
    },

    color: {
      type: String,
      default: null,
    },
  },

  computed: {
    shouldRenderWithIcon () {
      return this.type !== LEFTBAR_GENERAL_ROW_TYPES.DIALBOT && this.type !== LEFTBAR_GENERAL_ROW_TYPES.CONTACT_CENTER;
    },

    contactCenterIconClasses () {
      return [
        'd-icon',
        'leftbar-general-row__contact-center-icon',
        LEFTBAR_GENERAL_ROW_CONTACT_CENTER_COLORS[this.color],
      ];
    },

    dialbotClasses () {
      return [
        'leftbar-general-row__dialbot-icon',
        'd-bar-circle',
      ];
    },

    iconColor () {
      return this.isContactCenterType
        ? LEFTBAR_GENERAL_ROW_CONTACT_CENTER_COLORS[this.color]
        : 'd-fc-black-700';
    },

    isContactCenterType () {
      return this.type === LEFTBAR_GENERAL_ROW_TYPES.CONTACT_CENTER;
    },

    isDialbotType () {
      return this.type === LEFTBAR_GENERAL_ROW_TYPES.DIALBOT;
    },

    getIconName () {
      return LEFTBAR_GENERAL_ROW_ICON_MAPPING[this.type];
    },
  },
};
</script>

<style scoped>
.leftbar-general-row__contact-center-icon {
  width: var(--icon-size-200);
  height: var(--icon-size-200);
  border-radius: var(--size-200);
}

.leftbar-general-row__dialbot-icon {
  background-color: var(--purple-400);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
