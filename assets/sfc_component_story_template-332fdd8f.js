import{j as t}from"./jsx-runtime-c07037ed.js";import{M as r}from"./index-a7e5ec57.js";import{u as s}from"./index-8836bb01.js";import"./iframe-44faf968.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";function e(n){const o=Object.assign({h1:"h1",pre:"pre",code:"code"},s(),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Docs/Templates/SFC Component Story Template"}),`
`,t.jsx(o.h1,{id:"sfc-component-story-template",children:"SFC Component Story Template"}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-html",children:`<!-- Use this template story to allow the user control the component's props and slots -->
<template>
  <!--
    We can bind the data that the user entered into the storybook controls to props by using a property of the same name
    as the storybook control defined in the corresponding \`.story.js\` file.
  -->
  <dt-my-component
    :my-prop="nameOfStorybookControl"
  >
    <!--
      We can also bind any slot data that the user has entered into the storybook controls. In this example we
      conditionally render slots using a custom storybook control defined in the corresponding \`.story.js\`.

      The preferred naming scheme for storybook slot controls uses the following format \`<SLOT_NAME>Slot\`.

      We use this storybook control naming scheme to prevent conflicts between controls for props and slots with the
      same name.
    -->
    <template v-if="defaultSlot">
      <span v-html="defaultSlot" />
    </template>
    <template
      #some
      v-if="someSlot"
    >
      <span v-html="someSlot" />
    </template>
  </dt-my-component>
</template>

<script>
import DtMyComponent from './my_component.vue';

export default {
  name: 'MyComponentDefault',
  components: { DtMyComponent },
};
<\/script>
`})})]})}function u(n={}){const{wrapper:o}=Object.assign({},s(),n.components);return o?t.jsx(o,Object.assign({},n,{children:t.jsx(e,n)})):e(n)}export{u as default};
//# sourceMappingURL=sfc_component_story_template-332fdd8f.js.map
