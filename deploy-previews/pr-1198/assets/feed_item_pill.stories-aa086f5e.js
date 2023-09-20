import{c as j}from"./storybook_utils-819067e7.js";import"./avatar-ab28517a.js";import"./badge-830d79bc.js";import"./banner-c1cf8fe0.js";import"./breadcrumbs-ab4bd34a.js";import{D as T}from"./button-5bfbc090.js";import"./button_group-1b5bcebd.js";import"./card-622d1cb1.js";import"./codeblock-c860b7a0.js";import"./combobox-14d60f98.js";import{D as q}from"./collapsible-09618b9c.js";import"./dropdown_separator-3e165e5a.js";import"./image_viewer-9f277383.js";import"./input-cf5294ab.js";import"./input_group-671505ea.js";import"./modal-11b46cc5.js";import"./lazy_show-64626599.js";import{u as E}from"./utils-6614c5e4.js";import{k as n,d as z,e as i,p as u,m as a,n as _,o as V,u as c,q as L,x as G,l as U,z as J}from"./vue.esm-bundler-0b5a673d.js";import"./list_item-5d2f3b71.js";import"./list_item_group-27182a2b.js";import"./link-3220e3d1.js";import"./notice-5d731154.js";import"./pagination-bde5c826.js";import"./popover-011ed17c.js";import"./presence-470af885.js";import"./radio-084b5f70.js";import"./radio_group-b2725e2e.js";import"./tab_group-409d2765.js";import"./tab-8d1c8152.js";import"./tab_panel-161c8b38.js";import"./validation_messages-0e59865e.js";import"./checkbox-78f118c6.js";import"./checkbox_group-f39e3500.js";import"./chip-e1290d89.js";import"./select_menu-ad3764d8.js";import"./toast-3d0308e7.js";import"./toggle-b81b2017.js";import"./tooltip-807cebe1.js";import"./skeleton-310a8592.js";import"./keyboard_shortcut-c3de11be.js";import"./root_layout-b509b546.js";import{D as $}from"./icon-a1336772.js";import"./stack-5f03920b.js";import"./DtScroller-71373552.js";import"./DtEmojiPicker-32b88464.js";import"./DtDatepicker-4445cd6a.js";import{D as H}from"./item_layout-e36077c1.js";import"./combobox_with_popover-1e455ad8.js";import"./combobox_multi_select-42de8f96.js";import"./callbar_button-03c96685.js";import"./callbar_button_with_popover-1cc6f938.js";import"./contact_info-d8b2c5c1.js";import"./top_banner_info-b1a8ce33.js";import"./ivr_node-3f1aae88.js";import"./grouped_chip-39cbeac1.js";import"./settings_menu_button-b2dfe305.js";import"./general_row-19d892f8.js";import"./group_row-1d7ec43d.js";import"./contact_row-778c6ef2.js";import"./unread_pill-2f6836ba.js";import"./feed_item_row-ac20f3b9.js";import"./time_pill-c7a4c4af.js";import"./emoji_row-4beb94ce.js";import"./callbox-01d57b0b.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";const y={default:"dt-feed-item-pill--border-default",ai:"dt-feed-item-pill--border-ai",critical:"dt-feed-item-pill--border-critical"};const K={name:"ListSection",components:{vnodes:{name:"vnodes",render:e=>e.$attrs.vnodes},DtButton:T},props:{id:{type:String,default(){return E.getUniqueString()}},header:{type:String,default:null},separator:{type:Boolean,default:!1},maxDisplayed:{type:Number,default:0},textMore:{type:String,default:"Show more"},textLess:{type:String,default:"Show less"}},data(){return{showAll:!1}},computed:{isCollapsible(){return!(this.maxDisplayed===0||this.itemCount<=this.maxDisplayed)},showMoreLessText(){return this.showAll?this.textLess:this.textMore},hiddenCount(){return this.itemCount-this.displayedItems.length},defaultSlotItems(){return Array.isArray(this.$slots.default()[0].children)?this.$slots.default()[0].children:this.$slots.default()},itemCount(){return this.defaultSlotItems.length},displayedItems(){var e;return(e=this.defaultSlotItems)==null?void 0:e.filter((t,o)=>o<=this.maxDisplayed-1)}},methods:{showMoreLessClicked(){this.showAll=!this.showAll}}};K.__docgenInfo={displayName:"ListSection",exportName:"default",description:"",tags:{},props:[{name:"id",type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"header",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"separator",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxDisplayed",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"textMore",type:{name:"string"},defaultValue:{func:!1,value:"'Show more'"}},{name:"textLess",type:{name:"string"},defaultValue:{func:!1,value:"'Show less'"}}],slots:[{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/list_section/list_section.vue"]};const A={name:"DtRecipeFeedItemPill",components:{DtItemLayout:H,DtIcon:$,DtCollapsible:q},props:{iconName:{type:String,default:()=>""},title:{type:String,default:()=>""},wrapperClass:{type:[String,Array,Object],default:""},buttonClass:{type:[String,Array,Object],default:""},ariaLabel:{type:String,required:!0},toggleable:{type:Boolean,default:()=>!0},borderColor:{type:String,default:"default",validator:e=>Object.keys(y).includes(e)}},data(){return{hover:!1,expanded:!1}},computed:{computedIcon(){return this.toggleable&&this.hover?this.expanded?"chevron-down":"chevron-right":this.iconName},toggleableClass(){return this.toggleable?"d-c-pointer":""},borderClass(){return y[this.borderColor]}},methods:{onClick(){this.toggleable&&(this.expanded=!this.expanded)}}},Q={class:"d-p8 d-bgc-secondary"},W=["aria-label"],X={class:"d-jc-center d-d-flex"};function Y(e,t,o,R,r,l){const f=n("dt-icon"),g=n("dt-item-layout"),b=n("dt-collapsible");return V(),z("div",{class:_(["dt-feed-item-pill--border",l.borderClass,o.wrapperClass])},[i("div",Q,[u(b,{open:r.expanded},{anchor:a(()=>[i("button",{"aria-label":o.ariaLabel,"data-qa":"dt-feed-item-pill",class:_(["d-baw0 d-bgc-moderate d-bar-pill d-w100p d-ta-left d-btn--circle",l.toggleableClass,o.buttonClass]),onFocusin:t[0]||(t[0]=s=>r.hover=!0),onFocusout:t[1]||(t[1]=s=>r.hover=!1),onMouseenter:t[2]||(t[2]=s=>r.hover=!0),onMouseleave:t[3]||(t[3]=s=>r.hover=!1),onClick:t[4]||(t[4]=(...s)=>l.onClick&&l.onClick(...s))},[u(g,{class:"d-w100p d-p8"},{left:a(()=>[u(f,{size:"300",class:"dt-feed-item-pill--icon d-pr8","data-qa":"dt-feed-item-pill-icon",name:l.computedIcon},null,8,["name"])]),subtitle:a(()=>[c(e.$slots,"subtitle",{},void 0,!0)]),bottom:a(()=>[c(e.$slots,"bottom",{},void 0,!0)]),right:a(()=>[c(e.$slots,"right",{},void 0,!0)]),default:a(()=>[L(G(o.title)+" ",1)]),_:3})],42,W)]),content:a(()=>[i("div",X,[c(e.$slots,"content",{},void 0,!0)])]),_:3},8,["open"])])],2)}const P=F(A,[["render",Y],["__scopeId","data-v-5ab2a1a5"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill.vue"]]);A.__docgenInfo={displayName:"DtRecipeFeedItemPill",exportName:"default",description:"",tags:{},props:[{name:"iconName",description:"Accepts a DtIcon name to be shown in the left",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"title",description:"Bolded primary text",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"wrapperClass",description:"Additional styling around the pill",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"buttonClass",description:"Additional styling for the pill",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"ariaLabel",description:"Aria label for feed pill",type:{name:"string"},required:!0},{name:"toggleable",description:"Sets whether the pill can be toggled (Icon changing on hover, expanding and collapsing, pointer)",type:{name:"boolean"},defaultValue:{func:!0,value:"() => true"}},{name:"borderColor",description:"Callbox border color",tags:{},values:["default","ai","critical"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}}],slots:[{name:"subtitle"},{name:"bottom"},{name:"right"},{name:"content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill.vue"]};const B={name:"DtRecipeFeedItemPillDefault",components:{DtRecipeFeedItemPill:P,DtButton:T,DtIcon:$}},Z=i("span",{class:"d-fc-tertiary d-fs-100"},"8 people joined",-1),ee={class:"d-pr16"},te=i("span",{class:"d-p16"}," The agent from Dialpad called to follow up on a support ticket that Jeff was handling for them regarding Dialpad CTI. They apologized for calling outside of the requested time and expressed that they had asked the team to look into the issue and would email them after the call. ",-1);function ae(e,t,o,R,r,l){const f=n("dt-icon"),g=n("dt-button"),b=n("dt-recipe-feed-item-pill");return V(),U(b,{"icon-name":e.$attrs.iconName,title:e.$attrs.title,"wrapper-class":e.$attrs.wrapperClass,"button-class":e.$attrs.buttonClass,"border-color":e.$attrs.borderColor,"aria-label":e.$attrs.ariaLabel,toggleable:e.$attrs.toggleable},{subtitle:a(()=>[L(" Last 43 minutes - Ended at 5:04pm ")]),bottom:a(()=>[Z]),right:a(()=>[i("div",ee,[u(g,{"aria-label":"Open external link",kind:"muted",importance:"clear",circle:!0,onClick:t[0]||(t[0]=J(()=>{},["stop"]))},{icon:a(()=>[u(f,{name:"external-link",size:"300"})]),_:1})])]),content:a(()=>[te]),_:1},8,["icon-name","title","wrapper-class","button-class","border-color","aria-label","toggleable"])}const oe=F(B,[["render",ae],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill_default.story.vue"]]);B.__docgenInfo={displayName:"DtRecipeFeedItemPillDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill_default.story.vue"]};const M={},O={subtitle:{control:"text",table:{type:{summary:"VNode"}}},bottom:{control:"text",table:{type:{summary:"VNode"}}},right:{control:"text",table:{type:{summary:"VNode"}}},content:{control:"text",table:{type:{summary:"VNode"}}}},re={title:"Recipes/Conversation View/Feed Item Pill",component:P,args:M,argTypes:O,excludeStories:/.*Data$/},h=e=>j(e,oe),d={render:h,parameters:{a11y:{disable:!0}},args:{iconName:"video",title:"This meeting has ended",ariaLabel:"Click to expand",buttonClass:"",toggleable:!0,wrapperClass:"d-w628",borderColor:"default"}},p={render:h,parameters:{options:{showPanel:!1},controls:{disable:!0},a11y:{disable:!0}},args:{iconName:"video",title:"This meeting has ended",wrapperClass:"d-w628",buttonClass:"",ariaLabel:"Click to expand",toggleable:!0,borderColor:"ai"}},m={render:h,parameters:{options:{showPanel:!1},controls:{disable:!0},a11y:{disable:!0}},args:{iconName:"video",title:"This meeting has ended",wrapperClass:"d-w628",expanded:!1,ariaLabel:"Click to expand",toggleable:!1,borderColor:"critical"}};var v,C,w;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(w=(C=d.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var D,x,S;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(S=(x=p.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var k,N,I;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(I=(N=m.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};const le=["argsData","argTypesData","Default","AiBorderGradient","NoToggleVariant"],_t=Object.freeze(Object.defineProperty({__proto__:null,AiBorderGradient:p,Default:d,NoToggleVariant:m,__namedExportsOrder:le,argTypesData:O,argsData:M,default:re},Symbol.toStringTag,{value:"Module"}));export{p as A,d as D,_t as F,m as N};
//# sourceMappingURL=feed_item_pill.stories-aa086f5e.js.map
