import{a as D}from"./chunk-AY7I2SME-5eb1ab46.js";import{g as U,c as G}from"./storybook_utils-43ef8c35.js";import{D as P}from"./toast-50f65945.js";import{D as J}from"./button-193f2ca3.js";import{D as Q}from"./icon-bfdd5cf2.js";import{s as g,o as n,k as c,u as k,w as r,x as m,e as h,C as R,b as X,p as Y}from"./vue.esm-bundler-4299d4fa.js";import{_ as Z}from"./_plugin-vue_export-helper-c27b6911.js";import{N as x}from"./notice-61ad5918.js";const z={name:"ToastDefault",components:{DtToast:P,DtButton:J,DtIcon:Q},data(){return{isShown:this.$attrs.show}},computed:{shouldInvertButton(){return this.$attrs.kind==="base"||this.$attrs.kind==="error"||this.$attrs.kind==="info"},isInverted(){return this.$attrs.important&&this.shouldInvertButton},buttonKind(){return this.isInverted?"inverted":"muted"},linkClass(){return this.isInverted?"d-link--inverted":"d-link--muted"},buttonCloseProps(){return{...this.$attrs.closeButtonProps,kind:this.buttonKind,ariaLabel:"Close"}}},watch:{show:function(e){this.isShown=e}},methods:{buttonClicked(){this.isShown=!0}}},ee={class:"d-toast-wrapper"},te=["innerHTML"],ae={key:1},re=["innerHTML"],se=["innerHTML"];function ne(e,a,ue,pe,y,p){const b=g("dt-button"),q=g("dt-icon"),A=g("dt-toast");return n(),c("div",null,[k(b,{onClick:p.buttonClicked},{default:r(()=>[m(" Click to show! ")]),_:1},8,["onClick"]),h("aside",ee,[k(A,{ref:"toast",show:y.isShown,"onUpdate:show":a[0]||(a[0]=f=>y.isShown=f),kind:e.$attrs.kind,title:e.$attrs.title,message:e.$attrs.message,"title-id":e.$attrs.titleId,"content-id":e.$attrs.contentId,important:e.$attrs.important,"hide-close":e.$attrs.hideClose,duration:e.$attrs.duration,"close-button-props":p.buttonCloseProps,"visually-hidden-close":e.$attrs.visuallyHiddenClose,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel,onClose:a[1]||(a[1]=f=>e.$attrs.onClose(f))},R({action:r(()=>[e.$attrs.action?(n(),c("span",{key:0,innerHTML:e.$attrs.action},null,8,re)):(n(),X(b,{key:1,size:"sm",importance:"outlined",kind:p.buttonKind,onClick:e.$attrs.onClick},{default:r(()=>[m(" Action ")]),_:1},8,["kind","onClick"]))]),default:r(()=>[e.defaultSlot?(n(),c("span",{key:0,innerHTML:e.defaultSlot},null,8,te)):(n(),c("span",ae,[m(" Message body with "),h("a",{href:"#",class:Y(["d-link",p.linkClass])},"a link",2),m(". ")]))]),_:2},[e.$attrs.icon?{name:"icon",fn:r(()=>[k(q,{name:e.$attrs.icon},null,8,["name"])]),key:"0"}:void 0,e.$attrs.titleOverride?{name:"titleOverride",fn:r(()=>[h("span",{innerHTML:e.$attrs.titleOverride},null,8,se)]),key:"1"}:void 0]),1032,["show","kind","title","message","title-id","content-id","important","hide-close","duration","close-button-props","visually-hidden-close","visually-hidden-close-label"])])])}const oe=Z(z,[["render",ne],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/toast/toast_default.story.vue"]]);z.__docgenInfo={displayName:"ToastDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/toast/toast_default.story.vue"]};const ie=U(),F={duration:6e3,onClose:D("close"),onClick:D("click"),visuallyHiddenCloseLabel:"Close Toast"},j={titleOverride:{table:{type:{summary:"VNode"}},control:{type:"text"}},icon:{options:ie,table:{type:{summary:"component"}},control:{type:"select",labels:{undefined:"(empty)"}}},default:{table:{type:{summary:"VNode"}},control:{type:"text"}},action:{table:{type:{summary:"VNode"}},control:{type:"text"}},titleId:{table:{defaultValue:{summary:"generated unique ID"}}},contentId:{table:{defaultValue:{summary:"generated unique ID"}}},kind:{options:x,control:{type:"select"}},show:{table:{defaultValue:{summary:"false"}}},duration:{table:{defaultValue:{summary:"null"}}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}},close:{description:"Close button click event",table:{type:{summary:"event"}}}},le={title:"Components/Toast",component:P,args:F,argTypes:j,excludeStories:/.*Data$/},s=(e,{argTypes:a})=>G(e,a,oe),t={render:s,args:{title:"Base title (optional)",kind:"base"},parameters:{percy:{args:{show:!0}}}},o={render:s,args:{...t.args,title:"Error title (optional)",kind:"error"},parameters:{...t.parameters}},i={render:s,args:{...t.args,title:"Info title (optional)",kind:"info"},parameters:{...t.parameters}},l={render:s,args:{...t.args,title:"Success title (optional)",kind:"success"},parameters:{...t.parameters}},d={render:s,args:{...t.args,title:"Warning title (optional)",kind:"warning"},parameters:{...t.parameters}},u={render:s,args:{...t.args,important:!0},parameters:{...t.parameters}};var C,v,T;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(T=(v=t.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var S,w,I;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    title: 'Error title (optional)',
    kind: 'error'
  },
  parameters: {
    ...Default.parameters
  }
}`,...(I=(w=o.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var $,_,N;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    title: 'Info title (optional)',
    kind: 'info'
  },
  parameters: {
    ...Default.parameters
  }
}`,...(N=(_=i.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var V,B,L;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    title: 'Success title (optional)',
    kind: 'success'
  },
  parameters: {
    ...Default.parameters
  }
}`,...(L=(B=l.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var H,E,M;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    title: 'Warning title (optional)',
    kind: 'warning'
  },
  parameters: {
    ...Default.parameters
  }
}`,...(M=(E=d.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var O,W,K;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    important: true
  },
  parameters: {
    ...Default.parameters
  }
}`,...(K=(W=u.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};const de=["argsData","argTypesData","Default","Error","Info","Success","Warning","Important"],De=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Error:o,Important:u,Info:i,Success:l,Warning:d,__namedExportsOrder:de,argTypesData:j,argsData:F,default:le},Symbol.toStringTag,{value:"Module"}));export{t as D,o as E,i as I,l as S,De as T,d as W,u as a};
//# sourceMappingURL=toast.stories-c9cae0c4.js.map
