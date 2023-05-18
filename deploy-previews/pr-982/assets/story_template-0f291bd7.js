import{j as e}from"./jsx-dev-runtime-93abbde5.js";import{M as s}from"./index-7560b362.js";import{u as r}from"./index-cc66429f.js";import"./iframe-9bfffbbd.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";function o(n){const t=Object.assign({h1:"h1",pre:"pre",code:"code"},r(),n.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(s,{title:"Docs/Templates/Stories"},void 0,!1,{fileName:"<source.js>",lineNumber:3,columnNumber:1},this),`
`,e.jsxDEV(t.h1,{id:"stories-template",children:"Stories Template"},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(t.pre,{children:e.jsxDEV(t.code,{className:"language-jsx",children:`import { action } from '@storybook/addon-actions';
import { createTemplateFromVueFile } from '@/common/storybook_utils';
import DtMyComponent from './my_component.vue';
import MyComponentMdx from './my_component.mdx';
import MyComponentDefaultTemplate from './my_component_default.story.vue';
import MyComponentVariantsTemplate from './my_component_variants.story.vue';

// Default Prop Values
export const argsData = {
  some: 'prop',
  onEvent: action('event'),
};

/**
 * example prop description decorator
 */

/*
  Controls
  ========

  Here we define any custom controls or control overrides for our components.

  By default storybook will attempt to provide an appropriate control of the same name for each property in the
  component as well as include any description provided using a prop decorator within your component (see above).

  Storybook will also attempt to provide an appropriate control for each slot in the component as well as include any
  description provided using a slot decorator within your component (see below).

  <!-- @slot example slot decorator -->
*/
export const argTypesData = {
  // Props
  'v-model': {
    description: 'Supported by this component',
    // remove control
    control: null,
  },
  some: {
    description: 'Describes the some prop',
    table: {
      category: 'props',
      type: {
        summary: 'string',
      },
    },
    control: {
      type: 'text',
    },
  },

  // Slots
  default: {
    control: 'text',
    table: {
      type: {
        summary: 'text/html',
      },
    },
  },
  /*
    We use the following naming scheme \`<SLOT_NAME>Slot\` for slot controls to prevent conflicts with props that share
    the same name. We provide the correct name of the slot using the name control attribute to ensure that the argument
    table and description within the controls accurately reflects the correct names of our component's props and slots.
  */
  someSlot: {
    name: 'some',
    description: 'Slot for some',
    control: 'text',
    table: {
      category: 'slots',
      type: {
        summary: 'text/html',
      },
    },
  },

  // Action Event Handlers
  onEvent: {
    table: {
      disable: true,
    },
  },
};

// Story Collection
export default {
  title: 'Group/MyComponent',
  component: DtMyComponent,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      page: MyComponentMdx,
    },
  },
};

// Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  MyComponentDefaultTemplate,
);
const VariantsTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  MyComponentVariantsTemplate,
);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {};

export const Variants = VariantsTemplate.bind({});
Variants.args = {};
`},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function g(n={}){const{wrapper:t}=Object.assign({},r(),n.components);return t?e.jsxDEV(t,Object.assign({},n,{children:e.jsxDEV(o,n,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):o(n)}export{g as default};
//# sourceMappingURL=story_template-0f291bd7.js.map
