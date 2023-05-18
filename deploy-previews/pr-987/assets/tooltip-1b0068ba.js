import{B as d,T as c,g as u,c as f,a as r}from"./tippy_utils-0155706c.js";import{g as m,h as y}from"./utils-3cbdaa20.js";import{D as g}from"./lazy_show-39a1b966.js";import{a as v,e as w,f as b,j as i,k as l,v as S,d as T,w as P,m as _,B as k,o as A,s as I,t as L}from"./vue.esm-bundler-c0209a4d.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";const E=[...d],O=300,V={hover:"d-tooltip--hover",show:"d-tooltip--show",inverted:"d-tooltip--inverted",hide:"d-tooltip--hide"},D=[...c];const p={name:"DtTooltip",components:{DtLazyShow:g},props:{id:{type:String,default(){return m()}},fallbackPlacements:{type:Array,default:()=>["auto"]},inverted:{type:Boolean,default:!1},offset:{type:Array,default:()=>[0,-4]},placement:{type:String,default:"top",validator(e){return E.includes(e)}},sticky:{type:[Boolean,String],default:!1,validator:e=>D.includes(e)},contentClass:{type:[String,Object,Array],default:""},message:{type:String,default:""},show:{type:Boolean,default:null},transition:{type:String,default:"fade"},contentAppear:{type:Boolean,default:!1},delay:{type:Boolean,default:!0}},emits:["update:show","shown"],data(){return{TOOLTIP_KIND_MODIFIERS:V,hasSlotContent:y,tip:null,inTimer:null,isShown:!1,currentPlacement:this.placement}},computed:{tooltipListeners(){return{"after-leave":()=>{this.onLeaveTransitionComplete()},"after-enter":()=>{this.onEnterTransitionComplete()}}},tippyProps(){var e,t;return{offset:this.offset,appendTo:(t=(e=this.anchorEl)==null?void 0:e.getRootNode())==null?void 0:t.querySelector("body"),interactive:!1,trigger:"manual",placement:this.placement,sticky:this.sticky,popperOptions:u({fallbackPlacements:this.fallbackPlacements,hasHideModifierEnabled:!0,onChangePlacement:this.onChangePlacement})}}},watch:{tippyProps:{handler:"setProps",deep:!0},show:{handler:function(e){e!==null&&(this.isShown=e)},immediate:!0},isShown(e){e?(this.setProps(),this.tip.show()):this.tip.hide()},sticky(e){this.tip.setProps({sticky:e})}},mounted(){this.tip=f(r(this.$refs.anchor),this.initOptions()),this.isShown&&this.tip.show()},beforeUnmount(){var e;this.tip&&((e=this.tip)==null||e.destroy())},methods:{calculateAnchorZindex(){return this.$el.getRootNode().querySelector('.d-modal[aria-hidden="false"], .d-modal--transparent[aria-hidden="false"]')||this.$el.closest(".d-zi-drawer")?651:400},hasVisibleFocus(){return r(this.$refs.anchor).matches(":focus-visible")},onEnterAnchor(e){if(this.delay)this.inTimer=setTimeout(function(t){return this.triggerShow(t)}.bind(this,e),O);else return this.triggerShow(e)},triggerShow(e){e.type==="focusin"?this.show===null&&this.hasVisibleFocus()&&(this.isShown=!0):this.show===null&&(this.isShown=!0)},onLeaveAnchor(){return clearTimeout(this.inTimer),this.triggerHide()},triggerHide(){this.show===null&&(this.isShown=!1)},onChangePlacement(e){this.currentPlacement=e},onLeaveTransitionComplete(){var e;(e=this.tip)==null||e.unmount(),this.$emit("shown",!1),this.show!==null&&this.$emit("update:show",!1)},onEnterTransitionComplete(){this.$emit("shown",!0),this.show!==null&&this.$emit("update:show",!0)},setProps(){this.tip&&this.tip.setProps&&this.tip.setProps({...this.tippyProps,zIndex:this.calculateAnchorZindex()})},onMount(){this.setProps()},initOptions(){return{contentElement:this.$refs.content.$el,allowHTML:!0,zIndex:this.calculateAnchorZindex(),onMount:this.onMount,...this.tippyProps}}}},x={"data-qa":"dt-tooltip-container"};function N(e,t,s,j,a,n){const h=v("dt-lazy-show");return A(),w("div",x,[b("a",{ref:"anchor",tabindex:"-1",role:"presentation","data-qa":"dt-tooltip-anchor",onFocusin:t[0]||(t[0]=(...o)=>n.onEnterAnchor&&n.onEnterAnchor(...o)),onFocusout:t[1]||(t[1]=(...o)=>n.onLeaveAnchor&&n.onLeaveAnchor(...o)),onMouseenter:t[2]||(t[2]=(...o)=>n.onEnterAnchor&&n.onEnterAnchor(...o)),onMouseleave:t[3]||(t[3]=(...o)=>n.onLeaveAnchor&&n.onLeaveAnchor(...o)),onKeydown:t[4]||(t[4]=S((...o)=>n.onLeaveAnchor&&n.onLeaveAnchor(...o),["esc"]))},[i(" @slot Slot for the anchor element "),l(e.$slots,"anchor")],544),T(h,_({id:s.id,ref:"content",show:a.isShown&&(!!s.message.trim()||a.hasSlotContent(e.$slots.default)),role:"tooltip","aria-hidden":"false","data-qa":"dt-tooltip",appear:s.contentAppear,transition:s.transition,class:["d-tooltip",`d-tooltip__arrow-tippy--${a.currentPlacement}`,{[a.TOOLTIP_KIND_MODIFIERS.inverted]:s.inverted},s.contentClass]},k(n.tooltipListeners)),{default:P(()=>[i(" In case when transitionend event doesn't work correct (for ex. tooltip component with custom trigger) "),i(" after-leave event can be used instead of transitionend "),i(" @slot Slot for the content, defaults to message prop "),l(e.$slots,"default",{},()=>[I(L(s.message),1)])]),_:3},16,["id","show","appear","transition","class"])])}const K=C(p,[["render",N],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip.vue"]]);p.__docgenInfo={displayName:"DtTooltip",description:`A tooltip is a floating label that briefly explains an action, function, or an element.
Its content is exclusively text and shouldn't be vital information for users.
If richer media is desired, consider using a popover instead.`,tags:{see:[{description:"https://dialpad.design/components/tooltip.html",title:"see"}]},exportName:"default",props:[{name:"id",description:"The id of the tooltip",type:{name:"string"},defaultValue:{func:!0,value:"function() { return getUniqueString(); }"}},{name:"fallbackPlacements",description:`If the popover does not fit in the direction described by "placement",
it will attempt to change its direction to the "fallbackPlacements"
if defined, otherwise it will automatically position to a new location
as it sees best fit. See
<a
  class="d-link"
  href="https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements"
  target="_blank"
>
  Popper.js docs
</a>`,type:{name:"array"},defaultValue:{func:!1,value:"['auto']"}},{name:"inverted",description:"If true, applies inverted styles to the tooltip",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"offset",description:`Displaces the tooltip from its reference element
 by the specified number of pixels. See
 <a
   class="d-link"
   href="https://atomiks.github.io/tippyjs/v6/all-props/#offset"
   target="_blank"
 >
   Tippy.js docs
 </a>`,type:{name:"array"},defaultValue:{func:!1,value:"[0, -4]"}},{name:"placement",description:`The direction the popover displays relative to the anchor. See
<a
  class="d-link"
  href="https://atomiks.github.io/tippyjs/v6/all-props/#placement"
  target="_blank"
>
  Tippy.js docs
</a>`,tags:{},values:["top","top-start","top-end","right","right-start","right-end","left","left-start","left-end","bottom","bottom-start","bottom-end","auto","auto-start","auto-end"],type:{name:"string"},defaultValue:{func:!1,value:"'top'"}},{name:"sticky",description:`If the tooltip sticks to the anchor. This is usually not needed, but can be needed
if the reference element's position is animating, or to automatically update the popover
position in those cases the DOM layout changes the reference element's position.
\`true\` enables it, \`reference\` only checks the "reference" rect for changes and \`popper\` only
checks the "popper" rect for changes. See
<a
  class="d-link"
  href="https://atomiks.github.io/tippyjs/v6/all-props/#sticky"
  target="_blank"
>
  Tippy.js docs
</a>`,tags:{},values:["true","false","reference","popper"],type:{name:"boolean|string"},defaultValue:{func:!1,value:"false"}},{name:"contentClass",description:`Additional css classes for the tooltip content element.
Can accept all of String, Object, and Array, i.e. has the
same api as Vue's built-in handling of the class attribute.`,type:{name:"string|object|array"},defaultValue:{func:!1,value:"''"}},{name:"message",description:"A provided message for the tooltip content",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"show",description:`Controls whether the tooltip is shown. Leaving this null will have the tooltip trigger on mouseover by default.
If you set this value, the default mouseover behavior will be disabled and you can control it as you need.
Supports .sync modifier`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"null"}},{name:"transition",description:"Named transition when the content display is toggled.",tags:{see:[{description:"DtLazyShow",title:"see"}]},type:{name:"string"},defaultValue:{func:!1,value:"'fade'"}},{name:"contentAppear",description:"Whether to apply transition on initial render in the content lazy show component.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"delay",description:"Whether the tooltip will have a delay when being focused or moused over.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"update:show",description:"Event fired to sync the show prop with the parent component",type:{names:["undefined"]}},{name:"shown",description:"Emitted when tooltip is shown or hidden",type:{names:["Boolean"]}}],slots:[{name:"anchor",description:"Slot for the anchor element"},{name:"default",description:"Slot for the content, defaults to message prop"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip.vue"]};export{K as D,E as T,D as a};
//# sourceMappingURL=tooltip-1b0068ba.js.map
