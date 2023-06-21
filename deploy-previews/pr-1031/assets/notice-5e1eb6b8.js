import{D as _}from"./icon-c1bc1987.js";import{a,o as s,f as m,k as n,l as i,d as u,s as w,t as D,g as V,b as y,w as d,m as B,n as O}from"./vue.esm-bundler-e62bdd6b.js";import{h as b}from"./utils-46af4dbd.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import{D as x}from"./button-803947a5.js";import{a as P,S as g}from"./sr_only_close_button-87d5dd11.js";const k=["base","error","info","success","warning"],$=["alert","alertdialog","status"],H=new Map([["info","info"],["success","check-circle"],["warning","alert-triangle"],["error","alert-circle"],["base","bell"]]),C={name:"DtNoticeIcon",components:{DtIcon:_},props:{kind:{type:String,default:"base",validate(e){return k.includes(e)}}},data(){return{hasSlotContent:b}},computed:{defaultIcon(){return H.get(this.kind)}}},E={key:0,"aria-hidden":"true",class:"d-notice__icon"};function L(e,l,t,p,c,o){const r=a("dt-icon");return o.defaultIcon||c.hasSlotContent(e.$slots.default)?(s(),m("div",E,[n(" @slot Slot for the main content "),i(e.$slots,"default",{},()=>[u(r,{name:o.defaultIcon,size:"400"},null,8,["name"])])])):n("v-if",!0)}const j=f(C,[["render",L],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/notice/notice_icon.vue"]]);C.__docgenInfo={displayName:"DtNoticeIcon",exportName:"default",description:"",tags:{},props:[{name:"kind",description:"Kind of icon",tags:{},values:["base","error","info","success","warning"],type:{name:"string"},defaultValue:{func:!1,value:"'base'"}}],slots:[{name:"default",description:"Slot for the main content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/notice/notice_icon.vue"]};const S={name:"DtNoticeContent",props:{title:{type:String,default:""},titleId:{type:String,default:void 0},contentId:{type:String,default:void 0}},data(){return{hasSlotContent:b}}},T={class:"d-notice__content","data-qa":"notice-content"},q=["id"],A=["id"];function F(e,l,t,p,c,o){return s(),m("div",T,[t.title||c.hasSlotContent(e.$slots.titleOverride)?(s(),m("p",{key:0,id:t.titleId,class:"d-notice__title","data-qa":"notice-content-title"},[n(" @slot Slot for the title  "),i(e.$slots,"titleOverride",{},()=>[w(D(t.title),1)])],8,q)):n("v-if",!0),V("p",{id:t.contentId,class:"d-notice__message","data-qa":"notice-content-message"},[n(" @slot Slot for main content "),i(e.$slots,"default")],8,A)])}const U=f(S,[["render",F],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/notice/notice_content.vue"]]);S.__docgenInfo={displayName:"DtNoticeContent",exportName:"default",description:"",tags:{},props:[{name:"title",description:"Title header of the notice. This can be left blank to remove the title from the notice entirely.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"titleId",description:`ID for the title element of the component. Useful for aria-describedby
or aria-labelledby or any other reason you may need an id to refer to the title.`,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"contentId",description:`ID for the content element of the component. Useful for aria-describedby
or aria-labelledby or any other reason you may need an id to refer to the content.`,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],slots:[{name:"titleOverride",description:"Slot for the title"},{name:"default",description:"Slot for main content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/notice/notice_content.vue"]};const I={name:"DtNoticeAction",components:{DtIcon:_,DtButton:x,SrOnlyCloseButton:P},mixins:[g],props:{closeButtonProps:{type:Object,default:()=>({})},hideClose:{type:Boolean,default:!1}},emits:["close"],created(){!this.hideClose&&!this.closeButtonProps.ariaLabel&&console.error("Invalid props: you must pass in closeButtonProps.ariaLabel if the close button is displayed.")},mounted(){this.hideClose||(this.lastFocusedElement=document.activeElement)},beforeUnmount(){var e;(e=this.lastFocusedElement)==null||e.focus()},methods:{close(){this.$emit("close")}}},K={class:"d-notice__actions","data-qa":"notice-content-actions"};function z(e,l,t,p,c,o){const r=a("dt-icon"),h=a("dt-button"),v=a("sr-only-close-button");return s(),m("div",K,[n(" @slot Slot for main content "),i(e.$slots,"default"),t.hideClose?n("v-if",!0):(s(),y(h,B({key:0,ref:"closeButton","data-qa":"dt-notice-action-close-button",size:"sm",importance:"clear",circle:"","aria-label":t.closeButtonProps.ariaLabel?t.closeButtonProps.ariaLabel:"Close"},t.closeButtonProps,{onClick:o.close}),{icon:d(()=>[u(r,{name:"close",size:"200"})]),_:1},16,["aria-label","onClick"])),e.showVisuallyHiddenClose?(s(),y(v,{key:1,"visually-hidden-close-label":e.visuallyHiddenCloseLabel,onClose:o.close},null,8,["visually-hidden-close-label","onClose"])):n("v-if",!0)])}const R=f(I,[["render",z],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/notice/notice_action.vue"]]);I.__docgenInfo={description:"",displayName:"DtNoticeAction",tags:{},exportName:"default",props:[{name:"visuallyHiddenClose",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"If true, a hidden close button is included for screen readers",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"visuallyHiddenCloseLabel",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"Label for the visually hidden close button\nRequired if visuallyHiddenClose is set to `true`",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"closeButtonProps",description:"Props for the notice close button.",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"hideClose",description:"Hides the close button from the notice",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"close",description:"Close button click event"}],slots:[{name:"default",description:"Slot for main content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/sr_only_close_button.js","/home/runner/work/dialtone-vue/dialtone-vue/components/notice/notice_action.vue"]};const N={name:"DtNotice",components:{DtNoticeIcon:j,DtNoticeContent:U,DtNoticeAction:R},mixins:[g],props:{titleId:{type:String,default:void 0},contentId:{type:String,default:void 0},title:{type:String,default:""},role:{type:String,default:"status",validate(e){return $.includes(e)}},important:{type:Boolean,default:!1},kind:{type:String,default:"base",validate(e){return k.includes(e)}},closeButtonProps:{type:Object,default:()=>({})},hideClose:{type:Boolean,default:!1}},emits:["close","click"],computed:{noticeClass(){return["d-notice",{error:"d-notice--error",info:"d-notice--info",success:"d-notice--success",warning:"d-notice--warning",base:"d-notice--base"}[this.kind],{"d-notice--important":this.important}]}}};function M(e,l,t,p,c,o){const r=a("dt-notice-icon"),h=a("dt-notice-content"),v=a("dt-notice-action");return s(),m("aside",{class:O(o.noticeClass),"data-qa":"notice"},[u(r,{kind:t.kind},{default:d(()=>[n(" @slot Slot for custom icon "),i(e.$slots,"icon")]),_:3},8,["kind"]),u(h,{"title-id":t.titleId,"content-id":t.contentId,title:t.title,role:t.role},{titleOverride:d(()=>[n(` @slot Allows you to override the title, only use this if you need
        to override with something other than text. Otherwise use the "title" prop. `),i(e.$slots,"titleOverride")]),default:d(()=>[i(e.$slots,"default")]),_:3},8,["title-id","content-id","title","role"]),u(v,{"hide-close":t.hideClose,"close-button-props":t.closeButtonProps,"visually-hidden-close":e.visuallyHiddenClose,"visually-hidden-close-label":e.visuallyHiddenCloseLabel,onClose:l[0]||(l[0]=G=>e.$emit("close"))},{default:d(()=>[n(" @slot Enter a possible action for the user to take, such as a link to another page "),i(e.$slots,"action")]),_:3},8,["hide-close","close-button-props","visually-hidden-close","visually-hidden-close-label"])],2)}const ee=f(N,[["render",M],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/notice/notice.vue"]]);N.__docgenInfo={description:"A notice is an informational and assistive message that appears inline with content.",displayName:"DtNotice",tags:{see:[{description:"https://dialpad.design/components/notice.html",title:"see"}]},exportName:"default",props:[{name:"visuallyHiddenClose",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"If true, a hidden close button is included for screen readers",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"visuallyHiddenCloseLabel",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"Label for the visually hidden close button\nRequired if visuallyHiddenClose is set to `true`",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"titleId",description:`Sets an ID on the title element of the component. Useful for aria-describedby
or aria-labelledby or any other reason you may need an id to refer to the title.`,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"contentId",description:`Sets an ID on the content element of the component. Useful for aria-describedby
or aria-labelledby or any other reason you may need an id to refer to the content.`,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"title",description:"Title header of the notice. This can be left blank to remove the title from the notice entirely.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"role",description:`Provides a role for the notice. 'status' is used to communicate a message. 'alert' is used to communicate an
important message that does not contain any interactive elements. 'alertdialog' is used to communicate an
important message that does contain interactive elements.`,tags:{},values:["alert","alertdialog","status"],type:{name:"string"},defaultValue:{func:!1,value:"'status'"}},{name:"important",description:`Used in scenarios where the message needs to visually dominate the screen.
This will also change the aria role from status to alert.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"kind",description:"Severity level of the notice, sets the icon and background",tags:{},values:["base","error","info","success","warning"],type:{name:"string"},defaultValue:{func:!1,value:"'base'"}},{name:"closeButtonProps",description:"Props for the notice close button.",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"hideClose",description:"Hides the close button from the notice",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"close",description:"Close button click event"},{name:"click",description:"Native button click event",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"icon",description:"Slot for custom icon"},{name:"titleOverride",description:"Allows you to override the title, only use this if you need"},{name:"default",description:"the main textual content of the notice"},{name:"action",description:"Enter a possible action for the user to take, such as a link to another page"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/sr_only_close_button.js","/home/runner/work/dialtone-vue/dialtone-vue/components/notice/notice.vue"]};export{j as D,k as N,U as a,R as b,ee as c,$ as d};
//# sourceMappingURL=notice-5e1eb6b8.js.map
