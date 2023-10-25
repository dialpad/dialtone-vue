import{c as R}from"./storybook_utils-fb032280.js";import"./avatar-49192ca2.js";import"./badge-0d59b071.js";import"./banner-f4c009dd.js";import"./breadcrumbs-728ae1c8.js";import"./breadcrumb_item-0e52ce8b.js";import{D as T}from"./button-a4e86900.js";import"./button_group-d672ff79.js";import"./card-ee965a94.js";import"./codeblock-bd02c79f.js";import"./combobox-5ab594fb.js";import{D as j}from"./collapsible-76006562.js";import"./dropdown_separator-38de3dfa.js";import"./image_viewer-f3752466.js";import"./input-4e1df1a4.js";import"./input_group-b388a219.js";import"./modal-1c8594d6.js";import"./lazy_show-94c78d4e.js";import{u as q}from"./utils-eec883fe.js";import{u as i,p as E,e as r,y as u,w as a,k as _,o as V,g as c,A as z,b as G,z as J,J as U}from"./vue.esm-bundler-5f4c5b12.js";import"./list_item-6a9022c9.js";import"./list_item_group-635e86b2.js";import"./link-3db74e68.js";import"./notice-3d4567ca.js";import"./pagination-c43ddaf0.js";import"./popover-5b829eec.js";import"./presence-e6ad3d94.js";import"./radio-da0a289b.js";import"./radio_group-5e838f6a.js";import"./tab_group-bb410075.js";import"./tab-d4512b7b.js";import"./tab_panel-acbce633.js";import"./validation_messages-72ad755a.js";import"./checkbox-95243440.js";import"./checkbox_group-4e165407.js";import"./chip-88bc52c2.js";import"./select_menu-5e2d6a00.js";import"./toast-bc93726b.js";import"./toggle-907d2420.js";import"./tooltip-0a7b46b1.js";import"./skeleton-7917f489.js";import"./keyboard_shortcut-07ab5e92.js";import"./root_layout-96666d66.js";import{D as L}from"./icon-a9416a2a.js";import"./stack-faa2977a.js";import"./DtScroller-3d33c0f1.js";import"./DtEmojiPicker-0e4dda42.js";import"./DtDatepicker-38b5cee5.js";import{D as H}from"./item_layout-51f38246.js";import"./combobox_with_popover-0b5fcb81.js";import"./combobox_multi_select-7b61e5cf.js";import"./callbar_button-59a4c191.js";import"./callbar_button_with_popover-afa6cf85.js";import"./contact_info-fba03564.js";import"./top_banner_info-4f62ae70.js";import"./ivr_node-f64b59e4.js";import"./grouped_chip-79368aba.js";import"./settings_menu_button-4410cd53.js";import"./general_row-3e3e1821.js";import"./group_row-e12317c4.js";import"./contact_row-351768bb.js";import"./unread_pill-98e97ae1.js";import"./feed_item_row-e8e1ffd8.js";import"./time_pill-efadde70.js";import"./emoji_row-e20c61ce.js";import"./attachment_carousel-40fd5ff4.js";import"./message_input-1ae6c43a.js";import"./callbox-01d008c0.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";const y={default:"dt-feed-item-pill--border-default",ai:"dt-feed-item-pill--border-ai",critical:"dt-feed-item-pill--border-critical"};const K={name:"ListSection",components:{vnodes:{name:"vnodes",render:e=>e.$attrs.vnodes},DtButton:T},props:{id:{type:String,default(){return q.getUniqueString()}},header:{type:String,default:null},separator:{type:Boolean,default:!1},maxDisplayed:{type:Number,default:0},textMore:{type:String,default:"Show more"},textLess:{type:String,default:"Show less"}},data(){return{showAll:!1}},computed:{isCollapsible(){return!(this.maxDisplayed===0||this.itemCount<=this.maxDisplayed)},showMoreLessText(){return this.showAll?this.textLess:this.textMore},hiddenCount(){return this.itemCount-this.displayedItems.length},defaultSlotItems(){return Array.isArray(this.$slots.default()[0].children)?this.$slots.default()[0].children:this.$slots.default()},itemCount(){return this.defaultSlotItems.length},displayedItems(){var e;return(e=this.defaultSlotItems)==null?void 0:e.filter((t,o)=>o<=this.maxDisplayed-1)}},methods:{showMoreLessClicked(){this.showAll=!this.showAll}}};K.__docgenInfo={displayName:"ListSection",exportName:"default",description:"",tags:{},props:[{name:"id",type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"header",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"separator",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxDisplayed",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"textMore",type:{name:"string"},defaultValue:{func:!1,value:"'Show more'"}},{name:"textLess",type:{name:"string"},defaultValue:{func:!1,value:"'Show less'"}}],slots:[{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/list_section/list_section.vue"]};const F={name:"DtRecipeFeedItemPill",components:{DtItemLayout:H,DtIcon:L,DtCollapsible:j},props:{iconName:{type:String,default:()=>""},title:{type:String,default:()=>""},wrapperClass:{type:[String,Array,Object],default:""},buttonClass:{type:[String,Array,Object],default:""},ariaLabel:{type:String,required:!0},toggleable:{type:Boolean,default:()=>!0},borderColor:{type:String,default:"default",validator:e=>Object.keys(y).includes(e)}},data(){return{hover:!1,expanded:!1}},computed:{computedIcon(){return this.toggleable&&this.hover?this.expanded?"chevron-down":"chevron-right":this.iconName},toggleableClass(){return this.toggleable?"d-c-pointer":""},borderClass(){return y[this.borderColor]}},methods:{onClick(){this.toggleable&&(this.expanded=!this.expanded)}}},Q={class:"d-p8 d-bgc-secondary"},W=["aria-label"],X={class:"d-fw-bold"},Y={class:"d-jc-center d-d-flex"};function Z(e,t,o,O,l,n){const f=i("dt-icon"),g=i("dt-item-layout"),b=i("dt-collapsible");return V(),E("div",{class:_(["dt-feed-item-pill--border",n.borderClass,o.wrapperClass])},[r("div",Q,[u(b,{open:l.expanded},{anchor:a(()=>[r("button",{"aria-label":o.ariaLabel,"data-qa":"dt-feed-item-pill",class:_(["d-baw0 d-bgc-moderate d-bar-pill d-w100p d-ta-left d-btn--circle",n.toggleableClass,o.buttonClass]),onFocusin:t[0]||(t[0]=s=>l.hover=!0),onFocusout:t[1]||(t[1]=s=>l.hover=!1),onMouseenter:t[2]||(t[2]=s=>l.hover=!0),onMouseleave:t[3]||(t[3]=s=>l.hover=!1),onClick:t[4]||(t[4]=(...s)=>n.onClick&&n.onClick(...s))},[u(g,{class:"d-w100p d-p8"},{left:a(()=>[u(f,{size:"300",class:"dt-feed-item-pill--icon d-pr8","data-qa":"dt-feed-item-pill-icon",name:n.computedIcon},null,8,["name"])]),subtitle:a(()=>[c(e.$slots,"subtitle",{},void 0,!0)]),bottom:a(()=>[c(e.$slots,"bottom",{},void 0,!0)]),right:a(()=>[c(e.$slots,"right",{},void 0,!0)]),default:a(()=>[r("span",X,z(o.title),1)]),_:3})],42,W)]),content:a(()=>[r("div",Y,[c(e.$slots,"content",{},void 0,!0)])]),_:3},8,["open"])])],2)}const A=$(F,[["render",Z],["__scopeId","data-v-5ab2a1a5"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill.vue"]]);F.__docgenInfo={displayName:"DtRecipeFeedItemPill",exportName:"default",description:"",tags:{},props:[{name:"iconName",description:"Accepts a DtIcon name to be shown in the left",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"title",description:"Bolded primary text",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"wrapperClass",description:"Additional styling around the pill",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"buttonClass",description:"Additional styling for the pill",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"ariaLabel",description:"Aria label for feed pill",type:{name:"string"},required:!0},{name:"toggleable",description:"Sets whether the pill can be toggled (Icon changing on hover, expanding and collapsing, pointer)",type:{name:"boolean"},defaultValue:{func:!0,value:"() => true"}},{name:"borderColor",description:"Callbox border color",tags:{},values:["default","ai","critical"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}}],slots:[{name:"subtitle"},{name:"bottom"},{name:"right"},{name:"content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill.vue"]};const P={name:"DtRecipeFeedItemPillDefault",components:{DtRecipeFeedItemPill:A,DtButton:T,DtIcon:L}},ee=r("span",{class:"d-fc-tertiary d-fs-100"},"8 people joined",-1),te={class:"d-pr16"},ae=r("span",{class:"d-p16"}," The agent from Dialpad called to follow up on a support ticket that Jeff was handling for them regarding Dialpad CTI. They apologized for calling outside of the requested time and expressed that they had asked the team to look into the issue and would email them after the call. ",-1);function oe(e,t,o,O,l,n){const f=i("dt-icon"),g=i("dt-button"),b=i("dt-recipe-feed-item-pill");return V(),G(b,{"icon-name":e.$attrs.iconName,title:e.$attrs.title,"wrapper-class":e.$attrs.wrapperClass,"button-class":e.$attrs.buttonClass,"border-color":e.$attrs.borderColor,"aria-label":e.$attrs.ariaLabel,toggleable:e.$attrs.toggleable},{subtitle:a(()=>[J(" Last 43 minutes - Ended at 5:04pm ")]),bottom:a(()=>[ee]),right:a(()=>[r("div",te,[u(g,{"aria-label":"Open external link",kind:"muted",importance:"clear",circle:!0,onClick:t[0]||(t[0]=U(()=>{},["stop"]))},{icon:a(()=>[u(f,{name:"external-link",size:"300"})]),_:1})])]),content:a(()=>[ae]),_:1},8,["icon-name","title","wrapper-class","button-class","border-color","aria-label","toggleable"])}const re=$(P,[["render",oe],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill_default.story.vue"]]);P.__docgenInfo={displayName:"DtRecipeFeedItemPillDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill_default.story.vue"]};const B={},M={subtitle:{control:"text",table:{type:{summary:"VNode"}}},bottom:{control:"text",table:{type:{summary:"VNode"}}},right:{control:"text",table:{type:{summary:"VNode"}}},content:{control:"text",table:{type:{summary:"VNode"}}}},le={title:"Recipes/Conversation View/Feed Item Pill",component:A,args:B,argTypes:M,excludeStories:/.*Data$/},h=e=>R(e,re),d={render:h,parameters:{a11y:{disable:!0}},args:{iconName:"video",title:"This meeting has ended",ariaLabel:"Click to expand",buttonClass:"",toggleable:!0,wrapperClass:"d-w628",borderColor:"default"}},p={render:h,parameters:{options:{showPanel:!1},controls:{disable:!0},a11y:{disable:!0}},args:{iconName:"video",title:"This meeting has ended",wrapperClass:"d-w628",buttonClass:"",ariaLabel:"Click to expand",toggleable:!0,borderColor:"ai"}},m={render:h,parameters:{options:{showPanel:!1},controls:{disable:!0},a11y:{disable:!0}},args:{iconName:"video",title:"This meeting has ended",wrapperClass:"d-w628",expanded:!1,ariaLabel:"Click to expand",toggleable:!1,borderColor:"critical"}};var v,C,w;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(N=m.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};const ne=["argsData","argTypesData","Default","AiBorderGradient","NoToggleVariant"],wt=Object.freeze(Object.defineProperty({__proto__:null,AiBorderGradient:p,Default:d,NoToggleVariant:m,__namedExportsOrder:ne,argTypesData:M,argsData:B,default:le},Symbol.toStringTag,{value:"Module"}));export{p as A,d as D,wt as F,m as N};
//# sourceMappingURL=feed_item_pill.stories-43fc265c.js.map
