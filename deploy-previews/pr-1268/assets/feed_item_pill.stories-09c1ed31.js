import{c as I}from"./storybook_utils-cbba4b42.js";import"./avatar-6dd77966.js";import"./badge-66e1aa8b.js";import"./banner-766ab18e.js";import"./breadcrumbs-4a8ffdff.js";import"./breadcrumb_item-30fa3087.js";import{D as C}from"./button-f9ebe2a3.js";import"./button_group-875af4af.js";import"./card-5e4a62ed.js";import"./codeblock-6f598051.js";import"./combobox-a0a1f5ae.js";import{D as V}from"./collapsible-93deee48.js";import"./dropdown_separator-86b4b7d6.js";import"./image_viewer-4611b7e0.js";import"./input-64dcfdfa.js";import"./input_group-382f5d74.js";import"./modal-a28fcb6c.js";import"./lazy_show-0b3a0cf0.js";import{u as $}from"./utils-c7895956.js";import{n as l}from"./_plugin-vue2_normalizer-2bbd088e.js";import"./list_item-e14e87e5.js";import"./list_item_group-0c89eb8e.js";import"./link-82bdd562.js";import"./notice-14613c61.js";import"./pagination-855ccc1e.js";import"./popover-a509793a.js";import"./presence-d4f38341.js";import"./radio-60110e37.js";import"./radio_group-747fac1b.js";import"./tab_group-85f26400.js";import"./tab-740f17dc.js";import"./tab_panel-72292c29.js";import"./validation_messages-0d9f2537.js";import"./checkbox-0df75fc1.js";import"./checkbox_group-7f31a683.js";import"./chip-f2ab7e87.js";import"./select_menu-9c849631.js";import"./toast-c9b92165.js";import"./toggle-087cb428.js";import"./tooltip-9d43b8db.js";import"./skeleton-e82601aa.js";import"./keyboard_shortcut-b7d46c52.js";import"./root_layout-a238945e.js";import{D as x}from"./icon-19307fb5.js";import"./stack-b8a925c0.js";import"./DtDatepicker-41c39b09.js";import{D as F}from"./item_layout-499a0a91.js";import"./combobox_with_popover-17ede8dd.js";import"./combobox_multi_select-1f3a8a7d.js";import"./callbar_button-5edf719d.js";import"./callbar_button_with_popover-e7683e0c.js";import"./contact_info-1a74ba8c.js";import"./top_banner_info-371feffc.js";import"./ivr_node-2676ab7a.js";import"./grouped_chip-bef2442c.js";import"./settings_menu_button-0862201e.js";import"./general_row-ee781c2f.js";import"./group_row-bb347641.js";import"./contact_row-94b8eda8.js";import"./unread_pill-89197011.js";import"./feed_item_row-19dfcb47.js";import"./time_pill-a3dd4c1b.js";import"./emoji_row-e2c9faa4.js";import"./callbox-bfa9cac2.js";const u={default:"dt-feed-item-pill--border-default",ai:"dt-feed-item-pill--border-ai",critical:"dt-feed-item-pill--border-critical"};const P={name:"ListSection",components:{Vnodes:{name:"vnodes",functional:!0,render:(a,e)=>e.props.vnodes},DtButton:C},props:{id:{type:String,default(){return $.getUniqueString()}},header:{type:String,default:null},separator:{type:Boolean,default:!1},maxDisplayed:{type:Number,default:0},textMore:{type:String,default:"Show more"},textLess:{type:String,default:"Show less"}},data(){return{showAll:!1}},computed:{isCollapsible(){return!(this.maxDisplayed===0||this.itemCount<=this.maxDisplayed)},showMoreLessText(){return this.showAll?this.textLess:this.textMore},hiddenCount(){return this.itemCount-this.displayedItems.length},itemCount(){return this.$slots.default.length},displayedItems(){return this.$slots.default.filter((a,e)=>e<=this.maxDisplayed-1)}},methods:{showMoreLessClicked(){this.showAll=!this.showAll}}};var w=function(){var e=this,t=e._self._c;return t("div",{class:["dt-list-section","d-fs-200","d-lh6","d-py6","d-bc-black-400",{"d-bb":e.separator}],attrs:{id:e.id,role:"group","aria-labelledby":`${e.id}-list-section-header`,tabindex:"-1"}},[e.header?t("h3",{staticClass:"d-pl12 d-mt6",attrs:{id:`${e.id}-list-section-header`}},[e._v(" "+e._s(e.header)+" ")]):e._e(),!e.isCollapsible||e.showAll?t("ol",{attrs:{id:`${e.id}-list-section-content`}},[e._t("default")],2):t("ol",{attrs:{id:`${e.id}-list-section-content`}},[t("vnodes",{attrs:{vnodes:e.displayedItems}})],1),t("div",{staticClass:"d-d-flex"},[e.isCollapsible?t("dt-button",{staticClass:"d-ml12 d-py6",attrs:{id:`${e.id}-list-section-show-more-less`,link:""},on:{click:e.showMoreLessClicked}},[e._v(" "+e._s(e.showMoreLessText)+" ")]):e._e(),e._t("footer")],2)])},A=[];w._withStripped=!0;var k=l(P,w,A,!1,null,null,null,null);k.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/list_section/list_section.vue";k.exports.__docgenInfo={displayName:"ListSection",exportName:"default",description:"",tags:{},props:[{name:"id",type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"header",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"separator",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxDisplayed",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"textMore",type:{name:"string"},defaultValue:{func:!1,value:"'Show more'"}},{name:"textLess",type:{name:"string"},defaultValue:{func:!1,value:"'Show less'"}}],slots:[{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/list_section/list_section.vue"]};const R={name:"DtRecipeFeedItemPill",components:{DtItemLayout:F,DtIcon:x,DtCollapsible:V},props:{iconName:{type:String,default:()=>""},title:{type:String,default:()=>""},wrapperClass:{type:[String,Array,Object],default:""},buttonClass:{type:[String,Array,Object],default:""},ariaLabel:{type:String,required:!0},toggleable:{type:Boolean,default:()=>!0},borderColor:{type:String,default:"default",validator:a=>Object.keys(u).includes(a)}},data(){return{hover:!1,expanded:!1}},computed:{computedIcon(){return this.toggleable&&this.hover?this.expanded?"chevron-down":"chevron-right":this.iconName},toggleableClass(){return this.toggleable?"d-c-pointer":""},borderClass(){return u[this.borderColor]}},methods:{onClick(){this.toggleable&&(this.expanded=!this.expanded)}}};var D=function(){var e=this,t=e._self._c;return t("div",{class:["dt-feed-item-pill--border",e.borderClass,e.wrapperClass]},[t("div",{staticClass:"d-p8 d-bgc-secondary"},[t("dt-collapsible",{attrs:{open:e.expanded},scopedSlots:e._u([{key:"anchor",fn:function(){return[t("button",{class:["d-baw0 d-bgc-moderate d-bar-pill d-w100p d-ta-left d-btn--circle",e.toggleableClass,e.buttonClass],attrs:{"aria-label":e.ariaLabel,"data-qa":"dt-feed-item-pill"},on:{focusin:function(r){e.hover=!0},focusout:function(r){e.hover=!1},mouseenter:function(r){e.hover=!0},mouseleave:function(r){e.hover=!1},click:e.onClick}},[t("dt-item-layout",{staticClass:"d-w100p d-p8",scopedSlots:e._u([{key:"left",fn:function(){return[t("dt-icon",{staticClass:"dt-feed-item-pill--icon d-pr8",attrs:{size:"300","data-qa":"dt-feed-item-pill-icon",name:e.computedIcon}})]},proxy:!0},{key:"subtitle",fn:function(){return[e._t("subtitle")]},proxy:!0},{key:"bottom",fn:function(){return[e._t("bottom")]},proxy:!0},{key:"right",fn:function(){return[e._t("right")]},proxy:!0}],null,!0)},[t("span",{staticClass:"d-fw-bold"},[e._v(e._s(e.title))])])],1)]},proxy:!0},{key:"content",fn:function(){return[t("div",{staticClass:"d-jc-center d-d-flex"},[e._t("content")],2)]},proxy:!0}],null,!0)})],1)])},O=[];D._withStripped=!0;var s=l(R,D,O,!1,null,"5ab2a1a5",null,null);s.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill.vue";const S=s.exports;s.exports.__docgenInfo={displayName:"DtRecipeFeedItemPill",exportName:"default",description:"",tags:{},props:[{name:"iconName",description:"Accepts a DtIcon name to be shown in the left",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"title",description:"Bolded primary text",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"wrapperClass",description:"Additional styling around the pill",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"buttonClass",description:"Additional styling for the pill",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"ariaLabel",description:"Aria label for feed pill",type:{name:"string"},required:!0},{name:"toggleable",description:"Sets whether the pill can be toggled (Icon changing on hover, expanding and collapsing, pointer)",type:{name:"boolean"},defaultValue:{func:!0,value:"() => true"}},{name:"borderColor",description:"Callbox border color",tags:{},values:["default","ai","critical"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}}],slots:[{name:"subtitle"},{name:"bottom"},{name:"right"},{name:"content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill.vue"]};const j={name:"DtRecipeFeedItemPillDefault",components:{DtRecipeFeedItemPill:S,DtButton:C,DtIcon:x}};var L=function(){var e=this,t=e._self._c;return t("dt-recipe-feed-item-pill",{attrs:{"icon-name":e.iconName,title:e.title,"wrapper-class":e.wrapperClass,"button-class":e.buttonClass,"border-color":e.borderColor,"aria-label":e.ariaLabel,toggleable:e.toggleable},scopedSlots:e._u([{key:"subtitle",fn:function(){return[e._v(" Last 43 minutes - Ended at 5:04pm ")]},proxy:!0},{key:"bottom",fn:function(){return[t("span",{staticClass:"d-fc-tertiary d-fs-100"},[e._v("8 people joined")])]},proxy:!0},{key:"right",fn:function(){return[t("div",{staticClass:"d-pr16"},[t("dt-button",{attrs:{"aria-label":"Open external link",kind:"muted",importance:"clear",circle:!0},on:{click:function(r){r.stopPropagation()}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("dt-icon",{attrs:{name:"external-link",size:"300"}})]},proxy:!0}])})],1)]},proxy:!0},{key:"content",fn:function(){return[t("span",{staticClass:"d-p16"},[e._v(" The agent from Dialpad called to follow up on a support ticket that Jeff was handling for them regarding Dialpad CTI. They apologized for calling outside of the requested time and expressed that they had asked the team to look into the issue and would email them after the call. ")])]},proxy:!0}])})},M=[];L._withStripped=!0;var d=l(j,L,M,!1,null,null,null,null);d.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill_default.story.vue";const q=d.exports;d.exports.__docgenInfo={displayName:"DtRecipeFeedItemPillDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill_default.story.vue"]};const N={},T={subtitle:{control:"text",table:{type:{summary:"VNode"}}},bottom:{control:"text",table:{type:{summary:"VNode"}}},right:{control:"text",table:{type:{summary:"VNode"}}},content:{control:"text",table:{type:{summary:"VNode"}}}},B={title:"Recipes/Conversation View/Feed Item Pill",component:S,args:N,argTypes:T,excludeStories:/.*Data$/},p=(a,{argTypes:e})=>I(a,e,q),o={render:p,parameters:{a11y:{disable:!0}},args:{iconName:"video",title:"This meeting has ended",ariaLabel:"Click to expand",buttonClass:"",toggleable:!0,wrapperClass:"d-w628",borderColor:"default"}},n={render:p,parameters:{options:{showPanel:!1},controls:{disable:!0},a11y:{disable:!0}},args:{iconName:"video",title:"This meeting has ended",wrapperClass:"d-w628",buttonClass:"",ariaLabel:"Click to expand",toggleable:!0,borderColor:"ai"}},i={render:p,parameters:{options:{showPanel:!1},controls:{disable:!0},a11y:{disable:!0}},args:{iconName:"video",title:"This meeting has ended",wrapperClass:"d-w628",expanded:!1,ariaLabel:"Click to expand",toggleable:!1,borderColor:"critical"}};var c,m,f;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(f=(m=o.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var _,b,g;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,y,v;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const E=["argsData","argTypesData","Default","AiBorderGradient","NoToggleVariant"],Ze=Object.freeze(Object.defineProperty({__proto__:null,AiBorderGradient:n,Default:o,NoToggleVariant:i,__namedExportsOrder:E,argTypesData:T,argsData:N,default:B},Symbol.toStringTag,{value:"Module"}));export{n as A,o as D,Ze as F,i as N};
//# sourceMappingURL=feed_item_pill.stories-09c1ed31.js.map
