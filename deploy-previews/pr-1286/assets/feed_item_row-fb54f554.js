import{j as e}from"./jsx-dev-runtime-ac21d1f6.js";import{M as o,b as l,C as s,d as r,e as u}from"./index-a6e7972a.js";import{F as a,D as d,V as c}from"./feed_item_row.stories-8e2633d2.js";import{u as m}from"./index-3e8ed4b0.js";import"./iframe-1bbec7b6.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./storybook_utils-5e2f75ca.js";import"./vue.esm-bundler-807df745.js";import"./utils-491d6e59.js";import"./feed_item_row-13d20a68.js";import"./avatar-d6b5ac22.js";import"./presence-313305f6.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-c9b7700c.js";import"./icon_constants-f7080112.js";import"./lazy_show-a8336f86.js";import"./list_item-e4d6138f.js";import"./item_layout-936a47fa.js";import"./emoji_row-5a6f35a2.js";import"./button-cf0b13d0.js";import"./link_constants-8ea95ec9.js";import"./tooltip-98989c43.js";import"./tippy_utils-89aa4eb5.js";import"./emoji-6794fd91.js";import"./emoji-87314816.js";import"./index-40c4ee4c.js";import"./skeleton-36f31f07.js";import"./emoji_text_wrapper-1d6d2fb4.js";import"./stack-1d445e4d.js";import"./image_viewer-7065f56d.js";import"./modal-f96ddab9.js";import"./fry-269daf43.js";function t(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",strong:"strong",h3:"h3",pre:"pre",code:"code"},m(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(o,{of:a},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"feed-item-row",children:"Feed Item Row"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(l,{children:e.jsxDEV(n.p,{children:"Feed Item Row Recipe represent individual feed row in a feed list."},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:13,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`A feed item row provides slots for avatar, action menu, threads and reactions as well as header (display name & time)
and the content which can be either a message or a rich media.`},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"The default feed item row contains 4 slots:"},void 0,!1,{fileName:"<source.js>",lineNumber:18,columnNumber:1},this),`
`,e.jsxDEV(n.ul,{children:[`
`,e.jsxDEV(n.li,{children:[e.jsxDEV(n.strong,{children:"default"},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:3},this)," slot - the content whether it be text or the rich media card"]},void 0,!0,{fileName:"<source.js>",lineNumber:20,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:[e.jsxDEV(n.strong,{children:"threading"},void 0,!1,{fileName:"<source.js>",lineNumber:21,columnNumber:3},this)," slot - the threading row component which is below the reactions slot"]},void 0,!0,{fileName:"<source.js>",lineNumber:21,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:[e.jsxDEV(n.strong,{children:"menu"},void 0,!1,{fileName:"<source.js>",lineNumber:22,columnNumber:3},this)," slot - the actions menu for current feed row. Floats towards the right and shows when isActive is true."]},void 0,!0,{fileName:"<source.js>",lineNumber:22,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:[e.jsxDEV(n.strong,{children:"reactions"},void 0,!1,{fileName:"<source.js>",lineNumber:23,columnNumber:3},this)," slot - the emoji reactions list component below the content slot."]},void 0,!0,{fileName:"<source.js>",lineNumber:23,columnNumber:1},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:20,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(r,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:26,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:25,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"variants",children:"Variants"},void 0,!1,{fileName:"<source.js>",lineNumber:29,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(r,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:32,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:31,columnNumber:1},this),`
`,`
`,e.jsxDEV(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:37,columnNumber:1},this),`
`,e.jsxDEV(u,{},void 0,!1,{fileName:"<source.js>",lineNumber:39,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:41,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:43,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtRecipeFeedItemRow } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:45,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:45,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"default-feed-item-row",children:"Default Feed Item row"},void 0,!1,{fileName:"<source.js>",lineNumber:49,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-vue",children:`<dt-recipe-feed-item-row
  :show-header="showHeader"
  :avatar-image-url="avatarImageUrl"
  :display-name="displayName"
  :time="time"
  :is-active="isActive"
  :state="state"
  @on-hover="onHover"
  @on-focus="onFocus"
>
  <!-- default content / Rich media -->
  <template
    #threading
  >
    <!-- threads component -->
  </template>
  <template
    #reactions
  >
    <!-- reactions component -->
  </template>
  <template
    #menu
  >
    <!-- Menu component which appears when isActive is true -->
  </template>
</dt-recipe-feed-item-row>
`},void 0,!1,{fileName:"<source.js>",lineNumber:51,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:51,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function W(i={}){const{wrapper:n}=Object.assign({},m(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(t,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):t(i)}export{W as default};
//# sourceMappingURL=feed_item_row-fb54f554.js.map
