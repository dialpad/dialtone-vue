<template>
  <div
    :tabindex="isFocusable ? 0 : -1"
    :aria-describedby="ariaDescribedBy"
  >
    <div
      aria-hidden="true"
      :class="[
        'd-d-flex',
        {
          'd-ai-center': textType !== 'paragraphs',
        },
      ]"
    >
      <dt-skeleton-shape
        :size="shapeSize"
        :shape="shape"
        class="d-mr8"
        :animation-duration="animationDuration"
        :animate="animate"
        :aria-loading-text="ariaLoadingText"
        :offset="offset"
      />
      <div class="d-d-flex d-fd-column d-w100p">
        <dt-skeleton-text
          :paragraphs="paragraphOption"
          :type="textType"
          :animation-duration="animationDuration"
          :animate="animate"
          :aria-loading-text="ariaLoadingText"
          :offset="offset"
        />
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { SKELETON_SHAPES, SKELETON_TEXT_TYPES, SKELETON_WIDTHS } from './skeleton_constants.js';
import DtSkeletonShape from './skeleton-shape';
import DtSkeletonText from './skeleton-text';
import { getUniqueString } from '../utils';

export default {
  name: 'DtSkeletonListItem',

  components: {
    DtSkeletonShape,
    DtSkeletonText,
  },

  props: {
    shape: {
      type: String,
      default: 'circle',
      validator: shape => Object.keys(SKELETON_SHAPES).includes(shape),
    },

    isFocusable: {
      type: Boolean,
      default: false,
    },

    shapeSize: {
      type: String,
      default: 'sm',
      validator: size => Object.keys(SKELETON_WIDTHS).includes(size),
    },

    textType: {
      type: String,
      default: 'label',
      validator: type => SKELETON_TEXT_TYPES.includes(type),
    },

    paragraphs: {
      type: Object,
      default: null,
    },

    animationDuration: {
      type: Number,
      default: -1,
    },

    ariaLoadingText: {
      type: String,
      required: true,
    },

    animate: {
      type: Boolean,
      default: false,
    },

    offset: {
      type: Number,
      default: 1,
    },
  },

  computed: {
    uniqId () {
      return getUniqueString('DtSkeletonListItem');
    },

    paragraphOption () {
      return this.paragraphs
        ? this.paragraphs
        : {
          rows: 4,
          randomWidth: true,
        };
    },

    ariaDescribedBy () {
      return this.isFocusable ? this.uniqId : '';
    },
  },
};
</script>
