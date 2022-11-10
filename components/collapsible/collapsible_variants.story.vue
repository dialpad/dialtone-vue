<template>
  <div>
    <dt-collapsible
      anchor-text="With Unreads"
      content-element-type="ol"
      class="d-p0 d-w100p"
      @opened="onOpenUpdate"
    >
      <template #contentOnExpanded>
        <li
          v-for="item in items"
          :key="item"
        >
          {{ item }}
        </li>
      </template>
      <template #contentOnCollapsed>
        <li
          v-for="item in unreadItems"
          :key="item"
        >
          {{ item }}
        </li>
      </template>
    </dt-collapsible>
    <dt-collapsible
      anchor-text="Without Unread Items"
      content-element-type="ol"
      class="d-p0 d-w100p"
      @opened="onOpenUpdate"
    >
      <template #contentOnExpanded>
        <li
          v-for="datum in items"
          :key="datum"
        >
          {{ datum }}
        </li>
      </template>
    </dt-collapsible>
  </div>
</template>

<script>
import DtCollapsible from './collapsible';

export default {
  name: 'DtCollapsibleDefaultStory',

  components: {
    DtCollapsible,
  },

  data () {
    return {
      isOpen: true,
      items: [
        'Hello',
        'World',
        'Item',
      ],
    };
  },

  computed: {
    unreadItems () {
      return ['Unread Item'];
    },
  },

  methods: {
    onOpenUpdate (shouldBeOpen) {
      console.log('onOpenUpdate', shouldBeOpen);
    },
  },
};
</script>
