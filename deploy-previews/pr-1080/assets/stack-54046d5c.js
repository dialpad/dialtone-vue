import{b as d,w as f,n as p,q as m,o as v,k,l as _}from"./vue.esm-bundler-acd771f7.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";const n={default:"column",column:"column",row:"row","row-reverse":"row-reverse","column-reverse":"column-reverse"},u=["sm","md","lg","xl"],r=["0","100","200","300","400","500","600"];function l(e){return e===n.default}function o(e){if(a(e)==="string")return l(e)?null:n[e];if(a(e)==="object"){const{default:t}=e;return l(t)?null:n[t]}else return null}function a(e){return typeof e}function S(e){return o(e)?`d-stack--${n[o(e)]}`:null}function h(e){return a(e)==="object"?[...u.map(t=>e[t]?`d-stack--${t}--${e[t]}`:null)]:null}function D(e){return r.includes(e)?`d-stack--gap-${e}`:null}function y(e){if(a(e)==="string")return Object.keys(n).includes(e);if(a(e)==="object"){const{default:t}=e;return Object.keys(n).includes(t)}else return null}function w(e){return r.includes(e)}const c={name:"DtStack",props:{direction:{type:[String,Object],default:"column",validator:e=>y(e)},as:{type:String,default:"div"},gap:{type:String,default:"0",validator:e=>w(e)}},data(){return{DT_STACK_DIRECTION:n,DT_STACK_GAP:r,DT_STACK_RESPONSIVE_BREAKPOINTS:u}},computed:{stackGap(){return D(this.gap)},defaultDirection(){return S(this.direction)},stackResponsive(){return h(this.direction)}}};function C(e,t,i,T,b,s){return v(),d(m(i.as),{class:p(["d-stack",s.defaultDirection,s.stackResponsive,s.stackGap])},{default:f(()=>[k(" @slot Slot for main content "),_(e.$slots,"default")]),_:3},8,["class"])}const A=g(c,[["render",C],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/stack/stack.vue"]]);c.__docgenInfo={displayName:"DtStack",exportName:"default",description:"",tags:{},props:[{name:"direction",description:`Set this prop to the direction to stack the items.
You can override the default direction with 'default' key.
All the undefined breakpoints will have 'default' value`,type:{name:"string|object"},defaultValue:{func:!1,value:"'column'"}},{name:"as",description:"Set this prop to render stack as a specific HTML element.",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"gap",description:"Set this prop to have the space between each stack item",tags:{},values:["0","100","200","300","400","500","600"],type:{name:"string"},defaultValue:{func:!1,value:"'0'"}}],slots:[{name:"default",description:"Slot for main content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/stack/stack.vue"]};export{A as D,n as a,u as b,r as c};
//# sourceMappingURL=stack-54046d5c.js.map