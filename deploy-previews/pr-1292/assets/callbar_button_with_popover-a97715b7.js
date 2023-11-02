import{D as l}from"./button-f9ebe2a3.js";import{D as i}from"./popover-9bd073cd.js";import{D as s}from"./icon-f96b5e93.js";import{D as r,C as u}from"./callbar_button-0ce0a9e1.js";import{u as p}from"./utils-5c0bb241.js";import{n as d}from"./_plugin-vue2_normalizer-2bbd088e.js";const c={name:"DtRecipeCallbarButtonWithPopover",components:{DtRecipeCallbarButton:r,DtPopover:i,DtButton:l,DtIcon:s},inheritAttrs:!1,props:{id:{type:String,default(){return p.getUniqueString()}},ariaLabel:{type:String,default:null,validator:t=>t||globalThis.$slots.default},arrowButtonLabel:{type:String,required:!0,validator:t=>!!t},placement:{type:String,default:"top"},initialFocusElement:{type:String,default:"first"},showCloseButton:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},forceShowArrow:{type:Boolean,default:!1},active:{type:Boolean,default:!1},danger:{type:Boolean,default:!1},buttonClass:{type:[String,Array,Object],default:""},textClass:{type:[String,Array,Object],default:""},buttonWidthSize:{type:String,default:"xl",validator:t=>u.includes(t)},contentClass:{type:[String,Array,Object],default:""},openPopover:{type:Boolean,default:!1}},emits:["arrow-click","click","opened"],data(){return{open:!1}},computed:{showArrowButton(){return this.forceShowArrow||!this.disabled},isCompactMode(){return this.buttonWidthSize==="sm"||this.buttonWidthSize==="md"},showPopover(){return!this.openPopover||this.open?(this.syncOpenState(),!1):this.toggleOpen()}},methods:{arrowClick(t){return this.$emit("arrow-click",t),this.toggleOpen()},toggleOpen(){return this.open=!this.open},syncOpenState(){this.open=this.openPopover},buttonClick(t){this.$listeners.click?this.$emit("click",t):this.arrowClick(t)},onModalIsOpened(t){this.open=t,this.$emit("opened",t)}}};var a=function(){var e=this,n=e._self._c;return n("div",{staticClass:"d-d-flex d-ai-center"},[n("dt-recipe-callbar-button",{staticClass:"dt-recipe--callbar-button-with-popover--main-button",attrs:{"aria-label":e.ariaLabel,disabled:e.disabled,active:e.active,danger:e.danger,"button-class":e.buttonClass,"button-width-size":e.buttonWidthSize,"text-class":e.textClass},on:{click:e.buttonClick}},[e._t("icon",null,{slot:"icon"}),e._t("tooltip",null,{slot:"tooltip"}),e._t("default")],2),e.showArrowButton?n("dt-popover",e._b({staticClass:"dt-recipe--callbar-button-with-popover--popover-wrapper",attrs:{id:e.id,modal:!1,open:e.open,placement:e.placement,"initial-focus-element":e.initialFocusElement,"show-close-button":e.showCloseButton,offset:[0,16],padding:"none","dialog-class":["dt-recipe--callbar-button-with-popover--popover",e.contentClass],"header-class":"d-d-flex d-ai-center d-fw-normal d-px12","open-popover":e.showPopover},on:{opened:e.onModalIsOpened},scopedSlots:e._u([{key:"anchor",fn:function(){return[n("dt-button",{class:["dt-recipe--callbar-button-with-popover--arrow",{"d-mln24":!e.isCompactMode}],attrs:{circle:"",importance:"clear",size:"lg",width:"2rem","aria-label":e.arrowButtonLabel,active:e.open},on:{click:e.arrowClick},scopedSlots:e._u([{key:"icon",fn:function(){return[n("dt-icon",{staticClass:"d-fc-black-800",attrs:{name:"chevron-up",size:"200"}})]},proxy:!0}],null,!1,1368564783)})]},proxy:!0}],null,!1,1466460799)},"dt-popover",e.$attrs,!1),[e._t("content",null,{slot:"content"}),e._t("headerContent",null,{slot:"headerContent"}),e._t("footerContent",null,{slot:"footerContent"})],2):e._e()],1)},f=[];a._withStripped=!0;var o=d(c,a,f,!1,null,null,null,null);o.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/buttons/callbar_button_with_popover/callbar_button_with_popover.vue";const y=o.exports;o.exports.__docgenInfo={displayName:"DtRecipeCallbarButtonWithPopover",exportName:"default",description:"",tags:{},props:[{name:"id",description:"Id for the item.",type:{name:"string"},defaultValue:{func:!0,value:`function() {
  return utils.getUniqueString();
}`}},{name:"ariaLabel",description:"Aria label for the button. If empty, it takes its value from the default slot.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"arrowButtonLabel",description:"Aria label for the arrow. Cannot be empty.",type:{name:"string"},required:!0},{name:"placement",description:"The direction the popover displays relative to the anchor.",tags:{default:[{description:"'top'",title:"default"}]},values:["'bottom'","'bottom-start'","'bottom-end'","'right'","'right-start'","'right-end'","'left'","'left-start'","'left-end'","'top'","'top-start'","'top-end'"],type:{name:"string"},defaultValue:{func:!1,value:"'top'"}},{name:"initialFocusElement",description:`The element that is focused when the popover is opened. This can be an
HTMLElement within the popover, a string starting with '#' which will
find the element by ID. 'first' which will automatically focus
the first element, or 'dialog' which will focus the dialog window itself.
If the dialog is modal this prop cannot be 'none'.`,type:{name:"string"},defaultValue:{func:!1,value:"'first'"}},{name:"showCloseButton",description:"Determines visibility for close button",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"disabled",description:`Determines whether the button should be disabled
default is false.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"forceShowArrow",description:`Forces showing the arrow, even if the button is disabled.
default is false`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"active",description:`Determines whether the button should have active styling
default is false.`,tags:{see:[{description:"https://dialpad.design/components/button/",title:"see"}]},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"danger",description:`Determines whether the button should have danger styling
default is false.`,tags:{see:[{description:"https://dialpad.design/components/button/",title:"see"}]},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"buttonClass",description:"Additional class name for the button wrapper element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"textClass",description:"Additional class name for the button text.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"buttonWidthSize",type:{name:"string"},defaultValue:{func:!1,value:"'xl'"},values:["sm","md","lg","xl"]},{name:"contentClass",description:"Additional class name for the popover content wrapper element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"openPopover",description:"To auto open the modal popover.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"arrow-click",description:"Emitted when the arrow is clicked",type:{names:["undefined"]}},{name:"click",description:"Native click event",type:{names:["PointerEvent | KeyboardEvent"]}},{name:"opened",description:"Emitted when modal popover is opened or closed.",type:{names:["undefined"]}}],slots:[{name:"icon",scoped:!0,bindings:[{name:"slot",title:"binding"}]},{name:"tooltip",scoped:!0,bindings:[{name:"slot",title:"binding"}]},{name:"default"},{name:"content",scoped:!0,bindings:[{name:"slot",title:"binding"}]},{name:"headerContent",scoped:!0,bindings:[{name:"slot",title:"binding"}]},{name:"footerContent",scoped:!0,bindings:[{name:"slot",title:"binding"}]}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/buttons/callbar_button_with_popover/callbar_button_with_popover.vue"]};export{y as D};
//# sourceMappingURL=callbar_button_with_popover-a97715b7.js.map
