import{a as be}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as Te}from"./storybook_utils-58c64c5e.js";import{D as he}from"./card-5e4a62ed.js";import{D as le}from"./button-b421fc95.js";import{D as De}from"./dropdown_separator-776ed721.js";import{D as ie}from"./icon-525487a4.js";import{n as ue}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as Se}from"./avatar-a1a7d6f1.js";import{D as Ne}from"./list_item-9b6a7e3e.js";import{D as Ie}from"./keyboard_shortcut-952f877d.js";const b="promptmenu",T="promptcollect",h="promptplay",D="gotoexpert",v="goto",S="branch",N="transfer",I="hangup",me={[b]:"keypad",[T]:"dialer",[h]:"volume-2",[D]:"expert-node",[S]:"branch",[v]:"call-merge",[N]:"transfer",[I]:"phone-hang-up"},xe={[b]:"Menu",[T]:"Collect",[h]:"Play",[D]:"Expert",[S]:"Branch",[v]:"Go-to",[N]:"Transfer",[I]:"Hangup"},o={PROMPT:{normal:"d-bc-blue-200",selected:"d-bc-blue-300"},LOGIC:{normal:"d-bc-purple-200",selected:"d-bc-purple-400"},TERMINAL:{normal:"d-bc-red-100",selected:"d-bc-red-200"}},ke={[b]:o.PROMPT,[T]:o.PROMPT,[h]:o.PROMPT,[D]:o.LOGIC,[S]:o.LOGIC,[v]:o.LOGIC,[N]:o.TERMINAL,[I]:o.TERMINAL};const Ce={name:"DtRecipeIvrNode",components:{DtCard:he,DtButton:le,DtDropdown:De,DtIcon:ie},props:{nodeType:{type:String,required:!0},nodeLabel:{type:String,required:!0},isSelected:{type:Boolean,default:!1},menuButtonAriaLabel:{type:String,required:!0},dtmfKey:{type:String,default:null}},emits:["click"],data(){return{isOpen:!1}},computed:{nodeIcon(){return me[this.nodeType]},headerColor(){const{normal:a,selected:e}=ke[this.nodeType];return this.isSelected?e:a},isGotoNode(){return this.nodeType===v}},methods:{openMenu(){this.isOpen=!0}}};var fe=function(){var e=this,t=e._self._c;return t("div",e._g({staticClass:"d-d-flex d-fd-column d-ai-center d-c-pointer ivr_node__width"},e.$listeners),[e.dtmfKey?t("div",{staticClass:"ivr-connector d-w24 d-h24 d-bar-circle d-mbn12 d-fc-white d-fs-200",class:{"d-mbn16":e.isSelected},attrs:{"data-qa":"dt-top-connector-dtmf"}},[e._v(" "+e._s(e.dtmfKey)+" ")]):e._e(),e.$slots.connector?e._t("connector"):e._e(),!e.dtmfKey&&!e.$slots.connector?t("div",{staticClass:"ivr-connector d-w8 d-h8 d-bar-circle d-mbn4",class:{"d-mbn8":e.isSelected},attrs:{"data-qa":"dt-top-connector"}}):e._e(),t("dt-card",{attrs:{"content-class":"d-bt d-bc-black-300 d-px12 d-pt8 d-pb12","container-class":["d-w100p",{"d-ba d-bar8 d-baw4":e.isSelected},e.headerColor],"header-class":["d-mtn1","d-bt","d-btw4","d-p0",e.headerColor,{"d-btr4":!e.isSelected}]},scopedSlots:e._u([{key:"header",fn:function(){return[t("div",{staticClass:"d-d-flex d-ai-center"},[t("dt-button",{attrs:{"aria-label":e.nodeType,importance:"clear",kind:"muted","data-qa":"dt-ivr-node-icon"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("dt-icon",{class:["",{ivr_node__goto_icon:e.isGotoNode}],attrs:{name:e.nodeIcon,size:"200"}})]},proxy:!0}])}),t("p",{staticClass:"d-fs-200 d-fw-bold",attrs:{"data-qa":"ivr-node-label"}},[e._v(" "+e._s(e.nodeLabel)+" ")])],1),t("dt-dropdown",{attrs:{placement:"bottom",open:e.isOpen},on:{"update:open":function(r){e.isOpen=r}},scopedSlots:e._u([{key:"anchor",fn:function(){return[t("dt-button",{attrs:{importance:"clear",kind:"muted","aria-label":e.menuButtonAriaLabel},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.openMenu.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("dt-icon",{attrs:{name:"more-vertical",size:"200"}})]},proxy:!0}])})]},proxy:!0},{key:"list",fn:function({close:r}){return[t("div",{staticClass:"d-w164"},[e._t("menuItems",null,{close:r})],2)]}}],null,!0)})]},proxy:!0},{key:"content",fn:function(){return[e._t("content")]},proxy:!0}],null,!0)})],2)},Re=[];fe._withStripped=!0;var x=ue(Ce,fe,Re,!1,null,null,null,null);x.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/cards/ivr_node/ivr_node.vue";const _e=x.exports;x.exports.__docgenInfo={displayName:"DtRecipeIvrNode",exportName:"default",description:"",tags:{},props:[{name:"nodeType",description:"type of IVR Node.",type:{name:"string"},required:!0},{name:"nodeLabel",description:"Descriptive label for the node name.",type:{name:"string"},required:!0},{name:"isSelected",description:"Selected state of the node",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"menuButtonAriaLabel",description:"Translated aria-label for header menu button",type:{name:"string"},required:!0},{name:"dtmfKey",description:"DTMF input",type:{name:"string"},defaultValue:{func:!1,value:"null"}}],events:[{name:"click",description:"Add node click event",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"connector"},{name:"menuItems",scoped:!0,bindings:[{name:"close",title:"binding"}]},{name:"content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/cards/ivr_node/ivr_node.vue"]};const Oe=""+new URL("avatar-ed3a0c8e.png",import.meta.url).href,Pe={name:"DtRecipeIvrNodeDefault",components:{DtButton:le,DtRecipeIvrNode:_e,DtIcon:ie,DtAvatar:Se,DtListItem:Ne,DtKeyboardShortcut:Ie},props:{nodeType:{type:String,default:null}},computed:{avatarSrc(){return Oe},items(){return[{name:"Edit",id:1},{name:"Copy",id:2},{name:"Delete",id:3}]},expert(){return this.nodeType===D},menu(){return this.nodeType===b},collect(){return this.nodeType===T},play(){return this.nodeType===h},goTo(){return this.nodeType===v},branch(){return this.nodeType===S},transfer(){return this.nodeType===N},hangup(){return this.nodeType===I},label(){return this.nodeLabel||xe[this.nodeType]},fileName(){return this.menu?"americas_office-workflow_main-menu-2022--FINAL.mp3":"americas_office-collect-menu-2022-FINAL.mp3"}}};var ye=function(){var e=this,t=e._self._c;return t("dt-recipe-ivr-node",{attrs:{"node-label":e.label,"node-type":e.nodeType,"is-selected":e.isSelected,"dtmf-key":e.dtmfKey,"menu-button-aria-label":e.menuButtonAriaLabel},on:{click:function(r){return e.onClick(r)}},scopedSlots:e._u([e.connector?{key:"connector",fn:function(){return[t("div",{staticClass:"ivr-connector d-px8 d-h24 d-bar-pill d-mbn12 d-fc-white d-fs-100"},[e._v(" Add branch ")])]},proxy:!0}:null,e.content?{key:"content",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.content)}})]},proxy:!0}:{key:"content",fn:function(){return[e.expert?t("div",[t("p",{staticClass:"d-fw-bold"},[e._v(" Account Issues ")]),t("p",[e._v(" 19 Nodes ")]),t("dt-button",{attrs:{importance:"clear",kind:"muted","icon-position":"right"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("dt-icon",{attrs:{size:"300",name:"external-link"}})]},proxy:!0}],null,!1,2346673518)},[e._v(" Launch Expert ")])],1):e._e(),e.transfer?t("div",[t("div",{staticClass:"d-d-flex d-ai-center d-gg8"},[t("dt-avatar",{attrs:{seed:"seed"}},[t("img",{attrs:{"data-qa":"dt-avatar-image",src:e.avatarSrc,alt:"Person Avatar"}})]),t("p",[e._v("Carolina Garcia Rodriguez")])],1)]):e._e(),e.hangup||e.branch||e.goTo?t("div",[t("p",{staticClass:"d-fw-bold"},[e._v(" Name ")]),t("p",[e._v(" Description ")])]):e._e(),e.play?t("div",[t("p",{staticClass:"d-fc-purple-700"},[e._v(" 2022-Greeting.mp3 ")])]):e._e(),e.collect||e.menu?t("div",[t("p",{staticClass:"d-fw-bold"},[e._v(" "+e._s(e.label)+" prompt ")]),t("p",{staticClass:"d-fc-purple-700"},[e._v(" "+e._s(e.fileName)+" ")])]):e._e()]},proxy:!0},e.menuItems?{key:"menuItems",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.menuItems)}})]},proxy:!0}:{key:"menuItems",fn:function({close:r}){return[t("dt-list-item",{attrs:{role:"menuitem","navigation-type":"arrow-keys"},on:{click:r}},[e._v(" Edit ")]),t("dt-list-item",{attrs:{role:"menuitem","navigation-type":"arrow-keys"},on:{click:r},scopedSlots:e._u([{key:"right",fn:function(){return[t("dt-keyboard-shortcut",{attrs:{"screen-reader-text":"Ctrl and C",shortcut:"Ctrl + C"}})]},proxy:!0}],null,!0)},[e._v(" Copy ")]),t("dt-list-item",{attrs:{role:"menuitem","navigation-type":"arrow-keys"},on:{click:r},scopedSlots:e._u([{key:"right",fn:function(){return[t("dt-keyboard-shortcut",{attrs:{"screen-reader-text":"Delete",shortcut:"Del"}})]},proxy:!0}],null,!0)},[e._v(" Delete ")])]}}],null,!0)})},Ee=[];ye._withStripped=!0;var k=ue(Pe,ye,Ee,!1,null,null,null,null);k.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/cards/ivr_node/ivr_node_default.story.vue";const we=k.exports;k.exports.__docgenInfo={displayName:"DtRecipeIvrNodeDefault",exportName:"default",description:"",tags:{},props:[{name:"nodeType",type:{name:"string"},defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/cards/ivr_node/ivr_node_default.story.vue"]};const ge={onClick:be("click"),menuButtonAriaLabel:"Node menu",isSelected:!1},ve={content:{description:"Slot for card content",control:"text",table:{type:{summary:"VNode"}}},menuItems:{description:"Slot for node header menu items",control:"text",table:{type:{summary:"VNode"}}},connector:{description:"Slot for top connector",control:"text",table:{type:{summary:"VNode"}}},nodeLabel:{control:{type:"text"}},dtmfKey:{control:{type:"text"}},nodeType:{options:Object.keys(me),control:{type:"select"}},isSelected:{control:{type:"boolean"}},onClick:{table:{disable:!0}},click:{description:"IVR node click event",table:{type:{summary:"event"}}}},Le={title:"Recipes/Cards/Ivr Node",component:_e,args:ge,argTypes:ve,excludeStories:/.*Data$/},n=(a,{argTypes:e})=>Te(a,e,we),s={render:n,args:{nodeType:"hangup"},parameters:{docs:{source:{code:`
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
     `}}}},d={render:n,args:{nodeType:"promptmenu"}},c={render:n,args:{nodeType:"promptcollect"}},p={render:n,args:{nodeType:"promptplay"}},l={render:n,args:{nodeType:"gotoexpert"}},i={render:n,args:{nodeType:"goto"}},u={render:n,args:{nodeType:"branch"}},m={render:n,args:{nodeType:"transfer"}},f={render:n,args:{nodeType:"hangup"}},_={render:n,args:{nodeType:"promptmenu",isSelected:!0}},y={render:n,args:{nodeType:"transfer",dtmfKey:"1"}},g={render:n,args:{nodeType:"branch",connector:"text"}};var C,R,O;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(O=(R=s.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var P,E,w;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'promptmenu'
  }
}`,...(w=(E=d.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var L,A,M;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'promptcollect'
  }
}`,...(M=(A=c.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var V,G,B;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'promptplay'
  }
}`,...(B=(G=p.parameters)==null?void 0:G.docs)==null?void 0:B.source}}};var H,q,K;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'gotoexpert'
  }
}`,...(K=(q=l.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var F,$,z;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'goto'
  }
}`,...(z=($=i.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var W,j,U;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'branch'
  }
}`,...(U=(j=u.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var Y,X,J;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'transfer'
  }
}`,...(J=(X=m.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var Q,Z,ee;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'hangup'
  }
}`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,ne;_.parameters={..._.parameters,docs:{...(te=_.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'promptmenu',
    isSelected: true
  }
}`,...(ne=(re=_.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var oe,ae,se;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'transfer',
    dtmfKey: '1'
  }
}`,...(se=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var de,ce,pe;g.parameters={...g.parameters,docs:{...(de=g.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'branch',
    connector: 'text'
  }
}`,...(pe=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};const Ae=["argsData","argTypesData","Default","PromptMenu","PromptCollect","PromptPlay","Expert","GoTo","Branch","Transfer","Hangup","SelectedNode","NodeWithDtmf","NodeWithTopConnector"],We=Object.freeze(Object.defineProperty({__proto__:null,Branch:u,Default:s,Expert:l,GoTo:i,Hangup:f,NodeWithDtmf:y,NodeWithTopConnector:g,PromptCollect:c,PromptMenu:d,PromptPlay:p,SelectedNode:_,Transfer:m,__namedExportsOrder:Ae,argTypesData:ve,argsData:ge,default:Le},Symbol.toStringTag,{value:"Module"}));export{s as D,l as E,i as G,f as H,We as I,g as N,d as P,m as T,c as a,p as b};
//# sourceMappingURL=ivr_node.stories-8a128436.js.map
