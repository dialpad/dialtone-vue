import{D as oe,a as se,b as re,N as ie}from"./notice-e4ad563e.js";import{M as le}from"./modal-f96ddab9.js";import{u as $}from"./utils-61960a91.js";import{S as de}from"./sr_only_close_button-d361d588.js";import{a as l,f as I,g as D,b as ue,w as a,k as c,d as i,n as _,x as ce,y as me,o as y,l as S,e as V,v as O,s as C,z as pe,t as fe}from"./vue.esm-bundler-e62bdd6b.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{D as ge}from"./button-6ea5d488.js";import{D as he}from"./icon-6ea2a40b.js";import{c as be}from"./storybook_utils-aefd525a.js";import{a as T,b as k}from"./notice.stories-c80f54ba.js";const ee={name:"DtBanner",components:{DtNoticeIcon:oe,DtNoticeContent:se,DtNoticeAction:re},mixins:[le,de],props:{titleId:{type:String,default(){return $.getUniqueString()}},contentId:{type:String,default(){return $.getUniqueString()}},title:{type:String,default:""},important:{type:Boolean,default:!1},pinned:{type:Boolean,default:!1},kind:{type:String,default:"base",validate(e){return ie.includes(e)}},closeButtonProps:{type:Object,default:()=>({})},hideClose:{type:Boolean,default:!1},hideIcon:{type:Boolean,default:!1},dialogClass:{type:String,default:""},backgroundImage:{type:String,default:""},backgroundSize:{type:String,default:"cover"}},emits:["close"],computed:{role(){return this.important?"alertdialog":"status"},bannerClass(){return["d-banner",{error:"d-banner--error",info:"d-banner--info",success:"d-banner--success",warning:"d-banner--warning",base:"d-banner--base"}[this.kind],{"d-banner--important":this.important,"d-banner--pinned":this.pinned}]},bannerBackgroundImage(){return this.backgroundImage===""?null:`background-image: url(${this.backgroundImage});
              background-size: ${this.backgroundSize};`}},mounted(){this.important&&this.focusFirstElement()},methods:{trapFocus(e){this.important&&this.focusTrappedTabPress(e)}}},ye=["role","aria-labelledby","aria-describedby"];function ke(e,o,n,ae,d,s){const v=l("dt-notice-icon"),w=l("dt-notice-content"),B=l("dt-notice-action");return y(),I("aside",{class:_(s.bannerClass),style:ce(s.bannerBackgroundImage),onKeydown:o[1]||(o[1]=me((...u)=>s.trapFocus&&s.trapFocus(...u),["tab"]))},[D("div",{class:_(["d-banner__dialog",n.dialogClass]),role:s.role,"aria-labelledby":n.titleId,"aria-describedby":n.contentId},[n.hideIcon?c("v-if",!0):(y(),ue(v,{key:0,kind:n.kind},{default:a(()=>[c(" @slot Slot for custom icon "),S(e.$slots,"icon")]),_:3},8,["kind"])),i(w,{"title-id":n.titleId,"content-id":n.contentId,title:n.title},{titleOverride:a(()=>[c(" eslint-disable-next-line max-len "),c(' @slot Allows you to override the title, only use this if you need to override with something other than text. Otherwise use the "title" prop. '),S(e.$slots,"titleOverride")]),default:a(()=>[S(e.$slots,"default")]),_:3},8,["title-id","content-id","title"]),i(B,{"hide-close":n.hideClose,"close-button-props":n.closeButtonProps,"visually-hidden-close":e.visuallyHiddenClose,"visually-hidden-close-label":e.visuallyHiddenCloseLabel,onClose:o[0]||(o[0]=u=>e.$emit("close"))},{default:a(()=>[c(" @slot Enter a possible action for the user to take, such as a link to another page "),S(e.$slots,"action")]),_:3},8,["hide-close","close-button-props","visually-hidden-close","visually-hidden-close-label"])],10,ye)],38)}const ne=x(ee,[["render",ke],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner.vue"]]);ee.__docgenInfo={description:`Banners are a type of notice, delivering system and engagement messaging.
