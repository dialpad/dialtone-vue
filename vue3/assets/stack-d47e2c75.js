import{b as d,w as f,k as p,l as m,o as v,f as h}from"./vue.esm-bundler-3a08a304.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const n={default:"column",column:"column",row:"row","row-reverse":"row-reverse","column-reverse":"column-reverse"},o=["sm","md","lg","xl"],r=["0","100","200","300","400","500","600"];function l(e){return e===n.default}function u(e){if(a(e)==="string")return l(e)?null:n[e];if(a(e)==="object"){const{default:t}=e;return l(t)?null:n[t]}else return null}function a(e){return typeof e}function g(e){return u(e)?`d-stack--${n[u(e)]}`:null}function _(e){return a(e)==="object"?[...o.map(t=>e[t]?`d-stack--${t}--${e[t]}`:null)]:null}function y(e){return r.includes(e)?`d-stack--gap-${e}`:null}function S(e){if(a(e)==="string")return Object.keys(n).includes(e);if(a(e)==="object"){const{default:t}=e;return Object.keys(n).includes(t)}else return null}function D(e){return r.includes(e)}const c={name:"DtStack",props:{direction:{type:[String,Object],default:"column",validator:e=>S(e)},as:{type:String,default:"div"},gap:{type:String,default:"0",validator:e=>D(e)}},data(){return{DT_STACK_DIRECTION:n,DT_STACK_GAP:r,DT_STACK_RESPONSIVE_BREAKPOINTS:o}},computed:{stackGap(){return y(this.gap)},defaultDirection(){return g(this.direction)},stackResponsive(){return _(this.direction)}}};function w(e,t,i,b,T,s){return v(),d(m(i.as),{class:p(["d-stack",s.defaultDirection,s.stackResponsive,s.stackGap])},{default:f(()=>[h(e.$slots,"default")]),_:3},8,["class"])}const V=k(c,[["render",w]]);c.__docgenInfo={displayName:"DtStack",exportName:"default",description:"",tags:{},props:[{name:"direction",description:`Set this prop to the direction to stack the items.
You can override the default direction with 'default' key.
All the undefined breakpoints will have 'default' value.
By default, for the column direction it will have \`justify-content: flex-start\`
and for the row direction \`align-items: center\`. This can be overriden
by utility classes.`,type:{name:"string|object"},defaultValue:{func:!1,value:"'column'"}},{name:"as",description:"Set this prop to render stack as a specific HTML element.",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"gap",description:"Set this prop to have the space between each stack item",tags:{},values:["0","100","200","300","400","500","600"],type:{name:"string"},defaultValue:{func:!1,value:"'0'"}}],slots:[{name:"default",description:"Slot for main content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/stack/stack.vue"]};export{V as D,n as a,o as b,r as c};
//# sourceMappingURL=stack-d47e2c75.js.map