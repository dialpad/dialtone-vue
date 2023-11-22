import{b as q,c as E,d as A,N as K}from"./notice-ZnV-7RFl.js";import{M as R}from"./modal-g8UESVSL.js";import{u as h}from"./utils-pRacJSLF.js";import{S as W}from"./sr_only_close_button-sHN7oUOM.js";import{n as F}from"./_plugin-vue2_normalizer-XBmYDgEh.js";import{D as G}from"./button-ux2tnS3y.js";import{D as J}from"./icon-SfO3AFzV.js";import{c as Q}from"./storybook_utils-XrTpeJKJ.js";import{b as m,c as p}from"./notice.stories-Y4ZR9XDi.js";const X={name:"DtBanner",components:{DtNoticeIcon:q,DtNoticeContent:E,DtNoticeAction:A},mixins:[R,W],props:{titleId:{type:String,default(){return h.getUniqueString()}},contentId:{type:String,default(){return h.getUniqueString()}},title:{type:String,default:""},important:{type:Boolean,default:!1},pinned:{type:Boolean,default:!1},kind:{type:String,default:"base",validate(a){return K.includes(a)}},closeButtonProps:{type:Object,default:()=>({})},hideClose:{type:Boolean,default:!1},hideIcon:{type:Boolean,default:!1},dialogClass:{type:String,default:""},backgroundImage:{type:String,default:""},backgroundSize:{type:String,default:"cover"}},emits:["close"],computed:{role(){return this.important?"alertdialog":"status"},bannerClass(){return["d-banner",{error:"d-banner--error",info:"d-banner--info",success:"d-banner--success",warning:"d-banner--warning",base:"d-banner--base"}[this.kind],{"d-banner--important":this.important,"d-banner--pinned":this.pinned}]},bannerBackgroundImage(){return this.backgroundImage===""?null:`background-image: url(${this.backgroundImage});
              background-size: ${this.backgroundSize};`}},mounted(){this.important&&this.focusFirstElement()},methods:{trapFocus(a){this.important&&this.focusTrappedTabPress(a)}}};var U=function(){var e=this,t=e._self._c;return t("aside",{class:e.bannerClass,style:e.bannerBackgroundImage,on:{keydown:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"tab",9,s.key,"Tab")?null:e.trapFocus.apply(null,arguments)}}},[t("div",{staticClass:"d-banner__dialog",class:e.dialogClass,attrs:{role:e.role,"aria-labelledby":e.titleId,"aria-describedby":e.contentId}},[e.hideIcon?e._e():t("dt-notice-icon",e._g({attrs:{kind:e.kind}},e.$listeners),[e._t("icon")],2),t("dt-notice-content",e._g({attrs:{"title-id":e.titleId,"content-id":e.contentId,title:e.title},scopedSlots:e._u([{key:"titleOverride",fn:function(){return[e._t("titleOverride")]},proxy:!0}],null,!0)},e.$listeners),[e._t("default")],2),t("dt-notice-action",e._g({attrs:{"hide-close":e.hideClose,"close-button-props":e.closeButtonProps,"visually-hidden-close":e.visuallyHiddenClose,"visually-hidden-close-label":e.visuallyHiddenCloseLabel}},e.$listeners),[e._t("action")],2)],1)])},Y=[];U._withStripped=!0;var f=F(X,U,Y,!1,null,null,null,null);f.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner.vue";const j=f.exports;f.exports.__docgenInfo={description:`Banners are a type of notice, delivering system and engagement messaging.
These are highly intrusive notices and should be used sparingly and appropriately.`,displayName:"DtBanner",tags:{see:[{description:"https://dialpad.design/components/banner.html",title:"see"}]},exportName:"default",props:[{name:"visuallyHiddenClose",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"If true, a hidden close button is included for screen readers",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"visuallyHiddenCloseLabel",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"Label for the visually hidden close button\nRequired if visuallyHiddenClose is set to `true`",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"titleId",description:`Sets an ID on the title element of the component. Useful for aria-describedby
or aria-labelledby or any other reason you may need an id to refer to the title.`,type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"contentId",description:`Sets an ID on the content element of the component. Useful for aria-describedby
or aria-labelledby or any other reason you may need an id to refer to the content.`,type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"title",description:"Title header of the notice. This can be left blank to remove the title from the notice entirely.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"important",description:`Used in scenarios where the message needs to visually dominate the screen.
This will also change the aria role from status to alertdialog.
and will modally trap the keyboard focus in the dialog as soon as it displays.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"pinned",description:"Pins the banner to the top of the window and pushes all app content down.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"kind",description:"Severity level of the notice, sets the icon and background",tags:{},values:["base","error","info","success","warning"],type:{name:"string"},defaultValue:{func:!1,value:"'base'"}},{name:"closeButtonProps",description:"Props for the notice close button.",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"hideClose",description:"Hides the close button from the notice",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hideIcon",description:"Hides the icon from the notice",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dialogClass",description:"Inner dialog class",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"backgroundImage",description:"Banner background image",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"backgroundSize",description:`Background image size, follows the background-size CSS property values
<a class="d-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-size" target="_blank">
  CSS background-sizes
