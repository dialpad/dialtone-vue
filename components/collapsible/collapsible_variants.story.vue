<!-- eslint-disable vue/no-v-model-argument -->
<template>
  <div class="d-d-flex ">
    <div>
      <p>Favorites Collapsible is open: {{ isFavoritesExpanded }}</p>
      <dt-collapsible
        v-model:open="isFavoritesExpanded"
        anchor-text="Favorites"
        aria-label="Favorites, click to expand or collapse"
        content-element-type="ol"
        class="d-p0 d-w100p"
      >
        <template #contentOnExpanded>
          <li
            v-for="item in items"
            :key="item.name"
          >
            {{ item.name }}
          </li>
        </template>
        <template #contentOnCollapsed>
          <li
            v-for="item in unreadItems"
            :key="item.name"
          >
            {{ item.name }}
          </li>
        </template>
      </dt-collapsible>
    </div>
    <div class="d-ml8">
      <dt-button @click="toggleRecentsCollapsible">
        Click to Toggle Recents Collapsible
      </dt-button>
      <dt-collapsible
        :open="isRecentsExpanded"
        anchor-text="Recents"
        aria-label="Recents, click to expand or collapse"
        content-element-type="ol"
        class="d-p0 d-w100p"
      >
        <template #contentOnExpanded>
          <li
            v-for="item in items"
            :key="item.name"
          >
            {{ item.name }}
          </li>
        </template>
        <template #contentOnCollapsed>
          <li
            v-for="item in unreadItems"
            :key="item.name"
          >
            {{ item.name }}
          </li>
        </template>
      </dt-collapsible>
    </div>
  </div>
</template>

<script>
import DtCollapsible from './collapsible';
import { DtButton } from '../button';
export default {
  name: 'DtCollapsibleVariantsStory',

  components: {
    DtCollapsible,
    DtButton,
  },

  data () {
    return {
      isFavoritesExpanded: true,
      isRecentsExpanded: true,
      items: [
        {
          name: 'Item 1',
          unread: false,
        },
        {
          name: 'Item 2',
          unread: false,
        },
        {
          name: 'Unread Item 3',
          unread: true,
        },
      ],
    };
  },

  computed: {
    unreadItems () {
      return this.items.filter(item => item.unread);
    },
  },

  methods: {
    toggleRecentsCollapsible () {
      this.isRecentsExpanded = !this.isRecentsExpanded;
    },
  },
};
</script>
