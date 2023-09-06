import{T as i,a as r,b as d,c as o}from"./tab-36cd8683.js";import{n as u}from"./_plugin-vue2_normalizer-2bbd088e.js";const c={name:"DtTabGroup",provide(){return{groupContext:this.provideObj,changeContentPanel:this.changeContentPanel,setFocus:this.setFocus}},props:{label:{type:String,default:""},selected:{type:String,default:""},disabled:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1},borderless:{type:Boolean,default:!1},size:{type:String,default:"default",validate(t){return i.includes(t)}},tabListClass:{type:[String,Array,Object],default:""},tabListChildProps:{type:Object,default:()=>({})}},emits:["change"],data(){return{provideObj:{selected:"",disabled:!1},focusId:null,tabs:[],TAB_LIST_SIZE_MODIFIERS:r,TAB_LIST_KIND_MODIFIERS:d,TAB_LIST_IMPORTANCE_MODIFIERS:o}},watch:{disabled:{immediate:!0,handler(){this.provideObj.disabled=this.disabled}},selected:{immediate:!0,handler(){this.provideObj.selected=this.selected}}},mounted(){this.updateSelected()},beforeUpdate(){this.updateSelected()},methods:{updateSelected(){this.provideObj.selected||(this.provideObj.selected=this.selected),this.tabs=this.getTabChildren()},setFocus(t){this.focusId=t},getTabChildren(){return this.$children.map(({$el:t})=>t).filter(({className:t})=>t.includes("d-tab")).map(t=>{var e,a;return{context:t,panelId:(e=t.getAttribute("aria-controls"))==null?void 0:e.replace("dt-panel-",""),id:(a=t.getAttribute("id"))==null?void 0:a.replace("dt-tab-",""),isSelected:t.getAttribute("aria-selected")==="true"}})},onChange(){this.$emit("change",{...this.provideObj})},changeContentPanel({selected:t,selectOverride:e}){this.provideObj.selected=t,e||this.onChange()},tabLeft(){const{index:t,tabs:e}=this.getIndexAndTabs();if(t===-1)return;const a=t-1<0?e.length-1:t-1;this.selectFocusOnTab(a,e)},tabRight(){const{index:t,tabs:e}=this.getIndexAndTabs();if(t===-1)return;const a=t+1>e.length-1?0:t+1;this.selectFocusOnTab(a,e)},selectFocusOnTab(t,e){const{context:a}=e[t];a.focus()},selectTab(){const{tabs:t,index:e}=this.getIndexAndTabs();this.selectTabByIndex(e,t)},selectTabByIndex(t,e){const{context:a,panelId:s}=e[t];this.provideObj.selected=s,a.focus()},getIndexAndTabs(){const t=this.tabs.findIndex(e=>this.focusId?e.id===`${this.focusId}`:e.isSelected);return{tabs:this.tabs,index:t}},onHomeButton(){var t,e;this.tabs.length!==0&&((e=(t=this.tabs[0])==null?void 0:t.context)==null||e.focus())},onEndButton(){var t,e;this.tabs.length!==0&&((e=(t=this.tabs[this.tabs.length-1])==null?void 0:t.context)==null||e.focus())}}};var l=function(){var e=this,a=e._self._c;return a("div",{attrs:{"data-qa":"dt-tab-group"}},[a("div",e._b({class:["d-tablist",e.TAB_LIST_SIZE_MODIFIERS[e.size],{[e.TAB_LIST_KIND_MODIFIERS.inverted]:e.inverted,[e.TAB_LIST_IMPORTANCE_MODIFIERS.borderless]:e.borderless},e.tabListClass],attrs:{role:"tablist","aria-label":e.label},on:{keyup:[function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"left",37,s.key,["Left","ArrowLeft"])||"button"in s&&s.button!==0?null:e.tabLeft.apply(null,arguments)},function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"right",39,s.key,["Right","ArrowRight"])||"button"in s&&s.button!==2?null:e.tabRight.apply(null,arguments)},function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.selectTab.apply(null,arguments)},function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"space",32,s.key,[" ","Spacebar"])?null:e.selectTab.apply(null,arguments)}],keydown:[function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"home",void 0,s.key,void 0)?null:e.onHomeButton.apply(null,arguments)},function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"end",void 0,s.key,void 0)?null:e.onEndButton.apply(null,arguments)}]}},"div",e.tabListChildProps,!1),[e._t("tabs")],2),e._t("default")],2)},p=[];l._withStripped=!0;var n=u(c,l,p,!1,null,null,null,null);n.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/tabs/tab_group.vue";const h=n.exports;n.exports.__docgenInfo={displayName:"DtTabGroup",description:"Tabs allow users to navigation between grouped content in different views while within the same page context.",tags:{see:[{description:"https://dialpad.design/components/tabs.html",title:"see"}]},exportName:"default",props:[{name:"label",description:"Identifies the tab group",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"selected",description:"The id of the selected tab panel which should be displayed",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",description:"If true, disables the tab group",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inverted",description:"If true, applies inverted styles to the tab group",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"borderless",description:"If true, applies borderless styles to the tab group",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"If provided, applies size styles to the tab group",tags:{},values:["default","sm"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}},{name:"tabListClass",description:"Pass through classes, used to customize the tab list",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"tabListChildProps",description:"Pass through props, used to customize the tab list",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],events:[{name:"change",description:"Change tab event with the arguments: selected id of the current tab and disabled value",type:{names:["Object"]}}],slots:[{name:"tabs",description:"Slot for Tabs"},{name:"default",description:"Default slot for Panel"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tabs/tab_group.vue"]};export{h as D};
//# sourceMappingURL=tab_group-9ce0571d.js.map
