import{a as r}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as _}from"./storybook_utils-31ede21d.js";import{D as M}from"./combobox_with_popover-344a729f.js";import{D as L}from"./input-af2edb92.js";import{D as w}from"./chip-59432447.js";import{D as T,v as N}from"./validation_messages-cf9f5f1a.js";import{b as $}from"./popover-5ade6cb2.js";import{S as D}from"./sr_only_close_button-d3682bd6.js";import{n as b}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as E}from"./list_item-bb51fa93.js";const u=[{id:"item1",value:"item1",type:"MAINLINE"},{id:"item2",value:"item2",type:"MAINLINE"},{id:"item3",value:"item3",type:"MAINLINE"},{id:"item4",value:"item4",type:"MAINLINE"},{id:"item5",value:"item5",type:"MAINLINE"},{id:"item6",value:"item6",type:"MAINLINE"},{id:"item7",value:"item7",type:"MAINLINE"},{id:"item8",value:"item8",type:"Other"},{id:"item9",value:"item9",type:"MAINLINE"},{id:"item10",value:"item10",type:"MAINLINE"},{id:"item11",value:"item11",type:"MAINLINE"},{id:"item12",value:"item12",type:"Other"},{id:"item13",value:"item13",type:"MAINLINE"},{id:"item14",value:"item14",type:"MAINLINE"},{id:"item15",value:"item15",type:"MAINLINE"},{id:"item16",value:"item16",type:"MAINLINE"},{id:"item17",value:"item17",type:"MAINLINE"},{id:"item18",value:"item18",type:"Other"},{id:"item19",value:"item19",type:"MAINLINE"},{id:"item20",value:"item20",type:"MAINLINE"},{id:"item21",value:"item21",type:"MAINLINE"},{id:"item22",value:"item22",type:"Other"}],g={EXTRA_SMALL:"xs",SMALL:"sm",DEFAULT:"md"},k={xs:"xs",sm:"xs",md:"sm"},V={xs:1.4,sm:.4,md:.2},P={name:"DtRecipeComboboxMultiSelect",components:{DtRecipeComboboxWithPopover:M,DtInput:L,DtChip:w,DtValidationMessages:T},mixins:[D],props:{label:{type:String,required:!0},labelVisible:{type:Boolean,default:!0},description:{type:String,default:""},placeholder:{type:String,default:"Select one or start typing"},inputMessages:{type:Array,default:()=>[],validator:t=>N(t)},showInputMessages:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},loadingMessage:{type:String,default:"loading..."},showList:{type:Boolean,default:null},listMaxHeight:{type:String,default:"300px"},selectedItems:{type:Array,default:function(){return[]}},maxSelected:{type:Number,default:0},maxSelectedMessage:{type:Array,default:function(){return[]}},hasSuggestionList:{type:Boolean,default:!0},size:{type:String,default:"md",validator:t=>Object.values(g).includes(t)},appendTo:{type:[HTMLElement,String],default:"body",validator:t=>$.includes(t)||t instanceof HTMLElement},transition:{type:String,default:"fade"}},emits:["input","select","remove","max-selected"],data(){return{value:"",popoverOffset:[0,4],showValidationMessages:!1,initialInputPadding:{},resizeWindowObserver:null,originalInputSize:null,CHIP_SIZES:k}},computed:{inputPlaceHolder(){var t;return((t=this.selectedItems)==null?void 0:t.length)>0?"":this.placeholder},chipListeners(){return{...this.$listeners,keyup:t=>{this.onChipKeyup(t),this.$emit("keyup",t)}}},inputListeners(){return{...this.$listeners,input:t=>{this.$emit("input",t),this.hasSuggestionList&&this.showComboboxList()},keyup:t=>{this.onInputKeyup(t),this.$emit("keyup",t)},click:t=>{this.hasSuggestionList&&this.showComboboxList()}}}},watch:{selectedItems:{immediate:!0,async handler(){await this.$nextTick(),this.setInputPadding(),this.setChipsTopPosition(),this.setInputMinWidth(),this.checkMaxSelected()}},async label(){await this.$nextTick(),this.setChipsTopPosition()},async description(){await this.$nextTick(),this.setChipsTopPosition()},size:{async handler(){await this.$nextTick();const t=this.getInput();this.revertInputPadding(t),this.originalInputSize=t.getBoundingClientRect().height,this.setInputPadding(),this.setChipsTopPosition()},immediate:!0}},mounted(){this.resizeWindowObserver=new ResizeObserver(async()=>{this.setChipsTopPosition(),this.setInputPadding()}),this.resizeWindowObserver.observe(document.body)},beforeDestroy(){var t;(t=this.resizeWindowObserver)==null||t.unobserve(document.body)},methods:{onChipRemove(t){var e;this.$emit("remove",t),(e=this.$refs.input)==null||e.focus()},onComboboxSelect(t){this.value="",this.$emit("select",t)},showComboboxList(){var t;this.showList==null&&((t=this.$refs.comboboxWithPopover)==null||t.showComboboxList())},closeComboboxList(){var t;this.showList==null&&((t=this.$refs.comboboxWithPopover)==null||t.closeComboboxList())},getChipButtons(){return this.$refs.chips&&this.$refs.chips.map(t=>t.$el.querySelector("button"))},getChips(){return this.$refs.chips&&this.$refs.chips.map(t=>t.$el)},getLastChipButton(){return this.$refs.chips&&this.getChipButtons()[this.getChipButtons().length-1]},getLastChip(){return this.$refs.chips&&this.getChips()[this.getChips().length-1]},getFirstChip(){return this.$refs.chips&&this.getChips()[0]},getInput(){var t;return(t=this.$refs.input)==null?void 0:t.$refs.input},onChipKeyup(t){var s;const e=(s=t.code)==null?void 0:s.toLowerCase();e==="arrowleft"?this.navigateBetweenChips(t.target,!0):e==="arrowright"&&(t.target.id===this.getLastChipButton().id?this.moveFromChipToInput():this.navigateBetweenChips(t.target,!1))},onInputKeyup(t){var s;const e=(s=t.code)==null?void 0:s.toLowerCase();this.selectedItems.length>0&&t.target.selectionStart===0&&(e==="backspace"||e==="arrowleft")&&this.moveFromInputToChip()},moveFromInputToChip(){var t;this.getLastChipButton().focus(),(t=this.$refs.input)==null||t.blur(),this.closeComboboxList()},moveFromChipToInput(){var t;this.getLastChipButton().blur(),(t=this.$refs.input)==null||t.focus(),this.showComboboxList()},navigateBetweenChips(t,e){var o;const s=this.getChipButtons().indexOf(t),i=e?s-1:s+1;i<0||i>=((o=this.$refs.chips)==null?void 0:o.length)||(this.getChipButtons()[s].blur(),this.getChipButtons()[i].focus(),this.closeComboboxList())},setChipsTopPosition(){const t=this.getInput();if(!t)return;const e=this.$refs.inputSlotWrapper,s=t.getBoundingClientRect().top-e.getBoundingClientRect().top,i=this.$refs.chipsWrapper;i.style.top=s-V[this.size]+"px"},setInputPadding(){const t=this.getLastChip(),e=this.getInput(),s=this.$refs.chipsWrapper;if(!e||(this.revertInputPadding(e),this.popoverOffset=[0,4],!t))return;const i=t.offsetLeft+this.getFullWidth(t);e.style.paddingLeft=i+"px";const o=s.getBoundingClientRect().height-4,n=t.offsetTop+2;o>this.originalInputSize&&(e.style.paddingTop=`${n}px`)},revertInputPadding(t){t.style.paddingLeft="",t.style.paddingTop="",t.style.paddingBottom=""},getFullWidth(t){const e=window.getComputedStyle(t);return t.offsetWidth+parseInt(e.marginLeft)+parseInt(e.marginRight)},setInputMinWidth(){const t=this.getFirstChip(),e=this.getInput();e&&(t?e.style.minWidth=this.getFullWidth(t)+4+"px":e.style.minWidth="")},checkMaxSelected(){this.maxSelected!==0&&(this.selectedItems.length>this.maxSelected?(this.showValidationMessages=!0,this.$emit("max-selected")):this.showValidationMessages=!1)}}};var A=function(){var e=this,s=e._self._c;return s("dt-recipe-combobox-with-popover",{ref:"comboboxWithPopover",attrs:{label:e.label,"show-list":e.showList,"max-height":e.listMaxHeight,"popover-offset":e.popoverOffset,"has-suggestion-list":e.hasSuggestionList,"visually-hidden-close-label":e.visuallyHiddenCloseLabel,"visually-hidden-close":e.visuallyHiddenClose,"content-width":"anchor","append-to":e.appendTo,transition:e.transition},on:{select:e.onComboboxSelect},scopedSlots:e._u([{key:"input",fn:function({onInput:i}){return[s("span",{ref:"inputSlotWrapper",staticClass:"d-ps-relative d-d-block"},[s("span",{ref:"chipsWrapper",staticClass:"d-ps-absolute d-mx2 d-pl1"},e._l(e.selectedItems,function(o){return s("dt-chip",e._g({key:o.id,ref:"chips",refInFor:!0,class:["d-mt4","d-mx2","d-zi-base1"],attrs:{"label-class":["d-chip__label"],"close-button-props":{ariaLabel:"close"},size:e.CHIP_SIZES[e.size]},on:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"backspace",void 0,n.key,void 0)?null:e.onChipRemove(o)},close:function(n){return e.onChipRemove(o)}}},e.chipListeners),[e._v(" "+e._s(o)+" ")])}),1),s("dt-input",e._g({ref:"input",staticClass:"d-fl-grow1",attrs:{"aria-label":e.label,label:e.labelVisible?e.label:"",description:e.description,placeholder:e.inputPlaceHolder,"show-messages":e.showInputMessages,messages:e.inputMessages,size:e.size},on:{input:i},model:{value:e.value,callback:function(o){e.value=o},expression:"value"}},e.inputListeners)),s("dt-validation-messages",{attrs:{"validation-messages":e.maxSelectedMessage,"show-messages":e.showValidationMessages}})],1)]}},{key:"header",fn:function(){return[e.$slots.header?s("div",{ref:"header"},[e._t("header")],2):e._e()]},proxy:!0},{key:"list",fn:function(){return[s("div",{ref:"list",on:{mousedown:function(i){i.preventDefault()}}},[e.loading?s("div",{staticClass:"d-ta-center d-py16"},[e._v(" "+e._s(e.loadingMessage)+" ")]):e._t("list")],2)]},proxy:!0},{key:"footer",fn:function(){return[e.$slots.footer?s("div",{ref:"footer"},[e._t("footer")],2):e._e()]},proxy:!0}],null,!0)})},O=[],y=b(P,A,O,!1,null,null,null,null);const v=y.exports;y.exports.__docgenInfo={description:"",displayName:"DtRecipeComboboxMultiSelect",tags:{},exportName:"default",props:[{name:"visuallyHiddenClose",mixin:{name:"Sr-Only close button mixin",path:"../../../common/mixins/sr_only_close_button.js"},description:"If true, a hidden close button is included for screen readers",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"visuallyHiddenCloseLabel",mixin:{name:"Sr-Only close button mixin",path:"../../../common/mixins/sr_only_close_button.js"},description:"Label for the visually hidden close button\nRequired if visuallyHiddenClose is set to `true`",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"label",description:"String to use for the input label.",type:{name:"string"},required:!0},{name:"labelVisible",description:"Determines visibility of input label.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"description",description:"Description for the input",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",description:"Input placeholder",type:{name:"string"},defaultValue:{func:!1,value:"'Select one or start typing'"}},{name:"inputMessages",description:"Input validation messages",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"showInputMessages",description:"Show input validation message",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"loading",description:"Determines if the list is loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loadingMessage",description:"The message when the list is loading",type:{name:"string"},defaultValue:{func:!1,value:"'loading...'"}},{name:"showList",description:`Determines when to show the list element and also controls the aria-expanded attribute.
Leaving this null will have the combobox trigger on input focus by default.
If you set this value, the default trigger behavior will be disabled and you can
control it as you need.`,type:{name:"boolean"},defaultValue:{func:!1,value:"null"}},{name:"listMaxHeight",description:`Determines maximum height for the popover before overflow.
Possible units rem|px|em`,type:{name:"string"},defaultValue:{func:!1,value:"'300px'"}},{name:"selectedItems",description:"The selected items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"maxSelected",description:"Would be the maximum number of selections you can make. 0 is unlimited",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"maxSelectedMessage",description:'Max select message when the max selections is exceeded with the structure:\n`[{"message": string, "type": VALIDATION_MESSAGE_TYPES }]`',type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"hasSuggestionList",description:`Displays the list when the combobox is focused, before the user has typed anything.
When this is enabled the list will not close after selection.`,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"size",description:"Size of the chip, one of `xs`, `sm`, `md`",type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"appendTo",description:`Sets the element to which the popover is going to append to.
'body' will append to the nearest body (supports shadow DOM).`,tags:{},values:["'body'","'parent'","HTMLElement",""],type:{name:"HTMLElement|string"},defaultValue:{func:!1,value:"'body'"}},{name:"transition",description:"Named transition when the content display is toggled.",tags:{see:[{description:"DtLazyShow",title:"see"}]},type:{name:"string"},defaultValue:{func:!1,value:"'fade'"}}],events:[{name:"input",description:"Native input event",type:{names:["String "]}},{name:"select",description:"Event fired when item selected",type:{names:["Number"]}},{name:"remove",description:"Event fired when item removed",type:{names:["String"]}},{name:"max-selected",description:"Event fired when max selected items limit is reached",type:{names:["Object"]}},{name:"keyup",type:{names:["undefined"]}}],slots:[{name:"header"},{name:"list"},{name:"footer"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/sr_only_close_button.js","/home/runner/work/dialtone-vue/dialtone-vue/recipes/comboboxes/combobox_multi_select/combobox_multi_select.vue"]};const W={name:"DtRecipeComboboxMultiSelectDefault",components:{DtRecipeComboboxMultiSelect:v,DtListItem:E},data(){return{items:u}},methods:{onComboboxInput(t){this.items=u.filter(e=>e.value.includes(t)),this.onInput(t)},onComboboxSelect(t){if(this.items[t]){this.onSelect(t);const e=this.items[t].value;if(this.selectedItems.includes(e))return;this.selectedItems.push(e),this.$refs.comboboxMultiSelect.$data.value="",this.items=u}},onComboboxMaxSelected(){this.onMaxSelected()},onComboboxRemove(t){this.onRemove(t);const e=this.selectedItems.indexOf(t);e<0||this.selectedItems.splice(e,1)}}};var R=function(){var e=this,s=e._self._c;return s("dt-recipe-combobox-multi-select",{ref:"comboboxMultiSelect",attrs:{label:e.label,"label-visible":e.labelVisible,description:e.description,size:e.size,loading:e.loading,"loading-message":e.loadingMessage,"show-list":e.showList,"selected-items":e.selectedItems,"max-selected":e.maxSelected,"list-max-height":e.listMaxHeight,"max-selected-message":e.maxSelectedMessage,"has-suggestion-list":e.hasSuggestionList,"visually-hidden-close-label":e.visuallyHiddenCloseLabel,"append-to":e.appendTo,transition:e.transition},on:{input:e.onComboboxInput,select:e.onComboboxSelect,remove:e.onComboboxRemove,"max-selected":e.onComboboxMaxSelected},scopedSlots:e._u([e.header?{key:"header",fn:function(){return[s("span",{domProps:{innerHTML:e._s(e.header)}})]},proxy:!0}:null,{key:"list",fn:function(){return[s("ul",{staticClass:"d-ps-relative d-stack2 d-m4 d-px0"},e._l(e.items,function(i,o){return s("dt-list-item",{key:i.id,attrs:{role:"option","navigation-type":"arrow-keys"},on:{click:function(n){return e.onComboboxSelect(o)}},scopedSlots:e._u([{key:"right",fn:function(){return[s("span",{staticClass:"d-fc-secondary"},[e._v(e._s(i.type))])]},proxy:!0}],null,!0)},[e._v(" "+e._s(i.value)+" ")])}),1)]},proxy:!0},e.footer?{key:"footer",fn:function(){return[s("span",{domProps:{innerHTML:e._s(e.footer)}})]},proxy:!0}:null],null,!0)})},z=[],x=b(W,R,z,!1,null,null,null,null);const B=x.exports;x.exports.__docgenInfo={displayName:"DtRecipeComboboxMultiSelectDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/comboboxes/combobox_multi_select/combobox_multi_select_default.story.vue"]};const S={label:"Label Text",labelVisible:!0,listMaxHeight:"300px",loading:!1,loadingMessage:"loading...",selectedItems:[],maxSelected:0,maxSelectedMessage:[],hasSuggestionList:!0,appendTo:"body",showList:null,onInput:r("input"),onSelect:r("select"),onRemove:r("remove"),onMaxSelected:r("maxSelected"),visuallyHiddenCloseLabel:"Close Combobox"},I={list:{description:"Slot for the list",control:"text",table:{category:"slots",type:{summary:"VNode"}}},header:{description:"Slot for popover header content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},footer:{description:"Slot for popover footer content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},label:{control:{type:"text"}},description:{control:{type:"text"}},appendTo:{table:{defaultValue:{summary:"body"}}},size:{control:{type:"select"},options:Object.values(g)},onEscape:{table:{disable:!0}},onHighlight:{table:{disable:!0}},onInput:{table:{disable:!0}},onSelect:{table:{disable:!0}},onMaxSelected:{table:{disable:!0}},onRemove:{table:{disable:!0}},select:{description:"Select item event",table:{type:{summary:"event"}}}},H={title:"Recipes/Comboboxes/Combobox Multi-Select",component:v,args:S,argTypes:I,excludeStories:/.*Data$/},C=(t,{argTypes:e})=>_(t,e,B),a={render:C},l={render:C,args:{description:"Select up to 2 options.",maxSelected:2,selectedItems:["item12","item13","item14"],maxSelectedMessage:[{message:"More than 2 selected",type:"error"}]},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1},{id:"label",enabled:!1}]}}}};var p,d,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,h,f;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(h=l.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const F=["argsData","argTypesData","Default","WithMaxSelectValidation"],ee=Object.freeze(Object.defineProperty({__proto__:null,Default:a,WithMaxSelectValidation:l,__namedExportsOrder:F,argTypesData:I,argsData:S,default:H},Symbol.toStringTag,{value:"Module"}));export{ee as C,a as D,l as W,v as a,S as b,I as c};
//# sourceMappingURL=combobox_multi_select.stories-41b605f7.js.map