import{j as t}from"./jsx-runtime-d5918a79.js";import{M as n,b as s,C as o,d as e,e as a}from"./index-34beeb33.js";import{F as l,D as d,V as c}from"./feed_item_pill.stories-5034593f.js";import{u as m}from"./index-a33a727c.js";import"./iframe-ff5f47f1.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-cba466d5.js";import"./index-356e4a49.js";import"./storybook_utils-cf049d2e.js";import"./avatar-581443ea.js";import"./utils-9173caed.js";import"./vue.esm-d1ae8e95.js";import"./presence-7999d7f0.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-afc75046.js";import"./icon_constants-e5cbd7a1.js";import"./badge-ea2ff82a.js";import"./banner-30c90b5a.js";import"./notice-35ecda2c.js";import"./button-d2753bc0.js";import"./link_constants-8ea95ec9.js";import"./sr_only_close_button-564faa13.js";import"./modal-600bd46a.js";import"./breadcrumbs-99724056.js";import"./breadcrumb_item-23f042bd.js";import"./link-fde1f7cd.js";import"./button_group-f60cb9de.js";import"./card-bf2d171f.js";import"./codeblock-48f80f9e.js";import"./combobox-b214a01f.js";import"./keyboard_list_navigation-8c116ee6.js";import"./list_item-f8070792.js";import"./item_layout-1f335445.js";import"./skeleton-8a392920.js";import"./collapsible-76e18358.js";import"./lazy_show-ac5fd1cd.js";import"./description_list-60f1d89b.js";import"./stack_constants-4f71ebff.js";import"./dropdown_separator-4ec738f4.js";import"./popover-3145b76a.js";import"./tippy_utils-dcd4636d.js";import"./index.esm-5f67660d.js";import"./dropdown_constants-d0cadac9.js";import"./image_viewer-ae3fa759.js";import"./input-9e7bc2f6.js";import"./validation_messages-3f6a9f30.js";import"./input-919c70b3.js";import"./input_group-711d068b.js";import"./modal-fe388473.js";import"./list_item_group-d24fa880.js";import"./pagination-79bc0b91.js";import"./radio-505bb8a6.js";import"./radio_constants-4f6325c5.js";import"./radio_group-03c952ab.js";import"./tab_group-af60940c.js";import"./tab-e302f81c.js";import"./tab_panel-5f6c9511.js";import"./checkbox-9f824b6b.js";import"./checkbox_group-e4009fcf.js";import"./chip-cfc8009d.js";import"./select_menu-4ffd7971.js";import"./toast-102aff1f.js";import"./toggle-d507d72c.js";import"./tooltip-50f0db19.js";import"./keyboard_shortcut-13c16722.js";import"./root_layout-f7c4d9c9.js";import"./stack-96c8088f.js";import"./DtDatepicker-9c99a13a.js";import"./combobox_with_popover-1302dee8.js";import"./combobox_multi_select-e1b74511.js";import"./callbar_button-9cbd7570.js";import"./callbar_button_with_popover-82bbefd5.js";import"./contact_info-af51de41.js";import"./top_banner_info-b66cfd6a.js";import"./ivr_node-9e3ab75b.js";import"./grouped_chip-d46778ea.js";import"./settings_menu_button-dd83c3dc.js";import"./general_row-f41f1049.js";import"./emoji_text_wrapper-d12f53c9.js";import"./emoji-d4f60f91.js";import"./emoji-e75a4e8c.js";import"./group_row-fbb8f869.js";import"./contact_row-94f2e159.js";import"./unread_pill-a8f09a6d.js";import"./feed_item_row-04d0d5c3.js";import"./time_pill-fd708477.js";import"./emoji_row-14eb2bed.js";import"./callbox-afde0f04.js";function p(r){const i=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},m(),r.components);return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:l}),`
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
//# sourceMappingURL=feed_item_pill-88267317.js.map
