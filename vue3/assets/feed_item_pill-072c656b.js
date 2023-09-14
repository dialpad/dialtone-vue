import{j as t}from"./jsx-runtime-6924cf94.js";import{M as m,S as s,d as r,e,f as a}from"./index-9f6cf70c.js";import{F as l,D as d,A as c,N as h}from"./feed_item_pill.stories-7cd63595.js";import{u as p}from"./index-754f58f9.js";import"./iframe-abc3dadf.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-4745f7b8.js";import"./index-356e4a49.js";import"./storybook_utils-8dde5fa6.js";import"./vue.esm-bundler-400586b0.js";import"./utils-0b5636ec.js";import"./avatar-33d3be23.js";import"./presence-d82e36f5.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-c58f5659.js";import"./icon_constants-1cfbd16e.js";import"./badge-728433a9.js";import"./banner-744904ae.js";import"./notice-19981770.js";import"./button-73bbdd30.js";import"./link_constants-51338c78.js";import"./sr_only_close_button-7ff28717.js";import"./modal-f96ddab9.js";import"./breadcrumbs-ae53ff88.js";import"./link-b0c35c95.js";import"./button_group-b6ea6090.js";import"./card-0e235599.js";import"./codeblock-5665d4d3.js";import"./combobox-463e05db.js";import"./keyboard_list_navigation-7bd5fd77.js";import"./list_item-c7d775d1.js";import"./item_layout-c5e0af6b.js";import"./skeleton-f32c2142.js";import"./collapsible-5e0fc4e1.js";import"./lazy_show-157a5908.js";import"./dropdown_separator-43752cc5.js";import"./popover-06a34398.js";import"./tippy_utils-352d0d4a.js";import"./dropdown_constants-d0cadac9.js";import"./image_viewer-e04baa8d.js";import"./input-c482ea1b.js";import"./validation_messages-aff00439.js";import"./input-04061dff.js";import"./input_group-f3c7f444.js";import"./modal-09513288.js";import"./list_item_group-6aaa9983.js";import"./pagination-74bea652.js";import"./radio-77eae4f5.js";import"./radio_constants-4f6325c5.js";import"./radio_group-e9febd99.js";import"./tab_group-200095f8.js";import"./tab-516c53cd.js";import"./tab_panel-8fa844de.js";import"./checkbox-afce74ef.js";import"./checkbox_group-c1206029.js";import"./chip-efe38cef.js";import"./select_menu-8ddb8a75.js";import"./toast-de6044ea.js";import"./toggle-5ba8d625.js";import"./tooltip-a4eaf6ae.js";import"./keyboard_shortcut-5a991749.js";import"./root_layout-d0c5dc30.js";import"./stack-cec07d53.js";import"./DtScroller-25e0e4cd.js";import"./DtEmojiPicker-7dcbba79.js";import"./index-40c4ee4c.js";import"./DtDatepicker-55d1f462.js";import"./combobox_with_popover-8f623d65.js";import"./combobox_multi_select-a316d9e9.js";import"./callbar_button-f3b2d021.js";import"./callbar_button_with_popover-8e5e7f00.js";import"./contact_info-ce2a52fe.js";import"./top_banner_info-a80dde52.js";import"./ivr_node-e4c855f4.js";import"./grouped_chip-2f831a3f.js";import"./settings_menu_button-d3d8ce52.js";import"./general_row-799d6b53.js";import"./emoji_text_wrapper-84a01c0b.js";import"./emoji-34887e7c.js";import"./emoji-ed35ed1d.js";import"./group_row-1da2477b.js";import"./contact_row-e41541d8.js";import"./unread_pill-ec1e0577.js";import"./feed_item_row-bf101729.js";import"./time_pill-36750d40.js";import"./emoji_row-403bc76b.js";import"./callbox-e388e499.js";function n(o){const i=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},p(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(m,{of:l}),`
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
`})})]})}function Wt(o={}){const{wrapper:i}=Object.assign({},p(),o.components);return i?t.jsx(i,Object.assign({},o,{children:t.jsx(n,o)})):n(o)}export{Wt as default};
//# sourceMappingURL=feed_item_pill-072c656b.js.map
