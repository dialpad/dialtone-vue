import{D as i}from"./button-1c3c443d.js";import{a as o,b as d,w as r,m as c,B as u,o as b,k as f,l as m}from"./vue.esm-bundler-15aa0fd7.js";import{_ as p}from"./_plugin-vue_export-helper-c27b6911.js";const T=["default","sm"],C={sm:"d-tablist--sm"},D={inverted:"d-tablist--inverted"},B={borderless:"d-tablist--no-border"},h={selected:"d-tab--selected"},s={name:"DtTab",components:{DtButton:i},inject:["changeContentPanel","groupContext","setFocus"],inheritAttrs:!1,props:{id:{type:String,required:!0},panelId:{type:String,required:!0},label:{type:String,default:""},selected:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},tabClass:{type:[String,Array,Object],default:""}},emits:["focus","click"],data(){return{TAB_IMPORTANCE_MODIFIERS:h}},computed:{tabListeners(){return{click:e=>{this.selectPanel(),this.$emit("click",e)},focus:e=>{this.setFocus(this.id),this.$emit("focus",e)}}},isSelected(){return this.groupContext.selected===this.panelId}},mounted(){this.setSelectedPanelByDefault()},methods:{setSelectedPanelByDefault(){this.selected&&this.selectPanel(!0)},selectPanel(e=!1){this.changeContentPanel({selected:this.panelId,selectOverride:e})}}};function _(e,I,t,v,n,a){const l=o("dt-button");return b(),d(l,c({id:`dt-tab-${t.id}`,class:["d-tab",{[n.TAB_IMPORTANCE_MODIFIERS.selected]:a.isSelected},t.tabClass],role:"tab","aria-selected":`${a.isSelected}`,"aria-controls":`dt-panel-${t.panelId}`,"aria-label":t.label,"data-qa":"dt-tab",tabindex:a.isSelected?"0":"-1",disabled:a.groupContext.disabled||t.disabled},e.$attrs,u(a.tabListeners)),{default:r(()=>[f(" @slot default slot, defaults contains dt-button "),m(e.$slots,"default")]),_:3},16,["id","class","aria-selected","aria-controls","aria-label","tabindex","disabled"])}const E=p(s,[["render",_],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/tabs/tab.vue"]]);s.__docgenInfo={displayName:"DtTab",description:"Tabs allow users to navigation between grouped content in different views while within the same page context.",tags:{see:[{description:"https://dialpad.design/components/tabs.html",title:"see"}]},exportName:"default",props:[{name:"id",description:"Id of the tab",type:{name:"string"},required:!0},{name:"panelId",description:"Id of the associated content panel",type:{name:"string"},required:!0},{name:"label",description:"Describes the tab",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"selected",description:"Controls the state of the tab",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",description:"If true, disables the tab",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"tabClass",description:"Used to customize the tab element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}}],events:[{name:"focus",description:"Native button focus in event",type:{names:["FocusEvent"]}},{name:"click",description:"Native button click event",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"default",description:"default slot, defaults contains dt-button"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tabs/tab.vue"]};export{E as D,T,C as a,D as b,B as c};
//# sourceMappingURL=tab-0cad8abc.js.map
