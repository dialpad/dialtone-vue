<template>
  <div>
    <h2 class="d-mb32">
      Prefabricated shapes
    </h2>
    <section class="d-mb64 d-d-flex">
      <div class="d-p4 d-fl1 d-w25p">
        <h3>Avatars</h3>
        <p class="d-mb24">
          Default sizes matches avatar.
          Size is customizable when needed.
        </p>
        <p>S (24x24px)</p>
        <dt-skeleton
          :shape-option="{
            size: 'sm',
            shape: 'circle',
          }"
          :animate="$attrs.animate"
          class="d-mb24"
          :aria-label="$attrs.ariaLabel"
        />
        <p>M (32x32px)</p>
        <dt-skeleton
          :shape-option="{
            shape: 'circle',
          }"
          :animate="$attrs.animate"
          class="d-mb24"
          :aria-label="$attrs.ariaLabel"
        />
        <p>L (48x48px)</p>
        <dt-skeleton
          :shape-option="{
            size: 'lg',
            shape: 'circle',
          }"
          :animate="$attrs.animate"
          :aria-label="$attrs.ariaLabel"
        />
      </div>
      <div class="d-p4 d-fl1 d-w25p">
        <h3>Image / Icon</h3>
        <p class="d-mb24">
          Size is customizable.
        </p>
        <dt-skeleton
          :shape-option="{
            shape: 'square',
          }"
          :animate="$attrs.animate"
          class="d-mb24"
          :aria-label="$attrs.ariaLabel"
        />
      </div>
      <div class="d-p4 d-fl1 d-w25p">
        <h3>Text: Body</h3>
        <p class="d-mb24" />
        <dt-skeleton
          :aria-label="$attrs.ariaLabel"
          :animate="$attrs.animate"
          :text-option="{
            width: '120px',
          }"
          :offset="0.5"
        />
      </div>
      <div class="d-p4 d-fl1 d-w25p">
        <h3>Text: Headings</h3>
        <p class="d-mb24">
          Line-lengths is customizable.
        </p>
        <p>S (height: 16px)</p>
        <dt-skeleton
          :text-option="{
            type: 'heading',
            width: '160px',
            headingHeight: 'sm',
          }"
          :animate="$attrs.animate"
          class="d-mb24"
          :aria-label="$attrs.ariaLabel"
        />
        <p>M (height: 24px)</p>
        <dt-skeleton
          :text-option="{
            type: 'heading',
            headingHeight: 'md',
            width: '240px',
          }"
          :animate="$attrs.animate"
          class="d-mb24"
          :aria-label="$attrs.ariaLabel"
        />
        <p>L (height: 32px)</p>
        <dt-skeleton
          :text-option="{
            type: 'heading',
            headingHeight: 'lg',
            width: '320px',
          }"
          :animate="$attrs.animate"
          :aria-label="$attrs.ariaLabel"
        />
      </div>
    </section>
    <h2 class="d-mb32">
      Prefabricated combinations
    </h2>
    <section class="d-mb64 d-d-flex">
      <div class="d-p4 d-fl1 d-w50p">
        <h3>Text List</h3>
        <p class="d-mb24" />
        <dt-skeleton
          :aria-label="$attrs.ariaLabel"
          :text-option="{
            width: '120px',
          }"
          :animate="$attrs.animate"
          :offset="0.5"
          class="d-mb16"
        />
        <dt-skeleton
          :aria-label="$attrs.ariaLabel"
          :text-option="{
            width: '120px',
          }"
          :animate="$attrs.animate"
          :offset="0.5"
          class="d-mb16"
        />
        <dt-skeleton
          :aria-label="$attrs.ariaLabel"
          :text-option="{
            width: '120px',
          }"
          :animate="$attrs.animate"
          :offset="0.5"
          class="d-mb16"
        />
        <dt-skeleton
          :aria-label="$attrs.ariaLabel"
          :text-option="{
            width: '120px',
          }"
          :animate="$attrs.animate"
          :offset="0.5"
          class="d-mb16"
        />

        <h3 class="d-pt16">
          Avatar + Name
        </h3>
        <p class="d-mb24" />

        <dt-skeleton
          :offset="0.6"
          :list-item-option="{
            shapeSize: 'sm',
            paragraphs: {
              rows: 1,
            },
          }"
          :animate="$attrs.animate"
          :aria-label="$attrs.ariaLabel"
        />

        <h3 class="d-pt16">
          Icon + Text
        </h3>
        <p class="d-mb24" />

        <dt-skeleton
          :offset="0.6"
          :list-item-option="{
            shapeSize: '2rem',
            shape: 'square',
            paragraphs: {
              rows: 1,
            },
          }"
          :animate="$attrs.animate"
          :aria-label="$attrs.ariaLabel"
        />
        <h3 class="d-pt16">
          Messages / Transcript / Comment
        </h3>
        <p class="d-mb24" />
        <dt-skeleton
          :offset="0.6"
          :list-item-option="{
            shapeSize: '3.6rem',
            paragraphs: {
              rows: 4,
              width: [
                '120px', '311px', '371px', '279px',
              ],
            },
          }"
          :animate="$attrs.animate"
          :aria-label="$attrs.ariaLabel"
        />
      </div>
      <div class="d-p4 d-fl1 d-w50p">
        <h3>Text: Paragraphs</h3>
        <p class="d-mb24">
          Line-lengths and amount of lines are customizable.
        </p>
        <dt-skeleton
          :paragraph-option="{
            rows: 5,
            randomWidth: false,
          }"
          :animate="$attrs.animate"
          :aria-label="$attrs.ariaLabel"
          :offset="0.5"
        />
      </div>
    </section>
  </div>
</template>

<script>
import DtSkeleton from './skeleton.vue';

import { SKELETON_HEADING_HEIGHTS } from './skeleton_constants';

export default {
  name: 'DtSkeletonVariants',
  components: { DtSkeleton },
  data () {
    return {
      headingSize: Object.keys(SKELETON_HEADING_HEIGHTS),
      loading: true,
    };
  },
};
</script>
