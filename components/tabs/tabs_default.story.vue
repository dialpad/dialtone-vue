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
        <dt-tab panel-id="2" id="1">
          First
        </dt-tab>
        <dt-tab
          id="3"
          panel-id="4"
          selected
        >
          Second
        </dt-tab>
        <dt-tab
            id="5"
            panel-id="6"
            selected
        >
          Third
        </dt-tab>
      </template>

      <dt-tab-panel tab-id="1" id="2">
        <p> First Panel </p>
      </dt-tab-panel>
      <dt-tab-panel tab-id="3" id="4">
        <p> Second Panel </p>
      </dt-tab-panel>
      <dt-tab-panel tab-id="5" id="6" hidden>
        <p> Third Panel </p>
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
