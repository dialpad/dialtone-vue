import{D as n,a as i,b as r}from"./stack_constants-4f71ebff.js";import{b as f,w as d,p,I as m,o as k,f as v,g as h}from"./vue.esm-bundler-81c53cfe.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";function l(e){return e===n.default}function o(e){if(a(e)==="string")return l(e)?null:n[e];if(a(e)==="object"){const{default:t}=e;return l(t)?null:n[t]}else return null}function a(e){return typeof e}function g(e){return o(e)?`d-stack--${n[o(e)]}`:null}function S(e){return a(e)==="object"?[...i.map(t=>e[t]?`d-stack--${t}--${e[t]}`:null)]:null}function y(e){return r.includes(e)?`d-stack--gap-${e}`:null}function D(e){if(a(e)==="string")return Object.keys(n).includes(e);if(a(e)==="object"){const{default:t}=e;return Object.keys(n).includes(t)}else return null}function b(e){return r.includes(e)}const u={name:"DtStack",props:{direction:{type:[String,Object],default:"column",validator:e=>D(e)},as:{type:String,default:"div"},gap:{type:String,default:"0",validator:e=>b(e)}},data(){return{DT_STACK_DIRECTION:n,DT_STACK_GAP:r,DT_STACK_RESPONSIVE_BREAKPOINTS:i}},computed:{stackGap(){return y(this.gap)},defaultDirection(){return g(this.direction)},stackResponsive(){return S(this.direction)}}};function C(e,t,c,T,w,s){return k(),f(m(c.as),{class:p(["d-stack",s.defaultDirection,s.stackResponsive,s.stackGap])},{default:d(()=>[v(" @slot Slot for main content "),h(e.$slots,"default")]),_:3},8,["class"])}const I=_(u,[["render",C],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/stack/stack.vue"]]);u.__docgenInfo={displayName:"DtStack",exportName:"default",description:"",tags:{},props:[{name:"direction",description:`Set this prop to the direction to stack the items.
You can override the default direction with 'default' key.
All the undefined breakpoints will have 'default' value.
By default, for the column direction it will have \`justify-content: flex-start\`
and for the row direction \`align-items: center\`. This can be overriden
by utility classes.`,type:{name:"string|object"},defaultValue:{func:!1,value:"'column'"}},{name:"as",description:"Set this prop to render stack as a specific HTML element.",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"gap",description:"Set this prop to have the space between each stack item",tags:{},values:["0","100","200","300","400","500","600"],type:{name:"string"},defaultValue:{func:!1,value:"'0'"}}],slots:[{name:"default",description:"Slot for main content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/stack/stack.vue"]};export{I as D};
//# sourceMappingURL=stack-0e9272f3.js.map
