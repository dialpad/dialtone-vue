import{j as e}from"./jsx-dev-runtime-74864d16.js";import{M as u,b as m,C as i,d as s,e as d}from"./index-04988f5a.js";import{I as t,D as a,P as c,a as f,b as N,E as p,G as b,T as h,H as j,N as x}from"./ivr_node.stories-81aeebf3.js";import{u as o}from"./index-382c5fa7.js";import"./iframe-672775aa.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./storybook_utils-1fcbdb2e.js";import"./vue.esm-bundler-735640fd.js";import"./utils-4a13a80a.js";import"./ivr_node-9edb00dd.js";import"./card-0785a2ab.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./button-4346d584.js";import"./link_constants-8ea95ec9.js";import"./dropdown_separator-e80f0908.js";import"./keyboard_list_navigation-7bd5fd77.js";import"./popover-043690ee.js";import"./tippy_utils-89aa4eb5.js";import"./lazy_show-4d85a9f6.js";import"./modal-f96ddab9.js";import"./icon-d93ddec9.js";import"./icon_constants-635d9bbe.js";import"./sr_only_close_button-bed1eac4.js";import"./list_item-c45d2a6c.js";import"./item_layout-f83ccb15.js";import"./dropdown_constants-d0cadac9.js";import"./avatar-6c7cf17e.js";import"./presence-4f451321.js";import"./keyboard_shortcut-41acc3c1.js";function r(l){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},o(),l.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(u,{of:t},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"ivr-node",children:"IVR Node"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(m,{children:e.jsxDEV(n.p,{children:"IVR Node represents a step in the IVR Workflow configuration."},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:13,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`A node in IVR configuration has header and content. Header contains icon, label and three dot menu with card actions.
The base style contains a top connector indicator.`},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(s,{of:a},void 0,!1,{fileName:"<source.js>",lineNumber:19,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:18,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:22,columnNumber:1},this),`
`,e.jsxDEV(d,{},void 0,!1,{fileName:"<source.js>",lineNumber:24,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:26,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:28,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtRecipeIvrNode } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:30,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:30,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"menu-node",children:"Menu Node"},void 0,!1,{fileName:"<source.js>",lineNumber:34,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"A node in IVR configuration to configure DTMF types."},void 0,!1,{fileName:"<source.js>",lineNumber:36,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(s,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:39,columnNumber:5},this)},void 0,!1,{fileName:"<source.js>",lineNumber:38,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-recipe-ivr-node
  :node-label="Menu"
  :node-type="promptmenu"
  :drop-down-menu-items="items"
  :is-selected="false"
  :menu-button-label="'Node menu'"
>
  <p class="d-fw-bold">Menu prompt</p>
  <p class="d-fc-purple-700">americas_office-workflow_main-menu-2022--FINAL.mp3</p>
</dt-recipe-ivr-node>
`},void 0,!1,{fileName:"<source.js>",lineNumber:42,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:42,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"collect-node",children:"Collect Node"},void 0,!1,{fileName:"<source.js>",lineNumber:55,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"A node in IVR configuration to collect data like input, number, etc."},void 0,!1,{fileName:"<source.js>",lineNumber:57,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(s,{of:f},void 0,!1,{fileName:"<source.js>",lineNumber:60,columnNumber:5},this)},void 0,!1,{fileName:"<source.js>",lineNumber:59,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-recipe-ivr-node
  :node-label="Collect"
  :node-type="promptcollect"
  :drop-down-menu-items="items"
  :is-selected="false"
  :menu-button-label="'Node menu'"
>
  <p class="d-fw-bold">Collect prompt</p>
  <p class="d-fc-purple-700">americas_office-collect-menu-2022-FINAL.mp3</p>
</dt-recipe-ivr-node>
`},void 0,!1,{fileName:"<source.js>",lineNumber:63,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:63,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"play-node",children:"Play Node"},void 0,!1,{fileName:"<source.js>",lineNumber:76,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"A node in IVR configuration to play media."},void 0,!1,{fileName:"<source.js>",lineNumber:78,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(s,{of:N},void 0,!1,{fileName:"<source.js>",lineNumber:81,columnNumber:5},this)},void 0,!1,{fileName:"<source.js>",lineNumber:80,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-recipe-ivr-node
  :node-label="Play"
  :node-type="promptplay"
  :drop-down-menu-items="items"
  :is-selected="false"
  :menu-button-label="'Node menu'"
>
  <p class="d-fc-purple-700">2022-Greeting.mp3</p>
</dt-recipe-ivr-node>
`},void 0,!1,{fileName:"<source.js>",lineNumber:84,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:84,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"expert-node",children:"Expert Node"},void 0,!1,{fileName:"<source.js>",lineNumber:96,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"A node in IVR used to integration DX expert view in iFrame to create complex flows."},void 0,!1,{fileName:"<source.js>",lineNumber:98,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(s,{of:p},void 0,!1,{fileName:"<source.js>",lineNumber:101,columnNumber:5},this)},void 0,!1,{fileName:"<source.js>",lineNumber:100,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-recipe-ivr-node
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
`},void 0,!1,{fileName:"<source.js>",lineNumber:104,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:104,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"go-to-node",children:"Go-to Node"},void 0,!1,{fileName:"<source.js>",lineNumber:130,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"A node in IVR used to step to another workflow or step in a workflow."},void 0,!1,{fileName:"<source.js>",lineNumber:132,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(s,{of:b},void 0,!1,{fileName:"<source.js>",lineNumber:135,columnNumber:5},this)},void 0,!1,{fileName:"<source.js>",lineNumber:134,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-recipe-ivr-node
  :node-label="Go to"
  :node-type="goto"
  :drop-down-menu-items="items"
  :is-selected="false"
  :menu-button-label="'Node menu'"
>
  <p class="d-fw-bold">Go to</p>
  <p>Description</p>
</dt-recipe-ivr-node>
`},void 0,!1,{fileName:"<source.js>",lineNumber:138,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:138,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"branch-node",children:"Branch Node"},void 0,!1,{fileName:"<source.js>",lineNumber:151,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"A node in IVR used to step to another workflow or step in a workflow."},void 0,!1,{fileName:"<source.js>",lineNumber:153,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(s,{of:NodeStories.Branch},void 0,!1,{fileName:"<source.js>",lineNumber:156,columnNumber:5},this)},void 0,!1,{fileName:"<source.js>",lineNumber:155,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-recipe-ivr-node
  :node-label="Branch"
  :node-type="branch"
  :drop-down-menu-items="items"
  :is-selected="false"
  :menu-button-label="'Node menu'"
>
  <p class="d-fw-bold">Branch</p>
  <p>Description</p>
</dt-recipe-ivr-node>
`},void 0,!1,{fileName:"<source.js>",lineNumber:159,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:159,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"transfer-node",children:"Transfer Node"},void 0,!1,{fileName:"<source.js>",lineNumber:172,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"A node in IVR used to transfer to person, department, call center, etc."},void 0,!1,{fileName:"<source.js>",lineNumber:174,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(s,{of:h},void 0,!1,{fileName:"<source.js>",lineNumber:177,columnNumber:5},this)},void 0,!1,{fileName:"<source.js>",lineNumber:176,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-recipe-ivr-node
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
`},void 0,!1,{fileName:"<source.js>",lineNumber:180,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:180,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"hangup-node",children:"Hangup Node"},void 0,!1,{fileName:"<source.js>",lineNumber:197,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"A node in IVR used to terminate the call."},void 0,!1,{fileName:"<source.js>",lineNumber:199,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(s,{of:j},void 0,!1,{fileName:"<source.js>",lineNumber:202,columnNumber:5},this)},void 0,!1,{fileName:"<source.js>",lineNumber:201,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-recipe-ivr-node
  :node-label="Hangup"
  :node-type="hangup"
  :drop-down-menu-items="items"
  :is-selected="false"
  :menu-button-label="'Node menu'"
>
  <p class="d-fw-bold">Hangup</p>
  <p>Description</p>
</dt-recipe-ivr-node>
`},void 0,!1,{fileName:"<source.js>",lineNumber:205,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:205,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"node-with-a-different-top-connector",children:"Node with a different top connector"},void 0,!1,{fileName:"<source.js>",lineNumber:218,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"A node in IVR like branch that has a condition instead of dtmf connector."},void 0,!1,{fileName:"<source.js>",lineNumber:220,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(s,{of:x},void 0,!1,{fileName:"<source.js>",lineNumber:223,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:222,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-recipe-ivr-node
  :node-label="Branch"
  :node-type="branch"
>
  <template #connector>
    <div class="ivr-connector d-px8 d-h24 d-bar-pill d-mbn12 d-fc-neutral-white d-fs-100">Add branch</div>
  </template>
</dt-recipe-ivr-node>
`},void 0,!1,{fileName:"<source.js>",lineNumber:226,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:226,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function ee(l={}){const{wrapper:n}=Object.assign({},o(),l.components);return n?e.jsxDEV(n,Object.assign({},l,{children:e.jsxDEV(r,l,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):r(l)}export{ee as default};
//# sourceMappingURL=ivr_node-08450df0.js.map
