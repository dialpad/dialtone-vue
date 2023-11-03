import{a as _e}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as De}from"./storybook_utils-43ef8c35.js";import{D as le,I as be,a as he,b as ve,c as Ne,d as ke,e as Ie,f as Se,g as Ce,h as Ee,i as Re}from"./ivr_node-5745875c.js";import{D as Oe}from"./icon-926a9c42.js";import{D as Pe}from"./button-193f2ca3.js";import{D as Ve}from"./avatar-986ed094.js";import{D as we}from"./list_item-ee17b8fd.js";import{D as xe}from"./keyboard_shortcut-e858d433.js";import{s,o as d,b as Le,C as $e,w as r,e as t,k as p,u as o,x as k,f as l,y as C}from"./vue.esm-bundler-4299d4fa.js";import{_ as Ae}from"./_plugin-vue_export-helper-c27b6911.js";import{d as He}from"./avatar2-e5d57aa6.js";const me={name:"DtRecipeIvrNodeDefault",components:{DtButton:Pe,DtRecipeIvrNode:le,DtIcon:Oe,DtAvatar:Ve,DtListItem:we,DtKeyboardShortcut:xe},computed:{items(){return[{name:"Edit",id:1},{name:"Copy",id:2},{name:"Delete",id:3}]},expert(){return this.$attrs.nodeType===be},menu(){return this.$attrs.nodeType===he},collect(){return this.$attrs.nodeType===ve},play(){return this.$attrs.nodeType===Ne},goTo(){return this.$attrs.nodeType===ke},branch(){return this.$attrs.nodeType===Ie},transfer(){return this.$attrs.nodeType===Se},hangup(){return this.$attrs.nodeType===Ce},label(){return this.$attrs.nodeLabel||Ee[this.$attrs.nodeType]},fileName(){return this.menu?"americas_office-workflow_main-menu-2022--FINAL.mp3":"americas_office-collect-menu-2022-FINAL.mp3"}}},Be=t("div",{class:"ivr-connector d-px8 d-h24 d-bar-pill d-mbn12 d-fc-neutral-white d-fs-100"}," Add branch ",-1),Me=["innerHTML"],Ge=["innerHTML"];function Fe(e,N,ze,Ue,Ye,a){const fe=s("dt-icon"),ye=s("dt-button"),ge=s("dt-avatar"),I=s("dt-list-item"),S=s("dt-keyboard-shortcut"),Te=s("dt-recipe-ivr-node");return d(),Le(Te,{"node-label":a.label,"node-type":e.$attrs.nodeType,"is-selected":e.$attrs.isSelected,"dtmf-key":e.$attrs.dtmfKey,"menu-button-aria-label":e.$attrs.menuButtonAriaLabel,onClick:N[0]||(N[0]=c=>e.$attrs.onClick(c))},$e({_:2},[e.$attrs.connector?{name:"connector",fn:r(()=>[Be]),key:"0"}:void 0,e.$attrs.content?{name:"content",fn:r(()=>[t("span",{innerHTML:e.$attrs.content},null,8,Me)]),key:"1"}:{name:"content",fn:r(()=>[a.expert?(d(),p("div",{key:0},[t("p",{class:"d-fw-bold"}," Account Issues "),t("p",null," 19 Nodes "),o(ye,{importance:"clear",kind:"muted","icon-position":"right"},{icon:r(()=>[o(fe,{size:"300",name:"external-link"})]),default:r(()=>[k(" Launch Expert ")]),_:1})])):l("v-if",!0),a.transfer?(d(),p("div",{key:1},[t("div",{class:"d-d-flex d-ai-center d-gg8"},[o(ge,{"full-name":"Person Avatar","image-src":e.$attrs.defaultImage,seed:"seed"},null,8,["image-src"]),t("p",null,"Carolina Garcia Rodriguez")])])):l("v-if",!0),a.hangup||a.branch||a.goTo?(d(),p("div",{key:2},[t("p",{class:"d-fw-bold"}," Name "),t("p",null," Description ")])):l("v-if",!0),a.play?(d(),p("div",{key:3},[t("p",{class:"d-fc-purple-700"}," 2022-Greeting.mp3 ")])):l("v-if",!0),a.collect||a.menu?(d(),p("div",{key:4},[t("p",{class:"d-fw-bold"},C(a.label)+" prompt ",1),t("p",{class:"d-fc-purple-700"},C(a.fileName),1)])):l("v-if",!0)]),key:"2"},e.$attrs.menuItems?{name:"menuItems",fn:r(()=>[t("span",{innerHTML:e.$attrs.menuItems},null,8,Ge)]),key:"3"}:{name:"menuItems",fn:r(({close:c})=>[o(I,{role:"menuitem","navigation-type":"arrow-keys",onClick:c},{default:r(()=>[k(" Edit ")]),_:2},1032,["onClick"]),o(I,{role:"menuitem","navigation-type":"arrow-keys",onClick:c},{right:r(()=>[o(S,{"screen-reader-text":"Ctrl and C",shortcut:"Ctrl + C"})]),default:r(()=>[k(" Copy ")]),_:2},1032,["onClick"]),o(I,{role:"menuitem","navigation-type":"arrow-keys",onClick:c},{right:r(()=>[o(S,{"screen-reader-text":"Delete",shortcut:"Del"})]),default:r(()=>[k(" Delete ")]),_:2},1032,["onClick"])]),key:"4"}]),1032,["node-label","node-type","is-selected","dtmf-key","menu-button-aria-label"])}const Ke=Ae(me,[["render",Fe],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/cards/ivr_node/ivr_node_default.story.vue"]]);me.__docgenInfo={displayName:"DtRecipeIvrNodeDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/cards/ivr_node/ivr_node_default.story.vue"]};const ie={onClick:_e("click"),menuButtonAriaLabel:"Node menu",isSelected:!1,defaultImage:He},ue={content:{description:"Slot for card content",control:"text",table:{type:{summary:"VNode"}}},menuItems:{description:"Slot for node header menu items",control:"text",table:{type:{summary:"VNode"}}},connector:{description:"Slot for top connector",control:"text",table:{type:{summary:"VNode"}}},nodeLabel:{control:{type:"text"}},dtmfKey:{control:{type:"text"}},nodeType:{options:Object.keys(Re),control:{type:"select"}},isSelected:{control:{type:"boolean"}},onClick:{table:{disable:!0}},click:{description:"IVR node click event",table:{type:{summary:"event"}}}},We={title:"Recipes/Cards/Ivr Node",component:le,args:ie,argTypes:ue,excludeStories:/.*Data$/},n=(e,{argTypes:N})=>De(e,N,Ke),m={render:n,args:{nodeType:"hangup"},parameters:{docs:{source:{code:`
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
     `}}}},i={render:n,args:{nodeType:"promptmenu"}},u={render:n,args:{nodeType:"promptcollect"}},f={render:n,args:{nodeType:"promptplay"}},y={render:n,args:{nodeType:"gotoexpert"}},g={render:n,args:{nodeType:"goto"}},T={render:n,args:{nodeType:"branch"}},_={render:n,args:{nodeType:"transfer"}},D={render:n,args:{nodeType:"hangup"}},b={render:n,args:{nodeType:"promptmenu",isSelected:!0}},h={render:n,args:{nodeType:"transfer",dtmfKey:"1"}},v={render:n,args:{nodeType:"branch",connector:"text"}};var E,R,O;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(O=(R=m.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var P,V,w;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'promptmenu'
  }
}`,...(w=(V=i.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var x,L,$;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'promptcollect'
  }
}`,...($=(L=u.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var A,H,B;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'promptplay'
  }
}`,...(B=(H=f.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var M,G,F;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'gotoexpert'
  }
}`,...(F=(G=y.parameters)==null?void 0:G.docs)==null?void 0:F.source}}};var K,W,j;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'goto'
  }
}`,...(j=(W=g.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var z,U,Y;T.parameters={...T.parameters,docs:{...(z=T.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'branch'
  }
}`,...(Y=(U=T.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var X,q,J;_.parameters={..._.parameters,docs:{...(X=_.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'transfer'
  }
}`,...(J=(q=_.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Q,Z,ee;D.parameters={...D.parameters,docs:{...(Q=D.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'hangup'
  }
}`,...(ee=(Z=D.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,te,ne;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'promptmenu',
    isSelected: true
  }
}`,...(ne=(te=b.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,oe,se;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'transfer',
    dtmfKey: '1'
  }
}`,...(se=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var de,ce,pe;v.parameters={...v.parameters,docs:{...(de=v.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    nodeType: 'branch',
    connector: 'text'
  }
}`,...(pe=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};const je=["argsData","argTypesData","Default","PromptMenu","PromptCollect","PromptPlay","Expert","GoTo","Branch","Transfer","Hangup","SelectedNode","NodeWithDtmf","NodeWithTopConnector"],sr=Object.freeze(Object.defineProperty({__proto__:null,Branch:T,Default:m,Expert:y,GoTo:g,Hangup:D,NodeWithDtmf:h,NodeWithTopConnector:v,PromptCollect:u,PromptMenu:i,PromptPlay:f,SelectedNode:b,Transfer:_,__namedExportsOrder:je,argTypesData:ue,argsData:ie,default:We},Symbol.toStringTag,{value:"Module"}));export{T as B,m as D,y as E,g as G,D as H,sr as I,v as N,i as P,_ as T,u as a,f as b};
//# sourceMappingURL=ivr_node.stories-2abc292e.js.map
