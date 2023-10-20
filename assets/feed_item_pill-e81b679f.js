import{j as t}from"./jsx-runtime-6c608c2d.js";import{M as m,b as s,C as r,d as e,e as a}from"./index-ea03a9dd.js";import{F as l,D as d,A as c,N as h}from"./feed_item_pill.stories-4816646a.js";import{u as p}from"./index-e467b7f7.js";import"./iframe-56f3dbf7.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-cba466d5.js";import"./index-356e4a49.js";import"./storybook_utils-4cdf99b7.js";import"./utils-5c9c602d.js";import"./vue.esm-ba2ca387.js";import"./avatar-f5e3e952.js";import"./presence-7999d7f0.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-9c3e9b89.js";import"./icon_constants-a1e812ca.js";import"./badge-a9af4dbe.js";import"./banner-873c828c.js";import"./notice-6e1443ea.js";import"./button-4cf26c8f.js";import"./link_constants-8ea95ec9.js";import"./sr_only_close_button-626451a3.js";import"./modal-600bd46a.js";import"./breadcrumbs-a8f7af5e.js";import"./breadcrumb_item-23f042bd.js";import"./link-fde1f7cd.js";import"./button_group-f60cb9de.js";import"./card-bf2d171f.js";import"./codeblock-48f80f9e.js";import"./combobox-7d267f6c.js";import"./keyboard_list_navigation-8c116ee6.js";import"./list_item-dfa6c14d.js";import"./item_layout-1f335445.js";import"./skeleton-8a392920.js";import"./collapsible-6f9ce84c.js";import"./lazy_show-ac5fd1cd.js";import"./dropdown_separator-d1731f2a.js";import"./popover-83dfc75a.js";import"./tippy_utils-dcd4636d.js";import"./index.esm-8e1c03ab.js";import"./dropdown_constants-d0cadac9.js";import"./image_viewer-3a21cf52.js";import"./input-55065740.js";import"./validation_messages-7a0488a6.js";import"./input-1a0dec63.js";import"./input_group-50b079b4.js";import"./modal-01e342a8.js";import"./list_item_group-c7823e4f.js";import"./pagination-55b58e64.js";import"./radio-7a1461a1.js";import"./radio_constants-4f6325c5.js";import"./radio_group-01185672.js";import"./tab_group-1c95ce94.js";import"./tab-5ad78d72.js";import"./tab_panel-5f6c9511.js";import"./checkbox-c8f0c2bc.js";import"./checkbox_group-04ca1977.js";import"./chip-b0e37cba.js";import"./select_menu-683800ff.js";import"./toast-c919aa1f.js";import"./toggle-a5cb9bd2.js";import"./tooltip-c50b9a32.js";import"./keyboard_shortcut-50858e18.js";import"./root_layout-5da0ee91.js";import"./stack-c26ae66b.js";import"./DtDatepicker-0bb4a79d.js";import"./combobox_with_popover-a3ee78ec.js";import"./combobox_multi_select-63e48850.js";import"./callbar_button-7692a33a.js";import"./callbar_button_with_popover-e1620567.js";import"./contact_info-0a988498.js";import"./top_banner_info-b66cfd6a.js";import"./ivr_node-0b2c6c2a.js";import"./grouped_chip-067576f9.js";import"./settings_menu_button-168a3965.js";import"./general_row-af9b569d.js";import"./emoji_text_wrapper-5ced626c.js";import"./emoji-9110c20b.js";import"./emoji-e75a4e8c.js";import"./group_row-cd356f94.js";import"./contact_row-caae2f42.js";import"./unread_pill-9e05fed3.js";import"./feed_item_row-7be5d4c4.js";import"./time_pill-fd708477.js";import"./emoji_row-d4e90d9d.js";import"./callbox-c881aaab.js";function n(o){const i=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},p(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(m,{of:l}),`
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
`})})]})}function Kt(o={}){const{wrapper:i}=Object.assign({},p(),o.components);return i?t.jsx(i,Object.assign({},o,{children:t.jsx(n,o)})):n(o)}export{Kt as default};
//# sourceMappingURL=feed_item_pill-e81b679f.js.map
