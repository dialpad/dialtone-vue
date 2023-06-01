import{a as T}from"./chunk-OPEUWD42-a3b45fd8.js";import{u as w,c as b}from"./storybook_utils-96cfb4be.js";import{V as D}from"./vue.esm-eff6e72e.js";import{n as o}from"./_plugin-vue2_normalizer-2bbd088e.js";const n={sm:"d-toggle--small",md:""},_=[!1,!0,"mixed"],x={name:"DtToggle",inheritAttrs:!1,model:{prop:"checked",event:"change"},props:{id:{type:String,default(){return w.getUniqueString()}},disabled:{type:Boolean,default:!1},checked:{type:[Boolean,String],default:!1,validator:a=>_.includes(a)},toggleOnClick:{type:Boolean,default:!0},size:{type:String,default:"md",validator:a=>Object.keys(n).includes(a)},showIcon:{type:Boolean,default:!0},labelClass:{type:[String,Array,Object],default:""},labelChildProps:{type:Object,default:()=>({})}},emits:["change"],data(){return{internalChecked:this.checked}},computed:{inputListeners(){return{...this.$listeners,click:a=>this.toggleCheckedValue()}},isIndeterminate(){return this.internalChecked==="mixed"},toggleRole(){return this.isIndeterminate?"checkbox":"switch"},toggleClasses(){return["d-toggle",n[this.size],{"d-toggle--checked":this.internalChecked===!0,"d-toggle--disabled":this.disabled,"d-toggle--indeterminate":this.isIndeterminate}]}},watch:{checked(a){this.internalChecked=a}},mounted(){this.runValidations()},methods:{toggleCheckedValue(){this.$emit("change",!this.internalChecked),this.toggleOnClick&&(this.internalChecked=!this.internalChecked)},hasSlotLabel(){return!!this.$slots.default},runValidations(){this.validateInputLabels(this.hasSlotLabel(),this.$attrs["aria-label"])},validateInputLabels(a,e){!a&&!e&&D.util.warn("You must provide an aria-label when there is no label passed",this)}}};var v=function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-d-flex d-ai-center"},[e.$slots.default?t("label",e._b({class:e.labelClass,attrs:{for:e.id,"data-qa":"toggle-label"}},"label",e.labelChildProps,!1),[e._t("default")],2):e._e(),t("button",e._g(e._b({class:e.toggleClasses,attrs:{id:e.id,role:e.toggleRole,type:"button","aria-checked":e.internalChecked.toString(),disabled:e.disabled,"aria-disabled":e.disabled.toString()}},"button",e.$attrs,!1),e.inputListeners),[e.showIcon?t("span",{staticClass:"d-toggle__inner"}):e._e()])])},I=[];v._withStripped=!0;var r=o(x,v,I,!1,null,null,null,null);r.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/toggle/toggle.vue";const i=r.exports;r.exports.__docgenInfo={displayName:"DtToggle",description:'A toggle (or "switch") is a button control element that allows the user to make a binary (on/off) selection.',tags:{see:[{description:"https://dialpad.design/components/toggle.html",title:"see"}]},exportName:"default",props:[{name:"id",description:"The id of the toggle",type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"disabled",description:"Disables the toggle interactions",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"v-model",description:"Value of the toggle",tags:{model:[{description:"checked",title:"model"}]},values:["true","false","'mixed'"],type:{name:"boolean|string"},defaultValue:{func:!1,value:"false"}},{name:"toggleOnClick",description:`Whether the component toggles on click. If you set this to false it means you will handle the toggling manually
via the checked prop or v-model. Change events will still be triggered.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"size",description:"The size of the toggle.",tags:{},values:["sm","md"],type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"showIcon",description:"Shows the icon",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"labelClass",description:"Used to customize the label container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"labelChildProps",description:"A set of props that are passed into the label container",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],events:[{name:"change",description:"Toggle change event",type:{names:["Boolean"]}}],slots:[{name:"default",description:"Slot for the main content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/toggle/toggle.vue"]};const O={name:"ToggleDefault",components:{DtToggle:i}};var y=function(){var e=this,t=e._self._c;return t("dt-toggle",{attrs:{checked:e.checked,disabled:e.disabled,size:e.size,"show-icon":e.showIcon,"label-class":e.labelClass,"label-child-props":e.labelChildProps,"toggle-on-click":e.toggleOnClick},on:{change:e.onChange}},[e.defaultSlot?t("span",{domProps:{innerHTML:e._s(e.defaultSlot)}}):e._e()])},$=[];y._withStripped=!0;var d=o(O,y,$,!1,null,null,null,null);d.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/toggle/toggle_default.story.vue";const z=d.exports;d.exports.__docgenInfo={displayName:"ToggleDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/toggle/toggle_default.story.vue"]};const L={name:"ToggleVariants",components:{DtToggle:i},data(){return{vModelValue:!1}}};var C=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"components-toggle--variants-container"}},[t("dt-toggle",{staticClass:"d-mt6",attrs:{"label-class":"d-mr6",label:"Unchecked Initial"}},[e._v(" Checked Initial ")]),t("dt-toggle",{staticClass:"d-mt6",attrs:{"label-class":"d-mr6",label:"Checked Initial",checked:!0}},[e._v(" Checked Initial ")]),t("dt-toggle",{staticClass:"d-mt6",attrs:{"label-class":"d-mr6",checked:"mixed"}},[e._v(" Indeterminate ")]),t("dt-toggle",{staticClass:"d-mt6",attrs:{"label-class":"d-mr6",checked:!0,disabled:!0}},[e._v(" Disabled Checked ")]),t("dt-toggle",{staticClass:"d-mt6",attrs:{"label-class":"d-mr6",disabled:!0}},[e._v(" Disabled Unchecked ")]),t("dt-toggle",{staticClass:"d-mt6",attrs:{"label-class":"d-mr6",checked:"mixed",disabled:!0}},[e._v(" Indeterminate Disabled ")]),t("dt-toggle",{staticClass:"d-mt6",attrs:{"label-class":"d-d-flex d-fl-grow1"}},[e._v(" With Flex Grow ")]),t("dt-toggle",{staticClass:"d-mt6"},[t("div",{staticClass:"d-mr6"},[e._v(" With Slot Label ")])]),t("dt-toggle",{staticClass:"d-mt6",model:{value:e.vModelValue,callback:function(S){e.vModelValue=S},expression:"vModelValue"}},[t("div",{staticClass:"d-mr6"},[e._v(" With V-Model ")])]),t("dt-toggle",{staticClass:"d-mt6",attrs:{"label-class":"d-mr6","show-icon":!1}},[e._v(" Without icon ")]),t("dt-toggle",{staticClass:"d-mt6",attrs:{"label-class":"d-mr6",label:"Small size",size:"sm"}},[e._v(" Small size ")])],1)},F=[];C._withStripped=!0;var c=o(L,C,F,!1,null,null,null,null);c.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/toggle/toggle_variants.story.vue";const U=c.exports;c.exports.__docgenInfo={displayName:"ToggleVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/toggle/toggle_variants.story.vue"]};const k={default:"Toggle Default",checked:!1,onChange:T("change"),labelClass:"d-mr6"},V={default:{control:"text",description:"Used as a way to set either a label or a label element for the toggle",table:{type:{summary:"VNode"}}},checked:{description:'Used to set the initial state of the toggle. Setting "mixed" means it gets the indeterminate state.',options:_,control:{type:"select"},table:{category:"props",type:{summary:'boolean | "mixed"'},defaultValue:{summary:!1}}},size:{description:"Used to set the size of the toggle",options:Object.keys(n),control:{type:"select"}},id:{table:{defaultValue:{summary:"generated unique ID"}}},"v-model":{description:"Supported by this component",control:null,table:{category:"directives"}},disabled:{description:"Used to disabled the toggle",control:"boolean",table:{category:"props",type:{summary:"boolean"}}},labelChildProps:{control:null},onChange:{table:{disable:!0}},change:{description:"Toggle Change event",table:{type:{summary:"event"}}}},P={title:"Components/Toggle",component:i,args:k,argTypes:V,excludeStories:/.*Data$/},j=(a,{argTypes:e})=>b(a,e,z),E=(a,{argTypes:e})=>b(a,e,U),l={render:j,args:{},parameters:{a11y:{config:{rules:[{id:"button-name",enabled:!1}]}}}},s={render:E,args:{},parameters:{options:{showPanel:!1},a11y:l.parameters.a11y}};var u,g,m;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {},
  parameters: {
    a11y: {
      config: {
        rules: [
        // TODO: it's possible to pass a custom aria-label but adding a built-in label can cover most of cases
        {
          id: 'button-name',
          enabled: false
        }]
      }
    }
  }
}`,...(m=(g=l.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var p,h,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {},
  parameters: {
    options: {
      showPanel: false
    },
    a11y: Default.parameters.a11y
  }
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const M=["argsData","argTypesData","Default","Variants"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Variants:s,__namedExportsOrder:M,argTypesData:V,argsData:k,default:P},Symbol.toStringTag,{value:"Module"}));export{l as D,G as T,s as V};
//# sourceMappingURL=toggle.stories-4646d00d.js.map