</a>`,type:{name:"string"},defaultValue:{func:!1,value:"'cover'"}}],events:[{name:"close",description:"Close button click event"}],slots:[{name:"icon",description:"Slot for custom icon"},{name:"titleOverride",description:'Allows you to override the title, only use this if you need to override with something other than text. Otherwise use the "title" prop.'},{name:"default",description:"the main textual content of the banner"},{name:"action",description:"Enter a possible action for the user to take, such as a link to another page"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/modal.js","/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/sr_only_close_button.js","/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner.vue"]};const Z={name:"BannerDefault",components:{DtBanner:j,DtButton:G,DtIcon:J},props:{show:{type:Boolean,default:!1}},data(){return{displayBanner:this.show}},computed:{shouldInvertButton(){return this.$attrs.kind==="base"||this.$attrs.kind==="error"||this.$attrs.kind==="info"},isInverted(){return this.$attrs.important&&this.shouldInvertButton},buttonKind(){return this.isInverted?"inverted":"muted"},linkClass(){return this.isInverted?"d-link--inverted":"d-link--muted"},buttonCloseProps(){return{...this.$attrs.closeButtonProps,kind:this.$attrs.buttonKind,ariaLabel:"Close"}}}};var M=function(){var e=this,t=e._self._c;return t("div",[t("dt-button",{directives:[{name:"show",rawName:"v-show",value:!e.displayBanner,expression:"!displayBanner"}],on:{click:function(s){e.displayBanner=!0}}},[e._v(" Click to show! ")]),t("dt-banner",{directives:[{name:"show",rawName:"v-show",value:e.displayBanner,expression:"displayBanner"}],class:{"d-ps-sticky":e.show},attrs:{kind:e.$attrs.kind,title:e.$attrs.title,"title-id":e.$attrs.titleId,"content-id":e.$attrs.contentId,important:e.$attrs.important,pinned:e.$attrs.pinned,"hide-close":e.$attrs.hideClose,"close-button-props":e.buttonCloseProps,"hide-icon":e.$attrs.hideIcon,"background-image":e.$attrs.backgroundImage,"background-size":e.$attrs.backgroundSize,"dialog-class":e.$attrs.dialogClass,"visually-hidden-close":e.$attrs.visuallyHiddenClose,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel},on:{close:function(s){e.displayBanner=!1,e.$attrs.onClose(s)}}},[e.$attrs.default?t("span",{domProps:{innerHTML:e._s(e.$attrs.default)}}):t("span",[e._v(" Message body with "),t("a",{staticClass:"d-link",class:e.linkClass,attrs:{href:"#"}},[e._v("a link")]),e._v(". ")]),e.$attrs.action?t("template",{slot:"action"},[t("dt-button",{attrs:{kind:e.buttonKind,importance:"outlined"},on:{click:e.$attrs.onClick}},[e._v(" "+e._s(e.$attrs.action)+" ")])],1):e._e(),e.$attrs.icon?t("template",{slot:"icon"},[t("dt-icon",{attrs:{name:e.$attrs.icon}})],1):e._e(),e.$attrs.titleOverride?t("template",{slot:"titleOverride"},[t("span",{domProps:{innerHTML:e._s(e.$attrs.titleOverride)}})]):e._e()],2)],1)},ee=[];M._withStripped=!0;var g=F(Z,M,ee,!1,null,null,null,null);g.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner_default.story.vue";const te=g.exports;g.exports.__docgenInfo={displayName:"BannerDefault",exportName:"default",description:"",tags:{},props:[{name:"show",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner_default.story.vue"]};const ne=""+new URL("dialpad-gradient-TIMLz1v7.png",import.meta.url).href;p.role={table:{disable:!0}};p.titleId={table:{defaultValue:{summary:"generated unique ID"}}};p.contentId={table:{defaultValue:{summary:"generated unique ID"}}};m.visuallyHiddenCloseLabel="Close Banner";const ae={title:"Components/Banner",component:j,args:m,argTypes:p,excludeStories:/.Data$/},r=(a,{argTypes:e})=>Q(a,e,te),n={render:r,args:{title:"Optional title",action:"Action",kind:"base"},parameters:{percy:{args:{show:!0}}}},o={render:r,args:{...n.args,kind:"error"},parameters:n.parameters},i={render:r,args:{...n.args,kind:"info"},parameters:n.parameters},l={render:r,args:{...n.args,kind:"success"},parameters:n.parameters},d={render:r,args:{...n.args,kind:"warning"},parameters:n.parameters},u={render:r,args:{...n.args,pinned:!0},parameters:n.parameters},c={render:r,args:{...n.args,backgroundImage:ne,backgroundSize:"contain",title:"",action:"",hideIcon:!0,dialogClass:"d-fc-neutral-white",default:"The power of Dialpad. On your desktop"},parameters:n.parameters};var b,y,v;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var k,_,S;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'error'
  },
  parameters: Default.parameters
}`,...(S=(_=o.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var I,C,w;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'info'
  },
  parameters: Default.parameters
}`,...(w=(C=i.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var D,$,B;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'success'
  },
  parameters: Default.parameters
}`,...(B=($=l.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var T,x,O;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'warning'
  },
  parameters: Default.parameters
}`,...(O=(x=d.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var V,z,P;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    pinned: true
  },
  parameters: Default.parameters
}`,...(P=(z=u.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var H,N,L;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(L=(N=c.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};const re=["argsData","argTypesData","Default","Error","Info","Success","Warning","Pinned","CustomBackground"],fe=Object.freeze(Object.defineProperty({__proto__:null,CustomBackground:c,Default:n,Error:o,Info:i,Pinned:u,Success:l,Warning:d,__namedExportsOrder:re,argTypesData:p,argsData:m,default:ae},Symbol.toStringTag,{value:"Module"}));export{fe as B,n as D,o as E,i as I,u as P,l as S,d as W};
//# sourceMappingURL=banner.stories-MAqsNJ-_.js.map
