import{j as e}from"./jsx-dev-runtime-62b459c4.js";import{M as o,b as l,C as s,d as r,e as u}from"./index-3b43042a.js";import{F as a,D as d,V as c}from"./feed_item_row.stories-5ea6ea6e.js";import{u as m}from"./index-5cf11b96.js";import"./iframe-27938787.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-cba466d5.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./storybook_utils-cf049d2e.js";import"./feed_item_row-00cdc53e.js";import"./avatar-12012baa.js";import"./utils-a1e592ea.js";import"./vue.esm-b7549171.js";import"./presence-d4f38341.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-9e10092c.js";import"./icon_constants-e5cbd7a1.js";import"./lazy_show-0b3a0cf0.js";import"./list_item-8fa4cee4.js";import"./item_layout-499a0a91.js";import"./emoji_row-4f45a3f2.js";import"./button-61a95420.js";import"./link_constants-8ea95ec9.js";import"./tooltip-01671e36.js";import"./tippy_utils-e4c34e91.js";import"./emoji-7cd48c1b.js";import"./emoji-e75a4e8c.js";import"./skeleton-e82601aa.js";import"./emoji_text_wrapper-31aca598.js";import"./stack-64ff0684.js";import"./stack_constants-4f71ebff.js";import"./image_viewer-6111d32b.js";import"./modal-600bd46a.js";import"./index.esm-80021037.js";import"./fry-269daf43.js";function t(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",strong:"strong",h3:"h3",pre:"pre",code:"code"},m(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(o,{of:a},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
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
`},void 0,!1,{fileName:"<source.js>",lineNumber:51,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:51,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function Y(i={}){const{wrapper:n}=Object.assign({},m(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(t,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):t(i)}export{Y as default};
//# sourceMappingURL=feed_item_row-5b8d7d81.js.map
