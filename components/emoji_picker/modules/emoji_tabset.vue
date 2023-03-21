<template>
  <div class="d-emoji-picker__tabset">
    <dt-tab-group
      tab-list-class="d-emoji-picker__tabset-list"
    >
      <template #tabs>
        <dt-tab
          v-for="tab in tabs"
          :id="tab.id"
          :panel-id="tab.panelId"
          :selected="tab.selected"
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
});

const emits = defineEmits([
  /**
   * Emitted when a tab is selected
   * @event selected-tabset
   * @param {String} tabName - The name of the tab that was selected
   */
  'selected-tabset',
]);

const tabs = [
  { id: '1', panelId: '1', selected: true, label: 'Recently used', icon: 'clock' },
  { id: '2', panelId: '2', label: 'Custom', icon: 'Asterisk' },
  { id: '3', panelId: '3', label: 'Smiley’s and people', icon: 'satisfied' },
  { id: '4', panelId: '4', label: 'Nature', icon: 'living-thing' },
  { id: '5', panelId: '5', label: 'Food', icon: 'food' },
  { id: '6', panelId: '6', label: 'Activity', icon: 'Asterisk' },
  { id: '7', panelId: '7', label: 'Travel', icon: 'Asterisk' },
  { id: '8', panelId: '8', label: 'Objects', icon: 'lightbulb' },
  { id: '9', panelId: '9', label: 'Symbols', icon: 'heart' },
  { id: '10', panelId: '10', label: 'Flags', icon: 'flag' },
];

function selectTabset (tabName) {
  emits('selected-tabset', tabName);
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
