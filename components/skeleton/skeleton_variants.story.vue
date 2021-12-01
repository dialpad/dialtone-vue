<template>
  <div>
    <section class="d-mb64">
      <p class="d-mb8">
        Default and empty skeleton variant
      </p>
      <dt-button
        class="d-mb16"
        @click="loading = !loading"
      >
        Toggle loading
      </dt-button>

      <dt-skeleton
        v-if="loading"
        :screen-reader-text="screenReaderText"
        :offset="0.5"
      />
      <p v-else>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ea, eligendi explicabo
      </p>
    </section>

    <section class="d-mb64">
      <p class="d-mb8">
        Default and empty skeleton variant
      </p>
      <dt-skeleton
        :screen-reader-text="screenReaderText"
        :offset="0.5"
      />
    </section>

    <section class="d-mb64">
      <p class="d-mb8">
        Configurable skeleton with props and slot variant (paragraphs with randomWidth, maxWidth, minWidth)
      </p>
      <dt-skeleton
        :offset="0.6"
        :list-item-option="{
          shapeSize: 'md',
          paragraphs: {
            rows: 3,
            randomWidth: true,
            maxWidth: 40,
            minWidth: 10,
          },
        }"
        :screen-reader-text="screenReaderText"
      >
        <template #list-item>
          <dt-skeleton-shape
            :offset="0.7"
            size="2xl"
            shape="rectangle"
            class="d-mt12"
            :screen-reader-text="screenReaderText"
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
          :screen-reader-text="screenReaderText"
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
          :screen-reader-text="screenReaderText"
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
          :screen-reader-text="screenReaderText"
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
          :screen-reader-text="screenReaderText"
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
        :screen-reader-text="screenReaderText"
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
        :screen-reader-text="screenReaderText"
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
          paragraph-option
          class="d-mb8"
          :screen-reader-text="screenReaderText"
        />
        <p class="d-mb8">
          Define width for all lines
        </p>
        <dt-skeleton
          :paragraph-option="{
            rows: 3,
            width: ['50%', '18%', '90%'],
          }"
          class="d-mb8"
          :screen-reader-text="screenReaderText"
        />
        <p class="d-mb8">
          Define width for first and second lines
        </p>
        <dt-skeleton
          :paragraph-option="{
            rows: 3,
            width: ['50%'],
          }"
          class="d-mb8"
          :screen-reader-text="screenReaderText"
        />
        <p>
          Use random-width
        </p>
        <dt-skeleton
          :paragraph-option="{
            rows: 7,
            randomWidth: true,
          }"
          :screen-reader-text="screenReaderText"
          class="d-mb8"
        />
      </section>
    </section>
  </div>
</template>

<script>
import DtSkeletonShape from './skeleton-shape';
import DtSkeleton from './skeleton';
import { DtButton } from '../button';

import { SKELETON_WIDTHS, SKELETON_HEADING_HEIGHTS } from './skeleton_constants';

export default {
  name: 'DtSkeletonVariants',
  components: { DtSkeleton, DtSkeletonShape, DtButton },
  data () {
    return {
      shapeWidths: Object.keys(SKELETON_WIDTHS),
      headingSize: Object.keys(SKELETON_HEADING_HEIGHTS),
      skeletonPageLoaded: false,
      loading: true,
    };
  },
};
</script>
