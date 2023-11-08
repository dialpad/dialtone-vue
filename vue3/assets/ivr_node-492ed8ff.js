import{j as e}from"./jsx-runtime-67fe788a.js";import{M as s,b as a,C as o,d as t,e as l}from"./index-70095930.js";import{I as c,D as p,P as m,a as h,b as u,E as x,G as j,B as f,T as b,H as g,N}from"./ivr_node.stories-e727a31a.js";import{u as i}from"./index-f0b58f08.js";import"./iframe-0082410a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./storybook_utils-182ea7b7.js";import"./ivr_node-3a995508.js";import"./card-4a3261b0.js";import"./utils-b9178890.js";import"./vue.esm-bundler-2fc8d911.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./button-54a66549.js";import"./link_constants-8ea95ec9.js";import"./dropdown_separator-9929e2d7.js";import"./keyboard_list_navigation-7bd5fd77.js";import"./popover-b06d308e.js";import"./tippy_utils-352d0d4a.js";import"./lazy_show-ebabbde0.js";import"./modal-f96ddab9.js";import"./icon-19ead0e1.js";import"./icon_constants-e5cbd7a1.js";import"./sr_only_close_button-693af418.js";import"./list_item-08ce5296.js";import"./item_layout-4d1ec9e1.js";import"./dropdown_constants-d0cadac9.js";import"./avatar-acedcaa6.js";import"./presence-b753ccee.js";import"./keyboard_shortcut-7cca7d79.js";import"./avatar2-e5d57aa6.js";function d(r){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},i(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
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
`})})]})}function oe(r={}){const{wrapper:n}=Object.assign({},i(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(d,r)})):d(r)}export{oe as default};
//# sourceMappingURL=ivr_node-492ed8ff.js.map
