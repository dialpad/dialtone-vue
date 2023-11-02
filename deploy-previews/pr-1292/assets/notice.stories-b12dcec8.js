import{a as p}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as x,N as P,d as H}from"./notice-ff0368de.js";import{D as M}from"./button-f9ebe2a3.js";import{D as W}from"./icon-f96b5e93.js";import{n as F}from"./_plugin-vue2_normalizer-2bbd088e.js";import{a as K,c as V}from"./storybook_utils-6d48caaf.js";const z={name:"NoticeDefault",components:{DtButton:M,DtNotice:x,DtIcon:W},computed:{shouldInvertButton(){return this.kind==="base"||this.kind==="error"||this.kind==="info"},isInverted(){return this.important&&this.shouldInvertButton},buttonKind(){return this.isInverted?"inverted":"muted"},linkClass(){return this.isInverted?"d-link--inverted":"d-link--muted"},computedCloseButtonProps(){return{...this.closeButtonProps,kind:this.buttonKind,ariaLabel:"Close"}}}};var E=function(){var e=this,t=e._self._c;return t("dt-notice",{attrs:{kind:e.$attrs.kind,title:e.$attrs.title,"title-id":e.$attrs.titleId,"content-id":e.$attrs.contentId,important:e.$attrs.important,"hide-close":e.$attrs.hideClose,"close-button-props":e.computedCloseButtonProps,"visually-hidden-close":e.$attrs.visuallyHiddenClose,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel},on:{close:function(L){return e.onClose(L)}}},[e.$attrs.default?t("span",{domProps:{innerHTML:e._s(e.$attrs.default)}}):t("span",[e._v(" Message body with "),t("a",{staticClass:"d-link",class:e.linkClass,attrs:{href:"#"}},[e._v("a link")]),e._v(". ")]),t("template",{slot:"action"},[e.$attrs.action?t("span",{domProps:{innerHTML:e._s(e.$attrs.action)}}):t("dt-button",{attrs:{size:"sm",importance:"outlined",kind:e.buttonKind},on:{click:e.$attrs.onClick}},[e._v(" Action ")])],1),e.$attrs.icon?t("template",{slot:"icon"},[t("dt-icon",{attrs:{name:e.$attrs.icon}})],1):e._e(),e.$attrs.titleOverride?t("template",{slot:"titleOverride"},[t("span",{domProps:{innerHTML:e._s(e.$attrs.titleOverride)}})]):e._e()],2)},j=[];E._withStripped=!0;var c=F(z,E,j,!1,null,null,null,null);c.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/notice/notice_default.story.vue";const R=c.exports;c.exports.__docgenInfo={displayName:"NoticeDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/notice/notice_default.story.vue"]};const A=K(),w={onClose:p("close"),onClick:p("click"),visuallyHiddenCloseLabel:"Close Notice",show:void 0},B={titleOverride:{table:{type:{summary:"VNode"}},control:{type:"text"}},icon:{options:A,table:{type:{summary:"component"}},control:{type:"select",labels:{undefined:"(empty)"}}},default:{table:{type:{summary:"VNode"}},control:{type:"text"}},action:{table:{type:{summary:"VNode"}},control:{type:"text"}},kind:{options:P,control:{type:"select"}},role:{options:H,control:{type:"select"}},show:{table:{disable:!0}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}},close:{description:"Close button click event",table:{type:{summary:"event"}}}},q={title:"Components/Notice",component:x,args:w,argTypes:B,excludeStories:/.Data$/},n=(d,{argTypes:e})=>V(d,e,R),r={render:n,args:{title:"Base title (optional)",kind:"base"}},o={render:n,args:{...r.args,title:"Error title (optional)",kind:"error"}},s={render:n,args:{...r.args,title:"Info title (optional)",kind:"info"}},a={render:n,args:{...r.args,title:"Success title (optional)",kind:"success"}},i={render:n,args:{...r.args,title:"Warning title (optional)",kind:"warning"}},l={render:n,args:{...r.args,important:!0}};var u,m,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: 'Base title (optional)',
    kind: 'base'
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,_,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    title: 'Error title (optional)',
    kind: 'error'
  }
}`,...(v=(_=o.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var k,y,b;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    title: 'Info title (optional)',
    kind: 'info'
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var h,C,D;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    title: 'Success title (optional)',
    kind: 'success'
  }
}`,...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var I,N,S;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    title: 'Warning title (optional)',
    kind: 'warning'
  }
}`,...(S=(N=i.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var $,T,O;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    important: true
  }
}`,...(O=(T=l.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};const G=["argsData","argTypesData","Default","Error","Info","Success","Warning","Important"],ee=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Error:o,Important:l,Info:s,Success:a,Warning:i,__namedExportsOrder:G,argTypesData:B,argsData:w,default:q},Symbol.toStringTag,{value:"Module"}));export{r as D,o as E,s as I,ee as N,a as S,i as W,l as a,w as b,B as c};
//# sourceMappingURL=notice.stories-b12dcec8.js.map
