import{D as w}from"./combobox_with_popover-4c9ee877.js";import{D as _}from"./input-72c35e7a.js";import{D as M}from"./chip-417db1c4.js";import{D as N,v as E}from"./validation_messages-614221c1.js";import{h as T}from"./utils-5c53e9f9.js";import{f as V}from"./popover-d5f9642b.js";import{S as k}from"./sr_only_close_button-0a316981.js";import{k as u,v as h,J as A,m as l,o as p,e as r,x as d,d as m,g as P,p as c,y as B,z as f,q as O,t as g,F as W,l as y,K as D}from"./vue.esm-bundler-a9a971fb.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";const ne=[{id:"item1",value:"item1",type:"MAINLINE"},{id:"item2",value:"item2",type:"MAINLINE"},{id:"item3",value:"item3",type:"MAINLINE"},{id:"item4",value:"item4",type:"MAINLINE"},{id:"item5",value:"item5",type:"MAINLINE"},{id:"item6",value:"item6",type:"MAINLINE"},{id:"item7",value:"item7",type:"MAINLINE"},{id:"item8",value:"item8",type:"Other"},{id:"item9",value:"item9",type:"MAINLINE"},{id:"item10",value:"item10",type:"MAINLINE"},{id:"item11",value:"item11",type:"MAINLINE"},{id:"item12",value:"item12",type:"Other"},{id:"item13",value:"item13",type:"MAINLINE"},{id:"item14",value:"item14",type:"MAINLINE"},{id:"item15",value:"item15",type:"MAINLINE"},{id:"item16",value:"item16",type:"MAINLINE"},{id:"item17",value:"item17",type:"MAINLINE"},{id:"item18",value:"item18",type:"Other"},{id:"item19",value:"item19",type:"MAINLINE"},{id:"item20",value:"item20",type:"MAINLINE"},{id:"item21",value:"item21",type:"MAINLINE"},{id:"item22",value:"item22",type:"Other"}],H={EXTRA_SMALL:"xs",SMALL:"sm",DEFAULT:"md"},R={xs:"xs",sm:"xs",md:"sm"},F={xs:1.4,sm:.4,md:.2},b={name:"DtRecipeComboboxMultiSelect",components:{DtRecipeComboboxWithPopover:w,DtInput:_,DtChip:M,DtValidationMessages:N},mixins:[k],props:{label:{type:String,required:!0},labelVisible:{type:Boolean,default:!0},description:{type:String,default:""},placeholder:{type:String,default:"Select one or start typing"},inputMessages:{type:Array,default:()=>[],validator:e=>E(e)},showInputMessages:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},loadingMessage:{type:String,default:"loading..."},showList:{type:Boolean,default:null},listMaxHeight:{type:String,default:"300px"},selectedItems:{type:Array,default:function(){return[]}},maxSelected:{type:Number,default:0},maxSelectedMessage:{type:Array,default:function(){return[]}},hasSuggestionList:{type:Boolean,default:!0},size:{type:String,default:"md",validator:e=>Object.values(H).includes(e)},appendTo:{type:[HTMLElement,String],default:"body",validator:e=>V.includes(e)||e instanceof HTMLElement},transition:{type:String,default:"fade"}},emits:["input","select","remove","max-selected","keyup"],data(){return{value:"",popoverOffset:[0,4],showValidationMessages:!1,initialInputPadding:{},resizeWindowObserver:null,originalInputSize:null,CHIP_SIZES:R,hasSlotContent:T}},computed:{inputPlaceHolder(){var e;return((e=this.selectedItems)==null?void 0:e.length)>0?"":this.placeholder},chipListeners(){return{keyup:e=>{this.onChipKeyup(e),this.$emit("keyup",e)}}},inputListeners(){return{input:e=>{this.$emit("input",e),this.hasSuggestionList&&this.showComboboxList()},keyup:e=>{this.onInputKeyup(e),this.$emit("keyup",e)},click:e=>{this.hasSuggestionList&&this.showComboboxList()}}}},watch:{selectedItems:{deep:!0,handler:async function(){this.initSelectedItems()}},async label(){await this.$nextTick(),this.setChipsTopPosition()},async description(){await this.$nextTick(),this.setChipsTopPosition()},size:{async handler(){await this.$nextTick();const e=this.getInput();this.revertInputPadding(e),this.originalInputSize=e.getBoundingClientRect().height,this.setInputPadding(),this.setChipsTopPosition()}}},mounted(){this.resizeWindowObserver=new ResizeObserver(async()=>{this.setChipsTopPosition(),this.setInputPadding()}),this.resizeWindowObserver.observe(document.body),this.initSelectedItems()},beforeUnmount(){var e;(e=this.resizeWindowObserver)==null||e.unobserve(document.body)},methods:{async initSelectedItems(){await this.$nextTick(),this.setInputPadding(),this.setChipsTopPosition(),this.setInputMinWidth(),this.checkMaxSelected()},onChipRemove(e){var i;this.$emit("remove",e),(i=this.$refs.input)==null||i.focus()},onComboboxSelect(e){this.value="",this.$emit("select",e)},showComboboxList(){var e;this.showList==null&&((e=this.$refs.comboboxWithPopover)==null||e.showComboboxList())},closeComboboxList(){var e;this.showList==null&&((e=this.$refs.comboboxWithPopover)==null||e.closeComboboxList())},getChipButtons(){return this.$refs.chips&&this.$refs.chips.map(e=>e.$el.querySelector("button"))},getChips(){return this.$refs.chips&&this.$refs.chips.map(e=>e.$el)},getLastChipButton(){return this.$refs.chips&&this.getChipButtons()[this.getChipButtons().length-1]},getLastChip(){return this.$refs.chips&&this.getChips()[this.getChips().length-1]},getFirstChip(){return this.$refs.chips&&this.getChips()[0]},getInput(){var e;return(e=this.$refs.input)==null?void 0:e.$refs.input},onChipKeyup(e){var t;const i=(t=e.code)==null?void 0:t.toLowerCase();i==="arrowleft"?this.navigateBetweenChips(e.target,!0):i==="arrowright"&&(e.target.id===this.getLastChipButton().id?this.moveFromChipToInput():this.navigateBetweenChips(e.target,!1))},onInputKeyup(e){var t;const i=(t=e.code)==null?void 0:t.toLowerCase();this.selectedItems.length>0&&e.target.selectionStart===0&&(i==="backspace"||i==="arrowleft")&&this.moveFromInputToChip()},moveFromInputToChip(){var e;this.getLastChipButton().focus(),(e=this.$refs.input)==null||e.blur(),this.closeComboboxList()},moveFromChipToInput(){var e;this.getLastChipButton().blur(),(e=this.$refs.input)==null||e.focus(),this.showComboboxList()},navigateBetweenChips(e,i){var s;const t=this.getChipButtons().indexOf(e),n=i?t-1:t+1;n<0||n>=((s=this.$refs.chips)==null?void 0:s.length)||(this.getChipButtons()[t].blur(),this.getChipButtons()[n].focus(),this.closeComboboxList())},setChipsTopPosition(){const e=this.getInput();if(!e)return;const i=this.$refs.inputSlotWrapper,t=e.getBoundingClientRect().top-i.getBoundingClientRect().top,n=this.$refs.chipsWrapper;n.style.top=t-F[this.size]+"px"},setInputPadding(){const e=this.getLastChip(),i=this.getInput(),t=this.$refs.chipsWrapper;if(!i||(this.revertInputPadding(i),this.popoverOffset=[0,4],!e))return;const n=e.offsetLeft+this.getFullWidth(e);i.style.paddingLeft=n+"px";const s=t.getBoundingClientRect().height-4,o=e.offsetTop+2;s>this.originalInputSize&&(i.style.paddingTop=`${o}px`)},revertInputPadding(e){e.style.paddingLeft="",e.style.paddingTop="",e.style.paddingBottom=""},getFullWidth(e){const i=window.getComputedStyle(e);return e.offsetWidth+parseInt(i.marginLeft)+parseInt(i.marginRight)},setInputMinWidth(){const e=this.getFirstChip(),i=this.getInput();i&&(e?i.style.minWidth=this.getFullWidth(e)+4+"px":i.style.minWidth="")},checkMaxSelected(){this.maxSelected!==0&&(this.selectedItems.length>this.maxSelected?(this.showValidationMessages=!0,this.$emit("max-selected")):this.showValidationMessages=!1)}}},$={ref:"inputSlotWrapper",class:"d-ps-relative d-d-block"},K={ref:"chipsWrapper",class:"d-ps-absolute d-mx2 d-pl1"},j={ref:"header"},q={key:1,class:"d-ta-center d-py16"},U={ref:"footer"};function Z(e,i,t,n,s,o){const v=u("dt-chip"),I=u("dt-input"),x=u("dt-validation-messages"),C=u("dt-recipe-combobox-with-popover");return p(),h(C,{ref:"comboboxWithPopover",label:t.label,"show-list":t.showList,"max-height":t.listMaxHeight,"popover-offset":s.popoverOffset,"has-suggestion-list":t.hasSuggestionList,"visually-hidden-close-label":e.visuallyHiddenCloseLabel,"visually-hidden-close":e.visuallyHiddenClose,"content-width":"anchor","append-to":t.appendTo,transition:t.transition,onSelect:o.onComboboxSelect},A({input:l(({onInput:S})=>[r("span",$,[r("span",K,[(p(!0),m(W,null,P(t.selectedItems,a=>(p(),h(v,c({ref_for:!0,ref:"chips",key:a,"label-class":["d-chip__label"],class:["d-mt4","d-mx2","d-zi-base1"],"close-button-props":{ariaLabel:"close"},size:s.CHIP_SIZES[t.size]},f(o.chipListeners),{onKeyup:B(L=>o.onChipRemove(a),["backspace"]),onClose:L=>o.onChipRemove(a)}),{default:l(()=>[O(g(a),1)]),_:2},1040,["size","onKeyup","onClose"]))),128))],512),y(I,c({ref:"input",modelValue:s.value,"onUpdate:modelValue":i[0]||(i[0]=a=>s.value=a),class:"d-fl-grow1","aria-label":t.label,label:t.labelVisible?t.label:"",description:t.description,placeholder:o.inputPlaceHolder,"show-messages":t.showInputMessages,messages:t.inputMessages,size:t.size},f(o.inputListeners),{onInput:S}),null,16,["modelValue","aria-label","label","description","placeholder","show-messages","messages","size","onInput"]),y(x,{"validation-messages":t.maxSelectedMessage,"show-messages":s.showValidationMessages},null,8,["validation-messages","show-messages"])],512)]),list:l(()=>[r("div",{ref:"list",onMousedown:i[1]||(i[1]=D(()=>{},["prevent"]))},[t.loading?(p(),m("div",q,g(t.loadingMessage),1)):d(e.$slots,"list",{key:0})],544)]),_:2},[s.hasSlotContent(e.$slots.header)?{name:"header",fn:l(()=>[r("div",j,[d(e.$slots,"header")],512)]),key:"0"}:void 0,s.hasSlotContent(e.$slots.footer)?{name:"footer",fn:l(()=>[r("div",U,[d(e.$slots,"footer")],512)]),key:"1"}:void 0]),1032,["label","show-list","max-height","popover-offset","has-suggestion-list","visually-hidden-close-label","visually-hidden-close","append-to","transition","onSelect"])}const oe=z(b,[["render",Z],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/comboboxes/combobox_multi_select/combobox_multi_select.vue"]]);b.__docgenInfo={description:"",displayName:"DtRecipeComboboxMultiSelect",tags:{},exportName:"default",props:[{name:"visuallyHiddenClose",mixin:{name:"Sr-Only close button mixin",path:"../../../common/mixins/sr_only_close_button.js"},description:"If true, a hidden close button is included for screen readers",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"visuallyHiddenCloseLabel",mixin:{name:"Sr-Only close button mixin",path:"../../../common/mixins/sr_only_close_button.js"},description:"Label for the visually hidden close button\nRequired if visuallyHiddenClose is set to `true`",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"label",description:"String to use for the input label.",type:{name:"string"},required:!0},{name:"labelVisible",description:"Determines visibility of input label.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"description",description:"Description for the input",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",description:"Input placeholder",type:{name:"string"},defaultValue:{func:!1,value:"'Select one or start typing'"}},{name:"inputMessages",description:"Input validation messages",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"showInputMessages",description:"Show input validation message",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"loading",description:"Determines if the list is loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loadingMessage",description:"The message when the list is loading",type:{name:"string"},defaultValue:{func:!1,value:"'loading...'"}},{name:"showList",description:`Determines when to show the list element and also controls the aria-expanded attribute.
Leaving this null will have the combobox trigger on input focus by default.
If you set this value, the default trigger behavior will be disabled and you can
control it as you need.`,type:{name:"boolean"},defaultValue:{func:!1,value:"null"}},{name:"listMaxHeight",description:`Determines maximum height for the popover before overflow.
Possible units rem|px|em`,type:{name:"string"},defaultValue:{func:!1,value:"'300px'"}},{name:"selectedItems",description:"The selected items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"maxSelected",description:"Would be the maximum number of selections you can make. 0 is unlimited",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"maxSelectedMessage",description:'Max select message when the max selections is exceeded with the structure:\n`[{"message": string, "type": VALIDATION_MESSAGE_TYPES }]`',type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"hasSuggestionList",description:`Displays the list when the combobox is focused, before the user has typed anything.
When this is enabled the list will not close after selection.`,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"size",description:"Size of the chip, one of `xs`, `sm`, `md`",type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"appendTo",description:`Sets the element to which the popover is going to append to.
'body' will append to the nearest body (supports shadow DOM).`,tags:{},values:["'body'","'parent'","HTMLElement",""],type:{name:"HTMLElement|string"},defaultValue:{func:!1,value:"'body'"}},{name:"transition",description:"Named transition when the content display is toggled.",tags:{see:[{description:"DtLazyShow",title:"see"}]},type:{name:"string"},defaultValue:{func:!1,value:"'fade'"}}],events:[{name:"input",description:"Native input event",type:{names:["String "]}},{name:"select",description:"Event fired when item selected",type:{names:["Number"]}},{name:"remove",description:"Event fired when item removed",type:{names:["String"]}},{name:"max-selected",description:"Event fired when max selected items limit is reached",type:{names:["Object"]}},{name:"keyup",description:"Native keyup event",type:{names:["KeyboardEvent"]}}],slots:[{name:"header"},{name:"list"},{name:"footer"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/sr_only_close_button.js","/home/runner/work/dialtone-vue/dialtone-vue/recipes/comboboxes/combobox_multi_select/combobox_multi_select.vue"]};export{oe as D,ne as I,H as M};
//# sourceMappingURL=combobox_multi_select-ddfbe3ea.js.map
