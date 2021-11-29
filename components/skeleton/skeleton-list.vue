<template>
  <div ref="skeleton-list">
    <template v-if="loading && (hasAvatar || hasText)">
      <div
        v-for="row in list"
        :key="`avatar-list-${row}`"
        aria-hidden="true"
        :class="{
          'd-d-flex': hasText && hasAvatar,
          'd-ai-center': hasText && hasAvatar && !paragraph,
          'd-mb12': textList && row !== list && hasAvatar,
        }"
      >
        <dt-skeleton-shape
          v-if="hasAvatar"
          :size="avatarSize"
          :has-aria-described-by="hasAriaDescribedBy"
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
            :has-aria-described-by="hasAriaDescribedBy"
            :paragraphs="paragraphOption"
            :type="paragraph ? 'paragraphs' : 'label'"
            :animation-duration="animationDuration"
          />
          <slot :item="{ row, list }" />
        </div>
      </div>
    </template>
    <span
      :id="uniqId"
      class="d-d-none"
    >
      {{ ariaLoadingText }}
    </span>
    <dt-lazy-show
      :show="!loading"
      :transition="transitionContent"
    >
      <slot name="content" />
    </dt-lazy-show>
  </div>
</template>

<script>
import { SKELETON_WIDTHS } from './skeleton_constants.js';
import DtSkeletonShape from './skeleton-shape';
import DtSkeletonText from './skeleton-text';
import { DtLazyShow } from '../lazy_show';
import { getUniqueString } from '../utils';

export default {
  name: 'DtSkeletonList',

  components: {
    DtSkeletonShape,
    DtSkeletonText,
    DtLazyShow,
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
      default: true,
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

    loading: {
      type: Boolean,
      default: true,
    },

    ariaLoadingText: {
      type: String,
      default: 'Loading',
    },

    transitionContent: {
      type: String,
    },

    hasAriaDescribedBy: {
      type: Boolean,
      default: true,
    },

  },

  computed: {
    uniqId () {
      return getUniqueString('DtSkeletonList');
    },

    hasAvatar () {
      return this.avatar || this.icon;
    },

    hasText () {
      return this.text || this.paragraph;
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

  watch: {
    loading () {
      if (!this.loading) {
        this.$refs.skeleton.removeAttribute('tabindex');
        this.$refs.skeleton.removeAttribute('aria-describedby');
      }
    },
  },

  mounted () {
    if (this.hasAriaDescribedBy) {
      this.$refs['skeleton-list'].setAttribute('tabindex', '0');
      this.$refs['skeleton-list'].setAttribute('aria-describedby', this.uniqId);
    }
  },
};
</script>
