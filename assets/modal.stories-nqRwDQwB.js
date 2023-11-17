import{D as I,M as z,a as B}from"./modal-kR_PvcrP.js";import{D as N}from"./button-5wqdSkdq.js";import{n as P}from"./_plugin-vue2_normalizer-XBmYDgEh.js";import{c as E}from"./storybook_utils-XrTpeJKJ.js";import{a as V}from"./chunk-AY7I2SME-4UylTnhF.js";import{N as K}from"./notice-AnJ5Yse1.js";const q={name:"DtModalDefault",components:{DtModal:I,DtButton:N},props:{showFooter:{type:Boolean,default:!1}},data(){return{isOpen:this.$attrs.show}},computed:{buttonCloseProps(){return{...this.$attrs.closeButtonProps,ariaLabel:"Close"}},secondaryButtonKind(){return this.$attrs.kind==="danger"?"muted":"default"}},watch:{show:{handler(){this.isOpen=this.$attrs.show}}},methods:{updateShow(s){this.isOpen=s,this.$attrs.toggleOpen(s)}}};var j=function(){var e=this,t=e._self._c;return t("div",[t("dt-modal",{attrs:{title:e.$attrs.title,"banner-title":e.$attrs.bannerTitle,"close-button-props":e.buttonCloseProps,show:e.isOpen,kind:e.$attrs.kind,size:e.$attrs.size,copy:e.$attrs.copy,"modal-class":e.$attrs.modalClass,"banner-class":e.$attrs.bannerClass,"banner-kind":e.$attrs.bannerKind,"dialog-class":e.$attrs.dialogClass,"content-class":e.$attrs.contentClass,"hide-close":e.$attrs.hideClose,"labelled-by-id":e.$attrs.labelledById,"fixed-header-footer":e.$attrs.fixedHeaderFooter,"visually-hidden-close":e.$attrs.visuallyHiddenClose,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel,"close-on-click":e.$attrs.closeOnClick,"initial-focus-element":e.$attrs.initialFocusElement},on:{"update:show":e.updateShow}},[e.$attrs.banner?t("template",{slot:"banner"},[t("span",{domProps:{innerHTML:e._s(e.$attrs.banner)}})]):e._e(),e.$attrs.header?t("template",{slot:"header"},[t("span",{domProps:{innerHTML:e._s(e.$attrs.header)}})]):e._e(),e.$attrs.default?t("template",{slot:"default"},[t("span",{domProps:{innerHTML:e._s(e.$attrs.default)}})]):e._e(),e.showFooter?t("template",{slot:"footer"},[e.$attrs.footer?t("span",{domProps:{innerHTML:e._s(e.$attrs.footer)}}):t("div",[t("dt-button",{attrs:{id:"cancel-button",kind:e.secondaryButtonKind,importance:"clear"}},[e._v(" Cancel ")]),t("dt-button",{staticClass:"d-ml6",attrs:{id:"confirm-button",kind:e.$attrs.kind,importance:"primary"}},[e._v(" Confirm ")])],1)]):e._e()],2),t("dt-button",{on:{click:function(J){e.isOpen=!e.isOpen}}},[e._v(" Click to open ")])],1)},A=[],W=P(q,j,A,!1,null,null,null,null);const R=W.exports;W.exports.__docgenInfo={displayName:"DtModalDefault",exportName:"default",description:"",tags:{},props:[{name:"showFooter",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/modal/modal_default.story.vue"]};const p={size:"default",kind:"default",bannerKind:"warning",closeButtonProps:{ariaLabel:"Close"},copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget lacus quis velit viverra iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum maximus ipsum ex. Curabitur elementum luctus augue, quis eleifend tortor feugiat vel. Maecenas maximus, ipsum et laoreet congue, diam massa aliquam libero, at pellentesque orci ipsum et velit.",title:"Example Title",toggleOpen:V("update:show"),visuallyHiddenCloseLabel:"Close Modal"},L={default:{control:"text",table:{type:{summary:"VNode"}}},banner:{control:"text",table:{type:{summary:"VNode"}}},footer:{control:"text",table:{type:{summary:"VNode"}}},header:{control:"text",table:{type:{summary:"VNode"}}},size:{options:Object.keys(z),control:{type:"select"}},kind:{options:Object.keys(B),control:{type:"select"}},bannerKind:{options:K,control:{type:"select"}},showFooter:{table:{disable:!0}},labelledById:{table:{defaultValue:{summary:"generated unique ID"}}},"update:show":{description:'The modal will emit a "false" boolean value when the user performs a modal-closing action      and a "true" boolean value after the modal is fully-shown.     Parent components can sync on this value to create a 2-way binding to control modal visibility.',table:{type:{summary:"boolean"}}},toggleOpen:{table:{disable:!0}}},Z={title:"Components/Modal",component:I,args:p,argTypes:L,excludeStories:/.*Data$/},r=(s,{argTypes:e})=>E(s,e,R),a={render:r,args:{},parameters:{percy:{args:{show:!0}}}},o={render:r,args:{showFooter:!0},parameters:{...a.parameters}},n={render:r,args:{showFooter:!0,fixedHeaderFooter:!0,copy:p.copy.repeat(4)},parameters:{...a.parameters}},l={render:r,args:{bannerTitle:"Example banner"},parameters:{...a.parameters}},d={render:r,args:{kind:"danger",showFooter:!0},parameters:{...a.parameters}},i={render:r,args:{size:"full",showFooter:!0},parameters:{...a.parameters}},u={render:r,args:{header:`
      <div class="d-fl-center d-p12 d-bgc-purple-100">
        <div>[custom header]</div>
      </div>`,default:`
      <div class="d-fl-center d-p32 d-bgc-gold-200">
        <h2>[custom body]</h2>
      </div>`},parameters:{...a.parameters}};var c,m,f;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {},
  parameters: {
    percy: {
      args: {
        show: true
      }
    }
  }
}`,...(f=(m=a.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var h,b,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showFooter: true
  },
  parameters: {
    ...Default.parameters
  }
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,v,D;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showFooter: true,
    fixedHeaderFooter: true,
    copy: argsData.copy.repeat(4)
  },
  parameters: {
    ...Default.parameters
  }
}`,...(D=(v=n.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var _,$,w;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    bannerTitle: 'Example banner'
  },
  parameters: {
    ...Default.parameters
  }
}`,...(w=($=l.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};var F,C,T;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    kind: 'danger',
    showFooter: true
  },
  parameters: {
    ...Default.parameters
  }
}`,...(T=(C=d.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var x,S,O;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    size: 'full',
    showFooter: true
  },
  parameters: {
    ...Default.parameters
  }
}`,...(O=(S=i.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var M,k,H;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(H=(k=u.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};const G=["argsData","argTypesData","Default","WithFooter","WithFixedHeaderFooter","WithBanner","WithDangerStyle","WithFullSize","WithCustomHeaderAndContent"],ae=Object.freeze(Object.defineProperty({__proto__:null,Default:a,WithBanner:l,WithCustomHeaderAndContent:u,WithDangerStyle:d,WithFixedHeaderFooter:n,WithFooter:o,WithFullSize:i,__namedExportsOrder:G,argTypesData:L,argsData:p,default:Z},Symbol.toStringTag,{value:"Module"}));export{ae as M,o as W,n as a,l as b,d as c,i as d,u as e};
//# sourceMappingURL=modal.stories-nqRwDQwB.js.map
