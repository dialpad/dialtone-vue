import{j as t}from"./jsx-runtime-e1b1b78d.js";import{M as m,b as s,C as r,d as e,e as a}from"./index-bb94934d.js";import{F as l,D as d,A as c,N as h}from"./feed_item_pill.stories-d3939b15.js";import{u as p}from"./index-2b26341e.js";import"./iframe-3f821ddb.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./storybook_utils-3d124f1b.js";import"./vue.esm-bundler-29004354.js";import"./utils-810cfe6f.js";import"./avatar-2ff91fa9.js";import"./presence-c56ebcc9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-bd97a3a1.js";import"./icon_constants-c8c2c53a.js";import"./badge-04e85ae2.js";import"./banner-0cbc4527.js";import"./notice-7321a005.js";import"./button-0ee7bf53.js";import"./link_constants-8ea95ec9.js";import"./sr_only_close_button-bac172b4.js";import"./modal-f96ddab9.js";import"./breadcrumbs-e943f2e1.js";import"./breadcrumb_item-bfcb158e.js";import"./link-eb563172.js";import"./button_group-daca16fc.js";import"./card-142503fd.js";import"./codeblock-430be6d3.js";import"./combobox-0c29b21a.js";import"./keyboard_list_navigation-7bd5fd77.js";import"./list_item-c9fc9067.js";import"./item_layout-5775cee2.js";import"./skeleton-121fe313.js";import"./collapsible-876c065c.js";import"./lazy_show-01e22690.js";import"./dropdown_separator-8c464f6e.js";import"./popover-df1a2ed1.js";import"./tippy_utils-352d0d4a.js";import"./dropdown_constants-d0cadac9.js";import"./image_viewer-83b66d07.js";import"./input-9cfa0723.js";import"./validation_messages-44c39e35.js";import"./input-cd46f3c8.js";import"./input_group-20c772ca.js";import"./modal-cc3f18b2.js";import"./list_item_group-63125087.js";import"./pagination-f52b63c0.js";import"./radio-f423e31f.js";import"./radio_constants-4f6325c5.js";import"./radio_group-10e3e6e7.js";import"./tab_group-203d7ffb.js";import"./tab-26661188.js";import"./tab_panel-8501d22b.js";import"./checkbox-736ceb93.js";import"./checkbox_group-1fbc5454.js";import"./chip-ade361fc.js";import"./select_menu-fc6a13d3.js";import"./toast-9988bb77.js";import"./toggle-c371adb9.js";import"./tooltip-2c164916.js";import"./keyboard_shortcut-fade352a.js";import"./root_layout-44e8d29a.js";import"./stack-9b99da45.js";import"./DtScroller-0dbf778b.js";import"./DtEmojiPicker-0fba6d99.js";import"./index-40c4ee4c.js";import"./DtDatepicker-49d480a6.js";import"./combobox_with_popover-7d9a2652.js";import"./combobox_multi_select-f5a87714.js";import"./callbar_button-6d3f50d1.js";import"./callbar_button_with_popover-8d09115a.js";import"./contact_info-f78de13b.js";import"./top_banner_info-5861fa43.js";import"./ivr_node-1cd0387e.js";import"./grouped_chip-a9256e12.js";import"./settings_menu_button-96d442b9.js";import"./general_row-7d2d3285.js";import"./emoji_text_wrapper-fb7e3f04.js";import"./emoji-4afd04d3.js";import"./emoji-87314816.js";import"./group_row-9a7b3dc4.js";import"./contact_row-d04ce2e6.js";import"./unread_pill-7544516b.js";import"./feed_item_row-e341ab45.js";import"./time_pill-93cb47d6.js";import"./emoji_row-d2d8d3b5.js";import"./attachment_carousel-f3154feb.js";import"./message_input-a59a2f9d.js";import"./rich_text_editor-2603a450.js";import"./callbox-3f244fa2.js";function n(o){const i=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},p(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(m,{of:l}),`
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
`})})]})}function $t(o={}){const{wrapper:i}=Object.assign({},p(),o.components);return i?t.jsx(i,Object.assign({},o,{children:t.jsx(n,o)})):n(o)}export{$t as default};
//# sourceMappingURL=feed_item_pill-e171376f.js.map
