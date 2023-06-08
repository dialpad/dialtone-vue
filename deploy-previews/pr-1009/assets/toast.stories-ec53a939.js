import{a as p}from"./chunk-OPEUWD42-a3b45fd8.js";import{u as f,g as U,c as j}from"./storybook_utils-be1af372.js";import{D as F,a as R,b as W,N as H}from"./notice-f68c1c4b.js";import{S as K}from"./sr_only_close_button-30ad63aa.js";import{n as P}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as z}from"./button-9102a84a.js";import{D as G}from"./icon-49f0abb3.js";const J=["status","alert"],h=6e3,Q={name:"DtToast",components:{DtNoticeIcon:F,DtNoticeContent:R,DtNoticeAction:W},mixins:[K],props:{titleId:{type:String,default(){return f.getUniqueString()}},contentId:{type:String,default(){return f.getUniqueString()}},title:{type:String,default:""},message:{type:String,default:""},role:{type:String,default:"status",validator:n=>J.includes(n)},kind:{type:String,default:"base",validator:n=>H.includes(n)},important:{type:Boolean,default:!1},show:{type:Boolean,default:!1},closeButtonProps:{type:Object,default:()=>({})},hideClose:{type:Boolean,default:!1},duration:{type:Number,default:null,validator:n=>n>=h}},emits:["close","update:show"],data(){return{isShown:!1,minDuration:h}},computed:{kindClass(){return{error:"d-toast--error",info:"d-toast--info",success:"d-toast--success",warning:"d-toast--warning",base:"d-toast--base"}[this.kind]},noticeActionListeners(){return{...this.$listeners,close:n=>{this.isShown=!1,this.$emit("update:show",!1),this.$emit("close",n)}}},shouldSetTimeout(){return!!this.duration&&this.duration>=this.minDuration}},watch:{show:{handler:function(n){this.isShown=n,n?this.setTimeout():clearTimeout(this.displayTimer)},immediate:!0}},destroyed(){this.shouldSetTimeout&&clearTimeout(this.displayTimer)},methods:{setTimeout(){this.shouldSetTimeout&&(this.displayTimer=setTimeout(()=>{this.isShown=!1,this.$emit("update:show",!1)},this.duration))}}};var $=function(){var e=this,t=e._self._c;return e.isShown?t("div",{class:["d-toast",e.kindClass,{"d-toast--important":e.important}],attrs:{"data-qa":"dt-toast","aria-hidden":(!e.isShown).toString()}},[t("div",{staticClass:"d-toast__dialog"},[t("dt-notice-icon",e._g({attrs:{kind:e.kind}},e.$listeners),[e._t("icon")],2),t("dt-notice-content",e._g({attrs:{"title-id":e.titleId,"content-id":e.contentId,title:e.title,role:e.role},scopedSlots:e._u([{key:"titleOverride",fn:function(){return[e._t("titleOverride")]},proxy:!0}],null,!0)},e.$listeners),[e._t("default",function(){return[e._v(" "+e._s(e.message)+" ")]})],2),t("dt-notice-action",e._g({attrs:{"hide-close":e.hideClose,"close-button-props":e.closeButtonProps,"visually-hidden-close":e.visuallyHiddenClose,"visually-hidden-close-label":e.visuallyHiddenCloseLabel}},e.noticeActionListeners),[e._t("action")],2)],1)]):e._e()},X=[];$._withStripped=!0;var c=P(Q,$,X,!1,null,null,null,null);c.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/toast/toast.vue";const q=c.exports;c.exports.__docgenInfo={description:`A toast notice, sometimes called a snackbar, is a time-based message that appears based on users' actions.
It contains at-a-glance information about outcomes and can be paired with actions.`,displayName:"DtToast",tags:{see:[{description:"https://dialpad.design/components/toast.html",title:"see"}]},exportName:"default",props:[{name:"visuallyHiddenClose",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"If true, a hidden close button is included for screen readers",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"visuallyHiddenCloseLabel",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"Label for the visually hidden close button\nRequired if visuallyHiddenClose is set to `true`",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"titleId",description:`Sets an ID on the title element of the component. Useful for aria-describedby
or aria-labelledby or any other reason you may need an id to refer to the title.`,type:{name:"string"},defaultValue:{func:!0,value:"function() { return util.getUniqueString(); }"}},{name:"contentId",description:`Sets an ID on the content element of the component. Useful for aria-describedby
or aria-labelledby or any other reason you may need an id to refer to the content.`,type:{name:"string"},defaultValue:{func:!0,value:"function() { return util.getUniqueString(); }"}},{name:"title",description:"Title header of the toast. This can be left blank to remove the title from the toast entirely.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"message",description:"Message of the toast. Overridden by default slot.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"role",description:`Provides a role for the toast. 'status' is used by default to communicate a message. 'alert' is used to
communicate an important message like an error that does not contain any interactive elements.`,tags:{},values:["status","alert"],type:{name:"string"},defaultValue:{func:!1,value:"'status'"}},{name:"kind",description:"Severity level of the toast, sets the icon and background",tags:{},values:["base","error","info","success","warning"],type:{name:"string"},defaultValue:{func:!1,value:"'base'"}},{name:"important",description:"Used in scenarios where the message needs to visually dominate the screen.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"show",description:`Controls whether the toast is shown. If a valid duration is provided, the toast will disappear
after reaching the duration time, so it's convenient to use \`.sync\` modifier with this prop to update
the data in your component.
Supports .sync modifier`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"closeButtonProps",description:"Props for the toast close button.",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"hideClose",description:"Hides the close button from the toast",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"duration",description:`The duration in ms the toast will display before disappearing.
The toast won't disappear if the duration is not provided.
If it's provided, it should be equal to or greater than 6000.`,type:{name:"number"},defaultValue:{func:!1,value:"null"}}],events:[{name:"close",description:"Close button click event",type:{names:["undefined"]}},{name:"update:show",description:"Sync show value",type:{names:["undefined"]}}],slots:[{name:"icon",description:"Slot for custom icon"},{name:"titleOverride",description:"Allows you to override the title, only use this if you need to override"},{name:"default",description:"the main textual content of the toast"},{name:"action",description:"Enter a possible action for the user to take, such as a link to another page"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/sr_only_close_button.js","/home/runner/work/dialtone-vue/dialtone-vue/components/toast/toast.vue"]};const Y={name:"ToastDefault",components:{DtToast:q,DtButton:z,DtIcon:G},data(){return{isShown:this.show}},computed:{shouldInvertButton(){return this.kind==="base"||this.kind==="error"||this.kind==="info"},isInverted(){return this.important&&this.shouldInvertButton},buttonKind(){return this.isInverted?"inverted":"muted"},linkClass(){return this.isInverted?"d-link--inverted":"d-link--muted"},buttonCloseProps(){return{...this.closeButtonProps,kind:this.buttonKind,ariaLabel:"Close"}}},watch:{show:function(n){this.isShown=n}},methods:{buttonClicked(){this.isShown=!0}}};var A=function(){var e=this,t=e._self._c;return t("div",[t("dt-button",{on:{click:e.buttonClicked}},[e._v(" Click to show! ")]),t("aside",{staticClass:"d-toast-wrapper"},[t("dt-toast",{ref:"toast",attrs:{show:e.isShown,kind:e.kind,title:e.title,message:e.message,"title-id":e.titleId,"content-id":e.contentId,important:e.important,"hide-close":e.hideClose,duration:e.duration,"close-button-props":e.buttonCloseProps,"visually-hidden-close":e.visuallyHiddenClose,"visually-hidden-close-label":e.visuallyHiddenCloseLabel},on:{"update:show":function(d){e.isShown=d},close:function(d){return e.onClose(d)}}},[e.defaultSlot?t("span",{domProps:{innerHTML:e._s(e.defaultSlot)}}):t("span",[e._v(" Message body with "),t("a",{staticClass:"d-link",class:e.linkClass,attrs:{href:"#"}},[e._v("a link")]),e._v(". ")]),t("template",{slot:"action"},[e.action?t("span",{domProps:{innerHTML:e._s(e.action)}}):t("dt-button",{attrs:{size:"sm",importance:"outlined",kind:e.buttonKind},on:{click:e.onClick}},[e._v(" Action ")])],1),e.icon?t("template",{slot:"icon"},[t("dt-icon",{attrs:{name:e.icon}})],1):e._e(),e.titleOverride?t("template",{slot:"titleOverride"},[t("span",{domProps:{innerHTML:e._s(e.titleOverride)}})]):e._e()],2)],1)],1)},Z=[];A._withStripped=!0;var m=P(Y,A,Z,!1,null,null,null,null);m.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/toast/toast_default.story.vue";const ee=m.exports;m.exports.__docgenInfo={displayName:"ToastDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/toast/toast_default.story.vue"]};const te=U(),E={duration:6e3,onClose:p("close"),onClick:p("click"),visuallyHiddenCloseLabel:"Close Toast"},M={titleOverride:{table:{type:{summary:"VNode"}},control:{type:"text"}},icon:{options:te,table:{type:{summary:"component"}},control:{type:"select",labels:{undefined:"(empty)"}}},default:{table:{type:{summary:"VNode"}},control:{type:"text"}},action:{table:{type:{summary:"VNode"}},control:{type:"text"}},titleId:{table:{defaultValue:{summary:"generated unique ID"}}},contentId:{table:{defaultValue:{summary:"generated unique ID"}}},kind:{options:H,control:{type:"select"}},show:{table:{defaultValue:{summary:"false"}}},duration:{table:{defaultValue:{summary:"null"}}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}},close:{description:"Close button click event",table:{type:{summary:"event"}}}},ne={title:"Components/Toast",component:q,args:E,argTypes:M,excludeStories:/.*Data$/},a=(n,{argTypes:e})=>j(n,e,ee),s={render:a,args:{title:"Base title (optional)",kind:"base"}},o={render:a,args:{...s.args,title:"Error title (optional)",kind:"error"}},i={render:a,args:{...s.args,title:"Info title (optional)",kind:"info"}},r={render:a,args:{...s.args,title:"Success title (optional)",kind:"success"}},l={render:a,args:{...s.args,title:"Warning title (optional)",kind:"warning"}},u={render:a,args:{...s.args,important:!0}};var y,g,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    title: 'Base title (optional)',
    kind: 'base'
  }
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,_,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    title: 'Error title (optional)',
    kind: 'error'
  }
}`,...(S=(_=o.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var k,w,T;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    title: 'Info title (optional)',
    kind: 'info'
  }
}`,...(T=(w=i.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var D,C,I;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    title: 'Success title (optional)',
    kind: 'success'
  }
}`,...(I=(C=r.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var x,V,O;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    title: 'Warning title (optional)',
    kind: 'warning'
  }
}`,...(O=(V=l.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var N,B,L;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    important: true
  }
}`,...(L=(B=u.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const se=["argsData","argTypesData","Default","Error","Info","Success","Warning","Important"],ce=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Error:o,Important:u,Info:i,Success:r,Warning:l,__namedExportsOrder:se,argTypesData:M,argsData:E,default:ne},Symbol.toStringTag,{value:"Module"}));export{s as D,o as E,i as I,r as S,ce as T,l as W,u as a,q as b,E as c,M as d};
//# sourceMappingURL=toast.stories-ec53a939.js.map
