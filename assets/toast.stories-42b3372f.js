import{a as u}from"./chunk-AY7I2SME-5eb1ab46.js";import{e as P,h as B}from"./storybook_utils-0b506883.js";import{D as O}from"./toast-31431021.js";import{D as H}from"./button-4cf26c8f.js";import{D as M}from"./icon-d9bd2c26.js";import{n as W}from"./_plugin-vue2_normalizer-2bbd088e.js";import{N as F}from"./notice-1d6f4f15.js";const K={name:"ToastDefault",components:{DtToast:O,DtButton:H,DtIcon:M},data(){return{isShown:this.show}},computed:{shouldInvertButton(){return this.kind==="base"||this.kind==="error"||this.kind==="info"},isInverted(){return this.important&&this.shouldInvertButton},buttonKind(){return this.isInverted?"inverted":"muted"},linkClass(){return this.isInverted?"d-link--inverted":"d-link--muted"},buttonCloseProps(){return{...this.closeButtonProps,kind:this.buttonKind,ariaLabel:"Close"}}},watch:{show:function(c){this.isShown=c}},methods:{buttonClicked(){this.isShown=!0}}};var z=function(){var e=this,a=e._self._c;return a("div",[a("dt-button",{on:{click:e.buttonClicked}},[e._v(" Click to show! ")]),a("aside",{staticClass:"d-toast-wrapper"},[a("dt-toast",{ref:"toast",attrs:{show:e.isShown,kind:e.kind,title:e.title,message:e.message,"title-id":e.titleId,"content-id":e.contentId,important:e.important,"hide-close":e.hideClose,duration:e.duration,"close-button-props":e.buttonCloseProps,"visually-hidden-close":e.visuallyHiddenClose,"visually-hidden-close-label":e.visuallyHiddenCloseLabel},on:{"update:show":function(d){e.isShown=d},close:function(d){return e.onClose(d)}}},[e.defaultSlot?a("span",{domProps:{innerHTML:e._s(e.defaultSlot)}}):a("span",[e._v(" Message body with "),a("a",{staticClass:"d-link",class:e.linkClass,attrs:{href:"#"}},[e._v("a link")]),e._v(". ")]),a("template",{slot:"action"},[e.action?a("span",{domProps:{innerHTML:e._s(e.action)}}):a("dt-button",{attrs:{size:"sm",importance:"outlined",kind:e.buttonKind},on:{click:e.onClick}},[e._v(" Action ")])],1),e.icon?a("template",{slot:"icon"},[a("dt-icon",{attrs:{name:e.icon}})],1):e._e(),e.titleOverride?a("template",{slot:"titleOverride"},[a("span",{domProps:{innerHTML:e._s(e.titleOverride)}})]):e._e()],2)],1)],1)},j=[],V=W(K,z,j,!1,null,null,null,null);const q=V.exports;V.exports.__docgenInfo={displayName:"ToastDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/toast/toast_default.story.vue"]};const A=P(),E={duration:6e3,onClose:u("close"),onClick:u("click"),visuallyHiddenCloseLabel:"Close Toast"},L={titleOverride:{table:{type:{summary:"VNode"}},control:{type:"text"}},icon:{options:A,table:{type:{summary:"component"}},control:{type:"select",labels:{undefined:"(empty)"}}},default:{table:{type:{summary:"VNode"}},control:{type:"text"}},action:{table:{type:{summary:"VNode"}},control:{type:"text"}},titleId:{table:{defaultValue:{summary:"generated unique ID"}}},contentId:{table:{defaultValue:{summary:"generated unique ID"}}},kind:{options:F,control:{type:"select"}},show:{table:{defaultValue:{summary:"false"}}},duration:{table:{defaultValue:{summary:"null"}}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}},close:{description:"Close button click event",table:{type:{summary:"event"}}}},R={title:"Components/Toast",component:O,args:E,argTypes:L,excludeStories:/.*Data$/},r=(c,{argTypes:e})=>B(c,e,q),t={render:r,args:{title:"Base title (optional)",kind:"base"},parameters:{percy:{args:{show:!0}}}},s={render:r,args:{...t.args,title:"Error title (optional)",kind:"error"},parameters:{...t.parameters}},n={render:r,args:{...t.args,title:"Info title (optional)",kind:"info"},parameters:{...t.parameters}},o={render:r,args:{...t.args,title:"Success title (optional)",kind:"success"},parameters:{...t.parameters}},i={render:r,args:{...t.args,title:"Warning title (optional)",kind:"warning"},parameters:{...t.parameters}},l={render:r,args:{...t.args,important:!0},parameters:{...t.parameters}};var p,m,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(m=t.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,h,D;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    title: 'Error title (optional)',
    kind: 'error'
  },
  parameters: {
    ...Default.parameters
  }
}`,...(D=(h=s.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var b,k,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    title: 'Info title (optional)',
    kind: 'info'
  },
  parameters: {
    ...Default.parameters
  }
}`,...(y=(k=n.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var _,v,C;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    title: 'Success title (optional)',
    kind: 'success'
  },
  parameters: {
    ...Default.parameters
  }
}`,...(C=(v=o.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var T,I,S;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(N=(x=l.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};const $=["argsData","argTypesData","Default","Error","Info","Success","Warning","Important"],ee=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Error:s,Important:l,Info:n,Success:o,Warning:i,__namedExportsOrder:$,argTypesData:L,argsData:E,default:R},Symbol.toStringTag,{value:"Module"}));export{t as D,s as E,n as I,o as S,ee as T,i as W,l as a};
//# sourceMappingURL=toast.stories-42b3372f.js.map
