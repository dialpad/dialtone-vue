import{V as o,g as l,a as d,b as u}from"./utils-5c9c602d.js";import{n as g}from"./_plugin-vue2_normalizer-2bbd088e.js";function m(s){return s?s.every(e=>typeof e=="string"?!0:typeof e=="object"?Object.values(o).includes(e==null?void 0:e.type):!1):!0}const c={name:"DtValidationMessages",props:{id:{type:String,default(){return l()}},validationMessages:{type:Array,default:()=>[],validator:s=>m(s)},showMessages:{type:Boolean,default:!0}},computed:{isFilteredValidationMessagesEmpty(){return this.filteredValidationMessages.length===0},filteredValidationMessages(){return d(this.validationMessages)},validationState(){return u(this.validationMessages)}},methods:{getMessageKey(s,e){return`validation-message-${s}-${e}-${this.id}`},messageTypeClass(s){return{error:"base-input__message--error d-validation-message--error",warning:"base-input__message--warning d-validation-message--warning",success:"base-input__message--success d-validation-message--success"}[s]}}};var p=function(){var e=this,a=e._self._c;return e.showMessages&&!e.isFilteredValidationMessagesEmpty?a("div",{staticClass:"base-input__messages d-d-flex d-fd-column",attrs:{"data-qa":"validation-messages-container"}},e._l(e.filteredValidationMessages,function({message:i,type:t},r){return a("div",{key:e.getMessageKey(t,r),class:["base-input__message","d-validation-message",e.messageTypeClass(t)],attrs:{role:"status","aria-live":"polite","data-qa":"validation-message"}},[a("p",{domProps:{innerHTML:e._s(i)}})])}),0):e._e()},f=[],n=g(c,p,f,!1,null,null,null,null);const y=n.exports;n.exports.__docgenInfo={displayName:"DtValidationMessages",description:`Validation messages are used to convey information to the user about the current state of the input element.
These messages can have an error, warning or success type.`,tags:{see:[{description:"https://dialpad.design/components/validation_messages.html",title:"see"}]},exportName:"default",props:[{name:"id",description:"The id of the validation message",type:{name:"string"},defaultValue:{func:!0,value:`function() {
  return getUniqueString();
}`}},{name:"validationMessages",description:'Array of validation messages. Each message has the following structure:\n`{ message: "Some informative message", type: "error|warning|success"}`',type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"showMessages",description:"Show Validation messages",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/validation_messages/validation_messages.vue"]};export{y as D,m as v};
//# sourceMappingURL=validation_messages-7a0488a6.js.map
