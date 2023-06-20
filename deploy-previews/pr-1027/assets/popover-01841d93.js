import{T as x,B as A,g as V,c as L}from"./tippy_utils-0155706c.js";import{h as C,g as _,i as I}from"./utils-701363a2.js";import{D}from"./lazy_show-aad08efa.js";import{M as B}from"./modal-f96ddab9.js";import{D as R}from"./button-f0bff3c1.js";import{D as N}from"./icon-ee68f285.js";import{a as f,o as r,f as g,n as d,k as l,l as u,b as p,w as h,d as O,m as P,g as y,A as b,H as j,p as H,y as c,B as F}from"./vue.esm-bundler-e62bdd6b.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{a as M,S as W}from"./sr_only_close_button-3b4e4bf4.js";const E={none:void 0,small:"d-p4",medium:"d-p8",large:"d-p16"},q={none:void 0,small:"d-pl4",medium:"d-pl8",large:"d-pl16"},z=["dialog","menu","listbox","tree","grid"],K=["","anchor"],U=["none","dialog","first"],Y=["parent","body"],G=[...x],pe=[...A],k={name:"PopoverHeaderFooter",components:{DtButton:R,DtIcon:N},props:{type:{type:String,validator:function(e){return["header","footer"].includes(e)}},contentClass:{type:[String,Array,Object],default:""},showCloseButton:{type:Boolean,default:!1},closeButtonProps:{type:Object,default:()=>{}}},emits:["close"],data(){return{hasSlotContent:C}},methods:{focusCloseButton(){var t;const e=(t=this.$refs["popover__close-button"])==null?void 0:t.$el;e==null||e.focus()}}};function Z(e,t,n,a,s,o){const m=f("dt-icon"),v=f("dt-button");return r(),g("div",{"data-qa":"dt-popover-header-footer",class:d({"d-popover__header":n.type==="header","d-popover__footer":n.type==="footer"})},[s.hasSlotContent(e.$slots.content)?(r(),g("div",{key:0,"data-qa":"dt-popover-header-footer-content",class:d(["d-to-ellipsis","d-w100p",n.contentClass])},[l(" @slot Slot for main content "),u(e.$slots,"content")],2)):l("v-if",!0),n.showCloseButton?(r(),p(v,P({key:1,ref:"popover__close-button","data-qa":"dt-popover-close",class:"d-p6 d-mr6 d-bc-transparent",importance:"outlined",kind:"muted",circle:""},n.closeButtonProps,{onClick:t[0]||(t[0]=w=>e.$emit("close"))}),{icon:h(()=>[O(m,{name:"close",size:"300"})]),_:1},16)):l("v-if",!0)],2)}const X=S(k,[["render",Z],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/popover/popover_header_footer.vue"]]);k.__docgenInfo={displayName:"PopoverHeaderFooter",exportName:"default",description:"",tags:{},props:[{name:"type",type:{name:"string"},values:["header","footer"]},{name:"contentClass",description:"Additional class name for the content wrapper element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"showCloseButton",description:"Determines visibility for close button",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"closeButtonProps",description:`A set of props to be passed into the popover's header close button.
Requires an 'ariaLabel' property.`,type:{name:"object"},defaultValue:{func:!0,value:"() => {}"}}],events:[{name:"close",description:"Emitted when popover is closed",type:{names:[" Boolean "]}}],slots:[{name:"content",description:"Slot for main content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/popover/popover_header_footer.vue"]};const T={name:"DtPopover",components:{SrOnlyCloseButton:M,DtLazyShow:D,PopoverHeaderFooter:X},mixins:[B,W],props:{open:{type:Boolean,default:null},openOnContext:{type:Boolean,default:!1},elementType:{type:String,default:"div"},transition:{type:String,default:"fade"},role:{type:String,default:"dialog",validator:e=>z.includes(e)},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},closeButtonProps:{type:Object,default:()=>({})},padding:{type:String,default:"large",validator:e=>Object.keys(E).some(t=>t===e)},contentClass:{type:[String,Array,Object],default:""},contentWidth:{type:String,default:"",validator:e=>K.includes(e)},contentAppear:{type:Boolean,default:null},contentTabindex:{type:Number||null,default:-1},externalAnchor:{type:String,default:""},id:{type:String,default(){return _()}},offset:{type:Array,default:()=>[0,4]},hideOnClick:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},fallbackPlacements:{type:Array,default:()=>["auto"]},placement:{type:String,default:"bottom-end"},tether:{type:Boolean,default:!0},sticky:{type:[Boolean,String],default:!1,validator:e=>G.includes(e)},maxHeight:{type:String,default:""},maxWidth:{type:String,default:""},showCloseButton:{type:Boolean,default:!1},headerClass:{type:[String,Array,Object],default:""},footerClass:{type:[String,Array,Object],default:""},dialogClass:{type:[String,Array,Object],default:""},initialFocusElement:{type:[String,HTMLElement],default:"first",validator:e=>U.includes(e)||e instanceof HTMLElement||e.startsWith("#")},openWithArrowKeys:{type:Boolean,default:!1},appendTo:{type:[HTMLElement,String],default:"body",validator:e=>Y.includes(e)||e instanceof HTMLElement}},emits:["keydown","update:open","opened"],data(){return{POPOVER_PADDING_CLASSES:E,POPOVER_HEADER_FOOTER_PADDING_CLASSES:q,intersectionObserver:null,isOutsideViewport:!1,isOpen:!1,toAppear:!1,anchorEl:null,popoverContentEl:null,hasSlotContent:C}},computed:{popoverListeners(){return{keydown:e=>{this.onKeydown(e)},"after-leave":e=>{this.onLeaveTransitionComplete()},"after-enter":e=>{this.onEnterTransitionComplete()}}},calculatedMaxHeight(){return this.isOutsideViewport&&this.modal?"calc(100vh - var(--space-300))":this.maxHeight},labelledBy(){return this.ariaLabelledby||!this.ariaLabel&&_("DtPopover__anchor")}},watch:{$props:{immediate:!0,deep:!0,handler(){this.validateProps()}},modal(e){var t;(t=this.tip)==null||t.setProps({zIndex:e?650:this.calculateAnchorZindex()})},offset(e){var t;(t=this.tip)==null||t.setProps({offset:e})},sticky(e){var t;(t=this.tip)==null||t.setProps({sticky:e})},fallbackPlacements(){var e;(e=this.tip)==null||e.setProps({popperOptions:this.popperOptions()})},tether(){var e;(e=this.tip)==null||e.setProps({popperOptions:this.popperOptions()})},placement(e){var t;(t=this.tip)==null||t.setProps({placement:e})},open:{handler:function(e){e!==null&&(this.isOpen=e),e===!0&&(this.toAppear=!0)},immediate:!0},contentAppear:{handler:function(e){e!==null&&(this.toAppear=e)}},isOpen(e,t){e?(this.initTippyInstance(),this.tip.show()):!e&&t!==e&&(this.removeEventListeners(),this.tip.hide())}},mounted(){const e=this.externalAnchor?this.$refs.anchor.getRootNode().querySelector(`#${this.externalAnchor}`):null;this.anchorEl=e??this.$refs.anchor.children[0],this.popoverContentEl=this.$refs.content.$el,this.isOpen&&(this.initTippyInstance(),this.tip.show()),this.intersectionObserver=new IntersectionObserver(this.hasIntersectedViewport),this.intersectionObserver.observe(this.popoverContentEl)},beforeUnmount(){var e;(e=this.tip)==null||e.destroy(),this.intersectionObserver.disconnect(),this.removeReferences(),this.removeEventListeners()},methods:{hasIntersectedViewport(e){var a;const t=(a=e==null?void 0:e[0])==null?void 0:a.target;if(!t)return;const n=I(t);this.isOutsideViewport=n.bottom||n.top},popperOptions(){return V({fallbackPlacements:this.fallbackPlacements,tether:this.tether,hasHideModifierEnabled:!0})},validateProps(){this.modal&&this.initialFocusElement==="none"&&console.error('If the popover is modal you must set the initialFocusElement prop. Possible values: "dialog", "first", HTMLElement')},calculateAnchorZindex(){var e;return this.$el.getRootNode().querySelector('.d-modal[aria-hidden="false"], .d-modal--transparent[aria-hidden="false"]')||(e=this.anchorEl)!=null&&e.closest(".d-zi-drawer")?650:300},defaultToggleOpen(e){var t,n,a;if(!this.openOnContext&&(this.open===null||this.open===void 0)){if(!((t=this.anchorEl)!=null&&t.contains(e.target))&&!((n=this.anchorEl)!=null&&n.isEqualNode(e.target))||(a=this.anchorEl)!=null&&a.disabled)return;this.toggleOpen()}},async onContext(e){this.openOnContext&&(e.preventDefault(),this.isOpen=!0,await this.$nextTick(),this.tip.setProps({placement:"right-start",getReferenceClientRect:()=>({width:0,height:0,top:e.clientY,bottom:e.clientY,left:e.clientX,right:e.clientX})}))},toggleOpen(){this.isOpen=!this.isOpen},onArrowKeyPress(e){var t;this.open===null&&(this.openWithArrowKeys&&((t=this.anchorEl)!=null&&t.contains(e.target))&&(this.isOpen||(this.isOpen=!0)),this.$emit("keydown",e))},addEventListeners(){window.addEventListener("dt-popover-close",this.closePopover),this.contentWidth==="anchor"&&window.addEventListener("resize",this.onResize)},removeEventListeners(){window.removeEventListener("dt-popover-close",this.closePopover),this.contentWidth==="anchor"&&window.removeEventListener("resize",this.onResize)},closePopover(){this.isOpen=!1},preventScrolling(){var e;if(this.modal){const t=(e=this.anchorEl)==null?void 0:e.closest("body, .tippy-box");t.tagName.toLowerCase()==="body"?(t.classList.add("d-of-hidden"),this.tip.setProps({offset:this.offset})):t.classList.add("d-zi-popover")}},enableScrolling(){var t,n;const e=(t=this.anchorEl)==null?void 0:t.closest("body, .tippy-box");e&&(((n=e.tagName)==null?void 0:n.toLowerCase())==="body"?(e.classList.remove("d-of-hidden"),this.tip.setProps({offset:this.offset})):e.classList.remove("d-zi-popover"))},removeReferences(){this.anchorEl=null,this.popoverContentEl=null,this.tip=null},async onShow(){this.contentWidth==="anchor"&&await this.setPopoverContentAnchorWidth(),this.contentWidth===null&&(this.popoverContentEl.style.width="auto"),this.addEventListeners()},async onLeaveTransitionComplete(){var e;this.modal&&(await this.focusFirstElement(this.$refs.anchor),await this.$nextTick(),this.enableScrolling()),(e=this.tip)==null||e.unmount(),this.$emit("opened",!1),this.open!==null&&this.$emit("update:open",!1)},async onEnterTransitionComplete(){this.focusInitialElement(),await this.$nextTick(),this.preventScrolling(),this.$emit("opened",!0,this.$refs.popover__content),this.open!==null&&this.$emit("update:open",!0)},focusInitialElement(){this.initialFocusElement==="dialog"&&this.$refs.content.$el.focus(),this.initialFocusElement.startsWith("#")&&this.focusInitialElementById(),this.initialFocusElement==="first"&&this.focusFirstElementIfNeeded(this.$refs.popover__content),this.initialFocusElement instanceof HTMLElement&&this.initialFocusElement.focus()},focusInitialElementById(){var t,n,a;const e=(n=(t=this.$refs.content)==null?void 0:t.$el)==null?void 0:n.querySelector(this.initialFocusElement);e?e.focus():console.warn('Could not find the element specified in dt-popover prop "initialFocusElement". Defaulting to focusing the dialog.'),e?e.focus():(a=this.$refs.content)==null||a.$el.focus()},onResize(){this.closePopover()},onClickOutside(){if(!this.hideOnClick)return;this.popoverContentEl.querySelector(".d-popover__anchor--opened")||this.closePopover()},onKeydown(e){e.key==="Tab"&&this.modal&&this.focusTrappedTabPress(e,this.popoverContentEl),e.key==="Escape"&&this.closePopover(),this.$emit("keydown",e)},async setPopoverContentAnchorWidth(){var e;await this.$nextTick(),this.popoverContentEl.style.width=`${(e=this.anchorEl)==null?void 0:e.clientWidth}px`},focusFirstElementIfNeeded(e){var n,a;this._getFocusableElements(e,!0).length!==0?this.focusFirstElement(e):this.showCloseButton?(n=this.$refs.popover__header)==null||n.focusCloseButton():(a=this.$refs.content)==null||a.$el.focus()},initTippyInstance(){var e,t;this.tip=L(this.anchorEl,{popperOptions:this.popperOptions(),contentElement:this.popoverContentEl,placement:this.placement,offset:this.offset,sticky:this.sticky,appendTo:this.appendTo==="body"?(t=(e=this.anchorEl)==null?void 0:e.getRootNode())==null?void 0:t.querySelector("body"):this.appendTo,interactive:!0,trigger:"manual",hideOnClick:!1,zIndex:this.modal?650:this.calculateAnchorZindex(),onClickOutside:this.onClickOutside,onShow:this.onShow})}}},J=["aria-hidden"],Q=["id","tabindex"];function $(e,t,n,a,s,o){const m=f("popover-header-footer"),v=f("sr-only-close-button"),w=f("dt-lazy-show");return r(),g("div",null,[n.modal&&s.isOpen?(r(),p(j,{key:0,to:"body"},[y("div",{class:"d-modal--transparent","aria-hidden":n.modal&&s.isOpen?"false":"true",onClick:t[0]||(t[0]=b(()=>{},["prevent","stop"]))},null,8,J)])):l("v-if",!0),(r(),p(H(n.elementType),{ref:"popover",class:d(["d-popover",{"d-popover__anchor--opened":s.isOpen}]),"data-qa":"dt-popover-container"},{default:h(()=>[l(" eslint-disable-next-line vuejs-accessibility/no-static-element-interactions "),y("div",{id:!n.ariaLabelledby&&o.labelledBy,ref:"anchor","data-qa":"dt-popover-anchor",tabindex:n.openOnContext?0:void 0,onClickCapture:t[1]||(t[1]=(...i)=>o.defaultToggleOpen&&o.defaultToggleOpen(...i)),onContextmenu:t[2]||(t[2]=(...i)=>o.onContext&&o.onContext(...i)),onKeydown:[t[3]||(t[3]=c(b((...i)=>o.onArrowKeyPress&&o.onArrowKeyPress(...i),["prevent"]),["up"])),t[4]||(t[4]=c(b((...i)=>o.onArrowKeyPress&&o.onArrowKeyPress(...i),["prevent"]),["down"])),t[6]||(t[6]=c(i=>e.$emit("keydown",i),["enter"])),t[7]||(t[7]=c(i=>e.$emit("keydown",i),["space"]))],onKeydownCapture:t[5]||(t[5]=c((...i)=>o.closePopover&&o.closePopover(...i),["escape"]))},[l(" @slot Anchor element that activates the popover. Usually a button. "),u(e.$slots,"anchor",{attrs:{"aria-expanded":s.isOpen.toString(),"aria-controls":n.id,"aria-haspopup":n.role}})],40,Q),O(w,P({id:n.id,ref:"content",role:n.role,"data-qa":"dt-popover","aria-hidden":`${!s.isOpen}`,"aria-labelledby":o.labelledBy,"aria-label":n.ariaLabel,"aria-modal":`${!n.modal}`,transition:n.transition,show:s.isOpen,appear:s.toAppear,class:["d-popover__dialog",{"d-popover__dialog--modal":n.modal},n.dialogClass],style:{"max-height":o.calculatedMaxHeight,"max-width":n.maxWidth},css:e.$attrs.css,tabindex:n.contentTabindex},F(o.popoverListeners)),{default:h(()=>[s.hasSlotContent(e.$slots.headerContent)||n.showCloseButton?(r(),p(m,{key:0,ref:"popover__header",class:d(s.POPOVER_HEADER_FOOTER_PADDING_CLASSES[n.padding]),"content-class":n.headerClass,type:"header","show-close-button":n.showCloseButton,"close-button-props":n.closeButtonProps,onClose:o.closePopover},{content:h(()=>[l(" @slot Slot for popover header content "),u(e.$slots,"headerContent",{close:o.closePopover})]),_:3},8,["class","content-class","show-close-button","close-button-props","onClose"])):l("v-if",!0),y("div",{ref:"popover__content","data-qa":"dt-popover-content",class:d(["d-popover__content",s.POPOVER_PADDING_CLASSES[n.padding],n.contentClass])},[l(" @slot Slot for the content that is displayed in the popover when it is open. "),u(e.$slots,"content",{close:o.closePopover})],2),s.hasSlotContent(e.$slots.footerContent)?(r(),p(m,{key:1,ref:"popover__footer",type:"footer",class:d(s.POPOVER_HEADER_FOOTER_PADDING_CLASSES[n.padding]),"content-class":n.footerClass},{content:h(()=>[l(" @slot Slot for the footer content. "),u(e.$slots,"footerContent",{close:o.closePopover})]),_:3},8,["class","content-class"])):l("v-if",!0),e.showVisuallyHiddenClose?(r(),p(v,{key:2,"visually-hidden-close-label":e.visuallyHiddenCloseLabel,onClose:o.closePopover},null,8,["visually-hidden-close-label","onClose"])):l("v-if",!0)]),_:3},16,["id","role","aria-hidden","aria-labelledby","aria-label","aria-modal","transition","show","appear","class","style","css","tabindex"])]),_:3},8,["class"]))])}const de=S(T,[["render",$],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/popover/popover.vue"]]);T.__docgenInfo={description:"A Popover displays a content overlay when its anchor element is activated.",displayName:"DtPopover",tags:{see:[{description:"https://dialpad.design/components/popover.html",title:"see"}]},exportName:"default",props:[{name:"visuallyHiddenClose",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"If true, a hidden close button is included for screen readers",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"visuallyHiddenCloseLabel",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"Label for the visually hidden close button\nRequired if visuallyHiddenClose is set to `true`",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"open",description:`Controls whether the popover is shown. Leaving this null will have the popover trigger on click by default.
If you set this value, the default trigger behavior will be disabled, and you can control it as you need.
Supports v-model`,tags:{},values:["null","true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"null"}},{name:"openOnContext",description:"Opens the popover on right click (context menu). If you set this value to `true`,\nthe default trigger behavior will be disabled.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"elementType",description:"Element type (tag name) of the root element of the component.",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"transition",description:"Named transition when the content display is toggled.",tags:{see:[{description:"DtLazyShow",title:"see"}]},type:{name:"string"},defaultValue:{func:!1,value:"'fade'"}},{name:"role",description:`ARIA role for the content of the popover. Defaults to "dialog".
<a class="d-link" href="https://www.w3.org/TR/wai-aria/#aria-haspopup" target="_blank">aria-haspopup</a>`,type:{name:"string"},defaultValue:{func:!1,value:"'dialog'"}},{name:"ariaLabelledby",description:`ID of the element that serves as the label for the popover content.
Defaults to the "anchor" element; this exists to provide a different
ID of the label element if, for example, the anchor slot contains
other items that do not serve as a label. You should provide this
or ariaLabel, but not both.`,type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"ariaLabel",description:`Descriptive label for the popover content. You should provide this
or ariaLabelledby, but not both.`,type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"closeButtonProps",description:`A set of props to be passed into the popover's header close button.
Requires an 'ariaLabel' property, when the header popover is visible`,type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"padding",description:"Padding size class for the popover content.",tags:{},values:["none","small","medium","large"],type:{name:"string"},defaultValue:{func:!1,value:"'large'"}},{name:"contentClass",description:"Additional class name for the content wrapper element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"contentWidth",description:`Width configuration for the popover content. When its value is 'anchor',
the popover content will have the same width as the anchor.`,tags:{},values:["null","anchor"],type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"contentAppear",description:"Whether to apply transition on initial render in the content lazy show component.",type:{name:"boolean"},defaultValue:{func:!1,value:"null"}},{name:"contentTabindex",description:"Tabindex value for the content. Passing null, no tabindex attribute will be set.",type:{name:"Number || null"},defaultValue:{func:!1,value:"-1"}},{name:"externalAnchor",description:`External anchor id to use in those cases the anchor can't be provided via the slot.
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
'body' will append to the nearest body (supports shadow DOM).`,tags:{},values:["'body'","'parent'","HTMLElement",""],type:{name:"HTMLElement|string"},defaultValue:{func:!1,value:"'body'"}}],events:[{name:"keydown",description:"Native keydown event",type:{names:["KeyboardEvent"]}},{name:"update:open",description:"Event fired to sync the open prop with the parent component",type:{names:["undefined"]}},{name:"opened",description:"Emitted when popover is shown or hidden",type:{names:["Boolean | Array"]},properties:[{type:{names:["undefined"]},name:"<anonymous1>"}]}],slots:[{name:"anchor",scoped:!0,description:"Anchor element that activates the popover. Usually a button.",bindings:[{name:"attrs",title:"binding"}]},{name:"headerContent",scoped:!0,description:"Slot for popover header content",bindings:[{name:"close",title:"binding"}]},{name:"content",scoped:!0,description:"Slot for the content that is displayed in the popover when it is open.",bindings:[{name:"close",title:"binding"}]},{name:"footerContent",scoped:!0,description:"Slot for the footer content.",bindings:[{name:"close",title:"binding"}]}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/modal.js","/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/sr_only_close_button.js","/home/runner/work/dialtone-vue/dialtone-vue/components/popover/popover.vue"]};export{de as D,pe as P,K as a,Y as b,E as c,U as d,z as e,G as f};
//# sourceMappingURL=popover-01841d93.js.map
