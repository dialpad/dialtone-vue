import{D as F}from"./banner-5ca7107f.js";import{D as N}from"./button-6471bfba.js";import{D as V}from"./icon-8e6c79ec.js";import{n as K}from"./_plugin-vue2_normalizer-2bbd088e.js";import{h as W}from"./storybook_utils-1aebbd64.js";import{b as u,c}from"./notice.stories-332a97dd.js";const j={name:"BannerDefault",components:{DtBanner:F,DtButton:N,DtIcon:V},props:{show:{type:Boolean,default:!1}},data(){return{displayBanner:this.show}},computed:{shouldInvertButton(){return this.kind==="base"||this.kind==="error"||this.kind==="info"},isInverted(){return this.important&&this.shouldInvertButton},buttonKind(){return this.isInverted?"inverted":"muted"},linkClass(){return this.isInverted?"d-link--inverted":"d-link--muted"},buttonCloseProps(){return{...this.closeButtonProps,kind:this.buttonKind,ariaLabel:"Close"}}}};var M=function(){var e=this,a=e._self._c;return a("div",[a("dt-button",{directives:[{name:"show",rawName:"v-show",value:!e.displayBanner,expression:"!displayBanner"}],on:{click:function(g){e.displayBanner=!0}}},[e._v(" Click to show! ")]),a("dt-banner",{directives:[{name:"show",rawName:"v-show",value:e.displayBanner,expression:"displayBanner"}],class:{"d-ps-sticky":e.show},attrs:{kind:e.kind,title:e.title,"title-id":e.titleId,"content-id":e.contentId,important:e.important,pinned:e.pinned,"hide-close":e.hideClose,"close-button-props":e.buttonCloseProps,"hide-icon":e.hideIcon,"background-image":e.backgroundImage,"background-size":e.backgroundSize,"dialog-class":e.dialogClass,"visually-hidden-close":e.visuallyHiddenClose,"visually-hidden-close-label":e.visuallyHiddenCloseLabel},on:{close:function(g){e.displayBanner=!1,e.onClose(g)}}},[e.defaultSlot?a("span",{domProps:{innerHTML:e._s(e.defaultSlot)}}):a("span",[e._v(" Message body with "),a("a",{staticClass:"d-link",class:e.linkClass,attrs:{href:"#"}},[e._v("a link")]),e._v(". ")]),e.action?a("template",{slot:"action"},[a("dt-button",{attrs:{kind:e.buttonKind,importance:"outlined"},on:{click:e.onClick}},[e._v(" "+e._s(e.action)+" ")])],1):e._e(),e.icon?a("template",{slot:"icon"},[a("dt-icon",{attrs:{name:e.icon}})],1):e._e(),e.titleOverride?a("template",{slot:"titleOverride"},[a("span",{domProps:{innerHTML:e._s(e.titleOverride)}})]):e._e()],2)],1)},q=[];M._withStripped=!0;var p=K(j,M,q,!1,null,null,null,null);p.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner_default.story.vue";const A=p.exports;p.exports.__docgenInfo={displayName:"BannerDefault",exportName:"default",description:"",tags:{},props:[{name:"show",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/banner/banner_default.story.vue"]};const R=""+new URL("dialpad-gradient-fc68f20e.png",import.meta.url).href;c.role={table:{disable:!0}};c.titleId={table:{defaultValue:{summary:"generated unique ID"}}};c.contentId={table:{defaultValue:{summary:"generated unique ID"}}};u.visuallyHiddenCloseLabel="Close Banner";const $={title:"Components/Banner",component:F,args:u,argTypes:c,excludeStories:/.Data$/},n=(m,{argTypes:e})=>W(m,e,A),r={render:n,args:{title:"Optional title",action:"Action",kind:"base"},parameters:{percy:{args:{show:!0}}}},t={render:n,args:{...r.args,kind:"error"},parameters:r.parameters},s={render:n,args:{...r.args,kind:"info"},parameters:r.parameters},o={render:n,args:{...r.args,kind:"success"},parameters:r.parameters},i={render:n,args:{...r.args,kind:"warning"},parameters:r.parameters},l={render:n,args:{...r.args,pinned:!0},parameters:r.parameters},d={render:n,args:{...r.args,backgroundImage:R,backgroundSize:"contain",title:"",action:"",hideIcon:!0,dialogClass:"d-fc-neutral-white",default:"The power of Dialpad. On your desktop"},parameters:r.parameters};var f,h,k;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(k=(h=r.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var v,b,_;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'error'
  },
  parameters: Default.parameters
}`,...(_=(b=t.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var D,y,w;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'info'
  },
  parameters: Default.parameters
}`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var B,I,C;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'success'
  },
  parameters: Default.parameters
}`,...(C=(I=o.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var S,T,O;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    kind: 'warning'
  },
  parameters: Default.parameters
}`,...(O=(T=i.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var P,x,z;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    pinned: true
  },
  parameters: Default.parameters
}`,...(z=(x=l.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var L,H,E;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(H=d.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};const U=["argsData","argTypesData","Default","Error","Info","Success","Warning","Pinned","CustomBackground"],ee=Object.freeze(Object.defineProperty({__proto__:null,CustomBackground:d,Default:r,Error:t,Info:s,Pinned:l,Success:o,Warning:i,__namedExportsOrder:U,argTypesData:c,argsData:u,default:$},Symbol.toStringTag,{value:"Module"}));export{ee as B,r as D,t as E,s as I,l as P,o as S,i as W};
//# sourceMappingURL=banner.stories-30533a13.js.map
