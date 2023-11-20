import{b as ae,c as re,d as se,N as oe}from"./notice-Nj9PCdhO.js";import{M as ie}from"./modal-VFpWWFyV.js";import{u as T}from"./utils-uw-tjP-u.js";import{S as le}from"./sr_only_close_button-yYJrtLrn.js";import{s as l,k as C,e as w,b as de,w as r,g as ue,u as i,p as I,A as ce,l as me,o as h,f as v,d as $,v as V,x as S,B as pe,y as fe}from"./vue.esm-bundler-pfnFGw-8.js";import{_ as Z}from"./_plugin-vue_export-helper-x3n3nnut.js";import{D as ge}from"./button-QSbPABQk.js";import{D as be}from"./icon-z49A8j_D.js";import{c as he}from"./storybook_utils-dy5aucTw.js";import{b as _,c as y}from"./notice.stories-6K0T_mlK.js";const x={name:"DtBanner",components:{DtNoticeIcon:ae,DtNoticeContent:re,DtNoticeAction:se},mixins:[ie,le],props:{titleId:{type:String,default(){return T.getUniqueString()}},contentId:{type:String,default(){return T.getUniqueString()}},title:{type:String,default:""},important:{type:Boolean,default:!1},pinned:{type:Boolean,default:!1},kind:{type:String,default:"base",validate(e){return oe.includes(e)}},closeButtonProps:{type:Object,default:()=>({})},hideClose:{type:Boolean,default:!1},hideIcon:{type:Boolean,default:!1},dialogClass:{type:String,default:""},backgroundImage:{type:String,default:""},backgroundSize:{type:String,default:"cover"}},emits:["close"],computed:{role(){return this.important?"alertdialog":"status"},bannerClass(){return["d-banner",{error:"d-banner--error",info:"d-banner--info",success:"d-banner--success",warning:"d-banner--warning",base:"d-banner--base"}[this.kind],{"d-banner--important":this.important,"d-banner--pinned":this.pinned}]},bannerBackgroundImage(){return this.backgroundImage===""?null:`background-image: url(${this.backgroundImage});
              background-size: ${this.backgroundSize};`}},mounted(){this.important&&this.focusFirstElement()},methods:{trapFocus(e){this.important&&this.focusTrappedTabPress(e)}}},ye=["role","aria-labelledby","aria-describedby"];function ke(e,t,a,te,d,s){const k=l("dt-notice-icon"),D=l("dt-notice-content"),B=l("dt-notice-action");return h(),C("aside",{class:I(s.bannerClass),style:ce(s.bannerBackgroundImage),onKeydown:t[1]||(t[1]=me((...u)=>s.trapFocus&&s.trapFocus(...u),["tab"]))},[w("div",{class:I(["d-banner__dialog",a.dialogClass]),role:s.role,"aria-labelledby":a.titleId,"aria-describedby":a.contentId},[a.hideIcon?ue("",!0):(h(),de(k,{key:0,kind:a.kind},{default:r(()=>[v(e.$slots,"icon")]),_:3},8,["kind"])),i(D,{"title-id":a.titleId,"content-id":a.contentId,title:a.title},{titleOverride:r(()=>[v(e.$slots,"titleOverride")]),default:r(()=>[v(e.$slots,"default")]),_:3},8,["title-id","content-id","title"]),i(B,{"hide-close":a.hideClose,"close-button-props":a.closeButtonProps,"visually-hidden-close":e.visuallyHiddenClose,"visually-hidden-close-label":e.visuallyHiddenCloseLabel,onClose:t[0]||(t[0]=u=>e.$emit("close"))},{default:r(()=>[v(e.$slots,"action")]),_:3},8,["hide-close","close-button-props","visually-hidden-close","visually-hidden-close-label"])],10,ye)],38)}const ee=Z(x,[["render",ke]]);x.__docgenInfo={description:`Banners are a type of notice, delivering system and engagement messaging.
These are highly intrusive notices and should be used sparingly and appropriately.`,displayName:"DtBanner",tags:{see:[{description:"https://dialpad.design/components/banner.html",title:"see"}]},exportName:"default",props:[{name:"visuallyHiddenClose",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"If true, a hidden close button is included for screen readers",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"visuallyHiddenCloseLabel",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"Label for the visually hidden close button\nRequired if visuallyHiddenClose is set to `true`",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"titleId",description:`Sets an ID on the title element of the component. Useful for aria-describedby
or aria-labelledby or any other reason you may need an id to refer to the title.`,type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"contentId",description:`Sets an ID on the content element of the component. Useful for aria-describedby
or aria-labelledby or any other reason you may need an id to refer to the content.`,type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"title",description:"Title header of the notice. This can be left blank to remove the title from the notice entirely.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"important",description:`Used in scenarios where the message needs to visually dominate the screen.
This will also change the aria role from status to alertdialog.
and will modally trap the keyboard focus in the dialog as soon as it displays.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"pinned",description:"Pins the banner to the top of the window and pushes all app content down.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"kind",description:"Severity level of the notice, sets the icon and background",tags:{},values:["base","error","info","success","warning"],type:{name:"string"},defaultValue:{func:!1,value:"'base'"}},{name:"closeButtonProps",description:"Props for the notice close button.",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"hideClose",description:"Hides the close button from the notice",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hideIcon",description:"Hides the icon from the notice",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dialogClass",description:"Inner dialog class",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"backgroundImage",description:"Banner background image",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"backgroundSize",description:`Background image size, follows the background-size CSS property values
<a class="d-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-size" target="_blank">
  CSS background-sizes
</a>`,type:{name:"string"},defaultValue:{func:!1,value:"'cover'"}}],events:[{name:"close",description:"Close button click event"}],slots:[{name:"icon",description:"Slot for custom icon"},{name:"titleOverride",description:'Allows you to override the title, only use this if you need to override with something other than text. Otherwise use the "title" prop.'},{name:"default",description:"the main textual content of the banner"},{name:"action",description:"Enter a possible action for the user to take, such as a link to another page"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/modal.js","/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/sr_only_close_button.js","/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner.vue"]};const ne={name:"BannerDefault",components:{DtBanner:ee,DtButton:ge,DtIcon:be},data(){return{displayBanner:this.$attrs.show}},computed:{shouldInvertButton(){return this.$attrs.kind==="base"||this.$attrs.kind==="error"||this.$attrs.kind==="info"},isInverted(){return this.$attrs.important&&this.shouldInvertButton},buttonKind(){return this.isInverted?"inverted":"muted"},linkClass(){return this.isInverted?"d-link--inverted":"d-link--muted"},buttonCloseProps(){return{...this.$attrs.closeButtonProps,kind:this.buttonKind,ariaLabel:"Close"}}}},ve=["innerHTML"],Se={key:1},Ce=["innerHTML"];function Ie(e,t,a,te,d,s){const k=l("dt-button"),D=l("dt-icon"),B=l("dt-banner");return h(),C("div",null,[$(i(k,{onClick:t[0]||(t[0]=u=>d.displayBanner=!0)},{default:r(()=>[S(" Click to show! ")]),_:1},512),[[V,!d.displayBanner]]),$(i(B,{kind:e.$attrs.kind,title:e.$attrs.title,"title-id":e.$attrs.titleId,"content-id":e.$attrs.contentId,important:e.$attrs.important,pinned:e.$attrs.pinned,"hide-close":e.$attrs.hideClose,"close-button-props":s.buttonCloseProps,class:I({"d-ps-sticky":e.$attrs.show}),"hide-icon":e.$attrs.hideIcon,"background-image":e.$attrs.backgroundImage,"background-size":e.$attrs.backgroundSize,"dialog-class":e.$attrs.dialogClass,"visually-hidden-close":e.$attrs.visuallyHiddenClose,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel,onClose:t[1]||(t[1]=u=>{d.displayBanner=!1,e.$attrs.onClose(u)})},pe({default:r(()=>[e.defaultSlot?(h(),C("span",{key:0,innerHTML:e.defaultSlot},null,8,ve)):(h(),C("span",Se,[S(" Message body with "),w("a",{href:"#",class:I(["d-link",s.linkClass])},"a link",2),S(". ")]))]),_:2},[e.$attrs.action?{name:"action",fn:r(()=>[i(k,{kind:s.buttonKind,importance:"outlined",onClick:e.$attrs.onClick},{default:r(()=>[S(fe(e.$attrs.action),1)]),_:1},8,["kind","onClick"])]),key:"0"}:void 0,e.$attrs.icon?{name:"icon",fn:r(()=>[i(D,{name:e.$attrs.icon},null,8,["name"])]),key:"1"}:void 0,e.$attrs.titleOverride?{name:"titleOverride",fn:r(()=>[w("span",{innerHTML:e.$attrs.titleOverride},null,8,Ce)]),key:"2"}:void 0]),1032,["kind","title","title-id","content-id","important","pinned","hide-close","close-button-props","class","hide-icon","background-image","background-size","dialog-class","visually-hidden-close","visually-hidden-close-label"]),[[V,d.displayBanner]])])}const De=Z(ne,[["render",Ie]]);ne.__docgenInfo={displayName:"BannerDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner_default.story.vue"]};const Be=""+new URL("dialpad-gradient-TIMLz1v7.png",import.meta.url).href;y.role={table:{disable:!0}};y.titleId={table:{defaultValue:{summary:"generated unique ID"}}};y.contentId={table:{defaultValue:{summary:"generated unique ID"}}};_.visuallyHiddenCloseLabel="Close Banner";const we={title:"Components/Banner",component:ee,args:_,argTypes:y,excludeStories:/.Data$/},o=(e,{argTypes:t})=>he(e,t,De),n={render:o,args:{title:"Optional title",action:"Action",kind:"base"},parameters:{percy:{args:{show:!0}}}},c={render:o,args:{...n.args,kind:"error"},parameters:n.parameters},m={render:o,args:{...n.args,kind:"info"},parameters:n.parameters},p={render:o,args:{...n.args,kind:"success"},parameters:n.parameters},f={render:o,args:{...n.args,kind:"warning"},parameters:n.parameters},g={render:o,args:{...n.args,pinned:!0},parameters:n.parameters},b={render:o,args:{...n.args,backgroundImage:Be,backgroundSize:"contain",title:"",action:"",hideIcon:!0,dialogClass:"d-fc-neutral-white",default:"The power of Dialpad. On your desktop"},parameters:n.parameters};var O,z,H;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(H=(z=n.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var N,P,L;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'error'
  },
  parameters: Default.parameters
}`,...(L=(P=c.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var M,U,j;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'info'
  },
  parameters: Default.parameters
}`,...(j=(U=m.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var E,F,q;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'success'
  },
  parameters: Default.parameters
}`,...(q=(F=p.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var K,A,W;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'warning'
  },
  parameters: Default.parameters
}`,...(W=(A=f.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var R,G,J;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    pinned: true
  },
  parameters: Default.parameters
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Y;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const _e=["argsData","argTypesData","Default","Error","Info","Success","Warning","Pinned","CustomBackground"],Ue=Object.freeze(Object.defineProperty({__proto__:null,CustomBackground:b,Default:n,Error:c,Info:m,Pinned:g,Success:p,Warning:f,__namedExportsOrder:_e,argTypesData:y,argsData:_,default:we},Symbol.toStringTag,{value:"Module"}));export{Ue as B,n as D,c as E,m as I,g as P,p as S,f as W};
//# sourceMappingURL=banner.stories-t4VHdH3E.js.map
