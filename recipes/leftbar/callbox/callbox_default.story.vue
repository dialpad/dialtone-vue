<template>
  <dt-recipe-callbox
    :badge-text="badgeText"
    :badge-color="badgeColor"
    :avatar-src="avatarSrc"
    :avatar-full-name="avatarFullName"
    :title="title"
    :border-color="borderColor"
  >
    <template #video>
      <div
        v-if="video"
        v-html="video"
      />
    </template>
    <template #badge>
      <span
        v-if="badge"
        v-html="badge"
      />
    </template>
    <template #subtitle>
      <span
        v-if="subtitle"
        v-html="subtitle"
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
        v-if="right"
        v-html="right"
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
