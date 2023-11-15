import{D as E}from"./banner-e31e3737.js";import{D as M}from"./button-61a95420.js";import{D as N}from"./icon-9e10092c.js";import{n as V}from"./_plugin-vue2_normalizer-2bbd088e.js";import{c as K}from"./storybook_utils-cf049d2e.js";import{b as u,c}from"./notice.stories-9930ece1.js";const W={name:"BannerDefault",components:{DtBanner:E,DtButton:M,DtIcon:N},props:{show:{type:Boolean,default:!1}},data(){return{displayBanner:this.show}},computed:{shouldInvertButton(){return this.$attrs.kind==="base"||this.$attrs.kind==="error"||this.$attrs.kind==="info"},isInverted(){return this.$attrs.important&&this.shouldInvertButton},buttonKind(){return this.isInverted?"inverted":"muted"},linkClass(){return this.isInverted?"d-link--inverted":"d-link--muted"},buttonCloseProps(){return{...this.$attrs.closeButtonProps,kind:this.$attrs.buttonKind,ariaLabel:"Close"}}}};var F=function(){var e=this,a=e._self._c;return a("div",[a("dt-button",{directives:[{name:"show",rawName:"v-show",value:!e.displayBanner,expression:"!displayBanner"}],on:{click:function(g){e.displayBanner=!0}}},[e._v(" Click to show! ")]),a("dt-banner",{directives:[{name:"show",rawName:"v-show",value:e.displayBanner,expression:"displayBanner"}],class:{"d-ps-sticky":e.show},attrs:{kind:e.$attrs.kind,title:e.$attrs.title,"title-id":e.$attrs.titleId,"content-id":e.$attrs.contentId,important:e.$attrs.important,pinned:e.$attrs.pinned,"hide-close":e.$attrs.hideClose,"close-button-props":e.buttonCloseProps,"hide-icon":e.$attrs.hideIcon,"background-image":e.$attrs.backgroundImage,"background-size":e.$attrs.backgroundSize,"dialog-class":e.$attrs.dialogClass,"visually-hidden-close":e.$attrs.visuallyHiddenClose,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel},on:{close:function(g){e.displayBanner=!1,e.$attrs.onClose(g)}}},[e.$attrs.default?a("span",{domProps:{innerHTML:e._s(e.$attrs.default)}}):a("span",[e._v(" Message body with "),a("a",{staticClass:"d-link",class:e.linkClass,attrs:{href:"#"}},[e._v("a link")]),e._v(". ")]),e.$attrs.action?a("template",{slot:"action"},[a("dt-button",{attrs:{kind:e.buttonKind,importance:"outlined"},on:{click:e.$attrs.onClick}},[e._v(" "+e._s(e.$attrs.action)+" ")])],1):e._e(),e.$attrs.icon?a("template",{slot:"icon"},[a("dt-icon",{attrs:{name:e.$attrs.icon}})],1):e._e(),e.$attrs.titleOverride?a("template",{slot:"titleOverride"},[a("span",{domProps:{innerHTML:e._s(e.$attrs.titleOverride)}})]):e._e()],2)],1)},j=[];F._withStripped=!0;var p=V(W,F,j,!1,null,null,null,null);p.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner_default.story.vue";const q=p.exports;p.exports.__docgenInfo={displayName:"BannerDefault",exportName:"default",description:"",tags:{},props:[{name:"show",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner_default.story.vue"]};const A=""+new URL("dialpad-gradient-fc68f20e.png",import.meta.url).href;c.role={table:{disable:!0}};c.titleId={table:{defaultValue:{summary:"generated unique ID"}}};c.contentId={table:{defaultValue:{summary:"generated unique ID"}}};u.visuallyHiddenCloseLabel="Close Banner";const R={title:"Components/Banner",component:E,args:u,argTypes:c,excludeStories:/.Data$/},t=(m,{argTypes:e})=>K(m,e,q),r={render:t,args:{title:"Optional title",action:"Action",kind:"base"},parameters:{percy:{args:{show:!0}}}},n={render:t,args:{...r.args,kind:"error"},parameters:r.parameters},s={render:t,args:{...r.args,kind:"info"},parameters:r.parameters},o={render:t,args:{...r.args,kind:"success"},parameters:r.parameters},i={render:t,args:{...r.args,kind:"warning"},parameters:r.parameters},l={render:t,args:{...r.args,pinned:!0},parameters:r.parameters},d={render:t,args:{...r.args,backgroundImage:A,backgroundSize:"contain",title:"",action:"",hideIcon:!0,dialogClass:"d-fc-neutral-white",default:"The power of Dialpad. On your desktop"},parameters:r.parameters};var f,h,k;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(k=(h=r.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var v,b,_;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'error'
  },
  parameters: Default.parameters
}`,...(_=(b=n.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var D,$,y;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'info'
  },
  parameters: Default.parameters
}`,...(y=($=s.parameters)==null?void 0:$.docs)==null?void 0:y.source}}};var w,B,I;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(H=(L=d.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};const U=["argsData","argTypesData","Default","Error","Info","Success","Warning","Pinned","CustomBackground"],ee=Object.freeze(Object.defineProperty({__proto__:null,CustomBackground:d,Default:r,Error:n,Info:s,Pinned:l,Success:o,Warning:i,__namedExportsOrder:U,argTypesData:c,argsData:u,default:R},Symbol.toStringTag,{value:"Module"}));export{ee as B,r as D,n as E,s as I,l as P,o as S,i as W};
//# sourceMappingURL=banner.stories-b2c730a8.js.map
