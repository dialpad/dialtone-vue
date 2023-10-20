import{c as R}from"./storybook_utils-cbba4b42.js";import"./avatar-6dd77966.js";import"./badge-66e1aa8b.js";import"./banner-68f256f8.js";import"./breadcrumbs-4a8ffdff.js";import"./breadcrumb_item-30fa3087.js";import{D as L}from"./button-6471bfba.js";import"./button_group-875af4af.js";import"./card-5e4a62ed.js";import"./codeblock-6f598051.js";import"./combobox-a0a1f5ae.js";import{D as O}from"./collapsible-72b54da6.js";import"./dropdown_separator-fc658bc0.js";import"./image_viewer-dd5793d0.js";import"./input-64dcfdfa.js";import"./input_group-382f5d74.js";import"./modal-3621bfd5.js";import"./lazy_show-0b3a0cf0.js";import{u as M}from"./utils-c7895956.js";import{n as p}from"./_plugin-vue2_normalizer-2bbd088e.js";import"./list_item-e14e87e5.js";import"./list_item_group-0c89eb8e.js";import"./link-82bdd562.js";import"./notice-af41940f.js";import"./pagination-5afac134.js";import"./popover-3d2f7f4e.js";import"./presence-d4f38341.js";import"./radio-60110e37.js";import"./radio_group-747fac1b.js";import"./tab_group-31d3db2a.js";import"./tab-2edbf7a2.js";import"./tab_panel-72292c29.js";import"./validation_messages-0d9f2537.js";import"./checkbox-0df75fc1.js";import"./checkbox_group-7f31a683.js";import"./chip-f8ec9499.js";import"./select_menu-9c849631.js";import"./toast-1dfe8a75.js";import"./toggle-087cb428.js";import"./tooltip-9d43b8db.js";import"./skeleton-e82601aa.js";import"./keyboard_shortcut-b7d46c52.js";import"./root_layout-a238945e.js";import{D as A}from"./icon-19307fb5.js";import"./stack-b8a925c0.js";import"./DtDatepicker-41c39b09.js";import{D as j}from"./item_layout-499a0a91.js";import"./combobox_with_popover-3f3e91b5.js";import"./combobox_multi_select-c1b422ad.js";import"./callbar_button-03f9174a.js";import"./callbar_button_with_popover-5f24d822.js";import"./contact_info-1a74ba8c.js";import"./top_banner_info-371feffc.js";import"./ivr_node-67f1856d.js";import"./grouped_chip-53084118.js";import"./settings_menu_button-5981bc8c.js";import"./general_row-dd31957c.js";import"./group_row-b0e2968b.js";import"./contact_row-75030616.js";import"./unread_pill-89197011.js";import"./feed_item_row-19dfcb47.js";import"./time_pill-a3dd4c1b.js";import"./emoji_row-2169a848.js";import"./callbox-bfa9cac2.js";const m={default:"dt-recipe-feed-item-pill--border-default",ai:"dt-recipe-feed-item-pill--border-ai",critical:"dt-recipe-feed-item-pill--border-critical"},E={PILL:"dt-recipe-feed-item-pill",PILL_ICON:"dt-recipe-feed-item-pill-icon"};const B={name:"ListSection",components:{Vnodes:{name:"vnodes",functional:!0,render:(a,e)=>e.props.vnodes},DtButton:L},props:{id:{type:String,default(){return M.getUniqueString()}},header:{type:String,default:null},separator:{type:Boolean,default:!1},maxDisplayed:{type:Number,default:0},textMore:{type:String,default:"Show more"},textLess:{type:String,default:"Show less"}},data(){return{showAll:!1}},computed:{isCollapsible(){return!(this.maxDisplayed===0||this.itemCount<=this.maxDisplayed)},showMoreLessText(){return this.showAll?this.textLess:this.textMore},hiddenCount(){return this.itemCount-this.displayedItems.length},itemCount(){return this.$slots.default.length},displayedItems(){return this.$slots.default.filter((a,e)=>e<=this.maxDisplayed-1)}},methods:{showMoreLessClicked(){this.showAll=!this.showAll}}};var V=function(){var e=this,t=e._self._c;return t("div",{class:["dt-list-section","d-fs-200","d-lh6","d-py6","d-bc-black-400",{"d-bb":e.separator}],attrs:{id:e.id,role:"group","aria-labelledby":`${e.id}-list-section-header`,tabindex:"-1"}},[e.header?t("h3",{staticClass:"d-pl12 d-mt6",attrs:{id:`${e.id}-list-section-header`}},[e._v(" "+e._s(e.header)+" ")]):e._e(),!e.isCollapsible||e.showAll?t("ol",{attrs:{id:`${e.id}-list-section-content`}},[e._t("default")],2):t("ol",{attrs:{id:`${e.id}-list-section-content`}},[t("vnodes",{attrs:{vnodes:e.displayedItems}})],1),t("div",{staticClass:"d-d-flex"},[e.isCollapsible?t("dt-button",{staticClass:"d-ml12 d-py6",attrs:{id:`${e.id}-list-section-show-more-less`,link:""},on:{click:e.showMoreLessClicked}},[e._v(" "+e._s(e.showMoreLessText)+" ")]):e._e(),e._t("footer")],2)])},q=[];V._withStripped=!0;var N=p(B,V,q,!1,null,null,null,null);N.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/list_section/list_section.vue";N.exports.__docgenInfo={displayName:"ListSection",exportName:"default",description:"",tags:{},props:[{name:"id",type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"header",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"separator",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxDisplayed",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"textMore",type:{name:"string"},defaultValue:{func:!1,value:"'Show more'"}},{name:"textLess",type:{name:"string"},defaultValue:{func:!1,value:"'Show less'"}}],slots:[{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/list_section/list_section.vue"]};const z={name:"DtRecipeFeedItemPill",components:{DtItemLayout:j,DtIcon:A,DtCollapsible:O},props:{iconName:{type:String,default:()=>""},title:{type:String,default:()=>""},wrapperClass:{type:[String,Array,Object],default:""},buttonClass:{type:[String,Array,Object],default:""},ariaLabel:{type:String,required:!0},toggleable:{type:Boolean,default:()=>!0},defaultToggled:{type:Boolean,default:()=>!1},borderColor:{type:String,default:"default",validator:a=>Object.keys(m).includes(a)}},data(){return{hover:!1,expanded:this.defaultToggled,DATA_QA:E}},computed:{computedIcon(){return this.toggleable&&this.hover?this.expanded?"chevron-down":"chevron-right":this.iconName},toggleableClass(){return this.toggleable?"d-c-pointer":""},borderClass(){return m[this.borderColor]}},methods:{onClick(){this.toggleable&&(this.expanded=!this.expanded)}}};var $=function(){var e=this,t=e._self._c;return t("div",{class:["dt-recipe-feed-item-pill--border",e.borderClass,e.wrapperClass]},[t("div",{staticClass:"dt-recipe-feed-item-pill--wrapper"},[t("dt-collapsible",{attrs:{open:e.expanded},scopedSlots:e._u([{key:"anchor",fn:function(){return[t("button",{class:["dt-recipe-feed-item-pill--button",e.toggleableClass,e.buttonClass],attrs:{"aria-label":e.ariaLabel,"data-qa":e.DATA_QA.PILL},on:{focusin:function(o){e.hover=!0},focusout:function(o){e.hover=!1},mouseenter:function(o){e.hover=!0},mouseleave:function(o){e.hover=!1},click:e.onClick}},[t("dt-item-layout",{staticClass:"dt-recipe-feed-item-pill--layout",scopedSlots:e._u([{key:"left",fn:function(){return[t("dt-icon",{staticClass:"dt-recipe-feed-item-pill--icon",attrs:{size:"300","data-qa":e.DATA_QA.PILL_ICON,name:e.computedIcon}})]},proxy:!0},{key:"subtitle",fn:function(){return[e._t("subtitle")]},proxy:!0},{key:"bottom",fn:function(){return[e._t("bottom")]},proxy:!0},{key:"right",fn:function(){return[e._t("right")]},proxy:!0}],null,!0)},[t("span",{staticClass:"d-fw-bold"},[e._v(e._s(e.title))])])],1)]},proxy:!0},{key:"content",fn:function(){return[t("div",{staticClass:"dt-recipe-feed-item-pill--content d-jc-center d-d-flex"},[e._t("content")],2)]},proxy:!0}],null,!0)})],1)])},Q=[];$._withStripped=!0;var u=p(z,$,Q,!1,null,"5ab2a1a5",null,null);u.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill.vue";const F=u.exports;u.exports.__docgenInfo={displayName:"DtRecipeFeedItemPill",exportName:"default",description:"",tags:{},props:[{name:"iconName",description:"Accepts a DtIcon name to be shown in the left",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"title",description:"Bolded primary text",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"wrapperClass",description:"Additional styling around the pill",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"buttonClass",description:"Additional styling for the pill",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"ariaLabel",description:"Aria label for feed pill",type:{name:"string"},required:!0},{name:"toggleable",description:"Sets whether the pill can be toggled (Icon changing on hover, expanding and collapsing, pointer)",type:{name:"boolean"},defaultValue:{func:!0,value:"() => true"}},{name:"defaultToggled",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}},{name:"borderColor",description:"Callbox border color",tags:{},values:["default","ai","critical"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}}],slots:[{name:"subtitle"},{name:"bottom"},{name:"right"},{name:"content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill.vue"]};const G={name:"DtRecipeFeedItemPillDefault",components:{DtRecipeFeedItemPill:F,DtButton:L,DtIcon:A}};var P=function(){var e=this,t=e._self._c;return t("dt-recipe-feed-item-pill",{attrs:{"icon-name":e.iconName,title:e.title,"wrapper-class":e.wrapperClass,"button-class":e.buttonClass,"border-color":e.borderColor,"aria-label":e.ariaLabel,toggleable:e.toggleable,"default-toggled":e.defaultToggled},scopedSlots:e._u([{key:"subtitle",fn:function(){return[e._v(" Last 43 minutes - Ended at 5:04pm ")]},proxy:!0},{key:"bottom",fn:function(){return[t("span",{staticClass:"d-fc-tertiary d-fs-100"},[e._v("8 people joined")])]},proxy:!0},{key:"right",fn:function(){return[t("div",{staticClass:"d-pr16"},[t("dt-button",{attrs:{"aria-label":"Open external link",kind:"muted",importance:"clear",circle:!0},on:{click:function(o){o.stopPropagation()}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("dt-icon",{attrs:{name:"external-link",size:"300"}})]},proxy:!0}])})],1)]},proxy:!0},{key:"content",fn:function(){return[t("span",{staticClass:"d-p16"},[e._v(" The agent from Dialpad called to follow up on a support ticket that Jeff was handling for them regarding Dialpad CTI. They apologized for calling outside of the requested time and expressed that they had asked the team to look into the issue and would email them after the call. ")])]},proxy:!0}])})},U=[];P._withStripped=!0;var c=p(G,P,U,!1,null,null,null,null);c.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill_default.story.vue";const J=c.exports;c.exports.__docgenInfo={displayName:"DtRecipeFeedItemPillDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill_default.story.vue"]};const H={iconName:"phone",title:"This meeting has ended",ariaLabel:"Click to expand",wrapperClass:"d-w628"},K={subtitle:{control:"text",table:{type:{summary:"VNode"}}},bottom:{control:"text",table:{type:{summary:"VNode"}}},right:{control:"text",table:{type:{summary:"VNode"}}},content:{control:"text",table:{type:{summary:"VNode"}}}},W={title:"Recipes/Conversation View/Feed Item Pill",component:F,args:H,argTypes:K,excludeStories:/.*Data$/},d=(a,{argTypes:e})=>R(a,e,J),r={render:d,parameters:{options:{showPanel:!1},a11y:{disable:!0},controls:{disable:!0}}},l={render:d,parameters:r.parameters,args:{defaultToggled:!0}},n={render:d,parameters:r.parameters,args:{toggleable:!1,defaultToggled:!0}},i={render:d,parameters:r.parameters,args:{borderColor:"ai"}},s={render:d,parameters:r.parameters,args:{toggleable:!1,borderColor:"critical"}};var f,_,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: DefaultTemplate,
  parameters: {
    options: {
      showPanel: false
    },
    a11y: {
      disable: true
    },
    controls: {
      disable: true
    }
  }
}`,...(g=(_=r.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};var h,b,y;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: DefaultTemplate,
  parameters: Default.parameters,
  args: {
    defaultToggled: true
  }
}`,...(y=(b=l.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var v,x,C;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: DefaultTemplate,
  parameters: Default.parameters,
  args: {
    toggleable: false,
    defaultToggled: true
  }
}`,...(C=(x=n.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var D,w,T;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: DefaultTemplate,
  parameters: Default.parameters,
  args: {
    borderColor: 'ai'
  }
}`,...(T=(w=i.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var S,k,I;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: DefaultTemplate,
  parameters: Default.parameters,
  args: {
    toggleable: false,
    borderColor: 'critical'
  }
}`,...(I=(k=s.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const X=["Default","DefaultToggledVariant","DefaultToggledVariantNonToggleable","AiBorderGradient","NoToggleVariant"],st=Object.freeze(Object.defineProperty({__proto__:null,AiBorderGradient:i,Default:r,DefaultToggledVariant:l,DefaultToggledVariantNonToggleable:n,NoToggleVariant:s,__namedExportsOrder:X,default:W},Symbol.toStringTag,{value:"Module"}));export{i as A,r as D,st as F,s as N,l as a,n as b};
//# sourceMappingURL=feed_item_pill.stories-6055cbbf.js.map
