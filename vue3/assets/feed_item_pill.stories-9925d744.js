import{c as R}from"./storybook_utils-bfe77239.js";import"./avatar-fe8e4180.js";import"./badge-edc76fbd.js";import"./banner-3b9c8857.js";import"./breadcrumbs-608f6174.js";import"./breadcrumb_item-79f43797.js";import{D as T}from"./button-d398079c.js";import"./button_group-d4038df2.js";import"./card-01642ef1.js";import"./codeblock-92fa07a8.js";import"./combobox-76352167.js";import{D as j}from"./collapsible-cf777708.js";import"./dropdown_separator-c8dc7200.js";import"./image_viewer-acf24f16.js";import"./input-fb1a6c95.js";import"./input_group-595db89d.js";import"./modal-b2f53750.js";import"./lazy_show-619994b0.js";import{u as q}from"./utils-e4c66039.js";import{u as i,p as E,e as r,y as u,w as a,k as _,o as V,f as c,A as z,b as G,z as J,J as U}from"./vue.esm-bundler-3a08a304.js";import"./list_item-6721d949.js";import"./list_item_group-62b66108.js";import"./link-3e0667f0.js";import"./notice-26cdf03a.js";import"./pagination-186f5f90.js";import"./popover-c8c1d619.js";import"./presence-09ebed05.js";import"./radio-d2c98925.js";import"./radio_group-42531a19.js";import"./tab_group-b574a701.js";import"./tab-3e987c1c.js";import"./tab_panel-c7955415.js";import"./validation_messages-132421aa.js";import"./checkbox-357121d8.js";import"./checkbox_group-9ac0aa70.js";import"./chip-0f84d638.js";import"./select_menu-68e011ab.js";import"./toast-ee8db70d.js";import"./toggle-ae2745b8.js";import"./tooltip-dd2a68ac.js";import"./skeleton-63e36fdd.js";import"./keyboard_shortcut-9b5f6ba0.js";import"./root_layout-e3807098.js";import{D as L}from"./icon-9ba5a5ca.js";import"./stack-d47e2c75.js";import"./DtScroller-f9a35329.js";import"./DtEmojiPicker-728221f2.js";import"./DtDatepicker-09393a09.js";import{D as H}from"./item_layout-6375e0d3.js";import"./combobox_with_popover-a6485ae6.js";import"./combobox_multi_select-2efb2ac7.js";import"./callbar_button-705c1911.js";import"./callbar_button_with_popover-2023c68e.js";import"./contact_info-2720343b.js";import"./top_banner_info-cd1b7e46.js";import"./ivr_node-26c5ebca.js";import"./grouped_chip-623cd424.js";import"./settings_menu_button-8243cb24.js";import"./general_row-0e41c947.js";import"./group_row-4ad2a87f.js";import"./contact_row-92ea1b3c.js";import"./unread_pill-8672d078.js";import"./feed_item_row-6f485e20.js";import"./time_pill-7a03ba79.js";import"./emoji_row-2bb1a9b9.js";import"./callbox-17b1dcfa.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";const y={default:"dt-feed-item-pill--border-default",ai:"dt-feed-item-pill--border-ai",critical:"dt-feed-item-pill--border-critical"};const K={name:"ListSection",components:{vnodes:{name:"vnodes",render:e=>e.$attrs.vnodes},DtButton:T},props:{id:{type:String,default(){return q.getUniqueString()}},header:{type:String,default:null},separator:{type:Boolean,default:!1},maxDisplayed:{type:Number,default:0},textMore:{type:String,default:"Show more"},textLess:{type:String,default:"Show less"}},data(){return{showAll:!1}},computed:{isCollapsible(){return!(this.maxDisplayed===0||this.itemCount<=this.maxDisplayed)},showMoreLessText(){return this.showAll?this.textLess:this.textMore},hiddenCount(){return this.itemCount-this.displayedItems.length},defaultSlotItems(){return Array.isArray(this.$slots.default()[0].children)?this.$slots.default()[0].children:this.$slots.default()},itemCount(){return this.defaultSlotItems.length},displayedItems(){var e;return(e=this.defaultSlotItems)==null?void 0:e.filter((t,o)=>o<=this.maxDisplayed-1)}},methods:{showMoreLessClicked(){this.showAll=!this.showAll}}};K.__docgenInfo={displayName:"ListSection",exportName:"default",description:"",tags:{},props:[{name:"id",type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"header",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"separator",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxDisplayed",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"textMore",type:{name:"string"},defaultValue:{func:!1,value:"'Show more'"}},{name:"textLess",type:{name:"string"},defaultValue:{func:!1,value:"'Show less'"}}],slots:[{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/list_section/list_section.vue"]};const F={name:"DtRecipeFeedItemPill",components:{DtItemLayout:H,DtIcon:L,DtCollapsible:j},props:{iconName:{type:String,default:()=>""},title:{type:String,default:()=>""},wrapperClass:{type:[String,Array,Object],default:""},buttonClass:{type:[String,Array,Object],default:""},ariaLabel:{type:String,required:!0},toggleable:{type:Boolean,default:()=>!0},borderColor:{type:String,default:"default",validator:e=>Object.keys(y).includes(e)}},data(){return{hover:!1,expanded:!1}},computed:{computedIcon(){return this.toggleable&&this.hover?this.expanded?"chevron-down":"chevron-right":this.iconName},toggleableClass(){return this.toggleable?"d-c-pointer":""},borderClass(){return y[this.borderColor]}},methods:{onClick(){this.toggleable&&(this.expanded=!this.expanded)}}},Q={class:"d-p8 d-bgc-secondary"},W=["aria-label"],X={class:"d-fw-bold"},Y={class:"d-jc-center d-d-flex"};function Z(e,t,o,O,l,n){const f=i("dt-icon"),g=i("dt-item-layout"),b=i("dt-collapsible");return V(),E("div",{class:_(["dt-feed-item-pill--border",n.borderClass,o.wrapperClass])},[r("div",Q,[u(b,{open:l.expanded},{anchor:a(()=>[r("button",{"aria-label":o.ariaLabel,"data-qa":"dt-feed-item-pill",class:_(["d-baw0 d-bgc-moderate d-bar-pill d-w100p d-ta-left d-btn--circle",n.toggleableClass,o.buttonClass]),onFocusin:t[0]||(t[0]=s=>l.hover=!0),onFocusout:t[1]||(t[1]=s=>l.hover=!1),onMouseenter:t[2]||(t[2]=s=>l.hover=!0),onMouseleave:t[3]||(t[3]=s=>l.hover=!1),onClick:t[4]||(t[4]=(...s)=>n.onClick&&n.onClick(...s))},[u(g,{class:"d-w100p d-p8"},{left:a(()=>[u(f,{size:"300",class:"dt-feed-item-pill--icon d-pr8","data-qa":"dt-feed-item-pill-icon",name:n.computedIcon},null,8,["name"])]),subtitle:a(()=>[c(e.$slots,"subtitle",{},void 0,!0)]),bottom:a(()=>[c(e.$slots,"bottom",{},void 0,!0)]),right:a(()=>[c(e.$slots,"right",{},void 0,!0)]),default:a(()=>[r("span",X,z(o.title),1)]),_:3})],42,W)]),content:a(()=>[r("div",Y,[c(e.$slots,"content",{},void 0,!0)])]),_:3},8,["open"])])],2)}const A=$(F,[["render",Z],["__scopeId","data-v-59051987"]]);F.__docgenInfo={displayName:"DtRecipeFeedItemPill",exportName:"default",description:"",tags:{},props:[{name:"iconName",description:"Accepts a DtIcon name to be shown in the left",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"title",description:"Bolded primary text",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"wrapperClass",description:"Additional styling around the pill",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"buttonClass",description:"Additional styling for the pill",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"ariaLabel",description:"Aria label for feed pill",type:{name:"string"},required:!0},{name:"toggleable",description:"Sets whether the pill can be toggled (Icon changing on hover, expanding and collapsing, pointer)",type:{name:"boolean"},defaultValue:{func:!0,value:"() => true"}},{name:"borderColor",description:"Callbox border color",tags:{},values:["default","ai","critical"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}}],slots:[{name:"subtitle"},{name:"bottom"},{name:"right"},{name:"content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill.vue"]};const P={name:"DtRecipeFeedItemPillDefault",components:{DtRecipeFeedItemPill:A,DtButton:T,DtIcon:L}},ee=r("span",{class:"d-fc-tertiary d-fs-100"},"8 people joined",-1),te={class:"d-pr16"},ae=r("span",{class:"d-p16"}," The agent from Dialpad called to follow up on a support ticket that Jeff was handling for them regarding Dialpad CTI. They apologized for calling outside of the requested time and expressed that they had asked the team to look into the issue and would email them after the call. ",-1);function oe(e,t,o,O,l,n){const f=i("dt-icon"),g=i("dt-button"),b=i("dt-recipe-feed-item-pill");return V(),G(b,{"icon-name":e.$attrs.iconName,title:e.$attrs.title,"wrapper-class":e.$attrs.wrapperClass,"button-class":e.$attrs.buttonClass,"border-color":e.$attrs.borderColor,"aria-label":e.$attrs.ariaLabel,toggleable:e.$attrs.toggleable},{subtitle:a(()=>[J(" Last 43 minutes - Ended at 5:04pm ")]),bottom:a(()=>[ee]),right:a(()=>[r("div",te,[u(g,{"aria-label":"Open external link",kind:"muted",importance:"clear",circle:!0,onClick:t[0]||(t[0]=U(()=>{},["stop"]))},{icon:a(()=>[u(f,{name:"external-link",size:"300"})]),_:1})])]),content:a(()=>[ae]),_:1},8,["icon-name","title","wrapper-class","button-class","border-color","aria-label","toggleable"])}const re=$(P,[["render",oe]]);P.__docgenInfo={displayName:"DtRecipeFeedItemPillDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill_default.story.vue"]};const B={},M={subtitle:{control:"text",table:{type:{summary:"VNode"}}},bottom:{control:"text",table:{type:{summary:"VNode"}}},right:{control:"text",table:{type:{summary:"VNode"}}},content:{control:"text",table:{type:{summary:"VNode"}}}},le={title:"Recipes/Conversation View/Feed Item Pill",component:A,args:B,argTypes:M,excludeStories:/.*Data$/},h=e=>R(e,re),d={render:h,parameters:{a11y:{disable:!0}},args:{iconName:"video",title:"This meeting has ended",ariaLabel:"Click to expand",buttonClass:"",toggleable:!0,wrapperClass:"d-w628",borderColor:"default"}},p={render:h,parameters:{options:{showPanel:!1},controls:{disable:!0},a11y:{disable:!0}},args:{iconName:"video",title:"This meeting has ended",wrapperClass:"d-w628",buttonClass:"",ariaLabel:"Click to expand",toggleable:!0,borderColor:"ai"}},m={render:h,parameters:{options:{showPanel:!1},controls:{disable:!0},a11y:{disable:!0}},args:{iconName:"video",title:"This meeting has ended",wrapperClass:"d-w628",expanded:!1,ariaLabel:"Click to expand",toggleable:!1,borderColor:"critical"}};var v,C,w;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(S=(x=p.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var N,k,I;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(I=(k=m.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const ne=["argsData","argTypesData","Default","AiBorderGradient","NoToggleVariant"],vt=Object.freeze(Object.defineProperty({__proto__:null,AiBorderGradient:p,Default:d,NoToggleVariant:m,__namedExportsOrder:ne,argTypesData:M,argsData:B,default:le},Symbol.toStringTag,{value:"Module"}));export{p as A,d as D,vt as F,m as N};
//# sourceMappingURL=feed_item_pill.stories-9925d744.js.map
