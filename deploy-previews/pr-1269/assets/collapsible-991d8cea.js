import{g as p,e as S,h as C}from"./utils-24086939.js";import{o as r,p as T,f as l,y as i,w as o,d as E,v as A,b as m,g as d,n as B,j as D,l as f,m as c,T as V,F as z,u as s,x as u,e as h,A as k,D as O,k as F}from"./vue.esm-bundler-5f4c5b12.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import{D as H}from"./button-1c0b010e.js";import{D as q}from"./lazy_show-94c78d4e.js";import{D as N}from"./icon-0e5360a4.js";const b={name:"DtCollapsibleLazyShow",inheritAttrs:!1,props:{show:{type:Boolean,default:null},appear:{type:Boolean,default:!1},elementType:{type:String,default:"div"}},data(){return{initialized:!!this.show}},computed:{isCSSEnabled(){return!0}},watch:{show:function(e){!e||this.initialized||(this.initialized=!0)}},methods:{beforeEnter(e){requestAnimationFrame(()=>{e.style.height||(e.style.height="0px"),e.style.display=null})},enter(e){requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.style.height=`${e.scrollHeight}px`})})},afterEnter(e){e.style.height=null},beforeLeave(e){requestAnimationFrame(()=>{e.style.height||(e.style.height=`${e.offsetHeight}px`)})},leave(e){requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.style.height="0px"})})},afterLeave(e){e.style.height=null}}};function P(e,v,t,_,a,n){return r(),T(z,null,[l(" applies the transition on initial render "),i(V,c({appear:t.appear,"enter-active-class":"enter-active","leave-active-class":"leave-active"},e.$attrs,{css:n.isCSSEnabled,onBeforeEnter:n.beforeEnter,onEnter:n.enter,onAfterEnter:n.afterEnter,onBeforeLeave:n.beforeLeave,onLeave:n.leave,onAfterLeave:n.afterLeave,persisted:""}),{default:o(()=>[E((r(),m(f(t.elementType),B(D(e.$attrs)),{default:o(()=>[l(" @slot slot for Content within collapsible "),a.initialized?d(e.$slots,"default",{key:0}):l("v-if",!0)]),_:3},16)),[[A,t.show]])]),_:3},16,["appear","css","onBeforeEnter","onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],2112)}const I=y(b,[["render",P],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/collapsible/collapsible_lazy_show.vue"]]);b.__docgenInfo={displayName:"DtCollapsibleLazyShow",exportName:"default",description:"",tags:{},props:[{name:"show",description:"Whether the child slot is shown.",type:{name:"boolean"},defaultValue:{func:!1,value:"null"}},{name:"appear",description:"Enable/Disable transition animation",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"elementType",description:"HTML element type (tag name) of the content wrapper element.",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}}],slots:[{name:"default",description:"slot for Content within collapsible"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/collapsible/collapsible_lazy_show.vue"]};const g={name:"DtCollapsible",components:{DtButton:H,DtCollapsibleLazyShow:I,DtLazyShow:q,DtIcon:N},props:{anchorText:{type:String,default:null},open:{type:Boolean,default:null},id:{type:String,default(){return p()}},elementType:{type:String,default:"div"},contentElementType:{type:String,default:"div"},anchorClass:{type:[String,Array,Object],default:null},contentClass:{type:[String,Array,Object],default:null},maxWidth:{type:String,default:null},maxHeight:{type:String,default:null},ariaLabel:{type:String,default:null},ariaLabelledBy:{type:String,default:null}},emits:["update:open","opened"],data(){return{isOpen:!0}},computed:{labelledBy(){return this.ariaLabelledBy||!this.ariaLabel&&p("DtCollapsible__anchor")},collapsibleListeners(){return S(this.$attrs)}},watch:{open:{handler:function(e){e!==null&&(this.isOpen=e)},immediate:!0}},created(){this.validateProperAnchor()},methods:{onLeaveTransitionComplete(){this.$emit("opened",!1),this.open!==null&&this.$emit("update:open",!1)},onEnterTransitionComplete(){this.$emit("opened",!0,this.$refs.content),this.open!==null&&this.$emit("update:open",!0)},defaultToggleOpen(){this.open===null&&this.toggleOpen()},toggleOpen(){this.isOpen=!this.isOpen},validateProperAnchor(){!this.anchorText&&!C(this.$slots.anchor)&&console.error("anchor text and anchor slot content cannot both be falsy")}}},W=["id"],j=["title"];function M(e,v,t,_,a,n){const w=s("dt-icon"),x=s("dt-button"),L=s("dt-collapsible-lazy-show");return r(),m(f(t.elementType),c({ref:"collapsible"},u(n.collapsibleListeners)),{default:o(()=>[l(" Element for capturing keypress events "),h("div",{id:!t.ariaLabelledBy&&n.labelledBy,ref:"anchor",class:F(["d-dt-collapsibe__anchor",t.anchorClass])},[l(" @slot Slot for the anchor element that toggles the collapsible content "),d(e.$slots,"anchor",{attrs:{"aria-controls":t.id,"aria-expanded":a.isOpen.toString(),role:"button"}},()=>[i(x,{importance:"clear",kind:"muted","aria-controls":t.id,"aria-expanded":`${a.isOpen}`,style:O({width:t.maxWidth}),onClick:n.defaultToggleOpen},{default:o(()=>[i(w,{name:a.isOpen?"chevron-down":"chevron-right",class:"d-icon d-icon--size-300 d-mr8 d-fl-shrink0"},null,8,["name"]),h("span",{class:"d-mr-auto d-truncate",title:t.anchorText},k(t.anchorText),9,j)]),_:1},8,["aria-controls","aria-expanded","style","onClick"])])],10,W),i(L,c({id:t.id,ref:"contentWrapper","aria-hidden":`${!a.isOpen}`,"aria-labelledby":n.labelledBy,"aria-label":t.ariaLabel,show:a.isOpen,"element-type":t.contentElementType,class:["d-dt-collapsible__content",t.contentClass],style:{"max-height":t.maxHeight,"max-width":t.maxWidth},tabindex:"-1",appear:""},u(n.collapsibleListeners),{onAfterLeave:n.onLeaveTransitionComplete,onAfterEnter:n.onEnterTransitionComplete}),{default:o(()=>[l(" @slot Slot for the collapsible element that is expanded by the anchor "),d(e.$slots,"content")]),_:3},16,["id","aria-hidden","aria-labelledby","aria-label","show","element-type","class","style","onAfterLeave","onAfterEnter"])]),_:3},16)}const X=y(g,[["render",M],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/collapsible/collapsible.vue"]]);g.__docgenInfo={displayName:"DtCollapsible",description:"A collapsible is a component consisting of an interactive anchor that toggled the expandable/collapsible element.",tags:{see:[{description:"https://dialpad.design/components/collapsible.html",title:"see"}]},exportName:"default",props:[{name:"anchorText",description:`Text that is displayed on the anchor if nothing is passed in the slot.
Ignored if the anchor slot is used.`,type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"open",description:`Controls whether the collapsible is shown. Leaving this null will have the collapsible start
expanded and trigger on click by default. If you set this value, the default trigger
behavior will be disabled, and you can control it as you need.
Supports .sync modifier`,tags:{},values:["null","true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"null"}},{name:"id",description:"The id of the content wrapper.",type:{name:"string"},defaultValue:{func:!0,value:"function() { return getUniqueString(); }"}},{name:"elementType",description:"HTML element type (tag name) of the root element of the component.",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"contentElementType",description:"HTML element type (tag name) of the content wrapper element.",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"anchorClass",description:"Additional class name for the anchor wrapper element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"null"}},{name:"contentClass",description:"Additional class name for the content wrapper element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"null"}},{name:"maxWidth",description:`The maximum width of the anchor and collapsible element.
Possible units rem|px|%|em`,type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"maxHeight",description:`The maximum height of the collapsible element.
Possible units rem|px|%|em`,type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"ariaLabel",description:"Label on the collapsible content. Should provide this or ariaLabelledBy but not both.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"ariaLabelledBy",description:`Id of the element that labels the collapsible content. Defaults to the anchor element.
Should provide this or ariaLabel but not both.`,type:{name:"string"},defaultValue:{func:!1,value:"null"}}],events:[{name:"update:open",description:"Event fired to sync the open prop with the parent component",type:{names:["undefined"]}},{name:"opened",description:"Event fired when the content is shown or hidden",type:{names:["Boolean"]},properties:[{type:{names:["undefined"]},name:"<anonymous1>"}]}],slots:[{name:"anchor",scoped:!0,description:"Slot for the anchor element that toggles the collapsible content",bindings:[{name:"attrs",title:"binding"}]},{name:"content",description:"Slot for the collapsible element that is expanded by the anchor"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/collapsible/collapsible.vue"]};export{X as D};
//# sourceMappingURL=collapsible-991d8cea.js.map
