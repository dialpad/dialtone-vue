import{j as e}from"./jsx-runtime-8fe19bbd.js";import{M as c,S as a,C as o,a as r,b as l}from"./index-b3e573a9.js";import{I as p}from"./ivr_node.stories-38d63a33.js";import{u as s}from"./index-ee387814.js";import"./iframe-a4c96504.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-544d6d08.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-3c489ce7.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-0dc0813d.js";import"./_plugin-vue2_normalizer-bbedbd26.js";import"./vue.esm-eff6e72e.js";import"./card-bc73136f.js";import"./button-b621edab.js";import"./link_constants-51338c78.js";import"./dropdown_separator-c370390e.js";import"./keyboard_list_navigation-8c116ee6.js";import"./popover-90add6a9.js";import"./tippy_utils-e4c34e91.js";import"./lazy_show-ea390a48.js";import"./index.esm-018778a2.js";import"./modal-f96ddab9.js";import"./icon-e129d5a5.js";import"./icon_constants-5d71af87.js";import"./sr_only_close_button-0c06efa2.js";import"./list_item-e9a1fee7.js";import"./dropdown_constants-d0cadac9.js";import"./avatar-28d5b320.js";import"./presence-bf181d39.js";import"./keyboard_shortcut-32966e24.js";function q(d={}){const{wrapper:t}=Object.assign({},s(),d.components);return t?e.jsx(t,Object.assign({},d,{children:e.jsx(i,{})})):i();function i(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},s(),d.components);return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:p}),`
`,e.jsx(n.h1,{id:"ivr-node",children:"IVR Node"}),`
`,e.jsx(a,{children:e.jsx(n.p,{children:"IVR Node represents a step in the IVR Workflow configuration."})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(n.p,{children:`A node in IVR configuration has header and content. Header contains icon, label and three dot menu with card actions.
The base style contains a top connector indicator.`}),`
`,e.jsx(o,{children:e.jsx(r,{id:"recipes-cards-ivr-node--default"})}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DtRecipeIvrNode } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.h2,{id:"menu-node",children:"Menu Node"}),`
`,e.jsx(n.p,{children:"A node in IVR configuration to configure DTMF types."}),`
`,e.jsx(o,{children:e.jsx(r,{id:"recipes-cards-ivr-node--prompt-menu"})}),`
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
`,e.jsx(o,{children:e.jsx(r,{id:"recipes-cards-ivr-node--prompt-collect"})}),`
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
`,e.jsx(o,{children:e.jsx(r,{id:"recipes-cards-ivr-node--prompt-play"})}),`
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
`,e.jsx(o,{children:e.jsx(r,{id:"recipes-cards-ivr-node--expert"})}),`
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
`,e.jsx(o,{children:e.jsx(r,{id:"recipes-cards-ivr-node--go-to"})}),`
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
`,e.jsx(o,{children:e.jsx(r,{id:"recipes-cards-ivr-node--branch"})}),`
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
`,e.jsx(o,{children:e.jsx(r,{id:"recipes-cards-ivr-node--transfer"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-recipe-ivr-node
  :node-label="Transfer"
  :node-type="transfer"
  :drop-down-menu-items="items"
  :is-selected="false"
  :menu-button-label="'Node menu'"
>
  <div class="d-d-flex d-ai-center d-gg8">
    <dt-avatar>
      <img data-qa="dt-avatar-image" src="static/components/avatar/person.png" alt="Person Avatar">
    </dt-avatar>
    <p>Carolina Garcia Rodriguez</p>
  </div>
</dt-recipe-ivr-node>
`})}),`
`,e.jsx(n.h2,{id:"hangup-node",children:"Hangup Node"}),`
`,e.jsx(n.p,{children:"A node in IVR used to terminate the call."}),`
`,e.jsx(o,{children:e.jsx(r,{id:"recipes-cards-ivr-node--hangup"})}),`
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
`,e.jsx(o,{children:e.jsx(r,{id:"recipes-cards-ivr-node--node-with-top-connector"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-recipe-ivr-node
  :node-label="Branch"
  :node-type="branch"
>
  <template #connector>
    <div class="ivr-connector d-px8 d-h24 d-bar-pill d-mbn12 d-fc-white d-fs-100">Add branch</div>
  </template>
</dt-recipe-ivr-node>
`})})]})}}export{q as default};
//# sourceMappingURL=ivr_node-a5397ce6.js.map
