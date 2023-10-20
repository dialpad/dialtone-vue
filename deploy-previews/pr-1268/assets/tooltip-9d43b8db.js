import{B as a,T as r,g as l,a as p,c as h}from"./tippy_utils-e4c34e91.js";import{g as c}from"./utils-c7895956.js";import{D as u}from"./lazy_show-0b3a0cf0.js";import{n as d}from"./_plugin-vue2_normalizer-2bbd088e.js";const f=[...a],m=300,y={hover:"d-tooltip--hover",show:"d-tooltip--show",inverted:"d-tooltip--inverted",hide:"d-tooltip--hide"},g=[...r];const v={name:"DtTooltip",components:{DtLazyShow:u},props:{id:{type:String,default(){return c()}},fallbackPlacements:{type:Array,default:()=>["auto"]},inverted:{type:Boolean,default:!1},offset:{type:Array,default:()=>[0,-4]},placement:{type:String,default:"top",validator(t){return f.includes(t)}},sticky:{type:[Boolean,String],default:!1,validator:t=>g.includes(t)},contentClass:{type:[String,Object,Array],default:""},message:{type:String,default:""},show:{type:Boolean,default:null},transition:{type:String,default:"fade"},delay:{type:Boolean,default:!0},externalAnchor:{type:String,default:null}},emits:["shown","update:show"],data(){return{TOOLTIP_KIND_MODIFIERS:y,tip:null,inTimer:null,isShown:!1,currentPlacement:this.placement}},computed:{tooltipListeners(){return{...this.$listeners,"after-leave":()=>{this.onLeaveTransitionComplete()},"after-enter":()=>{this.onEnterTransitionComplete()}}},tippyProps(){return{offset:this.offset,interactive:!1,trigger:"manual",placement:this.placement,sticky:this.sticky,popperOptions:l({fallbackPlacements:this.fallbackPlacements,hasHideModifierEnabled:!0,onChangePlacement:this.onChangePlacement})}},anchor(){return this.externalAnchor?document.querySelector(this.externalAnchor):p(this.$refs.anchor)}},watch:{tippyProps:{handler:"setProps",deep:!0},show:{handler:function(t){t!==null&&(this.isShown=t)},immediate:!0},isShown(t){t?(this.setProps(),this.tip.show()):this.tip.hide()},sticky(t){this.tip.setProps({sticky:t})}},mounted(){this.tip=h(this.anchor,this.initOptions()),this.isShown&&this.tip.show()},beforeDestroy(){var t;this.tip&&((t=this.tip)==null||t.destroy())},methods:{calculateAnchorZindex(){return this.$el.getRootNode().querySelector('.d-modal[aria-hidden="false"], .d-modal--transparent[aria-hidden="false"]')||this.$el.closest(".d-zi-drawer")?651:400},hasVisibleFocus(){return this.anchor.matches(":focus-visible")},onEnterAnchor(t){if(this.delay)this.inTimer=setTimeout((function(e){return this.triggerShow(e)}).bind(this,t),m);else return this.triggerShow(t)},triggerShow(t){t.type==="focusin"?this.show===null&&this.hasVisibleFocus()&&(this.isShown=!0):this.show===null&&(this.isShown=!0)},onLeaveAnchor(){return clearTimeout(this.inTimer),this.triggerHide()},triggerHide(){this.show===null&&(this.isShown=!1)},onChangePlacement(t){this.currentPlacement=t},onLeaveTransitionComplete(){var t;(t=this.tip)==null||t.unmount(),this.$emit("shown",!1),this.show!==null&&this.$emit("update:show",!1)},onEnterTransitionComplete(){this.$emit("shown",!0),this.show!==null&&this.$emit("update:show",!0)},setProps(){this.tip&&this.tip.setProps&&this.tip.setProps({...this.tippyProps,zIndex:this.calculateAnchorZindex()})},onMount(){this.setProps()},initOptions(){return{contentElement:this.$refs.content.$el,allowHTML:!0,zIndex:this.calculateAnchorZindex(),onMount:this.onMount,...this.tippyProps}}}};var s=function(){var e=this,n=e._self._c;return n("div",{attrs:{"data-qa":"dt-tooltip-container"}},[e.externalAnchor?e._e():n("span",{ref:"anchor",attrs:{"data-qa":"dt-tooltip-anchor"},on:{focusin:e.onEnterAnchor,focusout:e.onLeaveAnchor,mouseenter:e.onEnterAnchor,mouseleave:e.onLeaveAnchor,keydown:function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"esc",27,o.key,["Esc","Escape"])?null:e.onLeaveAnchor.apply(null,arguments)}}},[e._t("anchor")],2),n("dt-lazy-show",e._g({ref:"content",class:["d-tooltip",`d-tooltip__arrow-tippy--${e.currentPlacement}`,{[e.TOOLTIP_KIND_MODIFIERS.inverted]:e.inverted},e.contentClass],attrs:{id:e.id,show:e.isShown&&(!!e.message.trim()||!!e.$slots.default),role:"tooltip","aria-hidden":"false","data-qa":"dt-tooltip",appear:"",transition:e.transition}},e.tooltipListeners),[e._t("default",function(){return[e._v(" "+e._s(e.message)+" ")]})],2)],1)},w=[];s._withStripped=!0;var i=d(v,s,w,!1,null,null,null,null);i.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip.vue";const k=i.exports;i.exports.__docgenInfo={displayName:"DtTooltip",description:`A tooltip is a floating label that briefly explains an action, function, or an element.
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
Supports .sync modifier`,tags:{},values:["null","true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"null"}},{name:"transition",description:"Named transition when the content display is toggled.",tags:{see:[{description:"DtLazyShow",title:"see"}]},type:{name:"string"},defaultValue:{func:!1,value:"'fade'"}},{name:"delay",description:"Whether the tooltip will have a delay when being focused or moused over.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"externalAnchor",description:`External anchor id to use in those cases the anchor can't be provided via the slot.
For instance, using the combobox's input as the anchor for the popover.`,type:{name:"string"},defaultValue:{func:!1,value:"null"}}],events:[{name:"shown",description:"Emitted when tooltip is shown or hidden",type:{names:["Boolean"]}},{name:"update:show",description:"Sync show value",type:{names:["undefined"]}}],slots:[{name:"anchor",description:"Slot for the anchor element"},{name:"default",description:"Slot for the content, defaults to message prop"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip.vue"]};export{k as D,f as T,g as a};
//# sourceMappingURL=tooltip-9d43b8db.js.map
