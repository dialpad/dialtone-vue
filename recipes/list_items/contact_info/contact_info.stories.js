import { action } from '@storybook/addon-actions';
import { createTemplateFromVueFile } from '@/common/storybook_utils';
import DtRecipeContactInfo from './contact_info';
import DtRecipeContactInfoMdx from './contact_info.mdx';
import DtRecipeContactInfoDefaultTemplate from './contact_info_default.story.vue';
import DtRecipeContactInfoVariantsTemplate from './contact_info_variants.story.vue';
import { USER_STATUS_COLOR_MODIFIERS } from './contact_info_constants.js';
import { AVATAR_COLOR_MODIFIERS } from '@';

// Default Prop Values
export const argsData = {
  displayName: 'prop',
  onClick: action('click'),
};

export const argTypesData = {
  // Props
  id: {
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'generated unique ID' },
    },
    control: {
      type: 'text',
    },
  },
  role: {
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'listitem' },
    },
    control: {
      type: 'text',
    },
  },

  displayName: {
    control: 'text',
  },

  phoneNumber: {
    control: 'text',
  },

  showAttestation: {
    control: 'boolean',
  },

  avatarSrc: {
    control: 'text',
  },

  avatarInitials: {
    control: 'text',
  },

  avatarColor: {
    control: {
      type: 'select',
    },
    options: Object.keys(AVATAR_COLOR_MODIFIERS),
  },

  userStatusColor: {
    control: {
      type: 'select',
    },
    options: Object.keys(USER_STATUS_COLOR_MODIFIERS),
  },

  groupName: {
    control: 'text',
  },

  groupColorClass: {
    control: 'text',
  },

  // Slots
  header: {
    description: 'Slot for extra header information',
    control: 'text',
    table: {
      category: 'slots',
      type: {
        summary: 'VNode',
      },
    },
  },

  subtitle: {
    description: 'Slot for extra subtitle information',
    control: 'text',
    table: {
      category: 'slots',
      type: {
        summary: 'VNode',
      },
    },
  },

  bottom: {
    description: 'Slot for extra information at the bottom',
    control: 'text',
    table: {
      category: 'slots',
      type: {
        summary: 'VNode',
      },
    },
  },

  right: {
    description: 'Slot for the right content',
    control: 'text',
    table: {
      category: 'slots',
      type: {
        summary: 'VNode',
      },
    },
  },

  // Action Event Handlers
  onClick: {
    table: {
      disable: true,
    },
  },

  click: {
    description: 'Click event fired when clicking on the item',
    table: {
      type: { summary: 'event' },
    },
  },
};

// Story Collection
export default {
  title: 'Recipes/List Items/Contact Info',
  component: DtRecipeContactInfo,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      page: DtRecipeContactInfoMdx,
    },
    controls: {
      sort: 'requiredFirst',
    },
    options: { showPanel: true },
  },
};

// Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtRecipeContactInfoDefaultTemplate,
);
const VariantsTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtRecipeContactInfoVariantsTemplate,
);

const avatarImage = require('./avatar.png');

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {
  displayName: 'Joseph Lumaban',
  phoneNumber: '+1 (415) 123-4567',
  avatarSrc: avatarImage,
  avatarInitials: 'JL',
  avatarColor: 'base',
  userStatusColor: 'green',
  showAttestation: true,
  groupName: 'Aerolabs Support',
  groupColorClass: 'd-bgc-pink-400',
};

export const Variants = VariantsTemplate.bind({});
Variants.args = {
  displayName: 'Joseph Lumaban',
  phoneNumber: '(415) 555-1234',
  avatarInitials: 'JL',
  avatarColor: 'orange-500',
  userStatusColor: 'yellow',
  showAttestation: true,
  groupName: 'Aerolabs Support',
  groupColorClass: 'd-bgc-yellow-400',
  onMarkAsSpam: action('click: mark this contact as spam'),
  onConnectToARecord: action('click: connect to a record'),
};

Variants.parameters = {
  docs: {
    source: {
      code: `
<div class="d-m32">
  <p class="d-my16 d-ml48 d-fs14 d-fw-bold">Unknown contact (phone number only) with attestation</p>
  <dt-recipe-contact-info
    :phone-number="phoneNumber"
    show-attestation
    @click="onClick"
  >
    <template #subtitle>
      San Francisco, California
    </template>
  </dt-recipe-contact-info>
</div>
<div class="d-m32">
  <p class="d-my16 d-ml48 d-fs14 d-fw-bold">Unknown contact with "marked as spam" button</p>
  <dt-recipe-contact-info
    :phone-number="phoneNumber"
    @click="onClick"
  >
    <template #subtitle>
      <div
        class="d-fc-red-500"
        @click.stop="onMarkAsSpam"
      >
        Mark as spam
      </div>
    </template>
  </dt-recipe-contact-info>
</div>
<div class="d-m32">
  <p class="d-my16 d-ml48 d-fs14 d-fw-bold">Group contact</p>
  <dt-recipe-contact-info
    :display-name="displayName"
    :phone-number="phoneNumber"
    :group-name="groupName"
    :group-color-class="groupColorClass"
    show-attestation
    @click="onClick"
  />
</div>
<div class="d-m32">
  <p class="d-my16 d-ml48 d-fs14 d-fw-bold">Group contact with transfer info</p>
  <dt-recipe-contact-info
    :display-name="displayName"
    :phone-number="phoneNumber"
    :group-name="groupName"
    :group-color-class="groupColorClass"
    show-attestation
    @click="onClick"
  >
    <template #bottom>
      <div class="d-fw-bold d-fs11"> • Transfer from Billing Support</div>
    </template>
  </dt-recipe-contact-info>
</div>
<div class="d-m32">
  <p class="d-my16 d-ml48 d-fs14 d-fw-bold">Admin view / listening in</p>
  <dt-recipe-contact-info
    :display-name="displayName"
    :phone-number="phoneNumber"
    :group-name="groupName"
    :group-color-class="groupColorClass"
    show-attestation
    @click="onClick"
  >
    <template #header>
      <div class="d-fw-bold d-fs16"> & Justin H. </div>
      <div class="d-fs16"> (Agent) </div>
    </template>
  </dt-recipe-contact-info>
</div>
<div class="d-m32">
  <p class="d-my16 d-ml48 d-fs14 d-fw-bold">Contact with items in right slot</p>
  <dt-recipe-contact-info
    :display-name="displayName"
    :phone-number="phoneNumber"
    :avatar-initials="avatarInitials"
    :avatar-color="avatarColor"
    @click="onClick"
  >
    <template #right>
      <div class="d-d-flex d-ai-center d-m16">
        <icon-chat class="d-m4" />
        <icon-menu-horizontal class="d-m4" />
        <div class="d-m4">0:32</div>
      </div>
    </template>
    <template #bottom>
      2 matches found.
      <dt-button 
        link 
        @click.stop="onConnectToARecord"
      >
        Connect to a record 
      </dt-button>
    </template>
  </dt-recipe-contact-info>
</div>
`,
    },
  },
  controls: {
    disable: true,
  },
  actions: {
    disable: true,
  },
  options: {
    showPanel: false,
  },
};
