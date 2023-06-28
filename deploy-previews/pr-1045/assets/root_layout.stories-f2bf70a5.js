import{c as N}from"./storybook_utils-a3173d9b.js";import{h as A}from"./utils-b704f328.js";import{o,f as l,n as d,x as p,k as a,l as n,a as y,d as q,z as L,w as i,b as u}from"./vue.esm-bundler-3bf5edd9.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import{V as W}from"./v_html-1a5864b4.js";const g={LEFT:"left",RIGHT:"right"},O=["sm","md","lg",null],$={name:"DtRootLayoutBody",props:{bodyClass:{type:[String,Array,Object],default:void 0},contentClass:{type:[String,Array,Object],default:void 0},sidebarClass:{type:[String,Array,Object],default:void 0},sidebarWidth:{type:String,default:void 0},fixed:{type:Boolean,default:void 0},sidebarPosition:{type:String,default:void 0}},data(){return{hasSlotContent:A}},computed:{bodyClasses(){return[this.bodyClass,{"d-root-layout__body--invert":this.sidebarPosition===g.RIGHT}]}}};function I(e,v,t,S,s,m){return o(),l("div",{ref:"root-layout-body",class:d(["d-root-layout__body",m.bodyClasses]),"data-qa":"dt-root-layout-body"},[s.hasSlotContent(e.$slots.sidebar)?(o(),l("aside",{key:0,ref:"root-layout-sidebar",class:d(["d-root-layout__sidebar",{"d-root-layout__sidebar--sticky":t.fixed},t.sidebarClass]),style:p({"flex-basis":t.sidebarWidth}),"data-qa":"dt-root-layout-sidebar"},[a(" @slot Slot for the sidebar "),n(e.$slots,"sidebar")],6)):a("v-if",!0),s.hasSlotContent(e.$slots.content)?(o(),l("main",{key:1,ref:"root-layout-content",class:d(["d-root-layout__content",t.contentClass]),"data-qa":"dt-root-layout-content",tabindex:"0"},[a(" @slot Slot for the main content "),n(e.$slots,"content")],2)):a("v-if",!0)],2)}const x=b($,[["render",I],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/root_layout/root_layout_body.vue"]]);$.__docgenInfo={displayName:"DtRootLayoutBody",exportName:"default",description:"",tags:{},props:[{name:"bodyClass",description:"Additional class name for the body",type:{name:"string|array|object"},defaultValue:{func:!1,value:"undefined"}},{name:"contentClass",description:"Additional class name for the content element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"undefined"}},{name:"sidebarClass",description:"Additional class name for the sidebar element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"undefined"}},{name:"sidebarWidth",description:`The width of the sidebar
Possible units rem|px|%|em`,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"fixed",description:`When true, the sidebar will be locked in position and the content will
be scrollable. When false the sidebar will scroll out of view.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"sidebarPosition",description:`Whether the sidebar is on the left or right side
Possible options: 'left', 'right'`,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],slots:[{name:"sidebar",description:"Slot for the sidebar"},{name:"content",description:"Slot for the main content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/root_layout/root_layout_body.vue"]};const P={name:"DtRootLayout",components:{DtRootLayoutBody:x},props:{fixed:{type:Boolean,default:!0},headerClass:{type:[String,Array,Object],default:""},headerHeight:{type:String,default:"64px"},headerSticky:{type:Boolean,default:!1},bodyClass:{type:[String,Array,Object],default:""},contentClass:{type:[String,Array,Object],default:""},sidebarClass:{type:[String,Array,Object],default:""},sidebarWidth:{type:String,default:"256px"},sidebarPosition:{type:String,default:"left",validator:e=>Object.values(g).includes(e)},footerClass:{type:[String,Array,Object],default:""},footerHeight:{type:String,default:"64px"},responsiveBreakpoint:{type:String,default:null,validator:e=>O.includes(e)}},data(){return{hasSlotContent:A}},computed:{responsiveClass(){if(this.responsiveBreakpoint)return`d-root-layout__responsive--${this.responsiveBreakpoint}`}}};function F(e,v,t,S,s,m){const r=y("dt-root-layout-body");return o(),l("div",{class:d(["root-layout d-root-layout",{"d-root-layout--fixed":t.fixed},m.responsiveClass]),"data-qa":"dt-root-layout"},[s.hasSlotContent(e.$slots.header)?(o(),l("header",{key:0,class:d(["d-root-layout__header",{"d-root-layout__header--sticky":t.headerSticky},t.headerClass]),style:p({height:t.headerHeight,"min-height":t.headerHeight}),"data-qa":"dt-root-layout-header"},[a(" @slot Slot for header content "),n(e.$slots,"header")],6)):a("v-if",!0),q(r,{"body-class":t.bodyClass,"content-class":t.contentClass,"sidebar-class":t.sidebarClass,"sidebar-width":t.sidebarWidth,"sidebar-position":t.sidebarPosition,"header-height":s.hasSlotContent(e.$slots.header)?t.headerHeight:"0px","footer-height":s.hasSlotContent(e.$slots.footer)?t.footerHeight:"0px",fixed:t.fixed},L({_:2},[s.hasSlotContent(e.$slots.sidebar)?{name:"sidebar",fn:i(()=>[a(" @slot Slot for the sidebar "),n(e.$slots,"sidebar")]),key:"0"}:void 0,s.hasSlotContent(e.$slots.default)?{name:"content",fn:i(()=>[a(" @slot Slot for main content "),n(e.$slots,"default")]),key:"1"}:void 0]),1032,["body-class","content-class","sidebar-class","sidebar-width","sidebar-position","header-height","footer-height","fixed"]),s.hasSlotContent(e.$slots.footer)?(o(),l("footer",{key:1,class:d(["d-root-layout__footer",t.footerClass]),style:p({height:t.footerHeight,"min-height":t.footerHeight}),"data-qa":"dt-root-layout-footer"},[a(" @slot Slot for footer content "),n(e.$slots,"footer")],6)):a("v-if",!0)],2)}const T=b(P,[["render",F],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/root_layout/root_layout.vue"]]);P.__docgenInfo={displayName:"DtRootLayout",description:"A root layout provides a standardized group of containers to display content at the root level.",tags:{},exportName:"default",props:[{name:"fixed",description:`When true, the header, footer and sidebar will be locked in position and the content will
be scrollable. When false the header, footer and sidebar  will scroll out of view.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"headerClass",description:"Additional class name for the header element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"headerHeight",description:`The height of the header
Possible units rem|px|%|em`,type:{name:"string"},defaultValue:{func:!1,value:"'64px'"}},{name:"headerSticky",description:"Scroll the header with the page",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"bodyClass",description:"Additional class name for the body",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"contentClass",description:"Additional class name for the content element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"sidebarClass",description:"Additional class name for the sidebar element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"sidebarWidth",description:`The width of the sidebar
Possible units rem|px|%|em`,type:{name:"string"},defaultValue:{func:!1,value:"'256px'"}},{name:"sidebarPosition",description:`Whether the sidebar is on the left or right side
Possible options: 'left', 'right'`,tags:{},values:["left","right"],type:{name:"string"},defaultValue:{func:!1,value:"'left'"}},{name:"footerClass",description:"Additional class name for the footer element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"footerHeight",description:`The height of the footer
Possible units rem|px|%|em`,type:{name:"string"},defaultValue:{func:!1,value:"'64px'"}},{name:"responsiveBreakpoint",description:"Defines the breakpoint when the root layout will change to responsive version",tags:{},values:["'sm'","'md'","'lg'","null"],type:{name:"string"},defaultValue:{func:!1,value:"null"}}],slots:[{name:"header",description:"Slot for header content"},{name:"sidebar",description:"Slot for the sidebar"},{name:"default",description:"Slot for main content"},{name:"footer",description:"Slot for footer content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/root_layout/root_layout.vue"]};const j={name:"DtRootLayoutDefault",components:{DtRootLayout:T,VHtml:W}};function E(e,v,t,S,s,m){const r=y("v-html"),B=y("dt-root-layout");return o(),u(B,{"body-class":e.$attrs.bodyClass,"header-class":e.$attrs.headerClass,"header-sticky":e.$attrs.headerSticky,"header-height":e.$attrs.headerHeight,"content-class":e.$attrs.contentClass,"content-wrap-width-percent":e.$attrs.contentWrapWidthPercent,"sidebar-class":e.$attrs.sidebarClass,"sidebar-position":e.$attrs.sidebarPosition,"sidebar-width":e.$attrs.sidebarWidth,"footer-class":e.$attrs.footerClass,"footer-height":e.$attrs.footerHeight,fixed:e.$attrs.fixed,"responsive-breakpoint":e.$attrs.responsiveBreakpoint},{header:i(()=>[e.$attrs.header?(o(),u(r,{key:0,html:e.$attrs.header},null,8,["html"])):a("v-if",!0)]),sidebar:i(()=>[e.$attrs.sidebar?(o(),u(r,{key:0,html:e.$attrs.sidebar},null,8,["html"])):a("v-if",!0)]),footer:i(()=>[e.$attrs.footer?(o(),u(r,{key:0,html:e.$attrs.footer},null,8,["html"])):a("v-if",!0)]),default:i(()=>[e.$attrs.default?(o(),u(r,{key:0,html:e.$attrs.default},null,8,["html"])):a("v-if",!0)]),_:1},8,["body-class","header-class","header-sticky","header-height","content-class","content-wrap-width-percent","sidebar-class","sidebar-position","sidebar-width","footer-class","footer-height","fixed","responsive-breakpoint"])}const z=b(j,[["render",E],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/root_layout/root_layout_default.story.vue"]]);j.__docgenInfo={displayName:"DtRootLayoutDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/root_layout/root_layout_default.story.vue"]};const h={sidebarPosition:"left",header:'<div class="d-bgc-purple-200 d-h100p">Header</div>',footer:'<div class="d-bgc-gold-200 d-h100p">Footer</div>',sidebar:'<div class="d-bgc-black-200 d-hmn100p"><div>Sidebar item 1</div><div>Sidebar item 2</div><div>Sidebar item 3</div></div>',default:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim eleifend condimentum.
  Vestibulum euismod leo at finibus mattis. Integer ut dui id ligula tincidunt pellentesque. Vestibulum a ullamcorper
  risus. Ut tristique sapien eget magna lacinia, non interdum lacus malesuada. Proin augue lacus, finibus eget aliquam
  eu, efficitur sit amet magna. Suspendisse a nunc volutpat, maximus enim vitae, pretium dui. Suspendisse pretium
  faucibus posuere. Aenean consequat imperdiet laoreet. Pellentesque habitant morbi tristique senectus et netus et
  malesuada fames ac turpis egestas. Aliquam elit lacus, venenatis ac risus at, ullamcorper tempor tortor. Ut sed
  pulvinar mi, vitae vehicula odio. Fusce ornare vestibulum rhoncus. In vel ante arcu. Nunc pharetra libero non
  enim dapibus efficitur. Suspendisse dolor ante, pulvinar et faucibus quis, condimentum at dui.`},R={default:{control:"text",description:"Slot for main content",table:{type:{summary:"VNode"}}},header:{description:"Slot for header content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},sidebar:{description:"Slot for sidebar content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},footer:{description:"Slot for footer content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},sidebarPosition:{options:Object.values(g),control:{type:"select"}},responsiveBreakpoint:{defaultValue:null,control:{type:"select",options:O}}},U={title:"Components/Root Layout",component:T,args:h,argTypes:R,excludeStories:/.*Data$/},H=e=>N(e,z),f={render:H,args:{default:h.default.repeat(40)}},c={render:H,args:{headerSticky:!0,fixed:!1,default:h.default.repeat(40)}};var _,C,k;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: argsData.default.repeat(40)
  }
}`,...(k=(C=f.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var V,w,D;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    headerSticky: true,
    fixed: false,
    default: argsData.default.repeat(40)
  }
}`,...(D=(w=c.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const G=["argsData","argTypesData","Default","StickyHeader"],X=Object.freeze(Object.defineProperty({__proto__:null,Default:f,StickyHeader:c,__namedExportsOrder:G,argTypesData:R,argsData:h,default:U},Symbol.toStringTag,{value:"Module"}));export{f as D,X as R,c as S};
//# sourceMappingURL=root_layout.stories-f2bf70a5.js.map
