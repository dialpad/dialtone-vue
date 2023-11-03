import{a as p}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as x,N as P,d as H}from"./notice-4e45a464.js";import{D as M}from"./button-8aff4255.js";import{D as W}from"./icon-d8f6269e.js";import{n as F}from"./_plugin-vue2_normalizer-2bbd088e.js";import{a as K,c as V}from"./storybook_utils-996a989f.js";const z={name:"NoticeDefault",components:{DtButton:M,DtNotice:x,DtIcon:W},computed:{shouldInvertButton(){return this.$attrs.kind==="base"||this.$attrs.kind==="error"||this.$attrs.kind==="info"},isInverted(){return this.$attrs.important&&this.shouldInvertButton},buttonKind(){return this.isInverted?"inverted":"muted"},linkClass(){return this.isInverted?"d-link--inverted":"d-link--muted"},computedCloseButtonProps(){return{...this.$attrs.closeButtonProps,kind:this.buttonKind,ariaLabel:"Close"}}}};var E=function(){var t=this,e=t._self._c;return e("dt-notice",{attrs:{kind:t.$attrs.kind,title:t.$attrs.title,"title-id":t.$attrs.titleId,"content-id":t.$attrs.contentId,important:t.$attrs.important,"hide-close":t.$attrs.hideClose,"close-button-props":t.computedCloseButtonProps,"visually-hidden-close":t.$attrs.visuallyHiddenClose,"visually-hidden-close-label":t.$attrs.visuallyHiddenCloseLabel},on:{close:function(L){return t.$attrs.onClose(L)}}},[t.$attrs.default?e("span",{domProps:{innerHTML:t._s(t.$attrs.default)}}):e("span",[t._v(" Message body with "),e("a",{staticClass:"d-link",class:t.linkClass,attrs:{href:"#"}},[t._v("a link")]),t._v(". ")]),e("template",{slot:"action"},[t.$attrs.action?e("span",{domProps:{innerHTML:t._s(t.$attrs.action)}}):e("dt-button",{attrs:{size:"sm",importance:"outlined",kind:t.buttonKind},on:{click:t.$attrs.onClick}},[t._v(" Action ")])],1),t.$attrs.icon?e("template",{slot:"icon"},[e("dt-icon",{attrs:{name:t.$attrs.icon}})],1):t._e(),t.$attrs.titleOverride?e("template",{slot:"titleOverride"},[e("span",{domProps:{innerHTML:t._s(t.$attrs.titleOverride)}})]):t._e()],2)},j=[];E._withStripped=!0;var c=F(z,E,j,!1,null,null,null,null);c.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/notice/notice_default.story.vue";const R=c.exports;c.exports.__docgenInfo={displayName:"NoticeDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/notice/notice_default.story.vue"]};const A=K(),w={onClose:p("close"),onClick:p("click"),visuallyHiddenCloseLabel:"Close Notice",show:void 0},B={titleOverride:{table:{type:{summary:"VNode"}},control:{type:"text"}},icon:{options:A,table:{type:{summary:"component"}},control:{type:"select",labels:{undefined:"(empty)"}}},default:{table:{type:{summary:"VNode"}},control:{type:"text"}},action:{table:{type:{summary:"VNode"}},control:{type:"text"}},kind:{options:P,control:{type:"select"}},role:{options:H,control:{type:"select"}},show:{table:{disable:!0}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}},close:{description:"Close button click event",table:{type:{summary:"event"}}}},q={title:"Components/Notice",component:x,args:w,argTypes:B,excludeStories:/.Data$/},s=(d,{argTypes:t})=>V(d,t,R),r={render:s,args:{title:"Base title (optional)",kind:"base"}},n={render:s,args:{...r.args,title:"Error title (optional)",kind:"error"}},o={render:s,args:{...r.args,title:"Info title (optional)",kind:"info"}},a={render:s,args:{...r.args,title:"Success title (optional)",kind:"success"}},i={render:s,args:{...r.args,title:"Warning title (optional)",kind:"warning"}},l={render:s,args:{...r.args,important:!0}};var u,m,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: 'Base title (optional)',
    kind: 'base'
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,_,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    title: 'Error title (optional)',
    kind: 'error'
  }
}`,...(v=(_=n.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var k,y,b;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    title: 'Info title (optional)',
    kind: 'info'
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var $,h,C;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    title: 'Success title (optional)',
    kind: 'success'
  }
}`,...(C=(h=a.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var D,I,N;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    title: 'Warning title (optional)',
    kind: 'warning'
  }
}`,...(N=(I=i.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var S,T,O;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    important: true
  }
}`,...(O=(T=l.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};const G=["argsData","argTypesData","Default","Error","Info","Success","Warning","Important"],tt=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Error:n,Important:l,Info:o,Success:a,Warning:i,__namedExportsOrder:G,argTypesData:B,argsData:w,default:q},Symbol.toStringTag,{value:"Module"}));export{r as D,n as E,o as I,tt as N,a as S,i as W,l as a,w as b,B as c};
//# sourceMappingURL=notice.stories-93bef47b.js.map
