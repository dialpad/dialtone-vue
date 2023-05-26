import{D as E,a as M,b as A,N as K}from"./notice-ebb76a67.js";import{M as R}from"./modal-f96ddab9.js";import{u as h,c as W}from"./storybook_utils-3cb281bc.js";import{S as G}from"./sr_only_close_button-8636f767.js";import{n as U}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as J}from"./button-9102a84a.js";import{D as Q}from"./icon-6ceed40f.js";import{a as m,b as p}from"./notice.stories-67d9fb80.js";const X={name:"DtBanner",components:{DtNoticeIcon:E,DtNoticeContent:M,DtNoticeAction:A},mixins:[R,G],props:{titleId:{type:String,default(){return h.getUniqueString()}},contentId:{type:String,default(){return h.getUniqueString()}},title:{type:String,default:""},important:{type:Boolean,default:!1},pinned:{type:Boolean,default:!1},kind:{type:String,default:"base",validate(a){return K.includes(a)}},closeButtonProps:{type:Object,default:()=>({})},hideClose:{type:Boolean,default:!1},hideIcon:{type:Boolean,default:!1},dialogClass:{type:String,default:""},backgroundImage:{type:String,default:""},backgroundSize:{type:String,default:"cover"}},emits:["close"],computed:{role(){return this.important?"alertdialog":"status"},bannerClass(){return["d-banner",{error:"d-banner--error",info:"d-banner--info",success:"d-banner--success",warning:"d-banner--warning",base:"d-banner--base"}[this.kind],{"d-banner--important":this.important,"d-banner--pinned":this.pinned}]},bannerBackgroundImage(){return this.backgroundImage===""?null:`background-image: url(${this.backgroundImage});
              background-size: ${this.backgroundSize};`}},mounted(){this.important&&this.focusFirstElement()},methods:{trapFocus(a){this.important&&this.focusTrappedTabPress(a)}}};var $=function(){var e=this,n=e._self._c;return n("aside",{class:e.bannerClass,style:e.bannerBackgroundImage,on:{keydown:function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"tab",9,o.key,"Tab")?null:e.trapFocus.apply(null,arguments)}}},[n("div",{staticClass:"d-banner__dialog",class:e.dialogClass,attrs:{role:e.role,"aria-labelledby":e.titleId,"aria-describedby":e.contentId}},[e.hideIcon?e._e():n("dt-notice-icon",e._g({attrs:{kind:e.kind}},e.$listeners),[e._t("icon")],2),n("dt-notice-content",e._g({attrs:{"title-id":e.titleId,"content-id":e.contentId,title:e.title},scopedSlots:e._u([{key:"titleOverride",fn:function(){return[e._t("titleOverride")]},proxy:!0}],null,!0)},e.$listeners),[e._t("default")],2),n("dt-notice-action",e._g({attrs:{"hide-close":e.hideClose,"close-button-props":e.closeButtonProps,"visually-hidden-close":e.visuallyHiddenClose,"visually-hidden-close-label":e.visuallyHiddenCloseLabel}},e.$listeners),[e._t("action")],2)],1)])},Y=[];$._withStripped=!0;var f=U(X,$,Y,!1,null,null,null,null);f.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner.vue";const j=f.exports;f.exports.__docgenInfo={description:`Banners are a type of notice, delivering system and engagement messaging.
These are highly intrusive notices and should be used sparingly and appropriately.`,displayName:"DtBanner",tags:{see:[{description:"https://dialpad.design/components/banner.html",title:"see"}]},exportName:"default",props:[{name:"visuallyHiddenClose",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"If true, a hidden close button is included for screen readers",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"visuallyHiddenCloseLabel",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"Label for the visually hidden close button\nRequired if visuallyHiddenClose is set to `true`",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"titleId",description:`Sets an ID on the title element of the component. Useful for aria-describedby
or aria-labelledby or any other reason you may need an id to refer to the title.`,type:{name:"string"},defaultValue:{func:!0,value:"function() { return util.getUniqueString(); }"}},{name:"contentId",description:`Sets an ID on the content element of the component. Useful for aria-describedby
or aria-labelledby or any other reason you may need an id to refer to the content.`,type:{name:"string"},defaultValue:{func:!0,value:"function() { return util.getUniqueString(); }"}},{name:"title",description:"Title header of the notice. This can be left blank to remove the title from the notice entirely.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"important",description:`Used in scenarios where the message needs to visually dominate the screen.
This will also change the aria role from status to alertdialog.
and will modally trap the keyboard focus in the dialog as soon as it displays.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"pinned",description:"Pins the banner to the top of the window and pushes all app content down.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"kind",description:"Severity level of the notice, sets the icon and background",tags:{},values:["base","error","info","success","warning"],type:{name:"string"},defaultValue:{func:!1,value:"'base'"}},{name:"closeButtonProps",description:"Props for the notice close button.",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"hideClose",description:"Hides the close button from the notice",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hideIcon",description:"Hides the icon from the notice",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dialogClass",description:"Inner dialog class",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"backgroundImage",description:"Banner background image",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"backgroundSize",description:`Background image size, follows the background-size CSS property values
<a class="d-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-size" target="_blank">
  CSS background-sizes
