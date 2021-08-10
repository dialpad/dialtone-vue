<template>
  <div class="d-m64">
      <tooltip-tippy
          interactive
          class="d-mt12"
          placement="bottom"
      >
        <template #anchor>
          <dt-button
              importance="outlined"
              kind="default"
          >
            anchor
          </dt-button>
        </template>
        <template #default>
          Content tooltip
        </template>
      </tooltip-tippy>
    </div>
</template>

<script>
import TooltipTippy from './tooltip-tippy';
import { DtButton } from '../button';

export default {
  name: 'TooltipTippyStory',
  components: {
    TooltipTippy,
    DtButton,
  },
};
</script>

<style scoped lang="less">
.tooltip-holder {
  margin: 150px;
}
</style>
