import{j as e}from"./jsx-runtime-bf99de46.js";import{M as s,b as a,C as o,d as t,e as l}from"./index-7e02d413.js";import{I as c,D as p,P as m,a as h,b as u,E as x,G as j,B as f,T as b,H as g,N}from"./ivr_node.stories-d715b02b.js";import{u as i}from"./index-d7533403.js";import"./iframe-92a03cc5.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-cba466d5.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./storybook_utils-cf049d2e.js";import"./ivr_node-1e4cbe2c.js";import"./card-bf2d171f.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./button-d2753bc0.js";import"./link_constants-8ea95ec9.js";import"./dropdown_separator-a140bbaf.js";import"./keyboard_list_navigation-8c116ee6.js";import"./popover-b661143d.js";import"./tippy_utils-dcd4636d.js";import"./utils-2ff589c9.js";import"./vue.esm-ba2ca387.js";import"./lazy_show-ac5fd1cd.js";import"./index.esm-8e1c03ab.js";import"./modal-600bd46a.js";import"./icon-666860e3.js";import"./icon_constants-e5cbd7a1.js";import"./sr_only_close_button-5d8c3503.js";import"./list_item-cdc6b447.js";import"./item_layout-1f335445.js";import"./dropdown_constants-d0cadac9.js";import"./avatar-b2b5b11a.js";import"./presence-7999d7f0.js";import"./keyboard_shortcut-b9df6787.js";import"./avatar2-e5d57aa6.js";function d(r){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},i(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
`,e.jsx(n.h1,{id:"ivr-node",children:"IVR Node"}),`
`,e.jsx(a,{children:e.jsx(n.p,{children:"IVR Node represents a step in the IVR Workflow configuration."})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(n.p,{children:`A node in IVR configuration has header and content. Header contains icon, label and three dot menu with card actions.
The base style contains a top connector indicator.`}),`
`,e.jsx(o,{children:e.jsx(t,{of:p})}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DtRecipeIvrNode } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.h2,{id:"menu-node",children:"Menu Node"}),`
`,e.jsx(n.p,{children:"A node in IVR configuration to configure DTMF types."}),`
`,e.jsx(o,{children:e.jsx(t,{of:m})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-recipe-ivr-node
  :node-label="Menu"
  :node-type="promptmenu"
  :drop-down-menu-items="items"
  :is-selected="false"
  :menu-button-label="'Node menu'"
>
  <p class="d-fw-bold">Menu prompt</p>
  <p class="d-fc-purple-700">americas_office-workflow_main-menu-2022--FINAL.mp3</p>
</dt-recipe-ivr-node>
`})}),`
`,e.jsx(n.h2,{id:"collect-node",children:"Collect Node"}),`
`,e.jsx(n.p,{children:"A node in IVR configuration to collect data like input, number, etc."}),`
`,e.jsx(o,{children:e.jsx(t,{of:h})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-recipe-ivr-node
  :node-label="Collect"
  :node-type="promptcollect"
  :drop-down-menu-items="items"
  :is-selected="false"
  :menu-button-label="'Node menu'"
>
  <p class="d-fw-bold">Collect prompt</p>
  <p class="d-fc-purple-700">americas_office-collect-menu-2022-FINAL.mp3</p>
</dt-recipe-ivr-node>
`})}),`
`,e.jsx(n.h2,{id:"play-node",children:"Play Node"}),`
`,e.jsx(n.p,{children:"A node in IVR configuration to play media."}),`
`,e.jsx(o,{children:e.jsx(t,{of:u})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-recipe-ivr-node
  :node-label="Play"
  :node-type="promptplay"
  :drop-down-menu-items="items"
  :is-selected="false"
  :menu-button-label="'Node menu'"
>
  <p class="d-fc-purple-700">2022-Greeting.mp3</p>
</dt-recipe-ivr-node>
`})}),`
`,e.jsx(n.h2,{id:"expert-node",children:"Expert Node"}),`
`,e.jsx(n.p,{children:"A node in IVR used to integration DX expert view in iFrame to create complex flows."}),`
`,e.jsx(o,{children:e.jsx(t,{of:x})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-recipe-ivr-node
  :node-label="Expert"
  :node-type="gotoexpert"
  :drop-down-menu-items="items"
  :is-selected="false"
  :menu-button-label="'Node menu'"
>
  <p class="d-fw-bold">Account Issues</p>
  <p>19 Nodes</p>
  <dt-button
    importance="clear"
    kind="muted"
    icon-position="right"
  >
    Launch Expert
    <template #icon>
      <dt-icon
        size="300"
        name="external-link"
      />
    </template>
  </dt-button>
</dt-recipe-ivr-node>
`})}),`
`,e.jsx(n.h2,{id:"go-to-node",children:"Go-to Node"}),`
`,e.jsx(n.p,{children:"A node in IVR used to step to another workflow or step in a workflow."}),`
`,e.jsx(o,{children:e.jsx(t,{of:j})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-recipe-ivr-node
  :node-label="Go to"
  :node-type="goto"
  :drop-down-menu-items="items"
  :is-selected="false"
  :menu-button-label="'Node menu'"
>
  <p class="d-fw-bold">Go to</p>
  <p>Description</p>
</dt-recipe-ivr-node>
`})}),`
`,e.jsx(n.h2,{id:"branch-node",children:"Branch Node"}),`
`,e.jsx(n.p,{children:"A node in IVR used to step to another workflow or step in a workflow."}),`
`,e.jsx(o,{children:e.jsx(t,{of:f})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-recipe-ivr-node
  :node-label="Branch"
  :node-type="branch"
  :drop-down-menu-items="items"
  :is-selected="false"
  :menu-button-label="'Node menu'"
>
  <p class="d-fw-bold">Branch</p>
  <p>Description</p>
</dt-recipe-ivr-node>
`})}),`
`,e.jsx(n.h2,{id:"transfer-node",children:"Transfer Node"}),`
`,e.jsx(n.p,{children:"A node in IVR used to transfer to person, department, call center, etc."}),`
`,e.jsx(o,{children:e.jsx(t,{of:b})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-recipe-ivr-node
  :node-label="Transfer"
  :node-type="transfer"
  :drop-down-menu-items="items"
  :is-selected="false"
  :menu-button-label="'Node menu'"
>
  <div class="d-d-flex d-ai-center d-gg8">
    <dt-avatar>
      <img data-qa="dt-avatar-image" src="static/common/assets/person.png" alt="Person Avatar">
    </dt-avatar>
    <p>Carolina Garcia Rodriguez</p>
  </div>
</dt-recipe-ivr-node>
`})}),`
`,e.jsx(n.h2,{id:"hangup-node",children:"Hangup Node"}),`
`,e.jsx(n.p,{children:"A node in IVR used to terminate the call."}),`
`,e.jsx(o,{children:e.jsx(t,{of:g})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-recipe-ivr-node
  :node-label="Hangup"
  :node-type="hangup"
  :drop-down-menu-items="items"
  :is-selected="false"
  :menu-button-label="'Node menu'"
>
  <p class="d-fw-bold">Hangup</p>
  <p>Description</p>
</dt-recipe-ivr-node>
`})}),`
`,e.jsx(n.h2,{id:"node-with-a-different-top-connector",children:"Node with a different top connector"}),`
`,e.jsx(n.p,{children:"A node in IVR like branch that has a condition instead of dtmf connector."}),`
`,e.jsx(o,{children:e.jsx(t,{of:N})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-recipe-ivr-node
  :node-label="Branch"
  :node-type="branch"
>
  <template #connector>
    <div class="ivr-connector d-px8 d-h24 d-bar-pill d-mbn12 d-fc-neutral-white d-fs-100">Add branch</div>
  </template>
</dt-recipe-ivr-node>
`})})]})}function te(r={}){const{wrapper:n}=Object.assign({},i(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(d,r)})):d(r)}export{te as default};
//# sourceMappingURL=ivr_node-5c3b84c5.js.map