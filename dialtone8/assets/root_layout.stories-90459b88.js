import{c as S}from"./storybook_utils-5c71a000.js";import{n}from"./_plugin-vue2_normalizer-2bbd088e.js";const i={LEFT:"left",RIGHT:"right"},m=["sm","md","lg",null],x={name:"DtRootLayoutBody",props:{bodyClass:{type:[String,Array,Object],default:void 0},contentClass:{type:[String,Array,Object],default:void 0},sidebarClass:{type:[String,Array,Object],default:void 0},sidebarWidth:{type:String,default:void 0},fixed:{type:Boolean,default:void 0},sidebarPosition:{type:String,default:void 0}},computed:{bodyClasses(){return[this.bodyClass,{"d-root-layout__body--invert":this.sidebarPosition===i.RIGHT}]}}};var C=function(){var e=this,t=e._self._c;return t("div",{ref:"root-layout-body",class:["d-root-layout__body",e.bodyClasses],attrs:{"data-qa":"dt-root-layout-body"}},[e.$slots.sidebar?t("aside",{ref:"root-layout-sidebar",class:["d-root-layout__sidebar",{"d-root-layout__sidebar--sticky":e.fixed},e.sidebarClass],style:{"flex-basis":e.sidebarWidth},attrs:{"data-qa":"dt-root-layout-sidebar"}},[e._t("sidebar")],2):e._e(),e.$slots.content?t("main",{ref:"root-layout-content",class:["d-root-layout__content",e.contentClass],attrs:{"data-qa":"dt-root-layout-content",tabindex:"0"}},[e._t("content")],2):e._e()])},k=[],y=n(x,C,k,!1,null,null,null,null);const D=y.exports;y.exports.__docgenInfo={displayName:"DtRootLayoutBody",exportName:"default",description:"",tags:{},props:[{name:"bodyClass",description:"Additional class name for the body",type:{name:"string|array|object"},defaultValue:{func:!1,value:"undefined"}},{name:"contentClass",description:"Additional class name for the content element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"undefined"}},{name:"sidebarClass",description:"Additional class name for the sidebar element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"undefined"}},{name:"sidebarWidth",description:`The width of the sidebar
Possible units rem|px|%|em`,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"fixed",description:`When true, the sidebar will be locked in position and the content will
be scrollable. When false the sidebar will scroll out of view.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"sidebarPosition",description:`Whether the sidebar is on the left or right side
Possible options: 'left', 'right'`,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],slots:[{name:"sidebar",description:"Slot for the sidebar"},{name:"content",description:"Slot for the main content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/root_layout/root_layout_body.vue"]};const V={name:"DtRootLayout",components:{DtRootLayoutBody:D},props:{fixed:{type:Boolean,default:!0},headerClass:{type:[String,Array,Object],default:""},headerHeight:{type:String,default:"64px"},bodyClass:{type:[String,Array,Object],default:""},headerSticky:{type:Boolean,default:!1},contentClass:{type:[String,Array,Object],default:""},sidebarClass:{type:[String,Array,Object],default:""},sidebarWidth:{type:String,default:"256px"},sidebarPosition:{type:String,default:"left",validator:a=>Object.values(i).includes(a)},footerClass:{type:[String,Array,Object],default:""},footerHeight:{type:String,default:"64px"},responsiveBreakpoint:{type:String,default:null,validator:a=>m.includes(a)}},computed:{responsiveClass(){if(this.responsiveBreakpoint)return`d-root-layout__responsive--${this.responsiveBreakpoint}`}}};var T=function(){var e=this,t=e._self._c;return t("div",{class:["root-layout d-root-layout",{"d-root-layout--fixed":e.fixed},e.responsiveClass],attrs:{"data-qa":"dt-root-layout"}},[e.$slots.header?t("header",{class:["d-root-layout__header",{"d-root-layout__header--sticky":e.headerSticky},e.headerClass],style:{height:e.headerHeight,"min-height":e.headerHeight},attrs:{"data-qa":"dt-root-layout-header"}},[e._t("header")],2):e._e(),t("dt-root-layout-body",{attrs:{"body-class":e.bodyClass,"content-class":e.contentClass,"sidebar-class":e.sidebarClass,"sidebar-width":e.sidebarWidth,"sidebar-position":e.sidebarPosition,"header-height":e.$slots.header?e.headerHeight:"0px","footer-height":e.$slots.footer?e.footerHeight:"0px",fixed:e.fixed},scopedSlots:e._u([e.$slots.sidebar?{key:"sidebar",fn:function(){return[e._t("sidebar")]},proxy:!0}:null,e.$slots.default?{key:"content",fn:function(){return[e._t("default")]},proxy:!0}:null],null,!0)}),e.$slots.footer?t("footer",{class:["d-root-layout__footer",e.footerClass],style:{height:e.footerHeight,"min-height":e.footerHeight},attrs:{"data-qa":"dt-root-layout-footer"}},[e._t("footer")],2):e._e()],1)},P=[],h=n(V,T,P,!1,null,null,null,null);const b=h.exports;h.exports.__docgenInfo={displayName:"DtRootLayout",description:"A root layout provides a standardized group of containers to display content at the root level.",tags:{},exportName:"default",props:[{name:"fixed",description:`When true, the header, footer and sidebar will be locked in position and the content will
be scrollable. When false the header, footer and sidebar  will scroll out of view.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"headerClass",description:"Additional class name for the header element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"headerHeight",description:`The height of the header
Possible units rem|px|%|em`,type:{name:"string"},defaultValue:{func:!1,value:"'64px'"}},{name:"bodyClass",description:"Additional class name for the body",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"headerSticky",description:"Scroll the header with the page",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"contentClass",description:"Additional class name for the content element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"sidebarClass",description:"Additional class name for the sidebar element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"sidebarWidth",description:`The width of the sidebar
Possible units rem|px|%|em`,type:{name:"string"},defaultValue:{func:!1,value:"'256px'"}},{name:"sidebarPosition",description:`Whether the sidebar is on the left or right side
Possible options: 'left', 'right'`,tags:{},values:["left","right"],type:{name:"string"},defaultValue:{func:!1,value:"'left'"}},{name:"footerClass",description:"Additional class name for the footer element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"footerHeight",description:`The height of the footer
Possible units rem|px|%|em`,type:{name:"string"},defaultValue:{func:!1,value:"'64px'"}},{name:"responsiveBreakpoint",description:"Defines the breakpoint when the root layout will change to responsive version",tags:{},values:["'sm'","'md'","'lg'","null"],type:{name:"string"},defaultValue:{func:!1,value:"null"}}],slots:[{name:"header",description:"Slot for header content"},{name:"sidebar",description:"Slot for the sidebar"},{name:"default",description:"Slot for main content"},{name:"footer",description:"Slot for footer content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/root_layout/root_layout.vue"]};const A={name:"DtRootLayoutDefault",components:{DtRootLayout:b}};var O=function(){var e=this,t=e._self._c;return t("dt-root-layout",{attrs:{"body-class":e.bodyClass,"header-class":e.headerClass,"header-sticky":e.headerSticky,"header-height":e.headerHeight,"content-class":e.contentClass,"sidebar-class":e.sidebarClass,"sidebar-position":e.sidebarPosition,"sidebar-width":e.sidebarWidth,"footer-class":e.footerClass,"footer-height":e.footerHeight,fixed:e.fixed,"responsive-breakpoint":e.responsiveBreakpoint},scopedSlots:e._u([e.header?{key:"header",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.header)}})]},proxy:!0}:null,e.sidebar?{key:"sidebar",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.sidebar)}})]},proxy:!0}:null,e.footer?{key:"footer",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.footer)}})]},proxy:!0}:null],null,!0)},[e.defaultSlot?[t("span",{domProps:{innerHTML:e._s(e.defaultSlot)}})]:e._e()],2)},R=[],g=n(A,O,R,!1,null,null,null,null);const H=g.exports;g.exports.__docgenInfo={displayName:"DtRootLayoutDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/root_layout/root_layout_default.story.vue"]};const r={sidebarPosition:"left",header:'<div class="d-bgc-purple-200 d-h100p">Header</div>',footer:'<div class="d-bgc-gold-200 d-h100p">Footer</div>',sidebar:'<div class="d-bgc-black-200 d-hmn100p"><div>Sidebar item 1</div><div>Sidebar item 2</div><div>Sidebar item 3</div></div>',default:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim eleifend condimentum.
  Vestibulum euismod leo at finibus mattis. Integer ut dui id ligula tincidunt pellentesque. Vestibulum a ullamcorper
  risus. Ut tristique sapien eget magna lacinia, non interdum lacus malesuada. Proin augue lacus, finibus eget aliquam
  eu, efficitur sit amet magna. Suspendisse a nunc volutpat, maximus enim vitae, pretium dui. Suspendisse pretium
  faucibus posuere. Aenean consequat imperdiet laoreet. Pellentesque habitant morbi tristique senectus et netus et
  malesuada fames ac turpis egestas. Aliquam elit lacus, venenatis ac risus at, ullamcorper tempor tortor. Ut sed
  pulvinar mi, vitae vehicula odio. Fusce ornare vestibulum rhoncus. In vel ante arcu. Nunc pharetra libero non
  enim dapibus efficitur. Suspendisse dolor ante, pulvinar et faucibus quis, condimentum at dui.`},_={default:{control:"text",description:"Slot for main content",table:{type:{summary:"VNode"}}},header:{description:"Slot for header content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},sidebar:{description:"Slot for sidebar content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},footer:{description:"Slot for footer content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},sidebarPosition:{options:Object.values(i),control:{type:"select"}},responsiveBreakpoint:{defaultValue:null,control:{type:"select",options:m}}},j={title:"Components/Root Layout",component:b,args:r,argTypes:_,excludeStories:/.*Data$/},v=(a,{argTypes:e})=>S(a,e,H),o={render:v,args:{default:r.default.repeat(40)}},s={render:v,args:{headerSticky:!0,fixed:!1,default:r.default.repeat(40)}};var l,d,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: argsData.default.repeat(40)
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var c,f,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    headerSticky: true,
    fixed: false,
    default: argsData.default.repeat(40)
  }
}`,...(p=(f=s.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};const L=["argsData","argTypesData","Default","StickyHeader"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:o,StickyHeader:s,__namedExportsOrder:L,argTypesData:_,argsData:r,default:j},Symbol.toStringTag,{value:"Module"}));export{o as D,q as R,s as S};
//# sourceMappingURL=root_layout.stories-90459b88.js.map
