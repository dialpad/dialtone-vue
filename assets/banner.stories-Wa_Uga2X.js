import{b as j,c as M,d as q,N as E}from"./notice-U1f5tNf2.js";import{M as A}from"./modal-g8UESVSL.js";import{u as f}from"./utils-E69eXbJV.js";import{S as K}from"./sr_only_close_button-nb9fjC62.js";import{n as N}from"./_plugin-vue2_normalizer-XBmYDgEh.js";import{D as R}from"./button-5wqdSkdq.js";import{D as W}from"./icon-GkF47-VR.js";import{c as G}from"./storybook_utils-XrTpeJKJ.js";import{b as m,c as p}from"./notice.stories-owCIBVwK.js";const J={name:"DtBanner",components:{DtNoticeIcon:j,DtNoticeContent:M,DtNoticeAction:q},mixins:[A,K],props:{titleId:{type:String,default(){return f.getUniqueString()}},contentId:{type:String,default(){return f.getUniqueString()}},title:{type:String,default:""},important:{type:Boolean,default:!1},pinned:{type:Boolean,default:!1},kind:{type:String,default:"base",validate(a){return E.includes(a)}},closeButtonProps:{type:Object,default:()=>({})},hideClose:{type:Boolean,default:!1},hideIcon:{type:Boolean,default:!1},dialogClass:{type:String,default:""},backgroundImage:{type:String,default:""},backgroundSize:{type:String,default:"cover"}},emits:["close"],computed:{role(){return this.important?"alertdialog":"status"},bannerClass(){return["d-banner",{error:"d-banner--error",info:"d-banner--info",success:"d-banner--success",warning:"d-banner--warning",base:"d-banner--base"}[this.kind],{"d-banner--important":this.important,"d-banner--pinned":this.pinned}]},bannerBackgroundImage(){return this.backgroundImage===""?null:`background-image: url(${this.backgroundImage});
              background-size: ${this.backgroundSize};`}},mounted(){this.important&&this.focusFirstElement()},methods:{trapFocus(a){this.important&&this.focusTrappedTabPress(a)}}};var Q=function(){var e=this,t=e._self._c;return t("aside",{class:e.bannerClass,style:e.bannerBackgroundImage,on:{keydown:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"tab",9,s.key,"Tab")?null:e.trapFocus.apply(null,arguments)}}},[t("div",{staticClass:"d-banner__dialog",class:e.dialogClass,attrs:{role:e.role,"aria-labelledby":e.titleId,"aria-describedby":e.contentId}},[e.hideIcon?e._e():t("dt-notice-icon",e._g({attrs:{kind:e.kind}},e.$listeners),[e._t("icon")],2),t("dt-notice-content",e._g({attrs:{"title-id":e.titleId,"content-id":e.contentId,title:e.title},scopedSlots:e._u([{key:"titleOverride",fn:function(){return[e._t("titleOverride")]},proxy:!0}],null,!0)},e.$listeners),[e._t("default")],2),t("dt-notice-action",e._g({attrs:{"hide-close":e.hideClose,"close-button-props":e.closeButtonProps,"visually-hidden-close":e.visuallyHiddenClose,"visually-hidden-close-label":e.visuallyHiddenCloseLabel}},e.$listeners),[e._t("action")],2)],1)])},X=[],L=N(J,Q,X,!1,null,null,null,null);const F=L.exports;L.exports.__docgenInfo={description:`Banners are a type of notice, delivering system and engagement messaging.
These are highly intrusive notices and should be used sparingly and appropriately.`,displayName:"DtBanner",tags:{see:[{description:"https://dialpad.design/components/banner.html",title:"see"}]},exportName:"default",props:[{name:"visuallyHiddenClose",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"If true, a hidden close button is included for screen readers",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"visuallyHiddenCloseLabel",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"Label for the visually hidden close button\nRequired if visuallyHiddenClose is set to `true`",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"titleId",description:`Sets an ID on the title element of the component. Useful for aria-describedby
or aria-labelledby or any other reason you may need an id to refer to the title.`,type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"contentId",description:`Sets an ID on the content element of the component. Useful for aria-describedby
or aria-labelledby or any other reason you may need an id to refer to the content.`,type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"title",description:"Title header of the notice. This can be left blank to remove the title from the notice entirely.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"important",description:`Used in scenarios where the message needs to visually dominate the screen.
This will also change the aria role from status to alertdialog.
and will modally trap the keyboard focus in the dialog as soon as it displays.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"pinned",description:"Pins the banner to the top of the window and pushes all app content down.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"kind",description:"Severity level of the notice, sets the icon and background",tags:{},values:["base","error","info","success","warning"],type:{name:"string"},defaultValue:{func:!1,value:"'base'"}},{name:"closeButtonProps",description:"Props for the notice close button.",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"hideClose",description:"Hides the close button from the notice",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hideIcon",description:"Hides the icon from the notice",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dialogClass",description:"Inner dialog class",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"backgroundImage",description:"Banner background image",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"backgroundSize",description:`Background image size, follows the background-size CSS property values
<a class="d-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-size" target="_blank">
  CSS background-sizes
</a>`,type:{name:"string"},defaultValue:{func:!1,value:"'cover'"}}],events:[{name:"close",description:"Close button click event"}],slots:[{name:"icon",description:"Slot for custom icon"},{name:"titleOverride",description:'Allows you to override the title, only use this if you need to override with something other than text. Otherwise use the "title" prop.'},{name:"default",description:"the main textual content of the banner"},{name:"action",description:"Enter a possible action for the user to take, such as a link to another page"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/modal.js","/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/sr_only_close_button.js","/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner.vue"]};const Y={name:"BannerDefault",components:{DtBanner:F,DtButton:R,DtIcon:W},props:{show:{type:Boolean,default:!1}},data(){return{displayBanner:this.show}},computed:{shouldInvertButton(){return this.$attrs.kind==="base"||this.$attrs.kind==="error"||this.$attrs.kind==="info"},isInverted(){return this.$attrs.important&&this.shouldInvertButton},buttonKind(){return this.isInverted?"inverted":"muted"},linkClass(){return this.isInverted?"d-link--inverted":"d-link--muted"},buttonCloseProps(){return{...this.$attrs.closeButtonProps,kind:this.$attrs.buttonKind,ariaLabel:"Close"}}}};var Z=function(){var e=this,t=e._self._c;return t("div",[t("dt-button",{directives:[{name:"show",rawName:"v-show",value:!e.displayBanner,expression:"!displayBanner"}],on:{click:function(s){e.displayBanner=!0}}},[e._v(" Click to show! ")]),t("dt-banner",{directives:[{name:"show",rawName:"v-show",value:e.displayBanner,expression:"displayBanner"}],class:{"d-ps-sticky":e.show},attrs:{kind:e.$attrs.kind,title:e.$attrs.title,"title-id":e.$attrs.titleId,"content-id":e.$attrs.contentId,important:e.$attrs.important,pinned:e.$attrs.pinned,"hide-close":e.$attrs.hideClose,"close-button-props":e.buttonCloseProps,"hide-icon":e.$attrs.hideIcon,"background-image":e.$attrs.backgroundImage,"background-size":e.$attrs.backgroundSize,"dialog-class":e.$attrs.dialogClass,"visually-hidden-close":e.$attrs.visuallyHiddenClose,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel},on:{close:function(s){e.displayBanner=!1,e.$attrs.onClose(s)}}},[e.$attrs.default?t("span",{domProps:{innerHTML:e._s(e.$attrs.default)}}):t("span",[e._v(" Message body with "),t("a",{staticClass:"d-link",class:e.linkClass,attrs:{href:"#"}},[e._v("a link")]),e._v(". ")]),e.$attrs.action?t("template",{slot:"action"},[t("dt-button",{attrs:{kind:e.buttonKind,importance:"outlined"},on:{click:e.$attrs.onClick}},[e._v(" "+e._s(e.$attrs.action)+" ")])],1):e._e(),e.$attrs.icon?t("template",{slot:"icon"},[t("dt-icon",{attrs:{name:e.$attrs.icon}})],1):e._e(),e.$attrs.titleOverride?t("template",{slot:"titleOverride"},[t("span",{domProps:{innerHTML:e._s(e.$attrs.titleOverride)}})]):e._e()],2)],1)},ee=[],U=N(Y,Z,ee,!1,null,null,null,null);const te=U.exports;U.exports.__docgenInfo={displayName:"BannerDefault",exportName:"default",description:"",tags:{},props:[{name:"show",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner_default.story.vue"]};const ne=""+new URL("dialpad-gradient-TIMLz1v7.png",import.meta.url).href;p.role={table:{disable:!0}};p.titleId={table:{defaultValue:{summary:"generated unique ID"}}};p.contentId={table:{defaultValue:{summary:"generated unique ID"}}};m.visuallyHiddenCloseLabel="Close Banner";const ae={title:"Components/Banner",component:F,args:m,argTypes:p,excludeStories:/.Data$/},r=(a,{argTypes:e})=>G(a,e,te),n={render:r,args:{title:"Optional title",action:"Action",kind:"base"},parameters:{percy:{args:{show:!0}}}},o={render:r,args:{...n.args,kind:"error"},parameters:n.parameters},i={render:r,args:{...n.args,kind:"info"},parameters:n.parameters},l={render:r,args:{...n.args,kind:"success"},parameters:n.parameters},d={render:r,args:{...n.args,kind:"warning"},parameters:n.parameters},u={render:r,args:{...n.args,pinned:!0},parameters:n.parameters},c={render:r,args:{...n.args,backgroundImage:ne,backgroundSize:"contain",title:"",action:"",hideIcon:!0,dialogClass:"d-fc-neutral-white",default:"The power of Dialpad. On your desktop"},parameters:n.parameters};var g,h,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: 'Optional title',
    action: 'Action',
    kind: 'base'
  },
  parameters: {
    percy: {
      args: {
        show: true
      }
    }
  }
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var y,v,k;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'error'
  },
  parameters: Default.parameters
}`,...(k=(v=o.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var _,I,S;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'info'
  },
  parameters: Default.parameters
}`,...(S=(I=i.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var C,D,w;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'success'
  },
  parameters: Default.parameters
}`,...(w=(D=l.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var $,B,T;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'warning'
  },
  parameters: Default.parameters
}`,...(T=(B=d.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var x,O,V;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    pinned: true
  },
  parameters: Default.parameters
}`,...(V=(O=u.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var z,P,H;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    backgroundImage,
    backgroundSize: 'contain',
    title: '',
    action: '',
    hideIcon: true,
    dialogClass: 'd-fc-neutral-white',
    default: 'The power of Dialpad. On your desktop'
  },
  parameters: Default.parameters
}`,...(H=(P=c.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};const re=["argsData","argTypesData","Default","Error","Info","Success","Warning","Pinned","CustomBackground"],fe=Object.freeze(Object.defineProperty({__proto__:null,CustomBackground:c,Default:n,Error:o,Info:i,Pinned:u,Success:l,Warning:d,__namedExportsOrder:re,argTypesData:p,argsData:m,default:ae},Symbol.toStringTag,{value:"Module"}));export{fe as B,n as D,o as E,i as I,u as P,l as S,d as W};
//# sourceMappingURL=banner.stories-Wa_Uga2X.js.map
