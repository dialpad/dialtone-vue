import{a as xe}from"./chunk-AY7I2SME-4UylTnhF.js";import{c as Be}from"./storybook_utils-dy5aucTw.js";import{D as He}from"./card-i2Kiyyig.js";import{D as Se}from"./button-QSbPABQk.js";import{D as Ge}from"./dropdown_separator-OUOVn8Ld.js";import{D as Ce}from"./icon-z49A8j_D.js";import{s as d,k as i,p as K,y as E,g as m,f as q,u as o,w as r,m as $e,t as Ke,o as l,e as n,H as qe,b as Fe,B as ze,x as P}from"./vue.esm-bundler-pfnFGw-8.js";import{_ as Oe}from"./_plugin-vue_export-helper-x3n3nnut.js";import{D as We}from"./avatar-VH-E6o_B.js";import{D as je}from"./list_item-epInwBgn.js";import{D as Ue}from"./keyboard_shortcut-u0-KcN3Q.js";import{d as Ye}from"./avatar2-brBbnWbv.js";const w="promptmenu",M="promptcollect",V="promptplay",A="gotoexpert",O="goto",x="branch",B="transfer",H="hangup",Re={[w]:"keypad",[M]:"dialer",[V]:"volume-2",[A]:"expert-node",[x]:"branch",[O]:"call-merge",[B]:"transfer",[H]:"phone-hang-up"},Xe={[w]:"Menu",[M]:"Collect",[V]:"Play",[A]:"Expert",[x]:"Branch",[O]:"Go-to",[B]:"Transfer",[H]:"Hangup"},p={PROMPT:{normal:"d-bc-blue-200",selected:"d-bc-blue-300"},LOGIC:{normal:"d-bc-purple-200",selected:"d-bc-purple-400"},TERMINAL:{normal:"d-bc-red-100",selected:"d-bc-red-200"}},Je={[w]:p.PROMPT,[M]:p.PROMPT,[V]:p.PROMPT,[A]:p.LOGIC,[x]:p.LOGIC,[O]:p.LOGIC,[B]:p.TERMINAL,[H]:p.TERMINAL},Le={name:"DtRecipeIvrNode",components:{DtCard:He,DtButton:Se,DtDropdown:Ge,DtIcon:Ce},props:{nodeType:{type:String,required:!0},nodeLabel:{type:String,required:!0},isSelected:{type:Boolean,default:!1},menuButtonAriaLabel:{type:String,required:!0},dtmfKey:{type:String,default:null}},emits:["click"],data(){return{isOpen:!1}},computed:{nodeListeners(){return{click:e=>this.$emit("click",e)}},nodeIcon(){return Re[this.nodeType]},headerColor(){const{normal:e,selected:c}=Je[this.nodeType];return this.isSelected?c:e},isGotoNode(){return this.nodeType===O}},methods:{openMenu(){this.isOpen=!0}}},Qe={class:"ivr_node__header-left"},Ze={class:"ivr_node__label","data-qa":"ivr-node-label"},et={class:"ivr_node__dropdown-list"};function tt(e,c,s,Ve,G,t){const R=d("dt-icon"),L=d("dt-button"),$=d("dt-dropdown"),f=d("dt-card");return l(),i("div",$e({class:"ivr_node"},Ke(t.nodeListeners,!0)),[s.dtmfKey?(l(),i("div",{key:0,"data-qa":"dt-top-connector-dtmf",class:K(["ivr-connector ivr-connector--dtmf",{"ivr-connector--dtmf--selected":s.isSelected}])},E(s.dtmfKey),3)):m("",!0),e.$slots.connector?q(e.$slots,"connector",{key:1}):m("",!0),!s.dtmfKey&&!e.$slots.connector?(l(),i("div",{key:2,"data-qa":"dt-top-connector",class:K(["ivr-connector",{"ivr-connector--selected":s.isSelected}])},null,2)):m("",!0),o(f,{"content-class":"d-bt d-bc-black-300 d-px12 d-pt8 d-pb12","container-class":["d-w100p",{"d-ba d-bar8 d-baw4":s.isSelected},t.headerColor],"header-class":["d-mtn1","d-bt","d-btw4","d-p0",t.headerColor,{"d-btr4":!s.isSelected}]},{header:r(()=>[n("div",Qe,[o(L,{"aria-label":s.nodeType,importance:"clear",kind:"muted","data-qa":"dt-ivr-node-icon"},{icon:r(()=>[o(R,{name:t.nodeIcon,size:"200",class:K(["",{ivr_node__goto_icon:t.isGotoNode}])},null,8,["name","class"])]),_:1},8,["aria-label"]),n("p",Ze,E(s.nodeLabel),1)]),o($,{open:G.isOpen,"onUpdate:open":c[0]||(c[0]=u=>G.isOpen=u),placement:"bottom"},{anchor:r(()=>[o(L,{importance:"clear",kind:"muted","aria-label":s.menuButtonAriaLabel,onClick:qe(t.openMenu,["stop","prevent"])},{icon:r(()=>[o(R,{name:"more-vertical",size:"200"})]),_:1},8,["aria-label","onClick"])]),list:r(({close:u})=>[n("div",et,[q(e.$slots,"menuItems",{close:u})])]),_:3},8,["open"])]),content:r(()=>[q(e.$slots,"content")]),_:3},8,["container-class","header-class"])],16)}const Pe=Oe(Le,[["render",tt]]);Le.__docgenInfo={displayName:"DtRecipeIvrNode",exportName:"default",description:"",tags:{},props:[{name:"nodeType",description:"type of IVR Node.",type:{name:"string"},required:!0},{name:"nodeLabel",description:"Descriptive label for the node name.",type:{name:"string"},required:!0},{name:"isSelected",description:"Selected state of the node",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"menuButtonAriaLabel",description:"Translated aria-label for header menu button",type:{name:"string"},required:!0},{name:"dtmfKey",description:"DTMF input",type:{name:"string"},defaultValue:{func:!1,value:"null"}}],events:[{name:"click",description:"Add node click event",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"connector"},{name:"menuItems",scoped:!0,bindings:[{name:"close",title:"binding"}]},{name:"content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/cards/ivr_node/ivr_node.vue"]};const Ee={name:"DtRecipeIvrNodeDefault",components:{DtButton:Se,DtRecipeIvrNode:Pe,DtIcon:Ce,DtAvatar:We,DtListItem:je,DtKeyboardShortcut:Ue},computed:{items(){return[{name:"Edit",id:1},{name:"Copy",id:2},{name:"Delete",id:3}]},expert(){return this.$attrs.nodeType===A},menu(){return this.$attrs.nodeType===w},collect(){return this.$attrs.nodeType===M},play(){return this.$attrs.nodeType===V},goTo(){return this.$attrs.nodeType===O},branch(){return this.$attrs.nodeType===x},transfer(){return this.$attrs.nodeType===B},hangup(){return this.$attrs.nodeType===H},label(){return this.$attrs.nodeLabel||Xe[this.$attrs.nodeType]},fileName(){return this.menu?"americas_office-workflow_main-menu-2022--FINAL.mp3":"americas_office-collect-menu-2022-FINAL.mp3"}}},rt=n("div",{class:"ivr-connector d-w-auto d-px8 d-h24 d-bar-pill d-mbn12 d-fc-neutral-white d-fs-100"}," Add branch ",-1),nt=["innerHTML"],ot=["innerHTML"];function at(e,c,s,Ve,G,t){const R=d("dt-icon"),L=d("dt-button"),$=d("dt-avatar"),f=d("dt-list-item"),u=d("dt-keyboard-shortcut"),Ae=d("dt-recipe-ivr-node");return l(),Fe(Ae,{"node-label":t.label,"node-type":e.$attrs.nodeType,"is-selected":e.$attrs.isSelected,"dtmf-key":e.$attrs.dtmfKey,"menu-button-aria-label":e.$attrs.menuButtonAriaLabel,onClick:c[0]||(c[0]=y=>e.$attrs.onClick(y))},ze({_:2},[e.$attrs.connector?{name:"connector",fn:r(()=>[rt]),key:"0"}:void 0,e.$attrs.content?{name:"content",fn:r(()=>[n("span",{innerHTML:e.$attrs.content},null,8,nt)]),key:"1"}:{name:"content",fn:r(()=>[t.expert?(l(),i("div",{key:0},[n("p",{class:"d-fw-bold"}," Account Issues "),n("p",null," 19 Nodes "),o(L,{importance:"clear",kind:"muted","icon-position":"right"},{icon:r(()=>[o(R,{size:"300",name:"external-link"})]),default:r(()=>[P(" Launch Expert ")]),_:1})])):m("",!0),t.transfer?(l(),i("div",{key:1},[n("div",{class:"d-d-flex d-ai-center d-gg8"},[o($,{"full-name":"Person Avatar","image-src":e.$attrs.defaultImage,seed:"seed"},null,8,["image-src"]),n("p",null,"Carolina Garcia Rodriguez")])])):m("",!0),t.hangup||t.branch||t.goTo?(l(),i("div",{key:2},[n("p",{class:"d-fw-bold"}," Name "),n("p",null," Description ")])):m("",!0),t.play?(l(),i("div",{key:3},[n("p",{class:"d-fc-purple-700"}," 2022-Greeting.mp3 ")])):m("",!0),t.collect||t.menu?(l(),i("div",{key:4},[n("p",{class:"d-fw-bold"},E(t.label)+" prompt ",1),n("p",{class:"d-fc-purple-700"},E(t.fileName),1)])):m("",!0)]),key:"2"},e.$attrs.menuItems?{name:"menuItems",fn:r(()=>[n("span",{innerHTML:e.$attrs.menuItems},null,8,ot)]),key:"3"}:{name:"menuItems",fn:r(({close:y})=>[o(f,{role:"menuitem","navigation-type":"arrow-keys",onClick:y},{default:r(()=>[P(" Edit ")]),_:2},1032,["onClick"]),o(f,{role:"menuitem","navigation-type":"arrow-keys",onClick:y},{right:r(()=>[o(u,{"screen-reader-text":"Ctrl and C",shortcut:"Ctrl + C"})]),default:r(()=>[P(" Copy ")]),_:2},1032,["onClick"]),o(f,{role:"menuitem","navigation-type":"arrow-keys",onClick:y},{right:r(()=>[o(u,{"screen-reader-text":"Delete",shortcut:"Del"})]),default:r(()=>[P(" Delete ")]),_:2},1032,["onClick"])]),key:"4"}]),1032,["node-label","node-type","is-selected","dtmf-key","menu-button-aria-label"])}const st=Oe(Ee,[["render",at]]);Ee.__docgenInfo={displayName:"DtRecipeIvrNodeDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/cards/ivr_node/ivr_node_default.story.vue"]};const we={onClick:xe("click"),menuButtonAriaLabel:"Node menu",isSelected:!1,defaultImage:Ye},Me={content:{description:"Slot for card content",control:"text",table:{type:{summary:"VNode"}}},menuItems:{description:"Slot for node header menu items",control:"text",table:{type:{summary:"VNode"}}},connector:{description:"Slot for top connector",control:"text",table:{type:{summary:"VNode"}}},nodeLabel:{control:{type:"text"}},dtmfKey:{control:{type:"text"}},nodeType:{options:Object.keys(Re),control:{type:"select"}},isSelected:{control:{type:"boolean"}},onClick:{table:{disable:!0}},click:{description:"IVR node click event",table:{type:{summary:"event"}}}},dt={title:"Recipes/Cards/Ivr Node",component:Pe,args:we,argTypes:Me,excludeStories:/.*Data$/},a=(e,{argTypes:c})=>Be(e,c,st),_={render:a,args:{nodeType:"hangup"},parameters:{docs:{source:{code:`
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
     `}}}},g={render:a,args:{nodeType:"promptmenu"}},b={render:a,args:{nodeType:"promptcollect"}},T={render:a,args:{nodeType:"promptplay"}},h={render:a,args:{nodeType:"gotoexpert"}},v={render:a,args:{nodeType:"goto"}},D={render:a,args:{nodeType:"branch"}},N={render:a,args:{nodeType:"transfer"}},k={render:a,args:{nodeType:"hangup"}},I={render:a,args:{nodeType:"promptmenu",isSelected:!0}},S={render:a,args:{nodeType:"transfer",dtmfKey:"1"}},C={render:a,args:{nodeType:"branch",connector:"text"}};var F,z,W;_.parameters={..._.parameters,docs:{...(F=_.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(W=(z=_.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var j,U,Y;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'promptmenu'
  }
}`,...(Y=(U=g.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var X,J,Q;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'promptcollect'
  }
}`,...(Q=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,ee,te;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'promptplay'
  }
}`,...(te=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ne,oe;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'gotoexpert'
  }
}`,...(oe=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ae,se,de;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'goto'
  }
}`,...(de=(se=v.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var ce,le,pe;D.parameters={...D.parameters,docs:{...(ce=D.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'branch'
  }
}`,...(pe=(le=D.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var ie,me,ue;N.parameters={...N.parameters,docs:{...(ie=N.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(Te=(be=I.parameters)==null?void 0:be.docs)==null?void 0:Te.source}}};var he,ve,De;S.parameters={...S.parameters,docs:{...(he=S.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'transfer',
    dtmfKey: '1'
  }
}`,...(De=(ve=S.parameters)==null?void 0:ve.docs)==null?void 0:De.source}}};var Ne,ke,Ie;C.parameters={...C.parameters,docs:{...(Ne=C.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'branch',
    connector: 'text'
  }
}`,...(Ie=(ke=C.parameters)==null?void 0:ke.docs)==null?void 0:Ie.source}}};const ct=["argsData","argTypesData","Default","PromptMenu","PromptCollect","PromptPlay","Expert","GoTo","Branch","Transfer","Hangup","SelectedNode","NodeWithDtmf","NodeWithTopConnector"],vt=Object.freeze(Object.defineProperty({__proto__:null,Branch:D,Default:_,Expert:h,GoTo:v,Hangup:k,NodeWithDtmf:S,NodeWithTopConnector:C,PromptCollect:b,PromptMenu:g,PromptPlay:T,SelectedNode:I,Transfer:N,__namedExportsOrder:ct,argTypesData:Me,argsData:we,default:dt},Symbol.toStringTag,{value:"Module"}));export{D as B,_ as D,h as E,v as G,k as H,vt as I,C as N,g as P,N as T,b as a,T as b};
//# sourceMappingURL=ivr_node.stories-60ZzxAxa.js.map
