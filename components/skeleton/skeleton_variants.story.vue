<!-- Use this template story to allow the user control the component's props and slots -->
<template>
  <div>
    Default empty a11y wrapper, without any props
    <dt-skeleton aria-loading-text="ariaLoadingText" />
    <br>

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
      aria-loading-text="ariaLoadingText"
    >
      <template #list-item>
        <dt-skeleton-shape
          size="2xl"
          shape="rectangle"
          class="d-mt12"
          aria-loading-text="ariaLoadingText"
        />
      </template>
    </dt-skeleton>

    <div class="d-mb16" />
    skeleton Prop(:shape-option="{size: {{ shapeWidths.join(' | ') }},  shape: 'circle' }
    <dt-skeleton
      v-for="size in shapeWidths"
      :key="`${size}-circle`"
      :shape-option="{
        size,
        shape: 'circle',
      }"
      class="d-mb4"
      aria-loading-text="ariaLoadingText"
    />
    skeleton Prop(:shape-option="{size: {{ shapeWidths.join(' | ') }},  shape: 'square' }
    <dt-skeleton
      v-for="size in shapeWidths"
      :key="`${size}-square`"
      :shape-option="{
        size,
        shape: 'square',
      }"
      class="d-mb4"
      aria-loading-text="ariaLoadingText"
    />
    skeleton Prop(:shape-option="{size: {{ shapeWidths.join(' | ') }},  shape: 'rectangle' }
    <dt-skeleton
      v-for="size in shapeWidths"
      :key="`${size}-rectangle`"
      :shape-option="{
        size,
        shape: 'rectangle',
      }"
      class="d-mb4"
      aria-loading-text="ariaLoadingText"
    />

    skeleton Prop(:shape-option="{size: {{ shapeWidths.join(' | ') }},  shape: 'pill' }
    <dt-skeleton
      v-for="size in shapeWidths"
      :key="`${size}-pill`"
      :shape-option="{
        size,
        shape: 'pill',
      }"
      class="d-mb4"
      aria-loading-text="ariaLoadingText"
    />

    <div class="d-mb4">
      Heading
    </div>

    skeleton Prop(:text-option="{headingHeight: {{ headingSize.join(' | ') }},
    type: 'heading'

    <dt-skeleton
      v-for="size in headingSize"
      :key="`${size}-heading`"
      :text-option="{
        type: 'heading',
        headingHeight: size,
      }"
      class="d-mb4"
      aria-loading-text="ariaLoadingText"
    />
    <br>
    Label
    <dt-skeleton
      :text-option="{
        type: 'label',
      }"
      class="d-mb4"
      aria-loading-text="ariaLoadingText"
    />

    skeleton Prop(:text-option="{type: 'paragraphs'}
    <dt-skeleton
      :text-option="{ type: 'paragraphs' }"
      class="d-mb4"
      aria-loading-text="ariaLoadingText"
    />
    <div class="d-mb4">
      Paragraphs: With width for all lines
    </div>
    skeleton Prop(:text-option="{type: 'paragraphs', paragraphs: {
    rows: 3,
    width: ['50%', '18%', '90%'],
    }}}
    <dt-skeleton
      :text-option="{
        type: 'paragraphs',
        paragraphs: {
          rows: 3,
          width: ['50%', '18%', '90%'],
        },
      }"
      class="d-mb4"
      aria-loading-text="ariaLoadingText"
    />
    <div class="d-mb4">
      Paragraphs: With width for first and second lines
    </div>
    skeleton Prop(:text-option="{type: 'paragraphs', paragraphs: {
    rows: 3,
    width: ['50%'],
    }}}
    default: 100%;
    last row = '38%'

    <dt-skeleton
      :text-option="{
        type: 'paragraphs',
        paragraphs: {
          rows: 3,
          width: ['50%'],
        },
      }"
      class="d-mb4"
      aria-loading-text="ariaLoadingText"
    />
    <div class="d-mb4">
      Paragraphs: With random-width
    </div>
    skeleton Prop(:text-option="{type: 'paragraphs', paragraphs: {
    rows: 7,
    randomWidth: true,
    }}}

    <dt-skeleton
      :text-option="{
        type: 'paragraphs',
        paragraphs: {
          rows: 7,
          randomWidth: true,
        },
      }"
      aria-loading-text="ariaLoadingText"
      class="d-mb4"
    />
    <div class="d-mb4">
      Paragraphs: With random-width and max/min
    </div>

    skeleton Prop(:text-option="{type: 'paragraphs', rows: 7, paragraphs: {
    rows: 7,
    randomWidth: true,
    maxWidth: 90,
    minWidth: 10,
    }}}
    <dt-skeleton
      :text-option="{
        type: 'paragraphs',
        paragraphs: {
          rows: 7,
          randomWidth: true,
          maxWidth: 90,
          minWidth: 10,
        },
      }"
      aria-loading-text="ariaLoadingText"
      class="d-mb4"
      animate
    />
    <br>
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
