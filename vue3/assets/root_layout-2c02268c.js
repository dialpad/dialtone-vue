import{p as i,e as o,f as n,k as a,o as d}from"./vue.esm-bundler-3a08a304.js";import{_ as u}from"./_plugin-vue_export-helper-c27b6911.js";const s={LEFT:"left",RIGHT:"right"},f=["sm","md","lg",null];const r={name:"DtRootLayout",props:{fixed:{type:Boolean,default:!0},headerClass:{type:[String,Array,Object],default:""},headerHeight:{type:String,default:"64px"},headerSticky:{type:Boolean,default:!1},bodyClass:{type:[String,Array,Object],default:""},contentClass:{type:[String,Array,Object],default:""},sidebarClass:{type:[String,Array,Object],default:""},sidebarWidth:{type:String,default:"256px"},sidebarPosition:{type:String,default:"left",validator:e=>Object.values(s).includes(e)},footerClass:{type:[String,Array,Object],default:""},footerHeight:{type:String,default:"64px"},responsiveBreakpoint:{type:String,default:null,validator:e=>f.includes(e)}},computed:{isInverted(){return this.sidebarPosition===s.RIGHT}}};function c(e,h,t,y,p,l){return d(),i("div",{class:a(["root-layout","d-root-layout",{"d-root-layout--fixed":t.fixed,"d-root-layout--inverted":l.isInverted,[`d-root-layout__responsive--${t.responsiveBreakpoint}`]:!!t.responsiveBreakpoint}]),"data-qa":"dt-root-layout"},[o("header",{class:a(["d-root-layout__header",{"d-root-layout__header--sticky":t.headerSticky},t.headerClass]),"data-qa":"dt-root-layout-header"},[n(e.$slots,"header")],2),o("aside",{ref:"root-layout-sidebar",class:a(["d-root-layout__sidebar",t.sidebarClass]),"data-qa":"dt-root-layout-sidebar"},[n(e.$slots,"sidebar")],2),o("main",{ref:"root-layout-content",class:a(["d-root-layout__content",t.contentClass]),"data-qa":"dt-root-layout-content",tabindex:"0"},[n(e.$slots,"default")],2),o("footer",{class:a(["d-root-layout__footer",t.footerClass]),"data-qa":"dt-root-layout-footer"},[n(e.$slots,"footer")],2)],2)}const b=u(r,[["render",c]]);r.__docgenInfo={displayName:"DtRootLayout",description:"A root layout provides a standardized group of containers to display content at the root level.",tags:{},exportName:"default",props:[{name:"fixed",description:`When true, the header, footer and sidebar will be locked in position and the content will
be scrollable. When false the header, footer and sidebar  will scroll out of view.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"headerClass",description:"Additional class name for the header element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"headerHeight",description:"DEPRECATED: set the height of the inner element instead.",type:{name:"string"},defaultValue:{func:!1,value:"'64px'"}},{name:"headerSticky",description:"Scroll the header with the page",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"bodyClass",description:"Additional class name for the body",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"contentClass",description:"Additional class name for the content element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"sidebarClass",description:"Additional class name for the sidebar element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"sidebarWidth",description:"DEPRECATED: set the min-width of the inner element instead.",type:{name:"string"},defaultValue:{func:!1,value:"'256px'"}},{name:"sidebarPosition",description:`Whether the sidebar is on the left or right side
Possible options: 'left', 'right'`,tags:{},values:["left","right"],type:{name:"string"},defaultValue:{func:!1,value:"'left'"}},{name:"footerClass",description:"Additional class name for the footer element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"footerHeight",description:"DEPRECATED: set the height of the inner element instead.",type:{name:"string"},defaultValue:{func:!1,value:"'64px'"}},{name:"responsiveBreakpoint",description:"Defines the breakpoint when the root layout will change to responsive version",tags:{},values:["'sm'","'md'","'lg'","null"],type:{name:"string"},defaultValue:{func:!1,value:"null"}}],slots:[{name:"header",description:"Slot for header content, be sure to set a height on the element inside this"},{name:"sidebar",description:"Slot for sidebar content, be sure to set a width on the element within this."},{name:"default",description:"Slot for the main content"},{name:"footer",description:"Slot for footer content, be sure to set a height on the element inside this"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/root_layout/root_layout.vue"]};export{b as D,s as R,f as a};
//# sourceMappingURL=root_layout-2c02268c.js.map
