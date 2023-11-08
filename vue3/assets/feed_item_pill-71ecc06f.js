import{j as t}from"./jsx-runtime-2e103b1c.js";import{M as n,b as s,C as o,d as e,e as a}from"./index-22cd5f11.js";import{F as l,D as d,V as c}from"./feed_item_pill.stories-804ac0d1.js";import{u as m}from"./index-8fec95ed.js";import"./iframe-19f533ad.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./storybook_utils-182ea7b7.js";import"./avatar-f553a336.js";import"./utils-9eb727eb.js";import"./vue.esm-bundler-15c892b6.js";import"./presence-5ea7dfb8.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-887d57b1.js";import"./icon_constants-e5cbd7a1.js";import"./badge-02308bd6.js";import"./banner-82c3a414.js";import"./notice-756b55ae.js";import"./button-5c6db19f.js";import"./link_constants-8ea95ec9.js";import"./sr_only_close_button-20f760cb.js";import"./modal-f96ddab9.js";import"./breadcrumbs-3c7ebecf.js";import"./breadcrumb_item-1957fda3.js";import"./link-0d2202f6.js";import"./button_group-3f2fb87f.js";import"./card-96360bc6.js";import"./codeblock-e997d5a2.js";import"./combobox-025975e6.js";import"./keyboard_list_navigation-7bd5fd77.js";import"./list_item-c8293229.js";import"./item_layout-bfbf4253.js";import"./skeleton-315f57f2.js";import"./collapsible-19aabb83.js";import"./lazy_show-d9d3300a.js";import"./description_list-e8bb2dca.js";import"./stack_constants-4f71ebff.js";import"./dropdown_separator-8bf9b439.js";import"./popover-b7fef8c5.js";import"./tippy_utils-352d0d4a.js";import"./dropdown_constants-d0cadac9.js";import"./image_viewer-fb2db55c.js";import"./input-f94f716e.js";import"./validation_messages-8be2f4db.js";import"./input-1c22fd31.js";import"./input_group-53acc521.js";import"./modal-2a0fe028.js";import"./list_item_group-1849d8d6.js";import"./pagination-dfede894.js";import"./radio-fdab3bb6.js";import"./radio_constants-4f6325c5.js";import"./radio_group-cb26c034.js";import"./tab_group-b87c6d02.js";import"./tab-5250a388.js";import"./tab_panel-f8e75654.js";import"./checkbox-a195daef.js";import"./checkbox_group-b6cf34d1.js";import"./chip-b1ce291a.js";import"./select_menu-a71afbb3.js";import"./toast-91f76a86.js";import"./toggle-60ecdd86.js";import"./tooltip-89a8d55b.js";import"./keyboard_shortcut-0a75f663.js";import"./root_layout-7bc94d3c.js";import"./stack-ddd639bc.js";import"./DtScroller-790d4b4d.js";import"./DtEmojiPicker-bca0478e.js";import"./index-40c4ee4c.js";import"./DtDatepicker-91e4facf.js";import"./combobox_with_popover-5e951bc1.js";import"./combobox_multi_select-c762638e.js";import"./callbar_button-39f6a247.js";import"./callbar_button_with_popover-e284b8f2.js";import"./contact_info-46c93763.js";import"./top_banner_info-ea4f11e4.js";import"./ivr_node-0368d714.js";import"./grouped_chip-5ed8db5b.js";import"./settings_menu_button-2710b7bf.js";import"./general_row-91fb5afb.js";import"./emoji_text_wrapper-891446e2.js";import"./emoji-d6f56f81.js";import"./emoji-87314816.js";import"./group_row-d848fdbb.js";import"./contact_row-3ace8fc6.js";import"./unread_pill-1e2d28dc.js";import"./feed_item_row-09a50354.js";import"./time_pill-fae5a4c9.js";import"./emoji_row-5e448cd1.js";import"./attachment_carousel-5d0ad00d.js";import"./message_input-3af23db4.js";import"./rich_text_editor-b2bbfebe.js";import"./callbox-3ccf951f.js";function p(r){const i=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},m(),r.components);return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:l}),`
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
`})})]})}function ti(r={}){const{wrapper:i}=Object.assign({},m(),r.components);return i?t.jsx(i,Object.assign({},r,{children:t.jsx(p,r)})):p(r)}export{ti as default};
//# sourceMappingURL=feed_item_pill-71ecc06f.js.map
