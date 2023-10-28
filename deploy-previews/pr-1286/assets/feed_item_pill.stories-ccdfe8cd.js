import{c as N}from"./storybook_utils-5e2f75ca.js";import"./avatar-d6b5ac22.js";import"./badge-45556f03.js";import"./banner-b934255d.js";import"./breadcrumbs-805f29d6.js";import"./breadcrumb_item-28bb38cb.js";import{D as b}from"./button-cf0b13d0.js";import"./button_group-775bbd58.js";import"./card-8d50934c.js";import"./codeblock-51b0dfb5.js";import"./combobox-b523ff6b.js";import{D as P}from"./collapsible-0152df70.js";import"./dropdown_separator-65e0b637.js";import"./image_viewer-7065f56d.js";import"./input-f3438f60.js";import"./input_group-19c95ce9.js";import"./modal-c2b19fac.js";import"./lazy_show-a8336f86.js";import{u as z}from"./utils-491d6e59.js";import{t as s,p as L,e,x as i,w as t,k as x,o as v,g as _,z as M,b as R,y as u,I as c}from"./vue.esm-bundler-807df745.js";import"./list_item-e4d6138f.js";import"./list_item_group-78fb1a4d.js";import"./link-44200ffc.js";import"./notice-ae6427d2.js";import"./pagination-531fe485.js";import"./popover-336dcff1.js";import"./presence-313305f6.js";import"./radio-104d4a89.js";import"./radio_group-18e7de63.js";import"./tab_group-f208b7d7.js";import"./tab-0e9e9c48.js";import"./tab_panel-a7654072.js";import"./validation_messages-62019e8f.js";import"./checkbox-e21c7d45.js";import"./checkbox_group-43246cb7.js";import"./chip-d58ba029.js";import"./select_menu-922f2ec2.js";import"./toast-6f285361.js";import"./toggle-93dab3f9.js";import"./tooltip-98989c43.js";import"./skeleton-36f31f07.js";import"./keyboard_shortcut-46343f86.js";import"./root_layout-be4ee27d.js";import{D as y}from"./icon-c9b7700c.js";import"./stack-1d445e4d.js";import"./DtScroller-0a6764ec.js";import"./DtEmojiPicker-6cb8756f.js";import"./DtDatepicker-056404ae.js";import{D as j}from"./item_layout-936a47fa.js";import"./combobox_with_popover-34eb1f48.js";import"./combobox_multi_select-1fcc76fd.js";import"./callbar_button-4fb1aa0f.js";import"./callbar_button_with_popover-21319df1.js";import"./contact_info-e370d986.js";import"./top_banner_info-e5d332d0.js";import"./ivr_node-ecbe5f40.js";import"./grouped_chip-8d56e9b4.js";import"./settings_menu_button-f2af8c64.js";import"./general_row-a481cc73.js";import"./group_row-5cc3b8ce.js";import"./contact_row-df8d2f1f.js";import"./unread_pill-82da169b.js";import"./feed_item_row-13d20a68.js";import"./time_pill-da1d4b34.js";import"./emoji_row-5a6f35a2.js";import"./attachment_carousel-f650e71f.js";import"./message_input-540e24b8.js";import"./callbox-1e73d15a.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";const D={default:"dt-recipe-feed-item-pill__border-default",ai:"dt-recipe-feed-item-pill__border-ai",critical:"dt-recipe-feed-item-pill__border-critical"};const q={name:"ListSection",components:{vnodes:{name:"vnodes",render:a=>a.$attrs.vnodes},DtButton:b},props:{id:{type:String,default(){return z.getUniqueString()}},header:{type:String,default:null},separator:{type:Boolean,default:!1},maxDisplayed:{type:Number,default:0},textMore:{type:String,default:"Show more"},textLess:{type:String,default:"Show less"}},data(){return{showAll:!1}},computed:{isCollapsible(){return!(this.maxDisplayed===0||this.itemCount<=this.maxDisplayed)},showMoreLessText(){return this.showAll?this.textLess:this.textMore},hiddenCount(){return this.itemCount-this.displayedItems.length},defaultSlotItems(){return Array.isArray(this.$slots.default()[0].children)?this.$slots.default()[0].children:this.$slots.default()},itemCount(){return this.defaultSlotItems.length},displayedItems(){var a;return(a=this.defaultSlotItems)==null?void 0:a.filter((o,d)=>d<=this.maxDisplayed-1)}},methods:{showMoreLessClicked(){this.showAll=!this.showAll}}};q.__docgenInfo={displayName:"ListSection",exportName:"default",description:"",tags:{},props:[{name:"id",type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"header",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"separator",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxDisplayed",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"textMore",type:{name:"string"},defaultValue:{func:!1,value:"'Show more'"}},{name:"textLess",type:{name:"string"},defaultValue:{func:!1,value:"'Show less'"}}],slots:[{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/list_section/list_section.vue"]};const A={name:"DtRecipeFeedItemPill",components:{DtItemLayout:j,DtIcon:y,DtCollapsible:P},props:{iconName:{type:String,default:()=>""},title:{type:String,default:()=>""},wrapperClass:{type:[String,Array,Object],default:""},buttonClass:{type:[String,Array,Object],default:""},ariaLabel:{type:String,required:!0},toggleable:{type:Boolean,default:()=>!0},defaultToggled:{type:Boolean,default:()=>!1},borderColor:{type:String,default:"default",validator:a=>Object.keys(D).includes(a)}},data(){return{hover:!1,expanded:this.defaultToggled}},computed:{computedIcon(){return this.toggleable&&this.hover?this.expanded?"chevron-down":"chevron-right":this.iconName},toggleableClass(){return this.toggleable?"d-c-pointer":""},borderClass(){return D[this.borderColor]}},methods:{onClick(){this.toggleable&&(this.expanded=!this.expanded)}}},E={class:"dt-recipe-feed-item-pill__wrapper"},J=["aria-label"],G={class:"dt-recipe-feed-item-pill__title"},U={class:"dt-recipe-feed-item-pill__content"};function W(a,o,d,C,p,m){const l=s("dt-icon"),r=s("dt-item-layout"),n=s("dt-collapsible");return v(),L("div",{class:x(["dt-recipe-feed-item-pill__border",m.borderClass,d.wrapperClass])},[e("div",E,[i(n,{open:p.expanded},{anchor:t(()=>[e("button",{"data-qa":"dt-recipe-feed-item-pill","aria-label":d.ariaLabel,class:x(["dt-recipe-feed-item-pill__button",m.toggleableClass,d.buttonClass]),onFocusin:o[0]||(o[0]=f=>p.hover=!0),onFocusout:o[1]||(o[1]=f=>p.hover=!1),onMouseenter:o[2]||(o[2]=f=>p.hover=!0),onMouseleave:o[3]||(o[3]=f=>p.hover=!1),onClick:o[4]||(o[4]=(...f)=>m.onClick&&m.onClick(...f))},[i(r,{class:"dt-recipe-feed-item-pill__layout"},{left:t(()=>[i(l,{"data-qa":"dt-recipe-feed-item-pill__icon",size:"300",class:"dt-recipe-feed-item-pill__icon",name:m.computedIcon},null,8,["name"])]),subtitle:t(()=>[_(a.$slots,"subtitle",{},void 0,!0)]),bottom:t(()=>[_(a.$slots,"bottom",{},void 0,!0)]),right:t(()=>[_(a.$slots,"right",{},void 0,!0)]),default:t(()=>[_(a.$slots,"title",{},()=>[e("span",G,M(d.title),1)],!0)]),_:3})],42,J)]),content:t(()=>[e("div",U,[_(a.$slots,"content",{},void 0,!0)])]),_:3},8,["open"])])],2)}const k=w(A,[["render",W],["__scopeId","data-v-5ab2a1a5"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill.vue"]]);A.__docgenInfo={displayName:"DtRecipeFeedItemPill",exportName:"default",description:"",tags:{},props:[{name:"iconName",description:"Accepts a DtIcon name to be shown in the left",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"title",description:"Bolded primary text",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"wrapperClass",description:"Additional styling around the pill",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"buttonClass",description:"Additional styling for the pill",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"ariaLabel",description:"Aria label for feed pill",type:{name:"string"},required:!0},{name:"toggleable",description:"Sets whether the pill can be toggled (Icon changing on hover, expanding and collapsing, pointer)",type:{name:"boolean"},defaultValue:{func:!0,value:"() => true"}},{name:"defaultToggled",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}},{name:"borderColor",description:"Callbox border color",tags:{},values:["default","ai","critical"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}}],slots:[{name:"title"},{name:"subtitle"},{name:"bottom"},{name:"right"},{name:"content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill.vue"]};const B={name:"DtRecipeFeedItemPillDefault",components:{DtRecipeFeedItemPill:k,DtButton:b,DtIcon:y}},H=e("span",{class:"d-fc-tertiary d-fs-100"},"8 people joined",-1),K={class:"d-pr16"},Q=e("span",{class:"d-p16"}," The agent from Dialpad called to follow up on a support ticket that Jeff was handling for them regarding Dialpad CTI. They apologized for calling outside of the requested time and expressed that they had asked the team to look into the issue and would email them after the call. ",-1);function X(a,o,d,C,p,m){const l=s("dt-icon"),r=s("dt-button"),n=s("dt-recipe-feed-item-pill");return v(),R(n,{"icon-name":a.$attrs.iconName,title:a.$attrs.title,"wrapper-class":a.$attrs.wrapperClass,"button-class":a.$attrs.buttonClass,"border-color":a.$attrs.borderColor,"aria-label":a.$attrs.ariaLabel,toggleable:a.$attrs.toggleable,"default-toggled":a.$attrs.defaultToggled},{subtitle:t(()=>[u(" Last 43 minutes - Ended at 5:04pm ")]),bottom:t(()=>[H]),right:t(()=>[e("div",K,[i(r,{"aria-label":"Open external link",kind:"muted",importance:"clear",circle:!0,onClick:o[0]||(o[0]=c(()=>{},["stop"]))},{icon:t(()=>[i(l,{name:"external-link",size:"300"})]),_:1})])]),content:t(()=>[Q]),_:1},8,["icon-name","title","wrapper-class","button-class","border-color","aria-label","toggleable","default-toggled"])}const Y=w(B,[["render",X],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill_default.story.vue"]]);B.__docgenInfo={displayName:"DtRecipeFeedItemPillDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill_default.story.vue"]};const O={name:"DtRecipeFeedItemPillVariants",components:{DtRecipeFeedItemPill:k,DtButton:b,DtIcon:y}},Z=e("h2",null,"Call pill",-1),ee=e("h3",{class:"d-mt8 d-mb4"}," With call recap ",-1),te={class:"d-pr16"},oe=e("div",{class:"d-p16"},[e("p",null," The agent from Dialpad called to follow up on a support ticket that Jeff was handling for them regarding Dialpad CTI. They apologized for calling outside of the requested time and expressed that they had asked the team to look into the issue and would email them after the call. "),e("p",{class:"d-fs-100 d-mt12"},[e("strong",null,"Actions items")]),e("p",{class:"d-d-flex"},[e("strong",{class:"d-mr4"},"1. "),u(" The agent needs to inform the team to check on Vijay's request or ticket regarding Dialpad CTI. ")])],-1),ae=e("h3",{class:"d-mt16 d-mb4"}," Missed ",-1),ie={class:"d-pr16"},le=e("h3",{class:"d-mt16 d-mb4"}," Voicemail ",-1),re={class:"d-pr16"},ne=e("h3",{class:"d-mt16 d-mb4"}," Generating AI summary ",-1),se={class:"d-pr16"},de=e("h2",{class:"d-mt16"}," Meeting pill ",-1),pe=e("h3",{class:"d-mt8 d-mb4"}," With call recap ",-1),me=e("span",{class:"d-fc-tertiary d-fs-100"},"8 people joined",-1),ce={class:"d-pr16"},ue=e("div",{class:"d-p16"},[e("p",null," The agent from Dialpad called to follow up on a support ticket that Jeff was handling for them regarding Dialpad CTI. They apologized for calling outside of the requested time and expressed that they had asked the team to look into the issue and would email them after the call. "),e("p",{class:"d-fs-100 d-mt12"},[e("strong",null,"Actions items")]),e("p",{class:"d-d-flex"},[e("strong",{class:"d-mr4"},"1. "),u(" The agent needs to inform the team to check on Vijay's request or ticket regarding Dialpad CTI. ")])],-1),fe=e("h3",{class:"d-mt16 d-mb4"}," Generating AI summary ",-1),_e=e("span",{class:"d-fc-tertiary d-fs-100"},"8 people joined",-1),he={class:"d-pr16"};function ge(a,o,d,C,p,m){const l=s("dt-icon"),r=s("dt-button"),n=s("dt-recipe-feed-item-pill");return v(),L("div",null,[e("div",null,[Z,ee,i(n,{"default-toggled":"",title:"Ben called you","icon-name":"phone-outgoing","wrapper-class":"d-w628","border-color":"ai"},{subtitle:t(()=>[u(" Lasted 8 min • Ended at 11:56 AM ")]),right:t(()=>[e("div",te,[i(r,{"aria-label":"Open external link",kind:"muted",importance:"clear",circle:!0,onClick:o[0]||(o[0]=c(()=>{},["stop"]))},{icon:t(()=>[i(l,{name:"external-link",size:"300"})]),_:1})])]),content:t(()=>[oe]),_:1}),ae,i(n,{title:"Missed call from Ben","border-color":"critical","icon-name":"phone-missed","wrapper-class":"d-w628",toggleable:!1},{right:t(()=>[e("div",ie,[i(r,{"aria-label":"Call Ben",kind:"muted",importance:"clear",circle:!0,onClick:o[1]||(o[1]=c(()=>{},["stop"]))},{icon:t(()=>[i(l,{name:"phone",size:"300"})]),_:1})])]),_:1}),le,i(n,{"icon-name":"voicemail",title:"Voicemail","wrapper-class":"d-w628",toggleable:!1},{subtitle:t(()=>[u(" From (800)504-9978 ")]),right:t(()=>[e("div",re,[i(r,{"aria-label":"Open external link",kind:"muted",importance:"clear",circle:!0,onClick:o[2]||(o[2]=c(()=>{},["stop"]))},{icon:t(()=>[i(l,{name:"external-link",size:"300"})]),_:1})])]),_:1}),ne,i(n,{"border-color":"ai",title:"Ben called you","icon-name":"phone-incoming","wrapper-class":"d-w628",toggleable:!1},{right:t(()=>[e("div",se,[i(r,{"aria-label":"Open external link",kind:"muted",importance:"clear",circle:!0,onClick:o[3]||(o[3]=c(()=>{},["stop"]))},{icon:t(()=>[i(l,{name:"external-link",size:"300"})]),_:1})])]),_:1})]),e("div",null,[de,pe,i(n,{title:"Ben started a meeting","icon-name":"video","button-class":"d-bar24","wrapper-class":"d-w628","border-color":"ai","default-toggled":!0},{subtitle:t(()=>[u(" Started 10 minutes ago ")]),bottom:t(()=>[me]),right:t(()=>[e("div",ce,[i(r,{"aria-label":"Open external link",kind:"muted",importance:"clear",circle:!0,onClick:o[4]||(o[4]=c(()=>{},["stop"]))},{icon:t(()=>[i(l,{name:"external-link",size:"300"})]),_:1})])]),content:t(()=>[ue]),_:1}),fe,i(n,{title:"Ben started a meeting","icon-name":"video","border-color":"ai","button-class":"d-bar24","wrapper-class":"d-w628",toggleable:!1},{subtitle:t(()=>[u(" Started 10 minutes ago ")]),bottom:t(()=>[_e]),right:t(()=>[e("div",he,[i(r,{"aria-label":"Open external link",kind:"muted",importance:"clear",circle:!0,onClick:o[5]||(o[5]=c(()=>{},["stop"]))},{icon:t(()=>[i(l,{name:"external-link",size:"300"})]),_:1})])]),_:1})])])}const be=w(O,[["render",ge],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill_variants.story.vue"]]);O.__docgenInfo={displayName:"DtRecipeFeedItemPillVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill_variants.story.vue"]};const ve={iconName:"video",title:"This meeting has ended",ariaLabel:"Click to expand",wrapperClass:"d-w628",buttonClass:"d-bar24"},ye={subtitle:{control:"text",table:{type:{summary:"VNode"}}},bottom:{control:"text",table:{type:{summary:"VNode"}}},right:{control:"text",table:{type:{summary:"VNode"}}},content:{control:"text",table:{type:{summary:"VNode"}}}},we={title:"Recipes/Conversation View/Feed Item Pill",component:k,args:ve,argTypes:ye,excludeStories:/.*Data$/},ke=a=>N(a,Y),Ce=a=>N(a,be),h={render:ke,parameters:{a11y:{disable:!0}}},g={render:Ce,parameters:{options:{showPanel:!1},a11y:{disable:!0},controls:{disable:!0}}};var I,V,S;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: DefaultTemplate,
  parameters: {
    a11y: {
      disable: true
    }
  }
}`,...(S=(V=h.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var $,T,F;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: VariantsTemplate,
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
}`,...(F=(T=g.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};const xe=["Default","Variants"],Rt=Object.freeze(Object.defineProperty({__proto__:null,Default:h,Variants:g,__namedExportsOrder:xe,default:we},Symbol.toStringTag,{value:"Module"}));export{h as D,Rt as F,g as V};
//# sourceMappingURL=feed_item_pill.stories-ccdfe8cd.js.map
