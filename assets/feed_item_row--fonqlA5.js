import{j as e}from"./jsx-runtime-QReR3DfS.js";import{M as a,b as m,C as i,d as r,e as d}from"./index-DUL9Ioec.js";import{F as l,D as c,V as h}from"./feed_item_row.stories-FmsJt3YK.js";import{u as s}from"./index-gBHRzTTU.js";import"./iframe-B2TQZaYX.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-aKxH7ZY0.js";import"./index-1QZrJT68.js";import"./index-PPLHz8o0.js";import"./chunk-AY7I2SME-4UylTnhF.js";import"./storybook_utils-XrTpeJKJ.js";import"./avatar-TNIlCJsh.js";import"./utils-E69eXbJV.js";import"./vue.esm-Wy6pS3yJ.js";import"./presence-U7UY0cCe.js";import"./_plugin-vue2_normalizer-XBmYDgEh.js";import"./icon-GkF47-VR.js";import"./icon_constants-spQP7USY.js";import"./lazy_show-qFWx7ZlG.js";import"./list_item-ypqepJhC.js";import"./item_layout-9CsPj6HM.js";import"./modal-g8UESVSL.js";import"./emoji_row-2DT0UyzD.js";import"./button-5wqdSkdq.js";import"./link_constants-Igh3f6J8.js";import"./tooltip-TcrKDRoM.js";import"./tippy_utils-pFmU31nk.js";import"./emoji-djsVHT5o.js";import"./emoji-m69G9QlX.js";import"./skeleton-bitlZwOB.js";import"./emoji_text_wrapper-jZzSeEXy.js";import"./stack-JDcL8RhQ.js";import"./stack_constants-45i7xhSZ.js";import"./fry-OCMpCz2N.js";import"./index.esm-RUATGCt2.js";function o(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",strong:"strong",h3:"h3",pre:"pre",code:"code"},s(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
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
`})})]})}function Q(n={}){const{wrapper:t}=Object.assign({},s(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(o,n)})):o(n)}export{Q as default};
//# sourceMappingURL=feed_item_row--fonqlA5.js.map