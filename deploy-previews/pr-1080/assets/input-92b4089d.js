import{j as i}from"./vue.esm-bundler-acd771f7.js";import{V as r,f as n}from"./utils-22e648ba.js";import{v as s}from"./validation_messages-e09629ce.js";const d={inheritAttrs:!1,props:{label:{type:String,default:""},name:{type:String,default:""},value:{type:[String,Number,Boolean,Object],default:null},description:{type:String,default:""},disabled:{type:Boolean,default:!1},validationState:{type:String,default:"",validator:e=>e?Object.values(r).includes(e):!0},inputClass:{type:[String,Array,Object],default:""},labelClass:{type:[String,Array,Object],default:""},descriptionClass:{type:[String,Array,Object],default:""},labelChildProps:{type:Object,default:()=>({})},descriptionChildProps:{type:Object,default:()=>({})}},data(){return{internalDisabled:this.disabled,internalValidationState:this.validationState}},watch:{disabled(e){this.internalDisabled=e},validationState(e){this.internalValidationState=e}},methods:{validateInputLabels(e,t){!e&&!t&&i("You must provide an aria-label when there is no label passed",this)}}},p={model:{prop:"checked"},props:{checked:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},value:{type:[String,Number,Boolean],default:null}},data(){return{internalChecked:this.checked,internalIndeterminate:this.indeterminate}},watch:{checked(e){this.internalChecked=e},indeterminate(e){this.internalIndeterminate=e}}},h={inject:{groupContext:{default:{}},setGroupValue:{default:()=>()=>{}}},data(){return{internalValue:this.value}},computed:{hasGroup(){return Object.prototype.hasOwnProperty.call(this.groupContext,"name")},groupName(){var e;return((e=this.groupContext)==null?void 0:e.name)??""},groupValue(){var e;return(e=this.groupContext)==null?void 0:e.value},groupDisabled(){var e;return((e=this.groupContext)==null?void 0:e.disabled)??!1},groupValidationState(){var e;return((e=this.groupContext)==null?void 0:e.validationState)??null},internalName(){return this.name||this.groupName}},watch:{value(e){this.internalValue=e},groupValue:{immediate:!0,handler(e){this.hasGroup&&(this.internalValue=e)}},groupDisabled:{immediate:!0,handler(e){this.hasGroup&&(this.internalDisabled=this.disabled||e)}},groupValidationState:{immediate:!0,handler(e){this.hasGroup&&(this.internalValidationState=e||this.validationState)}}},created(){var a;const e=Object.prototype.hasOwnProperty.call(this.groupContext,"name"),t=(a=this.groupContext)==null?void 0:a.name;this.name&&e&&t!==this.name&&i(`Component is being used inside a Group. Did you mean to override the name prop value (${t}) with (${this.name})? It is recommended to only set name at the Group level.`,this)}},m={props:{messagesClass:{type:[String,Array,Object],default:""},messagesChildProps:{type:Object,default:()=>({})},showMessages:{type:Boolean,default:!0},messages:{type:Array,default:()=>[],validator:e=>s(e)}},computed:{formattedMessages(){return n(this.messages)}}};export{p as C,h as G,d as I,m as M};
//# sourceMappingURL=input-92b4089d.js.map
