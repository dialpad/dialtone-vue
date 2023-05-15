import{D as r}from"./icon-525487a4.js";import{n as o}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as _}from"./button-b421fc95.js";import{a as v,S as c}from"./sr_only_close_button-d8b00720.js";const u=["base","error","info","success","warning"],h=["alert","alertdialog","status"],y=new Map([["info","info"],["success","check-circle"],["warning","alert-triangle"],["error","alert-circle"],["base","bell"]]),b={name:"DtNoticeIcon",components:{DtIcon:r},props:{kind:{type:String,default:"base",validate(n){return u.includes(n)}}},computed:{defaultIcon(){return y.get(this.kind)}}};var d=function(){var e=this,t=e._self._c;return e.defaultIcon||e.$slots.default?t("div",{staticClass:"d-notice__icon",attrs:{"aria-hidden":"true"}},[e._t("default",function(){return[t("dt-icon",{attrs:{name:e.defaultIcon,size:"400"}})]})],2):e._e()},g=[];d._withStripped=!0;var i=o(b,d,g,!1,null,null,null,null);i.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/notice/notice_icon.vue";const C=i.exports;i.exports.__docgenInfo={displayName:"DtNoticeIcon",exportName:"default",description:"",tags:{},props:[{name:"kind",description:"Kind of icon",tags:{},values:["base","error","info","success","warning"],type:{name:"string"},defaultValue:{func:!1,value:"'base'"}}],slots:[{name:"default",description:"Slot for the main content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/notice/notice_icon.vue"]};const I={name:"DtNoticeContent",props:{title:{type:String,default:""},titleId:{type:String,default:void 0},contentId:{type:String,default:void 0}}};var f=function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-notice__content",attrs:{"data-qa":"notice-content"}},[e.title||e.$slots.titleOverride?t("p",{staticClass:"d-notice__title",attrs:{id:e.titleId,"data-qa":"notice-content-title"}},[e._t("titleOverride",function(){return[e._v(" "+e._s(e.title)+" ")]})],2):e._e(),t("p",{staticClass:"d-notice__message",attrs:{id:e.contentId,"data-qa":"notice-content-message"}},[e._t("default")],2)])},x=[];f._withStripped=!0;var s=o(I,f,x,!1,null,null,null,null);s.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/notice/notice_content.vue";const k=s.exports;s.exports.__docgenInfo={displayName:"DtNoticeContent",exportName:"default",description:"",tags:{},props:[{name:"title",description:"Title header of the notice. This can be left blank to remove the title from the notice entirely.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"titleId",description:`ID for the title element of the component. Useful for aria-describedby
or aria-labelledby or any other reason you may need an id to refer to the title.`,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"contentId",description:`ID for the content element of the component. Useful for aria-describedby
or aria-labelledby or any other reason you may need an id to refer to the content.`,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],slots:[{name:"titleOverride",description:"Slot for the title"},{name:"default",description:"Slot for main content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/notice/notice_content.vue"]};const S={name:"DtNoticeAction",components:{DtIcon:r,DtButton:_,SrOnlyCloseButton:v},mixins:[c],props:{closeButtonProps:{type:Object,default:()=>({})},hideClose:{type:Boolean,default:!1}},emits:["close"],computed:{noticeActionListeners(){return{...this.$listeners,click:n=>{this.close(),this.$emit("click",n)}}}},created(){!this.hideClose&&!this.closeButtonProps.ariaLabel&&console.error("Invalid props: you must pass in closeButtonProps.ariaLabel if the close button is displayed.")},mounted(){this.hideClose||(this.lastFocusedElement=document.activeElement)},beforeDestroy(){var n;(n=this.lastFocusedElement)==null||n.focus()},methods:{close(){this.$emit("close")}}};var m=function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-notice__actions",attrs:{"data-qa":"notice-content-actions"}},[e._t("default"),e.hideClose?e._e():t("dt-button",e._g(e._b({ref:"closeButton",attrs:{"data-qa":"dt-notice-action-close-button",size:"sm",importance:"clear",circle:"","aria-label":e.closeButtonProps.ariaLabel?e.closeButtonProps.ariaLabel:"Close"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("dt-icon",{attrs:{name:"close",size:"200"}})]},proxy:!0}],null,!1,1154370889)},"dt-button",e.closeButtonProps,!1),e.noticeActionListeners)),e.showVisuallyHiddenClose?t("sr-only-close-button",{attrs:{"visually-hidden-close-label":e.visuallyHiddenCloseLabel},on:{close:e.close}}):e._e()],2)},w=[];m._withStripped=!0;var a=o(S,m,w,!1,null,null,null,null);a.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/notice/notice_action.vue";const N=a.exports;a.exports.__docgenInfo={description:"",displayName:"DtNoticeAction",tags:{},exportName:"default",props:[{name:"visuallyHiddenClose",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"If true, a hidden close button is included for screen readers",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"visuallyHiddenCloseLabel",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"Label for the visually hidden close button\nRequired if visuallyHiddenClose is set to `true`",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"closeButtonProps",description:"Props for the notice close button.",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"hideClose",description:"Hides the close button from the notice",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"close",description:"Close button click event"},{name:"click",type:{names:["undefined"]}}],slots:[{name:"default",description:"Slot for main content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/sr_only_close_button.js","/home/runner/work/dialtone-vue/dialtone-vue/components/notice/notice_action.vue"]};const D={name:"DtNotice",components:{DtNoticeIcon:C,DtNoticeContent:k,DtNoticeAction:N},mixins:[c],props:{titleId:{type:String,default:void 0},contentId:{type:String,default:void 0},title:{type:String,default:""},role:{type:String,default:"status",validate(n){return h.includes(n)}},important:{type:Boolean,default:!1},kind:{type:String,default:"base",validate(n){return u.includes(n)}},closeButtonProps:{type:Object,default:()=>({})},hideClose:{type:Boolean,default:!1}},emits:["close"],computed:{noticeClass(){return["d-notice",{error:"d-notice--error",info:"d-notice--info",success:"d-notice--success",warning:"d-notice--warning",base:"d-notice--base"}[this.kind],{"d-notice--important":this.important}]}}};var p=function(){var e=this,t=e._self._c;return t("aside",{class:e.noticeClass,attrs:{"data-qa":"notice"}},[t("dt-notice-icon",{attrs:{kind:e.kind}},[e._t("icon")],2),t("dt-notice-content",e._g({attrs:{"title-id":e.titleId,"content-id":e.contentId,title:e.title,role:e.role},scopedSlots:e._u([{key:"titleOverride",fn:function(){return[e._t("titleOverride")]},proxy:!0}],null,!0)},e.$listeners),[e._t("default")],2),t("dt-notice-action",e._g({attrs:{"hide-close":e.hideClose,"close-button-props":e.closeButtonProps,"visually-hidden-close":e.visuallyHiddenClose,"visually-hidden-close-label":e.visuallyHiddenCloseLabel}},e.$listeners),[e._t("action")],2)],1)},V=[];p._withStripped=!0;var l=o(D,p,V,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/notice/notice.vue";const P=l.exports;l.exports.__docgenInfo={description:"A notice is an informational and assistive message that appears inline with content.",displayName:"DtNotice",tags:{see:[{description:"https://dialpad.design/components/notice.html",title:"see"}]},exportName:"default",props:[{name:"visuallyHiddenClose",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"If true, a hidden close button is included for screen readers",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"visuallyHiddenCloseLabel",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"Label for the visually hidden close button\nRequired if visuallyHiddenClose is set to `true`",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"titleId",description:`Sets an ID on the title element of the component. Useful for aria-describedby
or aria-labelledby or any other reason you may need an id to refer to the title.`,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"contentId",description:`Sets an ID on the content element of the component. Useful for aria-describedby
or aria-labelledby or any other reason you may need an id to refer to the content.`,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"title",description:"Title header of the notice. This can be left blank to remove the title from the notice entirely.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"role",description:`Provides a role for the notice. 'status' is used to communicate a message. 'alert' is used to communicate an
important message that does not contain any interactive elements. 'alertdialog' is used to communicate an
important message that does contain interactive elements.`,tags:{},values:["alert","alertdialog","status"],type:{name:"string"},defaultValue:{func:!1,value:"'status'"}},{name:"important",description:`Used in scenarios where the message needs to visually dominate the screen.
This will also change the aria role from status to alert.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"kind",description:"Severity level of the notice, sets the icon and background",tags:{},values:["base","error","info","success","warning"],type:{name:"string"},defaultValue:{func:!1,value:"'base'"}},{name:"closeButtonProps",description:"Props for the notice close button.",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"hideClose",description:"Hides the close button from the notice",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"close",description:"Close button click event"}],slots:[{name:"icon",description:"Slot for custom icon"},{name:"titleOverride",description:"Allows you to override the title, only use this if you need"},{name:"default",description:"the main textual content of the notice"},{name:"action",description:"Enter a possible action for the user to take, such as a link to another page"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/sr_only_close_button.js","/home/runner/work/dialtone-vue/dialtone-vue/components/notice/notice.vue"]};export{C as D,u as N,k as a,N as b,P as c,h as d};
//# sourceMappingURL=notice-6f2d5b95.js.map
