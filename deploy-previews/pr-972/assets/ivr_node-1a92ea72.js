import{j as e}from"./jsx-runtime-65861c6a.js";import{M as a,S as l,C as o,a as t,b as c}from"./index-84adc7d1.js";import{I as p,D as m,P as h,a as u,b as x,E as j,G as f,T as b,H as g,N}from"./ivr_node.stories-e205f17b.js";import{u as s}from"./index-756243c4.js";import"./iframe-e6266fe6.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-01189202.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-1ca8d93f.js";import"./utils-7a4c8be8.js";import"./vue.esm-eff6e72e.js";import"./card-5e4a62ed.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./button-45d71d86.js";import"./link_constants-51338c78.js";import"./dropdown_separator-9af65d61.js";import"./keyboard_list_navigation-8c116ee6.js";import"./popover-d2f2e292.js";import"./tippy_utils-e4c34e91.js";import"./lazy_show-0b3a0cf0.js";import"./index.esm-018778a2.js";import"./modal-f96ddab9.js";import"./icon-8710e0b7.js";import"./icon_constants-a15cbbc1.js";import"./sr_only_close_button-d5ffb8d8.js";import"./list_item-d35ac9da.js";import"./dropdown_constants-d0cadac9.js";import"./avatar-a41172d1.js";import"./presence-8bac0262.js";import"./keyboard_shortcut-32ea4ca7.js";function oe(r={}){const{wrapper:d}=Object.assign({},s(),r.components);return d?e.jsx(d,Object.assign({},r,{children:e.jsx(i,{})})):i();function i(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},s(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:p}),`
`,e.jsx(n.h1,{id:"ivr-node",children:"IVR Node"}),`
`,e.jsx(l,{children:e.jsx(n.p,{children:"IVR Node represents a step in the IVR Workflow configuration."})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(n.p,{children:`A node in IVR configuration has header and content. Header contains icon, label and three dot menu with card actions.
The base style contains a top connector indicator.`}),`
`,e.jsx(o,{children:e.jsx(t,{of:m})}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DtRecipeIvrNode } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.h2,{id:"menu-node",children:"Menu Node"}),`
`,e.jsx(n.p,{children:"A node in IVR configuration to configure DTMF types."}),`
`,e.jsx(o,{children:e.jsx(t,{of:h})}),`
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
`,e.jsx(o,{children:e.jsx(t,{of:u})}),`
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
`,e.jsx(o,{children:e.jsx(t,{of:x})}),`
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
`,e.jsx(o,{children:e.jsx(t,{of:j})}),`
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
`,e.jsx(o,{children:e.jsx(t,{of:f})}),`
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
`,e.jsx(o,{children:e.jsx(t,{of:NodeStories.Branch})}),`
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
    <div class="ivr-connector d-px8 d-h24 d-bar-pill d-mbn12 d-fc-white d-fs-100">Add branch</div>
  </template>
</dt-recipe-ivr-node>
`})})]})}}export{oe as default};
//# sourceMappingURL=ivr_node-1a92ea72.js.map
