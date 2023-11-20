import{j as e}from"./jsx-runtime-TyEHnBjv.js";import{M as a,b as m,C as i,d as r,e as d}from"./index-mPtuFS7F.js";import{F as l,D as c,V as h}from"./feed_item_row.stories--MI3ruKX.js";import{u as s}from"./index-LF9c9U57.js";import"./iframe-aJIPx8Ej.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-aKxH7ZY0.js";import"./index-e6jHZmnO.js";import"./index-PPLHz8o0.js";import"./chunk-AY7I2SME-4UylTnhF.js";import"./storybook_utils-dy5aucTw.js";import"./avatar-Rnq9lpvE.js";import"./utils-uw-tjP-u.js";import"./vue.esm-bundler-pfnFGw-8.js";import"./presence-vy1D7RQM.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./icon-z49A8j_D.js";import"./icon_constants-spQP7USY.js";import"./lazy_show-ChM6yLsS.js";import"./list_item-8zDNiA2P.js";import"./item_layout-8xOedta4.js";import"./emoji_row-Rwyhy7cg.js";import"./button-QSbPABQk.js";import"./link_constants-Igh3f6J8.js";import"./tooltip-F2cB1cq2.js";import"./tippy_utils-JPp_rckD.js";import"./emoji-9peNT-Wf.js";import"./emoji-R5kVcz2d.js";import"./index-h7P-Dzu4.js";import"./skeleton-AG0gtGzw.js";import"./emoji_text_wrapper-8Kbsw1c2.js";import"./stack-Wrr-eqs0.js";import"./stack_constants-45i7xhSZ.js";import"./image_viewer-MCzupZo7.js";import"./modal-VFpWWFyV.js";import"./fry-tJxUcw5g.js";function o(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",strong:"strong",h3:"h3",pre:"pre",code:"code"},s(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
`,e.jsx(t.h1,{id:"feed-item-row",children:"Feed Item Row"}),`
`,e.jsx(m,{children:e.jsx(t.p,{children:"Feed Item Row Recipe represent individual feed row in a feed list."})}),`
`,e.jsx(t.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(t.p,{children:`A feed item row provides slots for avatar, action menu, threads and reactions as well as header (display name & time)
and the content which can be either a message or a rich media.`}),`
`,e.jsx(t.p,{children:"The default feed item row contains 4 slots:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"default"})," slot - the content whether it be text or the rich media card"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"threading"})," slot - the threading row component which is below the reactions slot"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"menu"})," slot - the actions menu for current feed row. Floats towards the right and shows when isActive is true."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"reactions"})," slot - the emoji reactions list component below the content slot."]}),`
`]}),`
`,e.jsx(i,{children:e.jsx(r,{of:c})}),`
`,e.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(i,{children:e.jsx(r,{of:h})}),`
`,`
`,e.jsx(t.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(d,{}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h3,{id:"import",children:"Import"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { DtRecipeFeedItemRow } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(t.h3,{id:"default-feed-item-row",children:"Default Feed Item row"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-vue",children:`<dt-recipe-feed-item-row
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
`})})]})}function W(n={}){const{wrapper:t}=Object.assign({},s(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(o,n)})):o(n)}export{W as default};
//# sourceMappingURL=feed_item_row-RO3awwB8.js.map
