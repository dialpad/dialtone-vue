import{c as v}from"./storybook_utils-c9ca045c.js";import{D as f,R as S,a as _}from"./root_layout-0a8f7513.js";import{V as D}from"./v_html-8c3cf2ac.js";import{u as n,o as $,b as k,w as r,y as s}from"./vue.esm-bundler-a1916ad5.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";const h={name:"DtRootLayoutDefault",components:{DtRootLayout:f,VHtml:D}};function O(e,w,P,q,L,C){const o=n("v-html"),g=n("dt-root-layout");return $(),k(g,{"body-class":e.$attrs.bodyClass,"header-class":e.$attrs.headerClass,"header-sticky":e.$attrs.headerSticky,"header-height":e.$attrs.headerHeight,"content-class":e.$attrs.contentClass,"content-wrap-width-percent":e.$attrs.contentWrapWidthPercent,"sidebar-class":e.$attrs.sidebarClass,"sidebar-position":e.$attrs.sidebarPosition,"sidebar-width":e.$attrs.sidebarWidth,"footer-class":e.$attrs.footerClass,"footer-height":e.$attrs.footerHeight,fixed:e.$attrs.fixed,"responsive-breakpoint":e.$attrs.responsiveBreakpoint},{header:r(()=>[s(o,{html:e.$attrs.header},null,8,["html"])]),sidebar:r(()=>[s(o,{html:e.$attrs.sidebar},null,8,["html"])]),footer:r(()=>[s(o,{html:e.$attrs.footer},null,8,["html"])]),default:r(()=>[s(o,{html:e.$attrs.default},null,8,["html"])]),_:1},8,["body-class","header-class","header-sticky","header-height","content-class","content-wrap-width-percent","sidebar-class","sidebar-position","sidebar-width","footer-class","footer-height","fixed","responsive-breakpoint"])}const R=T(h,[["render",O],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/root_layout/root_layout_default.story.vue"]]);h.__docgenInfo={displayName:"DtRootLayoutDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/root_layout/root_layout_default.story.vue"]};const i={sidebarPosition:"left",header:'<div class="d-bgc-purple-200 d-h64 d-h100p">Header</div>',footer:'<div class="d-bgc-gold-200 d-h64 d-h100p">Footer</div>',sidebar:'<div class="d-bgc-black-200 d-hmn100p"><div>Sidebar item 1</div><div>Sidebar item 2</div><div>Sidebar item 3</div></div>',default:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim eleifend condimentum.
  Vestibulum euismod leo at finibus mattis. Integer ut dui id ligula tincidunt pellentesque. Vestibulum a ullamcorper
  risus. Ut tristique sapien eget magna lacinia, non interdum lacus malesuada. Proin augue lacus, finibus eget aliquam
  eu, efficitur sit amet magna. Suspendisse a nunc volutpat, maximus enim vitae, pretium dui. Suspendisse pretium
  faucibus posuere. Aenean consequat imperdiet laoreet. Pellentesque habitant morbi tristique senectus et netus et
  malesuada fames ac turpis egestas. Aliquam elit lacus, venenatis ac risus at, ullamcorper tempor tortor. Ut sed
  pulvinar mi, vitae vehicula odio. Fusce ornare vestibulum rhoncus. In vel ante arcu. Nunc pharetra libero non
  enim dapibus efficitur. Suspendisse dolor ante, pulvinar et faucibus quis, condimentum at dui.`},b={default:{control:"text",description:"Slot for main content",table:{type:{summary:"VNode"}}},header:{description:"Slot for header content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},sidebar:{description:"Slot for sidebar content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},footer:{description:"Slot for footer content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},sidebarPosition:{options:Object.values(S),control:{type:"select"}},responsiveBreakpoint:{defaultValue:null,control:{type:"select",options:_}}},V={title:"Components/Root Layout",component:f,args:i,argTypes:b,excludeStories:/.*Data$/},y=e=>v(e,R),t={render:y,args:{default:i.default.repeat(40)}},a={render:y,args:{headerSticky:!0,fixed:!1,default:i.default.repeat(40)}};var l,d,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: argsData.default.repeat(40)
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var c,m,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    headerSticky: true,
    fixed: false,
    default: argsData.default.repeat(40)
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const N=["argsData","argTypesData","Default","StickyHeader"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:t,StickyHeader:a,__namedExportsOrder:N,argTypesData:b,argsData:i,default:V},Symbol.toStringTag,{value:"Module"}));export{t as D,F as R,a as S};
//# sourceMappingURL=root_layout.stories-26234bdf.js.map
