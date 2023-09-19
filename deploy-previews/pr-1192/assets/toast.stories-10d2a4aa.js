import{a as p}from"./chunk-AY7I2SME-c7b6cf8a.js";import{e as B,c as H}from"./storybook_utils-171189a5.js";import{D as V}from"./toast-7662741e.js";import{D as M}from"./button-9102a84a.js";import{D as W}from"./icon-9a6cc121.js";import{n as F}from"./_plugin-vue2_normalizer-2bbd088e.js";import{N as K}from"./notice-0d94618b.js";const z={name:"ToastDefault",components:{DtToast:V,DtButton:M,DtIcon:W},data(){return{isShown:this.show}},computed:{shouldInvertButton(){return this.kind==="base"||this.kind==="error"||this.kind==="info"},isInverted(){return this.important&&this.shouldInvertButton},buttonKind(){return this.isInverted?"inverted":"muted"},linkClass(){return this.isInverted?"d-link--inverted":"d-link--muted"},buttonCloseProps(){return{...this.closeButtonProps,kind:this.buttonKind,ariaLabel:"Close"}}},watch:{show:function(u){this.isShown=u}},methods:{buttonClicked(){this.isShown=!0}}};var E=function(){var e=this,a=e._self._c;return a("div",[a("dt-button",{on:{click:e.buttonClicked}},[e._v(" Click to show! ")]),a("aside",{staticClass:"d-toast-wrapper"},[a("dt-toast",{ref:"toast",attrs:{show:e.isShown,kind:e.kind,title:e.title,message:e.message,"title-id":e.titleId,"content-id":e.contentId,important:e.important,"hide-close":e.hideClose,duration:e.duration,"close-button-props":e.buttonCloseProps,"visually-hidden-close":e.visuallyHiddenClose,"visually-hidden-close-label":e.visuallyHiddenCloseLabel},on:{"update:show":function(d){e.isShown=d},close:function(d){return e.onClose(d)}}},[e.defaultSlot?a("span",{domProps:{innerHTML:e._s(e.defaultSlot)}}):a("span",[e._v(" Message body with "),a("a",{staticClass:"d-link",class:e.linkClass,attrs:{href:"#"}},[e._v("a link")]),e._v(". ")]),a("template",{slot:"action"},[e.action?a("span",{domProps:{innerHTML:e._s(e.action)}}):a("dt-button",{attrs:{size:"sm",importance:"outlined",kind:e.buttonKind},on:{click:e.onClick}},[e._v(" Action ")])],1),e.icon?a("template",{slot:"icon"},[a("dt-icon",{attrs:{name:e.icon}})],1):e._e(),e.titleOverride?a("template",{slot:"titleOverride"},[a("span",{domProps:{innerHTML:e._s(e.titleOverride)}})]):e._e()],2)],1)],1)},j=[];E._withStripped=!0;var c=F(z,E,j,!1,null,null,null,null);c.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/toast/toast_default.story.vue";const q=c.exports;c.exports.__docgenInfo={displayName:"ToastDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/toast/toast_default.story.vue"]};const A=B(),L={duration:6e3,onClose:p("close"),onClick:p("click"),visuallyHiddenCloseLabel:"Close Toast"},P={titleOverride:{table:{type:{summary:"VNode"}},control:{type:"text"}},icon:{options:A,table:{type:{summary:"component"}},control:{type:"select",labels:{undefined:"(empty)"}}},default:{table:{type:{summary:"VNode"}},control:{type:"text"}},action:{table:{type:{summary:"VNode"}},control:{type:"text"}},titleId:{table:{defaultValue:{summary:"generated unique ID"}}},contentId:{table:{defaultValue:{summary:"generated unique ID"}}},kind:{options:K,control:{type:"select"}},show:{table:{defaultValue:{summary:"false"}}},duration:{table:{defaultValue:{summary:"null"}}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}},close:{description:"Close button click event",table:{type:{summary:"event"}}}},R={title:"Components/Toast",component:V,args:L,argTypes:P,excludeStories:/.*Data$/},r=(u,{argTypes:e})=>H(u,e,q),t={render:r,args:{title:"Base title (optional)",kind:"base"},parameters:{percy:{args:{show:!0}}}},s={render:r,args:{...t.args,title:"Error title (optional)",kind:"error"},parameters:{...t.parameters}},n={render:r,args:{...t.args,title:"Info title (optional)",kind:"info"},parameters:{...t.parameters}},o={render:r,args:{...t.args,title:"Success title (optional)",kind:"success"},parameters:{...t.parameters}},i={render:r,args:{...t.args,title:"Warning title (optional)",kind:"warning"},parameters:{...t.parameters}},l={render:r,args:{...t.args,important:!0},parameters:{...t.parameters}};var m,f,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,_,D;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(v=(k=n.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var y,C,T;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    title: 'Success title (optional)',
    kind: 'success'
  },
  parameters: {
    ...Default.parameters
  }
}`,...(T=(C=o.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var S,I,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    title: 'Warning title (optional)',
    kind: 'warning'
  },
  parameters: {
    ...Default.parameters
  }
}`,...(w=(I=i.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var x,N,O;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    important: true
  },
  parameters: {
    ...Default.parameters
  }
}`,...(O=(N=l.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const $=["argsData","argTypesData","Default","Error","Info","Success","Warning","Important"],ee=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Error:s,Important:l,Info:n,Success:o,Warning:i,__namedExportsOrder:$,argTypesData:P,argsData:L,default:R},Symbol.toStringTag,{value:"Module"}));export{t as D,s as E,n as I,o as S,ee as T,i as W,l as a};
//# sourceMappingURL=toast.stories-10d2a4aa.js.map
