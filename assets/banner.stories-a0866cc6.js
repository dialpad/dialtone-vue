import{D as H}from"./banner-0fa4e8bb.js";import{D as F}from"./button-d2753bc0.js";import{D as M}from"./icon-666860e3.js";import{n as N}from"./_plugin-vue2_normalizer-2bbd088e.js";import{c as V}from"./storybook_utils-cf049d2e.js";import{b as p,c}from"./notice.stories-68e73709.js";const K={name:"BannerDefault",components:{DtBanner:H,DtButton:F,DtIcon:M},props:{show:{type:Boolean,default:!1}},data(){return{displayBanner:this.show}},computed:{shouldInvertButton(){return this.$attrs.kind==="base"||this.$attrs.kind==="error"||this.$attrs.kind==="info"},isInverted(){return this.$attrs.important&&this.shouldInvertButton},buttonKind(){return this.isInverted?"inverted":"muted"},linkClass(){return this.isInverted?"d-link--inverted":"d-link--muted"},buttonCloseProps(){return{...this.$attrs.closeButtonProps,kind:this.$attrs.buttonKind,ariaLabel:"Close"}}}};var W=function(){var e=this,r=e._self._c;return r("div",[r("dt-button",{directives:[{name:"show",rawName:"v-show",value:!e.displayBanner,expression:"!displayBanner"}],on:{click:function(m){e.displayBanner=!0}}},[e._v(" Click to show! ")]),r("dt-banner",{directives:[{name:"show",rawName:"v-show",value:e.displayBanner,expression:"displayBanner"}],class:{"d-ps-sticky":e.show},attrs:{kind:e.$attrs.kind,title:e.$attrs.title,"title-id":e.$attrs.titleId,"content-id":e.$attrs.contentId,important:e.$attrs.important,pinned:e.$attrs.pinned,"hide-close":e.$attrs.hideClose,"close-button-props":e.buttonCloseProps,"hide-icon":e.$attrs.hideIcon,"background-image":e.$attrs.backgroundImage,"background-size":e.$attrs.backgroundSize,"dialog-class":e.$attrs.dialogClass,"visually-hidden-close":e.$attrs.visuallyHiddenClose,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel},on:{close:function(m){e.displayBanner=!1,e.$attrs.onClose(m)}}},[e.$attrs.default?r("span",{domProps:{innerHTML:e._s(e.$attrs.default)}}):r("span",[e._v(" Message body with "),r("a",{staticClass:"d-link",class:e.linkClass,attrs:{href:"#"}},[e._v("a link")]),e._v(". ")]),e.$attrs.action?r("template",{slot:"action"},[r("dt-button",{attrs:{kind:e.buttonKind,importance:"outlined"},on:{click:e.$attrs.onClick}},[e._v(" "+e._s(e.$attrs.action)+" ")])],1):e._e(),e.$attrs.icon?r("template",{slot:"icon"},[r("dt-icon",{attrs:{name:e.$attrs.icon}})],1):e._e(),e.$attrs.titleOverride?r("template",{slot:"titleOverride"},[r("span",{domProps:{innerHTML:e._s(e.$attrs.titleOverride)}})]):e._e()],2)],1)},j=[],E=N(K,W,j,!1,null,null,null,null);const q=E.exports;E.exports.__docgenInfo={displayName:"BannerDefault",exportName:"default",description:"",tags:{},props:[{name:"show",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner_default.story.vue"]};const A=""+new URL("dialpad-gradient-fc68f20e.png",import.meta.url).href;c.role={table:{disable:!0}};c.titleId={table:{defaultValue:{summary:"generated unique ID"}}};c.contentId={table:{defaultValue:{summary:"generated unique ID"}}};p.visuallyHiddenCloseLabel="Close Banner";const R={title:"Components/Banner",component:H,args:p,argTypes:c,excludeStories:/.Data$/},t=(u,{argTypes:e})=>V(u,e,q),a={render:t,args:{title:"Optional title",action:"Action",kind:"base"},parameters:{percy:{args:{show:!0}}}},n={render:t,args:{...a.args,kind:"error"},parameters:a.parameters},s={render:t,args:{...a.args,kind:"info"},parameters:a.parameters},o={render:t,args:{...a.args,kind:"success"},parameters:a.parameters},i={render:t,args:{...a.args,kind:"warning"},parameters:a.parameters},l={render:t,args:{...a.args,pinned:!0},parameters:a.parameters},d={render:t,args:{...a.args,backgroundImage:A,backgroundSize:"contain",title:"",action:"",hideIcon:!0,dialogClass:"d-fc-neutral-white",default:"The power of Dialpad. On your desktop"},parameters:a.parameters};var g,f,k;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(k=(f=a.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var h,v,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'error'
  },
  parameters: Default.parameters
}`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var _,D,$;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'info'
  },
  parameters: Default.parameters
}`,...($=(D=s.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var y,w,B;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'success'
  },
  parameters: Default.parameters
}`,...(B=(w=o.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var I,C,S;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'warning'
  },
  parameters: Default.parameters
}`,...(S=(C=i.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var T,O,P;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    pinned: true
  },
  parameters: Default.parameters
}`,...(P=(O=l.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var x,z,L;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(L=(z=d.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};const U=["argsData","argTypesData","Default","Error","Info","Success","Warning","Pinned","CustomBackground"],ee=Object.freeze(Object.defineProperty({__proto__:null,CustomBackground:d,Default:a,Error:n,Info:s,Pinned:l,Success:o,Warning:i,__namedExportsOrder:U,argTypesData:c,argsData:p,default:R},Symbol.toStringTag,{value:"Module"}));export{ee as B,a as D,n as E,s as I,l as P,o as S,i as W};
//# sourceMappingURL=banner.stories-a0866cc6.js.map