</a>`,type:{name:"string"},defaultValue:{func:!1,value:"'cover'"}}],events:[{name:"close",description:"Close button click event"}],slots:[{name:"icon",description:"Slot for custom icon"},{name:"titleOverride",description:'Allows you to override the title, only use this if you need to override with something other than text. Otherwise use the "title" prop.'},{name:"default",description:"the main textual content of the banner"},{name:"action",description:"Enter a possible action for the user to take, such as a link to another page"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/modal.js","/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/sr_only_close_button.js","/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner.vue"]};const Z={name:"BannerDefault",components:{DtBanner:j,DtButton:J,DtIcon:Q},props:{show:{type:Boolean,default:!1}},data(){return{displayBanner:this.show}},computed:{shouldInvertButton(){return this.kind==="base"||this.kind==="error"||this.kind==="info"},isInverted(){return this.important&&this.shouldInvertButton},buttonKind(){return this.isInverted?"inverted":"muted"},linkClass(){return this.isInverted?"d-link--inverted":"d-link--muted"},buttonCloseProps(){return{...this.closeButtonProps,kind:this.buttonKind,ariaLabel:"Close"}}}};var q=function(){var e=this,n=e._self._c;return n("div",[n("dt-button",{directives:[{name:"show",rawName:"v-show",value:!e.displayBanner,expression:"!displayBanner"}],on:{click:function(o){e.displayBanner=!0}}},[e._v(" Click to show! ")]),n("dt-banner",{directives:[{name:"show",rawName:"v-show",value:e.displayBanner,expression:"displayBanner"}],class:{"d-ps-sticky":e.show},attrs:{kind:e.kind,title:e.title,"title-id":e.titleId,"content-id":e.contentId,important:e.important,pinned:e.pinned,"hide-close":e.hideClose,"close-button-props":e.buttonCloseProps,"hide-icon":e.hideIcon,"background-image":e.backgroundImage,"background-size":e.backgroundSize,"dialog-class":e.dialogClass,"visually-hidden-close":e.visuallyHiddenClose,"visually-hidden-close-label":e.visuallyHiddenCloseLabel},on:{close:function(o){e.displayBanner=!1,e.onClose(o)}}},[e.defaultSlot?n("span",{domProps:{innerHTML:e._s(e.defaultSlot)}}):n("span",[e._v(" Message body with "),n("a",{staticClass:"d-link",class:e.linkClass,attrs:{href:"#"}},[e._v("a link")]),e._v(". ")]),e.action?n("template",{slot:"action"},[n("dt-button",{attrs:{kind:e.buttonKind,importance:"outlined"},on:{click:e.onClick}},[e._v(" "+e._s(e.action)+" ")])],1):e._e(),e.icon?n("template",{slot:"icon"},[n("dt-icon",{attrs:{name:e.icon}})],1):e._e(),e.titleOverride?n("template",{slot:"titleOverride"},[n("span",{domProps:{innerHTML:e._s(e.titleOverride)}})]):e._e()],2)],1)},ee=[];q._withStripped=!0;var g=U(Z,q,ee,!1,null,null,null,null);g.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner_default.story.vue";const ne=g.exports;g.exports.__docgenInfo={displayName:"BannerDefault",exportName:"default",description:"",tags:{},props:[{name:"show",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner_default.story.vue"]};const te=""+new URL("dialpad-gradient-fc68f20e.png",import.meta.url).href;p.role={table:{disable:!0}};p.titleId={table:{defaultValue:{summary:"generated unique ID"}}};p.contentId={table:{defaultValue:{summary:"generated unique ID"}}};m.visuallyHiddenCloseLabel="Close Banner";const ae={title:"Components/Banner",component:j,args:m,argTypes:p,excludeStories:/.Data$/},r=(a,{argTypes:e})=>W(a,e,ne),t={render:r,args:{title:"Optional title",action:"Action",kind:"base"}},s={render:r,args:{...t.args,kind:"error"}},i={render:r,args:{...t.args,kind:"info"}},l={render:r,args:{...t.args,kind:"success"}},d={render:r,args:{...t.args,kind:"warning"}},u={render:r,args:{...t.args,pinned:!0}},c={render:r,args:{...t.args,backgroundImage:te,backgroundSize:"contain",title:"",action:"",hideIcon:!0,dialogClass:"d-fc-white",default:"The power of Dialpad. On your desktop"}};var b,y,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: 'Optional title',
    action: 'Action',
    kind: 'base'
  }
}`,...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var k,_,S;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'error'
  }
}`,...(S=(_=s.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var I,C,w;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'info'
  }
}`,...(w=(C=i.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var B,D,x;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'success'
  }
}`,...(x=(D=l.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var T,O,V;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'warning'
  }
}`,...(V=(O=d.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var z,P,H;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    pinned: true
  }
}`,...(H=(P=u.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var N,F,L;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    backgroundImage,
    backgroundSize: 'contain',
    title: '',
    action: '',
    hideIcon: true,
    dialogClass: 'd-fc-white',
    default: 'The power of Dialpad. On your desktop'
  }
}`,...(L=(F=c.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};const re=["argsData","argTypesData","Default","Error","Info","Success","Warning","Pinned","CustomBackground"],me=Object.freeze(Object.defineProperty({__proto__:null,CustomBackground:c,Default:t,Error:s,Info:i,Pinned:u,Success:l,Warning:d,__namedExportsOrder:re,argTypesData:p,argsData:m,default:ae},Symbol.toStringTag,{value:"Module"}));export{me as B,t as D,s as E,i as I,u as P,l as S,d as W,j as a};
//# sourceMappingURL=banner.stories-a453e450.js.map
