<template>
  <dt-recipe-callbox
    :badge-text="$attrs.badgeText"
    :badge-color="$attrs.badgeColor"
    :avatar-src="$attrs.avatarSrc"
    :avatar-full-name="$attrs.avatarFullName"
    :title="$attrs.title"
    :border-color="$attrs.borderColor"
  >
    <template
      v-if="$attrs.video"
      #video
    >
      <div
        v-html="$attrs.video"
      />
    </template>
    <template
      v-if="$attrs.badge"
      #badge
    >
      <span
        v-html="$attrs.badge"
      />
    </template>
    <template #subtitle>
      <span
        v-if="$attrs.subtitle"
        v-html="$attrs.subtitle"
      />
      <div
        v-else
        class="d-d-flex d-ai-center d-flow4"
      >
        <dt-icon
          name="share-screen"
          size="200"
        />
        <span>06:01</span>
      </div>
    </template>
    <template #right>
      <div
        v-if="$attrs.right"
        v-html="$attrs.right"
      />
      <div v-else>
        <dt-button
          aria-label="toggle dialpad ai"
          circle
          importance="clear"
        >
          <template #icon>
            <dt-icon
              name="dialpad-ai-color"
              size="400"
            />
          </template>
        </dt-button>
        <dt-button
          aria-label="hang call"
          circle
          importance="clear"
        >
          <template #icon>
            <dt-icon
              name="phone-hang-up"
              class="d-fc-critical"
              size="400"
            />
          </template>
        </dt-button>
      </div>
    </template>
    <template
      v-if="bottom"
      #bottom
    >
      <div v-html="bottom" />
    </template>
  </dt-recipe-callbox>
</template>

<script>
import DtRecipeCallbox from './callbox.vue';
import DtIcon from '@/components/icon/icon.vue';
import DtButton from '@/components/button/button.vue';

export default {
  name: 'DtRecipeCallboxDefault',
  components: { DtButton, DtIcon, DtRecipeCallbox },
};
</script>
