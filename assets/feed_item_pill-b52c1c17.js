import{j as t}from"./jsx-runtime-bf99de46.js";import{M as n,b as s,C as o,d as e,e as a}from"./index-7e02d413.js";import{F as l,D as d,V as c}from"./feed_item_pill.stories-be176cdb.js";import{u as m}from"./index-d7533403.js";import"./iframe-92a03cc5.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-cba466d5.js";import"./index-356e4a49.js";import"./storybook_utils-cf049d2e.js";import"./avatar-b2b5b11a.js";import"./utils-2ff589c9.js";import"./vue.esm-ba2ca387.js";import"./presence-7999d7f0.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-666860e3.js";import"./icon_constants-e5cbd7a1.js";import"./badge-4eb2a0a8.js";import"./banner-0fa4e8bb.js";import"./notice-ff15f941.js";import"./button-d2753bc0.js";import"./link_constants-8ea95ec9.js";import"./sr_only_close_button-5d8c3503.js";import"./modal-600bd46a.js";import"./breadcrumbs-b6eaba2d.js";import"./breadcrumb_item-23f042bd.js";import"./link-fde1f7cd.js";import"./button_group-f60cb9de.js";import"./card-bf2d171f.js";import"./codeblock-48f80f9e.js";import"./combobox-c761ddc5.js";import"./keyboard_list_navigation-8c116ee6.js";import"./list_item-cdc6b447.js";import"./item_layout-1f335445.js";import"./skeleton-8a392920.js";import"./collapsible-ea96ffea.js";import"./lazy_show-ac5fd1cd.js";import"./description_list-60f1d89b.js";import"./stack_constants-4f71ebff.js";import"./dropdown_separator-a140bbaf.js";import"./popover-b661143d.js";import"./tippy_utils-dcd4636d.js";import"./index.esm-8e1c03ab.js";import"./dropdown_constants-d0cadac9.js";import"./image_viewer-ce9da476.js";import"./input-3ff40748.js";import"./validation_messages-4ea91f48.js";import"./input-ef38d5f1.js";import"./input_group-10706f84.js";import"./modal-d1c4bfd8.js";import"./list_item_group-767e88e9.js";import"./pagination-4c082cb1.js";import"./radio-6b6d6aae.js";import"./radio_constants-4f6325c5.js";import"./radio_group-c39b1108.js";import"./tab_group-af60940c.js";import"./tab-e302f81c.js";import"./tab_panel-5f6c9511.js";import"./checkbox-ec6ef33f.js";import"./checkbox_group-5c05cd84.js";import"./chip-71002db5.js";import"./select_menu-dc300681.js";import"./toast-163409fb.js";import"./toggle-c7c1b649.js";import"./tooltip-7d41a4c7.js";import"./keyboard_shortcut-b9df6787.js";import"./root_layout-f7c4d9c9.js";import"./stack-96c8088f.js";import"./DtDatepicker-8c4314d7.js";import"./combobox_with_popover-b0fc0874.js";import"./combobox_multi_select-88ef024f.js";import"./callbar_button-d91e77cf.js";import"./callbar_button_with_popover-f6040270.js";import"./contact_info-baec12c8.js";import"./top_banner_info-b66cfd6a.js";import"./ivr_node-1e4cbe2c.js";import"./grouped_chip-4ba64fc0.js";import"./settings_menu_button-82416fae.js";import"./general_row-79061f93.js";import"./emoji_text_wrapper-d12f53c9.js";import"./emoji-d4f60f91.js";import"./emoji-e75a4e8c.js";import"./group_row-d223227b.js";import"./contact_row-9358761c.js";import"./unread_pill-9adf3df6.js";import"./feed_item_row-3de87d1f.js";import"./time_pill-fd708477.js";import"./emoji_row-5038ca4f.js";import"./callbox-c59d278d.js";function p(r){const i=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},m(),r.components);return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:l}),`
`,t.jsx(i.h1,{id:"feed-item-pill",children:"Feed Item Pill"}),`
`,t.jsx(s,{children:t.jsx(i.p,{children:"A generic layout for different Feed Items"})}),`
`,t.jsx(i.h2,{id:"base-style",children:"Base Style"}),`
`,t.jsx(o,{children:t.jsx(e,{of:d})}),`
`,t.jsx(i.h2,{id:"variants",children:"Variants"}),`
`,t.jsx(o,{children:t.jsx(e,{of:c})}),`
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
`})})]})}function Tt(r={}){const{wrapper:i}=Object.assign({},m(),r.components);return i?t.jsx(i,Object.assign({},r,{children:t.jsx(p,r)})):p(r)}export{Tt as default};
//# sourceMappingURL=feed_item_pill-b52c1c17.js.map
