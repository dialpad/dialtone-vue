import{D as f}from"./card-B65FK8DK.js";import{D as b}from"./button-ux2tnS3y.js";import{D as v}from"./dropdown_separator-V-l5IsDV.js";import{D as y}from"./icon-pX31dgl5.js";import{n as O}from"./_plugin-vue2_normalizer-XBmYDgEh.js";const a="promptmenu",d="promptcollect",s="promptplay",c="gotoexpert",r="goto",i="branch",l="transfer",u="hangup",R={[a]:"keypad",[d]:"dialer",[s]:"volume-2",[c]:"expert-node",[i]:"branch",[r]:"call-merge",[l]:"transfer",[u]:"phone-hang-up"},C={[a]:"Menu",[d]:"Collect",[s]:"Play",[c]:"Expert",[i]:"Branch",[r]:"Go-to",[l]:"Transfer",[u]:"Hangup"},n={PROMPT:{normal:"d-bc-blue-200",selected:"d-bc-blue-300"},LOGIC:{normal:"d-bc-purple-200",selected:"d-bc-purple-400"},TERMINAL:{normal:"d-bc-red-100",selected:"d-bc-red-200"}},I={[a]:n.PROMPT,[d]:n.PROMPT,[s]:n.PROMPT,[c]:n.LOGIC,[i]:n.LOGIC,[r]:n.LOGIC,[l]:n.TERMINAL,[u]:n.TERMINAL},h={name:"DtRecipeIvrNode",components:{DtCard:f,DtButton:b,DtDropdown:v,DtIcon:y},props:{nodeType:{type:String,required:!0},nodeLabel:{type:String,required:!0},isSelected:{type:Boolean,default:!1},menuButtonAriaLabel:{type:String,required:!0},dtmfKey:{type:String,default:null}},emits:["click"],data(){return{isOpen:!1}},computed:{nodeIcon(){return R[this.nodeType]},headerColor(){const{normal:m,selected:e}=I[this.nodeType];return this.isSelected?e:m},isGotoNode(){return this.nodeType===r}},methods:{openMenu(){this.isOpen=!0}}};var _=function(){var e=this,t=e._self._c;return t("div",e._g({staticClass:"d-d-flex d-fd-column d-ai-center d-c-pointer ivr_node__width"},e.$listeners),[e.dtmfKey?t("div",{staticClass:"ivr-connector d-w24 d-h24 d-bar-circle d-mbn12 d-fc-neutral-white d-fs-200",class:{"d-mbn16":e.isSelected},attrs:{"data-qa":"dt-top-connector-dtmf"}},[e._v(" "+e._s(e.dtmfKey)+" ")]):e._e(),e.$slots.connector?e._t("connector"):e._e(),!e.dtmfKey&&!e.$slots.connector?t("div",{staticClass:"ivr-connector d-w8 d-h8 d-bar-circle d-mbn4",class:{"d-mbn8":e.isSelected},attrs:{"data-qa":"dt-top-connector"}}):e._e(),t("dt-card",{attrs:{"content-class":"d-bt d-bc-black-300 d-px12 d-pt8 d-pb12","container-class":["d-w100p",{"d-ba d-bar8 d-baw4":e.isSelected},e.headerColor],"header-class":["d-mtn1","d-bt","d-btw4","d-p0",e.headerColor,{"d-btr4":!e.isSelected}]},scopedSlots:e._u([{key:"header",fn:function(){return[t("div",{staticClass:"d-d-flex d-ai-center"},[t("dt-button",{attrs:{"aria-label":e.nodeType,importance:"clear",kind:"muted","data-qa":"dt-ivr-node-icon"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("dt-icon",{class:["",{ivr_node__goto_icon:e.isGotoNode}],attrs:{name:e.nodeIcon,size:"200"}})]},proxy:!0}])}),t("p",{staticClass:"d-fs-200 d-fw-bold",attrs:{"data-qa":"ivr-node-label"}},[e._v(" "+e._s(e.nodeLabel)+" ")])],1),t("dt-dropdown",{attrs:{placement:"bottom",open:e.isOpen},on:{"update:open":function(o){e.isOpen=o}},scopedSlots:e._u([{key:"anchor",fn:function(){return[t("dt-button",{attrs:{importance:"clear",kind:"muted","aria-label":e.menuButtonAriaLabel},on:{click:function(o){return o.stopPropagation(),o.preventDefault(),e.openMenu.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("dt-icon",{attrs:{name:"more-vertical",size:"200"}})]},proxy:!0}])})]},proxy:!0},{key:"list",fn:function({close:o}){return[t("div",{staticClass:"d-w164"},[e._t("menuItems",null,{close:o})],2)]}}],null,!0)})]},proxy:!0},{key:"content",fn:function(){return[e._t("content")]},proxy:!0}],null,!0)})],2)},N=[];_._withStripped=!0;var p=O(h,_,N,!1,null,null,null,null);p.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/cards/ivr_node/ivr_node.vue";const S=p.exports;p.exports.__docgenInfo={displayName:"DtRecipeIvrNode",exportName:"default",description:"",tags:{},props:[{name:"nodeType",description:"type of IVR Node.",type:{name:"string"},required:!0},{name:"nodeLabel",description:"Descriptive label for the node name.",type:{name:"string"},required:!0},{name:"isSelected",description:"Selected state of the node",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"menuButtonAriaLabel",description:"Translated aria-label for header menu button",type:{name:"string"},required:!0},{name:"dtmfKey",description:"DTMF input",type:{name:"string"},defaultValue:{func:!1,value:"null"}}],events:[{name:"click",description:"Add node click event",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"connector"},{name:"menuItems",scoped:!0,bindings:[{name:"close",title:"binding"}]},{name:"content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/cards/ivr_node/ivr_node.vue"]};export{S as D,c as I,a,d as b,s as c,r as d,i as e,l as f,u as g,C as h,R as i};
//# sourceMappingURL=ivr_node-HEmguR6Y.js.map
