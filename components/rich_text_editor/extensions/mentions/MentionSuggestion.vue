<template>
  <div class="dt-mention-suggestion">
    <dt-avatar
      :full-name="name"
      :image-src="avatarSrc"
      size="xs"
    />
    <div class="dt-mention-suggestion---text">
      {{ name }}
    </div>
  </div>
</template>

<script>
import DtAvatar from '@/components/avatar/avatar.vue';

export default {
  name: 'MentionSuggestion',
  components: {
    DtAvatar,
  },

  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  computed: {
    name () {
      return this.item.name;
    },

    avatarSrc () {
      return this.item.avatarSrc;
    },
  },
};
</script>

<style>
.dt-mention-suggestion {
  display: flex;
}
.dt-mention-suggestion---text {
  margin-left: var(--dt-size-350);
}
</style>
