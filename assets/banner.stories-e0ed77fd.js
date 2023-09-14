import{D as E}from"./banner-47cb2bd3.js";import{D as M}from"./button-82727ed7.js";import{D as N}from"./icon-23d7fa2f.js";import{n as V}from"./_plugin-vue2_normalizer-2bbd088e.js";import{c as K}from"./storybook_utils-e1aad9b5.js";import{a as p,b as c}from"./notice.stories-753c0132.js";const W={name:"BannerDefault",components:{DtBanner:E,DtButton:M,DtIcon:N},props:{show:{type:Boolean,default:!1}},data(){return{displayBanner:this.show}},computed:{shouldInvertButton(){return this.kind==="base"||this.kind==="error"||this.kind==="info"},isInverted(){return this.important&&this.shouldInvertButton},buttonKind(){return this.isInverted?"inverted":"muted"},linkClass(){return this.isInverted?"d-link--inverted":"d-link--muted"},buttonCloseProps(){return{...this.closeButtonProps,kind:this.buttonKind,ariaLabel:"Close"}}}};var j=function(){var e=this,r=e._self._c;return r("div",[r("dt-button",{directives:[{name:"show",rawName:"v-show",value:!e.displayBanner,expression:"!displayBanner"}],on:{click:function(m){e.displayBanner=!0}}},[e._v(" Click to show! ")]),r("dt-banner",{directives:[{name:"show",rawName:"v-show",value:e.displayBanner,expression:"displayBanner"}],class:{"d-ps-sticky":e.show},attrs:{kind:e.kind,title:e.title,"title-id":e.titleId,"content-id":e.contentId,important:e.important,pinned:e.pinned,"hide-close":e.hideClose,"close-button-props":e.buttonCloseProps,"hide-icon":e.hideIcon,"background-image":e.backgroundImage,"background-size":e.backgroundSize,"dialog-class":e.dialogClass,"visually-hidden-close":e.visuallyHiddenClose,"visually-hidden-close-label":e.visuallyHiddenCloseLabel},on:{close:function(m){e.displayBanner=!1,e.onClose(m)}}},[e.defaultSlot?r("span",{domProps:{innerHTML:e._s(e.defaultSlot)}}):r("span",[e._v(" Message body with "),r("a",{staticClass:"d-link",class:e.linkClass,attrs:{href:"#"}},[e._v("a link")]),e._v(". ")]),e.action?r("template",{slot:"action"},[r("dt-button",{attrs:{kind:e.buttonKind,importance:"outlined"},on:{click:e.onClick}},[e._v(" "+e._s(e.action)+" ")])],1):e._e(),e.icon?r("template",{slot:"icon"},[r("dt-icon",{attrs:{name:e.icon}})],1):e._e(),e.titleOverride?r("template",{slot:"titleOverride"},[r("span",{domProps:{innerHTML:e._s(e.titleOverride)}})]):e._e()],2)],1)},q=[],F=V(W,j,q,!1,null,null,null,null);const A=F.exports;F.exports.__docgenInfo={displayName:"BannerDefault",exportName:"default",description:"",tags:{},props:[{name:"show",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner_default.story.vue"]};const R=""+new URL("dialpad-gradient-fc68f20e.png",import.meta.url).href;c.role={table:{disable:!0}};c.titleId={table:{defaultValue:{summary:"generated unique ID"}}};c.contentId={table:{defaultValue:{summary:"generated unique ID"}}};p.visuallyHiddenCloseLabel="Close Banner";const $={title:"Components/Banner",component:E,args:p,argTypes:c,excludeStories:/.Data$/},n=(u,{argTypes:e})=>K(u,e,A),a={render:n,args:{title:"Optional title",action:"Action",kind:"base"},parameters:{percy:{args:{show:!0}}}},t={render:n,args:{...a.args,kind:"error"},parameters:a.parameters},s={render:n,args:{...a.args,kind:"info"},parameters:a.parameters},o={render:n,args:{...a.args,kind:"success"},parameters:a.parameters},i={render:n,args:{...a.args,kind:"warning"},parameters:a.parameters},l={render:n,args:{...a.args,pinned:!0},parameters:a.parameters},d={render:n,args:{...a.args,backgroundImage:R,backgroundSize:"contain",title:"",action:"",hideIcon:!0,dialogClass:"d-fc-neutral-white",default:"The power of Dialpad. On your desktop"},parameters:a.parameters};var g,f,k;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(k=(f=a.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var h,v,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'error'
  },
  parameters: Default.parameters
}`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var _,D,y;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'info'
  },
  parameters: Default.parameters
}`,...(y=(D=s.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var w,B,I;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'success'
  },
  parameters: Default.parameters
}`,...(I=(B=o.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var C,S,T;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'warning'
  },
  parameters: Default.parameters
}`,...(T=(S=i.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var O,P,x;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    pinned: true
  },
  parameters: Default.parameters
}`,...(x=(P=l.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var z,L,H;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(H=(L=d.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};const U=["argsData","argTypesData","Default","Error","Info","Success","Warning","Pinned","CustomBackground"],ee=Object.freeze(Object.defineProperty({__proto__:null,CustomBackground:d,Default:a,Error:t,Info:s,Pinned:l,Success:o,Warning:i,__namedExportsOrder:U,argTypesData:c,argsData:p,default:$},Symbol.toStringTag,{value:"Module"}));export{ee as B,a as D,t as E,s as I,l as P,o as S,i as W};
//# sourceMappingURL=banner.stories-e0ed77fd.js.map
