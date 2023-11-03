import{c as y}from"./storybook_utils-996a989f.js";import{D as n,R as h,a as S}from"./root_layout-18867e78.js";import{h as k}from"./utils-6183f965.js";import{n as _}from"./_plugin-vue2_normalizer-2bbd088e.js";const $={name:"DtRootLayoutDefault",components:{DtRootLayout:n,htmlFragment:k}};var b=function(){var e=this,t=e._self._c;return t("dt-root-layout",{attrs:{"header-class":e.$attrs.headerClass,"header-sticky":e.$attrs.headerSticky,"content-class":e.$attrs.contentClass,"sidebar-class":e.$attrs.sidebarClass,"sidebar-position":e.$attrs.sidebarPosition,"footer-class":e.$attrs.footerClass,fixed:e.$attrs.fixed,"responsive-breakpoint":e.$attrs.responsiveBreakpoint},scopedSlots:e._u([{key:"header",fn:function(){return[t("html-fragment",{attrs:{html:e.$attrs.header}})]},proxy:!0},{key:"sidebar",fn:function(){return[t("html-fragment",{attrs:{html:e.$attrs.sidebar}})]},proxy:!0},{key:"footer",fn:function(){return[t("html-fragment",{attrs:{html:e.$attrs.footer}})]},proxy:!0}])},[t("html-fragment",{attrs:{html:e.$attrs.default}})],1)},x=[];b._withStripped=!0;var i=_($,b,x,!1,null,null,null,null);i.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/root_layout/root_layout_default.story.vue";const D=i.exports;i.exports.__docgenInfo={displayName:"DtRootLayoutDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/root_layout/root_layout_default.story.vue"]};const T={name:"DtRootLayoutSticky",components:{DtRootLayout:n}};var v=function(){var e=this,t=e._self._c;return t("dt-root-layout",{attrs:{"header-class":e.$attrs.headerClass,"header-sticky":e.$attrs.headerSticky,"content-class":e.$attrs.contentClass,"sidebar-class":e.$attrs.sidebarClass,"sidebar-position":e.$attrs.sidebarPosition,"footer-class":e.$attrs.footerClass,fixed:e.$attrs.fixed,"responsive-breakpoint":e.$attrs.responsiveBreakpoint},scopedSlots:e._u([{key:"header",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.$attrs.header)}})]},proxy:!0},{key:"sidebar",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.$attrs.sidebar)}})]},proxy:!0},{key:"footer",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.$attrs.footer)}})]},proxy:!0}])},[t("span",{domProps:{innerHTML:e._s(e.$attrs.default)}})])},R=[];v._withStripped=!0;var l=_(T,v,R,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/root_layout/root_layout_sticky.story.vue";const L=l.exports;l.exports.__docgenInfo={displayName:"DtRootLayoutSticky",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/root_layout/root_layout_sticky.story.vue"]};const O="<div>Sidebar item</div>".repeat(45),s={sidebarPosition:"left",header:'<div class="d-h64">Header</div>',headerClass:"d-bgc-purple-200",footer:'<div class="d-h64">Footer</div>',footerClass:"d-bgc-gold-200",sidebar:`<div class="d-w264">${O}</div>`,sidebarClass:"d-bgc-black-200",default:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim eleifend condimentum.
  Vestibulum euismod leo at finibus mattis. Integer ut dui id ligula tincidunt pellentesque. Vestibulum a ullamcorper
  risus. Ut tristique sapien eget magna lacinia, non interdum lacus malesuada. Proin augue lacus, finibus eget aliquam
  eu, efficitur sit amet magna. Suspendisse a nunc volutpat, maximus enim vitae, pretium dui. Suspendisse pretium
  faucibus posuere. Aenean consequat imperdiet laoreet. Pellentesque habitant morbi tristique senectus et netus et
  malesuada fames ac turpis egestas. Aliquam elit lacus, venenatis ac risus at, ullamcorper tempor tortor. Ut sed
  pulvinar mi, vitae vehicula odio. Fusce ornare vestibulum rhoncus. In vel ante arcu. Nunc pharetra libero non
  enim dapibus efficitur. Suspendisse dolor ante, pulvinar et faucibus quis, condimentum at dui.`},g={default:{control:"text",table:{type:{summary:"VNode"}}},header:{control:"text",table:{category:"slots",type:{summary:"VNode"}}},sidebar:{control:"text",table:{category:"slots",type:{summary:"VNode"}}},footer:{control:"text",table:{category:"slots",type:{summary:"VNode"}}},sidebarPosition:{options:Object.values(h),control:{type:"select"}},responsiveBreakpoint:{defaultValue:null,options:S,control:{type:"select"}},headerSticky:{control:"boolean"},fixed:{control:"boolean"}},P={title:"Components/Root Layout",component:n,args:s,argTypes:g,excludeStories:/.*Data$/,parameters:{layout:"fullscreen"}},C=(a,{argTypes:e})=>y(a,e,D),N=(a,{argTypes:e})=>y(a,e,L),r={render:C,args:{default:s.default.repeat(40)}},o={render:N,args:{headerSticky:!0,fixed:!1,default:s.default.repeat(40)}};var u,d,c;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: argsData.default.repeat(40)
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,m,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: StickyTemplate,
  args: {
    headerSticky: true,
    fixed: false,
    default: argsData.default.repeat(40)
  }
}`,...(f=(m=o.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const I=["argsData","argTypesData","Default","StickyHeader"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:r,StickyHeader:o,__namedExportsOrder:I,argTypesData:g,argsData:s,default:P},Symbol.toStringTag,{value:"Module"}));export{r as D,A as R,o as S};
//# sourceMappingURL=root_layout.stories-cb657c4c.js.map
