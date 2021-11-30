<template>
  <div
    :class="[
      'd-d-flex',
      {
        'd-ai-center': textType !== 'paragraphs',
      },
    ]"
  >
    <dt-skeleton-shape
      class="d-mr8"
      :size="shapeSize"
      :shape="shape"
      :animation-duration="animationDuration"
      :animate="animate"
      :offset="offset"
    />
    <div class="d-d-flex d-fd-column d-w100p">
      <dt-skeleton-text
        :paragraphs="paragraphsOptions"
        :type="textType"
        :animation-duration="animationDuration"
        :animate="animate"
        :offset="offset"
      />
      <slot />
    </div>
    <span
      v-if="screenReaderText"
      class="d-d-none"
    >
      {{ screenReaderText }}
    </span>
  </div>
</template>

<script>
import { SKELETON_SHAPES, SKELETON_TEXT_TYPES, SKELETON_WIDTHS } from './skeleton_constants.js';
import DtSkeletonShape from './skeleton-shape';
import DtSkeletonText from './skeleton-text';

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

    shapeSize: {
      type: String,
      default: 'md',
      validator: size => Object.keys(SKELETON_WIDTHS).includes(size),
    },

    textType: {
      type: String,
      default: 'paragraphs',
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

    screenReaderText: {
      type: String,
      required: '',
    },

    animate: {
      type: Boolean,
      default: true,
    },

    offset: {
      type: Number,
      default: 1,
    },
  },

  computed: {
    paragraphsOptions () {
      return this.paragraphs || { rows: 4, randomWidth: true };
    },
  },
};
</script>
