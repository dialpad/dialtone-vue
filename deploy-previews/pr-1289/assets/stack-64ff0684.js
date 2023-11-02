import{D as n,a as u,b as s}from"./stack_constants-4f71ebff.js";import{n as f}from"./_plugin-vue2_normalizer-2bbd088e.js";function l(e){return e===n.default}function i(e){if(a(e)==="string")return l(e)?null:n[e];if(a(e)==="object"){const{default:t}=e;return l(t)?null:n[t]}else return null}function a(e){return typeof e}function d(e){return i(e)?`d-stack--${n[i(e)]}`:null}function p(e){return a(e)==="object"?[...u.map(t=>e[t]?`d-stack--${t}--${e[t]}`:null)]:null}function m(e){return s.includes(e)?`d-stack--gap-${e}`:null}function _(e){if(a(e)==="string")return Object.keys(n).includes(e);if(a(e)==="object"){const{default:t}=e;return Object.keys(n).includes(t)}else return null}function v(e){return s.includes(e)}const h={name:"DtStack",props:{direction:{type:[String,Object],default:"column",validator:e=>_(e)},as:{type:String,default:"div"},gap:{type:String,default:"0",validator:e=>v(e)}},data(){return{DT_STACK_DIRECTION:n,DT_STACK_GAP:s,DT_STACK_RESPONSIVE_BREAKPOINTS:u}},computed:{stackGap(){return m(this.gap)},defaultDirection(){return d(this.direction)},stackResponsive(){return p(this.direction)}}};var o=function(){var t=this,c=t._self._c;return c(t.as,{tag:"component",class:["d-stack",t.defaultDirection,t.stackResponsive,t.stackGap]},[t._t("default")],2)},k=[];o._withStripped=!0;var r=f(h,o,k,!1,null,null,null,null);r.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/stack/stack.vue";const y=r.exports;r.exports.__docgenInfo={displayName:"DtStack",exportName:"default",description:"",tags:{},props:[{name:"direction",description:`Set this prop to the direction to stack the items.
You can override the default direction with 'default' key.
All the undefined breakpoints will have 'default' value.
By default, for the column direction it will have \`justify-content: flex-start\`
and for the row direction \`align-items: center\`. This can be overriden
by utility classes.`,type:{name:"string|object"},defaultValue:{func:!1,value:"'column'"}},{name:"as",description:"Set this prop to render stack as a specific HTML element.",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"gap",description:"Set this prop to have the space between each stack item",tags:{},values:["0","100","200","300","400","500","600"],type:{name:"string"},defaultValue:{func:!1,value:"'0'"}}],slots:[{name:"default",description:"Slot for main content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/stack/stack.vue"]};export{y as D};
//# sourceMappingURL=stack-64ff0684.js.map