import{j as e}from"./jsx-dev-runtime-e6bb1627.js";import{D as i}from"./components-de508db1.js";import{f as o}from"./input.stories-081a1276.js";import{M as l,d as a,e as u}from"./index-30e54919.js";import{u as r}from"./index-48cb4dfa.js";import"./chunk-AY7I2SME-c7b6cf8a.js";import"./storybook_utils-6f4fc6ad.js";import"./vue.esm-eff6e72e.js";import"./_commonjsHelpers-725317a4.js";import"./input-d30fdc8c.js";import"./validation_messages-fea03325.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./input-01dd6775.js";import"./icon-34725557.js";import"./icon_constants-e6ddb045.js";import"./iframe-b15fdce4.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";const{deprecate:m}=__STORYBOOK_MODULE_CLIENT_LOGGER__;m("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.");function t(s){const n=Object.assign({h1:"h1",p:"p",h3:"h3",a:"a",h2:"h2",code:"code",pre:"pre",strong:"strong",h4:"h4"},r(),s.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(l,{title:"Docs/Storybook/Writing Stories"},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"writing-stories",children:"Writing Stories"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"Writing stories for Storybook using the Component Story Format (CSF)"},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"official-docs",children:e.jsxDEV(n.a,{href:"https://storybook.js.org/docs/vue/get-started/introduction",target:"_blank",rel:"nofollow noopener noreferrer",children:"Official Docs"},void 0,!1,{fileName:"<source.js>",lineNumber:11,columnNumber:5},this)},void 0,!1,{fileName:"<source.js>",lineNumber:11,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"what-is-a-story",children:"What is a story?"},void 0,!1,{fileName:"<source.js>",lineNumber:13,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`Stories the are building blocks of Storybook, they represent a snapshot or slice of the
component at a particular state, rendered onto a "playground" or "sandbox" for anyone to interact with.
In turn, we can take these stories and embed them into
`,e.jsxDEV(n.a,{href:"https://github.com/mdx-js/mdx",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDX"},void 0,!1,{fileName:"<source.js>",lineNumber:18,columnNumber:1},this),` files (like the one you're reading right now)
and turn them into living documentation.`]},void 0,!0,{fileName:"<source.js>",lineNumber:15,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["For example, the ",e.jsxDEV(n.code,{children:"WithSuccess"},void 0,!1,{fileName:"<source.js>",lineNumber:21,columnNumber:18},this)," story from ",e.jsxDEV(n.code,{children:"input.stories.js"},void 0,!1,{fileName:"<source.js>",lineNumber:21,columnNumber:43},this)," gets rendered as:"]},void 0,!0,{fileName:"<source.js>",lineNumber:21,columnNumber:1},this),`
`,e.jsxDEV(a,{children:e.jsxDEV(u,{of:o},void 0,!1,{fileName:"<source.js>",lineNumber:24,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:23,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`# input.stories.js
import DtInput from './input';

...

// Template of the story component, this is a harness Vue component that
// wraps the DtInput component
const Template = (args, { argTypes }) => {
  return {
    components: { DtInput },
    template: baseInputTemplate,
    props: Object.keys(argTypes),
    methods: { onInput: action('input') },
  };
};

...

// Snapshotting props
export const WithSuccess = Template.bind({});
WithSuccess.args = {
  messages: [{ message: 'This is a success message', type: 'success' }],
};
`},void 0,!1,{fileName:"<source.js>",lineNumber:27,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:27,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`We can interact with this component as we would in our actual application.
By modifying the `,e.jsxDEV(n.code,{children:"args"},void 0,!1,{fileName:"<source.js>",lineNumber:54,columnNumber:18},this),` property, we can specify any combination of states
for this component.`]},void 0,!0,{fileName:"<source.js>",lineNumber:53,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"component-story-format-and-export-structure",children:"Component Story Format and Export Structure"},void 0,!1,{fileName:"<source.js>",lineNumber:57,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["Storybook automatically parses the ",e.jsxDEV(n.strong,{children:"default"},void 0,!1,{fileName:"<source.js>",lineNumber:59,columnNumber:36},this)," and ",e.jsxDEV(n.strong,{children:"named"},void 0,!1,{fileName:"<source.js>",lineNumber:59,columnNumber:52},this)," exports from every ",e.jsxDEV(n.code,{children:"*.stories.js"},void 0,!1,{fileName:"<source.js>",lineNumber:59,columnNumber:81},this),` file
to generate stories, this is known as the `,e.jsxDEV(n.a,{href:"https://storybook.js.org/docs/react/api/csf",target:"_blank",rel:"nofollow noopener noreferrer",children:"Component Story Format"},void 0,!1,{fileName:"<source.js>",lineNumber:60,columnNumber:43},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:59,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"default-export",children:"Default Export"},void 0,!1,{fileName:"<source.js>",lineNumber:62,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`Default export is where the metadata and configuration for all of the stories contained within
the same `,e.jsxDEV(n.code,{children:"*.stories.js"},void 0,!1,{fileName:"<source.js>",lineNumber:65,columnNumber:10},this)," file are defined. It also provides fields for addon configuration for said stories."]},void 0,!0,{fileName:"<source.js>",lineNumber:64,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`// input.stories.js

import DtInput from './input';

export default {
  title: 'Forms/Input',
  component: DtInput,
  parameters: { ... },
  decorators: [ ... ],
};
`},void 0,!1,{fileName:"<source.js>",lineNumber:67,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:67,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["Where ",e.jsxDEV(n.a,{href:"https://storybook.js.org/docs/react/writing-stories/parameters",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsxDEV(n.strong,{children:"parameters"},void 0,!1,{fileName:"<source.js>",lineNumber:80,columnNumber:8},this)},void 0,!1,{fileName:"<source.js>",lineNumber:80,columnNumber:7},this),` holds the configuration for
addons and `,e.jsxDEV(n.a,{href:"https://storybook.js.org/docs/react/writing-stories/decorators",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsxDEV(n.strong,{children:"decorators"},void 0,!1,{fileName:"<source.js>",lineNumber:81,columnNumber:13},this)},void 0,!1,{fileName:"<source.js>",lineNumber:81,columnNumber:12},this),` are templates
that wrap our stories.`]},void 0,!0,{fileName:"<source.js>",lineNumber:80,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"named-exports",children:"Named Exports"},void 0,!1,{fileName:"<source.js>",lineNumber:84,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"Named exports are the individual stories that show up in the sidebar of storybooks"},void 0,!1,{fileName:"<source.js>",lineNumber:86,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["When writing stories, it's good practice to create a ",e.jsxDEV(n.code,{children:"Template"},void 0,!1,{fileName:"<source.js>",lineNumber:88,columnNumber:54},this),` variable that is not exported which binds
all of the props, events, and data that we want for all of our stories. It acts as the harness for which our
components are held. The `,e.jsxDEV(n.code,{children:"Template"},void 0,!1,{fileName:"<source.js>",lineNumber:90,columnNumber:26},this),` is reused in each story as named exports and we can simply specify the
`,e.jsxDEV(n.a,{href:"https://storybook.js.org/docs/react/writing-stories/args",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsxDEV(n.strong,{children:"args"},void 0,!1,{fileName:"<source.js>",lineNumber:91,columnNumber:2},this)},void 0,!1,{fileName:"<source.js>",lineNumber:91,columnNumber:1},this)," field to set props."]},void 0,!0,{fileName:"<source.js>",lineNumber:88,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`// input.stories.js

...

const Template = (args, { argTypes }) => {
  return {
    components: { DtInput },
    template: baseInputTemplate,
    props: Object.keys(argTypes),
  };
};

// Dt Input -> Default story
export const Default = Template.bind({});
// Dt Input -> With Warning story
export const WithWarning = Template.bind({});
// Dt Input -> With Error story
export const WithError = Template.bind({});
`},void 0,!1,{fileName:"<source.js>",lineNumber:93,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:93,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"writing-stories-1",children:"Writing Stories"},void 0,!1,{fileName:"<source.js>",lineNumber:114,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"To write stories, we first import the component that we wish to write stories for:"},void 0,!1,{fileName:"<source.js>",lineNumber:116,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`// input.stories.js
import DtInput from './input';
`},void 0,!1,{fileName:"<source.js>",lineNumber:118,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:118,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["Then we will define the ",e.jsxDEV(n.code,{children:"Default Export"},void 0,!1,{fileName:"<source.js>",lineNumber:123,columnNumber:25},this)," for the simplest use case (No configuration):"]},void 0,!0,{fileName:"<source.js>",lineNumber:123,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`// input.stories.js
import DtInput from './input';

export default {
  title: 'Forms/Input',
  component: DtInput,
};
`},void 0,!1,{fileName:"<source.js>",lineNumber:125,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:125,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"title-field",children:"Title Field"},void 0,!1,{fileName:"<source.js>",lineNumber:135,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["The ",e.jsxDEV(n.code,{children:"title"},void 0,!1,{fileName:"<source.js>",lineNumber:137,columnNumber:5},this)," field will tell Storybook to put the stories in a category called ",e.jsxDEV(n.code,{children:"Components"},void 0,!1,{fileName:"<source.js>",lineNumber:137,columnNumber:79},this),`.
We can add more levels of nesting by adding more `,e.jsxDEV(n.code,{children:"/"},void 0,!1,{fileName:"<source.js>",lineNumber:138,columnNumber:50},this),"."]},void 0,!0,{fileName:"<source.js>",lineNumber:137,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["For example, ",e.jsxDEV(n.code,{children:"Component/Folder/Input"},void 0,!1,{fileName:"<source.js>",lineNumber:140,columnNumber:14},this)," will result in the following:"]},void 0,!0,{fileName:"<source.js>",lineNumber:140,columnNumber:1},this),`
`,e.jsxDEV(i,{src:"https://static.dialpadcdn.com/dialtone/naming.png"},void 0,!1,{fileName:"<source.js>",lineNumber:142,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"Nothing will appear yet, this is because we now need to add our named exports."},void 0,!1,{fileName:"<source.js>",lineNumber:144,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"story-template",children:"Story Template"},void 0,!1,{fileName:"<source.js>",lineNumber:146,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"First we will define the harness that will render our component:"},void 0,!1,{fileName:"<source.js>",lineNumber:148,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`// input.stories.js
const Template = () => {
  return {
    components: { DtInput },
    template: <dt-input />,
  };
};
`},void 0,!1,{fileName:"<source.js>",lineNumber:150,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:150,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["Since ",e.jsxDEV(n.code,{children:"Template"},void 0,!1,{fileName:"<source.js>",lineNumber:160,columnNumber:7},this),` returns a Vue component that wraps our component, we need to pass through all of the props
that our component expects so Storybook can interact with our component's internals using its UI:`]},void 0,!0,{fileName:"<source.js>",lineNumber:160,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`// input.stories.js
const Template = () => {
  return {
    components: { DtInput },
    template: <dt-input :name="name" :value="value" ... />,
    props: [name, value ...],
  };
};
`},void 0,!1,{fileName:"<source.js>",lineNumber:163,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:163,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"generatetemplate-helper-method",children:"generateTemplate Helper Method"},void 0,!1,{fileName:"<source.js>",lineNumber:174,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["As you can imagine, depending on the component, this can get quite tedious, luckily, the ",e.jsxDEV(n.code,{children:"Template"},void 0,!1,{fileName:"<source.js>",lineNumber:176,columnNumber:90},this),` method
takes in 2 arguments. We can also use the `,e.jsxDEV(n.code,{children:"generateTemplate"},void 0,!1,{fileName:"<source.js>",lineNumber:177,columnNumber:43},this)," method to bind all props for us:"]},void 0,!0,{fileName:"<source.js>",lineNumber:176,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`// input.stories.js
/**
 * generateTemplate will take a component and generate a template
 * where all of it's props are mapped to values with the same name,
 * the customProps field let's the user pass in additional bindings if desired.
 *
 * So this will generate the string:
 * <dt-input
 *  :name="name"
 *  :type="type"
 *  :value="value"
 *  ...
 *  :placeholder="placeholder",
 * />
 */
const baseInputTemplate = generateTemplate(DtInput, {
  customProps: [
    ':placeholder="placeholder"',
  ],
});

/**
 * argTypes is an object that contains all of the props
 * listed in the component. So we can automatically bind
 * all of the props by simplying using \`props: Object.keys(argTypes)\`
 */
const Template = (args, { argTypes }) => {
  return {
    components: { DtInput },
    template: baseInputTemplate,
    props: Object.keys(argTypes),
  };
};
`},void 0,!1,{fileName:"<source.js>",lineNumber:179,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:179,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"vue-single-file-component-template",children:"Vue Single-File Component Template"},void 0,!1,{fileName:"<source.js>",lineNumber:215,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`Another option is to use an actual Vue Single-File Component as your template. This can be useful if
you are rendering a more complex component and you would prefer to have code highlighting and the ability
to use any of the advanced features of a .vue component. Below is an example usage of this in a stories.js file:`},void 0,!1,{fileName:"<source.js>",lineNumber:217,columnNumber:1},this),`
`,e.jsxDEV(n.h4,{id:"important-notes",children:"Important Notes"},void 0,!1,{fileName:"<source.js>",lineNumber:221,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`In order to address a current storybook bug where props that share the same name as a slot are not displayed in the
sidebar controls we must define the slots controls in `,e.jsxDEV(n.code,{children:"argTypesData"},void 0,!1,{fileName:"<source.js>",lineNumber:224,columnNumber:55},this)," as seen in the example below."]},void 0,!0,{fileName:"<source.js>",lineNumber:223,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`import DtNotice from './notice';
import NoticeDefault from './NoticeDefault.story.vue';

export const argTypesData = {
  '#title': {
    name: 'title',
    description: 'slot for the notice title',
    table: {
      category: 'slots',
      type: {
        summary: 'text/html',
      },
    },
  },
};

export default {
  title: 'Elements/Notice',
  component: DtNotice,
  argTypes: argTypesData,
  excludeStories: /.Data$/,
};

const Template = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, NoticeDefault);

export const Default = Template.bind({});
Default.args = {
  title: 'Notice title',
  default: 'Main content of the notice goes here.',
  action: 'try this <a href="https://www.dialpad.com" target="_blank">action</a>',
};
`},void 0,!1,{fileName:"<source.js>",lineNumber:226,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:226,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`And here is what the vue component NoticeDefault.story.vue looks like. Note that for these types of
components that are used only for rendering components, we suffix them .story.vue, and keep them in the same
folder as the corresponding stories.js file. In this case it is in the same folder as notice.stories.js:`},void 0,!1,{fileName:"<source.js>",lineNumber:260,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<template>
  <dt-notice
    :kind="kind"
    :title="title"
    :title-id="titleId"
    :content-id="contentId"
    :important="important"
    :hide-close="hideClose"
  >
    <span v-html="defaultSlot" />
    <template
      v-if="action"
      #action
    >
      <span v-html="action" />
    </template>
    <template
      v-if="icon"
      #icon
    >
      <dt-icon :name="icon" />
    </template>
    <template
      v-if="titleOverride"
      #titleOverride
    >
      <span v-html="titleOverride" />
    </template>
  </dt-notice>
</template>

<script>
import DtNotice from './notice';
import { DtIcon } from '../components/icon';

export default {
  name: 'NoticeDefault',
  components: { DtNotice, DtIcon },
};
<\/script>
`},void 0,!1,{fileName:"<source.js>",lineNumber:264,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:264,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"creating-named-exports--setting-args",children:"Creating Named Exports / Setting Args"},void 0,!1,{fileName:"<source.js>",lineNumber:307,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["Now that we have the ",e.jsxDEV(n.code,{children:"Template"},void 0,!1,{fileName:"<source.js>",lineNumber:309,columnNumber:22},this),", we can create our named exports. Usually the ",e.jsxDEV(n.code,{children:"Default"},void 0,!1,{fileName:"<source.js>",lineNumber:309,columnNumber:79},this),`
named export represents our component in it's default state. Specifying the `,e.jsxDEV(n.code,{children:"args"},void 0,!1,{fileName:"<source.js>",lineNumber:310,columnNumber:77},this),` property
will on other named exports will create stories with those props set.`]},void 0,!0,{fileName:"<source.js>",lineNumber:309,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`// input.stories.js
import DtInput from './input';
import { generateTemplate } from '@/common/storybook_utils';

export default {
  title: 'Forms/Input',
  component: DtInput,
};

const baseInputTemplate = generateTemplate(DtInput, {
  customProps: [
    ':placeholder="placeholder"',
  ],
});

const Template = (args, { argTypes }) => {
  return {
    components: { DtInput },
    template: baseInputTemplate,
    props: Object.keys(argTypes),
  };
};

// Default story
export const Default = Template.bind({});

// With Warning story with the 'messages' props set
export const WithWarning = Template.bind({});
WithWarning.args = {
  messages: [{ message: 'This is a warning message', type: 'warning' }],
};
`},void 0,!1,{fileName:"<source.js>",lineNumber:313,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:313,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"decorators",children:"Decorators"},void 0,!1,{fileName:"<source.js>",lineNumber:347,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:e.jsxDEV(n.code,{children:"TODO"},void 0,!1,{fileName:"<source.js>",lineNumber:349,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:349,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"ignoring-exports",children:"Ignoring Exports"},void 0,!1,{fileName:"<source.js>",lineNumber:351,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`Sometimes we don't want specific exports to be parsed as a story. This may occur if we want to export some
data property to be reused in composite stories. This can be accomplished by specifying the `,e.jsxDEV(n.code,{children:"excludeStories"},void 0,!1,{fileName:"<source.js>",lineNumber:353,columnNumber:93},this),`
field in the `,e.jsxDEV(n.code,{children:"default export"},void 0,!1,{fileName:"<source.js>",lineNumber:354,columnNumber:14},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:352,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`// input.stories.js

import DtInput from './input';

export default {
  title: 'Forms/Input',
  component: DtInput,
  parameters: { ... },
  decorators: [ ... ],
  excludeStories: /.*Data$/, // Ignores all named exports that end with "Data"
};

...

// Won't be parsed
export const propsData = {};

// Will be parsed
export const Default = Template.bind({});
`},void 0,!1,{fileName:"<source.js>",lineNumber:356,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:356,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function O(s={}){const{wrapper:n}=Object.assign({},r(),s.components);return n?e.jsxDEV(n,Object.assign({},s,{children:e.jsxDEV(t,s,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):t(s)}export{O as default};
//# sourceMappingURL=writing_storybook-175a7664.js.map
