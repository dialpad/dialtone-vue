import{g as i}from"./utils-a1e592ea.js";import{n as o}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as p}from"./button-61a95420.js";import{D as d}from"./lazy_show-0b3a0cf0.js";import{D as u}from"./icon-9e10092c.js";const c={name:"DtCollapsibleLazyShow",props:{show:{type:Boolean,default:null},appear:{type:Boolean,default:!1},elementType:{type:String,default:"div"}},data(){return{initialized:!!this.show}},computed:{isCSSEnabled(){return!0}},watch:{show:function(t){!t||this.initialized||(this.initialized=!0)}},methods:{beforeEnter(t){requestAnimationFrame(()=>{t.style.height||(t.style.height="0px"),t.style.display=null})},enter(t){requestAnimationFrame(()=>{requestAnimationFrame(()=>{t.style.height=`${t.scrollHeight}px`})})},afterEnter(t){t.style.height=null},beforeLeave(t){requestAnimationFrame(()=>{t.style.height||(t.style.height=`${t.offsetHeight}px`)})},leave(t){requestAnimationFrame(()=>{requestAnimationFrame(()=>{t.style.height="0px"})})},afterLeave(t){t.style.height=null}}};var s=function(){var e=this,n=e._self._c;return n("transition",e._g({attrs:{appear:e.appear,"enter-active-class":"enter-active","leave-active-class":"leave-active",css:e.isCSSEnabled},on:{"before-enter":e.beforeEnter,enter:e.enter,"after-enter":e.afterEnter,"before-leave":e.beforeLeave,leave:e.leave,"after-leave":e.afterLeave}},e.$listeners),[n(e.elementType,e._g({directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],tag:"component"},e.$listeners),[e.initialized?e._t("default"):e._e()],2)],1)},h=[];s._withStripped=!0;var a=o(c,s,h,!1,null,null,null,null);a.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/collapsible/collapsible_lazy_show.vue";const m=a.exports;a.exports.__docgenInfo={displayName:"DtCollapsibleLazyShow",exportName:"default",description:"",tags:{},props:[{name:"show",description:"Whether the child slot is shown.",type:{name:"boolean"},defaultValue:{func:!1,value:"null"}},{name:"appear",description:"Enable/Disable transition animation",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"elementType",description:"HTML element type (tag name) of the content wrapper element.",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}}],slots:[{name:"default",description:"slot for Content within collapsible"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/collapsible/collapsible_lazy_show.vue"]};const f={name:"DtCollapsible",components:{DtButton:p,DtCollapsibleLazyShow:m,DtLazyShow:d,DtIcon:u},props:{anchorText:{type:String,default:null},open:{type:Boolean,default:null},id:{type:String,default(){return i()}},elementType:{type:String,default:"div"},contentElementType:{type:String,default:"div"},anchorClass:{type:[String,Array,Object],default:null},contentClass:{type:[String,Array,Object],default:null},maxWidth:{type:String,default:null},maxHeight:{type:String,default:null},ariaLabel:{type:String,default:null},ariaLabelledBy:{type:String,default:null}},emits:["update:open","opened"],data(){return{isOpen:!0}},computed:{labelledBy(){return this.ariaLabelledBy||!this.ariaLabel&&i("DtCollapsible__anchor")}},watch:{open:{handler:function(t){t!==null&&(this.isOpen=t)},immediate:!0}},mounted(){this.validateProperAnchor()},methods:{onLeaveTransitionComplete(){this.$emit("opened",!1),this.open!==null&&this.$emit("update:open",!1)},onEnterTransitionComplete(){this.$emit("opened",!0,this.$refs.content),this.open!==null&&this.$emit("update:open",!0)},defaultToggleOpen(){this.open===null&&this.toggleOpen()},toggleOpen(){this.isOpen=!this.isOpen},validateProperAnchor(){!this.anchorText&&!this.$scopedSlots.anchor&&console.error("anchor text and anchor slot content cannot both be falsy")}}};var r=function(){var e=this,n=e._self._c;return n(e.elementType,e._g({ref:"collapsible",tag:"component"},e.$listeners),[n("div",{ref:"anchor",class:["d-dt-collapsibe__anchor",e.anchorClass],attrs:{id:!e.ariaLabelledBy&&e.labelledBy}},[e._t("anchor",function(){return[n("dt-button",{style:{width:e.maxWidth},attrs:{importance:"clear",kind:"muted","aria-controls":e.id,"aria-expanded":`${e.isOpen}`},on:{click:e.defaultToggleOpen}},[n("dt-icon",{staticClass:"d-icon d-icon--size-300 d-mr8 d-fl-shrink0",attrs:{name:e.isOpen?"chevron-down":"chevron-right"}}),n("span",{staticClass:"d-mr-auto d-truncate",attrs:{title:e.anchorText}},[e._v(" "+e._s(e.anchorText)+" ")])],1)]},{attrs:{"aria-controls":e.id,"aria-expanded":e.isOpen.toString(),role:"button"}})],2),n("dt-collapsible-lazy-show",e._g({ref:"contentWrapper",class:["d-dt-collapsible__content",e.contentClass],style:{"max-height":e.maxHeight,"max-width":e.maxWidth},attrs:{id:e.id,"aria-hidden":`${!e.isOpen}`,"aria-labelledby":e.labelledBy,"aria-label":e.ariaLabel,show:e.isOpen,"element-type":e.contentElementType,tabindex:"-1",appear:""},on:{"after-leave":e.onLeaveTransitionComplete,"after-enter":e.onEnterTransitionComplete}},e.$listeners),[e._t("content")],2)],1)},y=[];r._withStripped=!0;var l=o(f,r,y,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/collapsible/collapsible.vue";const x=l.exports;l.exports.__docgenInfo={displayName:"DtCollapsible",description:"A collapsible is a component consisting of an interactive anchor that toggled the expandable/collapsible element.",tags:{see:[{description:"https://dialpad.design/components/collapsible.html",title:"see"}]},exportName:"default",props:[{name:"anchorText",description:`Text that is displayed on the anchor if nothing is passed in the slot.
Ignored if the anchor slot is used.`,type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"open",description:`Controls whether the collapsible is shown. Leaving this null will have the collapsible start
expanded and trigger on click by default. If you set this value, the default trigger
behavior will be disabled, and you can control it as you need.
Supports .sync modifier`,tags:{},values:["null","true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"null"}},{name:"id",description:"The id of the content wrapper.",type:{name:"string"},defaultValue:{func:!0,value:"function() { return getUniqueString(); }"}},{name:"elementType",description:"HTML element type (tag name) of the root element of the component.",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"contentElementType",description:"HTML element type (tag name) of the content wrapper element.",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"anchorClass",description:"Additional class name for the anchor wrapper element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"null"}},{name:"contentClass",description:"Additional class name for the content wrapper element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"null"}},{name:"maxWidth",description:`The maximum width of the anchor and collapsible element.
Possible units rem|px|%|em`,type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"maxHeight",description:`The maximum height of the collapsible element.
Possible units rem|px|%|em`,type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"ariaLabel",description:"Label on the collapsible content. Should provide this or ariaLabelledBy but not both.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"ariaLabelledBy",description:`Id of the element that labels the collapsible content. Defaults to the anchor element.
Should provide this or ariaLabel but not both.`,type:{name:"string"},defaultValue:{func:!1,value:"null"}}],events:[{name:"update:open",description:"Event fired to sync the open prop with the parent component",type:{names:["undefined"]}},{name:"opened",description:"Event fired when the content is shown or hidden",type:{names:["Boolean"]},properties:[{type:{names:["undefined"]},name:"<anonymous1>"}]}],slots:[{name:"anchor",scoped:!0,description:"Slot for the anchor element that toggles the collapsible content",bindings:[{name:"attrs",title:"binding"}]},{name:"content",description:"Slot for the collapsible element that is expanded by the anchor"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/collapsible/collapsible.vue"]};export{x as D};
//# sourceMappingURL=collapsible-cf33dedc.js.map