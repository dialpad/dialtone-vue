import{j as t}from"./jsx-runtime-9b51cb68.js";import{M as n,b as s,C as o,d as e,e as a}from"./index-afb608c4.js";import{F as l,D as d,V as c}from"./feed_item_pill.stories-62c5c3f6.js";import{u as m}from"./index-1dc5c7cf.js";import"./iframe-3a730af8.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-cba466d5.js";import"./index-356e4a49.js";import"./storybook_utils-10cbe996.js";import"./utils-df639674.js";import"./vue.esm-ba2ca387.js";import"./avatar-12a1f47e.js";import"./presence-7999d7f0.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./icon-3954e466.js";import"./icon_constants-04cd91c2.js";import"./badge-588eb019.js";import"./banner-a5fe3ab4.js";import"./notice-013f0d0d.js";import"./button-d2753bc0.js";import"./link_constants-8ea95ec9.js";import"./sr_only_close_button-b45a9be0.js";import"./modal-600bd46a.js";import"./breadcrumbs-1c7aac94.js";import"./breadcrumb_item-23f042bd.js";import"./link-fde1f7cd.js";import"./button_group-f60cb9de.js";import"./card-bf2d171f.js";import"./codeblock-48f80f9e.js";import"./combobox-42f7efd5.js";import"./keyboard_list_navigation-8c116ee6.js";import"./list_item-78acb348.js";import"./item_layout-1f335445.js";import"./skeleton-8a392920.js";import"./collapsible-3d1c631f.js";import"./lazy_show-ac5fd1cd.js";import"./dropdown_separator-e713fc38.js";import"./popover-d79da005.js";import"./tippy_utils-dcd4636d.js";import"./index.esm-8e1c03ab.js";import"./dropdown_constants-d0cadac9.js";import"./image_viewer-61b4a65a.js";import"./input-374359af.js";import"./validation_messages-f532a0bb.js";import"./input-a089d582.js";import"./input_group-db02c838.js";import"./modal-58e7373c.js";import"./list_item_group-3f1aff71.js";import"./pagination-7956afdb.js";import"./radio-22fcf322.js";import"./radio_constants-4f6325c5.js";import"./radio_group-7646bae0.js";import"./tab_group-af60940c.js";import"./tab-e302f81c.js";import"./tab_panel-5f6c9511.js";import"./checkbox-73b2bca4.js";import"./checkbox_group-5e50a5ad.js";import"./chip-91a76684.js";import"./select_menu-cd31e1bd.js";import"./toast-34585345.js";import"./toggle-80696be7.js";import"./tooltip-6e242c11.js";import"./keyboard_shortcut-cb8b09a0.js";import"./root_layout-5da0ee91.js";import"./stack-c26ae66b.js";import"./DtDatepicker-080f5ea7.js";import"./combobox_with_popover-0a4c5c99.js";import"./combobox_multi_select-08ecbf6e.js";import"./callbar_button-1e4e9bf4.js";import"./callbar_button_with_popover-320d21b4.js";import"./contact_info-7671d9b2.js";import"./top_banner_info-b66cfd6a.js";import"./ivr_node-695d8778.js";import"./grouped_chip-f7792937.js";import"./settings_menu_button-c8beb39d.js";import"./general_row-5bd122d7.js";import"./emoji_text_wrapper-7d6f26d1.js";import"./emoji-ffae4fcb.js";import"./emoji-e75a4e8c.js";import"./group_row-a565ed04.js";import"./contact_row-296d9c20.js";import"./unread_pill-68f37180.js";import"./feed_item_row-54e0aa4d.js";import"./time_pill-fd708477.js";import"./emoji_row-64387be2.js";import"./callbox-c7fcfacb.js";function p(r){const i=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},m(),r.components);return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:l}),`
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
`})})]})}function Kt(r={}){const{wrapper:i}=Object.assign({},m(),r.components);return i?t.jsx(i,Object.assign({},r,{children:t.jsx(p,r)})):p(r)}export{Kt as default};
//# sourceMappingURL=feed_item_pill-6c30921b.js.map
