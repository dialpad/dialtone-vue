import{j as t}from"./jsx-runtime-132e93bf.js";import{M as m,S as s,d as r,e,f as a}from"./index-bfcd420a.js";import{F as l,D as d,A as c,N as h}from"./feed_item_pill.stories-10b72d66.js";import{u as p}from"./index-5b9477f2.js";import"./iframe-3d845731.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./storybook_utils-df55c436.js";import"./vue.esm-ba2ca387.js";import"./avatar-7f75776e.js";import"./presence-7999d7f0.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-fbaa82b1.js";import"./icon_constants-a1651734.js";import"./badge-f04f7fc7.js";import"./banner-064cb0df.js";import"./notice-d99f6b73.js";import"./button-82727ed7.js";import"./link_constants-51338c78.js";import"./sr_only_close_button-79effdb8.js";import"./modal-600bd46a.js";import"./breadcrumbs-85530dd9.js";import"./link-ea758f3d.js";import"./button_group-f60cb9de.js";import"./card-bf2d171f.js";import"./codeblock-48f80f9e.js";import"./combobox-d643eecd.js";import"./keyboard_list_navigation-8c116ee6.js";import"./list_item-afcfe986.js";import"./item_layout-1f335445.js";import"./skeleton-8a392920.js";import"./collapsible-5292ca5c.js";import"./lazy_show-ac5fd1cd.js";import"./dropdown_separator-42a15b11.js";import"./popover-e32aee2c.js";import"./tippy_utils-dcd4636d.js";import"./index.esm-8e1c03ab.js";import"./dropdown_constants-d0cadac9.js";import"./image_viewer-0e4bd6f8.js";import"./input-6d46c80e.js";import"./validation_messages-8cd282e0.js";import"./input-cd6f758e.js";import"./input_group-ae26022b.js";import"./modal-a2d8ff06.js";import"./list_item_group-747e7e4e.js";import"./pagination-a95947fd.js";import"./radio-c37dfe39.js";import"./radio_constants-4f6325c5.js";import"./radio_group-e23c5073.js";import"./tab_group-9ded31b8.js";import"./tab-8115bfcd.js";import"./tab_panel-5f6c9511.js";import"./checkbox-d1b4531b.js";import"./checkbox_group-dbdf5cdf.js";import"./chip-a528c2db.js";import"./select_menu-e44c9379.js";import"./toast-6ffaa8bc.js";import"./toggle-c3ebf625.js";import"./tooltip-65b3e931.js";import"./keyboard_shortcut-962e1fb5.js";import"./root_layout-489ee9b0.js";import"./stack-793861c1.js";import"./DtDatepicker-c42cdabd.js";import"./combobox_with_popover-840a2525.js";import"./combobox_multi_select-a44abe79.js";import"./callbar_button-1cc8fd46.js";import"./callbar_button_with_popover-0a4a8c90.js";import"./contact_info-15f5356d.js";import"./top_banner_info-b66cfd6a.js";import"./ivr_node-80f3c359.js";import"./grouped_chip-68a0c630.js";import"./settings_menu_button-6b406aa6.js";import"./general_row-6dcc1448.js";import"./emoji_text_wrapper-31d75966.js";import"./emoji-c63c56ec.js";import"./emoji-1f0f2b27.js";import"./group_row-cef1f9bd.js";import"./contact_row-731f3149.js";import"./unread_pill-dd195ba4.js";import"./feed_item_row-3791aa78.js";import"./time_pill-fd708477.js";import"./emoji_row-74afcc7c.js";import"./callbox-1cf20e5c.js";function n(o){const i=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},p(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(m,{of:l}),`
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
//# sourceMappingURL=feed_item_pill-6ef0dc39.js.map
