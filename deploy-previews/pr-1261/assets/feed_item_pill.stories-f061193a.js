import{u as j,h as M}from"./storybook_utils-1aebbd64.js";import"./avatar-0487eddb.js";import"./badge-930eae34.js";import"./banner-5ca7107f.js";import"./breadcrumbs-84f32b58.js";import"./breadcrumb_item-30fa3087.js";import{D as L}from"./button-6471bfba.js";import"./button_group-875af4af.js";import"./card-5e4a62ed.js";import"./codeblock-6f598051.js";import"./combobox-8804dbff.js";import{D as B}from"./collapsible-072a18b1.js";import"./dropdown_separator-0e76e100.js";import"./image_viewer-e85e6e1a.js";import"./input-6b9c0e7d.js";import"./input_group-a6635fd1.js";import"./modal-a4bc5a93.js";import"./lazy_show-0b3a0cf0.js";import{n as p}from"./_plugin-vue2_normalizer-2bbd088e.js";import"./list_item-6765cd82.js";import"./list_item_group-8f3171f3.js";import"./link-82bdd562.js";import"./notice-6ef81589.js";import"./pagination-ecf3fe80.js";import"./popover-13bf9f3a.js";import"./presence-d4f38341.js";import"./radio-255da2e7.js";import"./radio_group-b8af65e7.js";import"./tab_group-31d3db2a.js";import"./tab-2edbf7a2.js";import"./tab_panel-72292c29.js";import"./validation_messages-8f1e1950.js";import"./checkbox-192221cc.js";import"./checkbox_group-5afb0e9c.js";import"./chip-bf671c25.js";import"./select_menu-43264717.js";import"./toast-49282258.js";import"./toggle-1bcf41e2.js";import"./tooltip-8ffb6e9f.js";import"./skeleton-e82601aa.js";import"./keyboard_shortcut-2d6afe86.js";import"./root_layout-3a731ee0.js";import{D as V}from"./icon-8e6c79ec.js";import"./stack-b8a925c0.js";import"./DtDatepicker-d3fe5a4d.js";import{D as q}from"./item_layout-499a0a91.js";import"./combobox_with_popover-119087c6.js";import"./combobox_multi_select-8b010602.js";import"./callbar_button-f75d6047.js";import"./callbar_button_with_popover-bfe34d47.js";import"./contact_info-44d66e3c.js";import"./top_banner_info-371feffc.js";import"./ivr_node-e2fe1dac.js";import"./grouped_chip-1af06cf6.js";import"./settings_menu_button-b290a7d8.js";import"./general_row-6f9ad06c.js";import"./group_row-b31df5f6.js";import"./contact_row-ad51df16.js";import"./unread_pill-402e5711.js";import"./feed_item_row-ef9141be.js";import"./time_pill-a3dd4c1b.js";import"./emoji_row-09b36d5f.js";import"./callbox-5f746618.js";const m={default:"dt-feed-item-pill--border-default",ai:"dt-feed-item-pill--border-ai",critical:"dt-feed-item-pill--border-critical"};const E={name:"ListSection",components:{Vnodes:{name:"vnodes",functional:!0,render:(a,e)=>e.props.vnodes},DtButton:L},props:{id:{type:String,default(){return j.getUniqueString()}},header:{type:String,default:null},separator:{type:Boolean,default:!1},maxDisplayed:{type:Number,default:0},textMore:{type:String,default:"Show more"},textLess:{type:String,default:"Show less"}},data(){return{showAll:!1}},computed:{isCollapsible(){return!(this.maxDisplayed===0||this.itemCount<=this.maxDisplayed)},showMoreLessText(){return this.showAll?this.textLess:this.textMore},hiddenCount(){return this.itemCount-this.displayedItems.length},itemCount(){return this.$slots.default.length},displayedItems(){return this.$slots.default.filter((a,e)=>e<=this.maxDisplayed-1)}},methods:{showMoreLessClicked(){this.showAll=!this.showAll}}};var I=function(){var e=this,t=e._self._c;return t("div",{class:["dt-list-section","d-fs-200","d-lh6","d-py6","d-bc-black-400",{"d-bb":e.separator}],attrs:{id:e.id,role:"group","aria-labelledby":`${e.id}-list-section-header`,tabindex:"-1"}},[e.header?t("h3",{staticClass:"d-pl12 d-mt6",attrs:{id:`${e.id}-list-section-header`}},[e._v(" "+e._s(e.header)+" ")]):e._e(),!e.isCollapsible||e.showAll?t("ol",{attrs:{id:`${e.id}-list-section-content`}},[e._t("default")],2):t("ol",{attrs:{id:`${e.id}-list-section-content`}},[t("vnodes",{attrs:{vnodes:e.displayedItems}})],1),t("div",{staticClass:"d-d-flex"},[e.isCollapsible?t("dt-button",{staticClass:"d-ml12 d-py6",attrs:{id:`${e.id}-list-section-show-more-less`,link:""},on:{click:e.showMoreLessClicked}},[e._v(" "+e._s(e.showMoreLessText)+" ")]):e._e(),e._t("footer")],2)])},z=[];I._withStripped=!0;var $=p(E,I,z,!1,null,null,null,null);$.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/list_section/list_section.vue";$.exports.__docgenInfo={displayName:"ListSection",exportName:"default",description:"",tags:{},props:[{name:"id",type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"header",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"separator",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxDisplayed",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"textMore",type:{name:"string"},defaultValue:{func:!1,value:"'Show more'"}},{name:"textLess",type:{name:"string"},defaultValue:{func:!1,value:"'Show less'"}}],slots:[{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/list_section/list_section.vue"]};const G={name:"DtRecipeFeedItemPill",components:{DtItemLayout:q,DtIcon:V,DtCollapsible:B},props:{iconName:{type:String,default:()=>""},title:{type:String,default:()=>""},wrapperClass:{type:[String,Array,Object],default:""},buttonClass:{type:[String,Array,Object],default:""},ariaLabel:{type:String,required:!0},toggleable:{type:Boolean,default:()=>!0},defaultToggled:{type:Boolean,default:()=>!1},borderColor:{type:String,default:"default",validator:a=>Object.keys(m).includes(a)}},data(){return{hover:!1,expanded:this.defaultToggled}},computed:{computedIcon(){return this.toggleable&&this.hover?this.expanded?"chevron-down":"chevron-right":this.iconName},toggleableClass(){return this.toggleable?"d-c-pointer":""},borderClass(){return m[this.borderColor]}},methods:{onClick(){this.toggleable&&(this.expanded=!this.expanded)}}};var F=function(){var e=this,t=e._self._c;return t("div",{class:["dt-feed-item-pill--border",e.borderClass,e.wrapperClass]},[t("div",{staticClass:"d-p8 d-bgc-secondary"},[t("dt-collapsible",{attrs:{open:e.expanded},scopedSlots:e._u([{key:"anchor",fn:function(){return[t("button",{class:["d-baw0 d-bgc-moderate d-bar-pill d-w100p d-ta-left d-btn--circle",e.toggleableClass,e.buttonClass],attrs:{"aria-label":e.ariaLabel,"data-qa":"dt-feed-item-pill"},on:{focusin:function(r){e.hover=!0},focusout:function(r){e.hover=!1},mouseenter:function(r){e.hover=!0},mouseleave:function(r){e.hover=!1},click:e.onClick}},[t("dt-item-layout",{staticClass:"d-w100p d-p8",scopedSlots:e._u([{key:"left",fn:function(){return[t("dt-icon",{staticClass:"dt-feed-item-pill--icon d-pr8 d-box-content",attrs:{size:"300","data-qa":"dt-feed-item-pill-icon",name:e.computedIcon}})]},proxy:!0},{key:"subtitle",fn:function(){return[e._t("subtitle")]},proxy:!0},{key:"bottom",fn:function(){return[e._t("bottom")]},proxy:!0},{key:"right",fn:function(){return[e._t("right")]},proxy:!0}],null,!0)},[t("span",{staticClass:"d-fw-bold"},[e._v(e._s(e.title))])])],1)]},proxy:!0},{key:"content",fn:function(){return[t("div",{staticClass:"d-jc-center d-d-flex"},[e._t("content")],2)]},proxy:!0}],null,!0)})],1)])},U=[];F._withStripped=!0;var u=p(G,F,U,!1,null,"5ab2a1a5",null,null);u.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill.vue";const P=u.exports;u.exports.__docgenInfo={displayName:"DtRecipeFeedItemPill",exportName:"default",description:"",tags:{},props:[{name:"iconName",description:"Accepts a DtIcon name to be shown in the left",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"title",description:"Bolded primary text",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"wrapperClass",description:"Additional styling around the pill",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"buttonClass",description:"Additional styling for the pill",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"ariaLabel",description:"Aria label for feed pill",type:{name:"string"},required:!0},{name:"toggleable",description:"Sets whether the pill can be toggled (Icon changing on hover, expanding and collapsing, pointer)",type:{name:"boolean"},defaultValue:{func:!0,value:"() => true"}},{name:"defaultToggled",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}},{name:"borderColor",description:"Callbox border color",tags:{},values:["default","ai","critical"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}}],slots:[{name:"subtitle"},{name:"bottom"},{name:"right"},{name:"content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill.vue"]};const J={name:"DtRecipeFeedItemPillDefault",components:{DtRecipeFeedItemPill:P,DtButton:L,DtIcon:V}};var A=function(){var e=this,t=e._self._c;return t("dt-recipe-feed-item-pill",{attrs:{"icon-name":e.iconName,title:e.title,"wrapper-class":e.wrapperClass,"button-class":e.buttonClass,"border-color":e.borderColor,"aria-label":e.ariaLabel,toggleable:e.toggleable,"default-toggled":e.defaultToggled},scopedSlots:e._u([{key:"subtitle",fn:function(){return[e._v(" Last 43 minutes - Ended at 5:04pm ")]},proxy:!0},{key:"bottom",fn:function(){return[t("span",{staticClass:"d-fc-tertiary d-fs-100"},[e._v("8 people joined")])]},proxy:!0},{key:"right",fn:function(){return[t("div",{staticClass:"d-pr16"},[t("dt-button",{attrs:{"aria-label":"Open external link",kind:"muted",importance:"clear",circle:!0},on:{click:function(r){r.stopPropagation()}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("dt-icon",{attrs:{name:"external-link",size:"300"}})]},proxy:!0}])})],1)]},proxy:!0},{key:"content",fn:function(){return[t("span",{staticClass:"d-p16"},[e._v(" The agent from Dialpad called to follow up on a support ticket that Jeff was handling for them regarding Dialpad CTI. They apologized for calling outside of the requested time and expressed that they had asked the team to look into the issue and would email them after the call. ")])]},proxy:!0}])})},H=[];A._withStripped=!0;var c=p(J,A,H,!1,null,null,null,null);c.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill_default.story.vue";const K=c.exports;c.exports.__docgenInfo={displayName:"DtRecipeFeedItemPillDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill_default.story.vue"]};const R={},O={subtitle:{control:"text",table:{type:{summary:"VNode"}}},bottom:{control:"text",table:{type:{summary:"VNode"}}},right:{control:"text",table:{type:{summary:"VNode"}}},content:{control:"text",table:{type:{summary:"VNode"}}}},Q={title:"Recipes/Conversation View/Feed Item Pill",component:P,args:R,argTypes:O,excludeStories:/.*Data$/},d=(a,{argTypes:e})=>M(a,e,K),o={render:d,parameters:{a11y:{disable:!0}},args:{iconName:"video",title:"This meeting has ended",ariaLabel:"Click to expand",buttonClass:"",toggleable:!0,wrapperClass:"d-w628",borderColor:"default"}},n={render:d,parameters:{a11y:{disable:!0}},args:{iconName:"video",title:"This meeting has ended",wrapperClass:"d-w628",ariaLabel:"Click to expand",toggleable:!0,defaultToggled:!0}},l={render:d,parameters:{a11y:{disable:!0}},args:{iconName:"video",title:"This meeting has ended",wrapperClass:"d-w628",toggleable:!1,defaultToggled:!0}},i={render:d,parameters:{options:{showPanel:!1},controls:{disable:!0},a11y:{disable:!0}},args:{iconName:"video",title:"This meeting has ended",wrapperClass:"d-w628",buttonClass:"",ariaLabel:"Click to expand",toggleable:!0,borderColor:"ai"}},s={render:d,parameters:{options:{showPanel:!1},controls:{disable:!0},a11y:{disable:!0}},args:{iconName:"video",title:"This meeting has ended",wrapperClass:"d-w628",expanded:!1,ariaLabel:"Click to expand",toggleable:!1,borderColor:"critical"}};var f,g,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var _,h,y;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: DefaultTemplate,
  parameters: {
    a11y: {
      disable: true
    }
  },
  args: {
    iconName: 'video',
    title: 'This meeting has ended',
    wrapperClass: 'd-w628',
    ariaLabel: 'Click to expand',
    toggleable: true,
    defaultToggled: true
  }
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var v,C,w;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: DefaultTemplate,
  parameters: {
    a11y: {
      disable: true
    }
  },
  args: {
    iconName: 'video',
    title: 'This meeting has ended',
    wrapperClass: 'd-w628',
    toggleable: false,
    defaultToggled: true
  }
}`,...(w=(C=l.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var x,D,T;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(T=(D=i.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var k,S,N;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(N=(S=s.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const W=["argsData","argTypesData","Default","DefaultToggledVariant","DefaultToggledVariantNonToggleable","AiBorderGradient","NoToggleVariant"],lt=Object.freeze(Object.defineProperty({__proto__:null,AiBorderGradient:i,Default:o,DefaultToggledVariant:n,DefaultToggledVariantNonToggleable:l,NoToggleVariant:s,__namedExportsOrder:W,argTypesData:O,argsData:R,default:Q},Symbol.toStringTag,{value:"Module"}));export{i as A,o as D,lt as F,s as N,n as a,l as b};
//# sourceMappingURL=feed_item_pill.stories-f061193a.js.map
