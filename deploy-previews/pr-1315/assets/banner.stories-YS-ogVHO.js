import{b as re,c as se,d as oe,N as ie}from"./notice-iYSA52fg.js";import{M as le}from"./modal-VFpWWFyV.js";import{u as $}from"./utils-r35NyHdW.js";import{S as de}from"./sr_only_close_button-noEQ5gXY.js";import{s as l,k as I,e as B,b as ue,w as r,f as c,u as i,p as D,A as ce,l as me,o as y,g as S,d as V,v as O,x as C,B as pe,y as fe}from"./vue.esm-bundler-PY0rQjII.js";import{_ as x}from"./_plugin-vue_export-helper-x3n3nnut.js";import{D as ge}from"./button-SQvTdlhI.js";import{D as he}from"./icon-34MKq-Bw.js";import{c as be}from"./storybook_utils-dy5aucTw.js";import{b as T,c as k}from"./notice.stories-mFw36XHO.js";const ee={name:"DtBanner",components:{DtNoticeIcon:re,DtNoticeContent:se,DtNoticeAction:oe},mixins:[le,de],props:{titleId:{type:String,default(){return $.getUniqueString()}},contentId:{type:String,default(){return $.getUniqueString()}},title:{type:String,default:""},important:{type:Boolean,default:!1},pinned:{type:Boolean,default:!1},kind:{type:String,default:"base",validate(e){return ie.includes(e)}},closeButtonProps:{type:Object,default:()=>({})},hideClose:{type:Boolean,default:!1},hideIcon:{type:Boolean,default:!1},dialogClass:{type:String,default:""},backgroundImage:{type:String,default:""},backgroundSize:{type:String,default:"cover"}},emits:["close"],computed:{role(){return this.important?"alertdialog":"status"},bannerClass(){return["d-banner",{error:"d-banner--error",info:"d-banner--info",success:"d-banner--success",warning:"d-banner--warning",base:"d-banner--base"}[this.kind],{"d-banner--important":this.important,"d-banner--pinned":this.pinned}]},bannerBackgroundImage(){return this.backgroundImage===""?null:`background-image: url(${this.backgroundImage});
              background-size: ${this.backgroundSize};`}},mounted(){this.important&&this.focusFirstElement()},methods:{trapFocus(e){this.important&&this.focusTrappedTabPress(e)}}},ye=["role","aria-labelledby","aria-describedby"];function ke(e,n,a,ae,d,s){const v=l("dt-notice-icon"),w=l("dt-notice-content"),_=l("dt-notice-action");return y(),I("aside",{class:D(s.bannerClass),style:ce(s.bannerBackgroundImage),onKeydown:n[1]||(n[1]=me((...u)=>s.trapFocus&&s.trapFocus(...u),["tab"]))},[B("div",{class:D(["d-banner__dialog",a.dialogClass]),role:s.role,"aria-labelledby":a.titleId,"aria-describedby":a.contentId},[a.hideIcon?c("v-if",!0):(y(),ue(v,{key:0,kind:a.kind},{default:r(()=>[c(" @slot Slot for custom icon "),S(e.$slots,"icon")]),_:3},8,["kind"])),i(w,{"title-id":a.titleId,"content-id":a.contentId,title:a.title},{titleOverride:r(()=>[c(" eslint-disable-next-line max-len "),c(' @slot Allows you to override the title, only use this if you need to override with something other than text. Otherwise use the "title" prop. '),S(e.$slots,"titleOverride")]),default:r(()=>[S(e.$slots,"default")]),_:3},8,["title-id","content-id","title"]),i(_,{"hide-close":a.hideClose,"close-button-props":a.closeButtonProps,"visually-hidden-close":e.visuallyHiddenClose,"visually-hidden-close-label":e.visuallyHiddenCloseLabel,onClose:n[0]||(n[0]=u=>e.$emit("close"))},{default:r(()=>[c(" @slot Enter a possible action for the user to take, such as a link to another page "),S(e.$slots,"action")]),_:3},8,["hide-close","close-button-props","visually-hidden-close","visually-hidden-close-label"])],10,ye)],38)}const te=x(ee,[["render",ke],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner.vue"]]);ee.__docgenInfo={description:`Banners are a type of notice, delivering system and engagement messaging.
These are highly intrusive notices and should be used sparingly and appropriately.`,displayName:"DtBanner",tags:{see:[{description:"https://dialpad.design/components/banner.html",title:"see"}]},exportName:"default",props:[{name:"visuallyHiddenClose",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"If true, a hidden close button is included for screen readers",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"visuallyHiddenCloseLabel",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"Label for the visually hidden close button\nRequired if visuallyHiddenClose is set to `true`",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"titleId",description:`Sets an ID on the title element of the component. Useful for aria-describedby
or aria-labelledby or any other reason you may need an id to refer to the title.`,type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"contentId",description:`Sets an ID on the content element of the component. Useful for aria-describedby
or aria-labelledby or any other reason you may need an id to refer to the content.`,type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"title",description:"Title header of the notice. This can be left blank to remove the title from the notice entirely.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"important",description:`Used in scenarios where the message needs to visually dominate the screen.
This will also change the aria role from status to alertdialog.
and will modally trap the keyboard focus in the dialog as soon as it displays.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"pinned",description:"Pins the banner to the top of the window and pushes all app content down.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"kind",description:"Severity level of the notice, sets the icon and background",tags:{},values:["base","error","info","success","warning"],type:{name:"string"},defaultValue:{func:!1,value:"'base'"}},{name:"closeButtonProps",description:"Props for the notice close button.",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"hideClose",description:"Hides the close button from the notice",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hideIcon",description:"Hides the icon from the notice",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dialogClass",description:"Inner dialog class",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"backgroundImage",description:"Banner background image",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"backgroundSize",description:`Background image size, follows the background-size CSS property values
<a class="d-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-size" target="_blank">
  CSS background-sizes
</a>`,type:{name:"string"},defaultValue:{func:!1,value:"'cover'"}}],events:[{name:"close",description:"Close button click event"}],slots:[{name:"icon",description:"Slot for custom icon"},{name:"titleOverride",description:'Allows you to override the title, only use this if you need to override with something other than text. Otherwise use the "title" prop.'},{name:"default",description:"the main textual content of the banner"},{name:"action",description:"Enter a possible action for the user to take, such as a link to another page"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/modal.js","/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/sr_only_close_button.js","/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner.vue"]};const ne={name:"BannerDefault",components:{DtBanner:te,DtButton:ge,DtIcon:he},data(){return{displayBanner:this.$attrs.show}},computed:{shouldInvertButton(){return this.$attrs.kind==="base"||this.$attrs.kind==="error"||this.$attrs.kind==="info"},isInverted(){return this.$attrs.important&&this.shouldInvertButton},buttonKind(){return this.isInverted?"inverted":"muted"},linkClass(){return this.isInverted?"d-link--inverted":"d-link--muted"},buttonCloseProps(){return{...this.$attrs.closeButtonProps,kind:this.buttonKind,ariaLabel:"Close"}}}},ve=["innerHTML"],Se={key:1},Ce=["innerHTML"];function Ie(e,n,a,ae,d,s){const v=l("dt-button"),w=l("dt-icon"),_=l("dt-banner");return y(),I("div",null,[V(i(v,{onClick:n[0]||(n[0]=u=>d.displayBanner=!0)},{default:r(()=>[C(" Click to show! ")]),_:1},512),[[O,!d.displayBanner]]),V(i(_,{kind:e.$attrs.kind,title:e.$attrs.title,"title-id":e.$attrs.titleId,"content-id":e.$attrs.contentId,important:e.$attrs.important,pinned:e.$attrs.pinned,"hide-close":e.$attrs.hideClose,"close-button-props":s.buttonCloseProps,class:D({"d-ps-sticky":e.$attrs.show}),"hide-icon":e.$attrs.hideIcon,"background-image":e.$attrs.backgroundImage,"background-size":e.$attrs.backgroundSize,"dialog-class":e.$attrs.dialogClass,"visually-hidden-close":e.$attrs.visuallyHiddenClose,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel,onClose:n[1]||(n[1]=u=>{d.displayBanner=!1,e.$attrs.onClose(u)})},pe({default:r(()=>[e.defaultSlot?(y(),I("span",{key:0,innerHTML:e.defaultSlot},null,8,ve)):(y(),I("span",Se,[C(" Message body with "),B("a",{href:"#",class:D(["d-link",s.linkClass])},"a link",2),C(". ")]))]),_:2},[e.$attrs.action?{name:"action",fn:r(()=>[i(v,{kind:s.buttonKind,importance:"outlined",onClick:e.$attrs.onClick},{default:r(()=>[C(fe(e.$attrs.action),1)]),_:1},8,["kind","onClick"])]),key:"0"}:void 0,e.$attrs.icon?{name:"icon",fn:r(()=>[i(w,{name:e.$attrs.icon},null,8,["name"])]),key:"1"}:void 0,e.$attrs.titleOverride?{name:"titleOverride",fn:r(()=>[B("span",{innerHTML:e.$attrs.titleOverride},null,8,Ce)]),key:"2"}:void 0]),1032,["kind","title","title-id","content-id","important","pinned","hide-close","close-button-props","class","hide-icon","background-image","background-size","dialog-class","visually-hidden-close","visually-hidden-close-label"]),[[O,d.displayBanner]])])}const De=x(ne,[["render",Ie],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner_default.story.vue"]]);ne.__docgenInfo={displayName:"BannerDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner_default.story.vue"]};const we=""+new URL("dialpad-gradient-TIMLz1v7.png",import.meta.url).href;k.role={table:{disable:!0}};k.titleId={table:{defaultValue:{summary:"generated unique ID"}}};k.contentId={table:{defaultValue:{summary:"generated unique ID"}}};T.visuallyHiddenCloseLabel="Close Banner";const _e={title:"Components/Banner",component:te,args:T,argTypes:k,excludeStories:/.Data$/},o=(e,{argTypes:n})=>be(e,n,De),t={render:o,args:{title:"Optional title",action:"Action",kind:"base"},parameters:{percy:{args:{show:!0}}}},m={render:o,args:{...t.args,kind:"error"},parameters:t.parameters},p={render:o,args:{...t.args,kind:"info"},parameters:t.parameters},f={render:o,args:{...t.args,kind:"success"},parameters:t.parameters},g={render:o,args:{...t.args,kind:"warning"},parameters:t.parameters},h={render:o,args:{...t.args,pinned:!0},parameters:t.parameters},b={render:o,args:{...t.args,backgroundImage:we,backgroundSize:"contain",title:"",action:"",hideIcon:!0,dialogClass:"d-fc-neutral-white",default:"The power of Dialpad. On your desktop"},parameters:t.parameters};var z,H,N;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(N=(H=t.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var P,L,M;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'error'
  },
  parameters: Default.parameters
}`,...(M=(L=m.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var E,U,j;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'info'
  },
  parameters: Default.parameters
}`,...(j=(U=p.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var F,q,A;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'success'
  },
  parameters: Default.parameters
}`,...(A=(q=f.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var K,W,R;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'warning'
  },
  parameters: Default.parameters
}`,...(R=(W=g.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var G,J,Q;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    pinned: true
  },
  parameters: Default.parameters
}`,...(Q=(J=h.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Be=["argsData","argTypesData","Default","Error","Info","Success","Warning","Pinned","CustomBackground"],Ee=Object.freeze(Object.defineProperty({__proto__:null,CustomBackground:b,Default:t,Error:m,Info:p,Pinned:h,Success:f,Warning:g,__namedExportsOrder:Be,argTypesData:k,argsData:T,default:_e},Symbol.toStringTag,{value:"Module"}));export{Ee as B,t as D,m as E,p as I,h as P,f as S,g as W};
//# sourceMappingURL=banner.stories-YS-ogVHO.js.map
