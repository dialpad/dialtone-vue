import{j as e}from"./jsx-runtime-d0cfdf37.js";import{D as a}from"./components-8d63bf8d.js";import{M as i,C as p,a as l}from"./index-7bea37cd.js";import{u as r}from"./index-ccdc0789.js";import"./iframe-d25afdb2.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-544d6d08.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-3c489ce7.js";import"./index-356e4a49.js";const{deprecate:c}=__STORYBOOK_MODULE_CLIENT_LOGGER__;c("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.");function D(t={}){const{wrapper:o}=Object.assign({},r(),t.components);return o?e.jsx(o,Object.assign({},t,{children:e.jsx(s,{})})):s();function s(){const n=Object.assign({h1:"h1",p:"p",h3:"h3",a:"a",h2:"h2",code:"code",pre:"pre",strong:"strong",h4:"h4"},r(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Docs/Storybook/Writing Stories"}),`
`,e.jsx(n.h1,{id:"writing-stories",children:"Writing Stories"}),`
`,e.jsx(n.p,{children:"Writing stories for Storybook using the Component Story Format (CSF)"}),`
`,e.jsx(n.h3,{id:"official-docs",children:e.jsx(n.a,{href:"https://storybook.js.org/docs/vue/get-started/introduction",target:"_blank",rel:"nofollow noopener noreferrer",children:"Official Docs"})}),`
`,e.jsx(n.h2,{id:"what-is-a-story",children:"What is a story?"}),`
`,e.jsxs(n.p,{children:[`Stories the are building blocks of Storybook, they represent a snapshot or slice of the
component at a particular state, rendered onto a "playground" or "sandbox" for anyone to interact with.
In turn, we can take these stories and embed them into
`,e.jsx(n.a,{href:"https://github.com/mdx-js/mdx",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDX"}),` files (like the one you're reading right now)
and turn them into living documentation.`]}),`
`,e.jsxs(n.p,{children:["For example, the ",e.jsx(n.code,{children:"WithSuccess"})," story from ",e.jsx(n.code,{children:"input.stories.js"})," gets rendered as:"]}),`
`,e.jsx(p,{children:e.jsx(l,{id:"components-input--with-success"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`# input.stories.js
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
`})}),`
`,e.jsxs(n.p,{children:[`We can interact with this component as we would in our actual application.
By modifying the `,e.jsx(n.code,{children:"args"}),` property, we can specify any combination of states
for this component.`]}),`
`,e.jsx(n.h2,{id:"component-story-format-and-export-structure",children:"Component Story Format and Export Structure"}),`
`,e.jsxs(n.p,{children:["Storybook automatically parses the ",e.jsx(n.strong,{children:"default"})," and ",e.jsx(n.strong,{children:"named"})," exports from every ",e.jsx(n.code,{children:"*.stories.js"}),` file
to generate stories, this is known as the `,e.jsx(n.a,{href:"https://storybook.js.org/docs/react/api/csf",target:"_blank",rel:"nofollow noopener noreferrer",children:"Component Story Format"})]}),`
`,e.jsx(n.h3,{id:"default-export",children:"Default Export"}),`
`,e.jsxs(n.p,{children:[`Default export is where the metadata and configuration for all of the stories contained within
the same `,e.jsx(n.code,{children:"*.stories.js"})," file are defined. It also provides fields for addon configuration for said stories."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// input.stories.js

import DtInput from './input';

export default {
  title: 'Forms/Input',
  component: DtInput,
  parameters: { ... },
  decorators: [ ... ],
};
`})}),`
`,e.jsxs(n.p,{children:["Where ",e.jsx(n.a,{href:"https://storybook.js.org/docs/react/writing-stories/parameters",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(n.strong,{children:"parameters"})}),` holds the configuration for
addons and `,e.jsx(n.a,{href:"https://storybook.js.org/docs/react/writing-stories/decorators",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(n.strong,{children:"decorators"})}),` are templates
that wrap our stories.`]}),`
`,e.jsx(n.h3,{id:"named-exports",children:"Named Exports"}),`
`,e.jsx(n.p,{children:"Named exports are the individual stories that show up in the sidebar of storybooks"}),`
`,e.jsxs(n.p,{children:["When writing stories, it's good practice to create a ",e.jsx(n.code,{children:"Template"}),` variable that is not exported which binds
all of the props, events, and data that we want for all of our stories. It acts as the harness for which our
components are held. The `,e.jsx(n.code,{children:"Template"}),` is reused in each story as named exports and we can simply specify the
`,e.jsx(n.a,{href:"https://storybook.js.org/docs/react/writing-stories/args",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(n.strong,{children:"args"})})," field to set props."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// input.stories.js

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
`})}),`
`,e.jsx(n.h2,{id:"writing-stories-1",children:"Writing Stories"}),`
`,e.jsx(n.p,{children:"To write stories, we first import the component that we wish to write stories for:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// input.stories.js
import DtInput from './input';
`})}),`
`,e.jsxs(n.p,{children:["Then we will define the ",e.jsx(n.code,{children:"Default Export"})," for the simplest use case (No configuration):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// input.stories.js
import DtInput from './input';

export default {
  title: 'Forms/Input',
  component: DtInput,
};
`})}),`
`,e.jsx(n.h3,{id:"title-field",children:"Title Field"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"title"})," field will tell Storybook to put the stories in a category called ",e.jsx(n.code,{children:"Components"}),`.
We can add more levels of nesting by adding more `,e.jsx(n.code,{children:"/"}),"."]}),`
`,e.jsxs(n.p,{children:["For example, ",e.jsx(n.code,{children:"Component/Folder/Input"})," will result in the following:"]}),`
`,e.jsx(a,{src:"https://static.dialpadcdn.com/dialtone/naming.png"}),`
`,e.jsx(n.p,{children:"Nothing will appear yet, this is because we now need to add our named exports."}),`
`,e.jsx(n.h3,{id:"story-template",children:"Story Template"}),`
`,e.jsx(n.p,{children:"First we will define the harness that will render our component:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// input.stories.js
const Template = () => {
  return {
    components: { DtInput },
    template: <dt-input />,
  };
};
`})}),`
`,e.jsxs(n.p,{children:["Since ",e.jsx(n.code,{children:"Template"}),` returns a Vue component that wraps our component, we need to pass through all of the props
that our component expects so Storybook can interact with our component's internals using its UI:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// input.stories.js
const Template = () => {
  return {
    components: { DtInput },
    template: <dt-input :name="name" :value="value" ... />,
    props: [name, value ...],
  };
};
`})}),`
`,e.jsx(n.h3,{id:"generatetemplate-helper-method",children:"generateTemplate Helper Method"}),`
`,e.jsxs(n.p,{children:["As you can imagine, depending on the component, this can get quite tedious, luckily, the ",e.jsx(n.code,{children:"Template"}),` method
takes in 2 arguments. We can also use the `,e.jsx(n.code,{children:"generateTemplate"})," method to bind all props for us:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// input.stories.js
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
`})}),`
`,e.jsx(n.h3,{id:"vue-single-file-component-template",children:"Vue Single-File Component Template"}),`
`,e.jsx(n.p,{children:`Another option is to use an actual Vue Single-File Component as your template. This can be useful if
you are rendering a more complex component and you would prefer to have code highlighting and the ability
to use any of the advanced features of a .vue component. Below is an example usage of this in a stories.js file:`}),`
`,e.jsx(n.h4,{id:"important-notes",children:"Important Notes"}),`
`,e.jsxs(n.p,{children:[`In order to address a current storybook bug where props that share the same name as a slot are not displayed in the
sidebar controls we must define the slots controls in `,e.jsx(n.code,{children:"argTypesData"})," as seen in the example below."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import DtNotice from './notice';
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
`})}),`
`,e.jsx(n.p,{children:`And here is what the vue component NoticeDefault.story.vue looks like. Note that for these types of
components that are used only for rendering components, we suffix them .story.vue, and keep them in the same
folder as the corresponding stories.js file. In this case it is in the same folder as notice.stories.js:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<template>
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
`})}),`
`,e.jsx(n.h3,{id:"creating-named-exports--setting-args",children:"Creating Named Exports / Setting Args"}),`
`,e.jsxs(n.p,{children:["Now that we have the ",e.jsx(n.code,{children:"Template"}),", we can create our named exports. Usually the ",e.jsx(n.code,{children:"Default"}),`
named export represents our component in it's default state. Specifying the `,e.jsx(n.code,{children:"args"}),` property
will on other named exports will create stories with those props set.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// input.stories.js
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
`})}),`
`,e.jsx(n.h3,{id:"decorators",children:"Decorators"}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"TODO"})}),`
`,e.jsx(n.h3,{id:"ignoring-exports",children:"Ignoring Exports"}),`
`,e.jsxs(n.p,{children:[`Sometimes we don't want specific exports to be parsed as a story. This may occur if we want to export some
data property to be reused in composite stories. This can be accomplished by specifying the `,e.jsx(n.code,{children:"excludeStories"}),`
field in the `,e.jsx(n.code,{children:"default export"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// input.stories.js

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
`})})]})}}export{D as default};
//# sourceMappingURL=writing_storybook-28325eb2.js.map
