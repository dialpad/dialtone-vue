import{V as u,g,d as m,c}from"./utils-c2ddd234.js";import{f as t,F as p,x as f,k as v,o as i,n as _,g as h}from"./vue.esm-bundler-238c0022.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";function M(e){return e?e.every(s=>typeof s=="string"?!0:typeof s=="object"?Object.values(u).includes(s==null?void 0:s.type):!1):!0}const r={name:"DtValidationMessages",props:{id:{type:String,default(){return g()}},validationMessages:{type:Array,default:()=>[],validator:e=>M(e)},showMessages:{type:Boolean,default:!0}},computed:{isFilteredValidationMessagesEmpty(){return this.filteredValidationMessages.length===0},filteredValidationMessages(){return m(this.validationMessages)},validationState(){return c(this.validationMessages)}},methods:{getMessageKey(e,s){return`validation-message-${e}-${s}-${this.id}`},messageTypeClass(e){return{error:"base-input__message--error d-validation-message--error",warning:"base-input__message--warning d-validation-message--warning",success:"base-input__message--success d-validation-message--success"}[e]}}},V={key:0,class:"base-input__messages d-d-flex d-fd-column","data-qa":"validation-messages-container"},w=["innerHTML"];function S(e,s,o,T,b,a){return o.showMessages&&!a.isFilteredValidationMessagesEmpty?(i(),t("div",V,[(i(!0),t(p,null,f(a.filteredValidationMessages,({message:l,type:n},d)=>(i(),t("div",{key:a.getMessageKey(n,d),role:"status","aria-live":"polite","data-qa":"validation-message",class:_(["base-input__message","d-validation-message",a.messageTypeClass(n)])},[h("p",{innerHTML:l},null,8,w)],2))),128))])):v("v-if",!0)}const C=y(r,[["render",S],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/validation_messages/validation_messages.vue"]]);r.__docgenInfo={displayName:"DtValidationMessages",description:`Validation messages are used to convey information to the user about the current state of the input element.
These messages can have an error, warning or success type.`,tags:{see:[{description:"https://dialpad.design/components/validation_messages.html",title:"see"}]},exportName:"default",props:[{name:"id",description:"The id of the validation message",type:{name:"string"},defaultValue:{func:!0,value:`function() {
  return getUniqueString();
}`}},{name:"validationMessages",description:'Array of validation messages. Each message has the following structure:\n`{ message: "Some informative message", type: "error|warning|success"}`',type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"showMessages",description:"Show Validation messages",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/validation_messages/validation_messages.vue"]};export{C as D,M as v};
//# sourceMappingURL=validation_messages-735abe2e.js.map
