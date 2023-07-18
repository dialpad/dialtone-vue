<template>
  <node-view-wrapper class="d-d-inline-block">
    <dt-emoji :code="node.attrs.code" />
  </node-view-wrapper>
</template>

<script>
import { DtEmoji } from '@/components/emoji';
import { nodeViewProps, NodeViewWrapper } from '@tiptap/vue-3';

export default {
  name: 'ComponentEmoji',

  components: {
    DtEmoji,
    NodeViewWrapper,
  },

  props: nodeViewProps,
};
</script>
