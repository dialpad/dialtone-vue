import{c as B}from"./storybook_utils-87f6670b.js";import"./avatar-48044181.js";import"./badge-4c6ba43d.js";import"./banner-30592b48.js";import"./breadcrumbs-1743a78b.js";import{D as N}from"./button-1062b4f5.js";import"./button_group-95c22d26.js";import"./card-a19ae903.js";import"./codeblock-332327a6.js";import"./combobox-84392b1f.js";import{D as M}from"./collapsible-f88ad1a9.js";import"./dropdown_separator-f999c8e5.js";import"./image_viewer-f496da2f.js";import"./input-30bafcb3.js";import"./input_group-73f181cd.js";import"./modal-31836e8c.js";import"./lazy_show-a3e783ec.js";import{u as O}from"./utils-48d15f2c.js";import{k as m,d as R,e as u,l as c,m as a,n as g,o as j,x as p,q,t as E}from"./vue.esm-bundler-a9a971fb.js";import"./list_item-2f1eebc0.js";import"./list_item_group-677f62fb.js";import"./link-a15aa1b0.js";import"./notice-c07bf1d0.js";import"./pagination-4014566c.js";import"./popover-62abc57c.js";import"./presence-34bc2266.js";import"./radio-7d08c280.js";import"./radio_group-ca1188b6.js";import"./tab_group-2403e0a6.js";import"./tab-00a3befe.js";import"./tab_panel-0ba22784.js";import"./validation_messages-93b0b770.js";import"./checkbox-ced18631.js";import"./checkbox_group-ab427914.js";import"./chip-99e66a4e.js";import"./select_menu-76820c8c.js";import"./toast-af0fb7bb.js";import"./toggle-a31d3765.js";import"./tooltip-a303adad.js";import"./skeleton-dbfa63a7.js";import"./keyboard_shortcut-6d4cce76.js";import"./root_layout-0f8916bc.js";import{D as I}from"./icon-f7e2321d.js";import"./stack-9775095b.js";import"./DtScroller-6d13f1fd.js";import"./DtEmojiPicker-4260f3d7.js";import"./DtDatepicker-0923646c.js";import{D as $}from"./item_layout-1d3e99ec.js";import"./combobox_with_popover-4c000170.js";import"./combobox_multi_select-3d222596.js";import"./callbar_button-90764072.js";import"./callbar_button_with_popover-bf63f0e4.js";import"./contact_info-186dfa8c.js";import"./top_banner_info-6a37d187.js";import"./ivr_node-9a671df1.js";import"./grouped_chip-ec8574db.js";import"./settings_menu_button-a5553427.js";import"./general_row-49d47c6c.js";import"./group_row-de3fad9d.js";import"./contact_row-30521762.js";import"./unread_pill-67208113.js";import"./feed_item_row-555dc95d.js";import"./time_pill-ef3d54bd.js";import"./emoji_row-f7bcfc9e.js";import"./callbox-d18419da.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";const b={default:"dt-feed-item-pill--border-default",ai:"dt-feed-item-pill--border-ai",critical:"dt-feed-item-pill--border-critical"};const G={name:"ListSection",components:{vnodes:{name:"vnodes",render:e=>e.$attrs.vnodes},DtButton:N},props:{id:{type:String,default(){return O.getUniqueString()}},header:{type:String,default:null},separator:{type:Boolean,default:!1},maxDisplayed:{type:Number,default:0},textMore:{type:String,default:"Show more"},textLess:{type:String,default:"Show less"}},data(){return{showAll:!1}},computed:{isCollapsible(){return!(this.maxDisplayed===0||this.itemCount<=this.maxDisplayed)},showMoreLessText(){return this.showAll?this.textLess:this.textMore},hiddenCount(){return this.itemCount-this.displayedItems.length},defaultSlotItems(){return Array.isArray(this.$slots.default()[0].children)?this.$slots.default()[0].children:this.$slots.default()},itemCount(){return this.defaultSlotItems.length},displayedItems(){var e;return(e=this.defaultSlotItems)==null?void 0:e.filter((t,r)=>r<=this.maxDisplayed-1)}},methods:{showMoreLessClicked(){this.showAll=!this.showAll}}};G.__docgenInfo={displayName:"ListSection",exportName:"default",description:"",tags:{},props:[{name:"id",type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"header",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"separator",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxDisplayed",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"textMore",type:{name:"string"},defaultValue:{func:!1,value:"'Show more'"}},{name:"textLess",type:{name:"string"},defaultValue:{func:!1,value:"'Show less'"}}],slots:[{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/list_section/list_section.vue"]};const V={name:"DtRecipeFeedItemPill",components:{DtItemLayout:$,DtIcon:I,DtCollapsible:M},props:{iconName:{type:String,default:()=>""},title:{type:String,default:()=>""},wrapperClass:{type:[String,Array,Object],default:""},buttonClass:{type:[String,Array,Object],default:""},ariaLabel:{type:String,required:!0},toggleable:{type:Boolean,default:()=>!0},borderColor:{type:String,default:"default",validator:e=>Object.keys(b).includes(e)}},data(){return{hover:!1,expanded:!1}},computed:{computedIcon(){return this.toggleable&&this.hover?this.expanded?"chevron-down":"chevron-right":this.iconName},toggleableClass(){return this.toggleable?"d-c-pointer":""},borderClass(){return b[this.borderColor]}},methods:{onClick(){this.toggleable&&(this.expanded=!this.expanded)}}},U={class:"d-p8 d-bgc-secondary"},H=["aria-label"],J={class:"d-jc-center d-d-flex"};function K(e,t,r,Y,o,l){const F=m("dt-icon"),A=m("dt-item-layout"),P=m("dt-collapsible");return j(),R("div",{class:g(["dt-feed-item-pill--border",l.borderClass,r.wrapperClass])},[u("div",U,[c(P,{open:o.expanded},{anchor:a(()=>[u("button",{"aria-label":r.ariaLabel,"data-qa":"dt-feed-item-pill",class:g(["d-baw0 d-bgc-moderate d-bar-pill d-w100p d-ta-left d-btn--circle",l.toggleableClass,r.buttonClass]),onFocusin:t[0]||(t[0]=n=>o.hover=!0),onFocusout:t[1]||(t[1]=n=>o.hover=!1),onMouseenter:t[2]||(t[2]=n=>o.hover=!0),onMouseleave:t[3]||(t[3]=n=>o.hover=!1),onClick:t[4]||(t[4]=(...n)=>l.onClick&&l.onClick(...n))},[c(A,{class:"d-w100p d-p8"},{left:a(()=>[c(F,{size:"300",class:"dt-feed-item-pill--icon d-pr8","data-qa":"dt-feed-item-pill-icon",name:l.computedIcon},null,8,["name"])]),subtitle:a(()=>[p(e.$slots,"subtitle",{},void 0,!0)]),bottom:a(()=>[p(e.$slots,"bottom",{},void 0,!0)]),right:a(()=>[p(e.$slots,"right",{},void 0,!0)]),default:a(()=>[q(E(r.title)+" ",1)]),_:3})],42,H)]),content:a(()=>[u("div",J,[p(e.$slots,"content",{},void 0,!0)])]),_:3},8,["open"])])],2)}const L=z(V,[["render",K],["__scopeId","data-v-5ab2a1a5"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill.vue"]]);V.__docgenInfo={displayName:"DtRecipeFeedItemPill",exportName:"default",description:"",tags:{},props:[{name:"iconName",description:"Accepts a DtIcon name to be shown in the left",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"title",description:"Bolded primary text",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"wrapperClass",description:"Additional styling around the pill",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"buttonClass",description:"Additional styling for the pill",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"ariaLabel",description:"Aria label for feed pill",type:{name:"string"},required:!0},{name:"toggleable",description:"Sets whether the pill can be toggled (Icon changing on hover, expanding and collapsing, pointer)",type:{name:"boolean"},defaultValue:{func:!0,value:"() => true"}},{name:"borderColor",description:"Callbox border color",tags:{},values:["default","ai","critical"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}}],slots:[{name:"subtitle"},{name:"bottom"},{name:"right"},{name:"content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill.vue"]};const Q={name:"DtRecipeFeedItemPillDefault",components:{DtRecipeFeedItemPill:L,DtButton:N,DtIcon:I}};Q.__docgenInfo={displayName:"DtRecipeFeedItemPillDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/feed_pill/feed_item_pill_default.story.vue"]};const T={},k={subtitle:{control:"text",table:{type:{summary:"VNode"}}},bottom:{control:"text",table:{type:{summary:"VNode"}}},right:{control:"text",table:{type:{summary:"VNode"}}},content:{control:"text",table:{type:{summary:"VNode"}}}},W={title:"Recipes/Conversation View/Feed Item Pill",component:L,args:T,argTypes:k,excludeStories:/.*Data$/},f=(e,{argTypes:t})=>B(e,t),i={render:f,parameters:{a11y:{disable:!0}},args:{iconName:"video",title:"This meeting has ended",ariaLabel:"Click to expand",buttonClass:"",toggleable:!0,wrapperClass:"d-w628",borderColor:"default"}},s={render:f,parameters:{options:{showPanel:!1},controls:{disable:!0},a11y:{disable:!0}},args:{iconName:"video",title:"This meeting has ended",wrapperClass:"d-w628",buttonClass:"",ariaLabel:"Click to expand",toggleable:!0,borderColor:"ai"}},d={render:f,parameters:{options:{showPanel:!1},controls:{disable:!0},a11y:{disable:!0}},args:{iconName:"video",title:"This meeting has ended",wrapperClass:"d-w628",expanded:!1,ariaLabel:"Click to expand",toggleable:!1,borderColor:"critical"}};var h,y,_;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(_=(y=i.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var v,C,w;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(w=(C=s.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var x,D,S;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(S=(D=d.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const X=["argsData","argTypesData","Default","AiBorderGradient","NoToggleVariant"],mt=Object.freeze(Object.defineProperty({__proto__:null,AiBorderGradient:s,Default:i,NoToggleVariant:d,__namedExportsOrder:X,argTypesData:k,argsData:T,default:W},Symbol.toStringTag,{value:"Module"}));export{s as A,i as D,mt as F,d as N};
//# sourceMappingURL=feed_item_pill.stories-d30da0cd.js.map
