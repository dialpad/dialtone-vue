import{j as e}from"./jsx-dev-runtime-2a4a8a45.js";import{M as r}from"./index-b59fc47b.js";import{u as s}from"./index-4d1b2d82.js";import"./iframe-9099baed.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";function o(n){const t=Object.assign({h1:"h1",pre:"pre",code:"code"},s(),n.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(r,{title:"Docs/Templates/SFC Component Story Template"},void 0,!1,{fileName:"<source.js>",lineNumber:3,columnNumber:1},this),`
`,e.jsxDEV(t.h1,{id:"sfc-component-story-template",children:"SFC Component Story Template"},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(t.pre,{children:e.jsxDEV(t.code,{className:"language-html",children:`<!-- Use this template story to allow the user control the component's props and slots -->
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
`},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function h(n={}){const{wrapper:t}=Object.assign({},s(),n.components);return t?e.jsxDEV(t,Object.assign({},n,{children:e.jsxDEV(o,n,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):o(n)}export{h as default};
//# sourceMappingURL=sfc_component_story_template-9d6c6f6b.js.map
