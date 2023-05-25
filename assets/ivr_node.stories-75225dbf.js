import{a as ge}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as ve}from"./storybook_utils-d08f208b.js";import{D as be}from"./card-bf2d171f.js";import{D as ce}from"./button-82727ed7.js";import{D as Te}from"./dropdown_separator-d3a0df3e.js";import{D as pe}from"./icon-67ed9c61.js";import{n as le}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as he}from"./avatar-ee2e2b37.js";import{D as De}from"./list_item-9ccc0d65.js";import{D as Ne}from"./keyboard_shortcut-8d84ecfe.js";const b="promptmenu",T="promptcollect",h="promptplay",D="gotoexpert",v="goto",N="branch",S="transfer",I="hangup",ie={[b]:"keypad",[T]:"dialer",[h]:"volume-2",[D]:"expert-node",[N]:"branch",[v]:"call-merge",[S]:"transfer",[I]:"phone-hang-up"},Se={[b]:"Menu",[T]:"Collect",[h]:"Play",[D]:"Expert",[N]:"Branch",[v]:"Go-to",[S]:"Transfer",[I]:"Hangup"},o={PROMPT:{normal:"d-bc-blue-200",selected:"d-bc-blue-300"},LOGIC:{normal:"d-bc-purple-200",selected:"d-bc-purple-400"},TERMINAL:{normal:"d-bc-red-100",selected:"d-bc-red-200"}},Ie={[b]:o.PROMPT,[T]:o.PROMPT,[h]:o.PROMPT,[D]:o.LOGIC,[N]:o.LOGIC,[v]:o.LOGIC,[S]:o.TERMINAL,[I]:o.TERMINAL};const xe={name:"DtRecipeIvrNode",components:{DtCard:be,DtButton:ce,DtDropdown:Te,DtIcon:pe},props:{nodeType:{type:String,required:!0},nodeLabel:{type:String,required:!0},isSelected:{type:Boolean,default:!1},menuButtonAriaLabel:{type:String,required:!0},dtmfKey:{type:String,default:null}},emits:["click"],data(){return{isOpen:!1}},computed:{nodeIcon(){return ie[this.nodeType]},headerColor(){const{normal:a,selected:e}=Ie[this.nodeType];return this.isSelected?e:a},isGotoNode(){return this.nodeType===v}},methods:{openMenu(){this.isOpen=!0}}};var ke=function(){var e=this,t=e._self._c;return t("div",e._g({staticClass:"d-d-flex d-fd-column d-ai-center d-c-pointer ivr_node__width"},e.$listeners),[e.dtmfKey?t("div",{staticClass:"ivr-connector d-w24 d-h24 d-bar-circle d-mbn12 d-fc-white d-fs-200",class:{"d-mbn16":e.isSelected},attrs:{"data-qa":"dt-top-connector-dtmf"}},[e._v(" "+e._s(e.dtmfKey)+" ")]):e._e(),e.$slots.connector?e._t("connector"):e._e(),!e.dtmfKey&&!e.$slots.connector?t("div",{staticClass:"ivr-connector d-w8 d-h8 d-bar-circle d-mbn4",class:{"d-mbn8":e.isSelected},attrs:{"data-qa":"dt-top-connector"}}):e._e(),t("dt-card",{attrs:{"content-class":"d-bt d-bc-black-300 d-px12 d-pt8 d-pb12","container-class":["d-w100p",{"d-ba d-bar8 d-baw4":e.isSelected},e.headerColor],"header-class":["d-mtn1","d-bt","d-btw4","d-p0",e.headerColor,{"d-btr4":!e.isSelected}]},scopedSlots:e._u([{key:"header",fn:function(){return[t("div",{staticClass:"d-d-flex d-ai-center"},[t("dt-button",{attrs:{"aria-label":e.nodeType,importance:"clear",kind:"muted","data-qa":"dt-ivr-node-icon"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("dt-icon",{class:["",{ivr_node__goto_icon:e.isGotoNode}],attrs:{name:e.nodeIcon,size:"200"}})]},proxy:!0}])}),t("p",{staticClass:"d-fs-200 d-fw-bold",attrs:{"data-qa":"ivr-node-label"}},[e._v(" "+e._s(e.nodeLabel)+" ")])],1),t("dt-dropdown",{attrs:{placement:"bottom",open:e.isOpen},on:{"update:open":function(r){e.isOpen=r}},scopedSlots:e._u([{key:"anchor",fn:function(){return[t("dt-button",{attrs:{importance:"clear",kind:"muted","aria-label":e.menuButtonAriaLabel},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.openMenu.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("dt-icon",{attrs:{name:"more-vertical",size:"200"}})]},proxy:!0}])})]},proxy:!0},{key:"list",fn:function({close:r}){return[t("div",{staticClass:"d-w164"},[e._t("menuItems",null,{close:r})],2)]}}],null,!0)})]},proxy:!0},{key:"content",fn:function(){return[e._t("content")]},proxy:!0}],null,!0)})],2)},Ce=[],ue=le(xe,ke,Ce,!1,null,null,null,null);const me=ue.exports;ue.exports.__docgenInfo={displayName:"DtRecipeIvrNode",exportName:"default",description:"",tags:{},props:[{name:"nodeType",description:"type of IVR Node.",type:{name:"string"},required:!0},{name:"nodeLabel",description:"Descriptive label for the node name.",type:{name:"string"},required:!0},{name:"isSelected",description:"Selected state of the node",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"menuButtonAriaLabel",description:"Translated aria-label for header menu button",type:{name:"string"},required:!0},{name:"dtmfKey",description:"DTMF input",type:{name:"string"},defaultValue:{func:!1,value:"null"}}],events:[{name:"click",description:"Add node click event",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"connector"},{name:"menuItems",scoped:!0,bindings:[{name:"close",title:"binding"}]},{name:"content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/cards/ivr_node/ivr_node.vue"]};const Re=""+new URL("avatar-ed3a0c8e.png",import.meta.url).href,Oe={name:"DtRecipeIvrNodeDefault",components:{DtButton:ce,DtRecipeIvrNode:me,DtIcon:pe,DtAvatar:he,DtListItem:De,DtKeyboardShortcut:Ne},props:{nodeType:{type:String,default:null}},computed:{avatarSrc(){return Re},items(){return[{name:"Edit",id:1},{name:"Copy",id:2},{name:"Delete",id:3}]},expert(){return this.nodeType===D},menu(){return this.nodeType===b},collect(){return this.nodeType===T},play(){return this.nodeType===h},goTo(){return this.nodeType===v},branch(){return this.nodeType===N},transfer(){return this.nodeType===S},hangup(){return this.nodeType===I},label(){return this.nodeLabel||Se[this.nodeType]},fileName(){return this.menu?"americas_office-workflow_main-menu-2022--FINAL.mp3":"americas_office-collect-menu-2022-FINAL.mp3"}}};var Pe=function(){var e=this,t=e._self._c;return t("dt-recipe-ivr-node",{attrs:{"node-label":e.label,"node-type":e.nodeType,"is-selected":e.isSelected,"dtmf-key":e.dtmfKey,"menu-button-aria-label":e.menuButtonAriaLabel},on:{click:function(r){return e.onClick(r)}},scopedSlots:e._u([e.connector?{key:"connector",fn:function(){return[t("div",{staticClass:"ivr-connector d-px8 d-h24 d-bar-pill d-mbn12 d-fc-white d-fs-100"},[e._v(" Add branch ")])]},proxy:!0}:null,e.content?{key:"content",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.content)}})]},proxy:!0}:{key:"content",fn:function(){return[e.expert?t("div",[t("p",{staticClass:"d-fw-bold"},[e._v(" Account Issues ")]),t("p",[e._v(" 19 Nodes ")]),t("dt-button",{attrs:{importance:"clear",kind:"muted","icon-position":"right"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("dt-icon",{attrs:{size:"300",name:"external-link"}})]},proxy:!0}],null,!1,2346673518)},[e._v(" Launch Expert ")])],1):e._e(),e.transfer?t("div",[t("div",{staticClass:"d-d-flex d-ai-center d-gg8"},[t("dt-avatar",{attrs:{seed:"seed"}},[t("img",{attrs:{"data-qa":"dt-avatar-image",src:e.avatarSrc,alt:"Person Avatar"}})]),t("p",[e._v("Carolina Garcia Rodriguez")])],1)]):e._e(),e.hangup||e.branch||e.goTo?t("div",[t("p",{staticClass:"d-fw-bold"},[e._v(" Name ")]),t("p",[e._v(" Description ")])]):e._e(),e.play?t("div",[t("p",{staticClass:"d-fc-purple-700"},[e._v(" 2022-Greeting.mp3 ")])]):e._e(),e.collect||e.menu?t("div",[t("p",{staticClass:"d-fw-bold"},[e._v(" "+e._s(e.label)+" prompt ")]),t("p",{staticClass:"d-fc-purple-700"},[e._v(" "+e._s(e.fileName)+" ")])]):e._e()]},proxy:!0},e.menuItems?{key:"menuItems",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.menuItems)}})]},proxy:!0}:{key:"menuItems",fn:function({close:r}){return[t("dt-list-item",{attrs:{role:"menuitem","navigation-type":"arrow-keys"},on:{click:r}},[e._v(" Edit ")]),t("dt-list-item",{attrs:{role:"menuitem","navigation-type":"arrow-keys"},on:{click:r},scopedSlots:e._u([{key:"right",fn:function(){return[t("dt-keyboard-shortcut",{attrs:{"screen-reader-text":"Ctrl and C",shortcut:"Ctrl + C"}})]},proxy:!0}],null,!0)},[e._v(" Copy ")]),t("dt-list-item",{attrs:{role:"menuitem","navigation-type":"arrow-keys"},on:{click:r},scopedSlots:e._u([{key:"right",fn:function(){return[t("dt-keyboard-shortcut",{attrs:{"screen-reader-text":"Delete",shortcut:"Del"}})]},proxy:!0}],null,!0)},[e._v(" Delete ")])]}}],null,!0)})},Ee=[],fe=le(Oe,Pe,Ee,!1,null,null,null,null);const Le=fe.exports;fe.exports.__docgenInfo={displayName:"DtRecipeIvrNodeDefault",exportName:"default",description:"",tags:{},props:[{name:"nodeType",type:{name:"string"},defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/cards/ivr_node/ivr_node_default.story.vue"]};const ye={onClick:ge("click"),menuButtonAriaLabel:"Node menu",isSelected:!1},_e={content:{description:"Slot for card content",control:"text",table:{type:{summary:"VNode"}}},menuItems:{description:"Slot for node header menu items",control:"text",table:{type:{summary:"VNode"}}},connector:{description:"Slot for top connector",control:"text",table:{type:{summary:"VNode"}}},nodeLabel:{control:{type:"text"}},dtmfKey:{control:{type:"text"}},nodeType:{options:Object.keys(ie),control:{type:"select"}},isSelected:{control:{type:"boolean"}},onClick:{table:{disable:!0}},click:{description:"IVR node click event",table:{type:{summary:"event"}}}},we={title:"Recipes/Cards/Ivr Node",component:me,args:ye,argTypes:_e,excludeStories:/.*Data$/},n=(a,{argTypes:e})=>ve(a,e,Le),s={render:n,args:{nodeType:"hangup"},parameters:{docs:{source:{code:`
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
     `}}}},d={render:n,args:{nodeType:"promptmenu"}},c={render:n,args:{nodeType:"promptcollect"}},p={render:n,args:{nodeType:"promptplay"}},l={render:n,args:{nodeType:"gotoexpert"}},i={render:n,args:{nodeType:"goto"}},u={render:n,args:{nodeType:"branch"}},m={render:n,args:{nodeType:"transfer"}},f={render:n,args:{nodeType:"hangup"}},y={render:n,args:{nodeType:"promptmenu",isSelected:!0}},_={render:n,args:{nodeType:"transfer",dtmfKey:"1"}},g={render:n,args:{nodeType:"branch",connector:"text"}};var x,k,C;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(k=s.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var R,O,P;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'promptmenu'
  }
}`,...(P=(O=d.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var E,L,w;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'promptcollect'
  }
}`,...(w=(L=c.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var A,M,V;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'promptplay'
  }
}`,...(V=(M=p.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var G,B,H;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'gotoexpert'
  }
}`,...(H=(B=l.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var q,K,F;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'goto'
  }
}`,...(F=(K=i.parameters)==null?void 0:K.docs)==null?void 0:F.source}}};var $,z,W;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'branch'
  }
}`,...(W=(z=u.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var j,U,Y;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'transfer'
  }
}`,...(Y=(U=m.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var X,J,Q;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'hangup'
  }
}`,...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,ee,te;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'promptmenu',
    isSelected: true
  }
}`,...(te=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ne,oe;_.parameters={..._.parameters,docs:{...(re=_.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'transfer',
    dtmfKey: '1'
  }
}`,...(oe=(ne=_.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ae,se,de;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'branch',
    connector: 'text'
  }
}`,...(de=(se=g.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};const Ae=["argsData","argTypesData","Default","PromptMenu","PromptCollect","PromptPlay","Expert","GoTo","Branch","Transfer","Hangup","SelectedNode","NodeWithDtmf","NodeWithTopConnector"],We=Object.freeze(Object.defineProperty({__proto__:null,Branch:u,Default:s,Expert:l,GoTo:i,Hangup:f,NodeWithDtmf:_,NodeWithTopConnector:g,PromptCollect:c,PromptMenu:d,PromptPlay:p,SelectedNode:y,Transfer:m,__namedExportsOrder:Ae,argTypesData:_e,argsData:ye,default:we},Symbol.toStringTag,{value:"Module"}));export{s as D,l as E,i as G,f as H,We as I,g as N,d as P,m as T,c as a,p as b};
//# sourceMappingURL=ivr_node.stories-75225dbf.js.map
