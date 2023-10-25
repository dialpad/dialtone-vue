import{a as D}from"./chunk-AY7I2SME-5eb1ab46.js";import{g as U,c as G}from"./storybook_utils-d9dec137.js";import{D as K}from"./toast-aa758a25.js";import{D as J}from"./button-cbf6059f.js";import{D as Q}from"./icon-64f6200c.js";import{u as g,o as s,p as c,y as k,w as a,z as m,e as y,E as R,b as X,k as Y}from"./vue.esm-bundler-29004354.js";import{_ as Z}from"./_plugin-vue_export-helper-c27b6911.js";import{N as x}from"./notice-77c92abe.js";const P={name:"ToastDefault",components:{DtToast:K,DtButton:J,DtIcon:Q},data(){return{isShown:this.$attrs.show}},computed:{shouldInvertButton(){return this.$attrs.kind==="base"||this.$attrs.kind==="error"||this.$attrs.kind==="info"},isInverted(){return this.$attrs.important&&this.shouldInvertButton},buttonKind(){return this.isInverted?"inverted":"muted"},linkClass(){return this.isInverted?"d-link--inverted":"d-link--muted"},buttonCloseProps(){return{...this.$attrs.closeButtonProps,kind:this.buttonKind,ariaLabel:"Close"}}},watch:{show:function(e){this.isShown=e}},methods:{buttonClicked(){this.isShown=!0}}},ee={class:"d-toast-wrapper"},te=["innerHTML"],ae={key:1},re=["innerHTML"],se=["innerHTML"];function ne(e,u,ue,pe,h,p){const b=g("dt-button"),q=g("dt-icon"),A=g("dt-toast");return s(),c("div",null,[k(b,{onClick:p.buttonClicked},{default:a(()=>[m(" Click to show! ")]),_:1},8,["onClick"]),y("aside",ee,[k(A,{ref:"toast",show:h.isShown,"onUpdate:show":u[0]||(u[0]=f=>h.isShown=f),kind:e.$attrs.kind,title:e.$attrs.title,message:e.$attrs.message,"title-id":e.$attrs.titleId,"content-id":e.$attrs.contentId,important:e.$attrs.important,"hide-close":e.$attrs.hideClose,duration:e.$attrs.duration,"close-button-props":p.buttonCloseProps,"visually-hidden-close":e.$attrs.visuallyHiddenClose,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel,onClose:u[1]||(u[1]=f=>e.$attrs.onClose(f))},R({action:a(()=>[e.$attrs.action?(s(),c("span",{key:0,innerHTML:e.$attrs.action},null,8,re)):(s(),X(b,{key:1,size:"sm",importance:"outlined",kind:p.buttonKind,onClick:e.$attrs.onClick},{default:a(()=>[m(" Action ")]),_:1},8,["kind","onClick"]))]),default:a(()=>[e.defaultSlot?(s(),c("span",{key:0,innerHTML:e.defaultSlot},null,8,te)):(s(),c("span",ae,[m(" Message body with "),y("a",{href:"#",class:Y(["d-link",p.linkClass])},"a link",2),m(". ")]))]),_:2},[e.$attrs.icon?{name:"icon",fn:a(()=>[k(q,{name:e.$attrs.icon},null,8,["name"])]),key:"0"}:void 0,e.$attrs.titleOverride?{name:"titleOverride",fn:a(()=>[y("span",{innerHTML:e.$attrs.titleOverride},null,8,se)]),key:"1"}:void 0]),1032,["show","kind","title","message","title-id","content-id","important","hide-close","duration","close-button-props","visually-hidden-close","visually-hidden-close-label"])])])}const oe=Z(P,[["render",ne]]);P.__docgenInfo={displayName:"ToastDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/toast/toast_default.story.vue"]};const ie=U(),F={duration:6e3,onClose:D("close"),onClick:D("click"),visuallyHiddenCloseLabel:"Close Toast"},j={titleOverride:{table:{type:{summary:"VNode"}},control:{type:"text"}},icon:{options:ie,table:{type:{summary:"component"}},control:{type:"select",labels:{undefined:"(empty)"}}},default:{table:{type:{summary:"VNode"}},control:{type:"text"}},action:{table:{type:{summary:"VNode"}},control:{type:"text"}},titleId:{table:{defaultValue:{summary:"generated unique ID"}}},contentId:{table:{defaultValue:{summary:"generated unique ID"}}},kind:{options:x,control:{type:"select"}},show:{table:{defaultValue:{summary:"false"}}},duration:{table:{defaultValue:{summary:"null"}}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}},close:{description:"Close button click event",table:{type:{summary:"event"}}}},le={title:"Components/Toast",component:K,args:F,argTypes:j,excludeStories:/.*Data$/},r=e=>G(e,oe),t={render:r,args:{title:"Base title (optional)",kind:"base"},parameters:{percy:{args:{show:!0}}}},n={render:r,args:{...t.args,title:"Error title (optional)",kind:"error"},parameters:{...t.parameters}},o={render:r,args:{...t.args,title:"Info title (optional)",kind:"info"},parameters:{...t.parameters}},i={render:r,args:{...t.args,title:"Success title (optional)",kind:"success"},parameters:{...t.parameters}},l={render:r,args:{...t.args,title:"Warning title (optional)",kind:"warning"},parameters:{...t.parameters}},d={render:r,args:{...t.args,important:!0},parameters:{...t.parameters}};var C,T,v;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(v=(T=t.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var S,I,$;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    title: 'Error title (optional)',
    kind: 'error'
  },
  parameters: {
    ...Default.parameters
  }
}`,...($=(I=n.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var w,_,N;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    title: 'Info title (optional)',
    kind: 'info'
  },
  parameters: {
    ...Default.parameters
  }
}`,...(N=(_=o.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var V,B,L;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    title: 'Success title (optional)',
    kind: 'success'
  },
  parameters: {
    ...Default.parameters
  }
}`,...(L=(B=i.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var E,H,M;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    title: 'Warning title (optional)',
    kind: 'warning'
  },
  parameters: {
    ...Default.parameters
  }
}`,...(M=(H=l.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var O,W,z;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    important: true
  },
  parameters: {
    ...Default.parameters
  }
}`,...(z=(W=d.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};const de=["argsData","argTypesData","Default","Error","Info","Success","Warning","Important"],De=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Error:n,Important:d,Info:o,Success:i,Warning:l,__namedExportsOrder:de,argTypesData:j,argsData:F,default:le},Symbol.toStringTag,{value:"Module"}));export{t as D,n as E,o as I,i as S,De as T,l as W,d as a};
//# sourceMappingURL=toast.stories-7927fd19.js.map
