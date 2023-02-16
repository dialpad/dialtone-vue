<template>
  <div class="d-stack16">
    <div>
      <h3 class="d-mb8">
        Channel with unread messages
      </h3>
      <dt-recipe-general-row
        type="channels"
        description="Channel name"
        :unread-count="29"
      />
    </div>
    <div>
      <h3 class="d-mb8">
        Contact Center
      </h3>
      <dt-recipe-general-row
        type="contact center"
        description="Contact Center name"
        color="magenta"
      />
    </div>
    <div>
      <h3 class="d-mb8">
        Dialbot
      </h3>
      <dt-recipe-general-row
        type="dialbot"
        description="Dialbot"
      />
    </div>
  </div>
</template>

<script>
import DtRecipeGeneralRow from './general_row';

export default {
  name: 'DtRecipeGeneralRowVariants',
  components: { DtRecipeGeneralRow },
};
</script>
