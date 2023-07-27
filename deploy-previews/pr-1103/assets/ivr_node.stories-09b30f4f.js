import{a as Ae}from"./chunk-AY7I2SME-c7b6cf8a.js";import{c as Be}from"./storybook_utils-f3a25a1b.js";import{D as Ge}from"./card-4e8a9ddc.js";import{D as Se}from"./button-6fc4376e.js";import{D as He}from"./dropdown_separator-637d2983.js";import{D as Ce}from"./icon-fe5f3947.js";import{k as d,d as p,n as K,t as E,j as c,x as $,l as o,m as n,p as qe,z as Ke,o as l,e as r,J as $e,v as Fe,I as ze,q as P}from"./vue.esm-bundler-356a911e.js";import{_ as Oe}from"./_plugin-vue_export-helper-c27b6911.js";import{D as je}from"./avatar-c4477592.js";import{D as We}from"./list_item-9b7a02cd.js";import{D as Ue}from"./keyboard_shortcut-37339ab7.js";const w="promptmenu",M="promptcollect",V="promptplay",x="gotoexpert",O="goto",A="branch",B="transfer",G="hangup",Re={[w]:"keypad",[M]:"dialer",[V]:"volume-2",[x]:"expert-node",[A]:"branch",[O]:"call-merge",[B]:"transfer",[G]:"phone-hang-up"},Ye={[w]:"Menu",[M]:"Collect",[V]:"Play",[x]:"Expert",[A]:"Branch",[O]:"Go-to",[B]:"Transfer",[G]:"Hangup"},i={PROMPT:{normal:"d-bc-blue-200",selected:"d-bc-blue-300"},LOGIC:{normal:"d-bc-purple-200",selected:"d-bc-purple-400"},TERMINAL:{normal:"d-bc-red-100",selected:"d-bc-red-200"}},Je={[w]:i.PROMPT,[M]:i.PROMPT,[V]:i.PROMPT,[x]:i.LOGIC,[A]:i.LOGIC,[O]:i.LOGIC,[B]:i.TERMINAL,[G]:i.TERMINAL};const Le={name:"DtRecipeIvrNode",components:{DtCard:Ge,DtButton:Se,DtDropdown:He,DtIcon:Ce},props:{nodeType:{type:String,required:!0},nodeLabel:{type:String,required:!0},isSelected:{type:Boolean,default:!1},menuButtonAriaLabel:{type:String,required:!0},dtmfKey:{type:String,default:null}},emits:["click"],data(){return{isOpen:!1}},computed:{nodeListeners(){return{click:e=>this.$emit("click",e)}},nodeIcon(){return Re[this.nodeType]},headerColor(){const{normal:e,selected:m}=Je[this.nodeType];return this.isSelected?m:e},isGotoNode(){return this.nodeType===O}},methods:{openMenu(){this.isOpen=!0}}},Xe={class:"d-d-flex d-ai-center"},Qe={class:"d-fs-200 d-fw-bold","data-qa":"ivr-node-label"},Ze={class:"d-w164"};function et(e,m,s,Ve,H,t){const R=d("dt-icon"),L=d("dt-button"),q=d("dt-dropdown"),f=d("dt-card");return l(),p("div",qe({class:"d-d-flex d-fd-column d-ai-center d-c-pointer ivr_node__width"},Ke(t.nodeListeners,!0)),[s.dtmfKey?(l(),p("div",{key:0,"data-qa":"dt-top-connector-dtmf",class:K(["ivr-connector d-w24 d-h24 d-bar-circle d-mbn12 d-fc-white d-fs-200",{"d-mbn16":s.isSelected}])},E(s.dtmfKey),3)):c("v-if",!0),e.$slots.connector?$(e.$slots,"connector",{key:1}):c("v-if",!0),!s.dtmfKey&&!e.$slots.connector?(l(),p("div",{key:2,"data-qa":"dt-top-connector",class:K(["ivr-connector d-w8 d-h8 d-bar-circle d-mbn4",{"d-mbn8":s.isSelected}])},null,2)):c("v-if",!0),o(f,{"content-class":"d-bt d-bc-black-300 d-px12 d-pt8 d-pb12","container-class":["d-w100p",{"d-ba d-bar8 d-baw4":s.isSelected},t.headerColor],"header-class":["d-mtn1","d-bt","d-btw4","d-p0",t.headerColor,{"d-btr4":!s.isSelected}]},{header:n(()=>[c(" node label and icon section on left of the header "),r("div",Xe,[o(L,{"aria-label":s.nodeType,importance:"clear",kind:"muted","data-qa":"dt-ivr-node-icon"},{icon:n(()=>[o(R,{name:t.nodeIcon,size:"200",class:K(["",{ivr_node__goto_icon:t.isGotoNode}])},null,8,["name","class"])]),_:1},8,["aria-label"]),r("p",Qe,E(s.nodeLabel),1)]),c(" node menu for actions like edit, copy, delete "),o(q,{open:H.isOpen,"onUpdate:open":m[0]||(m[0]=u=>H.isOpen=u),placement:"bottom"},{anchor:n(()=>[o(L,{importance:"clear",kind:"muted","aria-label":s.menuButtonAriaLabel,onClick:$e(t.openMenu,["stop","prevent"])},{icon:n(()=>[o(R,{name:"more-vertical",size:"200"})]),_:1},8,["aria-label","onClick"])]),list:n(({close:u})=>[r("div",Ze,[$(e.$slots,"menuItems",{close:u})])]),_:3},8,["open"])]),content:n(()=>[$(e.$slots,"content")]),_:3},8,["container-class","header-class"])],16)}const Pe=Oe(Le,[["render",et],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/cards/ivr_node/ivr_node.vue"]]);Le.__docgenInfo={displayName:"DtRecipeIvrNode",exportName:"default",description:"",tags:{},props:[{name:"nodeType",description:"type of IVR Node.",type:{name:"string"},required:!0},{name:"nodeLabel",description:"Descriptive label for the node name.",type:{name:"string"},required:!0},{name:"isSelected",description:"Selected state of the node",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"menuButtonAriaLabel",description:"Translated aria-label for header menu button",type:{name:"string"},required:!0},{name:"dtmfKey",description:"DTMF input",type:{name:"string"},defaultValue:{func:!1,value:"null"}}],events:[{name:"click",description:"Add node click event",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"connector"},{name:"menuItems",scoped:!0,bindings:[{name:"close",title:"binding"}]},{name:"content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/cards/ivr_node/ivr_node.vue"]};const Ee={name:"DtRecipeIvrNodeDefault",components:{DtButton:Se,DtRecipeIvrNode:Pe,DtIcon:Ce,DtAvatar:je,DtListItem:We,DtKeyboardShortcut:Ue},computed:{items(){return[{name:"Edit",id:1},{name:"Copy",id:2},{name:"Delete",id:3}]},expert(){return this.$attrs.nodeType===x},menu(){return this.$attrs.nodeType===w},collect(){return this.$attrs.nodeType===M},play(){return this.$attrs.nodeType===V},goTo(){return this.$attrs.nodeType===O},branch(){return this.$attrs.nodeType===A},transfer(){return this.$attrs.nodeType===B},hangup(){return this.$attrs.nodeType===G},label(){return this.$attrs.nodeLabel||Ye[this.$attrs.nodeType]},fileName(){return this.menu?"americas_office-workflow_main-menu-2022--FINAL.mp3":"americas_office-collect-menu-2022-FINAL.mp3"}}},tt=r("div",{class:"ivr-connector d-px8 d-h24 d-bar-pill d-mbn12 d-fc-white d-fs-100"}," Add branch ",-1),nt=["innerHTML"],rt=["innerHTML"];function ot(e,m,s,Ve,H,t){const R=d("dt-icon"),L=d("dt-button"),q=d("dt-avatar"),f=d("dt-list-item"),u=d("dt-keyboard-shortcut"),xe=d("dt-recipe-ivr-node");return l(),Fe(xe,{"node-label":t.label,"node-type":e.$attrs.nodeType,"is-selected":e.$attrs.isSelected,"dtmf-key":e.$attrs.dtmfKey,"menu-button-aria-label":e.$attrs.menuButtonAriaLabel,onClick:m[0]||(m[0]=y=>e.$attrs.onClick(y))},ze({_:2},[e.$attrs.connector?{name:"connector",fn:n(()=>[tt]),key:"0"}:void 0,e.$attrs.content?{name:"content",fn:n(()=>[r("span",{innerHTML:e.$attrs.content},null,8,nt)]),key:"1"}:{name:"content",fn:n(()=>[t.expert?(l(),p("div",{key:0},[r("p",{class:"d-fw-bold"}," Account Issues "),r("p",null," 19 Nodes "),o(L,{importance:"clear",kind:"muted","icon-position":"right"},{icon:n(()=>[o(R,{size:"300",name:"external-link"})]),default:n(()=>[P(" Launch Expert ")]),_:1})])):c("v-if",!0),t.transfer?(l(),p("div",{key:1},[r("div",{class:"d-d-flex d-ai-center d-gg8"},[o(q,{"full-name":"Person Avatar","image-src":"/common/assets/person.png",seed:"seed"}),r("p",null,"Carolina Garcia Rodriguez")])])):c("v-if",!0),t.hangup||t.branch||t.goTo?(l(),p("div",{key:2},[r("p",{class:"d-fw-bold"}," Name "),r("p",null," Description ")])):c("v-if",!0),t.play?(l(),p("div",{key:3},[r("p",{class:"d-fc-purple-700"}," 2022-Greeting.mp3 ")])):c("v-if",!0),t.collect||t.menu?(l(),p("div",{key:4},[r("p",{class:"d-fw-bold"},E(t.label)+" prompt ",1),r("p",{class:"d-fc-purple-700"},E(t.fileName),1)])):c("v-if",!0)]),key:"2"},e.$attrs.menuItems?{name:"menuItems",fn:n(()=>[r("span",{innerHTML:e.$attrs.menuItems},null,8,rt)]),key:"3"}:{name:"menuItems",fn:n(({close:y})=>[o(f,{role:"menuitem","navigation-type":"arrow-keys",onClick:y},{default:n(()=>[P(" Edit ")]),_:2},1032,["onClick"]),o(f,{role:"menuitem","navigation-type":"arrow-keys",onClick:y},{right:n(()=>[o(u,{"screen-reader-text":"Ctrl and C",shortcut:"Ctrl + C"})]),default:n(()=>[P(" Copy ")]),_:2},1032,["onClick"]),o(f,{role:"menuitem","navigation-type":"arrow-keys",onClick:y},{right:n(()=>[o(u,{"screen-reader-text":"Delete",shortcut:"Del"})]),default:n(()=>[P(" Delete ")]),_:2},1032,["onClick"])]),key:"4"}]),1032,["node-label","node-type","is-selected","dtmf-key","menu-button-aria-label"])}const at=Oe(Ee,[["render",ot],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/cards/ivr_node/ivr_node_default.story.vue"]]);Ee.__docgenInfo={displayName:"DtRecipeIvrNodeDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/cards/ivr_node/ivr_node_default.story.vue"]};const we={onClick:Ae("click"),menuButtonAriaLabel:"Node menu",isSelected:!1},Me={content:{description:"Slot for card content",control:"text",table:{type:{summary:"VNode"}}},menuItems:{description:"Slot for node header menu items",control:"text",table:{type:{summary:"VNode"}}},connector:{description:"Slot for top connector",control:"text",table:{type:{summary:"VNode"}}},nodeLabel:{control:{type:"text"}},dtmfKey:{control:{type:"text"}},nodeType:{options:Object.keys(Re),control:{type:"select"}},isSelected:{control:{type:"boolean"}},onClick:{table:{disable:!0}},click:{description:"IVR node click event",table:{type:{summary:"event"}}}},st={title:"Recipes/Cards/Ivr Node",component:Pe,args:we,argTypes:Me,excludeStories:/.*Data$/},a=e=>Be(e,at),_={render:a,args:{nodeType:"hangup"},parameters:{docs:{source:{code:`
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
     `}}}},g={render:a,args:{nodeType:"promptmenu"}},b={render:a,args:{nodeType:"promptcollect"}},T={render:a,args:{nodeType:"promptplay"}},v={render:a,args:{nodeType:"gotoexpert"}},h={render:a,args:{nodeType:"goto"}},D={render:a,args:{nodeType:"branch"}},N={render:a,args:{nodeType:"transfer"}},k={render:a,args:{nodeType:"hangup"}},I={render:a,args:{nodeType:"promptmenu",isSelected:!0}},S={render:a,args:{nodeType:"transfer",dtmfKey:"1"}},C={render:a,args:{nodeType:"branch",connector:"text"}};var F,z,j;_.parameters={..._.parameters,docs:{...(F=_.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(j=(z=_.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var W,U,Y;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'promptmenu'
  }
}`,...(Y=(U=g.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var J,X,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'promptcollect'
  }
}`,...(Q=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var Z,ee,te;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(Ie=(ke=C.parameters)==null?void 0:ke.docs)==null?void 0:Ie.source}}};const dt=["argsData","argTypesData","Default","PromptMenu","PromptCollect","PromptPlay","Expert","GoTo","Branch","Transfer","Hangup","SelectedNode","NodeWithDtmf","NodeWithTopConnector"],Tt=Object.freeze(Object.defineProperty({__proto__:null,Branch:D,Default:_,Expert:v,GoTo:h,Hangup:k,NodeWithDtmf:S,NodeWithTopConnector:C,PromptCollect:b,PromptMenu:g,PromptPlay:T,SelectedNode:I,Transfer:N,__namedExportsOrder:dt,argTypesData:Me,argsData:we,default:st},Symbol.toStringTag,{value:"Module"}));export{_ as D,v as E,h as G,k as H,Tt as I,C as N,g as P,N as T,b as a,T as b};
//# sourceMappingURL=ivr_node.stories-09b30f4f.js.map
