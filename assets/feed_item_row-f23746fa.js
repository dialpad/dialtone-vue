import{j as e}from"./jsx-runtime-40fdb151.js";import{M as a,S as m,C as i,a as r,b as d}from"./index-ac311b73.js";import{F as l,D as c,V as h}from"./feed_item_row.stories-8e3c553a.js";import{u as s}from"./index-fd539355.js";import"./iframe-06c6106c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-6c24aced.js";import"./vue.esm-ba2ca387.js";import"./avatar-abb8aec6.js";import"./presence-16e0b832.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-b42420a4.js";import"./icon_constants-80dce3e6.js";import"./lazy_show-ac5fd1cd.js";import"./list_item-dae3ed02.js";import"./item_layout-bbebfb52.js";import"./emoji_text_wrapper-242e8451.js";import"./emoji-1c28d932.js";import"./emoji-1f0f2b27.js";import"./skeleton-7623eca9.js";import"./person-13c0d6d2.js";import"./stack-793861c1.js";import"./fry-c0bd7fe6.js";import"./modal-600bd46a.js";import"./button-82727ed7.js";import"./link_constants-51338c78.js";import"./index.esm-8e1c03ab.js";function o(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",strong:"strong",h3:"h3",pre:"pre",code:"code"},s(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
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
`})})]})}function J(n={}){const{wrapper:t}=Object.assign({},s(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(o,n)})):o(n)}export{J as default};
//# sourceMappingURL=feed_item_row-f23746fa.js.map
