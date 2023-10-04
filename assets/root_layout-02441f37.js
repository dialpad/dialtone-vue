import{n as r}from"./_plugin-vue2_normalizer-2bbd088e.js";const o={LEFT:"left",RIGHT:"right"},n=["sm","md","lg",null],l={name:"DtRootLayout",props:{fixed:{type:Boolean,default:!0},headerClass:{type:[String,Array,Object],default:""},headerHeight:{type:String,default:"64px"},bodyClass:{type:[String,Array,Object],default:""},headerSticky:{type:Boolean,default:!1},contentClass:{type:[String,Array,Object],default:""},sidebarClass:{type:[String,Array,Object],default:""},sidebarWidth:{type:String,default:"256px"},sidebarPosition:{type:String,default:"left",validator:a=>Object.values(o).includes(a)},footerClass:{type:[String,Array,Object],default:""},footerHeight:{type:String,default:"64px"},responsiveBreakpoint:{type:String,default:null,validator:a=>n.includes(a)}},computed:{responsiveClass(){if(this.responsiveBreakpoint)return`d-root-layout__responsive--${this.responsiveBreakpoint}`},bodyClasses(){return[this.bodyClass,{"d-root-layout__body--invert":this.sidebarPosition===o.RIGHT}]}}};var i=function(){var e=this,t=e._self._c;return t("div",{class:["root-layout d-root-layout",{"d-root-layout--fixed":e.fixed},e.responsiveClass],attrs:{"data-qa":"dt-root-layout"}},[t("header",{class:["d-root-layout__header",{"d-root-layout__header--sticky":e.headerSticky},e.headerClass],attrs:{"data-qa":"dt-root-layout-header"}},[e._t("header")],2),t("div",{ref:"root-layout-body",class:["d-root-layout__body",e.bodyClasses],attrs:{"data-qa":"dt-root-layout-body"}},[t("aside",{ref:"root-layout-sidebar",class:["d-root-layout__sidebar",{"d-root-layout__sidebar--sticky":e.fixed},e.sidebarClass],style:{"flex-basis":e.sidebarWidth},attrs:{"data-qa":"dt-root-layout-sidebar"}},[e._t("sidebar")],2),t("main",{ref:"root-layout-content",class:["d-root-layout__content",e.contentClass],attrs:{"data-qa":"dt-root-layout-content",tabindex:"0"}},[e._t("default")],2)]),t("footer",{class:["d-root-layout__footer",e.footerClass],attrs:{"data-qa":"dt-root-layout-footer"}},[e._t("footer")],2)])},d=[],s=r(l,i,d,!1,null,null,null,null);const f=s.exports;s.exports.__docgenInfo={displayName:"DtRootLayout",description:"A root layout provides a standardized group of containers to display content at the root level.",tags:{},exportName:"default",props:[{name:"fixed",description:`When true, the header, footer and sidebar will be locked in position and the content will
be scrollable. When false the header, footer and sidebar  will scroll out of view.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"headerClass",description:"Additional class name for the header element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"headerHeight",description:"DEPRECATED: set the height of the inner element instead.",type:{name:"string"},defaultValue:{func:!1,value:"'64px'"}},{name:"bodyClass",description:"Additional class name for the body",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"headerSticky",description:"Scroll the header with the page",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"contentClass",description:"Additional class name for the content element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"sidebarClass",description:"Additional class name for the sidebar element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"sidebarWidth",description:`The width of the sidebar
Possible units rem|px|%|em`,type:{name:"string"},defaultValue:{func:!1,value:"'256px'"}},{name:"sidebarPosition",description:`Whether the sidebar is on the left or right side
Possible options: 'left', 'right'`,tags:{},values:["left","right"],type:{name:"string"},defaultValue:{func:!1,value:"'left'"}},{name:"footerClass",description:"Additional class name for the footer element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"footerHeight",description:"DEPRECATED: set the height of the inner element instead.",type:{name:"string"},defaultValue:{func:!1,value:"'64px'"}},{name:"responsiveBreakpoint",description:"Defines the breakpoint when the root layout will change to responsive version",tags:{},values:["'sm'","'md'","'lg'","null"],type:{name:"string"},defaultValue:{func:!1,value:"null"}}],slots:[{name:"header",description:"Slot for header content be sure to set a height on the element inside this"},{name:"sidebar",description:"Slot for the sidebar"},{name:"default",description:"Slot for the main content"},{name:"footer",description:"Slot for footer content be sure to set a height on the element inside this"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/root_layout/root_layout.vue"]};export{f as D,o as R,n as a};
//# sourceMappingURL=root_layout-02441f37.js.map
