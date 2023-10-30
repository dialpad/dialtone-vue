import{c as N}from"./storybook_utils-d9dec137.js";import"./avatar-829d28a7.js";import"./badge-1e3e034d.js";import"./banner-2f5e4a0f.js";import"./breadcrumbs-845520be.js";import"./breadcrumb_item-bfcb158e.js";import{D as b}from"./button-cbf6059f.js";import"./button_group-daca16fc.js";import"./card-1effce05.js";import"./codeblock-430be6d3.js";import"./combobox-232b4940.js";import{D as P}from"./collapsible-78f8a817.js";import"./dropdown_separator-bc248d86.js";import"./image_viewer-83b8a464.js";import"./input-5edbcbbf.js";import"./input_group-4d17f312.js";import"./modal-a708d141.js";import"./lazy_show-01e22690.js";import{u as z}from"./utils-4fd314d5.js";import{u as s,p as A,e,y as l,w as t,k as x,o as y,f as _,A as M,b as R,z as u,J as c}from"./vue.esm-bundler-29004354.js";import"./list_item-d77fc8e2.js";import"./list_item_group-01419394.js";import"./link-eb563172.js";import"./notice-77c92abe.js";import"./pagination-5b1cb473.js";import"./popover-77cf393e.js";import"./presence-c56ebcc9.js";import"./radio-8518d438.js";import"./radio_group-b8c1a5bc.js";import"./tab_group-6a9db598.js";import"./tab-3c336317.js";import"./tab_panel-8501d22b.js";import"./validation_messages-175bd892.js";import"./checkbox-3b5fced8.js";import"./checkbox_group-5242f90a.js";import"./chip-dd612e4c.js";import"./select_menu-b628cb78.js";import"./toast-aa758a25.js";import"./toggle-550997c5.js";import"./tooltip-d2295505.js";import"./skeleton-121fe313.js";import"./keyboard_shortcut-aa4c49e6.js";import"./root_layout-44e8d29a.js";import{D as v}from"./icon-64f6200c.js";import"./stack-9b99da45.js";import"./DtScroller-0dbf778b.js";import"./DtEmojiPicker-cab90a6b.js";import"./DtDatepicker-fec3e907.js";import{D as j}from"./item_layout-5775cee2.js";import"./combobox_with_popover-a1cf5ce4.js";import"./combobox_multi_select-cbe4f727.js";import"./callbar_button-48c43c10.js";import"./callbar_button_with_popover-49ccb3cf.js";import"./contact_info-5db7f06a.js";import"./top_banner_info-5861fa43.js";import"./ivr_node-fce49748.js";import"./grouped_chip-b8641ff1.js";import"./settings_menu_button-aa7673f9.js";import"./general_row-7484ecc6.js";import"./group_row-0011ab64.js";import"./contact_row-491c1be6.js";import"./unread_pill-73cd7999.js";import"./feed_item_row-a93e8bbc.js";import"./time_pill-93cb47d6.js";import"./emoji_row-5afd5fa8.js";import"./attachment_carousel-55377082.js";import"./message_input-bcf7417d.js";import"./callbox-919bd13b.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";const D={default:"dt-recipe-feed-item-pill__border-default",ai:"dt-recipe-feed-item-pill__border-ai",critical:"dt-recipe-feed-item-pill__border-critical"};const q={name:"ListSection",components:{vnodes:{name:"vnodes",render:a=>a.$attrs.vnodes},DtButton:b},props:{id:{type:String,default(){return z.getUniqueString()}},header:{type:String,default:null},separator:{type:Boolean,default:!1},maxDisplayed:{type:Number,default:0},textMore:{type:String,default:"Show more"},textLess:{type:String,default:"Show less"}},data(){return{showAll:!1}},computed:{isCollapsible(){return!(this.maxDisplayed===0||this.itemCount<=this.maxDisplayed)},showMoreLessText(){return this.showAll?this.textLess:this.textMore},hiddenCount(){return this.itemCount-this.displayedItems.length},defaultSlotItems(){return Array.isArray(this.$slots.default()[0].children)?this.$slots.default()[0].children:this.$slots.default()},itemCount(){return this.defaultSlotItems.length},displayedItems(){var a;return(a=this.defaultSlotItems)==null?void 0:a.filter((o,d)=>d<=this.maxDisplayed-1)}},methods:{showMoreLessClicked(){this.showAll=!this.showAll}}};q.__docgenInfo={displayName:"ListSection",exportName:"default",description:"",tags:{},props:[{name:"id",type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"header",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"separator",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxDisplayed",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"textMore",type:{name:"string"},defaultValue:{func:!1,value:"'Show more'"}},{name:"textLess",type:{name:"string"},defaultValue:{func:!1,value:"'Show less'"}}],slots:[{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/list_section/list_section.vue"]};const L={name:"DtRecipeFeedItemPill",components:{DtItemLayout:j,DtIcon:v,DtCollapsible:P},props:{iconName:{type:String,default:()=>""},title:{type:String,default:()=>""},wrapperClass:{type:[String,Array,Object],default:""},buttonClass:{type:[String,Array,Object],default:""},ariaLabel:{type:String,required:!0},toggleable:{type:Boolean,default:()=>!0},defaultToggled:{type:Boolean,default:()=>!1},borderColor:{type:String,default:"default",validator:a=>Object.keys(D).includes(a)}},data(){return{hover:!1,expanded:this.defaultToggled}},computed:{computedIcon(){return this.toggleable&&this.hover?this.expanded?"chevron-down":"chevron-right":this.iconName},toggleableClass(){return this.toggleable?"d-c-pointer":""},borderClass(){return D[this.borderColor]}},methods:{onClick(){this.toggleable&&(this.expanded=!this.expanded)}}},E={class:"dt-recipe-feed-item-pill__wrapper"},J=["aria-label"],G={class:"dt-recipe-feed-item-pill__title"},U={class:"dt-recipe-feed-item-pill__content"};function W(a,o,d,C,p,m){const i=s("dt-icon"),r=s("dt-item-layout"),n=s("dt-collapsible");return y(),A("div",{class:x(["dt-recipe-feed-item-pill__border",m.borderClass,d.wrapperClass])},[e("div",E,[l(n,{open:p.expanded},{anchor:t(()=>[e("button",{"data-qa":"dt-recipe-feed-item-pill","aria-label":d.ariaLabel,class:x(["dt-recipe-feed-item-pill__button",m.toggleableClass,d.buttonClass]),onFocusin:o[0]||(o[0]=f=>p.hover=!0),onFocusout:o[1]||(o[1]=f=>p.hover=!1),onMouseenter:o[2]||(o[2]=f=>p.hover=!0),onMouseleave:o[3]||(o[3]=f=>p.hover=!1),onClick:o[4]||(o[4]=(...f)=>m.onClick&&m.onClick(...f))},[l(r,{class:"dt-recipe-feed-item-pill__layout"},{left:t(()=>[l(i,{"data-qa":"dt-recipe-feed-item-pill__icon",size:"300",class:"dt-recipe-feed-item-pill__icon",name:m.computedIcon},null,8,["name"])]),subtitle:t(()=>[_(a.$slots,"subtitle",{},void 0,!0)]),bottom:t(()=>[_(a.$slots,"bottom",{},void 0,!0)]),right:t(()=>[_(a.$slots,"right",{},void 0,!0)]),default:t(()=>[_(a.$slots,"title",{},()=>[e("span",G,M(d.title),1)],!0)]),_:3})],42,J)]),content:t(()=>[e("div",U,[_(a.$slots,"content",{},void 0,!0)])]),_:3},8,["open"])])],2)}const k=w(L,[["render",W],["__scopeId","data-v-2e98d8f9"]]);L.__docgenInfo={displayName:"DtRecipeFeedItemPill",exportName:"default",description:"",tags:{},props:[{name:"iconName",description:"Accepts a DtIcon name to be shown in the left",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"title",description:"Bolded primary text",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"wrapperClass",description:"Additional styling around the pill",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"buttonClass",description:"Additional styling for the pill",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"ariaLabel",description:"Aria label for feed pill",type:{name:"string"},required:!0},{name:"toggleable",description:"Sets whether the pill can be toggled (Icon changing on hover, expanding and collapsing, pointer)",type:{name:"boolean"},defaultValue:{func:!0,value:"() => true"}},{name:"defaultToggled",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}},{name:"borderColor",description:"Callbox border color",tags:{},values:["default","ai","critical"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}}],slots:[{name:"title"},{name:"subtitle"},{name:"bottom"},{name:"right"},{name:"content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill.vue"]};const B={name:"DtRecipeFeedItemPillDefault",components:{DtRecipeFeedItemPill:k,DtButton:b,DtIcon:v}},H=e("span",{class:"d-fc-tertiary d-fs-100"},"8 people joined",-1),K={class:"d-pr16"},Q=e("span",{class:"d-p16"}," The agent from Dialpad called to follow up on a support ticket that Jeff was handling for them regarding Dialpad CTI. They apologized for calling outside of the requested time and expressed that they had asked the team to look into the issue and would email them after the call. ",-1);function X(a,o,d,C,p,m){const i=s("dt-icon"),r=s("dt-button"),n=s("dt-recipe-feed-item-pill");return y(),R(n,{"icon-name":a.$attrs.iconName,title:a.$attrs.title,"wrapper-class":a.$attrs.wrapperClass,"button-class":a.$attrs.buttonClass,"border-color":a.$attrs.borderColor,"aria-label":a.$attrs.ariaLabel,toggleable:a.$attrs.toggleable,"default-toggled":a.$attrs.defaultToggled},{subtitle:t(()=>[u(" Last 43 minutes - Ended at 5:04pm ")]),bottom:t(()=>[H]),right:t(()=>[e("div",K,[l(r,{"aria-label":"Open external link",kind:"muted",importance:"clear",circle:!0,onClick:o[0]||(o[0]=c(()=>{},["stop"]))},{icon:t(()=>[l(i,{name:"external-link",size:"300"})]),_:1})])]),content:t(()=>[Q]),_:1},8,["icon-name","title","wrapper-class","button-class","border-color","aria-label","toggleable","default-toggled"])}const Y=w(B,[["render",X]]);B.__docgenInfo={displayName:"DtRecipeFeedItemPillDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill_default.story.vue"]};const O={name:"DtRecipeFeedItemPillVariants",components:{DtRecipeFeedItemPill:k,DtButton:b,DtIcon:v}},Z=e("h2",null,"Call pill",-1),ee=e("h3",{class:"d-mt8 d-mb4"}," With call recap ",-1),te={class:"d-pr16"},oe=e("div",{class:"d-p16"},[e("p",null," The agent from Dialpad called to follow up on a support ticket that Jeff was handling for them regarding Dialpad CTI. They apologized for calling outside of the requested time and expressed that they had asked the team to look into the issue and would email them after the call. "),e("p",{class:"d-fs-100 d-mt12"},[e("strong",null,"Actions items")]),e("p",{class:"d-d-flex"},[e("strong",{class:"d-mr4"},"1. "),u(" The agent needs to inform the team to check on Vijay's request or ticket regarding Dialpad CTI. ")])],-1),ae=e("h3",{class:"d-mt16 d-mb4"}," Missed ",-1),le={class:"d-pr16"},ie=e("h3",{class:"d-mt16 d-mb4"}," Voicemail ",-1),re={class:"d-pr16"},ne=e("h3",{class:"d-mt16 d-mb4"}," Generating AI summary ",-1),se={class:"d-pr16"},de=e("h2",{class:"d-mt16"}," Meeting pill ",-1),pe=e("h3",{class:"d-mt8 d-mb4"}," With call recap ",-1),me=e("span",{class:"d-fc-tertiary d-fs-100"},"8 people joined",-1),ce={class:"d-pr16"},ue=e("div",{class:"d-p16"},[e("p",null," The agent from Dialpad called to follow up on a support ticket that Jeff was handling for them regarding Dialpad CTI. They apologized for calling outside of the requested time and expressed that they had asked the team to look into the issue and would email them after the call. "),e("p",{class:"d-fs-100 d-mt12"},[e("strong",null,"Actions items")]),e("p",{class:"d-d-flex"},[e("strong",{class:"d-mr4"},"1. "),u(" The agent needs to inform the team to check on Vijay's request or ticket regarding Dialpad CTI. ")])],-1),fe=e("h3",{class:"d-mt16 d-mb4"}," Generating AI summary ",-1),_e=e("span",{class:"d-fc-tertiary d-fs-100"},"8 people joined",-1),he={class:"d-pr16"};function ge(a,o,d,C,p,m){const i=s("dt-icon"),r=s("dt-button"),n=s("dt-recipe-feed-item-pill");return y(),A("div",null,[e("div",null,[Z,ee,l(n,{"default-toggled":"",title:"Ben called you","icon-name":"phone-outgoing","wrapper-class":"d-w628","border-color":"ai"},{subtitle:t(()=>[u(" Lasted 8 min • Ended at 11:56 AM ")]),right:t(()=>[e("div",te,[l(r,{"aria-label":"Open external link",kind:"muted",importance:"clear",circle:!0,onClick:o[0]||(o[0]=c(()=>{},["stop"]))},{icon:t(()=>[l(i,{name:"external-link",size:"300"})]),_:1})])]),content:t(()=>[oe]),_:1}),ae,l(n,{title:"Missed call from Ben","border-color":"critical","icon-name":"phone-missed","wrapper-class":"d-w628",toggleable:!1},{right:t(()=>[e("div",le,[l(r,{"aria-label":"Call Ben",kind:"muted",importance:"clear",circle:!0,onClick:o[1]||(o[1]=c(()=>{},["stop"]))},{icon:t(()=>[l(i,{name:"phone",size:"300"})]),_:1})])]),_:1}),ie,l(n,{"icon-name":"voicemail",title:"Voicemail","wrapper-class":"d-w628",toggleable:!1},{subtitle:t(()=>[u(" From (800)504-9978 ")]),right:t(()=>[e("div",re,[l(r,{"aria-label":"Open external link",kind:"muted",importance:"clear",circle:!0,onClick:o[2]||(o[2]=c(()=>{},["stop"]))},{icon:t(()=>[l(i,{name:"external-link",size:"300"})]),_:1})])]),_:1}),ne,l(n,{"border-color":"ai",title:"Ben called you","icon-name":"phone-incoming","wrapper-class":"d-w628",toggleable:!1},{right:t(()=>[e("div",se,[l(r,{"aria-label":"Open external link",kind:"muted",importance:"clear",circle:!0,onClick:o[3]||(o[3]=c(()=>{},["stop"]))},{icon:t(()=>[l(i,{name:"external-link",size:"300"})]),_:1})])]),_:1})]),e("div",null,[de,pe,l(n,{title:"Ben started a meeting","icon-name":"video","button-class":"d-bar24","wrapper-class":"d-w628","border-color":"ai","default-toggled":!0},{subtitle:t(()=>[u(" Started 10 minutes ago ")]),bottom:t(()=>[me]),right:t(()=>[e("div",ce,[l(r,{"aria-label":"Open external link",kind:"muted",importance:"clear",circle:!0,onClick:o[4]||(o[4]=c(()=>{},["stop"]))},{icon:t(()=>[l(i,{name:"external-link",size:"300"})]),_:1})])]),content:t(()=>[ue]),_:1}),fe,l(n,{title:"Ben started a meeting","icon-name":"video","border-color":"ai","button-class":"d-bar24","wrapper-class":"d-w628",toggleable:!1},{subtitle:t(()=>[u(" Started 10 minutes ago ")]),bottom:t(()=>[_e]),right:t(()=>[e("div",he,[l(r,{"aria-label":"Open external link",kind:"muted",importance:"clear",circle:!0,onClick:o[5]||(o[5]=c(()=>{},["stop"]))},{icon:t(()=>[l(i,{name:"external-link",size:"300"})]),_:1})])]),_:1})])])}const be=w(O,[["render",ge]]);O.__docgenInfo={displayName:"DtRecipeFeedItemPillVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill_variants.story.vue"]};const ye={iconName:"video",title:"This meeting has ended",ariaLabel:"Click to expand",wrapperClass:"d-w628",buttonClass:"d-bar24"},ve={subtitle:{control:"text",table:{type:{summary:"VNode"}}},bottom:{control:"text",table:{type:{summary:"VNode"}}},right:{control:"text",table:{type:{summary:"VNode"}}},content:{control:"text",table:{type:{summary:"VNode"}}}},we={title:"Recipes/Conversation View/Feed Item Pill",component:k,args:ye,argTypes:ve,excludeStories:/.*Data$/},ke=a=>N(a,Y),Ce=a=>N(a,be),h={render:ke,parameters:{a11y:{disable:!0}}},g={render:Ce,parameters:{options:{showPanel:!1},a11y:{disable:!0},controls:{disable:!0}}};var I,V,S;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
//# sourceMappingURL=feed_item_pill.stories-2511f1df.js.map