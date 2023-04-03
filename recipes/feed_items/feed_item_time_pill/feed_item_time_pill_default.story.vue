<template>
  <dt-recipe-feed-item-time-pill
    :date-time="dateTime"
    :date-time-display="dateTimeDisplay"
  />
</template>

<script>
import DtRecipeFeedItemTimePill from './feed_item_time_pill';

export default {
  name: 'DtRecipeFeedItemTimePillDefault',
  components: { DtRecipeFeedItemTimePill },
};
</script>
