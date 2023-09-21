import{j as t}from"./jsx-runtime-8835bb8e.js";import{M as m,b as s,C as r,d as e,e as a}from"./index-a2566ded.js";import{F as l,D as d,A as c,N as h}from"./feed_item_pill.stories-7a75389b.js";import{u as p}from"./index-5eefd391.js";import"./iframe-b9bfa9b7.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./storybook_utils-98c88692.js";import"./vue.esm-bundler-24d82261.js";import"./utils-a84c670d.js";import"./avatar-5a9c331b.js";import"./presence-b0cfa4f5.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-90db3229.js";import"./icon_constants-a5c11dff.js";import"./badge-67dc4790.js";import"./banner-5dd4bd3c.js";import"./notice-8c664469.js";import"./button-59161dae.js";import"./link_constants-8ea95ec9.js";import"./sr_only_close_button-0ac93804.js";import"./modal-f96ddab9.js";import"./breadcrumbs-137bf23c.js";import"./link-282b28f4.js";import"./button_group-780f208e.js";import"./card-a5acd2c2.js";import"./codeblock-7104728f.js";import"./combobox-22104d16.js";import"./keyboard_list_navigation-7bd5fd77.js";import"./list_item-c40a9f8c.js";import"./item_layout-443afc7a.js";import"./skeleton-9591ad8d.js";import"./collapsible-4180a9b9.js";import"./lazy_show-7a941f46.js";import"./dropdown_separator-86333acb.js";import"./popover-594a9f92.js";import"./tippy_utils-352d0d4a.js";import"./dropdown_constants-d0cadac9.js";import"./image_viewer-1381a8e7.js";import"./input-224b9601.js";import"./validation_messages-5b870a2b.js";import"./input-c4c87a81.js";import"./input_group-cb85dbe8.js";import"./modal-9af634dc.js";import"./list_item_group-8190b61e.js";import"./pagination-ab211c7b.js";import"./radio-8d4d4eb5.js";import"./radio_constants-4f6325c5.js";import"./radio_group-48337405.js";import"./tab_group-c3558eb3.js";import"./tab-c1e0d365.js";import"./tab_panel-cf360343.js";import"./checkbox-18747327.js";import"./checkbox_group-9755ccc8.js";import"./chip-cf649452.js";import"./select_menu-19b054dc.js";import"./toast-6a906880.js";import"./toggle-4a66c2b8.js";import"./tooltip-caf70561.js";import"./keyboard_shortcut-97cfe5c8.js";import"./root_layout-f90d080e.js";import"./stack-938f23cc.js";import"./DtScroller-e1408ce9.js";import"./DtEmojiPicker-25f063ca.js";import"./index-40c4ee4c.js";import"./DtDatepicker-ea635f00.js";import"./combobox_with_popover-509beca8.js";import"./combobox_multi_select-d06ab08c.js";import"./callbar_button-603367af.js";import"./callbar_button_with_popover-9fa40af6.js";import"./contact_info-46bc21ee.js";import"./top_banner_info-f7f063b4.js";import"./ivr_node-181f8f85.js";import"./grouped_chip-d569c32c.js";import"./settings_menu_button-fa02fdb5.js";import"./general_row-b4f6db49.js";import"./emoji_text_wrapper-8464b8e3.js";import"./emoji-d39dadef.js";import"./emoji-399fff3d.js";import"./group_row-a5c8d9c1.js";import"./contact_row-3c0f6e45.js";import"./unread_pill-ace75169.js";import"./feed_item_row-15137126.js";import"./time_pill-2d7bf64a.js";import"./emoji_row-616f6dad.js";import"./callbox-6b96d35e.js";function n(o){const i=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},p(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(m,{of:l}),`
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
//# sourceMappingURL=feed_item_pill-7ed1102c.js.map
