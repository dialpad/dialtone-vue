<template>
  <dt-icon
    v-if="isIconType"
    :name="getIconName"
    :size="iconSize"
  />
  <div
    v-else-if="isContactCenterType"
    :class="contactCenterIconClasses"
  />
  <div
    v-else-if="isDialbotType"
    :class="dialbotClasses"
    data-qa="general-row-dialbot"
  >
    <dt-icon
      name="dialbot"
      size="500"
    />
  </div>
</template>

<script>
import { DtIcon } from '@/components/icon';
import {
  LEFTBAR_GENERAL_ROW_ICON_MAPPING as ICON_MAPPING,
  LEFTBAR_GENERAL_ROW_TYPES as TYPES,
  LEFTBAR_GENERAL_ROW_CONTACT_CENTER_COLORS as COLORS,
} from '@/recipes/leftbar/general_row/general_row_constants';

export default {
  name: 'DtRecipeLeftbarGeneralRowIcon',
  components: { DtIcon },
  props: {
    type: {
      type: String,
      default: null,
    },

    color: {
      type: String,
      default: null,
    },

    iconSize: {
      type: String,
      default: '300',
    },
  },

  computed: {
    isIconType () {
      return ![TYPES.DIALBOT, TYPES.CONTACT_CENTER].includes(this.type);
    },

    isContactCenterType () {
      return this.type === TYPES.CONTACT_CENTER;
    },

    isDialbotType () {
      return this.type === TYPES.DIALBOT;
    },

    getIconName () {
      return ICON_MAPPING[this.type];
    },

    contactCenterIconClasses () {
      return [
        'dt-leftbar-row__icon-cc',
        COLORS[this.color],
      ];
    },

    dialbotClasses () {
      return [
        'd-d-flex',
        'd-ai-center',
        'd-jc-center',
      ];
    },
  },
};
</script>
