import{j as t}from"./jsx-runtime-3679461c.js";import{M as n,b as s,C as o,d as e,e as a}from"./index-0c18a3ef.js";import{F as l,D as d,V as c}from"./feed_item_pill.stories-2511f1df.js";import{u as m}from"./index-64dd570d.js";import"./iframe-44fc3919.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./storybook_utils-d9dec137.js";import"./vue.esm-bundler-29004354.js";import"./utils-4fd314d5.js";import"./avatar-829d28a7.js";import"./presence-c56ebcc9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-64f6200c.js";import"./icon_constants-cdd78a30.js";import"./badge-1e3e034d.js";import"./banner-2f5e4a0f.js";import"./notice-77c92abe.js";import"./button-cbf6059f.js";import"./link_constants-8ea95ec9.js";import"./sr_only_close_button-4662a1cf.js";import"./modal-f96ddab9.js";import"./breadcrumbs-845520be.js";import"./breadcrumb_item-bfcb158e.js";import"./link-eb563172.js";import"./button_group-daca16fc.js";import"./card-1effce05.js";import"./codeblock-430be6d3.js";import"./combobox-232b4940.js";import"./keyboard_list_navigation-7bd5fd77.js";import"./list_item-d77fc8e2.js";import"./item_layout-5775cee2.js";import"./skeleton-121fe313.js";import"./collapsible-78f8a817.js";import"./lazy_show-01e22690.js";import"./dropdown_separator-bc248d86.js";import"./popover-77cf393e.js";import"./tippy_utils-352d0d4a.js";import"./dropdown_constants-d0cadac9.js";import"./image_viewer-83b8a464.js";import"./input-5edbcbbf.js";import"./validation_messages-175bd892.js";import"./input-33fe22c5.js";import"./input_group-4d17f312.js";import"./modal-a708d141.js";import"./list_item_group-01419394.js";import"./pagination-5b1cb473.js";import"./radio-8518d438.js";import"./radio_constants-4f6325c5.js";import"./radio_group-b8c1a5bc.js";import"./tab_group-6a9db598.js";import"./tab-3c336317.js";import"./tab_panel-8501d22b.js";import"./checkbox-3b5fced8.js";import"./checkbox_group-5242f90a.js";import"./chip-dd612e4c.js";import"./select_menu-b628cb78.js";import"./toast-aa758a25.js";import"./toggle-550997c5.js";import"./tooltip-d2295505.js";import"./keyboard_shortcut-aa4c49e6.js";import"./root_layout-44e8d29a.js";import"./stack-9b99da45.js";import"./DtScroller-0dbf778b.js";import"./DtEmojiPicker-cab90a6b.js";import"./index-40c4ee4c.js";import"./DtDatepicker-fec3e907.js";import"./combobox_with_popover-a1cf5ce4.js";import"./combobox_multi_select-cbe4f727.js";import"./callbar_button-48c43c10.js";import"./callbar_button_with_popover-49ccb3cf.js";import"./contact_info-5db7f06a.js";import"./top_banner_info-5861fa43.js";import"./ivr_node-fce49748.js";import"./grouped_chip-b8641ff1.js";import"./settings_menu_button-aa7673f9.js";import"./general_row-7484ecc6.js";import"./emoji_text_wrapper-e536afc3.js";import"./emoji-54f0d518.js";import"./emoji-87314816.js";import"./group_row-0011ab64.js";import"./contact_row-491c1be6.js";import"./unread_pill-73cd7999.js";import"./feed_item_row-a93e8bbc.js";import"./time_pill-93cb47d6.js";import"./emoji_row-5afd5fa8.js";import"./attachment_carousel-55377082.js";import"./message_input-bcf7417d.js";import"./rich_text_editor-244a4509.js";import"./callbox-919bd13b.js";function p(r){const i=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},m(),r.components);return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:l}),`
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
`})})]})}function Zt(r={}){const{wrapper:i}=Object.assign({},m(),r.components);return i?t.jsx(i,Object.assign({},r,{children:t.jsx(p,r)})):p(r)}export{Zt as default};
//# sourceMappingURL=feed_item_pill-81fbf0a9.js.map
