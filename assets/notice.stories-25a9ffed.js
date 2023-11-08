import{a as d}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as O,N as P,d as w}from"./notice-8f43f4d7.js";import{D as H}from"./button-d2753bc0.js";import{D as M}from"./icon-4ee45ea4.js";import{n as W}from"./_plugin-vue2_normalizer-2bbd088e.js";import{a as F,c as K}from"./storybook_utils-cf049d2e.js";const V={name:"NoticeDefault",components:{DtButton:H,DtNotice:O,DtIcon:M},computed:{shouldInvertButton(){return this.$attrs.kind==="base"||this.$attrs.kind==="error"||this.$attrs.kind==="info"},isInverted(){return this.$attrs.important&&this.shouldInvertButton},buttonKind(){return this.isInverted?"inverted":"muted"},linkClass(){return this.isInverted?"d-link--inverted":"d-link--muted"},computedCloseButtonProps(){return{...this.$attrs.closeButtonProps,kind:this.buttonKind,ariaLabel:"Close"}}}};var z=function(){var t=this,e=t._self._c;return e("dt-notice",{attrs:{kind:t.$attrs.kind,title:t.$attrs.title,"title-id":t.$attrs.titleId,"content-id":t.$attrs.contentId,important:t.$attrs.important,"hide-close":t.$attrs.hideClose,"close-button-props":t.computedCloseButtonProps,"visually-hidden-close":t.$attrs.visuallyHiddenClose,"visually-hidden-close-label":t.$attrs.visuallyHiddenCloseLabel},on:{close:function(L){return t.$attrs.onClose(L)}}},[t.$attrs.default?e("span",{domProps:{innerHTML:t._s(t.$attrs.default)}}):e("span",[t._v(" Message body with "),e("a",{staticClass:"d-link",class:t.linkClass,attrs:{href:"#"}},[t._v("a link")]),t._v(". ")]),e("template",{slot:"action"},[t.$attrs.action?e("span",{domProps:{innerHTML:t._s(t.$attrs.action)}}):e("dt-button",{attrs:{size:"sm",importance:"outlined",kind:t.buttonKind},on:{click:t.$attrs.onClick}},[t._v(" Action ")])],1),t.$attrs.icon?e("template",{slot:"icon"},[e("dt-icon",{attrs:{name:t.$attrs.icon}})],1):t._e(),t.$attrs.titleOverride?e("template",{slot:"titleOverride"},[e("span",{domProps:{innerHTML:t._s(t.$attrs.titleOverride)}})]):t._e()],2)},j=[],x=W(V,z,j,!1,null,null,null,null);const R=x.exports;x.exports.__docgenInfo={displayName:"NoticeDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/notice/notice_default.story.vue"]};const A=F(),E={onClose:d("close"),onClick:d("click"),visuallyHiddenCloseLabel:"Close Notice",show:void 0},B={titleOverride:{table:{type:{summary:"VNode"}},control:{type:"text"}},icon:{options:A,table:{type:{summary:"component"}},control:{type:"select",labels:{undefined:"(empty)"}}},default:{table:{type:{summary:"VNode"}},control:{type:"text"}},action:{table:{type:{summary:"VNode"}},control:{type:"text"}},kind:{options:P,control:{type:"select"}},role:{options:w,control:{type:"select"}},show:{table:{disable:!0}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}},close:{description:"Close button click event",table:{type:{summary:"event"}}}},q={title:"Components/Notice",component:O,args:E,argTypes:B,excludeStories:/.Data$/},s=(c,{argTypes:t})=>K(c,t,R),r={render:s,args:{title:"Base title (optional)",kind:"base"}},n={render:s,args:{...r.args,title:"Error title (optional)",kind:"error"}},o={render:s,args:{...r.args,title:"Info title (optional)",kind:"info"}},a={render:s,args:{...r.args,title:"Success title (optional)",kind:"success"}},i={render:s,args:{...r.args,title:"Warning title (optional)",kind:"warning"}},l={render:s,args:{...r.args,important:!0}};var p,u,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: 'Base title (optional)',
    kind: 'base'
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,f,_;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    title: 'Error title (optional)',
    kind: 'error'
  }
}`,...(_=(f=n.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var k,v,b;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    title: 'Info title (optional)',
    kind: 'info'
  }
}`,...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var y,$,C;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    title: 'Success title (optional)',
    kind: 'success'
  }
}`,...(C=($=a.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var D,h,I;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    title: 'Warning title (optional)',
    kind: 'warning'
  }
}`,...(I=(h=i.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var N,S,T;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    important: true
  }
}`,...(T=(S=l.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const G=["argsData","argTypesData","Default","Error","Info","Success","Warning","Important"],tt=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Error:n,Important:l,Info:o,Success:a,Warning:i,__namedExportsOrder:G,argTypesData:B,argsData:E,default:q},Symbol.toStringTag,{value:"Module"}));export{r as D,n as E,o as I,tt as N,a as S,i as W,l as a,E as b,B as c};
//# sourceMappingURL=notice.stories-25a9ffed.js.map
