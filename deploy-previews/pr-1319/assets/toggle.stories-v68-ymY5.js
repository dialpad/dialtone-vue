import{a as N}from"./chunk-AY7I2SME-4UylTnhF.js";import{c as w}from"./storybook_utils-dy5aucTw.js";import{q as B,k as m,m as y,f as t,g as E,e as p,o as c,s as D,b as P,w as l,u as s,x as i}from"./vue.esm-bundler-PY0rQjII.js";import{g as W,h as j}from"./utils-r35NyHdW.js";import{_ as f}from"./_plugin-vue_export-helper-x3n3nnut.js";const h={sm:"d-toggle--small",md:""},I=[!1,!0,"mixed"],$={name:"DtToggle",inheritAttrs:!1,model:{prop:"checked",event:"change"},props:{id:{type:String,default(){return W()}},disabled:{type:Boolean,default:!1},checked:{type:[Boolean,String],default:!1,validator:e=>I.includes(e)},toggleOnClick:{type:Boolean,default:!0},size:{type:String,default:"md",validator:e=>Object.keys(h).includes(e)},showIcon:{type:Boolean,default:!0},labelClass:{type:[String,Array,Object],default:""},labelChildProps:{type:Object,default:()=>({})}},emits:["change"],data(){return{internalChecked:this.checked,hasSlotContent:j}},computed:{inputListeners(){return{...this.$attrs,onClick:e=>this.toggleCheckedValue()}},isIndeterminate(){return this.internalChecked==="mixed"},toggleRole(){return this.isIndeterminate?"checkbox":"switch"},toggleClasses(){return["d-toggle",h[this.size],{"d-toggle--checked":this.internalChecked===!0,"d-toggle--disabled":this.disabled,"d-toggle--indeterminate":this.isIndeterminate}]}},watch:{checked(e){this.internalChecked=e}},mounted(){this.runValidations()},methods:{toggleCheckedValue(){this.$emit("change",!this.internalChecked),this.toggleOnClick&&(this.internalChecked=!this.internalChecked)},hasSlotLabel(){return!!this.$slots.default},runValidations(){this.validateInputLabels(this.hasSlotLabel(),this.$attrs["aria-label"])},validateInputLabels(e,o){!e&&!o&&B("You must provide an aria-label when there is no label passed",this)}}},F={class:"d-toggle-wrapper"},M=["for"],q=["id","role","aria-checked","disabled","aria-disabled"],A={key:0,class:"d-toggle__inner"};function G(e,o,n,_,r,u){return c(),m("div",F,[r.hasSlotContent(e.$slots.default)?(c(),m("label",y({key:0,class:n.labelClass,for:n.id},n.labelChildProps,{"data-qa":"toggle-label"}),[t(" @slot Slot for the main content "),E(e.$slots,"default")],16,M)):t("v-if",!0),p("button",y({id:n.id,role:u.toggleRole,type:"button","aria-checked":r.internalChecked.toString(),disabled:n.disabled,"aria-disabled":n.disabled.toString(),class:u.toggleClasses},u.inputListeners),[n.showIcon?(c(),m("span",A)):t("v-if",!0)],16,q)])}const b=f($,[["render",G],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/toggle/toggle.vue"]]);$.__docgenInfo={displayName:"DtToggle",description:'A toggle (or "switch") is a button control element that allows the user to make a binary (on/off) selection.',tags:{see:[{description:"https://dialpad.design/components/toggle.html",title:"see"}]},exportName:"default",props:[{name:"id",description:"The id of the toggle",type:{name:"string"},defaultValue:{func:!0,value:"function() { return getUniqueString(); }"}},{name:"disabled",description:"Disables the toggle interactions",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"v-model",description:"Value of the toggle",tags:{model:[{description:"checked",title:"model"}]},values:["true","false","'mixed'"],type:{name:"boolean|string"},defaultValue:{func:!1,value:"false"}},{name:"toggleOnClick",description:`Whether the component toggles on click. If you set this to false it means you will handle the toggling manually
via the checked prop or v-model. Change events will still be triggered.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"size",description:"The size of the toggle.",tags:{},values:["sm","md"],type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"showIcon",description:"Shows the icon",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"labelClass",description:"Used to customize the label container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"labelChildProps",description:"A set of props that are passed into the label container",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],events:[{name:"change",description:"Toggle change event",type:{names:["Boolean"]}}],slots:[{name:"default",description:"Slot for the main content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/toggle/toggle.vue"]};const O={name:"ToggleDefault",components:{DtToggle:b}},H=["innerHTML"];function R(e,o,n,_,r,u){const a=D("dt-toggle");return c(),P(a,{checked:e.$attrs.checked,disabled:e.$attrs.disabled,size:e.$attrs.size,"show-icon":e.$attrs.showIcon,"label-class":e.$attrs.labelClass,"label-child-props":e.$attrs.labelChildProps,"toggle-on-click":e.$attrs.toggleOnClick,onChange:e.$attrs.onChange},{default:l(()=>[e.defaultSlot?(c(),m("span",{key:0,innerHTML:e.defaultSlot},null,8,H)):t("v-if",!0)]),_:1},8,["checked","disabled","size","show-icon","label-class","label-child-props","toggle-on-click","onChange"])}const K=f(O,[["render",R],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/toggle/toggle_default.story.vue"]]);O.__docgenInfo={displayName:"ToggleDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/toggle/toggle_default.story.vue"]};const z={name:"ToggleVariants",components:{DtToggle:b},data(){return{vModelValue:!1}}},Y={id:"components-toggle--variants-container"},Z=p("div",{class:"d-mr6"}," With Slot Label ",-1),J=p("div",{class:"d-mr6"}," With V-Model ",-1);function Q(e,o,n,_,r,u){const a=D("dt-toggle");return c(),m("div",Y,[t(" Unchecked Initially "),s(a,{class:"d-mt6","label-class":"d-mr6",label:"Unchecked Initial"},{default:l(()=>[i(" Checked Initial ")]),_:1}),t(" Checked Initially "),s(a,{class:"d-mt6","label-class":"d-mr6",label:"Checked Initial",checked:!0},{default:l(()=>[i(" Checked Initial ")]),_:1}),t(" Indeterminate "),s(a,{class:"d-mt6","label-class":"d-mr6",checked:"mixed"},{default:l(()=>[i(" Indeterminate ")]),_:1}),t(" Checked Disabled "),s(a,{class:"d-mt6","label-class":"d-mr6",checked:!0,disabled:!0},{default:l(()=>[i(" Disabled Checked ")]),_:1}),t(" Unchecked Disabled "),s(a,{class:"d-mt6","label-class":"d-mr6",disabled:!0},{default:l(()=>[i(" Disabled Unchecked ")]),_:1}),t(" Indeterminate Disabled "),s(a,{class:"d-mt6","label-class":"d-mr6",checked:"mixed",disabled:!0},{default:l(()=>[i(" Indeterminate Disabled ")]),_:1}),t(" With Flex grow "),s(a,{class:"d-mt6","label-class":"d-d-flex d-fl-grow1"},{default:l(()=>[i(" With Flex Grow ")]),_:1}),t(" With Slots "),s(a,{class:"d-mt6"},{default:l(()=>[Z]),_:1}),t(" With v-model "),s(a,{modelValue:r.vModelValue,"onUpdate:modelValue":o[0]||(o[0]=L=>r.vModelValue=L),class:"d-mt6"},{default:l(()=>[J]),_:1},8,["modelValue"]),t(" Without icon "),s(a,{class:"d-mt6","label-class":"d-mr6","show-icon":!1},{default:l(()=>[i(" Without icon ")]),_:1}),s(a,{class:"d-mt6","label-class":"d-mr6",label:"Small size",size:"sm"},{default:l(()=>[i(" Small size ")]),_:1})])}const X=f(z,[["render",Q],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/toggle/toggle_variants.story.vue"]]);z.__docgenInfo={displayName:"ToggleVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/toggle/toggle_variants.story.vue"]};const x={default:"Toggle Default",checked:!1,onChange:N("change"),labelClass:"d-mr6"},U={default:{control:"text",description:"Used as a way to set either a label or a label element for the toggle",table:{type:{summary:"VNode"}}},checked:{description:'Used to set the initial state of the toggle. Setting "mixed" means it gets the indeterminate state.',options:I,control:{type:"select"},table:{category:"props",type:{summary:'boolean | "mixed"'},defaultValue:{summary:!1}}},size:{description:"Used to set the size of the toggle",options:Object.keys(h),control:{type:"select"}},id:{table:{defaultValue:{summary:"generated unique ID"}}},"v-model":{description:"Supported by this component",control:null,table:{category:"directives"}},disabled:{description:"Used to disabled the toggle",control:"boolean",table:{category:"props",type:{summary:"boolean"}}},labelChildProps:{control:null},onChange:{table:{disable:!0}},change:{description:"Toggle Change event",table:{type:{summary:"event"}}}},ee={title:"Components/Toggle",component:b,args:x,argTypes:U,excludeStories:/.*Data$/},te=(e,{argTypes:o})=>w(e,o,K),ae=(e,{argTypes:o})=>w(e,o,X),d={render:te,args:{},parameters:{a11y:{config:{rules:[{id:"button-name",enabled:!1}]}}}},g={render:ae,args:{},parameters:{options:{showPanel:!1},a11y:d.parameters.a11y}};var v,k,C;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(C=(k=d.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var V,S,T;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {},
  parameters: {
    options: {
      showPanel: false
    },
    a11y: Default.parameters.a11y
  }
}`,...(T=(S=g.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const le=["argsData","argTypesData","Default","Variants"],de=Object.freeze(Object.defineProperty({__proto__:null,Default:d,Variants:g,__namedExportsOrder:le,argTypesData:U,argsData:x,default:ee},Symbol.toStringTag,{value:"Module"}));export{d as D,de as T,g as V};
//# sourceMappingURL=toggle.stories-v68-ymY5.js.map
