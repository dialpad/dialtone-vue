<template>
  <div class="d-p4 d-bar8 d-bgc-contrast d-fs-200 d-truncate">
    <template v-if="items.length">
      <button
        v-for="(item, index) in items"
        :key="index"
        :class="[
          'd-d-flex',
          'd-mb2',
          'd-bar4',
          'd-d-block',
          'd-ta-left',
          'd-fc-primary-inverted',
          'dt-emoji-list-item',
          'd-bgc-transparent',
          'd-w100p',
          { 'is-selected': index === selectedIndex },
        ]"
        @click="selectItem(index)"
        @keydown.prevent.stop="onKeyDown"
      >
        <dt-emoji
          size="200"
          :code="item"
        />
        <div class="d-ml8 d-ta-center">
          {{ item }}
        </div>
      </button>
    </template>
  </div>
</template>

<script>
import { DtEmoji } from '@/emoji';

export default {
  name: 'EmojiList',
  components: {
    DtEmoji,
  },

  props: {
    items: {
      type: Array,
      required: true,
    },

    command: {
      type: Function,
      required: true,
    },
  },

  data () {
    return {
      selectedIndex: 0,
    };
  },

  watch: {
    items () {
      this.selectedIndex = 0;
    },
  },

  methods: {
    onKeyDown ({ event }) {
      if (event.key === 'ArrowUp') {
        this.upHandler();
        return true;
      }

      if (event.key === 'ArrowDown') {
        this.downHandler();
        return true;
      }

      if (event.key === 'Enter') {
        this.enterHandler();
        return true;
      }

      return false;
    },

    upHandler () {
      this.selectedIndex = ((this.selectedIndex + this.items.length) - 1) % this.items.length;
    },

    downHandler () {
      this.selectedIndex = (this.selectedIndex + 1) % this.items.length;
    },

    enterHandler () {
      this.selectItem(this.selectedIndex);
    },

    selectItem (index) {
      const item = this.items[index];

      if (item) {
        this.command({ code: item });
      }
    },
  },
};
</script>

<style>
.dt-emoji-list-item {
  border: 1px solid transparent;

  &.is-selected {
    border-color: var(--bc-bold);
  }
}
</style>
