import{D as W,M as B,a as N}from"./modal-58e7373c.js";import{D as P}from"./button-d2753bc0.js";import{n as E}from"./_plugin-vue2_normalizer-2bbd088e.js";import{c as V}from"./storybook_utils-10cbe996.js";import{a as K}from"./chunk-AY7I2SME-5eb1ab46.js";import{N as q}from"./notice-013f0d0d.js";const j={name:"DtModalDefault",components:{DtModal:W,DtButton:P},props:{showFooter:{type:Boolean,default:!1}},data(){return{isOpen:this.show}},computed:{buttonCloseProps(){return{...this.closeButtonProps,ariaLabel:"Close"}},secondaryButtonKind(){return this.kind==="danger"?"muted":"default"}},watch:{show:{handler(){this.isOpen=this.show}}},methods:{updateShow(o){this.isOpen=o,this.toggleOpen(o)}}};var A=function(){var e=this,a=e._self._c;return a("div",[a("dt-modal",{attrs:{title:e.title,"banner-title":e.bannerTitle,"close-button-props":e.buttonCloseProps,show:e.isOpen,kind:e.kind,size:e.size,copy:e.copy,"modal-class":e.modalClass,"banner-class":e.bannerClass,"banner-kind":e.bannerKind,"dialog-class":e.dialogClass,"content-class":e.contentClass,"hide-close":e.hideClose,"labelled-by-id":e.labelledById,"fixed-header-footer":e.fixedHeaderFooter,"visually-hidden-close":e.visuallyHiddenClose,"visually-hidden-close-label":e.visuallyHiddenCloseLabel,"close-on-click":e.closeOnClick,"initial-focus-element":e.initialFocusElement},on:{"update:show":e.updateShow}},[e.banner?a("template",{slot:"banner"},[a("span",{domProps:{innerHTML:e._s(e.banner)}})]):e._e(),e.header?a("template",{slot:"header"},[a("span",{domProps:{innerHTML:e._s(e.header)}})]):e._e(),e.defaultSlot?a("template",{slot:"default"},[a("span",{domProps:{innerHTML:e._s(e.defaultSlot)}})]):e._e(),e.showFooter?a("template",{slot:"footer"},[e.footer?a("span",{domProps:{innerHTML:e._s(e.footer)}}):a("div",[a("dt-button",{attrs:{id:"cancel-button",kind:e.secondaryButtonKind,importance:"clear"}},[e._v(" Cancel ")]),a("dt-button",{staticClass:"d-ml6",attrs:{id:"confirm-button",kind:e.kind,importance:"primary"}},[e._v(" Confirm ")])],1)]):e._e()],2),a("dt-button",{on:{click:function(J){e.isOpen=!e.isOpen}}},[e._v(" Click to open ")])],1)},R=[],L=E(j,A,R,!1,null,null,null,null);const $=L.exports;L.exports.__docgenInfo={displayName:"DtModalDefault",exportName:"default",description:"",tags:{},props:[{name:"showFooter",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/modal/modal_default.story.vue"]};const p={size:"default",kind:"default",bannerKind:"warning",closeButtonProps:{ariaLabel:"Close"},copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget lacus quis velit viverra iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum maximus ipsum ex. Curabitur elementum luctus augue, quis eleifend tortor feugiat vel. Maecenas maximus, ipsum et laoreet congue, diam massa aliquam libero, at pellentesque orci ipsum et velit.",title:"Example Title",toggleOpen:K("update:show"),visuallyHiddenCloseLabel:"Close Modal"},z={default:{control:"text",table:{type:{summary:"VNode"}}},banner:{control:"text",table:{type:{summary:"VNode"}}},footer:{control:"text",table:{type:{summary:"VNode"}}},header:{control:"text",table:{type:{summary:"VNode"}}},size:{options:Object.keys(B),control:{type:"select"}},kind:{options:Object.keys(N),control:{type:"select"}},bannerKind:{options:q,control:{type:"select"}},showFooter:{table:{disable:!0}},labelledById:{table:{defaultValue:{summary:"generated unique ID"}}},"update:show":{description:'The modal will emit a "false" boolean value when the user performs a modal-closing action      and a "true" boolean value after the modal is fully-shown.     Parent components can sync on this value to create a 2-way binding to control modal visibility.',table:{type:{summary:"boolean"}}},toggleOpen:{table:{disable:!0}}},Z={title:"Components/Modal",component:W,args:p,argTypes:z,excludeStories:/.*Data$/},r=(o,{argTypes:e})=>V(o,e,$),t={render:r,args:{},parameters:{percy:{args:{show:!0}}}},s={render:r,args:{showFooter:!0},parameters:{...t.parameters}},n={render:r,args:{showFooter:!0,fixedHeaderFooter:!0,copy:p.copy.repeat(4)},parameters:{...t.parameters}},l={render:r,args:{bannerTitle:"Example banner"},parameters:{...t.parameters}},d={render:r,args:{kind:"danger",showFooter:!0},parameters:{...t.parameters}},i={render:r,args:{size:"full",showFooter:!0},parameters:{...t.parameters}},u={render:r,args:{header:`
      <div class="d-fl-center d-p12 d-bgc-purple-100">
        <div>[custom header]</div>
      </div>`,default:`
      <div class="d-fl-center d-p32 d-bgc-gold-200">
        <h2>[custom body]</h2>
      </div>`},parameters:{...t.parameters}};var c,m,f;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {},
  parameters: {
    percy: {
      args: {
        show: true
      }
    }
  }
}`,...(f=(m=t.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var h,b,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showFooter: true
  },
  parameters: {
    ...Default.parameters
  }
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,v,D;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showFooter: true,
    fixedHeaderFooter: true,
    copy: argsData.copy.repeat(4)
  },
  parameters: {
    ...Default.parameters
  }
}`,...(D=(v=n.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var _,w,F;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    bannerTitle: 'Example banner'
  },
  parameters: {
    ...Default.parameters
  }
}`,...(F=(w=l.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var C,S,T;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    kind: 'danger',
    showFooter: true
  },
  parameters: {
    ...Default.parameters
  }
}`,...(T=(S=d.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var x,O,M;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    size: 'full',
    showFooter: true
  },
  parameters: {
    ...Default.parameters
  }
}`,...(M=(O=i.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var k,H,I;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(I=(H=u.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};const G=["argsData","argTypesData","Default","WithFooter","WithFixedHeaderFooter","WithBanner","WithDangerStyle","WithFullSize","WithCustomHeaderAndContent"],te=Object.freeze(Object.defineProperty({__proto__:null,Default:t,WithBanner:l,WithCustomHeaderAndContent:u,WithDangerStyle:d,WithFixedHeaderFooter:n,WithFooter:s,WithFullSize:i,__namedExportsOrder:G,argTypesData:z,argsData:p,default:Z},Symbol.toStringTag,{value:"Module"}));export{te as M,s as W,n as a,l as b,d as c,i as d,u as e};
//# sourceMappingURL=modal.stories-6d854d46.js.map
