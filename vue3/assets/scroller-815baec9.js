import{j as e}from"./jsx-runtime-72761ca2.js";import{M as o,S as r,f as l}from"./index-e24b55ab.js";import{S as a}from"./scroller.stories-9ed8ffd5.js";import{u as i}from"./index-cb6b3689.js";import"./iframe-d14cd55a.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-4745f7b8.js";import"./index-356e4a49.js";import"./DtScroller-25e0e4cd.js";import"./vue.esm-bundler-400586b0.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./storybook_utils-8dde5fa6.js";import"./utils-0b5636ec.js";import"./chunk-AY7I2SME-c7b6cf8a.js";function s(n){const t=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",code:"code",h3:"h3",pre:"pre",h4:"h4"},i(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:a}),`
`,e.jsx(t.h1,{id:"scroller",children:"Scroller"}),`
`,e.jsx(r,{children:e.jsx(t.p,{children:"Blazing fast scrolling of any amount of data"})}),`
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
`,e.jsx(t.p,{children:"Scroller component will fire an event when it reach the top or bottom of the list, also when is in the middle."}),`
`,e.jsxs(t.p,{children:[`We are also exposing:
`,e.jsx(t.code,{children:"scrollToBottom()"}),` (only accessible by the dynamic component)
This function will scroll to the bottom of the scroller, this is necessary because the dynamic component has variable size.`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"updateItems()"}),` This function is necessary to call when the user do some update to the list
(add elements from the top with unshift or update some item).`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"updateItemsFromBottom()"})," This function is necessary to call when the user push some element to the array list."]}),`
`,e.jsx(t.h3,{id:"important",children:"Important"}),`
`,e.jsx(t.p,{children:"Due the flexibility of the component IT WILL NOT UPDATE AUTOMATICALLY."}),`
`,e.jsxs(t.p,{children:["You MUST use ",e.jsx(t.code,{children:"updateItems()"})," when use ",e.jsx(t.code,{children:"unshift"})," or update some item data."]}),`
`,e.jsxs(t.p,{children:["You MUST use ",e.jsx(t.code,{children:"updateItemsFromBottom()"})," if you use ",e.jsx(t.code,{children:"push"})," to add some element to the array list."]}),`
`,e.jsx(t.p,{children:`The list item components must be reactive to the item prop being updated without
being re-created (use computed props or watchers to properly react to props changes!).`}),`
`,e.jsx(t.p,{children:`The browsers have a size limitation on DOM elements, it means that currently
the virtual scroller can't display more than ~500k items depending on the browser.`}),`
`,e.jsx(t.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(l,{}),`
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
`})})]})}function M(n={}){const{wrapper:t}=Object.assign({},i(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(s,n)})):s(n)}export{M as default};
//# sourceMappingURL=scroller-815baec9.js.map