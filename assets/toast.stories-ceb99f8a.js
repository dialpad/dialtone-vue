import{a as u}from"./chunk-AY7I2SME-5eb1ab46.js";import{a as L,c as P}from"./storybook_utils-cf049d2e.js";import{D as N}from"./toast-3f87ba9f.js";import{D as B}from"./button-d2753bc0.js";import{D as H}from"./icon-4ee45ea4.js";import{n as M}from"./_plugin-vue2_normalizer-2bbd088e.js";import{N as W}from"./notice-8f43f4d7.js";const F={name:"ToastDefault",components:{DtToast:N,DtButton:B,DtIcon:H},data(){return{isShown:this.$attrs.show}},computed:{shouldInvertButton(){return this.$attrs.kind==="base"||this.$attrs.kind==="error"||this.$attrs.kind==="info"},isInverted(){return this.$attrs.important&&this.shouldInvertButton},buttonKind(){return this.isInverted?"inverted":"muted"},linkClass(){return this.isInverted?"d-link--inverted":"d-link--muted"},buttonCloseProps(){return{...this.$attrs.closeButtonProps,kind:this.buttonKind,ariaLabel:"Close"}}},watch:{show:function(c){this.isShown=c}},methods:{buttonClicked(){this.isShown=!0}}};var K=function(){var t=this,a=t._self._c;return a("div",[a("dt-button",{on:{click:t.buttonClicked}},[t._v(" Click to show! ")]),a("aside",{staticClass:"d-toast-wrapper"},[a("dt-toast",{ref:"toast",attrs:{show:t.isShown,kind:t.$attrs.kind,title:t.$attrs.title,message:t.$attrs.message,"title-id":t.$attrs.titleId,"content-id":t.$attrs.contentId,important:t.$attrs.important,"hide-close":t.$attrs.hideClose,duration:t.$attrs.duration,"close-button-props":t.buttonCloseProps,"visually-hidden-close":t.$attrs.visuallyHiddenClose,"visually-hidden-close-label":t.$attrs.visuallyHiddenCloseLabel},on:{"update:show":function(d){t.isShown=d},close:function(d){return t.$attrs.onClose(d)}}},[t.$attrs.default?a("span",{domProps:{innerHTML:t._s(t.$attrs.default)}}):a("span",[t._v(" Message body with "),a("a",{staticClass:"d-link",class:t.linkClass,attrs:{href:"#"}},[t._v("a link")]),t._v(". ")]),a("template",{slot:"action"},[t.$attrs.action?a("span",{domProps:{innerHTML:t._s(t.$attrs.action)}}):a("dt-button",{attrs:{size:"sm",importance:"outlined",kind:t.buttonKind},on:{click:t.$attrs.onClick}},[t._v(" Action ")])],1),t.$attrs.icon?a("template",{slot:"icon"},[a("dt-icon",{attrs:{name:t.$attrs.icon}})],1):t._e(),t.$attrs.titleOverride?a("template",{slot:"titleOverride"},[a("span",{domProps:{innerHTML:t._s(t.$attrs.titleOverride)}})]):t._e()],2)],1)],1)},z=[],O=M(F,K,z,!1,null,null,null,null);const j=O.exports;O.exports.__docgenInfo={displayName:"ToastDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/toast/toast_default.story.vue"]};const q=L(),V={duration:6e3,onClose:u("close"),onClick:u("click"),visuallyHiddenCloseLabel:"Close Toast"},E={titleOverride:{table:{type:{summary:"VNode"}},control:{type:"text"}},icon:{options:q,table:{type:{summary:"component"}},control:{type:"select",labels:{undefined:"(empty)"}}},default:{table:{type:{summary:"VNode"}},control:{type:"text"}},action:{table:{type:{summary:"VNode"}},control:{type:"text"}},titleId:{table:{defaultValue:{summary:"generated unique ID"}}},contentId:{table:{defaultValue:{summary:"generated unique ID"}}},kind:{options:W,control:{type:"select"}},show:{table:{defaultValue:{summary:"false"}}},duration:{table:{defaultValue:{summary:"null"}}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}},close:{description:"Close button click event",table:{type:{summary:"event"}}}},A={title:"Components/Toast",component:N,args:V,argTypes:E,excludeStories:/.*Data$/},r=(c,{argTypes:t})=>P(c,t,j),e={render:r,args:{title:"Base title (optional)",kind:"base"},parameters:{percy:{args:{show:!0}}}},s={render:r,args:{...e.args,title:"Error title (optional)",kind:"error"},parameters:{...e.parameters}},n={render:r,args:{...e.args,title:"Info title (optional)",kind:"info"},parameters:{...e.parameters}},o={render:r,args:{...e.args,title:"Success title (optional)",kind:"success"},parameters:{...e.parameters}},i={render:r,args:{...e.args,title:"Warning title (optional)",kind:"warning"},parameters:{...e.parameters}},l={render:r,args:{...e.args,important:!0},parameters:{...e.parameters}};var p,m,f;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(m=e.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,D,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    title: 'Error title (optional)',
    kind: 'error'
  },
  parameters: {
    ...Default.parameters
  }
}`,...(h=(D=s.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var b,k,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    title: 'Info title (optional)',
    kind: 'info'
  },
  parameters: {
    ...Default.parameters
  }
}`,...(y=(k=n.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var _,v,$;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    title: 'Success title (optional)',
    kind: 'success'
  },
  parameters: {
    ...Default.parameters
  }
}`,...($=(v=o.parameters)==null?void 0:v.docs)==null?void 0:$.source}}};var C,T,I;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    title: 'Warning title (optional)',
    kind: 'warning'
  },
  parameters: {
    ...Default.parameters
  }
}`,...(I=(T=i.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var S,w,x;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    important: true
  },
  parameters: {
    ...Default.parameters
  }
}`,...(x=(w=l.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const R=["argsData","argTypesData","Default","Error","Info","Success","Warning","Important"],tt=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Error:s,Important:l,Info:n,Success:o,Warning:i,__namedExportsOrder:R,argTypesData:E,argsData:V,default:A},Symbol.toStringTag,{value:"Module"}));export{e as D,s as E,n as I,o as S,tt as T,i as W,l as a};
//# sourceMappingURL=toast.stories-ceb99f8a.js.map
