import{j as t}from"./jsx-runtime-1f74d513.js";import{M as m,b as s,C as r,d as e,e as a}from"./index-f7c7f393.js";import{F as l,D as d,A as c,N as h}from"./feed_item_pill.stories-60ea5ed0.js";import{u as p}from"./index-b487ed8c.js";import"./iframe-0674cc5c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-cba466d5.js";import"./index-356e4a49.js";import"./storybook_utils-52560a53.js";import"./vue.esm-ba2ca387.js";import"./avatar-945b9ece.js";import"./presence-7999d7f0.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-cdbe4e67.js";import"./icon_constants-cf231ad1.js";import"./badge-20f60748.js";import"./banner-64a40940.js";import"./notice-90e8203f.js";import"./button-4cf26c8f.js";import"./link_constants-8ea95ec9.js";import"./sr_only_close_button-2d23f6f1.js";import"./modal-600bd46a.js";import"./breadcrumbs-1f7fd1af.js";import"./breadcrumb_item-23f042bd.js";import"./link-fde1f7cd.js";import"./button_group-f60cb9de.js";import"./card-bf2d171f.js";import"./codeblock-48f80f9e.js";import"./combobox-214db2e6.js";import"./keyboard_list_navigation-8c116ee6.js";import"./list_item-99779e14.js";import"./item_layout-1f335445.js";import"./skeleton-8a392920.js";import"./collapsible-0c6bb5bf.js";import"./lazy_show-ac5fd1cd.js";import"./dropdown_separator-6741a62e.js";import"./popover-2967c9b9.js";import"./tippy_utils-dcd4636d.js";import"./index.esm-8e1c03ab.js";import"./dropdown_constants-d0cadac9.js";import"./image_viewer-280c5c1f.js";import"./input-c9dce58d.js";import"./validation_messages-bca1d76b.js";import"./input-5dc2d68e.js";import"./input_group-62783ab1.js";import"./modal-892e66b2.js";import"./list_item_group-0f76e56f.js";import"./pagination-c220dd28.js";import"./radio-fa8ade86.js";import"./radio_constants-4f6325c5.js";import"./radio_group-d0d1f906.js";import"./tab_group-1c95ce94.js";import"./tab-5ad78d72.js";import"./tab_panel-5f6c9511.js";import"./checkbox-c39a1664.js";import"./checkbox_group-cef8b1e0.js";import"./chip-def57345.js";import"./select_menu-0b9cfba0.js";import"./toast-561827a4.js";import"./toggle-08c50e45.js";import"./tooltip-535b464f.js";import"./keyboard_shortcut-44dd39fb.js";import"./root_layout-22cd5d8f.js";import"./stack-c26ae66b.js";import"./DtDatepicker-2ab194f4.js";import"./combobox_with_popover-c87e47bc.js";import"./combobox_multi_select-abe48e45.js";import"./callbar_button-f8676ed8.js";import"./callbar_button_with_popover-c302a3bb.js";import"./contact_info-21c5bc82.js";import"./top_banner_info-b66cfd6a.js";import"./ivr_node-9d3f2732.js";import"./grouped_chip-70f702b3.js";import"./settings_menu_button-686390e8.js";import"./general_row-c249064f.js";import"./emoji_text_wrapper-1ef2d33a.js";import"./emoji-1e4f75b8.js";import"./emoji-e75a4e8c.js";import"./group_row-e8cf545b.js";import"./contact_row-9882b337.js";import"./unread_pill-a27a2b5d.js";import"./feed_item_row-dc559336.js";import"./time_pill-fd708477.js";import"./emoji_row-a8b2581f.js";import"./callbox-cd0618ab.js";function n(o){const i=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},p(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(m,{of:l}),`
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
//# sourceMappingURL=feed_item_pill-8df18842.js.map
