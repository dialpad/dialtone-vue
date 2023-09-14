import{u as S,c as L}from"./storybook_utils-e1aad9b5.js";import"./avatar-fba09582.js";import"./badge-8cf1d91e.js";import"./banner-47cb2bd3.js";import"./breadcrumbs-c29e138c.js";import{D as y}from"./button-82727ed7.js";import"./button_group-f60cb9de.js";import"./card-bf2d171f.js";import"./codeblock-48f80f9e.js";import"./combobox-4ea86de7.js";import{D as N}from"./collapsible-c51344d7.js";import"./dropdown_separator-f3a7bb4e.js";import"./image_viewer-d6c7f94d.js";import"./input-6b1ba9f4.js";import"./input_group-80798869.js";import"./modal-f7f0185f.js";import"./lazy_show-ac5fd1cd.js";import{n as i}from"./_plugin-vue2_normalizer-2bbd088e.js";import"./list_item-5ec04318.js";import"./list_item_group-67a31a42.js";import"./link-ea758f3d.js";import"./notice-7bf7396f.js";import"./pagination-e6bb470c.js";import"./popover-9d3abfa0.js";import"./presence-7999d7f0.js";import"./radio-f16c67a6.js";import"./radio_group-14d82614.js";import"./tab_group-9ded31b8.js";import"./tab-8115bfcd.js";import"./tab_panel-5f6c9511.js";import"./validation_messages-7a625c98.js";import"./checkbox-331de3a3.js";import"./checkbox_group-7f8fe53f.js";import"./chip-1a35cbe9.js";import"./select_menu-5f92692e.js";import"./toast-5b66c186.js";import"./toggle-7d64bf49.js";import"./tooltip-08869a42.js";import"./skeleton-8a392920.js";import"./keyboard_shortcut-b46138ac.js";import"./root_layout-489ee9b0.js";import{D as v}from"./icon-23d7fa2f.js";import"./stack-793861c1.js";import"./DtDatepicker-c1c8814e.js";import{D as T}from"./item_layout-173b62c3.js";import"./combobox_with_popover-7f64bddc.js";import"./combobox_multi_select-c7970f58.js";import"./callbar_button-a29a5e36.js";import"./callbar_button_with_popover-9c39b22c.js";import"./contact_info-517c0a5f.js";import"./top_banner_info-b66cfd6a.js";import"./ivr_node-e941e6a7.js";import"./grouped_chip-19a8be97.js";import"./settings_menu_button-f89cb1b2.js";import"./general_row-67649262.js";import"./group_row-a1b5f6d5.js";import"./contact_row-1834a70d.js";import"./unread_pill-bcf9089a.js";import"./feed_item_row-6cfef93c.js";import"./time_pill-fd708477.js";import"./emoji_row-28a8867a.js";import"./callbox-3f4faa5f.js";const d={default:"dt-feed-item-pill--border-default",ai:"dt-feed-item-pill--border-ai",critical:"dt-feed-item-pill--border-critical"};const I={name:"ListSection",components:{Vnodes:{name:"vnodes",functional:!0,render:(a,e)=>e.props.vnodes},DtButton:y},props:{id:{type:String,default(){return S.getUniqueString()}},header:{type:String,default:null},separator:{type:Boolean,default:!1},maxDisplayed:{type:Number,default:0},textMore:{type:String,default:"Show more"},textLess:{type:String,default:"Show less"}},data(){return{showAll:!1}},computed:{isCollapsible(){return!(this.maxDisplayed===0||this.itemCount<=this.maxDisplayed)},showMoreLessText(){return this.showAll?this.textLess:this.textMore},hiddenCount(){return this.itemCount-this.displayedItems.length},itemCount(){return this.$slots.default.length},displayedItems(){return this.$slots.default.filter((a,e)=>e<=this.maxDisplayed-1)}},methods:{showMoreLessClicked(){this.showAll=!this.showAll}}};var V=function(){var e=this,t=e._self._c;return t("div",{class:["dt-list-section","d-fs-200","d-lh6","d-py6","d-bc-black-400",{"d-bb":e.separator}],attrs:{id:e.id,role:"group","aria-labelledby":`${e.id}-list-section-header`,tabindex:"-1"}},[e.header?t("h3",{staticClass:"d-pl12 d-mt6",attrs:{id:`${e.id}-list-section-header`}},[e._v(" "+e._s(e.header)+" ")]):e._e(),!e.isCollapsible||e.showAll?t("ol",{attrs:{id:`${e.id}-list-section-content`}},[e._t("default")],2):t("ol",{attrs:{id:`${e.id}-list-section-content`}},[t("vnodes",{attrs:{vnodes:e.displayedItems}})],1),t("div",{staticClass:"d-d-flex"},[e.isCollapsible?t("dt-button",{staticClass:"d-ml12 d-py6",attrs:{id:`${e.id}-list-section-show-more-less`,link:""},on:{click:e.showMoreLessClicked}},[e._v(" "+e._s(e.showMoreLessText)+" ")]):e._e(),e._t("footer")],2)])},$=[],F=i(I,V,$,!1,null,null,null,null);F.exports.__docgenInfo={displayName:"ListSection",exportName:"default",description:"",tags:{},props:[{name:"id",type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"header",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"separator",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxDisplayed",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"textMore",type:{name:"string"},defaultValue:{func:!1,value:"'Show more'"}},{name:"textLess",type:{name:"string"},defaultValue:{func:!1,value:"'Show less'"}}],slots:[{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/list_section/list_section.vue"]};const P={name:"DtRecipeFeedItemPill",components:{DtItemLayout:T,DtIcon:v,DtCollapsible:N},props:{iconName:{type:String,default:()=>""},title:{type:String,default:()=>""},wrapperClass:{type:[String,Array,Object],default:""},buttonClass:{type:[String,Array,Object],default:""},ariaLabel:{type:String,required:!0},toggleable:{type:Boolean,default:()=>!0},borderColor:{type:String,default:"default",validator:a=>Object.keys(d).includes(a)}},data(){return{hover:!1,expanded:!1}},computed:{computedIcon(){return this.toggleable&&this.hover?this.expanded?"chevron-down":"chevron-right":this.iconName},toggleableClass(){return this.toggleable?"d-c-pointer":""},borderClass(){return d[this.borderColor]}},methods:{onClick(){this.toggleable&&(this.expanded=!this.expanded)}}};var A=function(){var e=this,t=e._self._c;return t("div",{class:["dt-feed-item-pill--border",e.borderClass,e.wrapperClass]},[t("div",{staticClass:"d-p8 d-bgc-secondary"},[t("dt-collapsible",{attrs:{open:e.expanded},scopedSlots:e._u([{key:"anchor",fn:function(){return[t("button",{class:["d-baw0 d-bgc-moderate d-bar-pill d-w100p d-ta-left d-btn--circle",e.toggleableClass,e.buttonClass],attrs:{"aria-label":e.ariaLabel,"data-qa":"dt-feed-item-pill"},on:{focusin:function(r){e.hover=!0},focusout:function(r){e.hover=!1},mouseenter:function(r){e.hover=!0},mouseleave:function(r){e.hover=!1},click:e.onClick}},[t("dt-item-layout",{staticClass:"d-w100p d-p8",scopedSlots:e._u([{key:"left",fn:function(){return[t("dt-icon",{staticClass:"dt-feed-item-pill--icon d-pr8",attrs:{size:"300","data-qa":"dt-feed-item-pill-icon",name:e.computedIcon}})]},proxy:!0},{key:"subtitle",fn:function(){return[e._t("subtitle")]},proxy:!0},{key:"bottom",fn:function(){return[e._t("bottom")]},proxy:!0},{key:"right",fn:function(){return[e._t("right")]},proxy:!0}],null,!0)},[e._v(" "+e._s(e.title)+" ")])],1)]},proxy:!0},{key:"content",fn:function(){return[t("div",{staticClass:"d-jc-center d-d-flex"},[e._t("content")],2)]},proxy:!0}],null,!0)})],1)])},R=[],C=i(P,A,R,!1,null,"4bd1c0c2",null,null);const x=C.exports;C.exports.__docgenInfo={displayName:"DtRecipeFeedItemPill",exportName:"default",description:"",tags:{},props:[{name:"iconName",description:"Accepts a DtIcon name to be shown in the left",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"title",description:"Bolded primary text",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"wrapperClass",description:"Additional styling around the pill",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"buttonClass",description:"Additional styling for the pill",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"ariaLabel",description:"Aria label for feed pill",type:{name:"string"},required:!0},{name:"toggleable",description:"Sets whether the pill can be toggled (Icon changing on hover, expanding and collapsing, pointer)",type:{name:"boolean"},defaultValue:{func:!0,value:"() => true"}},{name:"borderColor",description:"Callbox border color",tags:{},values:["default","ai","critical"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}}],slots:[{name:"subtitle"},{name:"bottom"},{name:"right"},{name:"content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill.vue"]};const O={name:"DtRecipeFeedItemPillDefault",components:{DtRecipeFeedItemPill:x,DtButton:y,DtIcon:v}};var j=function(){var e=this,t=e._self._c;return t("dt-recipe-feed-item-pill",{attrs:{"icon-name":e.iconName,title:e.title,"wrapper-class":e.wrapperClass,"button-class":e.buttonClass,"border-color":e.borderColor,"aria-label":e.ariaLabel,toggleable:e.toggleable},scopedSlots:e._u([{key:"subtitle",fn:function(){return[e._v(" Last 43 minutes - Ended at 5:04pm ")]},proxy:!0},{key:"bottom",fn:function(){return[t("span",{staticClass:"d-fc-tertiary d-fs-100"},[e._v("8 people joined")])]},proxy:!0},{key:"right",fn:function(){return[t("div",{staticClass:"d-pr16"},[t("dt-button",{attrs:{"aria-label":"Open external link",kind:"muted",importance:"clear",circle:!0},on:{click:function(r){r.stopPropagation()}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("dt-icon",{attrs:{name:"external-link",size:"300"}})]},proxy:!0}])})],1)]},proxy:!0},{key:"content",fn:function(){return[t("span",{staticClass:"d-p16"},[e._v(" The agent from Dialpad called to follow up on a support ticket that Jeff was handling for them regarding Dialpad CTI. They apologized for calling outside of the requested time and expressed that they had asked the team to look into the issue and would email them after the call. ")])]},proxy:!0}])})},M=[],w=i(O,j,M,!1,null,null,null,null);const q=w.exports;w.exports.__docgenInfo={displayName:"DtRecipeFeedItemPillDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill_default.story.vue"]};const D={},k={subtitle:{control:"text",table:{type:{summary:"VNode"}}},bottom:{control:"text",table:{type:{summary:"VNode"}}},right:{control:"text",table:{type:{summary:"VNode"}}},content:{control:"text",table:{type:{summary:"VNode"}}}},B={title:"Recipes/Conversation View/Feed Item Pill",component:x,args:D,argTypes:k,excludeStories:/.*Data$/},s=(a,{argTypes:e})=>L(a,e,q),o={render:s,parameters:{a11y:{disable:!0}},args:{iconName:"video",title:"This meeting has ended",ariaLabel:"Click to expand",buttonClass:"",toggleable:!0,wrapperClass:"d-w628",borderColor:"default"}},n={render:s,parameters:{options:{showPanel:!1},controls:{disable:!0},a11y:{disable:!0}},args:{iconName:"video",title:"This meeting has ended",wrapperClass:"d-w628",buttonClass:"",ariaLabel:"Click to expand",toggleable:!0,borderColor:"ai"}},l={render:s,parameters:{options:{showPanel:!1},controls:{disable:!0},a11y:{disable:!0}},args:{iconName:"video",title:"This meeting has ended",wrapperClass:"d-w628",expanded:!1,ariaLabel:"Click to expand",toggleable:!1,borderColor:"critical"}};var p,u,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: DefaultTemplate,
  parameters: {
    a11y: {
      disable: true
    }
  },
  args: {
    iconName: 'video',
    title: 'This meeting has ended',
    ariaLabel: 'Click to expand',
    buttonClass: '',
    toggleable: true,
    wrapperClass: 'd-w628',
    borderColor: 'default'
  }
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var m,f,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: DefaultTemplate,
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    },
    a11y: {
      disable: true
    }
  },
  args: {
    iconName: 'video',
    title: 'This meeting has ended',
    wrapperClass: 'd-w628',
    buttonClass: '',
    ariaLabel: 'Click to expand',
    toggleable: true,
    borderColor: 'ai'
  }
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,_,h;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: DefaultTemplate,
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    },
    a11y: {
      disable: true
    }
  },
  args: {
    iconName: 'video',
    title: 'This meeting has ended',
    wrapperClass: 'd-w628',
    expanded: false,
    ariaLabel: 'Click to expand',
    toggleable: false,
    borderColor: 'critical'
  }
}`,...(h=(_=l.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};const E=["argsData","argTypesData","Default","AiBorderGradient","NoToggleVariant"],Xe=Object.freeze(Object.defineProperty({__proto__:null,AiBorderGradient:n,Default:o,NoToggleVariant:l,__namedExportsOrder:E,argTypesData:k,argsData:D,default:B},Symbol.toStringTag,{value:"Module"}));export{n as A,o as D,Xe as F,l as N};
//# sourceMappingURL=feed_item_pill.stories-7f4346da.js.map
