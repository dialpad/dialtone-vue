import{n as c}from"./_plugin-vue2_normalizer-2bbd088e.js";const n={default:"column",column:"column",row:"row","row-reverse":"row-reverse","column-reverse":"column-reverse"},u=["sm","md","lg","xl"],s=["0","100","200","300","400","500","600"];function r(e){return e===n.default}function l(e){if(a(e)==="string")return r(e)?null:n[e];if(a(e)==="object"){const{default:t}=e;return r(t)?null:n[t]}else return null}function a(e){return typeof e}function f(e){return l(e)?`d-stack--${n[l(e)]}`:null}function d(e){return a(e)==="object"?[...u.map(t=>e[t]?`d-stack--${t}--${e[t]}`:null)]:null}function p(e){return s.includes(e)?`d-stack--gap-${e}`:null}function m(e){if(a(e)==="string")return Object.keys(n).includes(e);if(a(e)==="object"){const{default:t}=e;return Object.keys(n).includes(t)}else return null}function v(e){return s.includes(e)}const _={name:"DtStack",props:{direction:{type:[String,Object],default:"column",validator:e=>m(e)},as:{type:String,default:"div"},gap:{type:String,default:"0",validator:e=>v(e)}},data(){return{DT_STACK_DIRECTION:n,DT_STACK_GAP:s,DT_STACK_RESPONSIVE_BREAKPOINTS:u}},computed:{stackGap(){return p(this.gap)},defaultDirection(){return f(this.direction)},stackResponsive(){return d(this.direction)}}};var g=function(){var t=this,i=t._self._c;return i(t.as,{tag:"component",class:["d-stack",t.defaultDirection,t.stackResponsive,t.stackGap]},[t._t("default")],2)},h=[],o=c(_,g,h,!1,null,null,null,null);const y=o.exports;o.exports.__docgenInfo={displayName:"DtStack",exportName:"default",description:"",tags:{},props:[{name:"direction",description:`Set this prop to the direction to stack the items.
You can override the default direction with 'default' key.
All the undefined breakpoints will have 'default' value.
By default, for the column direction it will have \`justify-content: flex-start\`
and for the row direction \`align-items: center\`. This can be overriden
by utility classes.`,type:{name:"string|object"},defaultValue:{func:!1,value:"'column'"}},{name:"as",description:"Set this prop to render stack as a specific HTML element.",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"gap",description:"Set this prop to have the space between each stack item",tags:{},values:["0","100","200","300","400","500","600"],type:{name:"string"},defaultValue:{func:!1,value:"'0'"}}],slots:[{name:"default",description:"Slot for main content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/stack/stack.vue"]};export{y as D,n as a,u as b,s as c};
//# sourceMappingURL=stack-c26ae66b.js.map