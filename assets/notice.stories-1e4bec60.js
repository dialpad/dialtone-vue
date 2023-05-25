import{a as d}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as x,N as w,d as H}from"./notice-30a42932.js";import{D as M}from"./button-82727ed7.js";import{D as W}from"./icon-67ed9c61.js";import{n as F}from"./_plugin-vue2_normalizer-2bbd088e.js";import{g as K,c as V}from"./storybook_utils-d08f208b.js";const z={name:"NoticeDefault",components:{DtButton:M,DtNotice:x,DtIcon:W},computed:{shouldInvertButton(){return this.kind==="base"||this.kind==="error"||this.kind==="info"},isInverted(){return this.important&&this.shouldInvertButton},buttonKind(){return this.isInverted?"inverted":"muted"},linkClass(){return this.isInverted?"d-link--inverted":"d-link--muted"},computedCloseButtonProps(){return{...this.closeButtonProps,kind:this.buttonKind,ariaLabel:"Close"}}}};var j=function(){var e=this,t=e._self._c;return t("dt-notice",{attrs:{kind:e.kind,title:e.title,"title-id":e.titleId,"content-id":e.contentId,important:e.important,"hide-close":e.hideClose,"close-button-props":e.computedCloseButtonProps,"visually-hidden-close":e.visuallyHiddenClose,"visually-hidden-close-label":e.visuallyHiddenCloseLabel},on:{close:function(P){return e.onClose(P)}}},[e.defaultSlot?t("span",{domProps:{innerHTML:e._s(e.defaultSlot)}}):t("span",[e._v(" Message body with "),t("a",{staticClass:"d-link",class:e.linkClass,attrs:{href:"#"}},[e._v("a link")]),e._v(". ")]),t("template",{slot:"action"},[e.action?t("span",{domProps:{innerHTML:e._s(e.action)}}):t("dt-button",{attrs:{size:"sm",importance:"outlined",kind:e.buttonKind},on:{click:e.onClick}},[e._v(" Action ")])],1),e.icon?t("template",{slot:"icon"},[t("dt-icon",{attrs:{name:e.icon}})],1):e._e(),e.titleOverride?t("template",{slot:"titleOverride"},[t("span",{domProps:{innerHTML:e._s(e.titleOverride)}})]):e._e()],2)},R=[],E=F(z,j,R,!1,null,null,null,null);const A=E.exports;E.exports.__docgenInfo={displayName:"NoticeDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/notice/notice_default.story.vue"]};const $=K(),B={onClose:d("close"),onClick:d("click"),visuallyHiddenCloseLabel:"Close Notice",show:void 0},L={titleOverride:{table:{type:{summary:"VNode"}},control:{type:"text"}},icon:{options:$,table:{type:{summary:"component"}},control:{type:"select",labels:{undefined:"(empty)"}}},default:{table:{type:{summary:"VNode"}},control:{type:"text"}},action:{table:{type:{summary:"VNode"}},control:{type:"text"}},kind:{options:w,control:{type:"select"}},role:{options:H,control:{type:"select"}},show:{table:{disable:!0}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}},close:{description:"Close button click event",table:{type:{summary:"event"}}}},q={title:"Components/Notice",component:x,args:B,argTypes:L,excludeStories:/.Data$/},r=(c,{argTypes:e})=>V(c,e,A),n={render:r,args:{title:"Base title (optional)",kind:"base"}},o={render:r,args:{...n.args,title:"Error title (optional)",kind:"error"}},s={render:r,args:{...n.args,title:"Info title (optional)",kind:"info"}},a={render:r,args:{...n.args,title:"Success title (optional)",kind:"success"}},i={render:r,args:{...n.args,title:"Warning title (optional)",kind:"warning"}},l={render:r,args:{...n.args,important:!0}};var p,u,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: 'Base title (optional)',
    kind: 'base'
  }
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,f,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    title: 'Error title (optional)',
    kind: 'error'
  }
}`,...(_=(f=o.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var k,v,b;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    title: 'Info title (optional)',
    kind: 'info'
  }
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var y,C,D;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    title: 'Success title (optional)',
    kind: 'success'
  }
}`,...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var h,I,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    title: 'Warning title (optional)',
    kind: 'warning'
  }
}`,...(S=(I=i.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var N,T,O;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    important: true
  }
}`,...(O=(T=l.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};const G=["argsData","argTypesData","Default","Error","Info","Success","Warning","Important"],ee=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Error:o,Important:l,Info:s,Success:a,Warning:i,__namedExportsOrder:G,argTypesData:L,argsData:B,default:q},Symbol.toStringTag,{value:"Module"}));export{n as D,o as E,s as I,ee as N,a as S,i as W,B as a,L as b,l as c};
//# sourceMappingURL=notice.stories-1e4bec60.js.map
