import{D as o}from"./button-f9ebe2a3.js";import{D as l}from"./icon-35f50071.js";import{g as c}from"./utils-5c0bb241.js";import{n as r}from"./_plugin-vue2_normalizer-2bbd088e.js";const i={xs:"d-chip__label--xs",sm:"d-chip__label--sm",md:""},p={xs:"d-chip__close--xs",sm:"d-chip__close--sm",md:""},d={xs:"200",sm:"200",md:"200"},u={name:"DtChip",components:{DtButton:o,DtIcon:l},props:{closeButtonProps:{type:Object,default:function(){return{ariaLabel:"close"}},validator:t=>!!t.ariaLabel},hideClose:{type:Boolean,default:!1},size:{type:String,default:"md",validator:t=>Object.keys(i).includes(t)},interactive:{type:Boolean,default:!0},id:{type:String,default:function(){return c()}},ariaLabel:{type:String,default:""},contentClass:{type:[String,Array,Object],default:""},labelClass:{type:[String,Array,Object],default:""}},emits:["click","close","keyup"],data(){return{isActive:!1}},computed:{chipListeners(){return{...this.$listeners,click:t=>{this.interactive&&this.$emit("click",t)},keyup:t=>{var e;((e=t.code)==null?void 0:e.toLowerCase())==="delete"?this.onClose():this.$emit("keyup",t)}}},closeButtonIconSize(){return d[this.size]}},methods:{chipClasses(){return[this.$attrs["grouped-chip"]?"d-chip":"d-chip__label",i[this.size],this.labelClass]},chipCloseButtonClasses(){return["d-chip__close",p[this.size]]},onClose(){this.hideClose||this.$emit("close")}}};var n=function(){var e=this,a=e._self._c;return a("span",{staticClass:"d-chip"},[a(e.interactive?"button":"span",e._g({tag:"component",class:e.chipClasses(),attrs:{id:e.id,type:e.interactive&&"button","data-qa":"dt-chip","aria-labelledby":e.ariaLabel?void 0:`${e.id}-content`,"aria-label":e.ariaLabel}},e.chipListeners),[e.$slots.icon?a("span",{staticClass:"d-chip__icon",attrs:{"data-qa":"dt-chip-icon"}},[e._t("icon")],2):e.$slots.avatar?a("span",{attrs:{"data-qa":"dt-chip-avatar"}},[e._t("avatar")],2):e._e(),e.$slots.default?a("span",{class:["d-truncate","d-chip__text",e.contentClass],attrs:{id:`${e.id}-content`,"data-qa":"dt-chip-label"}},[e._t("default")],2):e._e()]),e.hideClose?e._e():a("dt-button",e._b({class:e.chipCloseButtonClasses(),attrs:{"data-qa":"dt-chip-close","aria-label":e.closeButtonProps.ariaLabel},on:{click:function(m){return e.$emit("close")}},scopedSlots:e._u([{key:"icon",fn:function(){return[a("dt-icon",{attrs:{name:"close",size:e.closeButtonIconSize}})]},proxy:!0}],null,!1,1192647893)},"dt-button",e.closeButtonProps,!1))],1)},h=[];n._withStripped=!0;var s=r(u,n,h,!1,null,null,null,null);s.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip.vue";const y=s.exports;s.exports.__docgenInfo={displayName:"DtChip",description:`A chip is a compact UI element that provides brief, descriptive information about an element.
It is terse, ideally one word. It is important a button is identifiable, consistent, and
communicates its actions clearly, and is appropriately sized to its action.`,tags:{see:[{description:"https://dialpad.design/components/chip.html",title:"see"}]},exportName:"default",props:[{name:"closeButtonProps",description:"A set of props to be passed into the modal's close button. Requires an 'ariaLabel' property.",type:{name:"object"},defaultValue:{func:!1,value:"{ ariaLabel: 'close' }"}},{name:"hideClose",description:"Hides the close button on the chip",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"The size of the chip.",tags:{},values:["xs","sm","md"],type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"interactive",description:`The interactivity of the chip.
Makes chip clickable, apply hover/focus/active style, emit keyboard events etc.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"id",description:"Id to use for the dialog's aria-labelledby.",type:{name:"string"},defaultValue:{func:!0,value:"function () { return getUniqueString(); }"}},{name:"ariaLabel",description:`Descriptive label for the chip content.
If this prop is unset the content in the default slot will be used as an aria-label.`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"contentClass",description:"Additional class name for the chip element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"labelClass",description:"Additional class name for the span element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}}],events:[{name:"close",description:"Close button click event"},{name:"click",description:"Native chip click event",type:{names:["PointerEvent | KeyboardEvent"]}},{name:"keyup",description:"Native chip key up event",type:{names:["KeyboardEvent"]}}],slots:[{name:"icon",description:"slot for Chip icon"},{name:"avatar",description:"slot for Chip avatar"},{name:"default",description:"slot for Content within chip"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip.vue"]};export{d as C,y as D,i as a};
//# sourceMappingURL=chip-9af52e6b.js.map
