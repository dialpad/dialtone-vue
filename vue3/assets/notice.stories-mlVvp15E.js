import{a as f}from"./chunk-AY7I2SME-4UylTnhF.js";import{c as V,N as R,d as q}from"./notice-3WzzuI2v.js";import{D as G}from"./button-kZigUkBo.js";import{D as J}from"./icon-XBQwdgf_.js";import{s as u,o,b as k,C as Q,w as r,u as U,e as y,k as m,x as g,p as X}from"./vue.esm-bundler-qY5SvxH_.js";import{_ as Y}from"./_plugin-vue_export-helper-x3n3nnut.js";import{g as Z,c as x}from"./storybook_utils-dy5aucTw.js";const W={name:"NoticeDefault",components:{DtButton:G,DtNotice:V,DtIcon:J},computed:{shouldInvertButton(){return this.$attrs.kind==="base"||this.$attrs.kind==="error"||this.$attrs.kind==="info"},isInverted(){return this.$attrs.important&&this.shouldInvertButton},buttonKind(){return this.isInverted?"inverted":"muted"},linkClass(){return this.isInverted?"d-link--inverted":"d-link--muted"},computedCloseButtonProps(){return{...this.$attrs.closeButtonProps,kind:this.buttonKind,ariaLabel:"Close"}}}},ee=["innerHTML"],te={key:1},ne=["innerHTML"],oe=["innerHTML"];function re(e,c,de,ce,pe,p){const z=u("dt-button"),F=u("dt-icon"),j=u("dt-notice");return o(),k(j,{kind:e.$attrs.kind,title:e.$attrs.title,"title-id":e.$attrs.titleId,"content-id":e.$attrs.contentId,important:e.$attrs.important,"hide-close":e.$attrs.hideClose,"close-button-props":p.computedCloseButtonProps,"visually-hidden-close":e.$attrs.visuallyHiddenClose,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel,onClose:c[0]||(c[0]=A=>{e.$attrs.onClose(A)})},Q({action:r(()=>[e.$attrs.action?(o(),m("span",{key:0,innerHTML:e.$attrs.action},null,8,ne)):(o(),k(z,{key:1,size:"sm",importance:"outlined",kind:p.buttonKind,onClick:e.$attrs.onClick},{default:r(()=>[g(" Action ")]),_:1},8,["kind","onClick"]))]),default:r(()=>[e.defaultSlot?(o(),m("span",{key:0,innerHTML:e.defaultSlot},null,8,ee)):(o(),m("span",te,[g(" Message body with "),y("a",{href:"#",class:X(["d-link",p.linkClass])},"a link",2),g(". ")]))]),_:2},[e.$attrs.icon?{name:"icon",fn:r(()=>[U(F,{name:e.$attrs.icon},null,8,["name"])]),key:"0"}:void 0,e.$attrs.titleOverride?{name:"titleOverride",fn:r(()=>[y("span",{innerHTML:e.$attrs.titleOverride},null,8,oe)]),key:"1"}:void 0]),1032,["kind","title","title-id","content-id","important","hide-close","close-button-props","visually-hidden-close","visually-hidden-close-label"])}const se=Y(W,[["render",re]]);W.__docgenInfo={displayName:"NoticeDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/notice/notice_default.story.vue"]};const ae=Z(),K={onClose:f("close"),onClick:f("click"),visuallyHiddenCloseLabel:"Close Notice",show:void 0},P={titleOverride:{table:{type:{summary:"VNode"}},control:{type:"text"}},icon:{options:ae,table:{type:{summary:"component"}},control:{type:"select",labels:{undefined:"(empty)"}}},default:{table:{type:{summary:"VNode"}},control:{type:"text"}},action:{table:{type:{summary:"VNode"}},control:{type:"text"}},kind:{options:R,control:{type:"select"}},role:{options:q,control:{type:"select"}},show:{table:{disable:!0}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}},close:{description:"Close button click event",table:{type:{summary:"event"}}}},ie={title:"Components/Notice",component:V,args:K,argTypes:P,excludeStories:/.Data$/},n=(e,{argTypes:c})=>x(e,c,se),t={render:n,args:{title:"Base title (optional)",kind:"base"}},s={render:n,args:{...t.args,title:"Error title (optional)",kind:"error"}},a={render:n,args:{...t.args,title:"Info title (optional)",kind:"info"}},i={render:n,args:{...t.args,title:"Success title (optional)",kind:"success"}},l={render:n,args:{...t.args,title:"Warning title (optional)",kind:"warning"}},d={render:n,args:{...t.args,important:!0}};var b,h,C;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: 'Base title (optional)',
    kind: 'base'
  }
}`,...(C=(h=t.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var v,$,D;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    title: 'Error title (optional)',
    kind: 'error'
  }
}`,...(D=($=s.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var N,T,I;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    title: 'Info title (optional)',
    kind: 'info'
  }
}`,...(I=(T=a.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var S,_,B;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    title: 'Success title (optional)',
    kind: 'success'
  }
}`,...(B=(_=i.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var L,E,O;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(M=(w=d.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};const le=["argsData","argTypesData","Default","Error","Info","Success","Warning","Important"],he=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Error:s,Important:d,Info:a,Success:i,Warning:l,__namedExportsOrder:le,argTypesData:P,argsData:K,default:ie},Symbol.toStringTag,{value:"Module"}));export{t as D,s as E,a as I,he as N,i as S,l as W,d as a,K as b,P as c};
//# sourceMappingURL=notice.stories-mlVvp15E.js.map
