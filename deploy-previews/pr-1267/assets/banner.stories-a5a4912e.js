import{D as G}from"./banner-266055d5.js";import{D as Y}from"./button-4525c5ab.js";import{D as Z}from"./icon-0e5360a4.js";import{u as k,o as b,p as h,d as $,v as C,y as m,w as n,z as g,E as x,A as ee,e as B,k as I}from"./vue.esm-bundler-5f4c5b12.js";import{_ as re}from"./_plugin-vue_export-helper-c27b6911.js";import{c as ae}from"./storybook_utils-7f880537.js";import{b as y,c as u}from"./notice.stories-0c163eb1.js";const J={name:"BannerDefault",components:{DtBanner:G,DtButton:Y,DtIcon:Z},data(){return{displayBanner:this.$attrs.show}},computed:{shouldInvertButton(){return this.$attrs.kind==="base"||this.$attrs.kind==="error"||this.$attrs.kind==="info"},isInverted(){return this.$attrs.important&&this.shouldInvertButton},buttonKind(){return this.isInverted?"inverted":"muted"},linkClass(){return this.isInverted?"d-link--inverted":"d-link--muted"},buttonCloseProps(){return{...this.$attrs.closeButtonProps,kind:this.buttonKind,ariaLabel:"Close"}}}},ne=["innerHTML"],te={key:1},se=["innerHTML"];function oe(e,c,ce,pe,p,f){const D=k("dt-button"),Q=k("dt-icon"),X=k("dt-banner");return b(),h("div",null,[$(m(D,{onClick:c[0]||(c[0]=v=>p.displayBanner=!0)},{default:n(()=>[g(" Click to show! ")]),_:1},512),[[C,!p.displayBanner]]),$(m(X,{kind:e.$attrs.kind,title:e.$attrs.title,"title-id":e.$attrs.titleId,"content-id":e.$attrs.contentId,important:e.$attrs.important,pinned:e.$attrs.pinned,"hide-close":e.$attrs.hideClose,"close-button-props":f.buttonCloseProps,class:I({"d-ps-sticky":e.$attrs.show}),"hide-icon":e.$attrs.hideIcon,"background-image":e.$attrs.backgroundImage,"background-size":e.$attrs.backgroundSize,"dialog-class":e.$attrs.dialogClass,"visually-hidden-close":e.$attrs.visuallyHiddenClose,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel,onClose:c[1]||(c[1]=v=>{p.displayBanner=!1,e.$attrs.onClose(v)})},x({default:n(()=>[e.defaultSlot?(b(),h("span",{key:0,innerHTML:e.defaultSlot},null,8,ne)):(b(),h("span",te,[g(" Message body with "),B("a",{href:"#",class:I(["d-link",f.linkClass])},"a link",2),g(". ")]))]),_:2},[e.$attrs.action?{name:"action",fn:n(()=>[m(D,{kind:f.buttonKind,importance:"outlined",onClick:e.$attrs.onClick},{default:n(()=>[g(ee(e.$attrs.action),1)]),_:1},8,["kind","onClick"])]),key:"0"}:void 0,e.$attrs.icon?{name:"icon",fn:n(()=>[m(Q,{name:e.$attrs.icon},null,8,["name"])]),key:"1"}:void 0,e.$attrs.titleOverride?{name:"titleOverride",fn:n(()=>[B("span",{innerHTML:e.$attrs.titleOverride},null,8,se)]),key:"2"}:void 0]),1032,["kind","title","title-id","content-id","important","pinned","hide-close","close-button-props","class","hide-icon","background-image","background-size","dialog-class","visually-hidden-close","visually-hidden-close-label"]),[[C,p.displayBanner]])])}const ie=re(J,[["render",oe],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner_default.story.vue"]]);J.__docgenInfo={displayName:"BannerDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner_default.story.vue"]};const de=""+new URL("dialpad-gradient-fc68f20e.png",import.meta.url).href;u.role={table:{disable:!0}};u.titleId={table:{defaultValue:{summary:"generated unique ID"}}};u.contentId={table:{defaultValue:{summary:"generated unique ID"}}};y.visuallyHiddenCloseLabel="Close Banner";const le={title:"Components/Banner",component:G,args:y,argTypes:u,excludeStories:/.Data$/},a=e=>ae(e,ie),r={render:a,args:{title:"Optional title",action:"Action",kind:"base"},parameters:{percy:{args:{show:!0}}}},t={render:a,args:{...r.args,kind:"error"},parameters:r.parameters},s={render:a,args:{...r.args,kind:"info"},parameters:r.parameters},o={render:a,args:{...r.args,kind:"success"},parameters:r.parameters},i={render:a,args:{...r.args,kind:"warning"},parameters:r.parameters},d={render:a,args:{...r.args,pinned:!0},parameters:r.parameters},l={render:a,args:{...r.args,backgroundImage:de,backgroundSize:"contain",title:"",action:"",hideIcon:!0,dialogClass:"d-fc-neutral-white",default:"The power of Dialpad. On your desktop"},parameters:r.parameters};var S,T,w;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(w=(T=r.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var _,O,z;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'error'
  },
  parameters: Default.parameters
}`,...(z=(O=t.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var L,H,P;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'info'
  },
  parameters: Default.parameters
}`,...(P=(H=s.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var E,M,V;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'success'
  },
  parameters: Default.parameters
}`,...(V=(M=o.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var N,A,F;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'warning'
  },
  parameters: Default.parameters
}`,...(F=(A=i.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var K,W,j;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    pinned: true
  },
  parameters: Default.parameters
}`,...(j=(W=d.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var q,R,U;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(U=(R=l.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};const ue=["argsData","argTypesData","Default","Error","Info","Success","Warning","Pinned","CustomBackground"],De=Object.freeze(Object.defineProperty({__proto__:null,CustomBackground:l,Default:r,Error:t,Info:s,Pinned:d,Success:o,Warning:i,__namedExportsOrder:ue,argTypesData:u,argsData:y,default:le},Symbol.toStringTag,{value:"Module"}));export{De as B,r as D,t as E,s as I,d as P,o as S,i as W};
//# sourceMappingURL=banner.stories-a5a4912e.js.map
