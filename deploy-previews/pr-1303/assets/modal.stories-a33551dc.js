import{D as q,M as x,a as Z}from"./modal-57ca5079.js";import{D as G}from"./button-878f62d6.js";import{s as v,o as h,k as b,u as p,C as J,w as t,e as y,x as g}from"./vue.esm-bundler-81c53cfe.js";import{_ as Q}from"./_plugin-vue_export-helper-c27b6911.js";import{c as X}from"./storybook_utils-182ea7b7.js";import{a as Y}from"./chunk-AY7I2SME-5eb1ab46.js";import{N as ee}from"./notice-2276b380.js";const j={name:"DtModalDefault",components:{DtModal:q,DtButton:G},props:{showFooter:{type:Boolean,default:!1}},data(){return{isOpen:this.$attrs.show}},computed:{buttonCloseProps(){return{...this.$attrs.closeButtonProps,ariaLabel:"Close"}},secondaryButtonKind(){return this.$attrs.kind==="danger"?"muted":"default"}},watch:{show:{handler(){this.isOpen=this.$attrs.show}}},methods:{close(e){this.isOpen=!this.isOpen,this.$attrs.onClose(e)}}},ae=["innerHTML"],te=["innerHTML"],re=["innerHTML"],se=["innerHTML"],oe={key:1};function ne(e,u,R,ue,m,c){const f=v("dt-button"),U=v("dt-modal");return h(),b("div",null,[p(U,{title:e.$attrs.title,"banner-title":e.$attrs.bannerTitle,"close-button-props":c.buttonCloseProps,show:m.isOpen,kind:e.$attrs.kind,size:e.$attrs.size,copy:e.$attrs.copy,"modal-class":e.$attrs.modalClass,"banner-class":e.$attrs.bannerClass,"banner-kind":e.$attrs.bannerKind,"dialog-class":e.$attrs.dialogClass,"content-class":e.$attrs.contentClass,"hide-close":e.$attrs.hideClose,"labelled-by-id":e.$attrs.labelledById,"fixed-header-footer":e.$attrs.fixedHeaderFooter,"visually-hidden-close":e.$attrs.visuallyHiddenClose,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel,"close-on-click":e.$attrs.closeOnClick,"onUpdate:show":c.close},J({_:2},[e.$attrs.banner?{name:"banner",fn:t(()=>[y("span",{innerHTML:e.$attrs.banner},null,8,ae)]),key:"0"}:void 0,e.$attrs.header?{name:"header",fn:t(()=>[y("span",{innerHTML:e.$attrs.header},null,8,te)]),key:"1"}:void 0,e.defaultSlot?{name:"default",fn:t(()=>[y("span",{innerHTML:e.defaultSlot},null,8,re)]),key:"2"}:void 0,R.showFooter?{name:"footer",fn:t(()=>[e.$attrs.footer?(h(),b("span",{key:0,innerHTML:e.$attrs.footer},null,8,se)):(h(),b("div",oe,[p(f,{kind:c.secondaryButtonKind,importance:"clear"},{default:t(()=>[g(" Cancel ")]),_:1},8,["kind"]),p(f,{kind:e.$attrs.kind,importance:"primary",class:"d-ml6"},{default:t(()=>[g(" Confirm ")]),_:1},8,["kind"])]))]),key:"3"}:void 0]),1032,["title","banner-title","close-button-props","show","kind","size","copy","modal-class","banner-class","banner-kind","dialog-class","content-class","hide-close","labelled-by-id","fixed-header-footer","visually-hidden-close","visually-hidden-close-label","close-on-click","onUpdate:show"]),p(f,{onClick:u[0]||(u[0]=pe=>m.isOpen=!m.isOpen)},{default:t(()=>[g(" Click to open ")]),_:1})])}const le=Q(j,[["render",ne],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/modal/modal_default.story.vue"]]);j.__docgenInfo={displayName:"DtModalDefault",exportName:"default",description:"",tags:{},props:[{name:"showFooter",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/modal/modal_default.story.vue"]};const D={size:"default",kind:"default",bannerKind:"warning",closeButtonProps:{ariaLabel:"Close"},copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget lacus quis velit viverra iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum maximus ipsum ex. Curabitur elementum luctus augue, quis eleifend tortor feugiat vel. Maecenas maximus, ipsum et laoreet congue, diam massa aliquam libero, at pellentesque orci ipsum et velit.",title:"Example Title",onClose:Y("update:show"),visuallyHiddenCloseLabel:"Close Modal"},A={default:{control:"text",table:{type:{summary:"VNode"}}},banner:{control:"text",table:{type:{summary:"VNode"}}},footer:{control:"text",table:{type:{summary:"VNode"}}},header:{control:"text",table:{type:{summary:"VNode"}}},size:{options:Object.keys(x),control:{type:"select"}},kind:{options:Object.keys(Z),control:{type:"select"}},bannerKind:{options:ee,control:{type:"select"}},showFooter:{table:{disable:!0}},labelledById:{table:{defaultValue:{summary:"generated unique ID"}}},"update:show":{description:'The modal will emit a "false" boolean value for this event when the user performs a modal-closing action.  Parent components can sync on this value to create a 2-way binding to control modal visibility.',table:{type:{summary:"boolean"}}},onClose:{table:{disable:!0}}},de={title:"Components/Modal",component:q,args:D,argTypes:A,excludeStories:/.*Data$/},r=(e,{argTypes:u})=>X(e,u,le),a={render:r,args:{},parameters:{percy:{args:{show:!0}}}},s={render:r,args:{showFooter:!0},parameters:{...a.parameters}},o={render:r,args:{showFooter:!0,fixedHeaderFooter:!0,copy:D.copy.repeat(4)},parameters:{...a.parameters}},n={render:r,args:{bannerTitle:"Example banner"},parameters:{...a.parameters}},l={render:r,args:{kind:"danger",showFooter:!0},parameters:{...a.parameters}},d={render:r,args:{size:"full",showFooter:!0},parameters:{...a.parameters}},i={render:r,args:{header:`
      <div class="d-fl-center d-p12 d-bgc-purple-100">
        <div>[custom header]</div>
      </div>`,default:`
      <div class="d-fl-center d-p32 d-bgc-gold-200">
        <h2>[custom body]</h2>
      </div>`},parameters:{...a.parameters}};var k,w,C;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {},
  parameters: {
    percy: {
      args: {
        show: true
      }
    }
  }
}`,...(C=(w=a.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var T,F,$;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showFooter: true
  },
  parameters: {
    ...Default.parameters
  }
}`,...($=(F=s.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var M,S,_;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showFooter: true,
    fixedHeaderFooter: true,
    copy: argsData.copy.repeat(4)
  },
  parameters: {
    ...Default.parameters
  }
}`,...(_=(S=o.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var H,O,L;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    bannerTitle: 'Example banner'
  },
  parameters: {
    ...Default.parameters
  }
}`,...(L=(O=n.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var B,I,N;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    kind: 'danger',
    showFooter: true
  },
  parameters: {
    ...Default.parameters
  }
}`,...(N=(I=l.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var W,V,z;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    size: 'full',
    showFooter: true
  },
  parameters: {
    ...Default.parameters
  }
}`,...(z=(V=d.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var E,K,P;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(P=(K=i.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};const ie=["argsData","argTypesData","Default","WithFooter","WithFixedHeaderFooter","WithBanner","WithDangerStyle","WithFullSize","WithCustomHeaderAndContent"],De=Object.freeze(Object.defineProperty({__proto__:null,Default:a,WithBanner:n,WithCustomHeaderAndContent:i,WithDangerStyle:l,WithFixedHeaderFooter:o,WithFooter:s,WithFullSize:d,__namedExportsOrder:ie,argTypesData:A,argsData:D,default:de},Symbol.toStringTag,{value:"Module"}));export{De as M,s as W,o as a,n as b,l as c,d,i as e};
//# sourceMappingURL=modal.stories-a33551dc.js.map