<template>
  <div
    :class="{
      'd-bgc-purple-800': inverted,
    }"
  >
    <dt-tabs
      :size="size"
      :inverted="inverted"
      :borderless="borderless"
      :disabled="disabled"
    >
      <template #tabs>
        <dt-tab panel-id="1">
          First
        </dt-tab>
        <dt-tab
          panel-id="2"
          selected
        >
          Second
        </dt-tab>
      </template>

      <dt-tab-panel tab-id="1">
        <p> First Panel </p>
      </dt-tab-panel>
      <dt-tab-panel tab-id="2">
        <p> Second Panel </p>
      </dt-tab-panel>
    </dt-tabs>
  </div>
</template>

<script>
import DtTabs from './tabs';
import DtTab from './tab';
import DtTabPanel from './tab-panel';

export default {
  name: 'DtTabsDefault',
  components: { DtTabs, DtTab, DtTabPanel },
};
</script>
