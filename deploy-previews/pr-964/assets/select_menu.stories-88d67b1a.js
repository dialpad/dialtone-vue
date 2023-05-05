import{a as m}from"./chunk-OPEUWD42-a3b45fd8.js";import{L as V,l as D,e as O,a as P,h as I,V as w,c as v}from"./storybook_utils-1ef620d9.js";import{V as T}from"./vue.esm-eff6e72e.js";import{M as A}from"./input-c45869b5.js";import{D as L}from"./validation_messages-7d1aadb9.js";import{n as r}from"./_plugin-vue2_normalizer-2bbd088e.js";const l={xs:"d-select--xs",sm:"d-select--sm",md:"",lg:"d-select--lg",xl:"d-select--xl"},j={error:"d-select__input--error",warning:"d-select__input--warning",success:"d-select__input--success"},z=t=>!t.index||typeof t.index=="number",N=t=>t.value?typeof t.value=="string"||typeof t.value=="number":!1,R=t=>t.label?typeof t.label=="string":!1,$=t=>t?t.every(e=>!(!z(e)||!N(e)||!R(e))):!0,F={name:"DtSelectMenu",components:{DtValidationMessages:L},mixins:[A],inheritAttrs:!1,props:{label:{type:String,default:""},description:{type:String,default:""},options:{type:Array,default:()=>[],validator:t=>$(t)},size:{type:String,default:"md",validator:t=>Object.keys(l).includes(t)},labelClass:{type:[String,Array,Object],default:""},descriptionClass:{type:[String,Array,Object],default:""},selectClass:{type:[String,Array,Object],default:""},optionClass:{type:[String,Array,Object],default:""},labelChildProps:{type:Object,default:()=>({})},descriptionChildProps:{type:Object,default:()=>({})},optionChildProps:{type:Object,default:()=>({})},disabled:{type:Boolean,default:!1}},emits:["input","change"],data(){return{LABEL_SIZE_MODIFIERS:V,DESCRIPTION_SIZE_MODIFIERS:D,SELECT_SIZE_MODIFIERS:l,SELECT_STATE_MODIFIERS:j}},computed:{selectListeners(){return{...this.$listeners,input:()=>{},change:t=>this.emitValue(t.target.value)}},state(){return O(this.formattedMessages)},selectKey(){return P()},descriptionKey(){return`select-${this.selectKey}-description`},labelAriaDetails(){return this.$slots.description||this.description?this.descriptionKey:this.$attrs["aria-details"]}},mounted(){this.validateOptionsPresence()},beforeUpdate(){this.validateOptionsPresence()},methods:{emitValue(t){this.$emit("input",t),this.$emit("change",t)},getOptionKey(t){return`select-${this.selectKey}-option-${t}`},validateOptionsPresence(){var t;((t=this.options)==null?void 0:t.length)<1&&!this.$slots.default&&T.util.warn("Options are expected to be provided via prop or slot",this)}}};var S=function(){var e=this,s=e._self._c;return s("div",[s("label",[e.$slots.label||e.label?s("div",e._b({class:["d-label",e.LABEL_SIZE_MODIFIERS[e.size],e.labelClass],attrs:{"aria-details":e.labelAriaDetails,"data-qa":"dt-select-label"}},"div",e.labelChildProps,!1),[e._t("label",function(){return[e._v(e._s(e.label))]})],2):e._e(),e.$slots.description||e.description?s("div",e._b({class:["d-description",e.DESCRIPTION_SIZE_MODIFIERS[e.size],e.descriptionClass],attrs:{id:e.descriptionKey,"data-qa":"dt-select-description"}},"div",e.descriptionChildProps,!1),[e._t("description",function(){return[e._v(e._s(e.description))]})],2):e._e(),s("div",{class:["d-select",e.SELECT_SIZE_MODIFIERS[e.size],e.selectClass,{"d-select--disabled":e.disabled}],attrs:{"data-qa":"dt-select-wrapper"}},[s("select",e._g(e._b({class:["d-select__input",e.SELECT_STATE_MODIFIERS[e.state]],attrs:{"data-qa":"dt-select",disabled:e.disabled}},"select",e.$attrs,!1),e.selectListeners),[e._t("default",function(){return e._l(e.options,function(a){return s("option",e._b({key:e.getOptionKey(a.value),class:e.optionClass,domProps:{value:a.value}},"option",e.optionChildProps,!1),[e._v(" "+e._s(a.label)+" ")])})})],2)])]),s("dt-validation-messages",e._b({class:e.messagesClass,attrs:{"validation-messages":e.formattedMessages,"show-messages":e.showMessages,"data-qa":"dt-select-messages"}},"dt-validation-messages",e.messagesChildProps,!1))],1)},U=[];S._withStripped=!0;var p=r(F,S,U,!1,null,null,null,null);p.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/select_menu/select_menu.vue";const d=p.exports;p.exports.__docgenInfo={description:"A select menu is an input control that allows users to choose one option from a list.",displayName:"DtSelectMenu",tags:{property:[{title:"property",type:{name:"Boolean"},name:"disabled",description:"attribute"},{title:"property",type:{name:"String"},name:"name",description:"attribute"},{title:"property",type:{name:"String"},name:"value",description:"attribute"}],see:[{description:"https://dialpad.design/components/select.html",title:"see"}]},exportName:"default",props:[{name:"messagesClass",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"Used to customize the validation messages component",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"messagesChildProps",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"A set of props that are passed into the validation messages component",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"showMessages",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"Used to hide / show the validation messages",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"messages",mixin:{name:"Messages Mixin",path:"../../common/mixins/input.js"},description:"Validation messages",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"label",description:"Label for the select",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"description",description:"Description for the select",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"options",description:"Select Menu Options, overridden by default slot. Each option has the following structure:\n`{ index: number (optional), value: number || string (required), label: string (required) }`",tags:{params:[{title:"param",type:{name:"Object[]"},name:"options",description:"Optional - A list that can be used to create a list of select menu options"},{title:"param",type:{name:"number"},name:"options",description:"[].index - Optional - The index of the option"},{title:"param",type:{name:"union",elements:[{name:"number"},{name:"string"}]},name:"options",description:"[].value - Required - The option value"},{title:"param",type:{name:"string"},name:"options",description:"[].label - Required - The option Label"}]},type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"size",description:"Controls the size of the select",tags:{},values:["xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"labelClass",description:"Used to customize the label container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"descriptionClass",description:"Used to customize the description container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"selectClass",description:"Used to customize the select",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"optionClass",description:"Used to customize each option, should options be provided via prop",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"labelChildProps",description:"A set of props that are passed into the label container",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"descriptionChildProps",description:"A set of props that are passed into the description container",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"optionChildProps",description:"A set of props that are passed into each option, should options be provided via prop",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"disabled",description:"Disabled state of the select",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"input",description:"Native input event",type:{names:["String | Number"]}},{name:"change",description:"Native change event",type:{names:["String | Number"]}}],slots:[{name:"label",description:"Slot for label, defaults to label prop"},{name:"description",description:"Slot for description, defaults to description prop"},{name:"default",description:"Slot for select menu options, defaults to options prop"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/input.js","/home/runner/work/dialtone-vue/dialtone-vue/components/select_menu/select_menu.vue"]};const k={name:"DtSelectMenuDefault",components:{DtSelectMenu:d,htmlFragment:I}};var C=function(){var e=this,s=e._self._c;return s("dt-select-menu",{attrs:{label:e.label,options:e.options,size:e.size,description:e.description,"show-messages":e.showMessages,messages:e.messages,name:e.name,value:e.value,disabled:e.disabled,"label-class":e.labelClass,"description-class":e.descriptionClass,"select-class":e.selectClass,"option-class":e.optionClass,"messages-class":e.messagesClass,"label-child-props":e.labelChildProps,"description-child-props":e.descriptionChildProps,"option-child-props":e.optionChildProps,"messages-child-props":e.messagesChildProps},on:{input:e.onInput,change:e.onChange}},[e.labelSlot?s("template",{slot:"label"},[s("span",{domProps:{innerHTML:e._s(e.labelSlot)}})]):e._e(),e.descriptionSlot?s("template",{slot:"description"},[s("span",{domProps:{innerHTML:e._s(e.descriptionSlot)}})]):e._e(),e.defaultSlot?s("html-fragment",{attrs:{html:e.defaultSlot}}):e._e()],2)},W=[];C._withStripped=!0;var c=r(k,C,W,!1,null,null,null,null);c.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/select_menu/select_menu_default.story.vue";const q=c.exports;c.exports.__docgenInfo={displayName:"DtSelectMenuDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/select_menu/select_menu_default.story.vue"]};const K={name:"DtSelectMenuVariants",components:{DtSelectMenu:d},beforeCreate(){this.VALIDATION_MESSAGE_TYPES=w}};var E=function(){var e=this,s=e._self._c;return s("div",{staticClass:"d-d-flex d-fd-column d-stack32 d-p32",attrs:{id:"components-select-menu--variants-container"}},[s("dt-select-menu",{attrs:{id:"default",name:"default",label:"Default",options:e.options}}),s("dt-select-menu",{attrs:{id:"with-description",name:"with-description",label:"With",description:"Description",options:e.options}}),s("dt-select-menu",{attrs:{id:"with-slotted-label",name:"with-slotted-label",options:e.options}},[s("template",{slot:"label"},[e._v(" With Slotted Label ")])],2),s("dt-select-menu",{attrs:{id:"with-slotted-description",name:"with-slotted-description",label:"With",options:e.options}},[s("template",{slot:"description"},[e._v(" Slotted Description ")])],2),s("dt-select-menu",{attrs:{id:"with-slotted-options",name:"with-slotted-options",label:"With Slotted Options"}},e._l(e.options,function(a){return s("option",{key:`with-slotted-options-${a.value}`,domProps:{value:a.value}},[e._v(" "+e._s(a.label)+" ")])}),0),s("dt-select-menu",{attrs:{id:"with-error-message",name:"with-error-message",label:"With Error Message",options:e.options,messages:[{message:"Error",type:e.VALIDATION_MESSAGE_TYPES.ERROR}]}}),s("dt-select-menu",{attrs:{id:"with-error-messages-hidden",name:"with-error-messages-hidden",label:"With Error Messages Hidden",options:e.options,messages:[{message:"Error",type:e.VALIDATION_MESSAGE_TYPES.ERROR}],"show-messages":!1}}),s("dt-select-menu",{attrs:{id:"with-success-message",name:"with-success-message",label:"With Success Message",options:e.options,messages:[{message:"Success",type:e.VALIDATION_MESSAGE_TYPES.SUCCESS}]}}),s("dt-select-menu",{attrs:{id:"with-warning-message",name:"with-warning-message",label:"With Warning Message",options:e.options,messages:[{message:"Warning",type:e.VALIDATION_MESSAGE_TYPES.WARNING}]}}),s("dt-select-menu",{attrs:{id:"disabled",name:"disabled",label:"Disabled",options:e.options,disabled:""}}),s("dt-select-menu",{attrs:{id:"extra-small",name:"extra-small",label:"Extra Small",options:e.options,size:"xs"}}),s("dt-select-menu",{attrs:{id:"small",name:"small",label:"Small",options:e.options,size:"sm"}}),s("dt-select-menu",{attrs:{id:"large",name:"large",label:"Large",options:e.options,size:"lg"}}),s("dt-select-menu",{attrs:{id:"extra-large",name:"extra-large",label:"Extra Large",options:e.options,size:"xl"}})],1)},G=[];E._withStripped=!0;var u=r(K,E,G,!1,null,null,null,null);u.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/select_menu/select_menu_variants.story.vue";const H=u.exports;u.exports.__docgenInfo={displayName:"DtSelectMenuVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/select_menu/select_menu_variants.story.vue"]};const i=[{value:1,label:"Option 1"},{value:2,label:"Option 2"},{value:3,label:"Option 3"}],x={label:"Label",size:"md",name:"",disabled:!1,value:i[0].value,options:i,onInput:m("input"),onChange:m("change")},M={labelSlot:{name:"label",description:"Slot for label, defaults to label prop",control:"text",table:{category:"slots",type:{summary:"VNode"}}},descriptionSlot:{name:"description",description:"Slot for description, defaults to description prop",control:"text",table:{category:"slots",type:{summary:"VNode"}}},default:{control:"text",table:{category:"slots",type:{summary:"VNode"}}},label:{description:"Label for the select",table:{category:"props",type:{summary:"string"},defaultValue:{summary:""}},control:{type:"text"}},description:{description:"Describes the select",table:{category:"props",type:{summary:"string"},defaultValue:{summary:""}},control:{type:"text"}},options:{control:{type:"object"},table:{category:"props",type:{summary:"object"},defaultValue:{summary:[]}}},size:{description:"Controls the size of the select",options:Object.keys(l),control:{type:"select"},table:{category:"props",type:{summary:"string"}}},labelClass:{description:"Pass through classes. Used to customize the label container"},descriptionClass:{description:"Pass through classes. Used to customize the description container"},selectClass:{description:"Pass through classes. Used to customize the select"},optionClass:{description:"Pass through classes. Used to customize each option, should options be provided via prop"},messagesClass:{description:"Pass through classes. Used to customize the the validation messages component"},labelChildProps:{description:"Pass through props. A set of props that are passed into the label container"},descriptionChildProps:{description:"Pass through props. A set of props that are passed into the description container"},optionChildProps:{description:`Pass through props. A set of props that are passed into each option,
     should options be provided via prop`},messagesChildProps:{description:"Pass through props. A set of props that are passed into the validation messages component"},value:{description:"HTML select value attribute. Provides a value for the select",options:i.map(t=>t.value),control:{type:"select"},table:{category:"html attributes",type:{summary:"string"},defaultValue:{summary:""}}},name:{description:"HTML select name attribute. Provides a name for the select",control:{type:"text"},table:{category:"html attributes",type:{summary:"string"},defaultValue:{summary:""}}},disabled:{description:"HTML select disabled attribute. Disables the select",control:{type:"boolean"},table:{category:"html attributes",type:{summary:"boolean"},defaultValue:{summary:!1}}},"v-model":{description:"Supported by this component",control:null,table:{category:"directives"}},onInput:{table:{disable:!0}},onChange:{table:{disable:!0}}},Y={title:"Components/Select Menu",component:d,args:x,argTypes:M,excludeStories:/.*Data$/},Z=(t,{argTypes:e})=>v(t,e,q),B=(t,{argTypes:e})=>v(t,e,H),o={render:Z,args:{}},n={render:B,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}};var f,h,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,_,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {},
  parameters: {
    options: {
      showPanel: false
    },
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }]
      }
    }
  }
}`,...(y=(_=n.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};const J=["argsData","argTypesData","Default","Variants"],oe=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Variants:n,__namedExportsOrder:J,argTypesData:M,argsData:x,default:Y},Symbol.toStringTag,{value:"Module"}));export{o as D,oe as S,n as V};
//# sourceMappingURL=select_menu.stories-88d67b1a.js.map
