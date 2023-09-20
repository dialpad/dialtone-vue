import{D as g,a as y,b as v,N as k}from"./notice-5d731154.js";import{M as S}from"./modal-f96ddab9.js";import{u as d}from"./utils-6614c5e4.js";import{S as _}from"./sr_only_close_button-63b93df3.js";import{k as l,d as C,e as I,l as w,m as i,j as a,p as u,n as c,L as B,y as V,o as m,u as s}from"./vue.esm-bundler-0b5a673d.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";const f={name:"DtBanner",components:{DtNoticeIcon:g,DtNoticeContent:y,DtNoticeAction:v},mixins:[S,_],props:{titleId:{type:String,default(){return d.getUniqueString()}},contentId:{type:String,default(){return d.getUniqueString()}},title:{type:String,default:""},important:{type:Boolean,default:!1},pinned:{type:Boolean,default:!1},kind:{type:String,default:"base",validate(e){return k.includes(e)}},closeButtonProps:{type:Object,default:()=>({})},hideClose:{type:Boolean,default:!1},hideIcon:{type:Boolean,default:!1},dialogClass:{type:String,default:""},backgroundImage:{type:String,default:""},backgroundSize:{type:String,default:"cover"}},emits:["close"],computed:{role(){return this.important?"alertdialog":"status"},bannerClass(){return["d-banner",{error:"d-banner--error",info:"d-banner--info",success:"d-banner--success",warning:"d-banner--warning",base:"d-banner--base"}[this.kind],{"d-banner--important":this.important,"d-banner--pinned":this.pinned}]},bannerBackgroundImage(){return this.backgroundImage===""?null:`background-image: url(${this.backgroundImage});
              background-size: ${this.backgroundSize};`}},mounted(){this.important&&this.focusFirstElement()},methods:{trapFocus(e){this.important&&this.focusTrappedTabPress(e)}}},z=["role","aria-labelledby","aria-describedby"];function D(e,o,t,N,O,n){const p=l("dt-notice-icon"),h=l("dt-notice-content"),b=l("dt-notice-action");return m(),C("aside",{class:c(n.bannerClass),style:B(n.bannerBackgroundImage),onKeydown:o[1]||(o[1]=V((...r)=>n.trapFocus&&n.trapFocus(...r),["tab"]))},[I("div",{class:c(["d-banner__dialog",t.dialogClass]),role:n.role,"aria-labelledby":t.titleId,"aria-describedby":t.contentId},[t.hideIcon?a("v-if",!0):(m(),w(p,{key:0,kind:t.kind},{default:i(()=>[a(" @slot Slot for custom icon "),s(e.$slots,"icon")]),_:3},8,["kind"])),u(h,{"title-id":t.titleId,"content-id":t.contentId,title:t.title},{titleOverride:i(()=>[a(" eslint-disable-next-line max-len "),a(' @slot Allows you to override the title, only use this if you need to override with something other than text. Otherwise use the "title" prop. '),s(e.$slots,"titleOverride")]),default:i(()=>[s(e.$slots,"default")]),_:3},8,["title-id","content-id","title"]),u(b,{"hide-close":t.hideClose,"close-button-props":t.closeButtonProps,"visually-hidden-close":e.visuallyHiddenClose,"visually-hidden-close-label":e.visuallyHiddenCloseLabel,onClose:o[0]||(o[0]=r=>e.$emit("close"))},{default:i(()=>[a(" @slot Enter a possible action for the user to take, such as a link to another page "),s(e.$slots,"action")]),_:3},8,["hide-close","close-button-props","visually-hidden-close","visually-hidden-close-label"])],10,z)],38)}const E=x(f,[["render",D],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner.vue"]]);f.__docgenInfo={description:`Banners are a type of notice, delivering system and engagement messaging.
These are highly intrusive notices and should be used sparingly and appropriately.`,displayName:"DtBanner",tags:{see:[{description:"https://dialpad.design/components/banner.html",title:"see"}]},exportName:"default",props:[{name:"visuallyHiddenClose",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"If true, a hidden close button is included for screen readers",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"visuallyHiddenCloseLabel",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"Label for the visually hidden close button\nRequired if visuallyHiddenClose is set to `true`",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"titleId",description:`Sets an ID on the title element of the component. Useful for aria-describedby
or aria-labelledby or any other reason you may need an id to refer to the title.`,type:{name:"string"},defaultValue:{func:!0,value:"function() { return util.getUniqueString(); }"}},{name:"contentId",description:`Sets an ID on the content element of the component. Useful for aria-describedby
or aria-labelledby or any other reason you may need an id to refer to the content.`,type:{name:"string"},defaultValue:{func:!0,value:"function() { return util.getUniqueString(); }"}},{name:"title",description:"Title header of the notice. This can be left blank to remove the title from the notice entirely.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"important",description:`Used in scenarios where the message needs to visually dominate the screen.
This will also change the aria role from status to alertdialog.
and will modally trap the keyboard focus in the dialog as soon as it displays.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"pinned",description:"Pins the banner to the top of the window and pushes all app content down.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"kind",description:"Severity level of the notice, sets the icon and background",tags:{},values:["base","error","info","success","warning"],type:{name:"string"},defaultValue:{func:!1,value:"'base'"}},{name:"closeButtonProps",description:"Props for the notice close button.",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"hideClose",description:"Hides the close button from the notice",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hideIcon",description:"Hides the icon from the notice",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dialogClass",description:"Inner dialog class",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"backgroundImage",description:"Banner background image",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"backgroundSize",description:`Background image size, follows the background-size CSS property values
<a class="d-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-size" target="_blank">
  CSS background-sizes
</a>`,type:{name:"string"},defaultValue:{func:!1,value:"'cover'"}}],events:[{name:"close",description:"Close button click event"}],slots:[{name:"icon",description:"Slot for custom icon"},{name:"titleOverride",description:'Allows you to override the title, only use this if you need to override with something other than text. Otherwise use the "title" prop.'},{name:"default",description:"the main textual content of the banner"},{name:"action",description:"Enter a possible action for the user to take, such as a link to another page"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/modal.js","/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/sr_only_close_button.js","/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner.vue"]};export{E as D};
//# sourceMappingURL=banner-c1cf8fe0.js.map
