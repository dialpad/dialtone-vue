import{V as l,g as d,a as u,b as g}from"./utils-5c0bb241.js";import{n as m}from"./_plugin-vue2_normalizer-2bbd088e.js";function p(s){return s?s.every(e=>typeof e=="string"?!0:typeof e=="object"?Object.values(l).includes(e==null?void 0:e.type):!1):!0}const c={name:"DtValidationMessages",props:{id:{type:String,default(){return d()}},validationMessages:{type:Array,default:()=>[],validator:s=>p(s)},showMessages:{type:Boolean,default:!0}},computed:{isFilteredValidationMessagesEmpty(){return this.filteredValidationMessages.length===0},filteredValidationMessages(){return u(this.validationMessages)},validationState(){return g(this.validationMessages)}},methods:{getMessageKey(s,e){return`validation-message-${s}-${e}-${this.id}`},messageTypeClass(s){return{error:"base-input__message--error d-validation-message--error",warning:"base-input__message--warning d-validation-message--warning",success:"base-input__message--success d-validation-message--success"}[s]}}};var i=function(){var e=this,a=e._self._c;return e.showMessages&&!e.isFilteredValidationMessagesEmpty?a("div",{staticClass:"base-input__messages d-d-flex d-fd-column",attrs:{"data-qa":"validation-messages-container"}},e._l(e.filteredValidationMessages,function({message:r,type:n},o){return a("div",{key:e.getMessageKey(n,o),class:["base-input__message","d-validation-message",e.messageTypeClass(n)],attrs:{role:"status","aria-live":"polite","data-qa":"validation-message"}},[a("p",{domProps:{innerHTML:e._s(r)}})])}),0):e._e()},v=[];i._withStripped=!0;var t=m(c,i,v,!1,null,null,null,null);t.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/validation_messages/validation_messages.vue";const h=t.exports;t.exports.__docgenInfo={displayName:"DtValidationMessages",description:`Validation messages are used to convey information to the user about the current state of the input element.
These messages can have an error, warning or success type.`,tags:{see:[{description:"https://dialpad.design/components/validation_messages.html",title:"see"}]},exportName:"default",props:[{name:"id",description:"The id of the validation message",type:{name:"string"},defaultValue:{func:!0,value:`function() {
  return getUniqueString();
}`}},{name:"validationMessages",description:'Array of validation messages. Each message has the following structure:\n`{ message: "Some informative message", type: "error|warning|success"}`',type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"showMessages",description:"Show Validation messages",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/validation_messages/validation_messages.vue"]};export{h as D,p as v};
//# sourceMappingURL=validation_messages-180b4064.js.map
