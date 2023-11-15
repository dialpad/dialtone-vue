import{D as v}from"./button-878f62d6.js";import{D as y}from"./icon-8dfe7109.js";import{g as C,h as _}from"./utils-ddad74ee.js";import{s as r,k as o,b as d,w as p,m as u,t as k,I as g,f as a,o as s,g as c,p as I,u as S}from"./vue.esm-bundler-81c53cfe.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";const h={xs:"d-chip__label--xs",sm:"d-chip__label--sm",md:""},L={xs:"d-chip__close--xs",sm:"d-chip__close--sm",md:""},z={xs:"200",sm:"200",md:"200"},m={name:"DtChip",components:{DtButton:v,DtIcon:y},props:{closeButtonProps:{type:Object,default:function(){return{ariaLabel:"close"}},validator:e=>!!e.ariaLabel},hideClose:{type:Boolean,default:!1},size:{type:String,default:"md",validator:e=>Object.keys(h).includes(e)},interactive:{type:Boolean,default:!0},id:{type:String,default:function(){return C()}},ariaLabel:{type:String,default:""},contentClass:{type:[String,Array,Object],default:""},labelClass:{type:[String,Array,Object],default:""}},emits:["click","close","keyup"],data(){return{isActive:!1,hasSlotContent:_}},computed:{chipListeners(){return{click:e=>{this.interactive&&this.$emit("click",e)},keyup:e=>{var i;((i=e.code)==null?void 0:i.toLowerCase())==="delete"?this.onClose():this.$emit("keyup",e)}}},closeButtonIconSize(){return z[this.size]}},methods:{chipClasses(){return[this.$attrs["grouped-chip"]?"d-chip":"d-chip__label",h[this.size],this.labelClass]},chipCloseButtonClasses(){return["d-chip__close",L[this.size]]},onClose(){this.hideClose||this.$emit("close")}}},D={class:"d-chip"},E={key:0,"data-qa":"dt-chip-icon",class:"d-chip__icon"},V={key:1,"data-qa":"dt-chip-avatar"},w=["id"];function O(e,i,t,P,l,n){const f=r("dt-icon"),b=r("dt-button");return s(),o("span",D,[(s(),d(g(t.interactive?"button":"span"),u({id:t.id,type:t.interactive&&"button",class:n.chipClasses(),"data-qa":"dt-chip","aria-labelledby":t.ariaLabel?void 0:`${t.id}-content`,"aria-label":t.ariaLabel},k(n.chipListeners)),{default:p(()=>[l.hasSlotContent(e.$slots.icon)?(s(),o("span",E,[a(" @slot slot for Chip icon "),c(e.$slots,"icon")])):l.hasSlotContent(e.$slots.avatar)?(s(),o("span",V,[a(" @slot slot for Chip avatar "),c(e.$slots,"avatar")])):a("v-if",!0),l.hasSlotContent(e.$slots.default)?(s(),o("span",{key:2,id:`${t.id}-content`,"data-qa":"dt-chip-label",class:I(["d-truncate","d-chip__text",t.contentClass])},[a(" @slot slot for Content within chip "),c(e.$slots,"default")],10,w)):a("v-if",!0)]),_:3},16,["id","type","class","aria-labelledby","aria-label"])),t.hideClose?a("v-if",!0):(s(),d(b,u({key:0},t.closeButtonProps,{class:n.chipCloseButtonClasses(),"data-qa":"dt-chip-close","aria-label":t.closeButtonProps.ariaLabel,onClick:i[0]||(i[0]=q=>e.$emit("close"))}),{icon:p(()=>[S(f,{name:"close",size:n.closeButtonIconSize},null,8,["size"])]),_:1},16,["class","aria-label"]))])}const T=B(m,[["render",O],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip.vue"]]);m.__docgenInfo={displayName:"DtChip",description:`A chip is a compact UI element that provides brief, descriptive information about an element.
It is terse, ideally one word. It is important a button is identifiable, consistent, and
communicates its actions clearly, and is appropriately sized to its action.`,tags:{see:[{description:"https://dialpad.design/components/chip.html",title:"see"}]},exportName:"default",props:[{name:"closeButtonProps",description:"A set of props to be passed into the modal's close button. Requires an 'ariaLabel' property.",type:{name:"object"},defaultValue:{func:!1,value:"{ ariaLabel: 'close' }"}},{name:"hideClose",description:"Hides the close button on the chip",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"The size of the chip.",tags:{},values:["xs","sm","md"],type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"interactive",description:`The interactivity of the chip.
Makes chip clickable, apply hover/focus/active style, emit keyboard events etc.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"id",description:"Id to use for the dialog's aria-labelledby.",type:{name:"string"},defaultValue:{func:!0,value:"function () { return getUniqueString(); }"}},{name:"ariaLabel",description:`Descriptive label for the chip content.
If this prop is unset the content in the default slot will be used as an aria-label.`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"contentClass",description:"Additional class name for the chip element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"labelClass",description:"Additional class name for the span element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}}],events:[{name:"close",description:"Close button click event"},{name:"click",description:"Native chip click event",type:{names:["PointerEvent | KeyboardEvent"]}},{name:"keyup",description:"Native chip key up event",type:{names:["KeyboardEvent"]}}],slots:[{name:"icon",description:"slot for Chip icon"},{name:"avatar",description:"slot for Chip avatar"},{name:"default",description:"slot for Content within chip"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip.vue"]};export{z as C,T as D,h as a};
//# sourceMappingURL=chip-4b47ee1d.js.map
