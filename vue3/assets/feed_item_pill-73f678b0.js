import{j as t}from"./jsx-runtime-58662196.js";import{M as n,b as s,C as o,d as e,e as a}from"./index-16583901.js";import{F as l,D as d,V as c}from"./feed_item_pill.stories-f1491bce.js";import{u as m}from"./index-e7913bfb.js";import"./iframe-cd33a050.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./storybook_utils-182ea7b7.js";import"./avatar-acedcaa6.js";import"./utils-b9178890.js";import"./vue.esm-bundler-2fc8d911.js";import"./presence-b753ccee.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-19ead0e1.js";import"./icon_constants-e5cbd7a1.js";import"./badge-b9b3f739.js";import"./banner-d5cd23e8.js";import"./notice-d5ede14e.js";import"./button-54a66549.js";import"./link_constants-8ea95ec9.js";import"./sr_only_close_button-693af418.js";import"./modal-f96ddab9.js";import"./breadcrumbs-ee24488d.js";import"./breadcrumb_item-d8ee1a24.js";import"./link-040ab9d9.js";import"./button_group-b704e657.js";import"./card-4a3261b0.js";import"./codeblock-3604e45b.js";import"./combobox-bd14cb27.js";import"./keyboard_list_navigation-7bd5fd77.js";import"./list_item-08ce5296.js";import"./item_layout-4d1ec9e1.js";import"./skeleton-35a1d81f.js";import"./collapsible-13d753a7.js";import"./lazy_show-ebabbde0.js";import"./description_list-13c5d62c.js";import"./stack_constants-4f71ebff.js";import"./dropdown_separator-9929e2d7.js";import"./popover-b06d308e.js";import"./tippy_utils-352d0d4a.js";import"./dropdown_constants-d0cadac9.js";import"./image_viewer-f34c3518.js";import"./input-51336c9c.js";import"./validation_messages-e43e2576.js";import"./input-f3da5138.js";import"./input_group-361ba5a9.js";import"./modal-b6ce0a78.js";import"./list_item_group-fde83a41.js";import"./pagination-9bfce654.js";import"./radio-8937ec6a.js";import"./radio_constants-4f6325c5.js";import"./radio_group-a961fb48.js";import"./tab_group-c12945b1.js";import"./tab-3d467e31.js";import"./tab_panel-69a223f3.js";import"./checkbox-971150ae.js";import"./checkbox_group-1ccccdcf.js";import"./chip-becc03b4.js";import"./select_menu-0f66d980.js";import"./toast-eb23bbc5.js";import"./toggle-692f2d5e.js";import"./tooltip-e850e7f1.js";import"./keyboard_shortcut-7cca7d79.js";import"./root_layout-a39cf6bd.js";import"./stack-a2f8fb18.js";import"./DtScroller-d6027634.js";import"./DtEmojiPicker-e76a258b.js";import"./index-40c4ee4c.js";import"./DtDatepicker-f8c4d6a2.js";import"./combobox_with_popover-45555096.js";import"./combobox_multi_select-c4ade899.js";import"./callbar_button-e7b79cca.js";import"./callbar_button_with_popover-7f8cbb81.js";import"./contact_info-8169607a.js";import"./top_banner_info-c95f69bb.js";import"./ivr_node-3a995508.js";import"./grouped_chip-cb6559fc.js";import"./settings_menu_button-e5709906.js";import"./general_row-c1e1a3ba.js";import"./emoji_text_wrapper-8dfab392.js";import"./emoji-4e7f6bdd.js";import"./emoji-87314816.js";import"./group_row-0cb6c6cf.js";import"./contact_row-9e6ab088.js";import"./unread_pill-d3904250.js";import"./feed_item_row-98463fda.js";import"./time_pill-0abf7d35.js";import"./emoji_row-648ece58.js";import"./attachment_carousel-95940fcd.js";import"./message_input-90edfe4e.js";import"./rich_text_editor-fd342067.js";import"./callbox-922718b7.js";function p(r){const i=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},m(),r.components);return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:l}),`
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
//# sourceMappingURL=feed_item_pill-73f678b0.js.map
