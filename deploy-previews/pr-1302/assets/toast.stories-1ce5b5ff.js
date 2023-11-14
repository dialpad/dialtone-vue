import{a as p}from"./chunk-AY7I2SME-5eb1ab46.js";import{a as P,c as B}from"./storybook_utils-cf049d2e.js";import{D as O}from"./toast-b337694f.js";import{D as H}from"./button-61a95420.js";import{D as M}from"./icon-9e10092c.js";import{n as W}from"./_plugin-vue2_normalizer-2bbd088e.js";import{N as F}from"./notice-854baa8c.js";const K={name:"ToastDefault",components:{DtToast:O,DtButton:H,DtIcon:M},data(){return{isShown:this.$attrs.show}},computed:{shouldInvertButton(){return this.$attrs.kind==="base"||this.$attrs.kind==="error"||this.$attrs.kind==="info"},isInverted(){return this.$attrs.important&&this.shouldInvertButton},buttonKind(){return this.isInverted?"inverted":"muted"},linkClass(){return this.isInverted?"d-link--inverted":"d-link--muted"},buttonCloseProps(){return{...this.$attrs.closeButtonProps,kind:this.buttonKind,ariaLabel:"Close"}}},watch:{show:function(u){this.isShown=u}},methods:{buttonClicked(){this.isShown=!0}}};var V=function(){var t=this,a=t._self._c;return a("div",[a("dt-button",{on:{click:t.buttonClicked}},[t._v(" Click to show! ")]),a("aside",{staticClass:"d-toast-wrapper"},[a("dt-toast",{ref:"toast",attrs:{show:t.isShown,kind:t.$attrs.kind,title:t.$attrs.title,message:t.$attrs.message,"title-id":t.$attrs.titleId,"content-id":t.$attrs.contentId,important:t.$attrs.important,"hide-close":t.$attrs.hideClose,duration:t.$attrs.duration,"close-button-props":t.buttonCloseProps,"visually-hidden-close":t.$attrs.visuallyHiddenClose,"visually-hidden-close-label":t.$attrs.visuallyHiddenCloseLabel},on:{"update:show":function(d){t.isShown=d},close:function(d){return t.$attrs.onClose(d)}}},[t.$attrs.default?a("span",{domProps:{innerHTML:t._s(t.$attrs.default)}}):a("span",[t._v(" Message body with "),a("a",{staticClass:"d-link",class:t.linkClass,attrs:{href:"#"}},[t._v("a link")]),t._v(". ")]),a("template",{slot:"action"},[t.$attrs.action?a("span",{domProps:{innerHTML:t._s(t.$attrs.action)}}):a("dt-button",{attrs:{size:"sm",importance:"outlined",kind:t.buttonKind},on:{click:t.$attrs.onClick}},[t._v(" Action ")])],1),t.$attrs.icon?a("template",{slot:"icon"},[a("dt-icon",{attrs:{name:t.$attrs.icon}})],1):t._e(),t.$attrs.titleOverride?a("template",{slot:"titleOverride"},[a("span",{domProps:{innerHTML:t._s(t.$attrs.titleOverride)}})]):t._e()],2)],1)],1)},z=[];V._withStripped=!0;var c=W(K,V,z,!1,null,null,null,null);c.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/toast/toast_default.story.vue";const j=c.exports;c.exports.__docgenInfo={displayName:"ToastDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/toast/toast_default.story.vue"]};const q=P(),E={duration:6e3,onClose:p("close"),onClick:p("click"),visuallyHiddenCloseLabel:"Close Toast"},L={titleOverride:{table:{type:{summary:"VNode"}},control:{type:"text"}},icon:{options:q,table:{type:{summary:"component"}},control:{type:"select",labels:{undefined:"(empty)"}}},default:{table:{type:{summary:"VNode"}},control:{type:"text"}},action:{table:{type:{summary:"VNode"}},control:{type:"text"}},titleId:{table:{defaultValue:{summary:"generated unique ID"}}},contentId:{table:{defaultValue:{summary:"generated unique ID"}}},kind:{options:F,control:{type:"select"}},show:{table:{defaultValue:{summary:"false"}}},duration:{table:{defaultValue:{summary:"null"}}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}},close:{description:"Close button click event",table:{type:{summary:"event"}}}},A={title:"Components/Toast",component:O,args:E,argTypes:L,excludeStories:/.*Data$/},r=(u,{argTypes:t})=>B(u,t,j),e={render:r,args:{title:"Base title (optional)",kind:"base"},parameters:{percy:{args:{show:!0}}}},s={render:r,args:{...e.args,title:"Error title (optional)",kind:"error"},parameters:{...e.parameters}},n={render:r,args:{...e.args,title:"Info title (optional)",kind:"info"},parameters:{...e.parameters}},o={render:r,args:{...e.args,title:"Success title (optional)",kind:"success"},parameters:{...e.parameters}},i={render:r,args:{...e.args,title:"Warning title (optional)",kind:"warning"},parameters:{...e.parameters}},l={render:r,args:{...e.args,important:!0},parameters:{...e.parameters}};var m,f,g;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    title: 'Base title (optional)',
    kind: 'base'
  },
  parameters: {
    percy: {
      args: {
        show: true
      }
    }
  }
}`,...(g=(f=e.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,_,D;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    title: 'Error title (optional)',
    kind: 'error'
  },
  parameters: {
    ...Default.parameters
  }
}`,...(D=(_=s.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var b,k,v;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    title: 'Info title (optional)',
    kind: 'info'
  },
  parameters: {
    ...Default.parameters
  }
}`,...(v=(k=n.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var y,$,C;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    title: 'Success title (optional)',
    kind: 'success'
  },
  parameters: {
    ...Default.parameters
  }
}`,...(C=($=o.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var T,I,S;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    title: 'Warning title (optional)',
    kind: 'warning'
  },
  parameters: {
    ...Default.parameters
  }
}`,...(S=(I=i.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var w,x,N;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    important: true
  },
  parameters: {
    ...Default.parameters
  }
}`,...(N=(x=l.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};const R=["argsData","argTypesData","Default","Error","Info","Success","Warning","Important"],tt=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Error:s,Important:l,Info:n,Success:o,Warning:i,__namedExportsOrder:R,argTypesData:L,argsData:E,default:A},Symbol.toStringTag,{value:"Module"}));export{e as D,s as E,n as I,o as S,tt as T,i as W,l as a};
//# sourceMappingURL=toast.stories-1ce5b5ff.js.map
