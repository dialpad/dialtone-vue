import{j as e}from"./jsx-runtime-67fe788a.js";import{M as a,b as m,C as i,d as r,e as d}from"./index-70095930.js";import{F as l,D as c,V as p}from"./feed_item_row.stories-44707afd.js";import{u as s}from"./index-f0b58f08.js";import"./iframe-0082410a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./storybook_utils-182ea7b7.js";import"./feed_item_row-98463fda.js";import"./avatar-acedcaa6.js";import"./utils-b9178890.js";import"./vue.esm-bundler-2fc8d911.js";import"./presence-b753ccee.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-19ead0e1.js";import"./icon_constants-e5cbd7a1.js";import"./lazy_show-ebabbde0.js";import"./list_item-08ce5296.js";import"./item_layout-4d1ec9e1.js";import"./emoji_row-648ece58.js";import"./button-54a66549.js";import"./link_constants-8ea95ec9.js";import"./tooltip-e850e7f1.js";import"./tippy_utils-352d0d4a.js";import"./emoji-4e7f6bdd.js";import"./emoji-87314816.js";import"./index-40c4ee4c.js";import"./skeleton-35a1d81f.js";import"./emoji_text_wrapper-8dfab392.js";import"./stack-a2f8fb18.js";import"./stack_constants-4f71ebff.js";import"./image_viewer-f34c3518.js";import"./modal-f96ddab9.js";import"./fry-269daf43.js";function o(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",strong:"strong",h3:"h3",pre:"pre",code:"code"},s(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
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
`,e.jsx(i,{children:e.jsx(r,{of:p})}),`
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
`})})]})}function Y(n={}){const{wrapper:t}=Object.assign({},s(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(o,n)})):o(n)}export{Y as default};
//# sourceMappingURL=feed_item_row-b1b51a22.js.map
