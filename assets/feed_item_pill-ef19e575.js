import{j as t}from"./jsx-runtime-21158485.js";import{M as m,b as s,C as r,d as e,e as a}from"./index-47689389.js";import{F as l,D as d,A as c,N as h}from"./feed_item_pill.stories-4013125e.js";import{u as p}from"./index-5087b79c.js";import"./iframe-3769dc5e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-cba466d5.js";import"./index-356e4a49.js";import"./storybook_utils-0b506883.js";import"./vue.esm-ba2ca387.js";import"./avatar-31026723.js";import"./presence-7999d7f0.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-d9bd2c26.js";import"./icon_constants-9268d030.js";import"./badge-f90df2e3.js";import"./banner-69414c75.js";import"./notice-1d6f4f15.js";import"./button-4cf26c8f.js";import"./link_constants-8ea95ec9.js";import"./sr_only_close_button-d5a5873f.js";import"./modal-600bd46a.js";import"./breadcrumbs-be7dd233.js";import"./link-b1810f17.js";import"./button_group-f60cb9de.js";import"./card-bf2d171f.js";import"./codeblock-48f80f9e.js";import"./combobox-f0abf307.js";import"./keyboard_list_navigation-8c116ee6.js";import"./list_item-c60ab935.js";import"./item_layout-1f335445.js";import"./skeleton-8a392920.js";import"./collapsible-91416db5.js";import"./lazy_show-ac5fd1cd.js";import"./dropdown_separator-23e5bccf.js";import"./popover-fdef22c4.js";import"./tippy_utils-dcd4636d.js";import"./index.esm-8e1c03ab.js";import"./dropdown_constants-d0cadac9.js";import"./image_viewer-572d92c1.js";import"./input-66e1963b.js";import"./validation_messages-063e1b21.js";import"./input-1e7d1558.js";import"./input_group-402fe3b0.js";import"./modal-4a3660d5.js";import"./list_item_group-3675ec19.js";import"./pagination-8665baa6.js";import"./radio-d687ccde.js";import"./radio_constants-4f6325c5.js";import"./radio_group-36dba697.js";import"./tab_group-1c95ce94.js";import"./tab-5ad78d72.js";import"./tab_panel-5f6c9511.js";import"./checkbox-cd38271d.js";import"./checkbox_group-be0942ab.js";import"./chip-b19ae464.js";import"./select_menu-a47c59c4.js";import"./toast-31431021.js";import"./toggle-9541fe5f.js";import"./tooltip-1aeb8a62.js";import"./keyboard_shortcut-f1870595.js";import"./root_layout-489ee9b0.js";import"./stack-793861c1.js";import"./DtDatepicker-e9a0aef3.js";import"./combobox_with_popover-d167f0f9.js";import"./combobox_multi_select-0dfdd7e2.js";import"./callbar_button-217710a5.js";import"./callbar_button_with_popover-76135383.js";import"./contact_info-0a5c2555.js";import"./top_banner_info-b66cfd6a.js";import"./ivr_node-167bfc11.js";import"./grouped_chip-b3d2531d.js";import"./settings_menu_button-6bd3fa0a.js";import"./general_row-510bc7ee.js";import"./emoji_text_wrapper-604cb808.js";import"./emoji-f809950c.js";import"./emoji-e75a4e8c.js";import"./group_row-5c982c18.js";import"./contact_row-23678238.js";import"./unread_pill-2d36fd3d.js";import"./feed_item_row-e20d5345.js";import"./time_pill-fd708477.js";import"./emoji_row-1c59f7ea.js";import"./callbox-8762adef.js";function n(o){const i=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},p(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(m,{of:l}),`
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
`})})]})}function Ht(o={}){const{wrapper:i}=Object.assign({},p(),o.components);return i?t.jsx(i,Object.assign({},o,{children:t.jsx(n,o)})):n(o)}export{Ht as default};
//# sourceMappingURL=feed_item_pill-ef19e575.js.map
