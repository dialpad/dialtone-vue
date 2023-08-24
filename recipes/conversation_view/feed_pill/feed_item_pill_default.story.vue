<template>
  <dt-recipe-feed-item-pill
    class="d-w464"
    :icon-name="iconName"
    :title="title"
    :expanded="isExpanded"
    :wrapper-class="wrapperClass"
    :aria-label="ariaLabel"
    @click="isExpanded = !isExpanded"
  >
    <template #subtitle>
      Last 43 minutes - Ended at 5:04pm
    </template>
    <template #bottom>
      <span class="d-fc-tertiary d-fs-100">8 people joined</span>
    </template>
    <template #right>
      <div class="d-pr16">
        <dt-button
          aria-label="Open external link"
          kind="muted"
          importance="clear"
          @click.stop=""
        >
          <template slot="icon">
            <dt-icon
              name="external-link"
              size="200"
            />
          </template>
        </dt-button>
      </div>
    </template>
    <template #content>
      <span class="d-p16">
        The agent from Dialpad called to follow up on a support ticket
        that Jeff was handling for them regarding Dialpad CTI. They apologized
        for calling outside of the requested time and expressed that they had
        asked the team to look into the issue and would email them after the call.
      </span>
    </template>
  </dt-recipe-feed-item-pill>
</template>

<script>
import { DtIcon } from '@/components/icon';
import { DtButton } from '@/components/button';
import DtRecipeFeedItemPill from './feed_item_pill.vue';

export default {
  name: 'DtRecipeFeedItemPillDefault',
  components: { DtRecipeFeedItemPill, DtButton, DtIcon },
  props: {
    iconName: {
      type: String,
      default: 'video',
    },

    title: {
      type: String,
      default: 'Title',
    },

    expanded: {
      type: Boolean,
      default: false,
    },

    wrapperClass: {
      type: String,
      default: 'd-p2 d-bgg-to-br d-bgg-from-purple-400 d-bgg-to-magenta-300',
    },

    ariaLabel: {
      type: String,
      default: 'Click to expand',
    },
  },

  data () {
    return {
      isExpanded: this.expanded | false,
    };
  },

  watch: {
    expanded (isExpanded) {
      this.isExpanded = isExpanded;
    },
  },
};
</script>
