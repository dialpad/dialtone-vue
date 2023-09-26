import{c as $}from"./storybook_utils-f3611d2a.js";import{D as b,R as D,a as k}from"./root_layout-2dba7cb9.js";import{V as _}from"./v_html-949ed4a0.js";import{k as d,o as t,v as a,m as i,j as n}from"./vue.esm-bundler-a9a971fb.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";const y={name:"DtRootLayoutDefault",components:{DtRootLayout:b,VHtml:_}};function O(e,P,q,w,C,L){const s=d("v-html"),S=d("dt-root-layout");return t(),a(S,{"body-class":e.$attrs.bodyClass,"header-class":e.$attrs.headerClass,"header-sticky":e.$attrs.headerSticky,"header-height":e.$attrs.headerHeight,"content-class":e.$attrs.contentClass,"content-wrap-width-percent":e.$attrs.contentWrapWidthPercent,"sidebar-class":e.$attrs.sidebarClass,"sidebar-position":e.$attrs.sidebarPosition,"sidebar-width":e.$attrs.sidebarWidth,"footer-class":e.$attrs.footerClass,"footer-height":e.$attrs.footerHeight,fixed:e.$attrs.fixed,"responsive-breakpoint":e.$attrs.responsiveBreakpoint},{header:i(()=>[e.$attrs.header?(t(),a(s,{key:0,html:e.$attrs.header},null,8,["html"])):n("v-if",!0)]),sidebar:i(()=>[e.$attrs.sidebar?(t(),a(s,{key:0,html:e.$attrs.sidebar},null,8,["html"])):n("v-if",!0)]),footer:i(()=>[e.$attrs.footer?(t(),a(s,{key:0,html:e.$attrs.footer},null,8,["html"])):n("v-if",!0)]),default:i(()=>[e.$attrs.default?(t(),a(s,{key:0,html:e.$attrs.default},null,8,["html"])):n("v-if",!0)]),_:1},8,["body-class","header-class","header-sticky","header-height","content-class","content-wrap-width-percent","sidebar-class","sidebar-position","sidebar-width","footer-class","footer-height","fixed","responsive-breakpoint"])}const R=T(y,[["render",O],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/root_layout/root_layout_default.story.vue"]]);y.__docgenInfo={displayName:"DtRootLayoutDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/root_layout/root_layout_default.story.vue"]};const l={sidebarPosition:"left",header:'<div class="d-bgc-purple-200 d-h100p">Header</div>',footer:'<div class="d-bgc-gold-200 d-h100p">Footer</div>',sidebar:'<div class="d-bgc-black-200 d-hmn100p"><div>Sidebar item 1</div><div>Sidebar item 2</div><div>Sidebar item 3</div></div>',default:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim eleifend condimentum.
  Vestibulum euismod leo at finibus mattis. Integer ut dui id ligula tincidunt pellentesque. Vestibulum a ullamcorper
  risus. Ut tristique sapien eget magna lacinia, non interdum lacus malesuada. Proin augue lacus, finibus eget aliquam
  eu, efficitur sit amet magna. Suspendisse a nunc volutpat, maximus enim vitae, pretium dui. Suspendisse pretium
  faucibus posuere. Aenean consequat imperdiet laoreet. Pellentesque habitant morbi tristique senectus et netus et
  malesuada fames ac turpis egestas. Aliquam elit lacus, venenatis ac risus at, ullamcorper tempor tortor. Ut sed
  pulvinar mi, vitae vehicula odio. Fusce ornare vestibulum rhoncus. In vel ante arcu. Nunc pharetra libero non
  enim dapibus efficitur. Suspendisse dolor ante, pulvinar et faucibus quis, condimentum at dui.`},g={default:{control:"text",description:"Slot for main content",table:{type:{summary:"VNode"}}},header:{description:"Slot for header content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},sidebar:{description:"Slot for sidebar content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},footer:{description:"Slot for footer content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},sidebarPosition:{options:Object.values(D),control:{type:"select"}},responsiveBreakpoint:{defaultValue:null,control:{type:"select",options:k}}},V={title:"Components/Root Layout",component:b,args:l,argTypes:g,excludeStories:/.*Data$/},v=e=>$(e,R),o={render:v,args:{default:l.default.repeat(40)}},r={render:v,args:{headerSticky:!0,fixed:!1,default:l.default.repeat(40)}};var u,c,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: argsData.default.repeat(40)
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,f,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    headerSticky: true,
    fixed: false,
    default: argsData.default.repeat(40)
  }
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const N=["argsData","argTypesData","Default","StickyHeader"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:o,StickyHeader:r,__namedExportsOrder:N,argTypesData:g,argsData:l,default:V},Symbol.toStringTag,{value:"Module"}));export{o as D,F as R,r as S};
//# sourceMappingURL=root_layout.stories-5cbacad6.js.map
