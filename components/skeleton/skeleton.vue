<template>
  <div v-if="hasAvatar || hasText">
    <div
      v-for="row in list"
      :key="`avatar-list-${row}`"
      :class="{
        'd-d-flex': hasText && hasAvatar,
        'd-ai-center': hasText && hasAvatar && !paragraph,
        'd-mb12': textList && row !== list && hasAvatar,
      }"
    >
      <dt-skeleton-shape
        v-if="hasAvatar"
        :size="avatarSize"
        :shape="icon ? 'square' : 'circle'"
        :class="{
          'd-mr8': hasText && hasAvatar,
        }"
        :animation-duration="animationDuration"
      />
      <div class="d-d-flex d-fd-column d-w100p">
        <dt-skeleton-text
          v-if="hasText"
          :class="{
            'd-mb16': textList && row !== list && !hasAvatar && !paragraph,
          }"
          :paragraphs="paragraphOption"
          :type="paragraph ? 'paragraphs' : 'label'"
          :animation-duration="animationDuration"
        />
        <slot :item="{ row, list }" />
      </div>
    </div>
  </div>
</template>

<script>
import { SKELETON_WIDTHS } from './skeleton_constants.js';
import DtSkeletonShape from './skeleton-shape';
import DtSkeletonText from './skeleton-text';

export default {
  name: 'DtSkeleton',

  components: {
    DtSkeletonShape,
    DtSkeletonText,
  },

  props: {
    avatar: {
      type: Boolean,
      default: false,
    },

    icon: {
      type: Boolean,
      default: false,
    },

    avatarSize: {
      type: String,
      default: 'sm',
      validator: size => Object.keys(SKELETON_WIDTHS).includes(size),
    },

    text: {
      type: Boolean,
      default: false,
    },

    textList: {
      type: Number,
      default: null,
    },

    paragraph: {
      type: Boolean,
      default: false,
    },

    paragraphs: {
      type: Object,
      default: null,
    },

    animationDuration: {
      type: Number,
      default: 1000,
    },
  },

  computed: {
    hasAvatar () {
      return this.avatar || this.icon;
    },

    hasText () {
      return this.text || this.textList || this.paragraph;
    },

    list () {
      if (this.textList) return this.textList;
      if (this.hasAvatar || this.text || this.paragraph) return 1;

      return 0;
    },

    paragraphOption () {
      return this.paragraphs
        ? this.paragraphs
        : {
          rows: 4,
          randomWidth: true,
        };
    },
  },
};
</script>
