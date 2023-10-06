import{c as v}from"./storybook_utils-bfe77239.js";import{D as f,R as S,a as _}from"./root_layout-e3807098.js";import{V as D}from"./v_html-8d884daa.js";import{u as l,o as $,b as k,w as o,y as r}from"./vue.esm-bundler-3a08a304.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";const b={name:"DtRootLayoutDefault",components:{DtRootLayout:f,VHtml:D}};function O(e,q,L,P,C,I){const s=l("v-html"),h=l("dt-root-layout");return $(),k(h,{"body-class":e.$attrs.bodyClass,"header-class":e.$attrs.headerClass,"header-sticky":e.$attrs.headerSticky,"content-class":e.$attrs.contentClass,"sidebar-class":e.$attrs.sidebarClass,"sidebar-position":e.$attrs.sidebarPosition,"footer-class":e.$attrs.footerClass,fixed:e.$attrs.fixed,"responsive-breakpoint":e.$attrs.responsiveBreakpoint},{header:o(()=>[r(s,{html:e.$attrs.header},null,8,["html"])]),sidebar:o(()=>[r(s,{html:e.$attrs.sidebar},null,8,["html"])]),footer:o(()=>[r(s,{html:e.$attrs.footer},null,8,["html"])]),default:o(()=>[r(s,{html:e.$attrs.default},null,8,["html"])]),_:1},8,["body-class","header-class","header-sticky","content-class","sidebar-class","sidebar-position","footer-class","fixed","responsive-breakpoint"])}const R=T(b,[["render",O]]);b.__docgenInfo={displayName:"DtRootLayoutDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/root_layout/root_layout_default.story.vue"]};const i={sidebarPosition:"left",header:'<div class="d-bgc-purple-200 d-h64 d-h100p">Header</div>',footer:'<div class="d-bgc-gold-200 d-h64 d-h100p">Footer</div>',sidebar:'<div class="d-bgc-black-200 d-h100p d-w264"><div>Sidebar item 1</div><div>Sidebar item 2</div><div>Sidebar item 3</div></div>',default:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim eleifend condimentum.
  Vestibulum euismod leo at finibus mattis. Integer ut dui id ligula tincidunt pellentesque. Vestibulum a ullamcorper
  risus. Ut tristique sapien eget magna lacinia, non interdum lacus malesuada. Proin augue lacus, finibus eget aliquam
  eu, efficitur sit amet magna. Suspendisse a nunc volutpat, maximus enim vitae, pretium dui. Suspendisse pretium
  faucibus posuere. Aenean consequat imperdiet laoreet. Pellentesque habitant morbi tristique senectus et netus et
  malesuada fames ac turpis egestas. Aliquam elit lacus, venenatis ac risus at, ullamcorper tempor tortor. Ut sed
  pulvinar mi, vitae vehicula odio. Fusce ornare vestibulum rhoncus. In vel ante arcu. Nunc pharetra libero non
  enim dapibus efficitur. Suspendisse dolor ante, pulvinar et faucibus quis, condimentum at dui.`},y={default:{control:"text",table:{type:{summary:"VNode"}}},header:{control:"text",table:{category:"slots",type:{summary:"VNode"}}},sidebar:{control:"text",table:{category:"slots",type:{summary:"VNode"}}},footer:{control:"text",table:{category:"slots",type:{summary:"VNode"}}},sidebarPosition:{options:Object.values(S),control:{type:"select"}},responsiveBreakpoint:{defaultValue:null,control:{type:"select",options:_}}},V={title:"Components/Root Layout",component:f,args:i,argTypes:y,excludeStories:/.*Data$/},g=e=>v(e,R),t={render:g,args:{default:i.default.repeat(40)}},a={render:g,args:{headerSticky:!0,fixed:!1,default:i.default.repeat(40)}};var n,u,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: argsData.default.repeat(40)
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var c,m,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    headerSticky: true,
    fixed: false,
    default: argsData.default.repeat(40)
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const N=["argsData","argTypesData","Default","StickyHeader"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:t,StickyHeader:a,__namedExportsOrder:N,argTypesData:y,argsData:i,default:V},Symbol.toStringTag,{value:"Module"}));export{t as D,x as R,a as S};
//# sourceMappingURL=root_layout.stories-0e55473e.js.map
