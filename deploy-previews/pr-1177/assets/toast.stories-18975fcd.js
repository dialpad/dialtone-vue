import{a as D}from"./chunk-AY7I2SME-c7b6cf8a.js";import{g as J,c as U}from"./storybook_utils-87f6670b.js";import{D as P}from"./toast-af0fb7bb.js";import{D as G}from"./button-1062b4f5.js";import{D as Q}from"./icon-f7e2321d.js";import{k as g,o as s,d as p,l as k,m as a,q as m,e as h,J as R,v as X,n as Y}from"./vue.esm-bundler-a9a971fb.js";import{_ as Z}from"./_plugin-vue_export-helper-c27b6911.js";import{N as x}from"./notice-c07bf1d0.js";const q={name:"ToastDefault",components:{DtToast:P,DtButton:G,DtIcon:Q},data(){return{isShown:this.$attrs.show}},computed:{shouldInvertButton(){return this.$attrs.kind==="base"||this.$attrs.kind==="error"||this.$attrs.kind==="info"},isInverted(){return this.$attrs.important&&this.shouldInvertButton},buttonKind(){return this.isInverted?"inverted":"muted"},linkClass(){return this.isInverted?"d-link--inverted":"d-link--muted"},buttonCloseProps(){return{...this.$attrs.closeButtonProps,kind:this.buttonKind,ariaLabel:"Close"}}},watch:{show:function(e){this.isShown=e}},methods:{buttonClicked(){this.isShown=!0}}},ee={class:"d-toast-wrapper"},te=["innerHTML"],ae={key:1},re=["innerHTML"],se=["innerHTML"];function ne(e,u,ue,ce,y,c){const b=g("dt-button"),j=g("dt-icon"),A=g("dt-toast");return s(),p("div",null,[k(b,{onClick:c.buttonClicked},{default:a(()=>[m(" Click to show! ")]),_:1},8,["onClick"]),h("aside",ee,[k(A,{ref:"toast",show:y.isShown,"onUpdate:show":u[0]||(u[0]=f=>y.isShown=f),kind:e.$attrs.kind,title:e.$attrs.title,message:e.$attrs.message,"title-id":e.$attrs.titleId,"content-id":e.$attrs.contentId,important:e.$attrs.important,"hide-close":e.$attrs.hideClose,duration:e.$attrs.duration,"close-button-props":c.buttonCloseProps,"visually-hidden-close":e.$attrs.visuallyHiddenClose,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel,onClose:u[1]||(u[1]=f=>e.$attrs.onClose(f))},R({action:a(()=>[e.$attrs.action?(s(),p("span",{key:0,innerHTML:e.$attrs.action},null,8,re)):(s(),X(b,{key:1,size:"sm",importance:"outlined",kind:c.buttonKind,onClick:e.$attrs.onClick},{default:a(()=>[m(" Action ")]),_:1},8,["kind","onClick"]))]),default:a(()=>[e.defaultSlot?(s(),p("span",{key:0,innerHTML:e.defaultSlot},null,8,te)):(s(),p("span",ae,[m(" Message body with "),h("a",{href:"#",class:Y(["d-link",c.linkClass])},"a link",2),m(". ")]))]),_:2},[e.$attrs.icon?{name:"icon",fn:a(()=>[k(j,{name:e.$attrs.icon},null,8,["name"])]),key:"0"}:void 0,e.$attrs.titleOverride?{name:"titleOverride",fn:a(()=>[h("span",{innerHTML:e.$attrs.titleOverride},null,8,se)]),key:"1"}:void 0]),1032,["show","kind","title","message","title-id","content-id","important","hide-close","duration","close-button-props","visually-hidden-close","visually-hidden-close-label"])])])}const oe=Z(q,[["render",ne],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/toast/toast_default.story.vue"]]);q.__docgenInfo={displayName:"ToastDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/toast/toast_default.story.vue"]};const ie=J(),z={duration:6e3,onClose:D("close"),onClick:D("click"),visuallyHiddenCloseLabel:"Close Toast"},F={titleOverride:{table:{type:{summary:"VNode"}},control:{type:"text"}},icon:{options:ie,table:{type:{summary:"component"}},control:{type:"select",labels:{undefined:"(empty)"}}},default:{table:{type:{summary:"VNode"}},control:{type:"text"}},action:{table:{type:{summary:"VNode"}},control:{type:"text"}},titleId:{table:{defaultValue:{summary:"generated unique ID"}}},contentId:{table:{defaultValue:{summary:"generated unique ID"}}},kind:{options:x,control:{type:"select"}},show:{table:{defaultValue:{summary:"false"}}},duration:{table:{defaultValue:{summary:"null"}}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}},close:{description:"Close button click event",table:{type:{summary:"event"}}}},le={title:"Components/Toast",component:P,args:z,argTypes:F,excludeStories:/.*Data$/},r=e=>U(e,oe),t={render:r,args:{title:"Base title (optional)",kind:"base"},parameters:{percy:{args:{show:!0}}}},n={render:r,args:{...t.args,title:"Error title (optional)",kind:"error"},parameters:{...t.parameters}},o={render:r,args:{...t.args,title:"Info title (optional)",kind:"info"},parameters:{...t.parameters}},i={render:r,args:{...t.args,title:"Success title (optional)",kind:"success"},parameters:{...t.parameters}},l={render:r,args:{...t.args,title:"Warning title (optional)",kind:"warning"},parameters:{...t.parameters}},d={render:r,args:{...t.args,important:!0},parameters:{...t.parameters}};var v,C,T;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(T=(C=t.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var S,I,$;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(L=(B=i.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var H,E,M;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    title: 'Warning title (optional)',
    kind: 'warning'
  },
  parameters: {
    ...Default.parameters
  }
}`,...(M=(E=l.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var O,W,K;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...Default.args,
    important: true
  },
  parameters: {
    ...Default.parameters
  }
}`,...(K=(W=d.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};const de=["argsData","argTypesData","Default","Error","Info","Success","Warning","Important"],De=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Error:n,Important:d,Info:o,Success:i,Warning:l,__namedExportsOrder:de,argTypesData:F,argsData:z,default:le},Symbol.toStringTag,{value:"Module"}));export{t as D,n as E,o as I,i as S,De as T,l as W,d as a};
//# sourceMappingURL=toast.stories-18975fcd.js.map
