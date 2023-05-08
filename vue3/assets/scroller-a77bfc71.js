import{j as e}from"./jsx-runtime-ff446fd9.js";import{M as s,S as l,b as a}from"./index-23026b4c.js";import{S as c}from"./scroller.stories-63fd7a92.js";import{u as o}from"./index-e5020dab.js";import"./iframe-0211cfbc.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-ac12cf05.js";import"./index-356e4a49.js";import"./vue.esm-bundler-2b4fd772.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./storybook_utils-f14132b0.js";import"./utils-3b94b552.js";import"./chunk-OPEUWD42-a3b45fd8.js";function z(n={}){const{wrapper:r}=Object.assign({},o(),n.components);return r?e.jsx(r,Object.assign({},n,{children:e.jsx(i,{})})):i();function i(){const t=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",code:"code",h3:"h3",pre:"pre",h4:"h4"},o(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
`,e.jsx(t.h1,{id:"scroller",children:"Scroller"}),`
`,e.jsx(l,{children:e.jsx(t.p,{children:"Blazing fast scrolling of any amount of data"})}),`
`,e.jsx(t.p,{children:"On this file you will find the documentation for our current MVP functionality."}),`
`,e.jsxs(t.p,{children:["If you need more information about the component, we are using a Fork of ",e.jsx(t.a,{href:"https://github.com/Akryum/vue-virtual-scroller",target:"_blank",rel:"nofollow noopener noreferrer",children:"Akryum/vue-virtual-scroller"})]}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.p,{children:`You need to set the size of the virtual-scroller element and the items elements (for example, with CSS).
Unless you are using variable size mode, all items should have the same height (or width in horizontal mode)
to prevent display glitches.`}),`
`,e.jsx(t.p,{children:`If the items are objects, the scroller needs to be able to identify them.
By default it will look for an id field on the items. This can be configured with
the keyField prop if you are using another field name.`}),`
`,e.jsxs(t.p,{children:["We are exposing ",e.jsx(t.code,{children:"scrollToItem"})," method to navigate to a specific item in the list."]}),`
`,e.jsx(t.p,{children:"Scroller component will fire an event when it reach the top or bottom of the list."}),`
`,e.jsx(t.p,{children:`The list item components must be reactive to the item prop being updated without
being re-created (use computed props or watchers to properly react to props changes!).`}),`
`,e.jsx(t.p,{children:`The browsers have a size limitation on DOM elements, it means that currently
the virtual scroller can't display more than ~500k items depending on the browser.`}),`
`,e.jsx(t.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(a,{}),`
`,e.jsx(t.h3,{id:"import",children:"Import"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { DtScroller } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(t.h3,{id:"default",children:"Default"}),`
`,e.jsx(t.h4,{id:"default-scroller",children:"Default Scroller"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<dt-scroller
 :items="items"
 :item-size="32"
 :scroller-height="200"
 :scroller-width="300"
 >
 <template #default="{ item }">
   <div class="user">
     {{ item.name }}
   </div>
 </template>
</dt-scroller>
`})}),`
`,e.jsx(t.h4,{id:"dynamic-scroller",children:"Dynamic Scroller"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<dt-scroller
 :items="dynamicItems"
 :min-item-size="54"
 :scroller-height="300"
 :scroller-width="500"
 :dynamic="true"
 >
 <template #default="{ item }">
   <div class="avatar">
     {{ item.id }}
     <img
      :key="item.avatar"
      :src="item.avatar"
      alt="avatar"
      class="image"
     >
  </div>
  <div class="text">
     {{ item.message }}
  </div>
 </template>
</dt-scroller>
`})})]})}}export{z as default};
//# sourceMappingURL=scroller-a77bfc71.js.map
