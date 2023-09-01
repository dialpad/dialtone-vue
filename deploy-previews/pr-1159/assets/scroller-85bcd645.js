import{j as e}from"./jsx-dev-runtime-a4513bea.js";import{M as r,S as t,f as u}from"./index-10ca87e4.js";import{S as o}from"./scroller.stories-05263cdf.js";import{u as l}from"./index-4ceb9f49.js";import"./iframe-e7c70694.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-4745f7b8.js";import"./index-356e4a49.js";import"./vue.esm-bundler-2457a580.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./storybook_utils-79c013ce.js";import"./utils-1ad0962e.js";import"./chunk-AY7I2SME-c7b6cf8a.js";function s(i){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",code:"code",h3:"h3",pre:"pre",h4:"h4"},l(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(r,{of:o},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"scroller",children:"Scroller"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(t,{children:e.jsxDEV(n.p,{children:"Blazing fast scrolling of any amount of data"},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"On this file you will find the documentation for our current MVP functionality."},void 0,!1,{fileName:"<source.js>",lineNumber:13,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["If you need more information about the component, we are using a Fork of ",e.jsxDEV(n.a,{href:"https://github.com/Akryum/vue-virtual-scroller",target:"_blank",rel:"nofollow noopener noreferrer",children:"Akryum/vue-virtual-scroller"},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:74},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:15,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:17,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`You need to set the size of the virtual-scroller element and the items elements (for example, with CSS).
Unless you are using variable size mode, all items should have the same height (or width in horizontal mode)
to prevent display glitches.`},void 0,!1,{fileName:"<source.js>",lineNumber:19,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`If the items are objects, the scroller needs to be able to identify them.
By default it will look for an id field on the items. This can be configured with
the keyField prop if you are using another field name.`},void 0,!1,{fileName:"<source.js>",lineNumber:23,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["We are exposing ",e.jsxDEV(n.code,{children:"scrollToItem"},void 0,!1,{fileName:"<source.js>",lineNumber:27,columnNumber:17},this)," method to navigate to a specific item in the list."]},void 0,!0,{fileName:"<source.js>",lineNumber:27,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"Scroller component will fire an event when it reach the top or bottom of the list, also when is in the middle."},void 0,!1,{fileName:"<source.js>",lineNumber:29,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`We are also exposing:
`,e.jsxDEV(n.code,{children:"scrollToBottom()"},void 0,!1,{fileName:"<source.js>",lineNumber:32,columnNumber:1},this),` (only accessible by the dynamic component)
This function will scroll to the bottom of the scroller, this is necessary because the dynamic component has variable size.`]},void 0,!0,{fileName:"<source.js>",lineNumber:31,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[e.jsxDEV(n.code,{children:"updateItems()"},void 0,!1,{fileName:"<source.js>",lineNumber:35,columnNumber:1},this),` This function is necessary to call when the user do some update to the list
(add elements from the top with unshift or update some item).`]},void 0,!0,{fileName:"<source.js>",lineNumber:35,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[e.jsxDEV(n.code,{children:"updateItemsFromBottom()"},void 0,!1,{fileName:"<source.js>",lineNumber:38,columnNumber:1},this)," This function is necessary to call when the user push some element to the array list."]},void 0,!0,{fileName:"<source.js>",lineNumber:38,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"important",children:"Important"},void 0,!1,{fileName:"<source.js>",lineNumber:40,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"Due the flexibility of the component IT WILL NOT UPDATE AUTOMATICALLY."},void 0,!1,{fileName:"<source.js>",lineNumber:42,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["You MUST use ",e.jsxDEV(n.code,{children:"updateItems()"},void 0,!1,{fileName:"<source.js>",lineNumber:44,columnNumber:14},this)," when use ",e.jsxDEV(n.code,{children:"unshift"},void 0,!1,{fileName:"<source.js>",lineNumber:44,columnNumber:39},this)," or update some item data."]},void 0,!0,{fileName:"<source.js>",lineNumber:44,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["You MUST use ",e.jsxDEV(n.code,{children:"updateItemsFromBottom()"},void 0,!1,{fileName:"<source.js>",lineNumber:46,columnNumber:14},this)," if you use ",e.jsxDEV(n.code,{children:"push"},void 0,!1,{fileName:"<source.js>",lineNumber:46,columnNumber:51},this)," to add some element to the array list."]},void 0,!0,{fileName:"<source.js>",lineNumber:46,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`The list item components must be reactive to the item prop being updated without
being re-created (use computed props or watchers to properly react to props changes!).`},void 0,!1,{fileName:"<source.js>",lineNumber:48,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`The browsers have a size limitation on DOM elements, it means that currently
the virtual scroller can't display more than ~500k items depending on the browser.`},void 0,!1,{fileName:"<source.js>",lineNumber:51,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:54,columnNumber:1},this),`
`,e.jsxDEV(u,{},void 0,!1,{fileName:"<source.js>",lineNumber:56,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:58,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtScroller } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:60,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:60,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"default",children:"Default"},void 0,!1,{fileName:"<source.js>",lineNumber:64,columnNumber:1},this),`
`,e.jsxDEV(n.h4,{id:"default-scroller",children:"Default Scroller"},void 0,!1,{fileName:"<source.js>",lineNumber:66,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-scroller
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
`},void 0,!1,{fileName:"<source.js>",lineNumber:68,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:68,columnNumber:1},this),`
`,e.jsxDEV(n.h4,{id:"dynamic-scroller",children:"Dynamic Scroller"},void 0,!1,{fileName:"<source.js>",lineNumber:83,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-scroller
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
`},void 0,!1,{fileName:"<source.js>",lineNumber:85,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:85,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function v(i={}){const{wrapper:n}=Object.assign({},l(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(s,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):s(i)}export{v as default};
//# sourceMappingURL=scroller-85bcd645.js.map
