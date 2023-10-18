import{j as e}from"./jsx-dev-runtime-ef10bfa0.js";import{M as o,b as l,C as s,d as r,e as u}from"./index-8cd675ad.js";import{F as a,D as d,V as c}from"./feed_item_row.stories-ab7fea6b.js";import{u as m}from"./index-699c3921.js";import"./iframe-38fd1c02.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./storybook_utils-7f880537.js";import"./vue.esm-bundler-5f4c5b12.js";import"./utils-24086939.js";import"./feed_item_row-b81167a3.js";import"./avatar-6da8e65f.js";import"./presence-e6ad3d94.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-0e5360a4.js";import"./icon_constants-8dc042e9.js";import"./lazy_show-94c78d4e.js";import"./list_item-66f9d9a0.js";import"./item_layout-51f38246.js";import"./emoji_row-87851919.js";import"./button-4525c5ab.js";import"./link_constants-8ea95ec9.js";import"./tooltip-178bda69.js";import"./tippy_utils-89aa4eb5.js";import"./emoji-315ed740.js";import"./emoji-87314816.js";import"./index-40c4ee4c.js";import"./skeleton-7917f489.js";import"./emoji_text_wrapper-472714cf.js";import"./stack-faa2977a.js";import"./image_viewer-7c10d750.js";import"./modal-f96ddab9.js";import"./fry-269daf43.js";function t(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",strong:"strong",h3:"h3",pre:"pre",code:"code"},m(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(o,{of:a},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
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
//# sourceMappingURL=feed_item_row-7c73d5d2.js.map
