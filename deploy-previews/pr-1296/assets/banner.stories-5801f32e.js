import{D as G}from"./banner-0f45ae28.js";import{D as Y}from"./button-d6d7aa5d.js";import{D as Z}from"./icon-f1465796.js";import{s as k,o as b,k as h,d as C,v as $,u as m,w as t,x as g,C as x,y as ee,e as B,p as I}from"./vue.esm-bundler-3a36b22d.js";import{_ as re}from"./_plugin-vue_export-helper-c27b6911.js";import{c as ae}from"./storybook_utils-182ea7b7.js";import{b as y,c}from"./notice.stories-e9e89a1d.js";const J={name:"BannerDefault",components:{DtBanner:G,DtButton:Y,DtIcon:Z},data(){return{displayBanner:this.$attrs.show}},computed:{shouldInvertButton(){return this.$attrs.kind==="base"||this.$attrs.kind==="error"||this.$attrs.kind==="info"},isInverted(){return this.$attrs.important&&this.shouldInvertButton},buttonKind(){return this.isInverted?"inverted":"muted"},linkClass(){return this.isInverted?"d-link--inverted":"d-link--muted"},buttonCloseProps(){return{...this.$attrs.closeButtonProps,kind:this.buttonKind,ariaLabel:"Close"}}}},ne=["innerHTML"],te={key:1},se=["innerHTML"];function oe(e,n,ce,pe,p,f){const D=k("dt-button"),Q=k("dt-icon"),X=k("dt-banner");return b(),h("div",null,[C(m(D,{onClick:n[0]||(n[0]=v=>p.displayBanner=!0)},{default:t(()=>[g(" Click to show! ")]),_:1},512),[[$,!p.displayBanner]]),C(m(X,{kind:e.$attrs.kind,title:e.$attrs.title,"title-id":e.$attrs.titleId,"content-id":e.$attrs.contentId,important:e.$attrs.important,pinned:e.$attrs.pinned,"hide-close":e.$attrs.hideClose,"close-button-props":f.buttonCloseProps,class:I({"d-ps-sticky":e.$attrs.show}),"hide-icon":e.$attrs.hideIcon,"background-image":e.$attrs.backgroundImage,"background-size":e.$attrs.backgroundSize,"dialog-class":e.$attrs.dialogClass,"visually-hidden-close":e.$attrs.visuallyHiddenClose,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel,onClose:n[1]||(n[1]=v=>{p.displayBanner=!1,e.$attrs.onClose(v)})},x({default:t(()=>[e.defaultSlot?(b(),h("span",{key:0,innerHTML:e.defaultSlot},null,8,ne)):(b(),h("span",te,[g(" Message body with "),B("a",{href:"#",class:I(["d-link",f.linkClass])},"a link",2),g(". ")]))]),_:2},[e.$attrs.action?{name:"action",fn:t(()=>[m(D,{kind:f.buttonKind,importance:"outlined",onClick:e.$attrs.onClick},{default:t(()=>[g(ee(e.$attrs.action),1)]),_:1},8,["kind","onClick"])]),key:"0"}:void 0,e.$attrs.icon?{name:"icon",fn:t(()=>[m(Q,{name:e.$attrs.icon},null,8,["name"])]),key:"1"}:void 0,e.$attrs.titleOverride?{name:"titleOverride",fn:t(()=>[B("span",{innerHTML:e.$attrs.titleOverride},null,8,se)]),key:"2"}:void 0]),1032,["kind","title","title-id","content-id","important","pinned","hide-close","close-button-props","class","hide-icon","background-image","background-size","dialog-class","visually-hidden-close","visually-hidden-close-label"]),[[$,p.displayBanner]])])}const ie=re(J,[["render",oe],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner_default.story.vue"]]);J.__docgenInfo={displayName:"BannerDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner_default.story.vue"]};const de=""+new URL("dialpad-gradient-fc68f20e.png",import.meta.url).href;c.role={table:{disable:!0}};c.titleId={table:{defaultValue:{summary:"generated unique ID"}}};c.contentId={table:{defaultValue:{summary:"generated unique ID"}}};y.visuallyHiddenCloseLabel="Close Banner";const le={title:"Components/Banner",component:G,args:y,argTypes:c,excludeStories:/.Data$/},a=(e,{argTypes:n})=>ae(e,n,ie),r={render:a,args:{title:"Optional title",action:"Action",kind:"base"},parameters:{percy:{args:{show:!0}}}},s={render:a,args:{...r.args,kind:"error"},parameters:r.parameters},o={render:a,args:{...r.args,kind:"info"},parameters:r.parameters},i={render:a,args:{...r.args,kind:"success"},parameters:r.parameters},d={render:a,args:{...r.args,kind:"warning"},parameters:r.parameters},l={render:a,args:{...r.args,pinned:!0},parameters:r.parameters},u={render:a,args:{...r.args,backgroundImage:de,backgroundSize:"contain",title:"",action:"",hideIcon:!0,dialogClass:"d-fc-neutral-white",default:"The power of Dialpad. On your desktop"},parameters:r.parameters};var S,T,w;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: 'Optional title',
    action: 'Action',
    kind: 'base'
  },
  parameters: {
    percy: {
      args: {
        show: true
      }
    }
  }
}`,...(w=(T=r.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var _,O,L;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'error'
  },
  parameters: Default.parameters
}`,...(L=(O=s.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var z,H,P;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'info'
  },
  parameters: Default.parameters
}`,...(P=(H=o.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var M,V,E;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'success'
  },
  parameters: Default.parameters
}`,...(E=(V=i.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var N,F,K;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'warning'
  },
  parameters: Default.parameters
}`,...(K=(F=d.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var W,j,q;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    pinned: true
  },
  parameters: Default.parameters
}`,...(q=(j=l.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var A,R,U;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    backgroundImage,
    backgroundSize: 'contain',
    title: '',
    action: '',
    hideIcon: true,
    dialogClass: 'd-fc-neutral-white',
    default: 'The power of Dialpad. On your desktop'
  },
  parameters: Default.parameters
}`,...(U=(R=u.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};const ue=["argsData","argTypesData","Default","Error","Info","Success","Warning","Pinned","CustomBackground"],De=Object.freeze(Object.defineProperty({__proto__:null,CustomBackground:u,Default:r,Error:s,Info:o,Pinned:l,Success:i,Warning:d,__namedExportsOrder:ue,argTypesData:c,argsData:y,default:le},Symbol.toStringTag,{value:"Module"}));export{De as B,r as D,s as E,o as I,l as P,i as S,d as W};
//# sourceMappingURL=banner.stories-5801f32e.js.map
