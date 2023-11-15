import{D as C}from"./card-4ff90cf0.js";import{D as k}from"./button-878f62d6.js";import{D as S}from"./dropdown_separator-586ba5c3.js";import{D as V}from"./icon-8dfe7109.js";import{s as c,k as m,p as u,y as g,f as r,g as p,u as d,w as a,m as w,t as M,o as _,e as f,H as A}from"./vue.esm-bundler-81c53cfe.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";const b="promptmenu",v="promptcollect",h="promptplay",y="gotoexpert",i="goto",O="branch",I="transfer",N="hangup",q={[b]:"keypad",[v]:"dialer",[h]:"volume-2",[y]:"expert-node",[O]:"branch",[i]:"call-merge",[I]:"transfer",[N]:"phone-hang-up"},W={[b]:"Menu",[v]:"Collect",[h]:"Play",[y]:"Expert",[O]:"Branch",[i]:"Go-to",[I]:"Transfer",[N]:"Hangup"},n={PROMPT:{normal:"d-bc-blue-200",selected:"d-bc-blue-300"},LOGIC:{normal:"d-bc-purple-200",selected:"d-bc-purple-400"},TERMINAL:{normal:"d-bc-red-100",selected:"d-bc-red-200"}},G={[b]:n.PROMPT,[v]:n.PROMPT,[h]:n.PROMPT,[y]:n.LOGIC,[O]:n.LOGIC,[i]:n.LOGIC,[I]:n.TERMINAL,[N]:n.TERMINAL};const T={name:"DtRecipeIvrNode",components:{DtCard:C,DtButton:k,DtDropdown:S,DtIcon:V},props:{nodeType:{type:String,required:!0},nodeLabel:{type:String,required:!0},isSelected:{type:Boolean,default:!1},menuButtonAriaLabel:{type:String,required:!0},dtmfKey:{type:String,default:null}},emits:["click"],data(){return{isOpen:!1}},computed:{nodeListeners(){return{click:t=>this.$emit("click",t)}},nodeIcon(){return q[this.nodeType]},headerColor(){const{normal:t,selected:s}=G[this.nodeType];return this.isSelected?s:t},isGotoNode(){return this.nodeType===i}},methods:{openMenu(){this.isOpen=!0}}},x={class:"d-d-flex d-ai-center"},K={class:"d-fs-200 d-fw-bold","data-qa":"ivr-node-label"},H={class:"d-w164"};function z(t,s,e,F,R,o){const D=c("dt-icon"),E=c("dt-button"),P=c("dt-dropdown"),L=c("dt-card");return _(),m("div",w({class:"d-d-flex d-fd-column d-ai-center d-c-pointer ivr_node__width"},M(o.nodeListeners,!0)),[e.dtmfKey?(_(),m("div",{key:0,"data-qa":"dt-top-connector-dtmf",class:u(["ivr-connector d-w24 d-h24 d-bar-circle d-mbn12 d-fc-neutral-white d-fs-200",{"d-mbn16":e.isSelected}])},g(e.dtmfKey),3)):r("v-if",!0),t.$slots.connector?p(t.$slots,"connector",{key:1}):r("v-if",!0),!e.dtmfKey&&!t.$slots.connector?(_(),m("div",{key:2,"data-qa":"dt-top-connector",class:u(["ivr-connector d-w8 d-h8 d-bar-circle d-mbn4",{"d-mbn8":e.isSelected}])},null,2)):r("v-if",!0),d(L,{"content-class":"d-bt d-bc-black-300 d-px12 d-pt8 d-pb12","container-class":["d-w100p",{"d-ba d-bar8 d-baw4":e.isSelected},o.headerColor],"header-class":["d-mtn1","d-bt","d-btw4","d-p0",o.headerColor,{"d-btr4":!e.isSelected}]},{header:a(()=>[r(" node label and icon section on left of the header "),f("div",x,[d(E,{"aria-label":e.nodeType,importance:"clear",kind:"muted","data-qa":"dt-ivr-node-icon"},{icon:a(()=>[d(D,{name:o.nodeIcon,size:"200",class:u(["",{ivr_node__goto_icon:o.isGotoNode}])},null,8,["name","class"])]),_:1},8,["aria-label"]),f("p",K,g(e.nodeLabel),1)]),r(" node menu for actions like edit, copy, delete "),d(P,{open:R.isOpen,"onUpdate:open":s[0]||(s[0]=l=>R.isOpen=l),placement:"bottom"},{anchor:a(()=>[d(E,{importance:"clear",kind:"muted","aria-label":e.menuButtonAriaLabel,onClick:A(o.openMenu,["stop","prevent"])},{icon:a(()=>[d(D,{name:"more-vertical",size:"200"})]),_:1},8,["aria-label","onClick"])]),list:a(({close:l})=>[f("div",H,[p(t.$slots,"menuItems",{close:l})])]),_:3},8,["open"])]),content:a(()=>[p(t.$slots,"content")]),_:3},8,["container-class","header-class"])],16)}const Z=B(T,[["render",z],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/cards/ivr_node/ivr_node.vue"]]);T.__docgenInfo={displayName:"DtRecipeIvrNode",exportName:"default",description:"",tags:{},props:[{name:"nodeType",description:"type of IVR Node.",type:{name:"string"},required:!0},{name:"nodeLabel",description:"Descriptive label for the node name.",type:{name:"string"},required:!0},{name:"isSelected",description:"Selected state of the node",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"menuButtonAriaLabel",description:"Translated aria-label for header menu button",type:{name:"string"},required:!0},{name:"dtmfKey",description:"DTMF input",type:{name:"string"},defaultValue:{func:!1,value:"null"}}],events:[{name:"click",description:"Add node click event",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"connector"},{name:"menuItems",scoped:!0,bindings:[{name:"close",title:"binding"}]},{name:"content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/cards/ivr_node/ivr_node.vue"]};export{Z as D,y as I,b as a,v as b,h as c,i as d,O as e,I as f,N as g,W as h,q as i};
//# sourceMappingURL=ivr_node-c93f29ce.js.map