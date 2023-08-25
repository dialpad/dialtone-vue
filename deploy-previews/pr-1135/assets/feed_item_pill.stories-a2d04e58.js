import{u as V,c as L}from"./storybook_utils-6f4fc6ad.js";import"./avatar-2fae27b0.js";import"./badge-183c30c8.js";import"./banner-f1947f11.js";import"./breadcrumbs-2edcd8cc.js";import{D as y}from"./button-9102a84a.js";import"./button_group-875af4af.js";import"./card-5e4a62ed.js";import"./codeblock-6f598051.js";import"./combobox-7097e3b9.js";import"./collapsible-6de8e0ee.js";import"./dropdown_separator-33265461.js";import"./image_viewer-52b0ef4d.js";import"./input-d30fdc8c.js";import"./input_group-d75036ce.js";import"./modal-c72d0c43.js";import"./lazy_show-0b3a0cf0.js";import{n as i}from"./_plugin-vue2_normalizer-2bbd088e.js";import"./list_item-d8dfacba.js";import"./list_item_group-5d3abf27.js";import"./link-4fdbe64c.js";import"./notice-641b7cf1.js";import"./pagination-947e969a.js";import"./popover-90658d8a.js";import"./presence-d4f38341.js";import"./radio-25738924.js";import"./radio_group-0bd113ce.js";import"./tab_group-9ce0571d.js";import"./tab-36cd8683.js";import"./tab_panel-72292c29.js";import"./validation_messages-fea03325.js";import"./checkbox-f1728f1b.js";import"./checkbox_group-424b11d5.js";import"./chip-a40379a8.js";import"./select_menu-5ccd7a90.js";import"./toast-57d20b79.js";import"./toggle-e8e501e1.js";import"./tooltip-569d0e95.js";import"./skeleton-e82601aa.js";import"./keyboard_shortcut-f55b3cc0.js";import"./root_layout-63d4e92e.js";import{D as x}from"./icon-34725557.js";import"./stack-dfcd045d.js";import"./DtDatepicker-e40911c4.js";import{D as I}from"./item_layout-14d63a9a.js";import"./combobox_with_popover-73ca9435.js";import"./combobox_multi_select-f38c492a.js";import"./callbar_button-aee7e599.js";import"./callbar_button_with_popover-45b74f97.js";import"./contact_info-4ff8ba6f.js";import"./top_banner_info-371feffc.js";import"./ivr_node-060137f8.js";import"./grouped_chip-ed82e921.js";import"./settings_menu_button-b9421e44.js";import"./general_row-339efaa6.js";import"./group_row-95e0c8a4.js";import"./contact_row-a9900c6e.js";import"./unread_pill-1939217e.js";import"./feed_item_row-8ec26978.js";import"./time_pill-a3dd4c1b.js";import"./emoji_row-d3169d87.js";import"./callbox-3f61af3b.js";const $={name:"ListSection",components:{Vnodes:{name:"vnodes",functional:!0,render:(a,e)=>e.props.vnodes},DtButton:y},props:{id:{type:String,default(){return V.getUniqueString()}},header:{type:String,default:null},separator:{type:Boolean,default:!1},maxDisplayed:{type:Number,default:0},textMore:{type:String,default:"Show more"},textLess:{type:String,default:"Show less"}},data(){return{showAll:!1}},computed:{isCollapsible(){return!(this.maxDisplayed===0||this.itemCount<=this.maxDisplayed)},showMoreLessText(){return this.showAll?this.textLess:this.textMore},hiddenCount(){return this.itemCount-this.displayedItems.length},itemCount(){return this.$slots.default.length},displayedItems(){return this.$slots.default.filter((a,e)=>e<=this.maxDisplayed-1)}},methods:{showMoreLessClicked(){this.showAll=!this.showAll}}};var C=function(){var e=this,t=e._self._c;return t("div",{class:["dt-list-section","d-fs-200","d-lh6","d-py6","d-bc-black-400",{"d-bb":e.separator}],attrs:{id:e.id,role:"group","aria-labelledby":`${e.id}-list-section-header`,tabindex:"-1"}},[e.header?t("h3",{staticClass:"d-pl12 d-mt6",attrs:{id:`${e.id}-list-section-header`}},[e._v(" "+e._s(e.header)+" ")]):e._e(),!e.isCollapsible||e.showAll?t("ol",{attrs:{id:`${e.id}-list-section-content`}},[e._t("default")],2):t("ol",{attrs:{id:`${e.id}-list-section-content`}},[t("vnodes",{attrs:{vnodes:e.displayedItems}})],1),t("div",{staticClass:"d-d-flex"},[e.isCollapsible?t("dt-button",{staticClass:"d-ml12 d-py6",attrs:{id:`${e.id}-list-section-show-more-less`,link:""},on:{click:e.showMoreLessClicked}},[e._v(" "+e._s(e.showMoreLessText)+" ")]):e._e(),e._t("footer")],2)])},F=[];C._withStripped=!0;var w=i($,C,F,!1,null,null,null,null);w.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/list_section/list_section.vue";w.exports.__docgenInfo={displayName:"ListSection",exportName:"default",description:"",tags:{},props:[{name:"id",type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"header",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"separator",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxDisplayed",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"textMore",type:{name:"string"},defaultValue:{func:!1,value:"'Show more'"}},{name:"textLess",type:{name:"string"},defaultValue:{func:!1,value:"'Show less'"}}],slots:[{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/list_section/list_section.vue"]};const P={name:"DtRecipeFeedItemPill",components:{DtItemLayout:I,DtIcon:x},props:{iconName:{type:String,default:()=>""},title:{type:String,default:()=>""},wrapperClass:{type:[String,Array,Object],default:""},buttonClass:{type:[String,Array,Object],default:""},ariaLabel:{type:String,default:null,validator:a=>!!a},toggleable:{type:Boolean,default:()=>!0}},data(){return{hover:!1,expanded:!1}},computed:{pillClass(){return this.expanded?"dt-feed-pill--expanded":"d-bar-pill"},hoverIcon(){return this.expanded?"chevron-down":"chevron-right"},toggleableClass(){return this.toggleable?"d-c-pointer":""}},methods:{onClick(){this.toggleable&&(this.expanded=!this.expanded)}}};var D=function(){var e=this,t=e._self._c;return t("div",{class:[e.wrapperClass,e.pillClass]},[t("div",{class:["d-bgc-secondary",e.pillClass]},[t("div",{staticClass:"d-p8"},[t("button",{class:["d-baw0 d-bgc-moderate d-bar-pill d-w100p d-ta-left",e.toggleableClass,e.buttonClass],attrs:{"aria-label":e.ariaLabel,"data-qa":"dt-feed-item-pill"},on:{focusin:function(o){e.hover=!0},focusout:function(o){e.hover=!1},mouseenter:function(o){e.hover=!0},mouseleave:function(o){e.hover=!1},click:e.onClick}},[t("dt-item-layout",{staticClass:"d-w100p d-p8"},[e._v(" "+e._s(e.title)+" "),t("template",{slot:"left"},[e.toggleable&&e.hover?t("dt-icon",{staticClass:"dt-feed-pill--icon",attrs:{"data-qa":"dt-feed-item-hover-icon",name:e.hoverIcon}}):t("dt-icon",{staticClass:"dt-feed-pill--icon",attrs:{"data-qa":"dt-feed-item-icon",name:e.iconName,size:"300"}})],1),t("template",{slot:"subtitle"},[e._t("subtitle")],2),t("template",{slot:"bottom"},[e._t("bottom")],2),t("template",{slot:"right"},[e._t("right")],2)],2)],1),e.expanded?t("div",{staticClass:"d-jc-center d-d-flex"},[e._t("content")],2):e._e()])])])},A=[];D._withStripped=!0;var s=i(P,D,A,!1,null,"5ab2a1a5",null,null);s.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill.vue";const k=s.exports;s.exports.__docgenInfo={displayName:"DtRecipeFeedItemPill",exportName:"default",description:"",tags:{},props:[{name:"iconName",description:"Accepts a DtIcon name to be shown in the left",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"title",description:"Bolded primary text",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"wrapperClass",description:"Additional styling around the pill",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"buttonClass",description:"Additional styling for the pill",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"ariaLabel",description:"Aria label for feed pill",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"toggleable",description:"Sets whether the pill can be toggled",type:{name:"boolean"},defaultValue:{func:!0,value:"() => true"}}],slots:[{name:"subtitle"},{name:"bottom"},{name:"right"},{name:"content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill.vue"]};const R={name:"DtRecipeFeedItemPillDefault",components:{DtRecipeFeedItemPill:k,DtButton:y,DtIcon:x}};var S=function(){var e=this,t=e._self._c;return t("dt-recipe-feed-item-pill",{staticClass:"d-w464",attrs:{"icon-name":e.iconName,title:e.title,"wrapper-class":e.wrapperClass,"button-class":e.buttonClass,"aria-label":e.ariaLabel,toggleable:e.toggleable},scopedSlots:e._u([{key:"subtitle",fn:function(){return[e._v(" Last 43 minutes - Ended at 5:04pm ")]},proxy:!0},{key:"bottom",fn:function(){return[t("span",{staticClass:"d-fc-tertiary d-fs-100"},[e._v("8 people joined")])]},proxy:!0},{key:"right",fn:function(){return[t("div",{staticClass:"d-pr16"},[t("dt-button",{attrs:{"aria-label":"Open external link",kind:"muted",importance:"clear"},on:{click:function(o){o.stopPropagation()}}},[t("template",{slot:"icon"},[t("dt-icon",{attrs:{name:"external-link",size:"200"}})],1)],2)],1)]},proxy:!0},{key:"content",fn:function(){return[t("span",{staticClass:"d-p16"},[e._v(" The agent from Dialpad called to follow up on a support ticket that Jeff was handling for them regarding Dialpad CTI. They apologized for calling outside of the requested time and expressed that they had asked the team to look into the issue and would email them after the call. ")])]},proxy:!0}])})},j=[];S._withStripped=!0;var d=i(R,S,j,!1,null,null,null,null);d.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill_default.story.vue";const M=d.exports;d.exports.__docgenInfo={displayName:"DtRecipeFeedItemPillDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill_default.story.vue"]};const N={},T={subtitle:{control:"text",table:{type:{summary:"VNode"}}},bottom:{control:"text",table:{type:{summary:"VNode"}}},right:{control:"text",table:{type:{summary:"VNode"}}},content:{control:"text",table:{type:{summary:"VNode"}}}},q={title:"Recipes/Conversation View/Feed Item Pill",component:k,args:N,argTypes:T,excludeStories:/.*Data$/},p=(a,{argTypes:e})=>L(a,e,M),n={render:p,args:{iconName:"video",title:"This meeting has ended",ariaLabel:"Click to expand",buttonClass:"",toggleable:!0}},l={render:p,parameters:{options:{showPanel:!1},controls:{disable:!0}},args:{iconName:"video",title:"This meeting has ended",wrapperClass:"d-p2 d-bgg-to-br d-bgg-from-purple-400 d-bgg-to-magenta-300",buttonClass:"",ariaLabel:"Click to expand",toggleable:!0}},r={render:p,parameters:{options:{showPanel:!1},controls:{disable:!0}},args:{iconName:"video",title:"This meeting has ended",wrapperClass:"",expanded:!1,ariaLabel:"Click to expand",toggleable:!1}};var m,u,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    iconName: 'video',
    title: 'This meeting has ended',
    ariaLabel: 'Click to expand',
    buttonClass: '',
    toggleable: true
  }
}`,...(c=(u=n.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var f,_,g;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: DefaultTemplate,
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  },
  args: {
    iconName: 'video',
    title: 'This meeting has ended',
    wrapperClass: 'd-p2 d-bgg-to-br d-bgg-from-purple-400 d-bgg-to-magenta-300',
    buttonClass: '',
    ariaLabel: 'Click to expand',
    toggleable: true
  }
}`,...(g=(_=l.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};var h,v,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: DefaultTemplate,
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  },
  args: {
    iconName: 'video',
    title: 'This meeting has ended',
    wrapperClass: '',
    expanded: false,
    ariaLabel: 'Click to expand',
    toggleable: false
  }
}`,...(b=(v=r.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const O=["argsData","argTypesData","Default","GradientVariant","NoToggleVariant"],Qe=Object.freeze(Object.defineProperty({__proto__:null,Default:n,GradientVariant:l,NoToggleVariant:r,__namedExportsOrder:O,argTypesData:T,argsData:N,default:q},Symbol.toStringTag,{value:"Module"}));export{n as D,Qe as F,l as G,r as N};
//# sourceMappingURL=feed_item_pill.stories-a2d04e58.js.map
