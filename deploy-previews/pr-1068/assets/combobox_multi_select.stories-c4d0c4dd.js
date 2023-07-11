import{a as h}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as U}from"./storybook_utils-3dddf937.js";import{D as q}from"./combobox_with_popover-9528bdc9.js";import{D as Z}from"./input-920ac5b7.js";import{D as G}from"./chip-9c36917e.js";import{D as X,v as Y}from"./validation_messages-6606b97f.js";import{h as J}from"./utils-d48fb0e8.js";import{b as Q}from"./popover-a4b003b1.js";import{S as ee}from"./sr_only_close_button-61524a7c.js";import{a as u,b as f,A as D,w as n,o as r,g as l,l as x,f as I,x as k,p as M,z as te,D as _,u as A,m as b,F as P,d as L,B as se}from"./vue.esm-bundler-8de31a68.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";import{D as ie}from"./list_item-673b49ce.js";const S=[{id:"item1",value:"item1",type:"MAINLINE"},{id:"item2",value:"item2",type:"MAINLINE"},{id:"item3",value:"item3",type:"MAINLINE"},{id:"item4",value:"item4",type:"MAINLINE"},{id:"item5",value:"item5",type:"MAINLINE"},{id:"item6",value:"item6",type:"MAINLINE"},{id:"item7",value:"item7",type:"MAINLINE"},{id:"item8",value:"item8",type:"Other"},{id:"item9",value:"item9",type:"MAINLINE"},{id:"item10",value:"item10",type:"MAINLINE"},{id:"item11",value:"item11",type:"MAINLINE"},{id:"item12",value:"item12",type:"Other"},{id:"item13",value:"item13",type:"MAINLINE"},{id:"item14",value:"item14",type:"MAINLINE"},{id:"item15",value:"item15",type:"MAINLINE"},{id:"item16",value:"item16",type:"MAINLINE"},{id:"item17",value:"item17",type:"MAINLINE"},{id:"item18",value:"item18",type:"Other"},{id:"item19",value:"item19",type:"MAINLINE"},{id:"item20",value:"item20",type:"MAINLINE"},{id:"item21",value:"item21",type:"MAINLINE"},{id:"item22",value:"item22",type:"Other"}],B={EXTRA_SMALL:"xs",SMALL:"sm",DEFAULT:"md"},oe={xs:"xs",sm:"xs",md:"sm"},ne={xs:1.4,sm:.4,md:.2},W={name:"DtRecipeComboboxMultiSelect",components:{DtRecipeComboboxWithPopover:q,DtInput:Z,DtChip:G,DtValidationMessages:X},mixins:[ee],props:{label:{type:String,required:!0},labelVisible:{type:Boolean,default:!0},description:{type:String,default:""},placeholder:{type:String,default:"Select one or start typing"},inputMessages:{type:Array,default:()=>[],validator:e=>Y(e)},showInputMessages:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},loadingMessage:{type:String,default:"loading..."},showList:{type:Boolean,default:null},listMaxHeight:{type:String,default:"300px"},selectedItems:{type:Array,default:function(){return[]}},maxSelected:{type:Number,default:0},maxSelectedMessage:{type:Array,default:function(){return[]}},hasSuggestionList:{type:Boolean,default:!0},size:{type:String,default:"md",validator:e=>Object.values(B).includes(e)},appendTo:{type:[HTMLElement,String],default:"body",validator:e=>Q.includes(e)||e instanceof HTMLElement},transition:{type:String,default:"fade"}},emits:["input","select","remove","max-selected","keyup"],data(){return{value:"",popoverOffset:[0,4],showValidationMessages:!1,initialInputPadding:{},resizeWindowObserver:null,originalInputSize:null,CHIP_SIZES:oe,hasSlotContent:J}},computed:{inputPlaceHolder(){var e;return((e=this.selectedItems)==null?void 0:e.length)>0?"":this.placeholder},chipListeners(){return{keyup:e=>{this.onChipKeyup(e),this.$emit("keyup",e)}}},inputListeners(){return{input:e=>{this.$emit("input",e),this.hasSuggestionList&&this.showComboboxList()},keyup:e=>{this.onInputKeyup(e),this.$emit("keyup",e)},click:e=>{this.hasSuggestionList&&this.showComboboxList()}}}},watch:{selectedItems:{deep:!0,immediate:!0,handler:async function(){await this.$nextTick(),this.setInputPadding(),this.setChipsTopPosition(),this.setInputMinWidth(),this.checkMaxSelected()}},async label(){await this.$nextTick(),this.setChipsTopPosition()},async description(){await this.$nextTick(),this.setChipsTopPosition()},size:{async handler(){await this.$nextTick();const e=this.getInput();this.revertInputPadding(e),this.originalInputSize=e.getBoundingClientRect().height,this.setInputPadding(),this.setChipsTopPosition()},immediate:!0}},mounted(){this.resizeWindowObserver=new ResizeObserver(async()=>{this.setChipsTopPosition(),this.setInputPadding()}),this.resizeWindowObserver.observe(document.body)},beforeUnmount(){var e;(e=this.resizeWindowObserver)==null||e.unobserve(document.body)},methods:{onChipRemove(e){var t;this.$emit("remove",e),(t=this.$refs.input)==null||t.focus()},onComboboxSelect(e){this.value="",this.$emit("select",e)},showComboboxList(){var e;this.showList==null&&((e=this.$refs.comboboxWithPopover)==null||e.showComboboxList())},closeComboboxList(){var e;this.showList==null&&((e=this.$refs.comboboxWithPopover)==null||e.closeComboboxList())},getChipButtons(){return this.$refs.chips&&this.$refs.chips.map(e=>e.$el.querySelector("button"))},getChips(){return this.$refs.chips&&this.$refs.chips.map(e=>e.$el)},getLastChipButton(){return this.$refs.chips&&this.getChipButtons()[this.getChipButtons().length-1]},getLastChip(){return this.$refs.chips&&this.getChips()[this.getChips().length-1]},getFirstChip(){return this.$refs.chips&&this.getChips()[0]},getInput(){var e;return(e=this.$refs.input)==null?void 0:e.$refs.input},onChipKeyup(e){var s;const t=(s=e.code)==null?void 0:s.toLowerCase();t==="arrowleft"?this.navigateBetweenChips(e.target,!0):t==="arrowright"&&(e.target.id===this.getLastChipButton().id?this.moveFromChipToInput():this.navigateBetweenChips(e.target,!1))},onInputKeyup(e){var s;const t=(s=e.code)==null?void 0:s.toLowerCase();this.selectedItems.length>0&&e.target.selectionStart===0&&(t==="backspace"||t==="arrowleft")&&this.moveFromInputToChip()},moveFromInputToChip(){var e;this.getLastChipButton().focus(),(e=this.$refs.input)==null||e.blur(),this.closeComboboxList()},moveFromChipToInput(){var e;this.getLastChipButton().blur(),(e=this.$refs.input)==null||e.focus(),this.showComboboxList()},navigateBetweenChips(e,t){var i;const s=this.getChipButtons().indexOf(e),a=t?s-1:s+1;a<0||a>=((i=this.$refs.chips)==null?void 0:i.length)||(this.getChipButtons()[s].blur(),this.getChipButtons()[a].focus(),this.closeComboboxList())},setChipsTopPosition(){const e=this.getInput();if(!e)return;const t=this.$refs.inputSlotWrapper,s=e.getBoundingClientRect().top-t.getBoundingClientRect().top,a=this.$refs.chipsWrapper;a.style.top=s-ne[this.size]+"px"},setInputPadding(){const e=this.getLastChip(),t=this.getInput(),s=this.$refs.chipsWrapper;if(!t||(this.revertInputPadding(t),this.popoverOffset=[0,4],!e))return;const a=e.offsetLeft+this.getFullWidth(e);t.style.paddingLeft=a+"px";const i=s.getBoundingClientRect().height-4,o=e.offsetTop+2;i>this.originalInputSize&&(t.style.paddingTop=`${o}px`)},revertInputPadding(e){e.style.paddingLeft="",e.style.paddingTop="",e.style.paddingBottom=""},getFullWidth(e){const t=window.getComputedStyle(e);return e.offsetWidth+parseInt(t.marginLeft)+parseInt(t.marginRight)},setInputMinWidth(){const e=this.getFirstChip(),t=this.getInput();t&&(e?t.style.minWidth=this.getFullWidth(e)+4+"px":t.style.minWidth="")},checkMaxSelected(){this.maxSelected!==0&&(this.selectedItems.length>this.maxSelected?(this.showValidationMessages=!0,this.$emit("max-selected")):this.showValidationMessages=!1)}}},ae={ref:"inputSlotWrapper",class:"d-ps-relative d-d-block"},le={ref:"chipsWrapper",class:"d-ps-absolute d-mx2 d-pl1"},re={ref:"header"},de={key:1,class:"d-ta-center d-py16"},ue={ref:"footer"};function pe(e,t,s,a,i,o){const g=u("dt-chip"),y=u("dt-input"),p=u("dt-validation-messages"),v=u("dt-recipe-combobox-with-popover");return r(),f(v,{ref:"comboboxWithPopover",label:s.label,"show-list":s.showList,"max-height":s.listMaxHeight,"popover-offset":i.popoverOffset,"has-suggestion-list":s.hasSuggestionList,"visually-hidden-close-label":e.visuallyHiddenCloseLabel,"visually-hidden-close":e.visuallyHiddenClose,"content-width":"anchor","append-to":s.appendTo,transition:s.transition,onSelect:o.onComboboxSelect},D({input:n(({onInput:C})=>[l("span",ae,[l("span",le,[(r(!0),I(P,null,k(s.selectedItems,d=>(r(),f(g,M({ref_for:!0,ref:"chips",key:d,"label-class":["d-chip__label"],class:["d-mt4","d-mx2","d-zi-base1"],"close-button-props":{ariaLabel:"close"},size:i.CHIP_SIZES[s.size]},_(o.chipListeners),{onKeyup:te(K=>o.onChipRemove(d),["backspace"]),onClose:K=>o.onChipRemove(d)}),{default:n(()=>[A(b(d),1)]),_:2},1040,["size","onKeyup","onClose"]))),128))],512),L(y,M({ref:"input",modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=d=>i.value=d),class:"d-fl-grow1","aria-label":s.label,label:s.labelVisible?s.label:"",description:s.description,placeholder:o.inputPlaceHolder,"show-messages":s.showInputMessages,messages:s.inputMessages,size:s.size},_(o.inputListeners),{onInput:C}),null,16,["modelValue","aria-label","label","description","placeholder","show-messages","messages","size","onInput"]),L(p,{"validation-messages":s.maxSelectedMessage,"show-messages":i.showValidationMessages},null,8,["validation-messages","show-messages"])],512)]),list:n(()=>[l("div",{ref:"list",onMousedown:t[1]||(t[1]=se(()=>{},["prevent"]))},[s.loading?(r(),I("div",de,b(s.loadingMessage),1)):x(e.$slots,"list",{key:0})],544)]),_:2},[i.hasSlotContent(e.$slots.header)?{name:"header",fn:n(()=>[l("div",re,[x(e.$slots,"header")],512)]),key:"0"}:void 0,i.hasSlotContent(e.$slots.footer)?{name:"footer",fn:n(()=>[l("div",ue,[x(e.$slots,"footer")],512)]),key:"1"}:void 0]),1032,["label","show-list","max-height","popover-offset","has-suggestion-list","visually-hidden-close-label","visually-hidden-close","append-to","transition","onSelect"])}const z=O(W,[["render",pe],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/comboboxes/combobox_multi_select/combobox_multi_select.vue"]]);W.__docgenInfo={description:"",displayName:"DtRecipeComboboxMultiSelect",tags:{},exportName:"default",props:[{name:"visuallyHiddenClose",mixin:{name:"Sr-Only close button mixin",path:"../../../common/mixins/sr_only_close_button.js"},description:"If true, a hidden close button is included for screen readers",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"visuallyHiddenCloseLabel",mixin:{name:"Sr-Only close button mixin",path:"../../../common/mixins/sr_only_close_button.js"},description:"Label for the visually hidden close button\nRequired if visuallyHiddenClose is set to `true`",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"label",description:"String to use for the input label.",type:{name:"string"},required:!0},{name:"labelVisible",description:"Determines visibility of input label.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"description",description:"Description for the input",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",description:"Input placeholder",type:{name:"string"},defaultValue:{func:!1,value:"'Select one or start typing'"}},{name:"inputMessages",description:"Input validation messages",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"showInputMessages",description:"Show input validation message",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"loading",description:"Determines if the list is loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loadingMessage",description:"The message when the list is loading",type:{name:"string"},defaultValue:{func:!1,value:"'loading...'"}},{name:"showList",description:`Determines when to show the list element and also controls the aria-expanded attribute.
Leaving this null will have the combobox trigger on input focus by default.
If you set this value, the default trigger behavior will be disabled and you can
control it as you need.`,type:{name:"boolean"},defaultValue:{func:!1,value:"null"}},{name:"listMaxHeight",description:`Determines maximum height for the popover before overflow.
Possible units rem|px|em`,type:{name:"string"},defaultValue:{func:!1,value:"'300px'"}},{name:"selectedItems",description:"The selected items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"maxSelected",description:"Would be the maximum number of selections you can make. 0 is unlimited",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"maxSelectedMessage",description:'Max select message when the max selections is exceeded with the structure:\n`[{"message": string, "type": VALIDATION_MESSAGE_TYPES }]`',type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"hasSuggestionList",description:`Displays the list when the combobox is focused, before the user has typed anything.
When this is enabled the list will not close after selection.`,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"size",description:"Size of the chip, one of `xs`, `sm`, `md`",type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"appendTo",description:`Sets the element to which the popover is going to append to.
'body' will append to the nearest body (supports shadow DOM).`,tags:{},values:["'body'","'parent'","HTMLElement",""],type:{name:"HTMLElement|string"},defaultValue:{func:!1,value:"'body'"}},{name:"transition",description:"Named transition when the content display is toggled.",tags:{see:[{description:"DtLazyShow",title:"see"}]},type:{name:"string"},defaultValue:{func:!1,value:"'fade'"}}],events:[{name:"input",description:"Native input event",type:{names:["String "]}},{name:"select",description:"Event fired when item selected",type:{names:["Number"]}},{name:"remove",description:"Event fired when item removed",type:{names:["String"]}},{name:"max-selected",description:"Event fired when max selected items limit is reached",type:{names:["Object"]}},{name:"keyup",description:"Native keyup event",type:{names:["KeyboardEvent"]}}],slots:[{name:"header"},{name:"list"},{name:"footer"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/sr_only_close_button.js","/home/runner/work/dialtone-vue/dialtone-vue/recipes/comboboxes/combobox_multi_select/combobox_multi_select.vue"]};const H={name:"DtRecipeComboboxMultiSelectDefault",components:{DtRecipeComboboxMultiSelect:z,DtListItem:ie},data(){return{items:S,selected:null}},created(){this.selected=this.$attrs.selected?[...this.$attrs.selected]:[]},methods:{onComboboxInput(e){this.items=S.filter(t=>t.value.includes(e)),this.$attrs.onInput(e)},onComboboxSelect(e){if(this.items[e]){this.$attrs.onSelect(e);const t=this.items[e].value;if(this.selected.includes(t))return;this.selected.push(t),this.$refs.comboboxMultiSelect.$data.value="",this.items=S}},onComboboxMaxSelected(){this.$attrs.onMaxSelected()},onComboboxRemove(e){this.$attrs.onRemove(e);const t=this.selected.indexOf(e);t<0||this.selected.splice(t,1)}}},me=["innerHTML"],ce={class:"d-ps-relative d-stack2 d-m4 d-px0"},he={class:"d-fc-secondary"},fe=["innerHTML"];function be(e,t,s,a,i,o){const g=u("dt-list-item"),y=u("dt-recipe-combobox-multi-select");return r(),f(y,{ref:"comboboxMultiSelect",label:e.$attrs.label,description:e.$attrs.description,"selected-items":i.selected,"label-visible":e.$attrs.labelVisible,size:e.$attrs.size,placeholder:e.$attrs.placeholder,"input-messages":e.$attrs.inputMessages,"show-input-messages":e.$attrs.showInputMessages,loading:e.$attrs.loading,"loading-message":e.$attrs.loadingMessage,"show-list":e.$attrs.showList,"max-selected":e.$attrs.maxSelected,"list-max-height":e.$attrs.listMaxHeight,"max-selected-message":e.$attrs.maxSelectedMessage,"has-suggestion-list":e.$attrs.hasSuggestionList,"visually-hidden-close":e.$attrs.visuallyHiddenClose,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel,"append-to":e.$attrs.appendTo,transition:e.$attrs.transition,onInput:o.onComboboxInput,onSelect:o.onComboboxSelect,onRemove:o.onComboboxRemove,onMaxSelected:o.onComboboxMaxSelected},D({list:n(()=>[l("ul",ce,[(r(!0),I(P,null,k(i.items,(p,v)=>(r(),f(g,{key:p.id,role:"option","navigation-type":"arrow-keys",onClick:C=>o.onComboboxSelect(v)},{right:n(()=>[l("span",he,b(p.type),1)]),default:n(()=>[A(b(p.value)+" ",1)]),_:2},1032,["onClick"]))),128))])]),_:2},[e.$attrs.header?{name:"header",fn:n(()=>[l("span",{innerHTML:e.$attrs.header},null,8,me)]),key:"0"}:void 0,e.$attrs.footer?{name:"footer",fn:n(()=>[l("span",{innerHTML:e.$attrs.footer},null,8,fe)]),key:"1"}:void 0]),1032,["label","description","selected-items","label-visible","size","placeholder","input-messages","show-input-messages","loading","loading-message","show-list","max-selected","list-max-height","max-selected-message","has-suggestion-list","visually-hidden-close","visually-hidden-close-label","append-to","transition","onInput","onSelect","onRemove","onMaxSelected"])}const ge=O(H,[["render",be],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/comboboxes/combobox_multi_select/combobox_multi_select_default.story.vue"]]);H.__docgenInfo={displayName:"DtRecipeComboboxMultiSelectDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/comboboxes/combobox_multi_select/combobox_multi_select_default.story.vue"]};const R={label:"Label Text",labelVisible:!0,listMaxHeight:"300px",loading:!1,loadingMessage:"loading...",selectedItems:[],maxSelected:0,maxSelectedMessage:[],hasSuggestionList:!0,appendTo:"body",showList:null,onInput:h("input"),onSelect:h("select"),onRemove:h("remove"),onMaxSelected:h("maxSelected"),visuallyHiddenCloseLabel:"Close Combobox"},F={list:{description:"Slot for the list",control:"text",table:{category:"slots",type:{summary:"VNode"}}},header:{description:"Slot for popover header content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},footer:{description:"Slot for popover footer content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},label:{control:{type:"text"}},description:{control:{type:"text"}},appendTo:{table:{defaultValue:{summary:"body"}}},size:{control:{type:"select"},options:Object.values(B)},onEscape:{table:{disable:!0}},onHighlight:{table:{disable:!0}},onInput:{table:{disable:!0}},onSelect:{table:{disable:!0}},onMaxSelected:{table:{disable:!0}},onRemove:{table:{disable:!0}},select:{description:"Select item event",table:{type:{summary:"event"}}}},ye={title:"Recipes/Comboboxes/Combobox Multi-Select",component:z,args:R,argTypes:F,excludeStories:/.*Data$/},j=e=>U(e,ge),m={render:j},c={render:j,args:{description:"Select up to 2 options.",maxSelected:2,selectedItems:["item12","item13","item14"],maxSelectedMessage:[{message:"More than 2 selected",type:"error"}]},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1},{id:"label",enabled:!1}]}}}};var w,T,N;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: Template
}`,...(N=(T=m.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var $,V,E;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: Template,
  args: {
    description: 'Select up to 2 options.',
    maxSelected: 2,
    selectedItems: ['item12', 'item13', 'item14'],
    maxSelectedMessage: [{
      message: 'More than 2 selected',
      type: 'error'
    }]
  },
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }, {
          id: 'label',
          enabled: false
        }]
      }
    }
  }
}`,...(E=(V=c.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};const ve=["argsData","argTypesData","Default","WithMaxSelectValidation"],Ee=Object.freeze(Object.defineProperty({__proto__:null,Default:m,WithMaxSelectValidation:c,__namedExportsOrder:ve,argTypesData:F,argsData:R,default:ye},Symbol.toStringTag,{value:"Module"}));export{Ee as C,m as D,c as W,z as a,R as b,F as c};
//# sourceMappingURL=combobox_multi_select.stories-c4d0c4dd.js.map
