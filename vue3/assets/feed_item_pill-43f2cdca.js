import{j as t}from"./jsx-runtime-fe4b55cb.js";import{M as m,b as s,C as r,d as e,e as a}from"./index-73dc3dd2.js";import{F as l,D as d,A as c,N as h}from"./feed_item_pill.stories-a7baff93.js";import{u as p}from"./index-9b37a073.js";import"./iframe-1783f691.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./storybook_utils-f49e9550.js";import"./vue.esm-bundler-3a08a304.js";import"./utils-9b223a5d.js";import"./avatar-8eea22b9.js";import"./presence-09ebed05.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-a0437632.js";import"./icon_constants-ffb47bba.js";import"./badge-d03f4e65.js";import"./banner-afaf9b0f.js";import"./notice-0a41d5e7.js";import"./button-86b4d8a0.js";import"./link_constants-8ea95ec9.js";import"./sr_only_close_button-5ac00187.js";import"./modal-f96ddab9.js";import"./breadcrumbs-6178bd4f.js";import"./breadcrumb_item-79f43797.js";import"./link-3e0667f0.js";import"./button_group-d4038df2.js";import"./card-9b4a19c8.js";import"./codeblock-92fa07a8.js";import"./combobox-7ba75bcd.js";import"./keyboard_list_navigation-7bd5fd77.js";import"./list_item-92b8a53c.js";import"./item_layout-6375e0d3.js";import"./skeleton-63e36fdd.js";import"./collapsible-de504c3e.js";import"./lazy_show-619994b0.js";import"./dropdown_separator-23d2e911.js";import"./popover-fb2ef365.js";import"./tippy_utils-352d0d4a.js";import"./dropdown_constants-d0cadac9.js";import"./image_viewer-c8967052.js";import"./input-13c2002a.js";import"./validation_messages-3567a33d.js";import"./input-9ec1d89e.js";import"./input_group-531a97a6.js";import"./modal-22b0b3a3.js";import"./list_item_group-c3d2a91a.js";import"./pagination-f055250e.js";import"./radio-6e51e2ca.js";import"./radio_constants-4f6325c5.js";import"./radio_group-7afb714c.js";import"./tab_group-f5ada0de.js";import"./tab-2b4f1e69.js";import"./tab_panel-c7955415.js";import"./checkbox-3177a69e.js";import"./checkbox_group-d5b83d4e.js";import"./chip-831d9d21.js";import"./select_menu-a69c229b.js";import"./toast-82f56f46.js";import"./toggle-43b6773f.js";import"./tooltip-d715948d.js";import"./keyboard_shortcut-747f4d61.js";import"./root_layout-2c02268c.js";import"./stack-d47e2c75.js";import"./DtScroller-f9a35329.js";import"./DtEmojiPicker-2afff284.js";import"./index-40c4ee4c.js";import"./DtDatepicker-efb85e64.js";import"./combobox_with_popover-64a1c992.js";import"./combobox_multi_select-66b6db91.js";import"./callbar_button-488eba61.js";import"./callbar_button_with_popover-2a103f72.js";import"./contact_info-1c51808c.js";import"./top_banner_info-cd1b7e46.js";import"./ivr_node-8f85a39a.js";import"./grouped_chip-2fec5c86.js";import"./settings_menu_button-1a846821.js";import"./general_row-8998fd3b.js";import"./emoji_text_wrapper-36abc688.js";import"./emoji-a3bf2fe9.js";import"./emoji-87314816.js";import"./group_row-90c2e6a5.js";import"./contact_row-aa71e4dd.js";import"./unread_pill-6c6a0d23.js";import"./feed_item_row-d8da4471.js";import"./time_pill-7a03ba79.js";import"./emoji_row-641d71a3.js";import"./callbox-9faebb21.js";function n(o){const i=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},p(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(m,{of:l}),`
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
//# sourceMappingURL=feed_item_pill-43f2cdca.js.map
