import{T as c,B as u,g as h,c as f}from"./tippy_utils-e4c34e91.js";import{a as i,j as m}from"./storybook_utils-344aa704.js";import{D as v}from"./lazy_show-0b3a0cf0.js";import{P as y}from"./index.esm-be2d025a.js";import{M as g}from"./modal-600bd46a.js";import{D as b}from"./button-9102a84a.js";import{D as _}from"./icon-76bd8468.js";import{n as r}from"./_plugin-vue2_normalizer-2bbd088e.js";import{a as w,S as E}from"./sr_only_close_button-4d0ac2de.js";const l={none:void 0,small:"d-p4",medium:"d-p8",large:"d-p16"},O={none:void 0,small:"d-pl4",medium:"d-pl8",large:"d-pl16"},P=["dialog","menu","listbox","tree","grid"],C=["","anchor"],S=["none","dialog","first"],x=["parent","body"],k=[...c],W=[...u],T={name:"PopoverHeaderFooter",components:{DtButton:b,DtIcon:_},props:{type:{type:String,validator:function(t){return["header","footer"].includes(t)}},contentClass:{type:[String,Array,Object],default:""},showCloseButton:{type:Boolean,default:!1},closeButtonProps:{type:Object,default:()=>{}}},emits:["close"],methods:{focusCloseButton(){var e;const t=(e=this.$refs["popover__close-button"])==null?void 0:e.$el;t==null||t.focus()}}};var p=function(){var e=this,n=e._self._c;return n("div",{class:{"d-popover__header":e.type==="header","d-popover__footer":e.type==="footer"},attrs:{"data-qa":"dt-popover-header-footer"}},[e.$slots.content?n("div",{class:["d-to-ellipsis","d-w100p",e.contentClass],attrs:{"data-qa":"dt-popover-header-footer-content"}},[e._t("content")],2):e._e(),e.showCloseButton?n("dt-button",e._b({ref:"popover__close-button",staticClass:"d-p6 d-mr6 d-bc-transparent",attrs:{"data-qa":"dt-popover-close",importance:"outlined",kind:"muted",circle:""},on:{click:function(o){return e.$emit("close")}},scopedSlots:e._u([{key:"icon",fn:function(){return[n("dt-icon",{attrs:{name:"close",size:"300"}})]},proxy:!0}],null,!1,2538694920)},"dt-button",e.closeButtonProps,!1)):e._e()],1)},A=[];p._withStripped=!0;var s=r(T,p,A,!1,null,null,null,null);s.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/popover/popover_header_footer.vue";const L=s.exports;s.exports.__docgenInfo={displayName:"PopoverHeaderFooter",exportName:"default",description:"",tags:{},props:[{name:"type",type:{name:"string"},values:["header","footer"]},{name:"contentClass",description:"Additional class name for the content wrapper element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"showCloseButton",description:"Determines visibility for close button",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"closeButtonProps",description:`A set of props to be passed into the popover's header close button.
Requires an 'ariaLabel' property.`,type:{name:"object"},defaultValue:{func:!0,value:"() => {}"}}],events:[{name:"close",description:"Emitted when popover is closed",type:{names:[" Boolean "]}}],slots:[{name:"content",description:"Slot for main content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/popover/popover_header_footer.vue"]};const V={name:"DtPopover",components:{SrOnlyCloseButton:w,DtLazyShow:v,PopoverHeaderFooter:L,Portal:y},mixins:[g,E],props:{open:{type:Boolean,default:null},openOnContext:{type:Boolean,default:!1},elementType:{type:String,default:"div"},transition:{type:String,default:"fade"},role:{type:String,default:"dialog",validator:t=>P.includes(t)},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},closeButtonProps:{type:Object,default:()=>({})},padding:{type:String,default:"large",validator:t=>Object.keys(l).some(e=>e===t)},contentClass:{type:[String,Array,Object],default:""},contentWidth:{type:String,default:"",validator:t=>C.includes(t)},contentTabindex:{type:Number||null,default:-1},externalAnchor:{type:String,default:""},id:{type:String,default(){return i()}},offset:{type:Array,default:()=>[0,4]},hideOnClick:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},fallbackPlacements:{type:Array,default:()=>["auto"]},placement:{type:String,default:"bottom-end"},tether:{type:Boolean,default:!0},sticky:{type:[Boolean,String],default:!1,validator:t=>k.includes(t)},maxHeight:{type:String,default:""},maxWidth:{type:String,default:""},showCloseButton:{type:Boolean,default:!1},headerClass:{type:[String,Array,Object],default:""},footerClass:{type:[String,Array,Object],default:""},dialogClass:{type:[String,Array,Object],default:""},initialFocusElement:{type:[String,HTMLElement],default:"first",validator:t=>S.includes(t)||t instanceof HTMLElement||t.startsWith("#")},openWithArrowKeys:{type:Boolean,default:!1},appendTo:{type:[HTMLElement,String],default:"body",validator:t=>x.includes(t)||t instanceof HTMLElement}},emits:["opened","update:open"],data(){return{POPOVER_PADDING_CLASSES:l,POPOVER_HEADER_FOOTER_PADDING_CLASSES:O,intersectionObserver:null,isOutsideViewport:!1,isOpen:!1,anchorEl:null,popoverContentEl:null}},computed:{popoverListeners(){return{...this.$listeners,keydown:t=>{this.onKeydown(t),this.$emit("keydown",t)},"after-leave":t=>{this.onLeaveTransitionComplete()},"after-enter":t=>{this.onEnterTransitionComplete()}}},calculatedMaxHeight(){return this.isOutsideViewport&&this.modal?"calc(100vh - var(--space-300))":this.maxHeight},labelledBy(){return this.ariaLabelledby||!this.ariaLabel&&i("DtPopover__anchor")}},watch:{$props:{immediate:!0,deep:!0,handler(){this.validateProps()}},modal(t){var e;(e=this.tip)==null||e.setProps({zIndex:t?650:this.calculateAnchorZindex()})},offset(t){var e;(e=this.tip)==null||e.setProps({offset:t})},sticky(t){var e;(e=this.tip)==null||e.setProps({sticky:t})},fallbackPlacements(){var t;(t=this.tip)==null||t.setProps({popperOptions:this.popperOptions()})},tether(){var t;(t=this.tip)==null||t.setProps({popperOptions:this.popperOptions()})},placement(t){var e;(e=this.tip)==null||e.setProps({placement:t})},open:{handler:function(t){t!==null&&(this.isOpen=t)},immediate:!0},isOpen(t,e){t?(this.initTippyInstance(),this.tip.show()):!t&&e!==t&&(this.removeEventListeners(),this.tip.hide())}},mounted(){const t=this.externalAnchor?this.$refs.anchor.getRootNode().querySelector(`#${this.externalAnchor}`):null;this.anchorEl=t??this.$refs.anchor.children[0],this.popoverContentEl=this.$refs.content.$el,this.isOpen&&(this.initTippyInstance(),this.tip.show()),this.intersectionObserver=new IntersectionObserver(this.hasIntersectedViewport),this.intersectionObserver.observe(this.popoverContentEl)},beforeDestroy(){var t;(t=this.tip)==null||t.destroy(),this.intersectionObserver.disconnect(),this.removeReferences(),this.removeEventListeners()},methods:{hasIntersectedViewport(t){var o;const e=(o=t==null?void 0:t[0])==null?void 0:o.target;if(!e)return;const n=m(e);this.isOutsideViewport=n.bottom||n.top},popperOptions(){return h({fallbackPlacements:this.fallbackPlacements,tether:this.tether,hasHideModifierEnabled:!0})},validateProps(){this.modal&&this.initialFocusElement==="none"&&console.error('If the popover is modal you must set the initialFocusElement prop. Possible values: "dialog", "first", HTMLElement')},calculateAnchorZindex(){var t;return this.$el.getRootNode().querySelector('.d-modal[aria-hidden="false"], .d-modal--transparent[aria-hidden="false"]')||(t=this.anchorEl)!=null&&t.closest(".d-zi-drawer")?650:300},defaultToggleOpen(t){var e,n;this.openOnContext||(this.open??((e=this.anchorEl)!=null&&e.contains(t.target)&&!((n=this.anchorEl)!=null&&n.disabled)&&this.toggleOpen()))},async onContext(t){this.openOnContext&&(t.preventDefault(),this.isOpen=!0,await this.$nextTick(),this.tip.setProps({placement:"right-start",getReferenceClientRect:()=>({width:0,height:0,top:t.clientY,bottom:t.clientY,left:t.clientX,right:t.clientX})}))},toggleOpen(){this.isOpen=!this.isOpen},onArrowKeyPress(t){var e;this.open===null&&this.openWithArrowKeys&&(e=this.anchorEl)!=null&&e.contains(t.target)&&(this.isOpen||(this.isOpen=!0))},addEventListeners(){window.addEventListener("dt-popover-close",this.closePopover),this.contentWidth==="anchor"&&window.addEventListener("resize",this.onResize)},removeEventListeners(){window.removeEventListener("dt-popover-close",this.closePopover),this.contentWidth==="anchor"&&window.removeEventListener("resize",this.onResize)},closePopover(){this.isOpen=!1},preventScrolling(){var t;if(this.modal){const e=(t=this.anchorEl)==null?void 0:t.closest("body, .tippy-box");e.tagName.toLowerCase()==="body"?(e.classList.add("d-of-hidden"),this.tip.setProps({offset:this.offset})):e.classList.add("d-zi-popover")}},enableScrolling(){var e,n;const t=(e=this.anchorEl)==null?void 0:e.closest("body, .tippy-box");t&&(((n=t.tagName)==null?void 0:n.toLowerCase())==="body"?(t.classList.remove("d-of-hidden"),this.tip.setProps({offset:this.offset})):t.classList.remove("d-zi-popover"))},removeReferences(){this.anchorEl=null,this.popoverContentEl=null,this.tip=null},async onShow(){this.contentWidth==="anchor"&&await this.setPopoverContentAnchorWidth(),this.contentWidth===null&&(this.popoverContentEl.style.width="auto"),this.addEventListeners()},async onLeaveTransitionComplete(){var t;this.modal&&(await this.focusFirstElement(this.$refs.anchor),await this.$nextTick(),this.enableScrolling()),(t=this.tip)==null||t.unmount(),this.$emit("opened",!1),this.open!==null&&this.$emit("update:open",!1)},async onEnterTransitionComplete(){this.focusInitialElement(),await this.$nextTick(),this.preventScrolling(),this.$emit("opened",!0,this.$refs.popover__content),this.open!==null&&this.$emit("update:open",!0)},focusInitialElement(){this.initialFocusElement==="dialog"&&this.$refs.content.$el.focus(),this.initialFocusElement.startsWith("#")&&this.focusInitialElementById(),this.initialFocusElement==="first"&&this.focusFirstElementIfNeeded(this.$refs.popover__content),this.initialFocusElement instanceof HTMLElement&&this.initialFocusElement.focus()},focusInitialElementById(){var e,n,o;const t=(n=(e=this.$refs.content)==null?void 0:e.$el)==null?void 0:n.querySelector(this.initialFocusElement);t?t.focus():console.warn('Could not find the element specified in dt-popover prop "initialFocusElement". Defaulting to focusing the dialog.'),t?t.focus():(o=this.$refs.content)==null||o.$el.focus()},onResize(){this.closePopover()},onClickOutside(){if(!this.hideOnClick)return;this.popoverContentEl.querySelector(".d-popover__anchor--opened")||this.closePopover()},onKeydown(t){t.key==="Tab"&&this.modal&&this.focusTrappedTabPress(t,this.popoverContentEl),t.key==="Escape"&&this.closePopover()},async setPopoverContentAnchorWidth(){var t;await this.$nextTick(),this.popoverContentEl.style.width=`${(t=this.anchorEl)==null?void 0:t.clientWidth}px`},focusFirstElementIfNeeded(t){var n,o;this._getFocusableElements(t,!0).length!==0?this.focusFirstElement(t):this.showCloseButton?(n=this.$refs.popover__header)==null||n.focusCloseButton():(o=this.$refs.content)==null||o.$el.focus()},initTippyInstance(){var t,e;this.tip=f(this.anchorEl,{popperOptions:this.popperOptions(),contentElement:this.popoverContentEl,placement:this.placement,offset:this.offset,sticky:this.sticky,appendTo:this.appendTo==="body"?(e=(t=this.anchorEl)==null?void 0:t.getRootNode())==null?void 0:e.querySelector("body"):this.appendTo,interactive:!0,trigger:"manual",hideOnClick:!1,zIndex:this.modal?650:this.calculateAnchorZindex(),onClickOutside:this.onClickOutside,onShow:this.onShow})}}};var d=function(){var e=this,n=e._self._c;return n("div",[e.modal&&e.isOpen?n("portal",[n("div",{staticClass:"d-modal--transparent",attrs:{"aria-hidden":e.modal&&e.isOpen?"false":"true"},on:{click:function(o){o.preventDefault(),o.stopPropagation()}}})]):e._e(),n(e.elementType,e._g({ref:"popover",tag:"component",class:["d-popover",{"d-popover__anchor--opened":e.isOpen}],attrs:{"data-qa":"dt-popover-container"}},e.$listeners),[n("div",{ref:"anchor",attrs:{id:!e.ariaLabelledby&&e.labelledBy,"data-qa":"dt-popover-anchor",tabindex:e.openOnContext?0:void 0},on:{"!click":function(o){return e.defaultToggleOpen.apply(null,arguments)},contextmenu:e.onContext,keydown:[function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"up",38,o.key,["Up","ArrowUp"])?null:(o.preventDefault(),e.onArrowKeyPress.apply(null,arguments))},function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"down",40,o.key,["Down","ArrowDown"])?null:(o.preventDefault(),e.onArrowKeyPress.apply(null,arguments))}],"!keydown":function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"escape",void 0,o.key,void 0)?null:e.closePopover.apply(null,arguments)}}},[e._t("anchor",null,{attrs:{"aria-expanded":e.isOpen.toString(),"aria-controls":e.id,"aria-haspopup":e.role}})],2),n("dt-lazy-show",e._g({ref:"content",class:["d-popover__dialog",{"d-popover__dialog--modal":e.modal},e.dialogClass],style:{"max-height":e.calculatedMaxHeight,"max-width":e.maxWidth},attrs:{id:e.id,role:e.role,"data-qa":"dt-popover","aria-hidden":`${!e.isOpen}`,"aria-labelledby":e.labelledBy,"aria-label":e.ariaLabel,"aria-modal":`${!e.modal}`,transition:e.transition,show:e.isOpen,tabindex:e.contentTabindex,appear:""}},e.popoverListeners),[e.$slots.headerContent||e.showCloseButton?n("popover-header-footer",{ref:"popover__header",class:e.POPOVER_HEADER_FOOTER_PADDING_CLASSES[e.padding],attrs:{"content-class":e.headerClass,type:"header","show-close-button":e.showCloseButton,"close-button-props":e.closeButtonProps},on:{close:e.closePopover},scopedSlots:e._u([{key:"content",fn:function(){return[e._t("headerContent",null,{close:e.closePopover})]},proxy:!0}],null,!0)}):e._e(),n("div",{ref:"popover__content",class:["d-popover__content",e.POPOVER_PADDING_CLASSES[e.padding],e.contentClass],attrs:{"data-qa":"dt-popover-content"}},[e._t("content",null,{close:e.closePopover})],2),e.$slots.footerContent?n("popover-header-footer",{ref:"popover__footer",class:e.POPOVER_HEADER_FOOTER_PADDING_CLASSES[e.padding],attrs:{type:"footer","content-class":e.footerClass},scopedSlots:e._u([{key:"content",fn:function(){return[e._t("footerContent",null,{close:e.closePopover})]},proxy:!0}],null,!0)}):e._e(),e.showVisuallyHiddenClose?n("sr-only-close-button",{attrs:{"visually-hidden-close-label":e.visuallyHiddenCloseLabel},on:{close:e.closePopover}}):e._e()],1)],1)],1)},D=[];d._withStripped=!0;var a=r(V,d,D,!1,null,null,null,null);a.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/popover/popover.vue";const q=a.exports;a.exports.__docgenInfo={description:"A Popover displays a content overlay when its anchor element is activated.",displayName:"DtPopover",tags:{see:[{description:"https://dialpad.design/components/popover.html",title:"see"}]},exportName:"default",props:[{name:"visuallyHiddenClose",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"If true, a hidden close button is included for screen readers",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"visuallyHiddenCloseLabel",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"Label for the visually hidden close button\nRequired if visuallyHiddenClose is set to `true`",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"open",description:`Controls whether the popover is shown. Leaving this null will have the popover trigger on click by default.
If you set this value, the default trigger behavior will be disabled, and you can control it as you need.
Supports .sync modifier`,tags:{},values:["null","true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"null"}},{name:"openOnContext",description:"Opens the popover on right click (context menu). If you set this value to `true`,\nthe default trigger behavior will be disabled.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"elementType",description:"Element type (tag name) of the root element of the component.",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"transition",description:"Named transition when the content display is toggled.",tags:{see:[{description:"DtLazyShow",title:"see"}]},type:{name:"string"},defaultValue:{func:!1,value:"'fade'"}},{name:"role",description:`ARIA role for the content of the popover. Defaults to "dialog".
<a class="d-link" href="https://www.w3.org/TR/wai-aria/#aria-haspopup" target="_blank">aria-haspopup</a>`,type:{name:"string"},defaultValue:{func:!1,value:"'dialog'"}},{name:"ariaLabelledby",description:`ID of the element that serves as the label for the popover content.
Defaults to the "anchor" element; this exists to provide a different
ID of the label element if, for example, the anchor slot contains
other items that do not serve as a label. You should provide this
or ariaLabel, but not both.`,type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"ariaLabel",description:`Descriptive label for the popover content. You should provide this
or ariaLabelledby, but not both.`,type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"closeButtonProps",description:`A set of props to be passed into the popover's header close button.
Requires an 'ariaLabel' property, when the header popover is visible`,type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"padding",description:"Padding size class for the popover content.",tags:{},values:["none","small","medium","large"],type:{name:"string"},defaultValue:{func:!1,value:"'large'"}},{name:"contentClass",description:"Additional class name for the content wrapper element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"contentWidth",description:`Width configuration for the popover content. When its value is 'anchor',
the popover content will have the same width as the anchor.`,tags:{},values:["null","anchor"],type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"contentTabindex",description:"Tabindex value for the content. Passing null, no tabindex attribute will be set.",type:{name:"Number || null"},defaultValue:{func:!1,value:"-1"}},{name:"externalAnchor",description:`External anchor id to use in those cases the anchor can't be provided via the slot.
For instance, using the combobox's input as the anchor for the popover.`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"id",description:"The id of the tooltip",type:{name:"string"},defaultValue:{func:!0,value:"function() { return getUniqueString(); }"}},{name:"offset",description:`Displaces the content box from its anchor element
 by the specified number of pixels.
 <a
   class="d-link"
   href="https://atomiks.github.io/tippyjs/v6/all-props/#offset"
   target="_blank"
 >
   Tippy.js docs
 </a>`,type:{name:"array"},defaultValue:{func:!1,value:"[0, 4]"}},{name:"hideOnClick",description:`Determines if the popover hides upon clicking the
