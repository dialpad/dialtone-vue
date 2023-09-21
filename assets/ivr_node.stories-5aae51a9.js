import{a as ne}from"./chunk-AY7I2SME-5eb1ab46.js";import{h as oe}from"./storybook_utils-0b506883.js";import{D as Z,I as ae,a as se,b as ce,c as pe,d as de,e as le,f as ie,g as ue,h as me,i as fe}from"./ivr_node-198cb8c5.js";import{D as ye}from"./icon-d9bd2c26.js";import{D as ge}from"./button-4cf26c8f.js";import{D as _e}from"./avatar-6c480796.js";import{D as Te}from"./list_item-77211560.js";import{D as De}from"./keyboard_shortcut-f1870595.js";import{n as ve}from"./_plugin-vue2_normalizer-2bbd088e.js";const he={name:"DtRecipeIvrNodeDefault",components:{DtButton:ge,DtRecipeIvrNode:Z,DtIcon:ye,DtAvatar:_e,DtListItem:Te,DtKeyboardShortcut:De},props:{nodeType:{type:String,default:null}},computed:{items(){return[{name:"Edit",id:1},{name:"Copy",id:2},{name:"Delete",id:3}]},expert(){return this.nodeType===ae},menu(){return this.nodeType===se},collect(){return this.nodeType===ce},play(){return this.nodeType===pe},goTo(){return this.nodeType===de},branch(){return this.nodeType===le},transfer(){return this.nodeType===ie},hangup(){return this.nodeType===ue},label(){return this.nodeLabel||me[this.nodeType]},fileName(){return this.menu?"americas_office-workflow_main-menu-2022--FINAL.mp3":"americas_office-collect-menu-2022-FINAL.mp3"}}};var be=function(){var e=this,r=e._self._c;return r("dt-recipe-ivr-node",{attrs:{"node-label":e.label,"node-type":e.nodeType,"is-selected":e.isSelected,"dtmf-key":e.dtmfKey,"menu-button-aria-label":e.menuButtonAriaLabel},on:{click:function(n){return e.onClick(n)}},scopedSlots:e._u([e.connector?{key:"connector",fn:function(){return[r("div",{staticClass:"ivr-connector d-px8 d-h24 d-bar-pill d-mbn12 d-fc-neutral-white d-fs-100"},[e._v(" Add branch ")])]},proxy:!0}:null,e.content?{key:"content",fn:function(){return[r("span",{domProps:{innerHTML:e._s(e.content)}})]},proxy:!0}:{key:"content",fn:function(){return[e.expert?r("div",[r("p",{staticClass:"d-fw-bold"},[e._v(" Account Issues ")]),r("p",[e._v(" 19 Nodes ")]),r("dt-button",{attrs:{importance:"clear",kind:"muted","icon-position":"right"},scopedSlots:e._u([{key:"icon",fn:function(){return[r("dt-icon",{attrs:{size:"300",name:"external-link"}})]},proxy:!0}],null,!1,2346673518)},[e._v(" Launch Expert ")])],1):e._e(),e.transfer?r("div",[r("div",{staticClass:"d-d-flex d-ai-center d-gg8"},[r("dt-avatar",{attrs:{"full-name":"Person Avatar","image-src":"/common/assets/person.png",seed:"seed"}}),r("p",[e._v("Carolina Garcia Rodriguez")])],1)]):e._e(),e.hangup||e.branch||e.goTo?r("div",[r("p",{staticClass:"d-fw-bold"},[e._v(" Name ")]),r("p",[e._v(" Description ")])]):e._e(),e.play?r("div",[r("p",{staticClass:"d-fc-purple-700"},[e._v(" 2022-Greeting.mp3 ")])]):e._e(),e.collect||e.menu?r("div",[r("p",{staticClass:"d-fw-bold"},[e._v(" "+e._s(e.label)+" prompt ")]),r("p",{staticClass:"d-fc-purple-700"},[e._v(" "+e._s(e.fileName)+" ")])]):e._e()]},proxy:!0},e.menuItems?{key:"menuItems",fn:function(){return[r("span",{domProps:{innerHTML:e._s(e.menuItems)}})]},proxy:!0}:{key:"menuItems",fn:function({close:n}){return[r("dt-list-item",{attrs:{role:"menuitem","navigation-type":"arrow-keys"},on:{click:n}},[e._v(" Edit ")]),r("dt-list-item",{attrs:{role:"menuitem","navigation-type":"arrow-keys"},on:{click:n},scopedSlots:e._u([{key:"right",fn:function(){return[r("dt-keyboard-shortcut",{attrs:{"screen-reader-text":"Ctrl and C",shortcut:"Ctrl + C"}})]},proxy:!0}],null,!0)},[e._v(" Copy ")]),r("dt-list-item",{attrs:{role:"menuitem","navigation-type":"arrow-keys"},on:{click:n},scopedSlots:e._u([{key:"right",fn:function(){return[r("dt-keyboard-shortcut",{attrs:{"screen-reader-text":"Delete",shortcut:"Del"}})]},proxy:!0}],null,!0)},[e._v(" Delete ")])]}}],null,!0)})},Ne=[],ee=ve(he,be,Ne,!1,null,null,null,null);const Se=ee.exports;ee.exports.__docgenInfo={displayName:"DtRecipeIvrNodeDefault",exportName:"default",description:"",tags:{},props:[{name:"nodeType",type:{name:"string"},defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/cards/ivr_node/ivr_node_default.story.vue"]};const re={onClick:ne("click"),menuButtonAriaLabel:"Node menu",isSelected:!1},te={content:{description:"Slot for card content",control:"text",table:{type:{summary:"VNode"}}},menuItems:{description:"Slot for node header menu items",control:"text",table:{type:{summary:"VNode"}}},connector:{description:"Slot for top connector",control:"text",table:{type:{summary:"VNode"}}},nodeLabel:{control:{type:"text"}},dtmfKey:{control:{type:"text"}},nodeType:{options:Object.keys(fe),control:{type:"select"}},isSelected:{control:{type:"boolean"}},onClick:{table:{disable:!0}},click:{description:"IVR node click event",table:{type:{summary:"event"}}}},xe={title:"Recipes/Cards/Ivr Node",component:Z,args:re,argTypes:te,excludeStories:/.*Data$/},t=(g,{argTypes:e})=>oe(g,e,Se),o={render:t,args:{nodeType:"hangup"},parameters:{docs:{source:{code:`
  <dt-recipe-ivr-node
    :node-label="Hangup"
    :node-type="hangup"
    :drop-down-menu-items="items"
    :is-selected="false"
    :menu-button-label="'Node menu'"
  >
    <p class="d-fs14 d-fw-bold">Hangup</p>
    <p class="d-fs14">Description</p>
  </dt-recipe-ivr-node>
     `}}}},a={render:t,args:{nodeType:"promptmenu"}},s={render:t,args:{nodeType:"promptcollect"}},c={render:t,args:{nodeType:"promptplay"}},p={render:t,args:{nodeType:"gotoexpert"}},d={render:t,args:{nodeType:"goto"}},l={render:t,args:{nodeType:"branch"}},i={render:t,args:{nodeType:"transfer"}},u={render:t,args:{nodeType:"hangup"}},m={render:t,args:{nodeType:"promptmenu",isSelected:!0}},f={render:t,args:{nodeType:"transfer",dtmfKey:"1"}},y={render:t,args:{nodeType:"branch",connector:"text"}};var _,T,D;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'hangup'
  },
  parameters: {
    docs: {
      source: {
        code: \`
  <dt-recipe-ivr-node
    :node-label="Hangup"
    :node-type="hangup"
    :drop-down-menu-items="items"
    :is-selected="false"
    :menu-button-label="'Node menu'"
  >
    <p class="d-fs14 d-fw-bold">Hangup</p>
    <p class="d-fs14">Description</p>
  </dt-recipe-ivr-node>
     \`
      }
    }
  }
}`,...(D=(T=o.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var v,h,b;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'promptmenu'
  }
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var N,S,x;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'promptcollect'
  }
}`,...(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var I,k,C;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'promptplay'
  }
}`,...(C=(k=c.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var R,E,P;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'gotoexpert'
  }
}`,...(P=(E=p.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var O,V,L;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'goto'
  }
}`,...(L=(V=d.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var w,A,H;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'branch'
  }
}`,...(H=(A=l.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var M,B,F;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'transfer'
  }
}`,...(F=(B=i.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var G,K,z;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'hangup'
  }
}`,...(z=(K=u.parameters)==null?void 0:K.docs)==null?void 0:z.source}}};var W,j,U;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'promptmenu',
    isSelected: true
  }
}`,...(U=(j=m.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var Y,X,$;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'transfer',
    dtmfKey: '1'
  }
}`,...($=(X=f.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var q,J,Q;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'branch',
    connector: 'text'
  }
}`,...(Q=(J=y.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const Ie=["argsData","argTypesData","Default","PromptMenu","PromptCollect","PromptPlay","Expert","GoTo","Branch","Transfer","Hangup","SelectedNode","NodeWithDtmf","NodeWithTopConnector"],Ae=Object.freeze(Object.defineProperty({__proto__:null,Branch:l,Default:o,Expert:p,GoTo:d,Hangup:u,NodeWithDtmf:f,NodeWithTopConnector:y,PromptCollect:s,PromptMenu:a,PromptPlay:c,SelectedNode:m,Transfer:i,__namedExportsOrder:Ie,argTypesData:te,argsData:re,default:xe},Symbol.toStringTag,{value:"Module"}));export{o as D,p as E,d as G,u as H,Ae as I,y as N,a as P,i as T,s as a,c as b};
//# sourceMappingURL=ivr_node.stories-5aae51a9.js.map
