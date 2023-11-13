import{a as g}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as V,N as R,d as q}from"./notice-8ca83c59.js";import{D as G}from"./button-d6d7aa5d.js";import{D as J}from"./icon-f1465796.js";import{s as p,o,b as k,C as Q,w as r,u as U,e as y,k as m,x as f,p as X}from"./vue.esm-bundler-3a36b22d.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";import{g as Z,c as x}from"./storybook_utils-182ea7b7.js";const W={name:"NoticeDefault",components:{DtButton:G,DtNotice:V,DtIcon:J},computed:{shouldInvertButton(){return this.$attrs.kind==="base"||this.$attrs.kind==="error"||this.$attrs.kind==="info"},isInverted(){return this.$attrs.important&&this.shouldInvertButton},buttonKind(){return this.isInverted?"inverted":"muted"},linkClass(){return this.isInverted?"d-link--inverted":"d-link--muted"},computedCloseButtonProps(){return{...this.$attrs.closeButtonProps,kind:this.buttonKind,ariaLabel:"Close"}}}},ee=["innerHTML"],te={key:1},ne=["innerHTML"],oe=["innerHTML"];function re(e,c,de,ce,ue,u){const z=p("dt-button"),F=p("dt-icon"),j=p("dt-notice");return o(),k(j,{kind:e.$attrs.kind,title:e.$attrs.title,"title-id":e.$attrs.titleId,"content-id":e.$attrs.contentId,important:e.$attrs.important,"hide-close":e.$attrs.hideClose,"close-button-props":u.computedCloseButtonProps,"visually-hidden-close":e.$attrs.visuallyHiddenClose,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel,onClose:c[0]||(c[0]=A=>{e.$attrs.onClose(A)})},Q({action:r(()=>[e.$attrs.action?(o(),m("span",{key:0,innerHTML:e.$attrs.action},null,8,ne)):(o(),k(z,{key:1,size:"sm",importance:"outlined",kind:u.buttonKind,onClick:e.$attrs.onClick},{default:r(()=>[f(" Action ")]),_:1},8,["kind","onClick"]))]),default:r(()=>[e.defaultSlot?(o(),m("span",{key:0,innerHTML:e.defaultSlot},null,8,ee)):(o(),m("span",te,[f(" Message body with "),y("a",{href:"#",class:X(["d-link",u.linkClass])},"a link",2),f(". ")]))]),_:2},[e.$attrs.icon?{name:"icon",fn:r(()=>[U(F,{name:e.$attrs.icon},null,8,["name"])]),key:"0"}:void 0,e.$attrs.titleOverride?{name:"titleOverride",fn:r(()=>[y("span",{innerHTML:e.$attrs.titleOverride},null,8,oe)]),key:"1"}:void 0]),1032,["kind","title","title-id","content-id","important","hide-close","close-button-props","visually-hidden-close","visually-hidden-close-label"])}const se=Y(W,[["render",re],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/notice/notice_default.story.vue"]]);W.__docgenInfo={displayName:"NoticeDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/notice/notice_default.story.vue"]};const ae=Z(),K={onClose:g("close"),onClick:g("click"),visuallyHiddenCloseLabel:"Close Notice",show:void 0},P={titleOverride:{table:{type:{summary:"VNode"}},control:{type:"text"}},icon:{options:ae,table:{type:{summary:"component"}},control:{type:"select",labels:{undefined:"(empty)"}}},default:{table:{type:{summary:"VNode"}},control:{type:"text"}},action:{table:{type:{summary:"VNode"}},control:{type:"text"}},kind:{options:R,control:{type:"select"}},role:{options:q,control:{type:"select"}},show:{table:{disable:!0}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}},close:{description:"Close button click event",table:{type:{summary:"event"}}}},ie={title:"Components/Notice",component:V,args:K,argTypes:P,excludeStories:/.Data$/},n=(e,{argTypes:c})=>x(e,c,se),t={render:n,args:{title:"Base title (optional)",kind:"base"}},s={render:n,args:{...t.args,title:"Error title (optional)",kind:"error"}},a={render:n,args:{...t.args,title:"Info title (optional)",kind:"info"}},i={render:n,args:{...t.args,title:"Success title (optional)",kind:"success"}},l={render:n,args:{...t.args,title:"Warning title (optional)",kind:"warning"}},d={render:n,args:{...t.args,important:!0}};var b,h,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: 'Base title (optional)',
    kind: 'base'
  }
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var C,_,$;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(O=(E=l.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var w,H,M;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    important: true
  }
}`,...(M=(H=d.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};const le=["argsData","argTypesData","Default","Error","Info","Success","Warning","Important"],he=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Error:s,Important:d,Info:a,Success:i,Warning:l,__namedExportsOrder:le,argTypesData:P,argsData:K,default:ie},Symbol.toStringTag,{value:"Module"}));export{t as D,s as E,a as I,he as N,i as S,l as W,d as a,K as b,P as c};
//# sourceMappingURL=notice.stories-e9e89a1d.js.map
