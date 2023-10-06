import{h as b}from"./storybook_utils-52560a53.js";import{D as p,R as _,a as g}from"./root_layout-22cd5d8f.js";import{n as v}from"./_plugin-vue2_normalizer-2bbd088e.js";const S={name:"DtRootLayoutDefault",components:{DtRootLayout:p}};var h=function(){var e=this,t=e._self._c;return t("dt-root-layout",{attrs:{"body-class":e.bodyClass,"header-class":e.headerClass,"header-sticky":e.headerSticky,"content-class":e.contentClass,"sidebar-class":e.sidebarClass,"sidebar-position":e.sidebarPosition,"footer-class":e.footerClass,fixed:e.fixed,"responsive-breakpoint":e.responsiveBreakpoint},scopedSlots:e._u([{key:"header",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.header)}})]},proxy:!0},{key:"sidebar",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.sidebar)}})]},proxy:!0},{key:"footer",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.footer)}})]},proxy:!0}])},[t("span",{domProps:{innerHTML:e._s(e.defaultSlot)}})])},D=[],m=v(S,h,D,!1,null,null,null,null);const T=m.exports;m.exports.__docgenInfo={displayName:"DtRootLayoutDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/root_layout/root_layout_default.story.vue"]};const r={sidebarPosition:"left",header:'<div class="d-bgc-purple-200 d-h64 d-h100p">Header</div>',footer:'<div class="d-bgc-gold-200 d-h64 d-h100p">Footer</div>',sidebar:'<div class="d-bgc-black-200 d-h100p d-w264"><div>Sidebar item 1</div><div>Sidebar item 2</div><div>Sidebar item 3</div></div>',default:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim eleifend condimentum.
  Vestibulum euismod leo at finibus mattis. Integer ut dui id ligula tincidunt pellentesque. Vestibulum a ullamcorper
  risus. Ut tristique sapien eget magna lacinia, non interdum lacus malesuada. Proin augue lacus, finibus eget aliquam
  eu, efficitur sit amet magna. Suspendisse a nunc volutpat, maximus enim vitae, pretium dui. Suspendisse pretium
  faucibus posuere. Aenean consequat imperdiet laoreet. Pellentesque habitant morbi tristique senectus et netus et
  malesuada fames ac turpis egestas. Aliquam elit lacus, venenatis ac risus at, ullamcorper tempor tortor. Ut sed
  pulvinar mi, vitae vehicula odio. Fusce ornare vestibulum rhoncus. In vel ante arcu. Nunc pharetra libero non
  enim dapibus efficitur. Suspendisse dolor ante, pulvinar et faucibus quis, condimentum at dui.`},f={default:{control:"text",table:{type:{summary:"VNode"}}},header:{control:"text",table:{category:"slots",type:{summary:"VNode"}}},sidebar:{control:"text",table:{category:"slots",type:{summary:"VNode"}}},footer:{control:"text",table:{category:"slots",type:{summary:"VNode"}}},sidebarPosition:{options:Object.values(_),control:{type:"select"}},responsiveBreakpoint:{defaultValue:null,control:{type:"select",options:g}}},x={title:"Components/Root Layout",component:p,args:r,argTypes:f,excludeStories:/.*Data$/},y=(o,{argTypes:e})=>b(o,e,T),a={render:y,args:{default:r.default.repeat(40)}},s={render:y,args:{headerSticky:!0,fixed:!1,default:r.default.repeat(40)}};var n,i,u;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: argsData.default.repeat(40)
  }
}`,...(u=(i=a.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var l,d,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    headerSticky: true,
    fixed: false,
    default: argsData.default.repeat(40)
  }
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const k=["argsData","argTypesData","Default","StickyHeader"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:a,StickyHeader:s,__namedExportsOrder:k,argTypesData:f,argsData:r,default:x},Symbol.toStringTag,{value:"Module"}));export{a as D,P as R,s as S};
//# sourceMappingURL=root_layout.stories-df89b433.js.map
