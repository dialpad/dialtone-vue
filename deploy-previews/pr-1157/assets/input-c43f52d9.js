import{h as V,e as C,g as w,a as I,V as y}from"./utils-dd7e0c5a.js";import{D as _}from"./validation_messages-10b26c39.js";import{M}from"./input-0111b1ef.js";import{k as z,d as l,e as x,j as a,x as h,n as r,t as f,p as g,z as S,l as E,o as u,q as T}from"./vue.esm-bundler-6a14dfd3.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";const m={TEXT:"text",TEXTAREA:"textarea",PASSWORD:"password",EMAIL:"email",NUMBER:"number",DATE:"date",TIME:"time",FILE:"file"},p={EXTRA_SMALL:"xs",SMALL:"sm",DEFAULT:"md",LARGE:"lg",EXTRA_LARGE:"xl"},L={name:"DtInput",components:{DtValidationMessages:_},mixins:[M],inheritAttrs:!1,props:{name:{type:String,default:""},type:{type:String,default:m.TEXT,validator:e=>Object.values(m).includes(e)},modelValue:{type:[String,Number],default:""},disabled:{type:Boolean,default:!1},label:{type:String,default:""},labelVisible:{type:Boolean,default:!0},description:{type:String,default:""},size:{type:String,default:null,validator:e=>Object.values(p).includes(e)},iconSize:{type:String,default:null,validator:e=>Object.values(p).includes(e)},inputClass:{type:[String,Object,Array],default:""},inputWrapperClass:{type:[String,Object,Array],default:""},currentLength:{type:Number,default:null},retainWarning:{type:Boolean,default:!1},validate:{type:Object,default:null},hidden:{type:Boolean,default:!1}},emits:["input","blur","clear","focus","focusin","focusout","update:modelValue","update:length","update:invalid"],data(){return{descriptionSizeClasses:{lg:"d-description--lg",xl:"d-description--xl"},labelSizeClasses:{xs:"d-label--xs",sm:"d-label--sm",md:"d-label--md",lg:"d-label--lg",xl:"d-label--xl"},isInputFocused:!1,isInvalid:!1,defaultLength:0,hasSlotContent:V}},computed:{isTextarea(){return this.type===m.TEXTAREA},isDefaultSize(){return this.size===p.DEFAULT},isDefaultIconSize(){return this.iconSizeComputed===p.DEFAULT},iconSizeComputed(){return this.iconSize?this.iconSize:this.size},isValidSize(){return Object.values(p).includes(this.size)},isValidDescriptionSize(){return Object.values(C).includes(this.size)},inputComponent(){return this.isTextarea?"textarea":"input"},inputListeners(){return{input:async e=>{let n=e.target.value;this.type===m.FILE&&(n=Array.from(e.target.files).map(d=>d.name)),this.$emit("input",n),this.$emit("update:modelValue",n)},blur:e=>{this.isInputFocused=!1,this.onBlur(e)},focus:e=>{this.isInputFocused=!0,this.$emit("focus",e)},focusin:e=>this.$emit("focusin",e),focusout:e=>this.$emit("focusout",e)}},descriptionKey(){return`input-description-${w()}`},inputState(){return I(this.validationMessages)},defaultLengthCalculation(){return this.calculateLength(this.modelValue)},validationProps(){var e,n,i,d,s,t,c,o,v,b;return{length:{description:(n=(e=this==null?void 0:this.validate)==null?void 0:e.length)==null?void 0:n.description,max:(d=(i=this==null?void 0:this.validate)==null?void 0:i.length)==null?void 0:d.max,warn:(t=(s=this==null?void 0:this.validate)==null?void 0:s.length)==null?void 0:t.warn,message:(o=(c=this==null?void 0:this.validate)==null?void 0:c.length)==null?void 0:o.message,limitMaxLength:(b=(v=this==null?void 0:this.validate)==null?void 0:v.length)!=null&&b.limitMaxLength?this.validate.length.limitMaxLength:!1}}},validationMessages(){return this.showLengthLimitValidation?this.formattedMessages.concat([this.inputLengthErrorMessage()]):this.formattedMessages},showInputState(){return this.showMessages&&this.inputState},inputLength(){return this.currentLength?this.currentLength:this.defaultLengthCalculation},inputLengthState(){return this.inputLength<this.validationProps.length.warn?null:this.inputLength<=this.validationProps.length.max?this.validationProps.length.warn?y.WARNING:null:y.ERROR},shouldValidateLength(){return!!(this.validationProps.length.description&&this.validationProps.length.max)},shouldLimitMaxLength(){return this.shouldValidateLength&&this.validationProps.length.limitMaxLength},showLengthLimitValidation(){return this.shouldValidateLength&&this.inputLengthState!==null&&this.validationProps.length.message&&(this.retainWarning||this.isInputFocused||this.isInvalid)},sizeModifierClass(){return this.isDefaultSize||!this.isValidSize?"":{input:{xs:"d-input--xs",sm:"d-input--sm",lg:"d-input--lg",xl:"d-input--xl"},textarea:{xs:"d-textarea--xs",sm:"d-textarea--sm",lg:"d-textarea--lg",xl:"d-textarea--xl"}}[this.inputComponent][this.size]},stateClass(){return[{input:{error:"d-input--error base-input__input--error",warning:"d-input--warning base-input__input--warning",success:"d-input--success base-input__input--success"},textarea:{error:"d-textarea--error base-input__input--error",warning:"d-textarea--warning base-input__input--warning",success:"d-textarea--success base-input__input--success"}}[this.inputComponent][this.inputState]]}},watch:{isInvalid(e){this.$emit("update:invalid",e)},modelValue:{immediate:!0,handler(e){this.shouldValidateLength&&this.validateLength(this.inputLength),this.currentLength==null&&this.$emit("update:length",this.calculateLength(e))}}},methods:{inputClasses(){return["base-input__input",this.inputComponent==="input"?"d-input":"d-textarea",{[this.stateClass]:this.showInputState,"d-input-icon--left":this.$slots.leftIcon,"d-input-icon--right":this.$slots.rightIcon},this.sizeModifierClass,this.inputClass]},inputWrapperClasses(){return this.hidden?[]:["d-input__wrapper",{[this.stateClass]:this.showInputState},this.inputWrapperClass]},calculateLength(e){return typeof e!="string"?0:[...e].length},inputLengthErrorMessage(){return{message:this.validationProps.length.message,type:this.inputLengthState}},inputIconClasses(e){const n={xs:"d-input-icon--xs",sm:"d-input-icon--sm",lg:"d-input-icon--lg",xl:"d-input-icon--xl"};return[{left:"base-input__icon--left d-input-icon--left",right:"base-input__icon--right d-input-icon--right"}[e],"d-input-icon",{[n[this.iconSizeComputed]]:!this.isDefaultIconSize},this.sizeModifierClass]},onBlur(e){var n;(n=this.$refs.container)!=null&&n.contains(e.relatedTarget)||this.$emit("blur",e)},clear(){this.$emit("input",""),this.$emit("clear")},blur(){this.$refs.input.blur()},focus(){this.$refs.input.focus()},select(){this.$refs.input.select()},getMessageKey(e,n){return`message-${e}-${n}`},validateLength(e){this.isInvalid=e>this.validationProps.length.max}}},P=["aria-details"],D=["id"],N={key:0},j={key:1,"data-qa":"dt-input-length-description",class:r(["d-mb2"])},O=["read-only"],F=["value","name","disabled","maxlength"],k=["value","name","type","disabled","maxlength"];function B(e,n,i,d,s,t){const c=z("dt-validation-messages");return u(),l("div",{ref:"container",class:r(["base-input",{"d-vi-hidden":i.hidden}]),"data-qa":"dt-input"},[x("label",{class:"base-input__label","aria-details":e.$slots.description||i.description?t.descriptionKey:void 0,"data-qa":"dt-input-label-wrapper"},[a(" @slot slot for label, defaults to label prop "),h(e.$slots,"labelSlot",{},()=>[i.labelVisible&&i.label?(u(),l("div",{key:0,ref:"label","data-qa":"dt-input-label",class:r(["base-input__label-text","d-label",s.labelSizeClasses[i.size]])},f(i.label),3)):a("v-if",!0)]),s.hasSlotContent(e.$slots.description)||i.description||t.shouldValidateLength?(u(),l("div",{key:0,id:t.descriptionKey,ref:"description",class:r(["base-input__description","d-description","d-fd-column",s.descriptionSizeClasses[i.size]]),"data-qa":"dt-input-description"},[s.hasSlotContent(e.$slots.description)||i.description?(u(),l("div",N,[a(" @slot slot for description, defaults to description prop "),h(e.$slots,"description",{},()=>[T(f(i.description),1)])])):a("v-if",!0),t.shouldValidateLength?(u(),l("div",j,f(t.validationProps.length.description),1)):a("v-if",!0)],10,D)):a("v-if",!0),x("div",{class:r(t.inputWrapperClasses()),"read-only":i.disabled===!0?!0:void 0},[s.hasSlotContent(e.$slots.leftIcon)?(u(),l("span",{key:0,class:r(t.inputIconClasses("left")),"data-qa":"dt-input-left-icon-wrapper",onFocusout:n[0]||(n[0]=(...o)=>t.onBlur&&t.onBlur(...o))},[a(" @slot Slot for left icon "),h(e.$slots,"leftIcon")],34)):a("v-if",!0),t.isTextarea?(u(),l("textarea",g({key:1,ref:"input",value:i.modelValue,name:i.name,disabled:i.disabled,class:t.inputClasses(),maxlength:t.shouldLimitMaxLength?t.validationProps.length.max:null,"data-qa":"dt-input-input"},e.$attrs,S(t.inputListeners,!0)),null,16,F)):(u(),l("input",g({key:2,ref:"input",value:i.modelValue,name:i.name,type:i.type,disabled:i.disabled,class:t.inputClasses(),maxlength:t.shouldLimitMaxLength?t.validationProps.length.max:null,"data-qa":"dt-input-input"},e.$attrs,S(t.inputListeners,!0)),null,16,k)),s.hasSlotContent(e.$slots.rightIcon)?(u(),l("span",{key:3,class:r(t.inputIconClasses("right")),"data-qa":"dt-input-right-icon-wrapper",onFocusout:n[1]||(n[1]=(...o)=>t.onBlur&&t.onBlur(...o))},[a(" @slot Slot for right icon "),h(e.$slots,"rightIcon")],34)):a("v-if",!0)],10,O)],8,P),E(c,g({"validation-messages":t.validationMessages,"show-messages":e.showMessages,class:e.messagesClass},e.messagesChildProps,{"data-qa":"dt-input-messages"}),null,16,["validation-messages","show-messages","class"])],2)}const G=A(L,[["render",B],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/input/input.vue"]]);L.__docgenInfo={description:`An input field is an input control that allows users to enter alphanumeric information.
It can have a range of options and supports single line and multi-line lengths,
as well as varying formats, including numbers, masked passwords, etc.`,displayName:"DtInput",tags:{property:[{title:"property",type:{name:"Boolean"},name:"placeholder",description:"attribute"}],see:[{description:"https://dialpad.design/components/input.html",title:"see"}]},exportName:"default",props:[{name:"messagesClass",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"Used to customize the validation messages component",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"messagesChildProps",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"A set of props that are passed into the validation messages component",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"showMessages",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"Used to hide / show the validation messages",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"messages",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"Validation messages",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"name",description:"Name property of the input element",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"type",description:"Type of the input, one of: `text`, `password`, `email`, `number`, `textarea`, 'date', 'time'.\nWhen `textarea` a `<textarea>` element will be rendered instead of an `<input>` element.",tags:{},values:["text","password","email","number","textarea","date","time"],type:{name:"string"},defaultValue:{func:!1,value:"INPUT_TYPES.TEXT"}},{name:"modelValue",description:"Value of the input",type:{name:"string|number"},defaultValue:{func:!1,value:"''"}},{name:"disabled",description:"Disables the input",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",description:"Label for the input",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"labelVisible",description:"Determines visibility of input label.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"description",description:"Description for the input",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"size",description:"Size of the input, one of `xs`, `sm`, `md`, `lg`, `xl`",tags:{},values:["null","xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"iconSize",description:"Size of the icon. One of `xs`, `sm`, `md`, `lg`, `xl`. If you do not set this the icon will size relative\nto the input size",tags:{},values:["null","xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"inputClass",description:`Additional class name for the input element.
Can accept String, Object, and Array, i.e. has the
same API as Vue's built-in handling of the class attribute.`,type:{name:"string|object|array"},defaultValue:{func:!1,value:"''"}},{name:"inputWrapperClass",description:`Additional class name for the input wrapper element.
Can accept all of String, Object, and Array, i.e. has the
same api as Vue's built-in handling of the class attribute.`,type:{name:"string|object|array"},defaultValue:{func:!1,value:"''"}},{name:"currentLength",description:`The current character length that the user has entered into the input.
This will only need to be used if you are using \`validate.length\` and
the string contains abnormal characters.
For example, an emoji could take up many characters in the input, but should only count as 1 character.
If no number is provided, a built-in length calculation will be used for the length validation.`,type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"retainWarning",description:"Whether the input will continue to display a warning validation message even if the input has lost focus.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"validate",description:'Validation for the input. Supports maximum length validation with the structure:\n`{ "length": {"description": string, "max": number, "warn": number, "message": string,\n"limitMaxLength": boolean }}`',type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"hidden",description:"hidden allows to use input without the element visually present in DOM",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"input",description:"Native input event",type:{names:["String"]}},{name:"blur",description:"Native input blur event",type:{names:["FocusEvent"]}},{name:"clear",description:"Input clear event"},{name:"focus",description:"Native input focus event",type:{names:["FocusEvent"]}},{name:"focusin",description:"Native input focusin event",type:{names:["FocusEvent"]}},{name:"focusout",description:"Native input focusout event",type:{names:["FocusEvent"]}},{name:"update:modelValue",description:"Event fired to sync the modelValue prop with the parent component",type:{names:["undefined"]}},{name:"update:length",description:"Length of the input when currentLength prop is not passed",type:{names:["Number"]}},{name:"update:invalid",description:"Result of the input validation",type:{names:["Boolean"]}}],slots:[{name:"labelSlot",description:"slot for label, defaults to label prop"},{name:"description",description:"slot for description, defaults to description prop"},{name:"leftIcon",description:"Slot for left icon"},{name:"rightIcon",description:"Slot for right icon"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/input.js","/home/runner/work/dialtone-vue/dialtone-vue/components/input/input.vue"]};export{G as D,p as I,m as a};
//# sourceMappingURL=input-c43f52d9.js.map
