import{a as p}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as E,N as H,d as M}from"./notice-d5452256.js";import{D as W}from"./button-9102a84a.js";import{D as F}from"./icon-f34d44a2.js";import{n as K}from"./_plugin-vue2_normalizer-2bbd088e.js";import{g as V,c as z}from"./storybook_utils-adf429e4.js";const j={name:"NoticeDefault",components:{DtButton:W,DtNotice:E,DtIcon:F},computed:{shouldInvertButton(){return this.kind==="base"||this.kind==="error"||this.kind==="info"},isInverted(){return this.important&&this.shouldInvertButton},buttonKind(){return this.isInverted?"inverted":"muted"},linkClass(){return this.isInverted?"d-link--inverted":"d-link--muted"},computedCloseButtonProps(){return{...this.closeButtonProps,kind:this.buttonKind,ariaLabel:"Close"}}}};var w=function(){var e=this,t=e._self._c;return t("dt-notice",{attrs:{kind:e.kind,title:e.title,"title-id":e.titleId,"content-id":e.contentId,important:e.important,"hide-close":e.hideClose,"close-button-props":e.computedCloseButtonProps,"visually-hidden-close":e.visuallyHiddenClose,"visually-hidden-close-label":e.visuallyHiddenCloseLabel},on:{close:function(P){return e.onClose(P)}}},[e.defaultSlot?t("span",{domProps:{innerHTML:e._s(e.defaultSlot)}}):t("span",[e._v(" Message body with "),t("a",{staticClass:"d-link",class:e.linkClass,attrs:{href:"#"}},[e._v("a link")]),e._v(". ")]),t("template",{slot:"action"},[e.action?t("span",{domProps:{innerHTML:e._s(e.action)}}):t("dt-button",{attrs:{size:"sm",importance:"outlined",kind:e.buttonKind},on:{click:e.onClick}},[e._v(" Action ")])],1),e.icon?t("template",{slot:"icon"},[t("dt-icon",{attrs:{name:e.icon}})],1):e._e(),e.titleOverride?t("template",{slot:"titleOverride"},[t("span",{domProps:{innerHTML:e._s(e.titleOverride)}})]):e._e()],2)},R=[];w._withStripped=!0;var c=K(j,w,R,!1,null,null,null,null);c.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/notice/notice_default.story.vue";const A=c.exports;c.exports.__docgenInfo={displayName:"NoticeDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/notice/notice_default.story.vue"]};const $=V(),B={onClose:p("close"),onClick:p("click"),visuallyHiddenCloseLabel:"Close Notice",show:void 0},L={titleOverride:{table:{type:{summary:"VNode"}},control:{type:"text"}},icon:{options:$,table:{type:{summary:"component"}},control:{type:"select",labels:{undefined:"(empty)"}}},default:{table:{type:{summary:"VNode"}},control:{type:"text"}},action:{table:{type:{summary:"VNode"}},control:{type:"text"}},kind:{options:H,control:{type:"select"}},role:{options:M,control:{type:"select"}},show:{table:{disable:!0}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}},close:{description:"Close button click event",table:{type:{summary:"event"}}}},q={title:"Components/Notice",component:E,args:B,argTypes:L,excludeStories:/.Data$/},n=(d,{argTypes:e})=>z(d,e,A),o={render:n,args:{title:"Base title (optional)",kind:"base"}},r={render:n,args:{...o.args,title:"Error title (optional)",kind:"error"}},s={render:n,args:{...o.args,title:"Info title (optional)",kind:"info"}},a={render:n,args:{...o.args,title:"Success title (optional)",kind:"success"}},i={render:n,args:{...o.args,title:"Warning title (optional)",kind:"warning"}},l={render:n,args:{...o.args,important:!0}};var u,m,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: 'Base title (optional)',
    kind: 'base'
  }
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,_,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    title: 'Error title (optional)',
    kind: 'error'
  }
}`,...(v=(_=r.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var k,y,b;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var I,S,N;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    title: 'Warning title (optional)',
    kind: 'warning'
  }
}`,...(N=(S=i.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var T,O,x;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    important: true
  }
}`,...(x=(O=l.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};const G=["argsData","argTypesData","Default","Error","Info","Success","Warning","Important"],ee=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Error:r,Important:l,Info:s,Success:a,Warning:i,__namedExportsOrder:G,argTypesData:L,argsData:B,default:q},Symbol.toStringTag,{value:"Module"}));export{o as D,r as E,s as I,ee as N,a as S,i as W,B as a,L as b,l as c};
//# sourceMappingURL=notice.stories-3a69af86.js.map
