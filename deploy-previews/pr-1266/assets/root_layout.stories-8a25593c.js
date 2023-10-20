import{c as _}from"./storybook_utils-cbba4b42.js";import{D as n,R as S,a as h}from"./root_layout-a238945e.js";import{n as y}from"./_plugin-vue2_normalizer-2bbd088e.js";const k={name:"DtRootLayoutDefault",components:{DtRootLayout:n}};var v=function(){var e=this,t=e._self._c;return t("dt-root-layout",{attrs:{"header-class":e.headerClass,"header-sticky":e.headerSticky,"content-class":e.contentClass,"sidebar-class":e.sidebarClass,"sidebar-position":e.sidebarPosition,"footer-class":e.footerClass,fixed:e.fixed,"responsive-breakpoint":e.responsiveBreakpoint},scopedSlots:e._u([{key:"header",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.header)}})]},proxy:!0},{key:"sidebar",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.sidebar)}})]},proxy:!0},{key:"footer",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.footer)}})]},proxy:!0}])},[t("span",{domProps:{innerHTML:e._s(e.defaultSlot)}})])},x=[];v._withStripped=!0;var i=y(k,v,x,!1,null,null,null,null);i.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/root_layout/root_layout_default.story.vue";const T=i.exports;i.exports.__docgenInfo={displayName:"DtRootLayoutDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/root_layout/root_layout_default.story.vue"]};const D={name:"DtRootLayoutSticky",components:{DtRootLayout:n}};var b=function(){var e=this,t=e._self._c;return t("dt-root-layout",{attrs:{"header-class":e.headerClass,"header-sticky":e.headerSticky,"content-class":e.contentClass,"sidebar-class":e.sidebarClass,"sidebar-position":e.sidebarPosition,"footer-class":e.footerClass,fixed:e.fixed,"responsive-breakpoint":e.responsiveBreakpoint},scopedSlots:e._u([{key:"header",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.header)}})]},proxy:!0},{key:"sidebar",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.sidebar)}})]},proxy:!0},{key:"footer",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.footer)}})]},proxy:!0}])},[t("span",{domProps:{innerHTML:e._s(e.defaultSlot)}})])},L=[];b._withStripped=!0;var u=y(D,b,L,!1,null,null,null,null);u.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/root_layout/root_layout_sticky.story.vue";const P=u.exports;u.exports.__docgenInfo={displayName:"DtRootLayoutSticky",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/root_layout/root_layout_sticky.story.vue"]};const s={sidebarPosition:"left",header:'<div class="d-bgc-purple-200 d-h64">Header</div>',footer:'<div class="d-bgc-gold-200 d-h64">Footer</div>',sidebar:'<div class="d-bgc-black-200 d-wmn264 d-h100p"><div>Sidebar item 1</div><div>Sidebar item 2</div><div>Sidebar item 3</div></div>',default:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim eleifend condimentum.
  Vestibulum euismod leo at finibus mattis. Integer ut dui id ligula tincidunt pellentesque. Vestibulum a ullamcorper
  risus. Ut tristique sapien eget magna lacinia, non interdum lacus malesuada. Proin augue lacus, finibus eget aliquam
  eu, efficitur sit amet magna. Suspendisse a nunc volutpat, maximus enim vitae, pretium dui. Suspendisse pretium
  faucibus posuere. Aenean consequat imperdiet laoreet. Pellentesque habitant morbi tristique senectus et netus et
  malesuada fames ac turpis egestas. Aliquam elit lacus, venenatis ac risus at, ullamcorper tempor tortor. Ut sed
  pulvinar mi, vitae vehicula odio. Fusce ornare vestibulum rhoncus. In vel ante arcu. Nunc pharetra libero non
  enim dapibus efficitur. Suspendisse dolor ante, pulvinar et faucibus quis, condimentum at dui.`},g={default:{control:"text",table:{type:{summary:"VNode"}}},header:{control:"text",table:{category:"slots",type:{summary:"VNode"}}},sidebar:{control:"text",table:{category:"slots",type:{summary:"VNode"}}},footer:{control:"text",table:{category:"slots",type:{summary:"VNode"}}},sidebarPosition:{options:Object.values(S),control:{type:"select"}},responsiveBreakpoint:{defaultValue:null,options:h,control:{type:"select"}},headerSticky:{control:"boolean"},fixed:{control:"boolean"}},R={title:"Components/Root Layout",component:n,args:s,argTypes:g,excludeStories:/.*Data$/,parameters:{layout:"fullscreen"}},O=(o,{argTypes:e})=>_(o,e,T),N=(o,{argTypes:e})=>_(o,e,P),a={render:O,args:{default:s.default.repeat(40)}},r={render:N,args:{headerSticky:!0,fixed:!1,default:s.default.repeat(40)}};var l,d,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: argsData.default.repeat(40)
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,m,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: StickyTemplate,
  args: {
    headerSticky: true,
    fixed: false,
    default: argsData.default.repeat(40)
  }
}`,...(f=(m=r.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const H=["argsData","argTypesData","Default","StickyHeader"],M=Object.freeze(Object.defineProperty({__proto__:null,Default:a,StickyHeader:r,__namedExportsOrder:H,argTypesData:g,argsData:s,default:R},Symbol.toStringTag,{value:"Module"}));export{a as D,M as R,r as S};
//# sourceMappingURL=root_layout.stories-8a25593c.js.map