anchor or outside the content box.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"modal",description:`Determines modal state. If enabled popover has a modal overlay
preventing interaction with elements below it, but it is invisible.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"fallbackPlacements",description:`If the popover does not fit in the direction described by "placement",
it will attempt to change its direction to the "fallbackPlacements".
<a
  class="d-link"
  href="https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements"
  target="_blank"
>
  Popper.js docs
</a>`,type:{name:"array"},defaultValue:{func:!1,value:"['auto']"}},{name:"placement",description:`The direction the popover displays relative to the anchor.
<a
  class="d-link"
  href="https://atomiks.github.io/tippyjs/v6/all-props/#placement"
  target="_blank"
>
  Tippy.js docs
</a>`,tags:{},values:["top","top-start","top-end","right","right-start","right-end","left","left-start","left-end","bottom","bottom-start","bottom-end","auto","auto-start","auto-end"],type:{name:"string"},defaultValue:{func:!1,value:"'bottom-end'"}},{name:"tether",description:`If set to false the dialog will display over top of the anchor when there is insufficient space.
If set to true it will never move from its position relative to the anchor and will clip instead.
<a
  class="d-link"
  href="https://popper.js.org/docs/v2/modifiers/prevent-overflow/#tether"
  target="_blank"
>
  Popper.js docs
