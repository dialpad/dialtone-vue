import{j as e}from"./jsx-runtime-652aede8.js";import{M as m,S as d,C as o,a as s,b as l}from"./index-b560fb2e.js";import{F as c,D as h,V as p}from"./feed_item_row.stories-f919a2cc.js";import{u as a}from"./index-597a4f4a.js";import"./iframe-3de6ce4b.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-ac12cf05.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-58c64c5e.js";import"./vue.esm-eff6e72e.js";import"./avatar-a1a7d6f1.js";import"./presence-8bac0262.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-525487a4.js";import"./icon_constants-0085b0a1.js";import"./lazy_show-0b3a0cf0.js";import"./list_item-9b6a7e3e.js";import"./emoji_text_wrapper-9c7afd19.js";import"./emoji-23cd4135.js";import"./emoji-1f0f2b27.js";import"./skeleton-28563e4f.js";import"./person-13c0d6d2.js";import"./stack-dfcd045d.js";import"./fry-640eaf0d.js";import"./modal-f96ddab9.js";import"./button-b421fc95.js";import"./link_constants-51338c78.js";import"./index.esm-018778a2.js";function J(n={}){const{wrapper:i}=Object.assign({},a(),n.components);return i?e.jsx(i,Object.assign({},n,{children:e.jsx(r,{})})):r();function r(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",strong:"strong",h3:"h3",pre:"pre",code:"code"},a(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:c}),`
`,e.jsx(t.h1,{id:"feed-item-row",children:"Feed Item Row"}),`
`,e.jsx(d,{children:e.jsx(t.p,{children:"Feed Item Row Recipe represent individual feed row in a feed list."})}),`
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
`,e.jsx(o,{children:e.jsx(s,{of:h})}),`
`,e.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(o,{children:e.jsx(s,{of:p})}),`
`,`
`,e.jsx(t.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(l,{}),`
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
`})})]})}}export{J as default};
//# sourceMappingURL=feed_item_row-f5f537f5.js.map
