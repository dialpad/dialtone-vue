import{c as m}from"./storybook_utils-10cbe996.js";import{D as n,R as v,a as g}from"./root_layout-5da0ee91.js";import{n as f}from"./_plugin-vue2_normalizer-2bbd088e.js";const S={name:"DtRootLayoutDefault",components:{DtRootLayout:n}};var k=function(){var e=this,t=e._self._c;return t("dt-root-layout",{attrs:{"header-class":e.headerClass,"header-sticky":e.headerSticky,"content-class":e.contentClass,"sidebar-class":e.sidebarClass,"sidebar-position":e.sidebarPosition,"footer-class":e.footerClass,fixed:e.fixed,"responsive-breakpoint":e.responsiveBreakpoint},scopedSlots:e._u([{key:"header",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.header)}})]},proxy:!0},{key:"sidebar",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.sidebar)}})]},proxy:!0},{key:"footer",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.footer)}})]},proxy:!0}])},[t("span",{domProps:{innerHTML:e._s(e.defaultSlot)}})])},h=[],y=f(S,k,h,!1,null,null,null,null);const x=y.exports;y.exports.__docgenInfo={displayName:"DtRootLayoutDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/root_layout/root_layout_default.story.vue"]};const T={name:"DtRootLayoutSticky",components:{DtRootLayout:n}};var D=function(){var e=this,t=e._self._c;return t("dt-root-layout",{attrs:{"header-class":e.headerClass,"header-sticky":e.headerSticky,"content-class":e.contentClass,"sidebar-class":e.sidebarClass,"sidebar-position":e.sidebarPosition,"footer-class":e.footerClass,fixed:e.fixed,"responsive-breakpoint":e.responsiveBreakpoint},scopedSlots:e._u([{key:"header",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.header)}})]},proxy:!0},{key:"sidebar",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.sidebar)}})]},proxy:!0},{key:"footer",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.footer)}})]},proxy:!0}])},[t("span",{domProps:{innerHTML:e._s(e.defaultSlot)}})])},L=[],_=f(T,D,L,!1,null,null,null,null);const P=_.exports;_.exports.__docgenInfo={displayName:"DtRootLayoutSticky",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/root_layout/root_layout_sticky.story.vue"]};const s={sidebarPosition:"left",header:'<div class="d-bgc-purple-200 d-h64">Header</div>',footer:'<div class="d-bgc-gold-200 d-h64">Footer</div>',sidebar:'<div class="d-bgc-black-200 d-wmn264 d-h100p"><div>Sidebar item 1</div><div>Sidebar item 2</div><div>Sidebar item 3</div></div>',default:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim eleifend condimentum.
  Vestibulum euismod leo at finibus mattis. Integer ut dui id ligula tincidunt pellentesque. Vestibulum a ullamcorper
  risus. Ut tristique sapien eget magna lacinia, non interdum lacus malesuada. Proin augue lacus, finibus eget aliquam
  eu, efficitur sit amet magna. Suspendisse a nunc volutpat, maximus enim vitae, pretium dui. Suspendisse pretium
  faucibus posuere. Aenean consequat imperdiet laoreet. Pellentesque habitant morbi tristique senectus et netus et
  malesuada fames ac turpis egestas. Aliquam elit lacus, venenatis ac risus at, ullamcorper tempor tortor. Ut sed
  pulvinar mi, vitae vehicula odio. Fusce ornare vestibulum rhoncus. In vel ante arcu. Nunc pharetra libero non
  enim dapibus efficitur. Suspendisse dolor ante, pulvinar et faucibus quis, condimentum at dui.`},b={default:{control:"text",table:{type:{summary:"VNode"}}},header:{control:"text",table:{category:"slots",type:{summary:"VNode"}}},sidebar:{control:"text",table:{category:"slots",type:{summary:"VNode"}}},footer:{control:"text",table:{category:"slots",type:{summary:"VNode"}}},sidebarPosition:{options:Object.values(v),control:{type:"select"}},responsiveBreakpoint:{defaultValue:null,options:g,control:{type:"select"}},headerSticky:{control:"boolean"},fixed:{control:"boolean"}},R={title:"Components/Root Layout",component:n,args:s,argTypes:b,excludeStories:/.*Data$/,parameters:{layout:"fullscreen"}},O=(a,{argTypes:e})=>m(a,e,x),N=(a,{argTypes:e})=>m(a,e,P),o={render:O,args:{default:s.default.repeat(40)}},r={render:N,args:{headerSticky:!0,fixed:!1,default:s.default.repeat(40)}};var i,u,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: argsData.default.repeat(40)
  }
}`,...(l=(u=o.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var d,c,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: StickyTemplate,
  args: {
    headerSticky: true,
    fixed: false,
    default: argsData.default.repeat(40)
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const H=["argsData","argTypesData","Default","StickyHeader"],M=Object.freeze(Object.defineProperty({__proto__:null,Default:o,StickyHeader:r,__namedExportsOrder:H,argTypesData:b,argsData:s,default:R},Symbol.toStringTag,{value:"Module"}));export{o as D,M as R,r as S};
//# sourceMappingURL=root_layout.stories-2eb5869f.js.map