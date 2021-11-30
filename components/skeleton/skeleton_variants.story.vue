<template>
  <div>
    <section class="d-mb64">
      <p class="d-mb8">
        Default and empty skeleton variant
      </p>
      <dt-skeleton :aria-loading-text="ariaLoadingText" />
    </section>

    <section class="d-mb64">
      <p class="d-mb8">
        Configurable skeleton with props and slot variant (paragraphs with randomWidth, maxWidth, minWidth)
      </p>
      <dt-skeleton
        :list-item-option="{
          textList: 4,
          textType: 'paragraphs',
          shapeSize: 'md',
          paragraphs: {
            rows: 3,
            randomWidth: true,
            maxWidth: 40,
            minWidth: 10,
          },
        }"
        :aria-loading-text="ariaLoadingText"
      >
        <template #list-item>
          <dt-skeleton-shape
            size="2xl"
            shape="rectangle"
            class="d-mt12"
            :aria-loading-text="ariaLoadingText"
          />
        </template>
      </dt-skeleton>
    </section>

    <section class="d-mb64">
      <p class="d-mb8">
        Skeleton shape circle variants
      </p>
      <div class="d-d-flex">
        <dt-skeleton
          v-for="size in shapeWidths"
          :key="`${size}-circle`"
          :shape-option="{
            size,
            shape: 'circle',
          }"
          class="d-mx4"
          :aria-loading-text="ariaLoadingText"
        />
      </div>
    </section>

    <section class="d-mb64">
      <p class="d-mb-2">
        Skeleton square circle variants
      </p>
      <div class="d-d-flex">
        <dt-skeleton
          v-for="size in shapeWidths"
          :key="`${size}-square`"
          :shape-option="{
            size,
            shape: 'square',
          }"
          class="d-mx4"
          :aria-loading-text="ariaLoadingText"
        />
      </div>
    </section>

    <section class="d-mb64">
      <p class="d-mb-2">
        Skeleton rectangle circle variants
      </p>
      <div class="d-d-flex">
        <dt-skeleton
          v-for="size in shapeWidths"
          :key="`${size}-rectangle`"
          :shape-option="{
            size,
            shape: 'rectangle',
          }"
          class="d-mx4"
          :aria-loading-text="ariaLoadingText"
        />
      </div>
    </section>

    <section class="d-mb64">
      <p class="d-mb-2">
        Skeleton pill variants
      </p>
      <div class="d-d-flex">
        <dt-skeleton
          v-for="size in shapeWidths"
          :key="`${size}-pill`"
          :shape-option="{
            size,
            shape: 'pill',
          }"
          class="d-mx4"
          :aria-loading-text="ariaLoadingText"
        />
      </div>
    </section>

    <section class="d-mb64">
      <p class="d-mb-2">
        Skeleton heading variants
      </p>
      <dt-skeleton
        v-for="size in headingSize"
        :key="`${size}-heading`"
        :text-option="{
          type: 'heading',
          headingHeight: size,
        }"
        class="d-mb4"
        :aria-loading-text="ariaLoadingText"
      />
    </section>

    <section class="d-mb64">
      <p class="d-mb-2">
        Skeleton label variants
      </p>
      <dt-skeleton
        :text-option="{
          type: 'label',
        }"
        :aria-loading-text="ariaLoadingText"
      />
    </section>

    <section class="d-mb64">
      <p class="d-mb8">
        Skeleton paragraphs variants
      </p>
      <section class="d-pl12">
        <p class="d-mb8">
          Default configuration
        </p>
        <dt-skeleton
          :text-option="{ type: 'paragraphs' }"
          class="d-mb8"
          :aria-loading-text="ariaLoadingText"
        />
        <p class="d-mb8">
          Define width for all lines
        </p>
        <dt-skeleton
          :text-option="{
            type: 'paragraphs',
            paragraphs: {
              rows: 3,
              width: ['50%', '18%', '90%'],
            },
          }"
          class="d-mb8"
          :aria-loading-text="ariaLoadingText"
        />
        <p class="d-mb8">
          Define width for first and second lines
        </p>
        <dt-skeleton
          :text-option="{
            type: 'paragraphs',
            paragraphs: {
              rows: 3,
              width: ['50%'],
            },
          }"
          class="d-mb8"
          :aria-loading-text="ariaLoadingText"
        />
        <p>
          Use random-width
        </p>
        <dt-skeleton
          :text-option="{
            type: 'paragraphs',
            paragraphs: {
              rows: 7,
              randomWidth: true,
            },
          }"
          :aria-loading-text="ariaLoadingText"
          class="d-mb8"
        />
        <p>
          Focusable skeleton
        </p>
        <dt-skeleton
          is-focusable
          :text-option="{
            type: 'paragraphs',
            paragraphs: {
              rows: 7,
              randomWidth: true,
              maxWidth: 90,
              minWidth: 10,
            },
          }"
          :aria-loading-text="ariaLoadingText"
          animate
        />
      </section>
    </section>
  </div>
</template>

<script>
import DtSkeletonShape from './skeleton-shape';
import DtSkeleton from './skeleton';

import { SKELETON_WIDTHS, SKELETON_HEADING_HEIGHTS } from './skeleton_constants';

export default {
  name: 'DtSkeletonVariants',
  components: { DtSkeleton, DtSkeletonShape },
  data () {
    return {
      shapeWidths: Object.keys(SKELETON_WIDTHS),
      headingSize: Object.keys(SKELETON_HEADING_HEIGHTS),
      skeletonPageLoaded: false,
    };
  },
};
</script>
