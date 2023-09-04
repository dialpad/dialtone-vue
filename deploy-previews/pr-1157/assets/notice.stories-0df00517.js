import{a as g}from"./chunk-AY7I2SME-c7b6cf8a.js";import{c as V,N as A,d as J}from"./notice-538bb70b.js";import{D as R}from"./button-3250ad24.js";import{D as G}from"./icon-bd60410b.js";import{k as u,o,v as k,J as Q,m as r,l as U,e as y,d as p,q as m,n as X}from"./vue.esm-bundler-6a14dfd3.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";import{g as Z,c as x}from"./storybook_utils-255cd4a4.js";const W={name:"NoticeDefault",components:{DtButton:R,DtNotice:V,DtIcon:G},computed:{shouldInvertButton(){return this.$attrs.kind==="base"||this.$attrs.kind==="error"||this.$attrs.kind==="info"},isInverted(){return this.$attrs.important&&this.shouldInvertButton},buttonKind(){return this.isInverted?"inverted":"muted"},linkClass(){return this.isInverted?"d-link--inverted":"d-link--muted"},computedCloseButtonProps(){return{...this.$attrs.closeButtonProps,kind:this.buttonKind,ariaLabel:"Close"}}}},ee=["innerHTML"],te={key:1},ne=["innerHTML"],oe=["innerHTML"];function re(e,f,de,ce,ue,c){const z=u("dt-button"),F=u("dt-icon"),j=u("dt-notice");return o(),k(j,{kind:e.$attrs.kind,title:e.$attrs.title,"title-id":e.$attrs.titleId,"content-id":e.$attrs.contentId,important:e.$attrs.important,"hide-close":e.$attrs.hideClose,"close-button-props":c.computedCloseButtonProps,"visually-hidden-close":e.$attrs.visuallyHiddenClose,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel,onClose:f[0]||(f[0]=q=>{e.$attrs.onClose(q)})},Q({action:r(()=>[e.$attrs.action?(o(),p("span",{key:0,innerHTML:e.$attrs.action},null,8,ne)):(o(),k(z,{key:1,size:"sm",importance:"outlined",kind:c.buttonKind,onClick:e.$attrs.onClick},{default:r(()=>[m(" Action ")]),_:1},8,["kind","onClick"]))]),default:r(()=>[e.defaultSlot?(o(),p("span",{key:0,innerHTML:e.defaultSlot},null,8,ee)):(o(),p("span",te,[m(" Message body with "),y("a",{href:"#",class:X(["d-link",c.linkClass])},"a link",2),m(". ")]))]),_:2},[e.$attrs.icon?{name:"icon",fn:r(()=>[U(F,{name:e.$attrs.icon},null,8,["name"])]),key:"0"}:void 0,e.$attrs.titleOverride?{name:"titleOverride",fn:r(()=>[y("span",{innerHTML:e.$attrs.titleOverride},null,8,oe)]),key:"1"}:void 0]),1032,["kind","title","title-id","content-id","important","hide-close","close-button-props","visually-hidden-close","visually-hidden-close-label"])}const se=Y(W,[["render",re],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/notice/notice_default.story.vue"]]);W.__docgenInfo={displayName:"NoticeDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/notice/notice_default.story.vue"]};const ae=Z(),K={onClose:g("close"),onClick:g("click"),visuallyHiddenCloseLabel:"Close Notice",show:void 0},P={titleOverride:{table:{type:{summary:"VNode"}},control:{type:"text"}},icon:{options:ae,table:{type:{summary:"component"}},control:{type:"select",labels:{undefined:"(empty)"}}},default:{table:{type:{summary:"VNode"}},control:{type:"text"}},action:{table:{type:{summary:"VNode"}},control:{type:"text"}},kind:{options:A,control:{type:"select"}},role:{options:J,control:{type:"select"}},show:{table:{disable:!0}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}},close:{description:"Close button click event",table:{type:{summary:"event"}}}},ie={title:"Components/Notice",component:V,args:K,argTypes:P,excludeStories:/.Data$/},n=e=>x(e,se),t={render:n,args:{title:"Base title (optional)",kind:"base"}},s={render:n,args:{...t.args,title:"Error title (optional)",kind:"error"}},a={render:n,args:{...t.args,title:"Info title (optional)",kind:"info"}},i={render:n,args:{...t.args,title:"Success title (optional)",kind:"success"}},l={render:n,args:{...t.args,title:"Warning title (optional)",kind:"warning"}},d={render:n,args:{...t.args,important:!0}};var b,v,h;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: 'Base title (optional)',
    kind: 'base'
  }
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var C,_,$;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    title: 'Error title (optional)',
    kind: 'error'
  }
}`,...($=(_=s.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var D,N,T;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    title: 'Info title (optional)',
    kind: 'info'
  }
}`,...(T=(N=a.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var I,S,B;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    title: 'Success title (optional)',
    kind: 'success'
  }
}`,...(B=(S=i.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var L,E,O;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    title: 'Warning title (optional)',
    kind: 'warning'
  }
}`,...(O=(E=l.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var H,w,M;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    important: true
  }
}`,...(M=(w=d.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};const le=["argsData","argTypesData","Default","Error","Info","Success","Warning","Important"],ve=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Error:s,Important:d,Info:a,Success:i,Warning:l,__namedExportsOrder:le,argTypesData:P,argsData:K,default:ie},Symbol.toStringTag,{value:"Module"}));export{t as D,s as E,a as I,ve as N,i as S,l as W,K as a,P as b,d as c};
//# sourceMappingURL=notice.stories-0df00517.js.map
