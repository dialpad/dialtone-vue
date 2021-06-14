<script>
import { DtAvatar } from './index';

export default {
  /*
  * This component is only for documenting attrs in Storybook docs.
  */
  name: 'DtAvatarDocOnly',

  extends: DtAvatar,

  props: {
    /**
     * Native image src attribute. Overridden by default slot.
     */
    src: {
      type: String,
      default: '',
    },

    /**
     * Native image alt attribute. Overridden by default slot.
     */
    alt: {
      type: String,
      default: '',
    },
  },
};
</script>
