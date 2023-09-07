import{D as L,M as N,a as P}from"./modal-c2f45e15.js";import{D as E}from"./button-9102a84a.js";import{n as V}from"./_plugin-vue2_normalizer-2bbd088e.js";import{c as K}from"./storybook_utils-7c63eced.js";import{a as q}from"./chunk-AY7I2SME-c7b6cf8a.js";import{N as j}from"./notice-2fffb1be.js";const A={name:"DtModalDefault",components:{DtModal:L,DtButton:E},props:{showFooter:{type:Boolean,default:!1}},data(){return{isOpen:this.show}},computed:{buttonCloseProps(){return{...this.closeButtonProps,ariaLabel:"Close"}},secondaryButtonKind(){return this.kind==="danger"?"muted":"default"}},watch:{show:{handler(){this.isOpen=this.show}}},methods:{updateShow(o){this.isOpen=o,this.toggleOpen(o)}}};var z=function(){var e=this,a=e._self._c;return a("div",[a("dt-modal",{attrs:{title:e.title,"banner-title":e.bannerTitle,"close-button-props":e.buttonCloseProps,show:e.isOpen,kind:e.kind,size:e.size,copy:e.copy,"modal-class":e.modalClass,"banner-class":e.bannerClass,"banner-kind":e.bannerKind,"dialog-class":e.dialogClass,"content-class":e.contentClass,"hide-close":e.hideClose,"labelled-by-id":e.labelledById,"fixed-header-footer":e.fixedHeaderFooter,"visually-hidden-close":e.visuallyHiddenClose,"visually-hidden-close-label":e.visuallyHiddenCloseLabel,"close-on-click":e.closeOnClick,"initial-focus-element":e.initialFocusElement},on:{"update:show":e.updateShow}},[e.banner?a("template",{slot:"banner"},[a("span",{domProps:{innerHTML:e._s(e.banner)}})]):e._e(),e.header?a("template",{slot:"header"},[a("span",{domProps:{innerHTML:e._s(e.header)}})]):e._e(),e.defaultSlot?a("template",{slot:"default"},[a("span",{domProps:{innerHTML:e._s(e.defaultSlot)}})]):e._e(),e.showFooter?a("template",{slot:"footer"},[e.footer?a("span",{domProps:{innerHTML:e._s(e.footer)}}):a("div",[a("dt-button",{attrs:{id:"cancel-button",kind:e.secondaryButtonKind,importance:"clear"}},[e._v(" Cancel ")]),a("dt-button",{staticClass:"d-ml6",attrs:{id:"confirm-button",kind:e.kind,importance:"primary"}},[e._v(" Confirm ")])],1)]):e._e()],2),a("dt-button",{on:{click:function(J){e.isOpen=!e.isOpen}}},[e._v(" Click to open ")])],1)},R=[];z._withStripped=!0;var p=V(A,z,R,!1,null,null,null,null);p.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/modal/modal_default.story.vue";const $=p.exports;p.exports.__docgenInfo={displayName:"DtModalDefault",exportName:"default",description:"",tags:{},props:[{name:"showFooter",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/modal/modal_default.story.vue"]};const m={size:"default",kind:"default",bannerKind:"warning",closeButtonProps:{ariaLabel:"Close"},copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget lacus quis velit viverra iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum maximus ipsum ex. Curabitur elementum luctus augue, quis eleifend tortor feugiat vel. Maecenas maximus, ipsum et laoreet congue, diam massa aliquam libero, at pellentesque orci ipsum et velit.",title:"Example Title",toggleOpen:q("update:show"),visuallyHiddenCloseLabel:"Close Modal"},B={default:{control:"text",table:{type:{summary:"VNode"}}},banner:{control:"text",table:{type:{summary:"VNode"}}},footer:{control:"text",table:{type:{summary:"VNode"}}},header:{control:"text",table:{type:{summary:"VNode"}}},size:{options:Object.keys(N),control:{type:"select"}},kind:{options:Object.keys(P),control:{type:"select"}},bannerKind:{options:j,control:{type:"select"}},showFooter:{table:{disable:!0}},labelledById:{table:{defaultValue:{summary:"generated unique ID"}}},"update:show":{description:'The modal will emit a "false" boolean value when the user performs a modal-closing action      and a "true" boolean value after the modal is fully-shown.     Parent components can sync on this value to create a 2-way binding to control modal visibility.',table:{type:{summary:"boolean"}}},toggleOpen:{table:{disable:!0}}},Z={title:"Components/Modal",component:L,args:m,argTypes:B,excludeStories:/.*Data$/},r=(o,{argTypes:e})=>K(o,e,$),t={render:r,args:{},parameters:{percy:{args:{show:!0}}}},s={render:r,args:{showFooter:!0},parameters:{...t.parameters}},n={render:r,args:{showFooter:!0,fixedHeaderFooter:!0,copy:m.copy.repeat(4)},parameters:{...t.parameters}},l={render:r,args:{bannerTitle:"Example banner"},parameters:{...t.parameters}},d={render:r,args:{kind:"danger",showFooter:!0},parameters:{...t.parameters}},i={render:r,args:{size:"full",showFooter:!0},parameters:{...t.parameters}},u={render:r,args:{header:`
      <div class="d-fl-center d-p12 d-bgc-purple-100">
        <div>[custom header]</div>
      </div>`,default:`
      <div class="d-fl-center d-p32 d-bgc-gold-200">
        <h2>[custom body]</h2>
      </div>`},parameters:{...t.parameters}};var c,f,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {},
  parameters: {
    percy: {
      args: {
        show: true
      }
    }
  }
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,g,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showFooter: true
  },
  parameters: {
    ...Default.parameters
  }
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var v,_,D;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showFooter: true,
    fixedHeaderFooter: true,
    copy: argsData.copy.repeat(4)
  },
  parameters: {
    ...Default.parameters
  }
}`,...(D=(_=n.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var w,F,C;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    bannerTitle: 'Example banner'
  },
  parameters: {
    ...Default.parameters
  }
}`,...(C=(F=l.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var S,T,x;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    kind: 'danger',
    showFooter: true
  },
  parameters: {
    ...Default.parameters
  }
}`,...(x=(T=d.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var O,k,M;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    size: 'full',
    showFooter: true
  },
  parameters: {
    ...Default.parameters
  }
}`,...(M=(k=i.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var H,I,W;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(W=(I=u.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};const G=["argsData","argTypesData","Default","WithFooter","WithFixedHeaderFooter","WithBanner","WithDangerStyle","WithFullSize","WithCustomHeaderAndContent"],te=Object.freeze(Object.defineProperty({__proto__:null,Default:t,WithBanner:l,WithCustomHeaderAndContent:u,WithDangerStyle:d,WithFixedHeaderFooter:n,WithFooter:s,WithFullSize:i,__namedExportsOrder:G,argTypesData:B,argsData:m,default:Z},Symbol.toStringTag,{value:"Module"}));export{te as M,s as W,n as a,l as b,d as c,i as d,u as e};
//# sourceMappingURL=modal.stories-c31ba204.js.map
