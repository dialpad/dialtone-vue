import{V as o}from"./vue.esm-eff6e72e.js";import{L as r,c as p,b as d,g as u}from"./utils-5c0bb241.js";import{M as c}from"./input-79b1c3f5.js";import{D as m}from"./validation_messages-180b4064.js";import{n as f}from"./_plugin-vue2_normalizer-2bbd088e.js";const i={xs:"d-select--xs",sm:"d-select--sm",md:"",lg:"d-select--lg",xl:"d-select--xl"},h={error:"d-select__input--error",warning:"d-select__input--warning",success:"d-select__input--success"},b=t=>!t.index||typeof t.index=="number",g=t=>t.value?typeof t.value=="string"||typeof t.value=="number":!1,y=t=>t.label?typeof t.label=="string":!1,v=t=>t?t.every(e=>!(!b(e)||!g(e)||!y(e))):!0,_={name:"DtSelectMenu",components:{DtValidationMessages:m},mixins:[c],inheritAttrs:!1,props:{label:{type:String,default:""},description:{type:String,default:""},options:{type:Array,default:()=>[],validator:t=>v(t)},size:{type:String,default:"md",validator:t=>Object.keys(i).includes(t)},labelClass:{type:[String,Array,Object],default:""},descriptionClass:{type:[String,Array,Object],default:""},selectClass:{type:[String,Array,Object],default:""},optionClass:{type:[String,Array,Object],default:""},labelChildProps:{type:Object,default:()=>({})},descriptionChildProps:{type:Object,default:()=>({})},optionChildProps:{type:Object,default:()=>({})},disabled:{type:Boolean,default:!1}},emits:["input","change"],data(){return{LABEL_SIZE_MODIFIERS:r,DESCRIPTION_SIZE_MODIFIERS:p,SELECT_SIZE_MODIFIERS:i,SELECT_STATE_MODIFIERS:h}},computed:{selectListeners(){return{...this.$listeners,input:()=>{},change:t=>this.emitValue(t.target.value,t)}},state(){return d(this.formattedMessages)},selectKey(){return u()},descriptionKey(){return`select-${this.selectKey}-description`},labelAriaDetails(){return this.$slots.description||this.description?this.descriptionKey:this.$attrs["aria-details"]}},mounted(){this.validateOptionsPresence()},beforeUpdate(){this.validateOptionsPresence()},methods:{emitValue(t,e){this.$emit("input",t,e),this.$emit("change",t,e)},getOptionKey(t){return`select-${this.selectKey}-option-${t}`},validateOptionsPresence(){var t;((t=this.options)==null?void 0:t.length)<1&&!this.$slots.default&&o.util.warn("Options are expected to be provided via prop or slot",this)}}};var l=function(){var e=this,s=e._self._c;return s("div",[s("label",[e.$slots.label||e.label?s("div",e._b({class:["d-label",e.LABEL_SIZE_MODIFIERS[e.size],e.labelClass],attrs:{"aria-details":e.labelAriaDetails,"data-qa":"dt-select-label"}},"div",e.labelChildProps,!1),[e._t("label",function(){return[e._v(e._s(e.label))]})],2):e._e(),e.$slots.description||e.description?s("div",e._b({class:["d-description",e.DESCRIPTION_SIZE_MODIFIERS[e.size],e.descriptionClass],attrs:{id:e.descriptionKey,"data-qa":"dt-select-description"}},"div",e.descriptionChildProps,!1),[e._t("description",function(){return[e._v(e._s(e.description))]})],2):e._e(),s("div",{class:["d-select",e.SELECT_SIZE_MODIFIERS[e.size],e.selectClass,{"d-select--disabled":e.disabled}],attrs:{"data-qa":"dt-select-wrapper"}},[s("select",e._g(e._b({class:["d-select__input",e.SELECT_STATE_MODIFIERS[e.state]],attrs:{"data-qa":"dt-select",disabled:e.disabled}},"select",e.$attrs,!1),e.selectListeners),[e._t("default",function(){return e._l(e.options,function(a){return s("option",e._b({key:e.getOptionKey(a.value),class:e.optionClass,domProps:{value:a.value}},"option",e.optionChildProps,!1),[e._v(" "+e._s(a.label)+" ")])})})],2)])]),s("dt-validation-messages",e._b({class:e.messagesClass,attrs:{"validation-messages":e.formattedMessages,"show-messages":e.showMessages,"data-qa":"dt-select-messages"}},"dt-validation-messages",e.messagesChildProps,!1))],1)},S=[];l._withStripped=!0;var n=f(_,l,S,!1,null,null,null,null);n.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/select_menu/select_menu.vue";const M=n.exports;n.exports.__docgenInfo={description:"A select menu is an input control that allows users to choose one option from a list.",displayName:"DtSelectMenu",tags:{property:[{title:"property",type:{name:"Boolean"},name:"disabled",description:"attribute"},{title:"property",type:{name:"String"},name:"name",description:"attribute"},{title:"property",type:{name:"String"},name:"value",description:"attribute"}],see:[{description:"https://dialpad.design/components/select.html",title:"see"}]},exportName:"default",props:[{name:"messagesClass",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"Used to customize the validation messages component",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"messagesChildProps",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"A set of props that are passed into the validation messages component",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"showMessages",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"Used to hide / show the validation messages",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"messages",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"Validation messages",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"label",description:"Label for the select",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"description",description:"Description for the select",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"options",description:"Select Menu Options, overridden by default slot. Each option has the following structure:\n`{ index: number (optional), value: number || string (required), label: string (required) }`",tags:{params:[{title:"param",type:{name:"Object[]"},name:"options",description:"Optional - A list that can be used to create a list of select menu options"},{title:"param",type:{name:"number"},name:"options",description:"[].index - Optional - The index of the option"},{title:"param",type:{name:"union",elements:[{name:"number"},{name:"string"}]},name:"options",description:"[].value - Required - The option value"},{title:"param",type:{name:"string"},name:"options",description:"[].label - Required - The option Label"}]},type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"size",description:"Controls the size of the select",tags:{},values:["xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"labelClass",description:"Used to customize the label container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"descriptionClass",description:"Used to customize the description container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"selectClass",description:"Used to customize the select",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"optionClass",description:"Used to customize each option, should options be provided via prop",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"labelChildProps",description:"A set of props that are passed into the label container",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"descriptionChildProps",description:"A set of props that are passed into the description container",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"optionChildProps",description:"A set of props that are passed into each option, should options be provided via prop",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"disabled",description:"Disabled state of the select",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"input",description:"Native input event",type:{names:["String | Number"]},properties:[{type:{names:["undefined"]},name:"<anonymous1>"}]},{name:"change",description:"Native change event",type:{names:["String | Number"]},properties:[{type:{names:["undefined"]},name:"<anonymous1>"}]}],slots:[{name:"label",description:"Slot for label, defaults to label prop"},{name:"description",description:"Slot for description, defaults to description prop"},{name:"default",description:"Slot for select menu options, defaults to options prop"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/input.js","/home/runner/work/dialtone-vue/dialtone-vue/components/select_menu/select_menu.vue"]};export{M as D,i as S};
//# sourceMappingURL=select_menu-6f656159.js.map