</a>`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"sticky",description:`If the popover sticks to the anchor. This is usually not needed, but can be needed
if the reference element's position is animating, or to automatically update the popover
position in those cases the DOM layout changes the reference element's position.
\`true\` enables it, \`reference\` only checks the "reference" rect for changes and \`popper\` only
checks the "popper" rect for changes.
<a
  class="d-link"
  href="https://atomiks.github.io/tippyjs/v6/all-props/#sticky"
  target="_blank"
>
  Tippy.js docs
</a>`,tags:{},values:["true","false","reference","popper"],type:{name:"boolean|string"},defaultValue:{func:!1,value:"false"}},{name:"maxHeight",description:`Determines maximum height for the popover before overflow.
Possible units rem|px|em`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"maxWidth",description:`Determines maximum width for the popover before overflow.
Possible units rem|px|%|em`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"showCloseButton",description:"Determines visibility for close button",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"headerClass",description:"Additional class name for the header content wrapper element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"footerClass",description:"Additional class name for the footer content wrapper element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"dialogClass",description:"Additional class name for the dialog element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"initialFocusElement",description:`The element that is focused when the popover is opened. This can be an
HTMLElement within the popover, a string starting with '#' which will
find the element by ID. 'first' which will automatically focus
the first element, or 'dialog' which will focus the dialog window itself.
If the dialog is modal this prop cannot be 'none'.`,tags:{},values:["none","dialog","first"],type:{name:"string|HTMLElement"},defaultValue:{func:!1,value:"'first'"}},{name:"openWithArrowKeys",description:`If the popover should open pressing up or down arrow key on the anchor element.
This can be set when not passing open prop.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"appendTo",description:`Sets the element to which the popover is going to append to.
'body' will append to the nearest body (supports shadow DOM).`,tags:{},values:["'body'","'parent'","HTMLElement",""],type:{name:"HTMLElement|string"},defaultValue:{func:!1,value:"'body'"}}],events:[{name:"opened",description:"Emitted when popover is shown or hidden",type:{names:["Boolean | Array"]},properties:[{type:{names:["undefined"]},name:"<anonymous1>"}]},{name:"update:open",description:"Emitted to sync value with parent",type:{names:["Boolean | Array"]}},{name:"keydown",type:{names:["undefined"]}}],slots:[{name:"anchor",scoped:!0,description:"Anchor element that activates the popover. Usually a button.",bindings:[{name:"attrs",title:"binding"}]},{name:"headerContent",scoped:!0,description:"Slot for popover header content",bindings:[{name:"close",title:"binding"}]},{name:"content",scoped:!0,description:"Slot for the content that is displayed in the popover when it is open.",bindings:[{name:"close",title:"binding"}]},{name:"footerContent",scoped:!0,description:"Slot for the footer content.",bindings:[{name:"close",title:"binding"}]}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/modal.js","/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/sr_only_close_button.js","/home/runner/work/dialtone-vue/dialtone-vue/components/popover/popover.vue"]};export{q as D,W as P,C as a,x as b,l as c,S as d,P as e,k as f};
//# sourceMappingURL=popover-ce96d6a2.js.map
