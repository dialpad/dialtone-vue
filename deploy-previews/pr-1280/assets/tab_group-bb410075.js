import{T as b,a as c,b as f,c as h}from"./tab-d4512b7b.js";import{p,f as o,e as m,g as r,m as g,q as l,o as I}from"./vue.esm-bundler-5f4c5b12.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";const u={name:"DtTabGroup",provide(){return{groupContext:this.provideObj,changeContentPanel:this.changeContentPanel,setFocus:this.setFocus}},props:{label:{type:String,default:""},selected:{type:String,default:""},disabled:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1},borderless:{type:Boolean,default:!1},size:{type:String,default:"default",validate(t){return b.includes(t)}},tabListClass:{type:[String,Array,Object],default:""},tabListChildProps:{type:Object,default:()=>({})}},emits:["change"],data(){return{provideObj:{selected:"",disabled:!1},focusId:null,tabs:[],TAB_LIST_SIZE_MODIFIERS:c,TAB_LIST_KIND_MODIFIERS:f,TAB_LIST_IMPORTANCE_MODIFIERS:h}},watch:{disabled:{immediate:!0,handler(){this.provideObj.disabled=this.disabled}},selected:{immediate:!0,handler(){this.provideObj.selected=this.selected}}},mounted(){this.updateSelected()},beforeUpdate(){this.updateSelected()},methods:{updateSelected(){this.provideObj.selected||(this.provideObj.selected=this.selected),this.tabs=this.getTabChildren()},setFocus(t){this.focusId=t},getTabChildren(){return Array.from(this.$refs.tabs.children).filter(({className:e})=>e.includes("d-tab")).map(e=>{var s,i;return{context:e,panelId:(s=e.getAttribute("aria-controls"))==null?void 0:s.replace("dt-panel-",""),id:(i=e.getAttribute("id"))==null?void 0:i.replace("dt-tab-",""),isSelected:e.getAttribute("aria-selected")==="true"}})},onChange(){this.$emit("change",{...this.provideObj})},changeContentPanel({selected:t,selectOverride:e}){this.provideObj.selected=t,e||this.onChange()},tabLeft(){const{index:t,tabs:e}=this.getIndexAndTabs();if(t===-1)return;const s=t-1<0?e.length-1:t-1;this.selectFocusOnTab(s,e)},tabRight(){const{index:t,tabs:e}=this.getIndexAndTabs();if(t===-1)return;const s=t+1>e.length-1?0:t+1;this.selectFocusOnTab(s,e)},selectFocusOnTab(t,e){const{context:s}=e[t];s.focus()},selectTab(){const{tabs:t,index:e}=this.getIndexAndTabs();this.selectTabByIndex(e,t)},selectTabByIndex(t,e){const{context:s,panelId:i}=e[t];this.provideObj.selected=i,s.focus()},getIndexAndTabs(){const t=this.tabs.findIndex(e=>this.focusId?e.id===`${this.focusId}`:e.isSelected);return{tabs:this.tabs,index:t}},onHomeButton(){var t,e;this.tabs.length!==0&&((e=(t=this.tabs[0])==null?void 0:t.context)==null||e.focus())},onEndButton(){var t,e;this.tabs.length!==0&&((e=(t=this.tabs[this.tabs.length-1])==null?void 0:t.context)==null||e.focus())}}},T={"data-qa":"dt-tab-group"},y=["aria-label"];function S(t,e,s,i,d,a){return I(),p("div",T,[o(" eslint-disable-next-line vuejs-accessibility/interactive-supports-focus "),m("div",g({ref:"tabs",class:["d-tablist",d.TAB_LIST_SIZE_MODIFIERS[s.size],{[d.TAB_LIST_KIND_MODIFIERS.inverted]:s.inverted,[d.TAB_LIST_IMPORTANCE_MODIFIERS.borderless]:s.borderless},s.tabListClass]},s.tabListChildProps,{role:"tablist","aria-label":s.label,onKeyup:[e[0]||(e[0]=l((...n)=>a.tabLeft&&a.tabLeft(...n),["left"])),e[1]||(e[1]=l((...n)=>a.tabRight&&a.tabRight(...n),["right"])),e[2]||(e[2]=l((...n)=>a.selectTab&&a.selectTab(...n),["enter"])),e[3]||(e[3]=l((...n)=>a.selectTab&&a.selectTab(...n),["space"]))],onKeydown:[e[4]||(e[4]=l((...n)=>a.onHomeButton&&a.onHomeButton(...n),["home"])),e[5]||(e[5]=l((...n)=>a.onEndButton&&a.onEndButton(...n),["end"]))]}),[o(" @slot Slot for Tabs "),r(t.$slots,"tabs")],16,y),o(" @slot Default slot for Panel "),r(t.$slots,"default")])}const B=v(u,[["render",S],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/tabs/tab_group.vue"]]);u.__docgenInfo={displayName:"DtTabGroup",description:"Tabs allow users to navigation between grouped content in different views while within the same page context.",tags:{see:[{description:"https://dialpad.design/components/tabs.html",title:"see"}]},exportName:"default",props:[{name:"label",description:"Identifies the tab group",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"selected",description:"The id of the selected tab panel which should be displayed",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",description:"If true, disables the tab group",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inverted",description:"If true, applies inverted styles to the tab group",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"borderless",description:"If true, applies borderless styles to the tab group",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"If provided, applies size styles to the tab group",tags:{},values:["default","sm"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}},{name:"tabListClass",description:"Pass through classes, used to customize the tab list",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"tabListChildProps",description:"Pass through props, used to customize the tab list",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],events:[{name:"change",description:"Change tab event with the arguments: selected id of the current tab and disabled value",type:{names:["Object"]}}],slots:[{name:"tabs",description:"Slot for Tabs"},{name:"default",description:"Default slot for Panel"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tabs/tab_group.vue"]};export{B as D};
//# sourceMappingURL=tab_group-bb410075.js.map
