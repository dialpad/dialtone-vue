<template>
  <div id="components-chip--variants-container">
    <!-- No remove button -->
    <dt-chip
      :show-remove-icon="false"
      @close="onClose"
    >
      No remove button
    </dt-chip>

    <!-- With icon -->
    <dt-chip>
      <template slot="icon">
        <icon-dialpad-glyph />
      </template>
      With icon
    </dt-chip>
  </div>
</template>

<script>
import DtChip from './chip';
import IconDialpadGlyph from '@dialpad/dialtone/lib/dist/vue/icons/IconDialpadGlyph';

export default {
  name: 'DtChipVariants',
  components: { DtChip, IconDialpadGlyph },
};
</script>
