<!-- Use this template story to allow the user control the component's props and slots -->
<template>
  <!--
    We can bind the data that the user entered into the storybook controls to props by using a property of the same name
    as the storybook control defined in the corresponding `.story.js` file.
  -->
  <dt-recipe-top-banner-info
    color-code="green400"
  >
    <template #left>
      <span class="d-fw-bold"> Active Call </span>
    </template>
    <span> Caller ID: Aerolabs Support (415) 583-3482 </span>
    <template #right>
      <span class="d-fw-bold"> Recording ON </span>
    </template>
  </dt-recipe-top-banner-info>
</template>

<script>
import DtRecipeTopBannerInfo from './top_banner_info';

export default {
  name: 'DtRecipeTopBannerInfoDefault',
  components: { DtRecipeTopBannerInfo },
};
</script>