These are highly intrusive notices and should be used sparingly and appropriately.`,displayName:"DtBanner",tags:{see:[{description:"https://dialpad.design/components/banner.html",title:"see"}]},exportName:"default",props:[{name:"visuallyHiddenClose",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"If true, a hidden close button is included for screen readers",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"visuallyHiddenCloseLabel",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"Label for the visually hidden close button\nRequired if visuallyHiddenClose is set to `true`",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"titleId",description:`Sets an ID on the title element of the component. Useful for aria-describedby
or aria-labelledby or any other reason you may need an id to refer to the title.`,type:{name:"string"},defaultValue:{func:!0,value:"function() { return util.getUniqueString(); }"}},{name:"contentId",description:`Sets an ID on the content element of the component. Useful for aria-describedby
or aria-labelledby or any other reason you may need an id to refer to the content.`,type:{name:"string"},defaultValue:{func:!0,value:"function() { return util.getUniqueString(); }"}},{name:"title",description:"Title header of the notice. This can be left blank to remove the title from the notice entirely.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"important",description:`Used in scenarios where the message needs to visually dominate the screen.
This will also change the aria role from status to alertdialog.
and will modally trap the keyboard focus in the dialog as soon as it displays.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"pinned",description:"Pins the banner to the top of the window and pushes all app content down.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"kind",description:"Severity level of the notice, sets the icon and background",tags:{},values:["base","error","info","success","warning"],type:{name:"string"},defaultValue:{func:!1,value:"'base'"}},{name:"closeButtonProps",description:"Props for the notice close button.",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"hideClose",description:"Hides the close button from the notice",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hideIcon",description:"Hides the icon from the notice",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dialogClass",description:"Inner dialog class",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"backgroundImage",description:"Banner background image",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"backgroundSize",description:`Background image size, follows the background-size CSS property values
<a class="d-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-size" target="_blank">
  CSS background-sizes
