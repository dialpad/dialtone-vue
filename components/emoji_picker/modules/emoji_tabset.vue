<template>
  <div class="d-emoji-picker__tabset">
    <dt-tab-group
      tab-list-class="d-emoji-picker__tabset-list"
      :selected="selectedTab"
    >
      <template #tabs>
        <dt-tab
          v-for="tab in tabs"
          :id="tab.id"
          :key="tab.id"
          :panel-id="tab.panelId"
          :label="tab.label"
          @click="selectTabset(tab.id)"
        >
          <dt-icon
            size="400"
            :name="tab.icon"
          />
        </dt-tab>
      </template>
    </dt-tab-group>
  </div>
</template>

<script setup>
import DtTabGroup from '@/components/tabs/tab_group.vue';
import DtTab from '@/components/tabs/tab.vue';
import DtIcon from '@/components/icon/icon.vue';
import { computed, ref, watch } from 'vue';

const props = defineProps({
  /**
   * Whether to show the recently used tab or not
   * @type {Boolean}
   * @default false
   */
  showRecentlyUsedTab: {
    type: Boolean,
    default: false,
  },

  scrollIntoTab: {
    type: Number,
    required: true,
  },

  isScrollingWithScrollTo: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits([
  /**
   * Emitted when a tab is selected
   * @event selected-tabset
   * @param {String} tabId - The name of the tab that was selected
   */
  'selected-tabset',
]);

const TABS_DATA = [
  { id: '1', panelId: '1', label: 'Recently used', icon: 'clock' },
  { id: '2', panelId: '2', label: 'Smiley’s and people', icon: 'satisfied' },
  { id: '3', panelId: '3', label: 'Nature', icon: 'living-thing' },
  { id: '4', panelId: '4', label: 'Food', icon: 'food' },
  { id: '5', panelId: '5', label: 'Activity', icon: 'Object' },
  { id: '6', panelId: '6', label: 'Travel', icon: 'Asterisk' },
  { id: '7', panelId: '7', label: 'Objects', icon: 'lightbulb' },
  { id: '8', panelId: '8', label: 'Symbols', icon: 'heart' },
  { id: '9', panelId: '9', label: 'Flags', icon: 'flag' },
];

const tabs = computed(() => {
  const tabsData = props.showRecentlyUsedTab ? TABS_DATA : TABS_DATA.slice(1);

  return tabsData.map((tab, index) => ({
    ...tab,
    selected: index === props.scrollIntoTab,
    // TO DO fix it if there is no recently used tab
    // id: index.toString(),
    // panelId: index.toString(),
  }));
});

const selectedTab = ref('1');

watch(() => props.scrollIntoTab,
  () => {
    if (!props.isScrollingWithScrollTo) {
      selectedTab.value = (props.scrollIntoTab + 1).toString();
    }
  });

function selectTabset (id) {
  if (props.isScrollingWithScrollTo) {
    selectedTab.value = id;
  }
  emits('selected-tabset', id);
}
</script>

<style lang="less">
.d-emoji-picker{
  &__tabset-list{
      gap: 0;

      &::after{
        background-color: var(--black-200) !important;
      }

      button{
        padding: var(--su8);

        &.d-tab--selected{
          &::after{
            height: var(--size-300);
          }
        }
    }
  }
}
</style>
