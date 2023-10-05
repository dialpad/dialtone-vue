import{j as t}from"./jsx-runtime-a387afc3.js";import{M as m,b as s,C as r,d as e,e as a}from"./index-386371c2.js";import{F as l,D as d,A as c,N as h}from"./feed_item_pill.stories-a4669550.js";import{u as p}from"./index-4555256e.js";import"./iframe-355700b6.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./storybook_utils-bfe77239.js";import"./vue.esm-bundler-3a08a304.js";import"./utils-e4c66039.js";import"./avatar-fae7a216.js";import"./presence-09ebed05.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-9ba5a5ca.js";import"./icon_constants-2c203258.js";import"./badge-edc76fbd.js";import"./banner-3b9c8857.js";import"./notice-26cdf03a.js";import"./button-d398079c.js";import"./link_constants-8ea95ec9.js";import"./sr_only_close_button-b4ddfdc4.js";import"./modal-f96ddab9.js";import"./breadcrumbs-0248dc4c.js";import"./link-a679d445.js";import"./button_group-d4038df2.js";import"./card-01642ef1.js";import"./codeblock-92fa07a8.js";import"./combobox-76352167.js";import"./keyboard_list_navigation-7bd5fd77.js";import"./list_item-6721d949.js";import"./item_layout-6375e0d3.js";import"./skeleton-63e36fdd.js";import"./collapsible-cf777708.js";import"./lazy_show-619994b0.js";import"./dropdown_separator-c8dc7200.js";import"./popover-c8c1d619.js";import"./tippy_utils-352d0d4a.js";import"./dropdown_constants-d0cadac9.js";import"./image_viewer-acf24f16.js";import"./input-fb1a6c95.js";import"./validation_messages-132421aa.js";import"./input-7aec43c9.js";import"./input_group-595db89d.js";import"./modal-b2f53750.js";import"./list_item_group-62b66108.js";import"./pagination-186f5f90.js";import"./radio-d2c98925.js";import"./radio_constants-4f6325c5.js";import"./radio_group-42531a19.js";import"./tab_group-b574a701.js";import"./tab-3e987c1c.js";import"./tab_panel-c7955415.js";import"./checkbox-357121d8.js";import"./checkbox_group-9ac0aa70.js";import"./chip-0f84d638.js";import"./select_menu-68e011ab.js";import"./toast-ee8db70d.js";import"./toggle-ae2745b8.js";import"./tooltip-dd2a68ac.js";import"./keyboard_shortcut-9b5f6ba0.js";import"./root_layout-6d0da244.js";import"./stack-d47e2c75.js";import"./DtScroller-f9a35329.js";import"./DtEmojiPicker-728221f2.js";import"./index-40c4ee4c.js";import"./DtDatepicker-09393a09.js";import"./combobox_with_popover-a6485ae6.js";import"./combobox_multi_select-2efb2ac7.js";import"./callbar_button-606fc2df.js";import"./callbar_button_with_popover-be7c1614.js";import"./contact_info-08fed866.js";import"./top_banner_info-cd1b7e46.js";import"./ivr_node-26c5ebca.js";import"./grouped_chip-623cd424.js";import"./settings_menu_button-8243cb24.js";import"./general_row-e3de742c.js";import"./emoji_text_wrapper-a80ec6d2.js";import"./emoji-e8b38594.js";import"./emoji-87314816.js";import"./group_row-8b27c028.js";import"./contact_row-cff0927f.js";import"./unread_pill-8672d078.js";import"./feed_item_row-554a1fcc.js";import"./time_pill-7a03ba79.js";import"./emoji_row-2bb1a9b9.js";import"./callbox-5903f753.js";function n(o){const i=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},p(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(m,{of:l}),`
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
`})})]})}function Qt(o={}){const{wrapper:i}=Object.assign({},p(),o.components);return i?t.jsx(i,Object.assign({},o,{children:t.jsx(n,o)})):n(o)}export{Qt as default};
//# sourceMappingURL=feed_item_pill-1ca53d01.js.map