</a>`,type:{name:"string"},defaultValue:{func:!1,value:"'cover'"}}],events:[{name:"close",description:"Close button click event"}],slots:[{name:"icon",description:"Slot for custom icon"},{name:"titleOverride",description:'Allows you to override the title, only use this if you need to override with something other than text. Otherwise use the "title" prop.'},{name:"default",description:"the main textual content of the banner"},{name:"action",description:"Enter a possible action for the user to take, such as a link to another page"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/modal.js","/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/sr_only_close_button.js","/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner.vue"]};const te={name:"BannerDefault",components:{DtBanner:ne,DtButton:ge,DtIcon:he},data(){return{displayBanner:this.$attrs.show}},computed:{shouldInvertButton(){return this.$attrs.kind==="base"||this.$attrs.kind==="error"||this.$attrs.kind==="info"},isInverted(){return this.$attrs.important&&this.shouldInvertButton},buttonKind(){return this.isInverted?"inverted":"muted"},linkClass(){return this.isInverted?"d-link--inverted":"d-link--muted"},buttonCloseProps(){return{...this.$attrs.closeButtonProps,kind:this.buttonKind,ariaLabel:"Close"}}}},ve=["innerHTML"],Se={key:1},Ce=["innerHTML"];function Ie(e,o,n,ae,d,s){const v=l("dt-button"),w=l("dt-icon"),B=l("dt-banner");return y(),I("div",null,[V(i(v,{onClick:o[0]||(o[0]=u=>d.displayBanner=!0)},{default:a(()=>[C(" Click to show! ")]),_:1},512),[[O,!d.displayBanner]]),V(i(B,{kind:e.$attrs.kind,title:e.$attrs.title,"title-id":e.$attrs.titleId,"content-id":e.$attrs.contentId,important:e.$attrs.important,pinned:e.$attrs.pinned,"hide-close":e.$attrs.hideClose,"close-button-props":s.buttonCloseProps,class:_({"d-ps-sticky":e.$attrs.show}),"hide-icon":e.$attrs.hideIcon,"background-image":e.$attrs.backgroundImage,"background-size":e.$attrs.backgroundSize,"dialog-class":e.$attrs.dialogClass,"visually-hidden-close":e.$attrs.visuallyHiddenClose,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel,onClose:o[1]||(o[1]=u=>{d.displayBanner=!1,e.$attrs.onClose(u)})},pe({default:a(()=>[e.defaultSlot?(y(),I("span",{key:0,innerHTML:e.defaultSlot},null,8,ve)):(y(),I("span",Se,[C(" Message body with "),D("a",{href:"#",class:_(["d-link",s.linkClass])},"a link",2),C(". ")]))]),_:2},[e.$attrs.action?{name:"action",fn:a(()=>[i(v,{kind:s.buttonKind,importance:"outlined",onClick:e.$attrs.onClick},{default:a(()=>[C(fe(e.$attrs.action),1)]),_:1},8,["kind","onClick"])]),key:"0"}:void 0,e.$attrs.icon?{name:"icon",fn:a(()=>[i(w,{name:e.$attrs.icon},null,8,["name"])]),key:"1"}:void 0,e.$attrs.titleOverride?{name:"titleOverride",fn:a(()=>[D("span",{innerHTML:e.$attrs.titleOverride},null,8,Ce)]),key:"2"}:void 0]),1032,["kind","title","title-id","content-id","important","pinned","hide-close","close-button-props","class","hide-icon","background-image","background-size","dialog-class","visually-hidden-close","visually-hidden-close-label"]),[[O,d.displayBanner]])])}const _e=x(te,[["render",Ie],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner_default.story.vue"]]);te.__docgenInfo={displayName:"BannerDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner_default.story.vue"]};const we=""+new URL("dialpad-gradient-fc68f20e.png",import.meta.url).href;k.role={table:{disable:!0}};k.titleId={table:{defaultValue:{summary:"generated unique ID"}}};k.contentId={table:{defaultValue:{summary:"generated unique ID"}}};T.visuallyHiddenCloseLabel="Close Banner";const Be={title:"Components/Banner",component:ne,args:T,argTypes:k,excludeStories:/.Data$/},r=e=>be(e,_e),t={render:r,args:{title:"Optional title",action:"Action",kind:"base"}},m={render:r,args:{...t.args,kind:"error"}},p={render:r,args:{...t.args,kind:"info"}},f={render:r,args:{...t.args,kind:"success"}},g={render:r,args:{...t.args,kind:"warning"}},h={render:r,args:{...t.args,pinned:!0}},b={render:r,args:{...t.args,backgroundImage:we,backgroundSize:"contain",title:"",action:"",hideIcon:!0,dialogClass:"d-fc-white",default:"The power of Dialpad. On your desktop"}};var z,H,N;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: 'Optional title',
    action: 'Action',
    kind: 'base'
  }
}`,...(N=(H=t.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var P,L,E;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'error'
  }
}`,...(E=(L=m.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var M,U,j;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'info'
  }
}`,...(j=(U=p.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var F,q,K;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'success'
  }
}`,...(K=(q=f.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var A,W,R;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'warning'
  }
}`,...(R=(W=g.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var G,J,Q;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    pinned: true
  }
}`,...(Q=(J=h.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const De=["argsData","argTypesData","Default","Error","Info","Success","Warning","Pinned","CustomBackground"],Me=Object.freeze(Object.defineProperty({__proto__:null,CustomBackground:b,Default:t,Error:m,Info:p,Pinned:h,Success:f,Warning:g,__namedExportsOrder:De,argTypesData:k,argsData:T,default:Be},Symbol.toStringTag,{value:"Module"}));export{Me as B,t as D,m as E,p as I,h as P,f as S,g as W,ne as a};
//# sourceMappingURL=banner.stories-b81e0e05.js.map
