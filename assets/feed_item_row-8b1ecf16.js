import{j as e}from"./jsx-runtime-8ddeea0f.js";import{M as a,b as m,C as i,d as r,e as d}from"./index-79770356.js";import{F as l,D as c,V as h}from"./feed_item_row.stories-229e4b1f.js";import{u as s}from"./index-0b9249cf.js";import"./iframe-9269b54f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-cba466d5.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./storybook_utils-4cdf99b7.js";import"./utils-5c9c602d.js";import"./vue.esm-ba2ca387.js";import"./feed_item_row-7be5d4c4.js";import"./avatar-f5e3e952.js";import"./presence-7999d7f0.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-9c3e9b89.js";import"./icon_constants-a1e812ca.js";import"./lazy_show-ac5fd1cd.js";import"./list_item-dfa6c14d.js";import"./item_layout-1f335445.js";import"./emoji_row-d4e90d9d.js";import"./button-4cf26c8f.js";import"./link_constants-8ea95ec9.js";import"./tooltip-c50b9a32.js";import"./tippy_utils-dcd4636d.js";import"./emoji-9110c20b.js";import"./emoji-e75a4e8c.js";import"./skeleton-8a392920.js";import"./emoji_text_wrapper-5ced626c.js";import"./stack-c26ae66b.js";import"./image_viewer-3a21cf52.js";import"./modal-600bd46a.js";import"./index.esm-8e1c03ab.js";import"./fry-269daf43.js";function o(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",strong:"strong",h3:"h3",pre:"pre",code:"code"},s(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
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
//# sourceMappingURL=feed_item_row-8b1ecf16.js.map