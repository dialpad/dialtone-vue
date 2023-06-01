import{a as C}from"./chunk-OPEUWD42-a3b45fd8.js";import{g as te,c as ne}from"./storybook_utils-d77bbd23.js";import{D as oe,a as ae,b as se,N as R}from"./notice-d0d9d408.js";import{u as D}from"./utils-cafa7a3e.js";import{S as ie}from"./sr_only_close_button-46753cf5.js";import{a as i,f as c,g as S,d as r,w as n,n as G,k as b,o as s,l as k,s as m,t as re,z as le,b as de}from"./vue.esm-bundler-e62bdd6b.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";import{D as ue}from"./button-63a1067b.js";import{D as ce}from"./icon-607d64de.js";const me=["status","alert"],I=6e3,Q={name:"DtToast",components:{DtNoticeIcon:oe,DtNoticeContent:ae,DtNoticeAction:se},mixins:[ie],props:{titleId:{type:String,default(){return D.getUniqueString()}},contentId:{type:String,default(){return D.getUniqueString()}},title:{type:String,default:""},message:{type:String,default:""},role:{type:String,default:"status",validator:e=>me.includes(e)},kind:{type:String,default:"base",validator:e=>R.includes(e)},important:{type:Boolean,default:!1},show:{type:Boolean,default:!1},closeButtonProps:{type:Object,default:()=>({})},hideClose:{type:Boolean,default:!1},duration:{type:Number,default:null,validator:e=>e>=I}},emits:["close","click","update:show"],data(){return{isShown:!1,minDuration:I}},computed:{kindClass(){return{error:"d-toast--error",info:"d-toast--info",success:"d-toast--success",warning:"d-toast--warning",base:"d-toast--base"}[this.kind]},shouldSetTimeout(){return!!this.duration&&this.duration>=this.minDuration}},watch:{show:{handler:function(e){this.isShown=e,e?this.setTimeout():clearTimeout(this.displayTimer)},immediate:!0}},unmounted(){clearTimeout(this.displayTimer)},methods:{closeToast(e){this.$emit("update:show",!1),this.$emit("close",e)},setTimeout(){this.shouldSetTimeout&&(this.displayTimer=setTimeout(()=>{this.isShown=!1,this.$emit("update:show",!1)},this.duration))}}},pe=["aria-hidden"],fe={class:"d-toast__dialog"};function he(e,d,t,ee,u,a){const v=i("dt-notice-icon"),_=i("dt-notice-content"),w=i("dt-notice-action");return u.isShown?(s(),c("div",{key:0,class:G(["d-toast",a.kindClass,{"d-toast--important":t.important}]),"data-qa":"dt-toast","aria-hidden":(!u.isShown).toString()},[S("div",fe,[r(v,{kind:t.kind},{default:n(()=>[b(" @slot Slot for custom icon "),k(e.$slots,"icon")]),_:3},8,["kind"]),r(_,{"title-id":t.titleId,"content-id":t.contentId,title:t.title,role:t.role},{titleOverride:n(()=>[b(` @slot Allows you to override the title, only use this if you need to override
          with something other than text. Otherwise use the "title" prop. `),k(e.$slots,"titleOverride")]),default:n(()=>[k(e.$slots,"default",{},()=>[m(re(t.message),1)])]),_:3},8,["title-id","content-id","title","role"]),r(w,{"hide-close":t.hideClose,"close-button-props":t.closeButtonProps,"visually-hidden-close":e.visuallyHiddenClose,"visually-hidden-close-label":e.visuallyHiddenCloseLabel,onClose:a.closeToast},{default:n(()=>[b(" @slot Enter a possible action for the user to take, such as a link to another page "),k(e.$slots,"action")]),_:3},8,["hide-close","close-button-props","visually-hidden-close","visually-hidden-close-label","onClose"])])],10,pe)):b("v-if",!0)}const X=J(Q,[["render",he],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/toast/toast.vue"]]);Q.__docgenInfo={description:`A toast notice, sometimes called a snackbar, is a time-based message that appears based on users' actions.
It contains at-a-glance information about outcomes and can be paired with actions.`,displayName:"DtToast",tags:{see:[{description:"https://dialpad.design/components/toast.html",title:"see"}]},exportName:"default",props:[{name:"visuallyHiddenClose",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"If true, a hidden close button is included for screen readers",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"visuallyHiddenCloseLabel",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"Label for the visually hidden close button\nRequired if visuallyHiddenClose is set to `true`",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"titleId",description:`Sets an ID on the title element of the component. Useful for aria-describedby
or aria-labelledby or any other reason you may need an id to refer to the title.`,type:{name:"string"},defaultValue:{func:!0,value:"function() { return util.getUniqueString(); }"}},{name:"contentId",description:`Sets an ID on the content element of the component. Useful for aria-describedby
or aria-labelledby or any other reason you may need an id to refer to the content.`,type:{name:"string"},defaultValue:{func:!0,value:"function() { return util.getUniqueString(); }"}},{name:"title",description:"Title header of the toast. This can be left blank to remove the title from the toast entirely.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"message",description:"Message of the toast. Overridden by default slot.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"role",description:`Provides a role for the toast. 'status' is used by default to communicate a message. 'alert' is used to
communicate an important message like an error that does not contain any interactive elements.`,tags:{},values:["status","alert"],type:{name:"string"},defaultValue:{func:!1,value:"'status'"}},{name:"kind",description:"Severity level of the toast, sets the icon and background",tags:{},values:["base","error","info","success","warning"],type:{name:"string"},defaultValue:{func:!1,value:"'base'"}},{name:"important",description:"Used in scenarios where the message needs to visually dominate the screen.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"show",description:`Controls whether the toast is shown. If a valid duration is provided, the toast will disappear
after reaching the duration time, so it's convenient to use \`v-model\` with this prop to update
the data in your component.
Supports v-model`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"closeButtonProps",description:"Props for the toast close button.",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"hideClose",description:"Hides the close button from the toast",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"duration",description:`The duration in ms the toast will display before disappearing.
The toast won't disappear if the duration is not provided.
If it's provided, it should be equal to or greater than 6000.`,type:{name:"number"},defaultValue:{func:!1,value:"null"}}],events:[{name:"close",description:"Close button click event",type:{names:["undefined"]}},{name:"click",description:"Native click event",type:{names:["PointerEvent | KeyboardEvent"]}},{name:"update:show",description:"Sync show value",type:{names:["undefined"]}}],slots:[{name:"icon",description:"Slot for custom icon"},{name:"titleOverride",description:"Allows you to override the title, only use this if you need to override"},{name:"default",description:"the main textual content of the toast"},{name:"action",description:"Enter a possible action for the user to take, such as a link to another page"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/sr_only_close_button.js","/home/runner/work/dialtone-vue/dialtone-vue/components/toast/toast.vue"]};const Y={name:"ToastDefault",components:{DtToast:X,DtButton:ue,DtIcon:ce},data(){return{isShown:this.$attrs.show}},computed:{shouldInvertButton(){return this.$attrs.kind==="base"||this.$attrs.kind==="error"||this.$attrs.kind==="info"},isInverted(){return this.$attrs.important&&this.shouldInvertButton},buttonKind(){return this.isInverted?"inverted":"muted"},linkClass(){return this.isInverted?"d-link--inverted":"d-link--muted"},buttonCloseProps(){return{...this.$attrs.closeButtonProps,kind:this.buttonKind,ariaLabel:"Close"}}},watch:{show:function(e){this.isShown=e}},methods:{buttonClicked(){this.isShown=!0}}},ye={class:"d-toast-wrapper"},ge=["innerHTML"],ve={key:1},be=["innerHTML"],ke=["innerHTML"];function Se(e,d,t,ee,u,a){const v=i("dt-button"),_=i("dt-icon"),w=i("dt-toast");return s(),c("div",null,[r(v,{onClick:a.buttonClicked},{default:n(()=>[m(" Click to show! ")]),_:1},8,["onClick"]),S("aside",ye,[r(w,{ref:"toast",show:u.isShown,"onUpdate:show":d[0]||(d[0]=T=>u.isShown=T),kind:e.$attrs.kind,title:e.$attrs.title,message:e.$attrs.message,"title-id":e.$attrs.titleId,"content-id":e.$attrs.contentId,important:e.$attrs.important,"hide-close":e.$attrs.hideClose,duration:e.$attrs.duration,"close-button-props":a.buttonCloseProps,"visually-hidden-close":e.$attrs.visuallyHiddenClose,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel,onClose:d[1]||(d[1]=T=>e.$attrs.onClose(T))},le({action:n(()=>[e.$attrs.action?(s(),c("span",{key:0,innerHTML:e.$attrs.action},null,8,be)):(s(),de(v,{key:1,size:"sm",importance:"outlined",kind:a.buttonKind,onClick:e.$attrs.onClick},{default:n(()=>[m(" Action ")]),_:1},8,["kind","onClick"]))]),default:n(()=>[e.defaultSlot?(s(),c("span",{key:0,innerHTML:e.defaultSlot},null,8,ge)):(s(),c("span",ve,[m(" Message body with "),S("a",{href:"#",class:G(["d-link",a.linkClass])},"a link",2),m(". ")]))]),_:2},[e.$attrs.icon?{name:"icon",fn:n(()=>[r(_,{name:e.$attrs.icon},null,8,["name"])]),key:"0"}:void 0,e.$attrs.titleOverride?{name:"titleOverride",fn:n(()=>[S("span",{innerHTML:e.$attrs.titleOverride},null,8,ke)]),key:"1"}:void 0]),1032,["show","kind","title","message","title-id","content-id","important","hide-close","duration","close-button-props","visually-hidden-close","visually-hidden-close-label"])])])}const _e=J(Y,[["render",Se],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/toast/toast_default.story.vue"]]);Y.__docgenInfo={displayName:"ToastDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/toast/toast_default.story.vue"]};const we=te(),Z={duration:6e3,onClose:C("close"),onClick:C("click"),visuallyHiddenCloseLabel:"Close Toast"},x={titleOverride:{table:{type:{summary:"VNode"}},control:{type:"text"}},icon:{options:we,table:{type:{summary:"component"}},control:{type:"select",labels:{undefined:"(empty)"}}},default:{table:{type:{summary:"VNode"}},control:{type:"text"}},action:{table:{type:{summary:"VNode"}},control:{type:"text"}},titleId:{table:{defaultValue:{summary:"generated unique ID"}}},contentId:{table:{defaultValue:{summary:"generated unique ID"}}},kind:{options:R,control:{type:"select"}},show:{table:{defaultValue:{summary:"false"}}},duration:{table:{defaultValue:{summary:"null"}}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}},close:{description:"Close button click event",table:{type:{summary:"event"}}}},Te={title:"Components/Toast",component:X,args:Z,argTypes:x,excludeStories:/.*Data$/},l=e=>ne(e,_e),o={render:l,args:{title:"Base title (optional)",kind:"base"}},p={render:l,args:{...o.args,title:"Error title (optional)",kind:"error"}},f={render:l,args:{...o.args,title:"Info title (optional)",kind:"info"}},h={render:l,args:{...o.args,title:"Success title (optional)",kind:"success"}},y={render:l,args:{...o.args,title:"Warning title (optional)",kind:"warning"}},g={render:l,args:{...o.args,important:!0}};var V,$,N;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    title: 'Base title (optional)',
    kind: 'base'
  }
}`,...(N=($=o.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var O,B,H;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    title: 'Error title (optional)',
    kind: 'error'
  }
}`,...(H=(B=p.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var L,E,M;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    title: 'Info title (optional)',
    kind: 'info'
  }
}`,...(M=(E=f.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var P,q,U;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    title: 'Success title (optional)',
    kind: 'success'
  }
}`,...(U=(q=h.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var A,j,K;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    title: 'Warning title (optional)',
    kind: 'warning'
  }
}`,...(K=(j=y.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var W,z,F;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    important: true
  }
}`,...(F=(z=g.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};const Ce=["argsData","argTypesData","Default","Error","Info","Success","Warning","Important"],Ee=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Error:p,Important:g,Info:f,Success:h,Warning:y,__namedExportsOrder:Ce,argTypesData:x,argsData:Z,default:Te},Symbol.toStringTag,{value:"Module"}));export{o as D,p as E,f as I,h as S,Ee as T,y as W,g as a,X as b,Z as c,x as d};
//# sourceMappingURL=toast.stories-33b60c6d.js.map
