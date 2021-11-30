<!-- Use this template story to allow the user control the component's props and slots -->
<template>
  <div>
    Default empty a11y wrapper, without any props
    <dt-skeleton />
    <br>

    skeleton Prop(:list-option="{ avatar: true }")
    <dt-skeleton :list-option="{ avatar: true }" />

    skeleton Prop(:list-option="{ icon: true }")
    <dt-skeleton :list-option="{ icon: true }" />

    skeleton Prop(:list-option="{ icon: true, text: false })
    <dt-skeleton :list-option="{ icon: true, text: false }" />

    skeleton Prop(:list-option="{ avatar: true, text: false }")
    <dt-skeleton :list-option="{ avatar: true, text: false }" />

    skeleton Prop(:list-option="{ textList: 4 }")
    <dt-skeleton :list-option="{ textList: 4 }" />

    skeleton Prop(:list-option="{ textList: 4, icon: true  }")
    <dt-skeleton :list-option="{ textList: 4, icon: true }" />

    skeleton Prop(:list-option="{ textList: 4, avatar: true  }")
    <dt-skeleton :list-option="{ textList: 4, avatar: true }" />

    skeleton Prop(:list-option="{ textList: 4, avatar: true, paragraph: true, avatarSize: 'md' }")
    <dt-skeleton :list-option="{ textList: 4, avatar: true, paragraph: true, avatarSize: 'md' }" />

    skeleton Prop(:text-option="{ paragraph: true }")
    <dt-skeleton :text-option="{ paragraph: true }" />

    skeleton Prop(:list-option="{
    textList: 4,
    avatar: true,
    paragraph: true,
    avatarSize: 'md',
    paragraphs: {
    rows: 3,
    randomWidth: true,
    maxWidth: 40,
    minWidth: 10,
    },
    }")
    <dt-skeleton
      :list-option="{
        textList: 4,
        avatar: true,
        paragraph: true,
        avatarSize: 'md',
        paragraphs: {
          rows: 3,
          randomWidth: true,
          maxWidth: 40,
          minWidth: 10,
        },
      }"
    />

    skeleton Prop(:list-option="{
    textList: 4,
    avatar: true,
    paragraph: true,
    avatarSize: 'md',
    paragraphs: {
    rows: 3,
    randomWidth: true,
    maxWidth: 40,
    minWidth: 10,
    },
    <br>
    scoped slot <code> {{ `#list="{ item }"` }} </code>
    <dt-skeleton
      :list-option="{
        textList: 4,
        avatar: true,
        paragraph: true,
        avatarSize: 'md',
        paragraphs: {
          rows: 3,
          randomWidth: true,
          maxWidth: 40,
          minWidth: 10,
        },
      }"
    >
      <template #list="{ item }">
        <dt-skeleton-shape
          v-if="item.row === item.list"
          size="2xl"
          shape="rectangle"
          class="d-mt12"
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
    />

    <div class="d-mb4">
      Heading
    </div>

    skeleton Prop(:text-option="{headingHeight: {{ headingSize.join(' | ') }},
    type: 'heading',  textWidth: "300px" (default 100%) }

    <dt-skeleton
      v-for="size in headingSize"
      :key="`${size}-heading`"
      :text-option="{
        type: 'heading',
        textWidth: '300px',
        headingHeight: size,
      }"
      class="d-mb4"
    />
    skeleton Prop(:text-option="{type: 'paragraphs'}
    <dt-skeleton
      :text-option="{ type: 'paragraphs' }"
      class="d-mb4"
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
      class="d-mb4"
    />

    skeleton with slot="content"
    :shape-option="{
    shape: 'pill',
    size: 'md',
    }"
    <dt-skeleton
      :shape-option="{
        shape: 'pill',
        size: 'md',
      }"
    >
      <template #content>
        <dt-button>
          Button
        </dt-button>
      </template>
    </dt-skeleton>

    <dt-skeleton
      class="d-w100p"
    />
    <br>
  </div>
</template>

<script>
import DtSkeletonShape from './skeleton-shape';
import DtSkeleton from './skeleton';

import { SKELETON_WIDTHS, SKELETON_HEADING_HEIGHTS } from './skeleton_constants';
import DtButton from '../button/button';

export default {
  name: 'DtSkeletonVariants',
  components: { DtButton, DtSkeleton, DtSkeletonShape },
  data () {
    return {
      shapeWidths: Object.keys(SKELETON_WIDTHS),
      headingSize: Object.keys(SKELETON_HEADING_HEIGHTS),
      skeletonPageLoaded: false,
    };
  },
};
</script>
