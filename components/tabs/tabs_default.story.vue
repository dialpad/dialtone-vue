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
        <dt-tab
          id="1"
          panel-id="2"
        >
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

      <dt-tab-panel
        id="2"
        tab-id="1"
      >
        <p> First Panel </p>
      </dt-tab-panel>
      <dt-tab-panel
        id="4"
        tab-id="3"
      >
        <p> Second Panel </p>
      </dt-tab-panel>
      <dt-tab-panel
        id="6"
        tab-id="5"
        hidden
      >
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
