import{j as t}from"./jsx-runtime-a2045d76.js";import{M as m,S as s,d as r,e,f as a}from"./index-9bccb811.js";import{F as l,D as d,A as c,N as h}from"./feed_item_pill.stories-7f4346da.js";import{u as p}from"./index-66c39b15.js";import"./iframe-ef0ccdb5.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./storybook_utils-e1aad9b5.js";import"./vue.esm-ba2ca387.js";import"./avatar-fba09582.js";import"./presence-7999d7f0.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-23d7fa2f.js";import"./icon_constants-6cc92332.js";import"./badge-8cf1d91e.js";import"./banner-47cb2bd3.js";import"./notice-7bf7396f.js";import"./button-82727ed7.js";import"./link_constants-51338c78.js";import"./sr_only_close_button-b0699eef.js";import"./modal-600bd46a.js";import"./breadcrumbs-c29e138c.js";import"./link-ea758f3d.js";import"./button_group-f60cb9de.js";import"./card-bf2d171f.js";import"./codeblock-48f80f9e.js";import"./combobox-4ea86de7.js";import"./keyboard_list_navigation-8c116ee6.js";import"./list_item-5ec04318.js";import"./item_layout-173b62c3.js";import"./skeleton-8a392920.js";import"./collapsible-c51344d7.js";import"./lazy_show-ac5fd1cd.js";import"./dropdown_separator-f3a7bb4e.js";import"./popover-9d3abfa0.js";import"./tippy_utils-dcd4636d.js";import"./index.esm-8e1c03ab.js";import"./dropdown_constants-d0cadac9.js";import"./image_viewer-d6c7f94d.js";import"./input-6b1ba9f4.js";import"./validation_messages-7a625c98.js";import"./input-4a643152.js";import"./input_group-80798869.js";import"./modal-f7f0185f.js";import"./list_item_group-67a31a42.js";import"./pagination-e6bb470c.js";import"./radio-f16c67a6.js";import"./radio_constants-4f6325c5.js";import"./radio_group-14d82614.js";import"./tab_group-9ded31b8.js";import"./tab-8115bfcd.js";import"./tab_panel-5f6c9511.js";import"./checkbox-331de3a3.js";import"./checkbox_group-7f8fe53f.js";import"./chip-1a35cbe9.js";import"./select_menu-5f92692e.js";import"./toast-5b66c186.js";import"./toggle-7d64bf49.js";import"./tooltip-08869a42.js";import"./keyboard_shortcut-b46138ac.js";import"./root_layout-489ee9b0.js";import"./stack-793861c1.js";import"./DtDatepicker-c1c8814e.js";import"./combobox_with_popover-7f64bddc.js";import"./combobox_multi_select-c7970f58.js";import"./callbar_button-a29a5e36.js";import"./callbar_button_with_popover-9c39b22c.js";import"./contact_info-517c0a5f.js";import"./top_banner_info-b66cfd6a.js";import"./ivr_node-e941e6a7.js";import"./grouped_chip-19a8be97.js";import"./settings_menu_button-f89cb1b2.js";import"./general_row-67649262.js";import"./emoji_text_wrapper-1ce11eae.js";import"./emoji-e704c8c7.js";import"./emoji-1f0f2b27.js";import"./group_row-a1b5f6d5.js";import"./contact_row-1834a70d.js";import"./unread_pill-bcf9089a.js";import"./feed_item_row-6cfef93c.js";import"./time_pill-fd708477.js";import"./emoji_row-28a8867a.js";import"./callbox-3f4faa5f.js";function n(o){const i=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},p(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(m,{of:l}),`
`,t.jsx(i.h1,{id:"feed-item-pill",children:"Feed Item Pill"}),`
`,t.jsx(s,{children:t.jsx(i.p,{children:"A generic layout for different Feed Items"})}),`
`,t.jsx(i.h2,{id:"base-style",children:"Base Style"}),`
`,t.jsx(r,{children:t.jsx(e,{of:d})}),`
`,t.jsx(i.h2,{id:"variants",children:"Variants"}),`
`,t.jsx(i.p,{children:"Can provide a border style via borderColor"}),`
`,t.jsx(r,{children:t.jsx(e,{of:c})}),`
`,t.jsx(i.p,{children:"Can disable the toggleable behaviour (Cursor is reset, no changing of icon on hover, clicking does not toggle the expandable)"}),`
`,t.jsx(r,{children:t.jsx(e,{of:h})}),`
`,t.jsx(i.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,t.jsx(a,{}),`
`,t.jsx(i.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(i.h3,{id:"import",children:"Import"}),`
`,t.jsx(i.pre,{children:t.jsx(i.code,{className:"language-jsx",children:`import { DtRecipeFeedItemPill } from '@dialpad/dialtone-vue';
`})}),`
`,t.jsx(i.h3,{id:"example",children:"Example"}),`
`,t.jsx(i.pre,{children:t.jsx(i.code,{className:"language-vue",children:`  <dt-recipe-feed-item-pill
    :icon-name="iconName"
    :title="title"
    :wrapper-class="wrapperClass"
    :button-class="buttonClass"
    :border-color="borderColor"
    :aria-label="ariaLabel"
    :toggleable="toggleable"
  >
    <template #subtitle>
      Subtitle
    </template>
    <template #bottom>
      <span class="d-fc-tertiary d-fs-100">Bottom</span>
    </template>
    <template #right>
      <div class="d-pr16">
        <dt-button
          kind="muted"
          importance="clear"
          @click.stop=""
        >
          <template slot="icon">
            <dt-icon
              name="external-link"
              size="200"
            />
          </template>
        </dt-button>
      </div>
    </template>
    <template #content>
      <span class="d-p16">
        Content
      </span>
    </template>
  </dt-recipe-feed-item-pill>
`})})]})}function Jt(o={}){const{wrapper:i}=Object.assign({},p(),o.components);return i?t.jsx(i,Object.assign({},o,{children:t.jsx(n,o)})):n(o)}export{Jt as default};
//# sourceMappingURL=feed_item_pill-bb4102cb.js.map
