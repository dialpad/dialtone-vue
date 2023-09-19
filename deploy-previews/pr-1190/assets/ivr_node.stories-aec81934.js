import{a as oe}from"./chunk-AY7I2SME-c7b6cf8a.js";import{c as ae}from"./storybook_utils-171189a5.js";import{D as ee,I as se,a as pe,b as ce,c as de,d as le,e as ie,f as ue,g as me,h as fe,i as ye}from"./ivr_node-e3fdaf8d.js";import{D as _e}from"./icon-9a6cc121.js";import{D as ge}from"./button-9102a84a.js";import{D as Te}from"./avatar-ad7a63af.js";import{D as ve}from"./list_item-dde17b7e.js";import{D as De}from"./keyboard_shortcut-1edd04f8.js";import{n as he}from"./_plugin-vue2_normalizer-2bbd088e.js";const be={name:"DtRecipeIvrNodeDefault",components:{DtButton:ge,DtRecipeIvrNode:ee,DtIcon:_e,DtAvatar:Te,DtListItem:ve,DtKeyboardShortcut:De},props:{nodeType:{type:String,default:null}},computed:{items(){return[{name:"Edit",id:1},{name:"Copy",id:2},{name:"Delete",id:3}]},expert(){return this.nodeType===se},menu(){return this.nodeType===pe},collect(){return this.nodeType===ce},play(){return this.nodeType===de},goTo(){return this.nodeType===le},branch(){return this.nodeType===ie},transfer(){return this.nodeType===ue},hangup(){return this.nodeType===me},label(){return this.nodeLabel||fe[this.nodeType]},fileName(){return this.menu?"americas_office-workflow_main-menu-2022--FINAL.mp3":"americas_office-collect-menu-2022-FINAL.mp3"}}};var re=function(){var e=this,r=e._self._c;return r("dt-recipe-ivr-node",{attrs:{"node-label":e.label,"node-type":e.nodeType,"is-selected":e.isSelected,"dtmf-key":e.dtmfKey,"menu-button-aria-label":e.menuButtonAriaLabel},on:{click:function(n){return e.onClick(n)}},scopedSlots:e._u([e.connector?{key:"connector",fn:function(){return[r("div",{staticClass:"ivr-connector d-px8 d-h24 d-bar-pill d-mbn12 d-fc-neutral-white d-fs-100"},[e._v(" Add branch ")])]},proxy:!0}:null,e.content?{key:"content",fn:function(){return[r("span",{domProps:{innerHTML:e._s(e.content)}})]},proxy:!0}:{key:"content",fn:function(){return[e.expert?r("div",[r("p",{staticClass:"d-fw-bold"},[e._v(" Account Issues ")]),r("p",[e._v(" 19 Nodes ")]),r("dt-button",{attrs:{importance:"clear",kind:"muted","icon-position":"right"},scopedSlots:e._u([{key:"icon",fn:function(){return[r("dt-icon",{attrs:{size:"300",name:"external-link"}})]},proxy:!0}],null,!1,2346673518)},[e._v(" Launch Expert ")])],1):e._e(),e.transfer?r("div",[r("div",{staticClass:"d-d-flex d-ai-center d-gg8"},[r("dt-avatar",{attrs:{"full-name":"Person Avatar","image-src":"/common/assets/person.png",seed:"seed"}}),r("p",[e._v("Carolina Garcia Rodriguez")])],1)]):e._e(),e.hangup||e.branch||e.goTo?r("div",[r("p",{staticClass:"d-fw-bold"},[e._v(" Name ")]),r("p",[e._v(" Description ")])]):e._e(),e.play?r("div",[r("p",{staticClass:"d-fc-purple-700"},[e._v(" 2022-Greeting.mp3 ")])]):e._e(),e.collect||e.menu?r("div",[r("p",{staticClass:"d-fw-bold"},[e._v(" "+e._s(e.label)+" prompt ")]),r("p",{staticClass:"d-fc-purple-700"},[e._v(" "+e._s(e.fileName)+" ")])]):e._e()]},proxy:!0},e.menuItems?{key:"menuItems",fn:function(){return[r("span",{domProps:{innerHTML:e._s(e.menuItems)}})]},proxy:!0}:{key:"menuItems",fn:function({close:n}){return[r("dt-list-item",{attrs:{role:"menuitem","navigation-type":"arrow-keys"},on:{click:n}},[e._v(" Edit ")]),r("dt-list-item",{attrs:{role:"menuitem","navigation-type":"arrow-keys"},on:{click:n},scopedSlots:e._u([{key:"right",fn:function(){return[r("dt-keyboard-shortcut",{attrs:{"screen-reader-text":"Ctrl and C",shortcut:"Ctrl + C"}})]},proxy:!0}],null,!0)},[e._v(" Copy ")]),r("dt-list-item",{attrs:{role:"menuitem","navigation-type":"arrow-keys"},on:{click:n},scopedSlots:e._u([{key:"right",fn:function(){return[r("dt-keyboard-shortcut",{attrs:{"screen-reader-text":"Delete",shortcut:"Del"}})]},proxy:!0}],null,!0)},[e._v(" Delete ")])]}}],null,!0)})},Ne=[];re._withStripped=!0;var _=he(be,re,Ne,!1,null,null,null,null);_.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/cards/ivr_node/ivr_node_default.story.vue";const Se=_.exports;_.exports.__docgenInfo={displayName:"DtRecipeIvrNodeDefault",exportName:"default",description:"",tags:{},props:[{name:"nodeType",type:{name:"string"},defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/cards/ivr_node/ivr_node_default.story.vue"]};const te={onClick:oe("click"),menuButtonAriaLabel:"Node menu",isSelected:!1},ne={content:{description:"Slot for card content",control:"text",table:{type:{summary:"VNode"}}},menuItems:{description:"Slot for node header menu items",control:"text",table:{type:{summary:"VNode"}}},connector:{description:"Slot for top connector",control:"text",table:{type:{summary:"VNode"}}},nodeLabel:{control:{type:"text"}},dtmfKey:{control:{type:"text"}},nodeType:{options:Object.keys(ye),control:{type:"select"}},isSelected:{control:{type:"boolean"}},onClick:{table:{disable:!0}},click:{description:"IVR node click event",table:{type:{summary:"event"}}}},xe={title:"Recipes/Cards/Ivr Node",component:ee,args:te,argTypes:ne,excludeStories:/.*Data$/},t=(g,{argTypes:e})=>ae(g,e,Se),o={render:t,args:{nodeType:"hangup"},parameters:{docs:{source:{code:`
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
     `}}}},a={render:t,args:{nodeType:"promptmenu"}},s={render:t,args:{nodeType:"promptcollect"}},p={render:t,args:{nodeType:"promptplay"}},c={render:t,args:{nodeType:"gotoexpert"}},d={render:t,args:{nodeType:"goto"}},l={render:t,args:{nodeType:"branch"}},i={render:t,args:{nodeType:"transfer"}},u={render:t,args:{nodeType:"hangup"}},m={render:t,args:{nodeType:"promptmenu",isSelected:!0}},f={render:t,args:{nodeType:"transfer",dtmfKey:"1"}},y={render:t,args:{nodeType:"branch",connector:"text"}};var T,v,D;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(D=(v=o.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var h,b,N;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'promptmenu'
  }
}`,...(N=(b=a.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var S,x,I;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'promptcollect'
  }
}`,...(I=(x=s.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var k,C,R;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'promptplay'
  }
}`,...(R=(C=p.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var E,P,O;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'gotoexpert'
  }
}`,...(O=(P=c.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var w,V,L;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'goto'
  }
}`,...(L=(V=d.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var A,H,M;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'branch'
  }
}`,...(M=(H=l.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var B,F,G;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'transfer'
  }
}`,...(G=(F=i.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var K,z,W;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'hangup'
  }
}`,...(W=(z=u.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var j,U,Y;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'promptmenu',
    isSelected: true
  }
}`,...(Y=(U=m.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var X,$,q;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'transfer',
    dtmfKey: '1'
  }
}`,...(q=($=f.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var J,Q,Z;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'branch',
    connector: 'text'
  }
}`,...(Z=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};const Ie=["argsData","argTypesData","Default","PromptMenu","PromptCollect","PromptPlay","Expert","GoTo","Branch","Transfer","Hangup","SelectedNode","NodeWithDtmf","NodeWithTopConnector"],Ae=Object.freeze(Object.defineProperty({__proto__:null,Branch:l,Default:o,Expert:c,GoTo:d,Hangup:u,NodeWithDtmf:f,NodeWithTopConnector:y,PromptCollect:s,PromptMenu:a,PromptPlay:p,SelectedNode:m,Transfer:i,__namedExportsOrder:Ie,argTypesData:ne,argsData:te,default:xe},Symbol.toStringTag,{value:"Module"}));export{o as D,c as E,d as G,u as H,Ae as I,y as N,a as P,i as T,s as a,p as b};
//# sourceMappingURL=ivr_node.stories-aec81934.js.map
