import{c as b}from"./storybook_utils-6f4fc6ad.js";import{D as m,R as g,a as v}from"./root_layout-63d4e92e.js";import{n as h}from"./_plugin-vue2_normalizer-2bbd088e.js";const S={name:"DtRootLayoutDefault",components:{DtRootLayout:m}};var f=function(){var e=this,t=e._self._c;return t("dt-root-layout",{attrs:{"body-class":e.bodyClass,"header-class":e.headerClass,"header-sticky":e.headerSticky,"header-height":e.headerHeight,"content-class":e.contentClass,"sidebar-class":e.sidebarClass,"sidebar-position":e.sidebarPosition,"sidebar-width":e.sidebarWidth,"footer-class":e.footerClass,"footer-height":e.footerHeight,fixed:e.fixed,"responsive-breakpoint":e.responsiveBreakpoint},scopedSlots:e._u([e.header?{key:"header",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.header)}})]},proxy:!0}:null,e.sidebar?{key:"sidebar",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.sidebar)}})]},proxy:!0}:null,e.footer?{key:"footer",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.footer)}})]},proxy:!0}:null],null,!0)},[e.defaultSlot?[t("span",{domProps:{innerHTML:e._s(e.defaultSlot)}})]:e._e()],2)},D=[];f._withStripped=!0;var s=h(S,f,D,!1,null,null,null,null);s.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/root_layout/root_layout_default.story.vue";const T=s.exports;s.exports.__docgenInfo={displayName:"DtRootLayoutDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/root_layout/root_layout_default.story.vue"]};const r={sidebarPosition:"left",header:'<div class="d-bgc-purple-200 d-h100p">Header</div>',footer:'<div class="d-bgc-gold-200 d-h100p">Footer</div>',sidebar:'<div class="d-bgc-black-200 d-hmn100p"><div>Sidebar item 1</div><div>Sidebar item 2</div><div>Sidebar item 3</div></div>',default:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim eleifend condimentum.
  Vestibulum euismod leo at finibus mattis. Integer ut dui id ligula tincidunt pellentesque. Vestibulum a ullamcorper
  risus. Ut tristique sapien eget magna lacinia, non interdum lacus malesuada. Proin augue lacus, finibus eget aliquam
  eu, efficitur sit amet magna. Suspendisse a nunc volutpat, maximus enim vitae, pretium dui. Suspendisse pretium
  faucibus posuere. Aenean consequat imperdiet laoreet. Pellentesque habitant morbi tristique senectus et netus et
  malesuada fames ac turpis egestas. Aliquam elit lacus, venenatis ac risus at, ullamcorper tempor tortor. Ut sed
  pulvinar mi, vitae vehicula odio. Fusce ornare vestibulum rhoncus. In vel ante arcu. Nunc pharetra libero non
  enim dapibus efficitur. Suspendisse dolor ante, pulvinar et faucibus quis, condimentum at dui.`},y={default:{control:"text",description:"Slot for main content",table:{type:{summary:"VNode"}}},header:{description:"Slot for header content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},sidebar:{description:"Slot for sidebar content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},footer:{description:"Slot for footer content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},sidebarPosition:{options:Object.values(g),control:{type:"select"}},responsiveBreakpoint:{defaultValue:null,control:{type:"select",options:v}}},x={title:"Components/Root Layout",component:m,args:r,argTypes:y,excludeStories:/.*Data$/},_=(n,{argTypes:e})=>b(n,e,T),a={render:_,args:{default:r.default.repeat(40)}},o={render:_,args:{headerSticky:!0,fixed:!1,default:r.default.repeat(40)}};var i,u,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: argsData.default.repeat(40)
  }
}`,...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var d,c,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    headerSticky: true,
    fixed: false,
    default: argsData.default.repeat(40)
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const k=["argsData","argTypesData","Default","StickyHeader"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:a,StickyHeader:o,__namedExportsOrder:k,argTypesData:y,argsData:r,default:x},Symbol.toStringTag,{value:"Module"}));export{a as D,P as R,o as S};
//# sourceMappingURL=root_layout.stories-5ca91a27.js.map