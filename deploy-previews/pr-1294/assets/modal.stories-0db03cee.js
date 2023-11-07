import{D as W,M as B,a as N}from"./modal-dde7313e.js";import{D as P}from"./button-8aff4255.js";import{n as E}from"./_plugin-vue2_normalizer-2bbd088e.js";import{c as V}from"./storybook_utils-996a989f.js";import{a as K}from"./chunk-AY7I2SME-5eb1ab46.js";import{N as q}from"./notice-2c2407f6.js";const j={name:"DtModalDefault",components:{DtModal:W,DtButton:P},props:{showFooter:{type:Boolean,default:!1}},data(){return{isOpen:this.$attrs.show}},computed:{buttonCloseProps(){return{...this.$attrs.closeButtonProps,ariaLabel:"Close"}},secondaryButtonKind(){return this.$attrs.kind==="danger"?"muted":"default"}},watch:{show:{handler(){this.isOpen=this.$attrs.show}}},methods:{updateShow(s){this.isOpen=s,this.$attrs.toggleOpen(s)}}};var L=function(){var e=this,t=e._self._c;return t("div",[t("dt-modal",{attrs:{title:e.$attrs.title,"banner-title":e.$attrs.bannerTitle,"close-button-props":e.buttonCloseProps,show:e.isOpen,kind:e.$attrs.kind,size:e.$attrs.size,copy:e.$attrs.copy,"modal-class":e.$attrs.modalClass,"banner-class":e.$attrs.bannerClass,"banner-kind":e.$attrs.bannerKind,"dialog-class":e.$attrs.dialogClass,"content-class":e.$attrs.contentClass,"hide-close":e.$attrs.hideClose,"labelled-by-id":e.$attrs.labelledById,"fixed-header-footer":e.$attrs.fixedHeaderFooter,"visually-hidden-close":e.$attrs.visuallyHiddenClose,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel,"close-on-click":e.$attrs.closeOnClick,"initial-focus-element":e.$attrs.initialFocusElement},on:{"update:show":e.updateShow}},[e.$attrs.banner?t("template",{slot:"banner"},[t("span",{domProps:{innerHTML:e._s(e.$attrs.banner)}})]):e._e(),e.$attrs.header?t("template",{slot:"header"},[t("span",{domProps:{innerHTML:e._s(e.$attrs.header)}})]):e._e(),e.$attrs.default?t("template",{slot:"default"},[t("span",{domProps:{innerHTML:e._s(e.$attrs.default)}})]):e._e(),e.showFooter?t("template",{slot:"footer"},[e.$attrs.footer?t("span",{domProps:{innerHTML:e._s(e.$attrs.footer)}}):t("div",[t("dt-button",{attrs:{id:"cancel-button",kind:e.secondaryButtonKind,importance:"clear"}},[e._v(" Cancel ")]),t("dt-button",{staticClass:"d-ml6",attrs:{id:"confirm-button",kind:e.$attrs.kind,importance:"primary"}},[e._v(" Confirm ")])],1)]):e._e()],2),t("dt-button",{on:{click:function(J){e.isOpen=!e.isOpen}}},[e._v(" Click to open ")])],1)},A=[];L._withStripped=!0;var p=E(j,L,A,!1,null,null,null,null);p.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/modal/modal_default.story.vue";const R=p.exports;p.exports.__docgenInfo={displayName:"DtModalDefault",exportName:"default",description:"",tags:{},props:[{name:"showFooter",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/modal/modal_default.story.vue"]};const m={size:"default",kind:"default",bannerKind:"warning",closeButtonProps:{ariaLabel:"Close"},copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget lacus quis velit viverra iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum maximus ipsum ex. Curabitur elementum luctus augue, quis eleifend tortor feugiat vel. Maecenas maximus, ipsum et laoreet congue, diam massa aliquam libero, at pellentesque orci ipsum et velit.",title:"Example Title",toggleOpen:K("update:show"),visuallyHiddenCloseLabel:"Close Modal"},z={default:{control:"text",table:{type:{summary:"VNode"}}},banner:{control:"text",table:{type:{summary:"VNode"}}},footer:{control:"text",table:{type:{summary:"VNode"}}},header:{control:"text",table:{type:{summary:"VNode"}}},size:{options:Object.keys(B),control:{type:"select"}},kind:{options:Object.keys(N),control:{type:"select"}},bannerKind:{options:q,control:{type:"select"}},showFooter:{table:{disable:!0}},labelledById:{table:{defaultValue:{summary:"generated unique ID"}}},"update:show":{description:'The modal will emit a "false" boolean value when the user performs a modal-closing action      and a "true" boolean value after the modal is fully-shown.     Parent components can sync on this value to create a 2-way binding to control modal visibility.',table:{type:{summary:"boolean"}}},toggleOpen:{table:{disable:!0}}},Z={title:"Components/Modal",component:W,args:m,argTypes:z,excludeStories:/.*Data$/},r=(s,{argTypes:e})=>V(s,e,R),a={render:r,args:{},parameters:{percy:{args:{show:!0}}}},o={render:r,args:{showFooter:!0},parameters:{...a.parameters}},n={render:r,args:{showFooter:!0,fixedHeaderFooter:!0,copy:m.copy.repeat(4)},parameters:{...a.parameters}},l={render:r,args:{bannerTitle:"Example banner"},parameters:{...a.parameters}},d={render:r,args:{kind:"danger",showFooter:!0},parameters:{...a.parameters}},i={render:r,args:{size:"full",showFooter:!0},parameters:{...a.parameters}},u={render:r,args:{header:`
      <div class="d-fl-center d-p12 d-bgc-purple-100">
        <div>[custom header]</div>
      </div>`,default:`
      <div class="d-fl-center d-p32 d-bgc-gold-200">
        <h2>[custom body]</h2>
      </div>`},parameters:{...a.parameters}};var c,f,h;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {},
  parameters: {
    percy: {
      args: {
        show: true
      }
    }
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,g,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showFooter: true
  },
  parameters: {
    ...Default.parameters
  }
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var v,_,D;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showFooter: true,
    fixedHeaderFooter: true,
    copy: argsData.copy.repeat(4)
  },
  parameters: {
    ...Default.parameters
  }
}`,...(D=(_=n.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var $,w,F;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    bannerTitle: 'Example banner'
  },
  parameters: {
    ...Default.parameters
  }
}`,...(F=(w=l.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var C,T,S;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    kind: 'danger',
    showFooter: true
  },
  parameters: {
    ...Default.parameters
  }
}`,...(S=(T=d.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var x,O,k;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    size: 'full',
    showFooter: true
  },
  parameters: {
    ...Default.parameters
  }
}`,...(k=(O=i.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var M,H,I;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    header: \`
      <div class="d-fl-center d-p12 d-bgc-purple-100">
        <div>[custom header]</div>
      </div>\`,
    default: \`
      <div class="d-fl-center d-p32 d-bgc-gold-200">
        <h2>[custom body]</h2>
      </div>\`
  },
  parameters: {
    ...Default.parameters
  }
}`,...(I=(H=u.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};const G=["argsData","argTypesData","Default","WithFooter","WithFixedHeaderFooter","WithBanner","WithDangerStyle","WithFullSize","WithCustomHeaderAndContent"],ae=Object.freeze(Object.defineProperty({__proto__:null,Default:a,WithBanner:l,WithCustomHeaderAndContent:u,WithDangerStyle:d,WithFixedHeaderFooter:n,WithFooter:o,WithFullSize:i,__namedExportsOrder:G,argTypesData:z,argsData:m,default:Z},Symbol.toStringTag,{value:"Module"}));export{ae as M,o as W,n as a,l as b,d as c,i as d,u as e};
//# sourceMappingURL=modal.stories-0db03cee.js.map
