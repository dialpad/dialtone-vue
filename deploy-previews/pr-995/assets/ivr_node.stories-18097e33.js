import{a as Ae}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as Be}from"./storybook_utils-cf9b483a.js";import{D as Ge}from"./card-469beec4.js";import{D as Se}from"./button-586a189e.js";import{D as He}from"./dropdown_separator-a8adf2dd.js";import{D as Ce}from"./icon-2be5d650.js";import{a as d,f as p,n as K,t as w,k as c,l as F,d as o,w as n,m as qe,B as Ke,o as l,g as r,A as Fe,b as ze,z as Ue,s as P}from"./vue.esm-bundler-15aa0fd7.js";import{_ as Oe}from"./_plugin-vue_export-helper-c27b6911.js";import{D as We}from"./avatar-5cf062a6.js";import{D as je}from"./list_item-6c3e142b.js";import{D as Ye}from"./keyboard_shortcut-885ccb4c.js";const E="promptmenu",V="promptcollect",M="promptplay",x="gotoexpert",O="goto",A="branch",B="transfer",G="hangup",Re={[E]:"keypad",[V]:"dialer",[M]:"volume-2",[x]:"expert-node",[A]:"branch",[O]:"call-merge",[B]:"transfer",[G]:"phone-hang-up"},Xe={[E]:"Menu",[V]:"Collect",[M]:"Play",[x]:"Expert",[A]:"Branch",[O]:"Go-to",[B]:"Transfer",[G]:"Hangup"},i={PROMPT:{normal:"d-bc-blue-200",selected:"d-bc-blue-300"},LOGIC:{normal:"d-bc-purple-200",selected:"d-bc-purple-400"},TERMINAL:{normal:"d-bc-red-100",selected:"d-bc-red-200"}},Je={[E]:i.PROMPT,[V]:i.PROMPT,[M]:i.PROMPT,[x]:i.LOGIC,[A]:i.LOGIC,[O]:i.LOGIC,[B]:i.TERMINAL,[G]:i.TERMINAL};const Le={name:"DtRecipeIvrNode",components:{DtCard:Ge,DtButton:Se,DtDropdown:He,DtIcon:Ce},props:{nodeType:{type:String,required:!0},nodeLabel:{type:String,required:!0},isSelected:{type:Boolean,default:!1},menuButtonAriaLabel:{type:String,required:!0},dtmfKey:{type:String,default:null}},emits:["click"],data(){return{isOpen:!1}},computed:{nodeListeners(){return{click:e=>this.$emit("click",e)}},nodeIcon(){return Re[this.nodeType]},headerColor(){const{normal:e,selected:m}=Je[this.nodeType];return this.isSelected?m:e},isGotoNode(){return this.nodeType===O}},methods:{openMenu(){this.isOpen=!0}}},Qe={class:"d-d-flex d-ai-center"},Ze={class:"d-fs-200 d-fw-bold","data-qa":"ivr-node-label"},$e={class:"d-w164"};function et(e,m,a,Me,H,t){const R=d("dt-icon"),L=d("dt-button"),q=d("dt-dropdown"),f=d("dt-card");return l(),p("div",qe({class:"d-d-flex d-fd-column d-ai-center d-c-pointer ivr_node__width"},Ke(t.nodeListeners,!0)),[a.dtmfKey?(l(),p("div",{key:0,"data-qa":"dt-top-connector-dtmf",class:K(["ivr-connector d-w24 d-h24 d-bar-circle d-mbn12 d-fc-white d-fs-200",{"d-mbn16":a.isSelected}])},w(a.dtmfKey),3)):c("v-if",!0),e.$slots.connector?F(e.$slots,"connector",{key:1}):c("v-if",!0),!a.dtmfKey&&!e.$slots.connector?(l(),p("div",{key:2,"data-qa":"dt-top-connector",class:K(["ivr-connector d-w8 d-h8 d-bar-circle d-mbn4",{"d-mbn8":a.isSelected}])},null,2)):c("v-if",!0),o(f,{"content-class":"d-bt d-bc-black-300 d-px12 d-pt8 d-pb12","container-class":["d-w100p",{"d-ba d-bar8 d-baw4":a.isSelected},t.headerColor],"header-class":["d-mtn1","d-bt","d-btw4","d-p0",t.headerColor,{"d-btr4":!a.isSelected}]},{header:n(()=>[c(" node label and icon section on left of the header "),r("div",Qe,[o(L,{"aria-label":a.nodeType,importance:"clear",kind:"muted","data-qa":"dt-ivr-node-icon"},{icon:n(()=>[o(R,{name:t.nodeIcon,size:"200",class:K(["",{ivr_node__goto_icon:t.isGotoNode}])},null,8,["name","class"])]),_:1},8,["aria-label"]),r("p",Ze,w(a.nodeLabel),1)]),c(" node menu for actions like edit, copy, delete "),o(q,{open:H.isOpen,"onUpdate:open":m[0]||(m[0]=u=>H.isOpen=u),placement:"bottom"},{anchor:n(()=>[o(L,{importance:"clear",kind:"muted","aria-label":a.menuButtonAriaLabel,onClick:Fe(t.openMenu,["stop","prevent"])},{icon:n(()=>[o(R,{name:"more-vertical",size:"200"})]),_:1},8,["aria-label","onClick"])]),list:n(({close:u})=>[r("div",$e,[F(e.$slots,"menuItems",{close:u})])]),_:3},8,["open"])]),content:n(()=>[F(e.$slots,"content")]),_:3},8,["container-class","header-class"])],16)}const Pe=Oe(Le,[["render",et],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/cards/ivr_node/ivr_node.vue"]]);Le.__docgenInfo={displayName:"DtRecipeIvrNode",exportName:"default",description:"",tags:{},props:[{name:"nodeType",description:"type of IVR Node.",type:{name:"string"},required:!0},{name:"nodeLabel",description:"Descriptive label for the node name.",type:{name:"string"},required:!0},{name:"isSelected",description:"Selected state of the node",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"menuButtonAriaLabel",description:"Translated aria-label for header menu button",type:{name:"string"},required:!0},{name:"dtmfKey",description:"DTMF input",type:{name:"string"},defaultValue:{func:!1,value:"null"}}],events:[{name:"click",description:"Add node click event",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"connector"},{name:"menuItems",scoped:!0,bindings:[{name:"close",title:"binding"}]},{name:"content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/cards/ivr_node/ivr_node.vue"]};const tt=""+new URL("avatar-ed3a0c8e.png",import.meta.url).href,we={name:"DtRecipeIvrNodeDefault",components:{DtButton:Se,DtRecipeIvrNode:Pe,DtIcon:Ce,DtAvatar:We,DtListItem:je,DtKeyboardShortcut:Ye},props:{nodeType:{type:String,default:null}},computed:{avatarSrc(){return tt},items(){return[{name:"Edit",id:1},{name:"Copy",id:2},{name:"Delete",id:3}]},expert(){return this.nodeType===x},menu(){return this.nodeType===E},collect(){return this.nodeType===V},play(){return this.nodeType===M},goTo(){return this.nodeType===O},branch(){return this.nodeType===A},transfer(){return this.nodeType===B},hangup(){return this.nodeType===G},label(){return this.nodeLabel||Xe[this.nodeType]},fileName(){return this.menu?"americas_office-workflow_main-menu-2022--FINAL.mp3":"americas_office-collect-menu-2022-FINAL.mp3"}}},nt=r("div",{class:"ivr-connector d-px8 d-h24 d-bar-pill d-mbn12 d-fc-white d-fs-100"}," Add branch ",-1),rt=["innerHTML"],ot=["innerHTML"];function at(e,m,a,Me,H,t){const R=d("dt-icon"),L=d("dt-button"),q=d("dt-avatar"),f=d("dt-list-item"),u=d("dt-keyboard-shortcut"),xe=d("dt-recipe-ivr-node");return l(),ze(xe,{"node-label":t.label,"node-type":a.nodeType,"is-selected":e.isSelected,"dtmf-key":e.$attrs.dtmfKey,"menu-button-aria-label":e.$attrs.menuButtonAriaLabel,onClick:m[0]||(m[0]=y=>e.$attrs.onClick(y))},Ue({_:2},[e.$attrs.connector?{name:"connector",fn:n(()=>[nt]),key:"0"}:void 0,e.$attrs.content?{name:"content",fn:n(()=>[r("span",{innerHTML:e.$attrs.content},null,8,rt)]),key:"1"}:{name:"content",fn:n(()=>[t.expert?(l(),p("div",{key:0},[r("p",{class:"d-fw-bold"}," Account Issues "),r("p",null," 19 Nodes "),o(L,{importance:"clear",kind:"muted","icon-position":"right"},{icon:n(()=>[o(R,{size:"300",name:"external-link"})]),default:n(()=>[P(" Launch Expert ")]),_:1})])):c("v-if",!0),t.transfer?(l(),p("div",{key:1},[r("div",{class:"d-d-flex d-ai-center d-gg8"},[o(q,{seed:"seed"},{default:n(()=>[r("img",{"data-qa":"dt-avatar-image",src:t.avatarSrc,alt:"Person Avatar"},null,8,["src"])]),_:1}),r("p",null,"Carolina Garcia Rodriguez")])])):c("v-if",!0),t.hangup||t.branch||t.goTo?(l(),p("div",{key:2},[r("p",{class:"d-fw-bold"}," Name "),r("p",null," Description ")])):c("v-if",!0),t.play?(l(),p("div",{key:3},[r("p",{class:"d-fc-purple-700"}," 2022-Greeting.mp3 ")])):c("v-if",!0),t.collect||t.menu?(l(),p("div",{key:4},[r("p",{class:"d-fw-bold"},w(t.label)+" prompt ",1),r("p",{class:"d-fc-purple-700"},w(t.fileName),1)])):c("v-if",!0)]),key:"2"},e.$attrs.menuItems?{name:"menuItems",fn:n(()=>[r("span",{innerHTML:e.$attrs.menuItems},null,8,ot)]),key:"3"}:{name:"menuItems",fn:n(({close:y})=>[o(f,{role:"menuitem","navigation-type":"arrow-keys",onClick:y},{default:n(()=>[P(" Edit ")]),_:2},1032,["onClick"]),o(f,{role:"menuitem","navigation-type":"arrow-keys",onClick:y},{right:n(()=>[o(u,{"screen-reader-text":"Ctrl and C",shortcut:"Ctrl + C"})]),default:n(()=>[P(" Copy ")]),_:2},1032,["onClick"]),o(f,{role:"menuitem","navigation-type":"arrow-keys",onClick:y},{right:n(()=>[o(u,{"screen-reader-text":"Delete",shortcut:"Del"})]),default:n(()=>[P(" Delete ")]),_:2},1032,["onClick"])]),key:"4"}]),1032,["node-label","node-type","is-selected","dtmf-key","menu-button-aria-label"])}const st=Oe(we,[["render",at],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/cards/ivr_node/ivr_node_default.story.vue"]]);we.__docgenInfo={displayName:"DtRecipeIvrNodeDefault",exportName:"default",description:"",tags:{},props:[{name:"nodeType",type:{name:"string"},defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/cards/ivr_node/ivr_node_default.story.vue"]};const Ee={onClick:Ae("click"),menuButtonAriaLabel:"Node menu",isSelected:!1},Ve={content:{description:"Slot for card content",control:"text",table:{type:{summary:"VNode"}}},menuItems:{description:"Slot for node header menu items",control:"text",table:{type:{summary:"VNode"}}},connector:{description:"Slot for top connector",control:"text",table:{type:{summary:"VNode"}}},nodeLabel:{control:{type:"text"}},dtmfKey:{control:{type:"text"}},nodeType:{options:Object.keys(Re),control:{type:"select"}},isSelected:{control:{type:"boolean"}},onClick:{table:{disable:!0}},click:{description:"IVR node click event",table:{type:{summary:"event"}}}},dt={title:"Recipes/Cards/Ivr Node",component:Pe,args:Ee,argTypes:Ve,excludeStories:/.*Data$/},s=e=>Be(e,st),_={render:s,args:{nodeType:"hangup"},parameters:{docs:{source:{code:`
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
     `}}}},g={render:s,args:{nodeType:"promptmenu"}},b={render:s,args:{nodeType:"promptcollect"}},T={render:s,args:{nodeType:"promptplay"}},v={render:s,args:{nodeType:"gotoexpert"}},h={render:s,args:{nodeType:"goto"}},D={render:s,args:{nodeType:"branch"}},N={render:s,args:{nodeType:"transfer"}},k={render:s,args:{nodeType:"hangup"}},I={render:s,args:{nodeType:"promptmenu",isSelected:!0}},S={render:s,args:{nodeType:"transfer",dtmfKey:"1"}},C={render:s,args:{nodeType:"branch",connector:"text"}};var z,U,W;_.parameters={..._.parameters,docs:{...(z=_.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(W=(U=_.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var j,Y,X;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'promptmenu'
  }
}`,...(X=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};var J,Q,Z;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'promptcollect'
  }
}`,...(Z=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var $,ee,te;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'promptplay'
  }
}`,...(te=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,re,oe;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'gotoexpert'
  }
}`,...(oe=(re=v.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ae,se,de;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'goto'
  }
}`,...(de=(se=h.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var ce,le,ie;D.parameters={...D.parameters,docs:{...(ce=D.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'branch'
  }
}`,...(ie=(le=D.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var pe,me,ue;N.parameters={...N.parameters,docs:{...(pe=N.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'transfer'
  }
}`,...(ue=(me=N.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var fe,ye,_e;k.parameters={...k.parameters,docs:{...(fe=k.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'hangup'
  }
}`,...(_e=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:_e.source}}};var ge,be,Te;I.parameters={...I.parameters,docs:{...(ge=I.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'promptmenu',
    isSelected: true
  }
}`,...(Te=(be=I.parameters)==null?void 0:be.docs)==null?void 0:Te.source}}};var ve,he,De;S.parameters={...S.parameters,docs:{...(ve=S.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'transfer',
    dtmfKey: '1'
  }
}`,...(De=(he=S.parameters)==null?void 0:he.docs)==null?void 0:De.source}}};var Ne,ke,Ie;C.parameters={...C.parameters,docs:{...(Ne=C.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'branch',
    connector: 'text'
  }
}`,...(Ie=(ke=C.parameters)==null?void 0:ke.docs)==null?void 0:Ie.source}}};const ct=["argsData","argTypesData","Default","PromptMenu","PromptCollect","PromptPlay","Expert","GoTo","Branch","Transfer","Hangup","SelectedNode","NodeWithDtmf","NodeWithTopConnector"],vt=Object.freeze(Object.defineProperty({__proto__:null,Branch:D,Default:_,Expert:v,GoTo:h,Hangup:k,NodeWithDtmf:S,NodeWithTopConnector:C,PromptCollect:b,PromptMenu:g,PromptPlay:T,SelectedNode:I,Transfer:N,__namedExportsOrder:ct,argTypesData:Ve,argsData:Ee,default:dt},Symbol.toStringTag,{value:"Module"}));export{_ as D,v as E,h as G,k as H,vt as I,C as N,g as P,N as T,b as a,T as b};
//# sourceMappingURL=ivr_node.stories-18097e33.js.map
