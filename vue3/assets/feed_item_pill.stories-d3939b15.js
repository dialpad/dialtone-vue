import{c as R}from"./storybook_utils-3d124f1b.js";import"./avatar-2ff91fa9.js";import"./badge-04e85ae2.js";import"./banner-0cbc4527.js";import"./breadcrumbs-e943f2e1.js";import"./breadcrumb_item-bfcb158e.js";import{D as T}from"./button-0ee7bf53.js";import"./button_group-daca16fc.js";import"./card-142503fd.js";import"./codeblock-430be6d3.js";import"./combobox-0c29b21a.js";import{D as j}from"./collapsible-876c065c.js";import"./dropdown_separator-8c464f6e.js";import"./image_viewer-83b66d07.js";import"./input-9cfa0723.js";import"./input_group-20c772ca.js";import"./modal-cc3f18b2.js";import"./lazy_show-01e22690.js";import{u as q}from"./utils-810cfe6f.js";import{u as i,p as E,e as r,y as u,w as a,k as _,o as V,f as c,A as z,b as G,z as J,J as U}from"./vue.esm-bundler-29004354.js";import"./list_item-c9fc9067.js";import"./list_item_group-63125087.js";import"./link-eb563172.js";import"./notice-7321a005.js";import"./pagination-f52b63c0.js";import"./popover-df1a2ed1.js";import"./presence-c56ebcc9.js";import"./radio-f423e31f.js";import"./radio_group-10e3e6e7.js";import"./tab_group-203d7ffb.js";import"./tab-26661188.js";import"./tab_panel-8501d22b.js";import"./validation_messages-44c39e35.js";import"./checkbox-736ceb93.js";import"./checkbox_group-1fbc5454.js";import"./chip-ade361fc.js";import"./select_menu-fc6a13d3.js";import"./toast-9988bb77.js";import"./toggle-c371adb9.js";import"./tooltip-2c164916.js";import"./skeleton-121fe313.js";import"./keyboard_shortcut-fade352a.js";import"./root_layout-44e8d29a.js";import{D as L}from"./icon-bd97a3a1.js";import"./stack-9b99da45.js";import"./DtScroller-0dbf778b.js";import"./DtEmojiPicker-0fba6d99.js";import"./DtDatepicker-49d480a6.js";import{D as H}from"./item_layout-5775cee2.js";import"./combobox_with_popover-7d9a2652.js";import"./combobox_multi_select-f5a87714.js";import"./callbar_button-6d3f50d1.js";import"./callbar_button_with_popover-8d09115a.js";import"./contact_info-f78de13b.js";import"./top_banner_info-5861fa43.js";import"./ivr_node-1cd0387e.js";import"./grouped_chip-a9256e12.js";import"./settings_menu_button-96d442b9.js";import"./general_row-7d2d3285.js";import"./group_row-9a7b3dc4.js";import"./contact_row-d04ce2e6.js";import"./unread_pill-7544516b.js";import"./feed_item_row-e341ab45.js";import"./time_pill-93cb47d6.js";import"./emoji_row-d2d8d3b5.js";import"./attachment_carousel-f3154feb.js";import"./message_input-a59a2f9d.js";import"./callbox-3f244fa2.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";const y={default:"dt-feed-item-pill--border-default",ai:"dt-feed-item-pill--border-ai",critical:"dt-feed-item-pill--border-critical"};const K={name:"ListSection",components:{vnodes:{name:"vnodes",render:e=>e.$attrs.vnodes},DtButton:T},props:{id:{type:String,default(){return q.getUniqueString()}},header:{type:String,default:null},separator:{type:Boolean,default:!1},maxDisplayed:{type:Number,default:0},textMore:{type:String,default:"Show more"},textLess:{type:String,default:"Show less"}},data(){return{showAll:!1}},computed:{isCollapsible(){return!(this.maxDisplayed===0||this.itemCount<=this.maxDisplayed)},showMoreLessText(){return this.showAll?this.textLess:this.textMore},hiddenCount(){return this.itemCount-this.displayedItems.length},defaultSlotItems(){return Array.isArray(this.$slots.default()[0].children)?this.$slots.default()[0].children:this.$slots.default()},itemCount(){return this.defaultSlotItems.length},displayedItems(){var e;return(e=this.defaultSlotItems)==null?void 0:e.filter((t,o)=>o<=this.maxDisplayed-1)}},methods:{showMoreLessClicked(){this.showAll=!this.showAll}}};K.__docgenInfo={displayName:"ListSection",exportName:"default",description:"",tags:{},props:[{name:"id",type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"header",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"separator",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxDisplayed",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"textMore",type:{name:"string"},defaultValue:{func:!1,value:"'Show more'"}},{name:"textLess",type:{name:"string"},defaultValue:{func:!1,value:"'Show less'"}}],slots:[{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/list_section/list_section.vue"]};const F={name:"DtRecipeFeedItemPill",components:{DtItemLayout:H,DtIcon:L,DtCollapsible:j},props:{iconName:{type:String,default:()=>""},title:{type:String,default:()=>""},wrapperClass:{type:[String,Array,Object],default:""},buttonClass:{type:[String,Array,Object],default:""},ariaLabel:{type:String,required:!0},toggleable:{type:Boolean,default:()=>!0},borderColor:{type:String,default:"default",validator:e=>Object.keys(y).includes(e)}},data(){return{hover:!1,expanded:!1}},computed:{computedIcon(){return this.toggleable&&this.hover?this.expanded?"chevron-down":"chevron-right":this.iconName},toggleableClass(){return this.toggleable?"d-c-pointer":""},borderClass(){return y[this.borderColor]}},methods:{onClick(){this.toggleable&&(this.expanded=!this.expanded)}}},Q={class:"d-p8 d-bgc-secondary"},W=["aria-label"],X={class:"d-fw-bold"},Y={class:"d-jc-center d-d-flex"};function Z(e,t,o,O,l,n){const f=i("dt-icon"),g=i("dt-item-layout"),b=i("dt-collapsible");return V(),E("div",{class:_(["dt-feed-item-pill--border",n.borderClass,o.wrapperClass])},[r("div",Q,[u(b,{open:l.expanded},{anchor:a(()=>[r("button",{"aria-label":o.ariaLabel,"data-qa":"dt-feed-item-pill",class:_(["d-baw0 d-bgc-moderate d-bar-pill d-w100p d-ta-left d-btn--circle",n.toggleableClass,o.buttonClass]),onFocusin:t[0]||(t[0]=s=>l.hover=!0),onFocusout:t[1]||(t[1]=s=>l.hover=!1),onMouseenter:t[2]||(t[2]=s=>l.hover=!0),onMouseleave:t[3]||(t[3]=s=>l.hover=!1),onClick:t[4]||(t[4]=(...s)=>n.onClick&&n.onClick(...s))},[u(g,{class:"d-w100p d-p8"},{left:a(()=>[u(f,{size:"300",class:"dt-feed-item-pill--icon d-pr8","data-qa":"dt-feed-item-pill-icon",name:n.computedIcon},null,8,["name"])]),subtitle:a(()=>[c(e.$slots,"subtitle",{},void 0,!0)]),bottom:a(()=>[c(e.$slots,"bottom",{},void 0,!0)]),right:a(()=>[c(e.$slots,"right",{},void 0,!0)]),default:a(()=>[r("span",X,z(o.title),1)]),_:3})],42,W)]),content:a(()=>[r("div",Y,[c(e.$slots,"content",{},void 0,!0)])]),_:3},8,["open"])])],2)}const A=$(F,[["render",Z],["__scopeId","data-v-59051987"]]);F.__docgenInfo={displayName:"DtRecipeFeedItemPill",exportName:"default",description:"",tags:{},props:[{name:"iconName",description:"Accepts a DtIcon name to be shown in the left",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"title",description:"Bolded primary text",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"wrapperClass",description:"Additional styling around the pill",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"buttonClass",description:"Additional styling for the pill",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"ariaLabel",description:"Aria label for feed pill",type:{name:"string"},required:!0},{name:"toggleable",description:"Sets whether the pill can be toggled (Icon changing on hover, expanding and collapsing, pointer)",type:{name:"boolean"},defaultValue:{func:!0,value:"() => true"}},{name:"borderColor",description:"Callbox border color",tags:{},values:["default","ai","critical"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}}],slots:[{name:"subtitle"},{name:"bottom"},{name:"right"},{name:"content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill.vue"]};const P={name:"DtRecipeFeedItemPillDefault",components:{DtRecipeFeedItemPill:A,DtButton:T,DtIcon:L}},ee=r("span",{class:"d-fc-tertiary d-fs-100"},"8 people joined",-1),te={class:"d-pr16"},ae=r("span",{class:"d-p16"}," The agent from Dialpad called to follow up on a support ticket that Jeff was handling for them regarding Dialpad CTI. They apologized for calling outside of the requested time and expressed that they had asked the team to look into the issue and would email them after the call. ",-1);function oe(e,t,o,O,l,n){const f=i("dt-icon"),g=i("dt-button"),b=i("dt-recipe-feed-item-pill");return V(),G(b,{"icon-name":e.$attrs.iconName,title:e.$attrs.title,"wrapper-class":e.$attrs.wrapperClass,"button-class":e.$attrs.buttonClass,"border-color":e.$attrs.borderColor,"aria-label":e.$attrs.ariaLabel,toggleable:e.$attrs.toggleable},{subtitle:a(()=>[J(" Last 43 minutes - Ended at 5:04pm ")]),bottom:a(()=>[ee]),right:a(()=>[r("div",te,[u(g,{"aria-label":"Open external link",kind:"muted",importance:"clear",circle:!0,onClick:t[0]||(t[0]=U(()=>{},["stop"]))},{icon:a(()=>[u(f,{name:"external-link",size:"300"})]),_:1})])]),content:a(()=>[ae]),_:1},8,["icon-name","title","wrapper-class","button-class","border-color","aria-label","toggleable"])}const re=$(P,[["render",oe]]);P.__docgenInfo={displayName:"DtRecipeFeedItemPillDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill_default.story.vue"]};const B={},M={subtitle:{control:"text",table:{type:{summary:"VNode"}}},bottom:{control:"text",table:{type:{summary:"VNode"}}},right:{control:"text",table:{type:{summary:"VNode"}}},content:{control:"text",table:{type:{summary:"VNode"}}}},le={title:"Recipes/Conversation View/Feed Item Pill",component:A,args:B,argTypes:M,excludeStories:/.*Data$/},h=e=>R(e,re),d={render:h,parameters:{a11y:{disable:!0}},args:{iconName:"video",title:"This meeting has ended",ariaLabel:"Click to expand",buttonClass:"",toggleable:!0,wrapperClass:"d-w628",borderColor:"default"}},p={render:h,parameters:{options:{showPanel:!1},controls:{disable:!0},a11y:{disable:!0}},args:{iconName:"video",title:"This meeting has ended",wrapperClass:"d-w628",buttonClass:"",ariaLabel:"Click to expand",toggleable:!0,borderColor:"ai"}},m={render:h,parameters:{options:{showPanel:!1},controls:{disable:!0},a11y:{disable:!0}},args:{iconName:"video",title:"This meeting has ended",wrapperClass:"d-w628",expanded:!1,ariaLabel:"Click to expand",toggleable:!1,borderColor:"critical"}};var v,C,w;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(k=m.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const ne=["argsData","argTypesData","Default","AiBorderGradient","NoToggleVariant"],wt=Object.freeze(Object.defineProperty({__proto__:null,AiBorderGradient:p,Default:d,NoToggleVariant:m,__namedExportsOrder:ne,argTypesData:M,argsData:B,default:le},Symbol.toStringTag,{value:"Module"}));export{p as A,d as D,wt as F,m as N};
//# sourceMappingURL=feed_item_pill.stories-d3939b15.js.map
