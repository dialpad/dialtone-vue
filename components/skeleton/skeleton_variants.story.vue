<!-- Use this template story to allow the user control the component's props and slots -->
<template>
  <div>
    avatar (default state of component)
    <dt-skeleton avatar />

    icon
    <dt-skeleton icon />

    avatar + text
    <dt-skeleton
      avatar
      text
    />

    icon + text
    <dt-skeleton
      icon
      text
    />

    text
    <dt-skeleton text />

    text-list
    <dt-skeleton :text-list="4" />

    text-list icon
    <dt-skeleton
      icon
      :text-list="4"
    />

    text-list avatar
    <dt-skeleton
      avatar
      :text-list="4"
    />

    text-list avatar paragraph
    <dt-skeleton
      avatar
      paragraph
      :text-list="4"
      avatar-size="md"
    />

    paragraph
    <dt-skeleton paragraph />

    text-list avatar paragraph
    <dt-skeleton
      avatar
      paragraph
      :text-list="4"
      :paragraphs="{
        rows: 3,
        randomWidth: true,
        maxWidth: 40,
        minWidth: 10,
      }"
      avatar-size="md"
    >
      <template #default="{ item }">
        <dt-skeleton-shape
          v-if="item.row === item.list"
          size="2xl"
          shape="rectangle"
          class="d-mt12"
        />
      </template>
    </dt-skeleton>

    <div class="d-mb16" />
    <dt-skeleton-shape
      v-for="size in shapeWidths"
      :key="`${size}-circle`"
      :size="size"
      shape="circle"
      class="d-mb4"
    />
    <dt-skeleton-shape
      v-for="size in shapeWidths"
      :key="`${size}-square`"
      :size="size"
      shape="square"
      class="d-mb4"
    />
    <dt-skeleton-shape
      v-for="size in shapeWidths"
      :key="`${size}-rectangle`"
      :size="size"
      shape="rectangle"
      class="d-mb4"
    />
    <dt-skeleton-shape
      v-for="size in shapeWidths"
      :key="`${size}-pill`"
      :size="size"
      shape="pill"
      class="d-mb4"
    />
    <div class="d-mb4">
      Label
    </div>
    <dt-skeleton-text
      type="label"
      class="d-mb4"
      width="80px"
    />
    <div class="d-mb4">
      Heading
    </div>
    <dt-skeleton-text
      v-for="size in headingSize"
      :key="`${size}-heading`"
      :heading-height="size"
      type="heading"
      class="d-mb4"
      width="300px"
    />
    <div class="d-mb4">
      Paragraphs
    </div>
    <div class="d-mb4">
      Paragraphs: Default
    </div>
    <dt-skeleton-text
      type="paragraphs"
      class="d-mb4"
    />
    <div class="d-mb4">
      Paragraphs: With width for all lines
    </div>
    <dt-skeleton-text
      type="paragraphs"
      class="d-mb4"
      :paragraphs="{
        rows: 3,
        width: ['50%', '18%', '90%'],
      }"
    />
    <div class="d-mb4">
      Paragraphs: With width for first and second lines
    </div>
    <dt-skeleton-text
      type="paragraphs"
      class="d-mb4"
      :paragraphs="{
        rows: 3,
        width: ['50%', '18%'],
      }"
    />
    <div class="d-mb4">
      Paragraphs: With random-width
    </div>
    <dt-skeleton-text
      type="paragraphs"
      class="d-mb4"
      :paragraphs="{
        rows: 7,
        randomWidth: true,
      }"
    />
    <div class="d-mb4">
      Paragraphs: With random-width and max/min
    </div>
    <dt-skeleton-text
      type="paragraphs"
      class="d-mb4"
      :paragraphs="{
        rows: 7,
        randomWidth: true,
        maxWidth: 90,
        minWidth: 10,
      }"
    />
  </div>
</template>

<script>
import DtSkeletonShape from './skeleton-shape';
import DtSkeletonText from './skeleton-text';
import DtSkeleton from './skeleton';

import { SKELETON_WIDTHS, SKELETON_HEADING_HEIGHTS } from './skeleton_constants';

export default {
  name: 'DtSkeletonVariants',
  components: { DtSkeletonText, DtSkeletonShape, DtSkeleton },
  data () {
    return {
      shapeWidths: Object.keys(SKELETON_WIDTHS),
      headingSize: Object.keys(SKELETON_HEADING_HEIGHTS),
    };
  },
};
</script>
