import{D as m}from"./button-tKM9hhaC.js";import{D as h}from"./popover-RNL6kVCn.js";import{D as b}from"./icon-oxX7Udv7.js";import{D as v,C as w}from"./callbar_button-zFUCEXnv.js";import{u as g}from"./utils-OzGu16i0.js";import{s as l,k as y,u as i,w as a,b as C,m as _,f as k,o as r,g as o,p as B}from"./vue.esm-bundler-pH9C34oL.js";import{_ as S}from"./_plugin-vue_export-helper-x3n3nnut.js";const u={name:"DtRecipeCallbarButtonWithPopover",components:{DtRecipeCallbarButton:v,DtPopover:h,DtButton:m,DtIcon:b},inheritAttrs:!1,props:{id:{type:String,default(){return g.getUniqueString()}},ariaLabel:{type:String,default:null,validator:e=>e||(void 0).$slots.default},arrowButtonLabel:{type:String,required:!0,validator:e=>!!e},placement:{type:String,default:"top"},initialFocusElement:{type:String,default:"first"},showCloseButton:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},forceShowArrow:{type:Boolean,default:!1},active:{type:Boolean,default:!1},danger:{type:Boolean,default:!1},onClick:{type:Function,default:null},buttonClass:{type:[String,Array,Object],default:""},textClass:{type:[String,Array,Object],default:""},buttonWidthSize:{type:String,default:"xl",validator:e=>w.includes(e)},contentClass:{type:[String,Array,Object],default:""},openPopover:{type:Boolean,default:!1}},emits:["arrow-click","click","opened"],data(){return{open:!1}},computed:{showArrowButton(){return this.forceShowArrow||!this.disabled},isCompactMode(){return this.buttonWidthSize==="sm"||this.buttonWidthSize==="md"},showPopover(){return!this.openPopover||this.open?(this.syncOpenState(),!1):this.toggleOpen()}},methods:{arrowClick(e){return this.$emit("arrow-click",e),this.toggleOpen()},toggleOpen(){return this.open=!this.open},syncOpenState(){this.open=this.openPopover},buttonClick(e){this.$props.onClick?this.$emit("click",e):this.arrowClick(e)},onModalIsOpened(e){this.open=e,this.$emit("opened",e)}}},V={class:"d-d-flex d-ai-center"};function D(e,A,t,O,s,n){const c=l("dt-recipe-callbar-button"),d=l("dt-icon"),p=l("dt-button"),f=l("dt-popover");return r(),y("div",V,[i(c,{"aria-label":t.ariaLabel,disabled:t.disabled,active:t.active,danger:t.danger,"button-class":t.buttonClass,"button-width-size":t.buttonWidthSize,"text-class":t.textClass,class:"dt-recipe--callbar-button-with-popover--main-button",onClick:n.buttonClick},{icon:a(()=>[o(e.$slots,"icon")]),tooltip:a(()=>[o(e.$slots,"tooltip")]),default:a(()=>[o(e.$slots,"default")]),_:3},8,["aria-label","disabled","active","danger","button-class","button-width-size","text-class","onClick"]),n.showArrowButton?(r(),C(f,_({key:0,id:t.id,modal:!1,open:s.open,placement:t.placement,"initial-focus-element":t.initialFocusElement,"show-close-button":t.showCloseButton,offset:[0,16],padding:"none",class:"dt-recipe--callbar-button-with-popover--popover-wrapper","dialog-class":["dt-recipe--callbar-button-with-popover--popover",t.contentClass],"header-class":"d-d-flex d-ai-center d-fw-normal d-px12"},e.$attrs,{"open-popover":n.showPopover,onOpened:n.onModalIsOpened}),{anchor:a(()=>[i(p,{circle:"",importance:"clear",size:"lg",class:B(["dt-recipe--callbar-button-with-popover--arrow",{"d-mln24":!n.isCompactMode}]),width:"2rem","aria-label":t.arrowButtonLabel,active:s.open,onClick:n.arrowClick},{icon:a(()=>[i(d,{name:"chevron-up",class:"d-fc-black-800",size:"200"})]),_:1},8,["class","aria-label","active","onClick"])]),content:a(()=>[o(e.$slots,"content")]),headerContent:a(()=>[o(e.$slots,"headerContent")]),footerContent:a(()=>[o(e.$slots,"footerContent")]),_:3},16,["id","open","placement","initial-focus-element","show-close-button","dialog-class","open-popover","onOpened"])):k("v-if",!0)])}const T=S(u,[["render",D],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/buttons/callbar_button_with_popover/callbar_button_with_popover.vue"]]);u.__docgenInfo={displayName:"DtRecipeCallbarButtonWithPopover",exportName:"default",description:"",tags:{},props:[{name:"id",description:"Id for the item.",type:{name:"string"},defaultValue:{func:!0,value:`function() {
  return utils.getUniqueString();
}`}},{name:"ariaLabel",description:"Aria label for the button. If empty, it takes its value from the default slot.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"arrowButtonLabel",description:"Aria label for the arrow. Cannot be empty.",type:{name:"string"},required:!0},{name:"placement",description:"The direction the popover displays relative to the anchor.",tags:{default:[{description:"'top'",title:"default"}]},values:["'bottom'","'bottom-start'","'bottom-end'","'right'","'right-start'","'right-end'","'left'","'left-start'","'left-end'","'top'","'top-start'","'top-end'"],type:{name:"string"},defaultValue:{func:!1,value:"'top'"}},{name:"initialFocusElement",description:`The element that is focused when the popover is opened. This can be an
HTMLElement within the popover, a string starting with '#' which will
find the element by ID. 'first' which will automatically focus
the first element, or 'dialog' which will focus the dialog window itself.
If the dialog is modal this prop cannot be 'none'.`,type:{name:"string"},defaultValue:{func:!1,value:"'first'"}},{name:"showCloseButton",description:"Determines visibility for close button",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"disabled",description:`Determines whether the button should be disabled
default is false.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"forceShowArrow",description:`Forces showing the arrow, even if the button is disabled.
default is false`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"active",description:`Determines whether the button should have active styling
default is false.`,tags:{see:[{description:"https://dialpad.design/components/button/",title:"see"}]},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"danger",description:`Determines whether the button should have danger styling
default is false.`,tags:{see:[{description:"https://dialpad.design/components/button/",title:"see"}]},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"onClick",description:`We need this declaration because of how Vue3 informs the component about a listener.
Spoiler alert: it doesn't.
Vue3 intends to work as a real pub-sub, meaning the publisher has not a clue of who the subscribers are.
This makes it impossible from the regular declaration (emits: ['click']) to check whether
we actually have a click handler or not.
We're hacking it by adding an onClick prop: https://github.com/vuejs/core/issues/5220`,type:{name:"func"},defaultValue:{func:!1,value:"null"}},{name:"buttonClass",description:"Additional class name for the button wrapper element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"textClass",description:"Additional class name for the button text.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"buttonWidthSize",type:{name:"string"},defaultValue:{func:!1,value:"'xl'"},values:["sm","md","lg","xl"]},{name:"contentClass",description:"Additional class name for the popover content wrapper element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"openPopover",description:"To auto open the modal popover.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"arrow-click",description:"Emitted when the arrow is clicked",type:{names:["undefined"]}},{name:"click",description:"Native click event",type:{names:["PointerEvent | KeyboardEvent"]}},{name:"opened",description:"Emitted when modal popover is opened or closed.",type:{names:["undefined"]}}],slots:[{name:"icon"},{name:"tooltip"},{name:"default"},{name:"content"},{name:"headerContent"},{name:"footerContent"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/buttons/callbar_button_with_popover/callbar_button_with_popover.vue"]};export{T as D};
//# sourceMappingURL=callbar_button_with_popover-Rppa27WV.js.map
