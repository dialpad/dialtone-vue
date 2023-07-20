import{a as x}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as m}from"./storybook_utils-6c24aced.js";import{T as h,a as D,b as C,c as O,D as _}from"./tab-8115bfcd.js";import{n as d}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as g}from"./tab_panel-5f6c9511.js";const k={name:"DtTabGroup",provide(){return{groupContext:this.provideObj,changeContentPanel:this.changeContentPanel,setFocus:this.setFocus}},props:{label:{type:String,default:""},selected:{type:String,default:""},disabled:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1},borderless:{type:Boolean,default:!1},size:{type:String,default:"default",validate(a){return h.includes(a)}},tabListClass:{type:[String,Array,Object],default:""},tabListChildProps:{type:Object,default:()=>({})}},emits:["change"],data(){return{provideObj:{selected:"",disabled:!1},focusId:null,tabs:[],TAB_LIST_SIZE_MODIFIERS:D,TAB_LIST_KIND_MODIFIERS:C,TAB_LIST_IMPORTANCE_MODIFIERS:O}},watch:{disabled:{immediate:!0,handler(){this.provideObj.disabled=this.disabled}},selected:{immediate:!0,handler(){this.provideObj.selected=this.selected}}},mounted(){this.updateSelected()},beforeUpdate(){this.updateSelected()},methods:{updateSelected(){this.provideObj.selected||(this.provideObj.selected=this.selected),this.tabs=this.getTabChildren()},setFocus(a){this.focusId=a},getTabChildren(){return this.$children.map(({$el:a})=>a).filter(({className:a})=>a.includes("d-tab")).map(a=>{var e,t;return{context:a,panelId:(e=a.getAttribute("aria-controls"))==null?void 0:e.replace("dt-panel-",""),id:(t=a.getAttribute("id"))==null?void 0:t.replace("dt-tab-",""),isSelected:a.getAttribute("aria-selected")==="true"}})},onChange(){this.$emit("change",{...this.provideObj})},changeContentPanel({selected:a,selectOverride:e}){this.provideObj.selected=a,e||this.onChange()},tabLeft(){const{index:a,tabs:e}=this.getIndexAndTabs();if(a===-1)return;const t=a-1<0?e.length-1:a-1;this.selectFocusOnTab(t,e)},tabRight(){const{index:a,tabs:e}=this.getIndexAndTabs();if(a===-1)return;const t=a+1>e.length-1?0:a+1;this.selectFocusOnTab(t,e)},selectFocusOnTab(a,e){const{context:t}=e[a];t.focus()},selectTab(){const{tabs:a,index:e}=this.getIndexAndTabs();this.selectTabByIndex(e,a)},selectTabByIndex(a,e){const{context:t,panelId:s}=e[a];this.provideObj.selected=s,t.focus()},getIndexAndTabs(){const a=this.tabs.findIndex(e=>this.focusId?e.id===`${this.focusId}`:e.isSelected);return{tabs:this.tabs,index:a}},onHomeButton(){var a,e;this.tabs.length!==0&&((e=(a=this.tabs[0])==null?void 0:a.context)==null||e.focus())},onEndButton(){var a,e;this.tabs.length!==0&&((e=(a=this.tabs[this.tabs.length-1])==null?void 0:a.context)==null||e.focus())}}};var P=function(){var e=this,t=e._self._c;return t("div",{attrs:{"data-qa":"dt-tab-group"}},[t("div",e._b({class:["d-tablist",e.TAB_LIST_SIZE_MODIFIERS[e.size],{[e.TAB_LIST_KIND_MODIFIERS.inverted]:e.inverted,[e.TAB_LIST_IMPORTANCE_MODIFIERS.borderless]:e.borderless},e.tabListClass],attrs:{role:"tablist","aria-label":e.label},on:{keyup:[function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"left",37,s.key,["Left","ArrowLeft"])||"button"in s&&s.button!==0?null:e.tabLeft.apply(null,arguments)},function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"right",39,s.key,["Right","ArrowRight"])||"button"in s&&s.button!==2?null:e.tabRight.apply(null,arguments)},function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.selectTab.apply(null,arguments)},function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"space",32,s.key,[" ","Spacebar"])?null:e.selectTab.apply(null,arguments)}],keydown:[function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"home",void 0,s.key,void 0)?null:e.onHomeButton.apply(null,arguments)},function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"end",void 0,s.key,void 0)?null:e.onEndButton.apply(null,arguments)}]}},"div",e.tabListChildProps,!1),[e._t("tabs")],2),e._t("default")],2)},L=[],T=d(k,P,L,!1,null,null,null,null);const i=T.exports;T.exports.__docgenInfo={displayName:"DtTabGroup",description:"Tabs allow users to navigation between grouped content in different views while within the same page context.",tags:{see:[{description:"https://dialpad.design/components/tabs.html",title:"see"}]},exportName:"default",props:[{name:"label",description:"Identifies the tab group",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"selected",description:"The id of the selected tab panel which should be displayed",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",description:"If true, disables the tab group",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inverted",description:"If true, applies inverted styles to the tab group",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"borderless",description:"If true, applies borderless styles to the tab group",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"If provided, applies size styles to the tab group",tags:{},values:["default","sm"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}},{name:"tabListClass",description:"Pass through classes, used to customize the tab list",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"tabListChildProps",description:"Pass through props, used to customize the tab list",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],events:[{name:"change",description:"Change tab event with the arguments: selected id of the current tab and disabled value",type:{names:["Object"]}}],slots:[{name:"tabs",description:"Slot for Tabs"},{name:"default",description:"Default slot for Panel"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tabs/tab_group.vue"]};const B={name:"DtTabsDefault",components:{DtTabGroup:i,DtTab:_,DtTabPanel:g}};var F=function(){var e=this,t=e._self._c;return t("div",{class:{"d-bgc-purple-600":e.inverted}},[t("dt-tab-group",{attrs:{size:e.size,inverted:e.inverted,borderless:e.borderless,disabled:e.disabled,"tab-list-class":e.tabListClass,"tab-list-child-props":e.tabListChildProps},on:{change:e.onChange}},[t("template",{slot:"tabs"},[t("dt-tab",{attrs:{id:"1","panel-id":"2",selected:""}},[e.tabs?t("p",{domProps:{innerHTML:e._s(e.tabs)}}):t("p",[e._v(" First ")])]),t("dt-tab",{attrs:{id:"3","panel-id":"4"}},[e.tabs?t("p",{domProps:{innerHTML:e._s(e.tabs)}}):t("p",[e._v(" Second ")])]),t("dt-tab",{attrs:{id:"5","panel-id":"6",label:"Third Label"}},[e.tabs?t("p",{domProps:{innerHTML:e._s(e.tabs)}}):t("p",[e._v(" Third ")])])],1),t("div",{class:{"d-fc-white":e.inverted}},[t("dt-tab-panel",{attrs:{id:"2","tab-id":"1"}},[e.defaultSlot?t("p",{domProps:{innerHTML:e._s(e.defaultSlot)}}):t("p",[e._v(" First Panel ")])]),t("dt-tab-panel",{attrs:{id:"4","tab-id":"3"}},[e.defaultSlot?t("p",{domProps:{innerHTML:e._s(e.defaultSlot)}}):t("p",[e._v(" Second Panel ")])]),t("dt-tab-panel",{attrs:{id:"6","tab-id":"5"}},[e.defaultSlot?t("p",{domProps:{innerHTML:e._s(e.defaultSlot)}}):t("p",[e._v(" Third Panel ")])])],1)],2)],1)},w=[],v=d(B,F,w,!1,null,null,null,null);const A=v.exports;v.exports.__docgenInfo={displayName:"DtTabsDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tabs/tabs_default.story.vue"]};const V={name:"DtTabsVariants",components:{DtTabGroup:i,DtTab:_,DtTabPanel:g},data(){return{variantsTabs:[{description:"Default tabs",propsToBind:{}},{description:"Inverted tabs",propsToBind:{inverted:!0}},{description:"Small size tabs",propsToBind:{size:"sm"}},{description:"Borderless tabs",propsToBind:{borderless:!0}},{description:"Importance tabs",propsToBind:{importance:!0}},{description:"Disabled tabs",propsToBind:{disabled:!0}}]}}};var E=function(){var e=this,t=e._self._c;return t("div",e._l(e.variantsTabs,function(s,n){return t("div",{key:n,staticClass:"d-mb64"},[t("p",{staticClass:"d-fw-bold d-mb8"},[e._v(" "+e._s(s.description)+" ")]),t("dt-tab-group",e._b({class:["d-mb8",{"d-bgc-purple-600 d-p2":s.propsToBind.inverted}]},"dt-tab-group",s.propsToBind,!1),[t("template",{slot:"tabs"},[t("dt-tab",{attrs:{id:`${n}1`,"panel-id":`${n}2`,selected:""}},[e._v(" First ")]),t("dt-tab",{attrs:{id:`${n}3`,"panel-id":`${n}4`}},[e._v(" Second ")]),t("dt-tab",{attrs:{id:`${n}5`,"panel-id":`${n}6`,label:"Third Label"}},[e._v(" Third ")])],1),t("div",{class:{"d-fc-white":s.propsToBind.inverted}},[t("dt-tab-panel",{attrs:{id:`${n}2`,"tab-id":`${n}1`}},[t("p",[e._v("First Panel")])]),t("dt-tab-panel",{attrs:{id:`${n}4`,"tab-id":`${n}3`}},[t("p",[e._v("Second Panel")])]),t("dt-tab-panel",{attrs:{id:`${n}6`,"tab-id":`${n}5`}},[t("p",[e._v("Third Panel")])])],1)],2)],1)}),0)},j=[],y=d(V,E,j,!1,null,null,null,null);const M=y.exports;y.exports.__docgenInfo={displayName:"DtTabsVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tabs/tabs_variants.story.vue"]};const I={size:"default",onChange:x("change")},S={default:{control:"text",table:{type:{summary:"VNode"}}},tabs:{control:"text",table:{type:{summary:"VNode"}}},size:{options:h,control:{type:"select"}},onChange:{table:{disable:!0}},change:{description:"Change tab event with the arguments: `selected` id of the current tab and `disabled` value",table:{type:{summary:"event"}}}},R={title:"Components/Tabs",component:i,args:I,argTypes:S,excludeStories:/.*Data$/},z=(a,{argTypes:e})=>m(a,e,A),N=(a,{argTypes:e})=>m(a,e,M),r={render:z,args:{}},l={render:N,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var o,u,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var c,b,f;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {},
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  }
}`,...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const H=["argsData","argTypesData","Default","Variants"],U=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:l,__namedExportsOrder:H,argTypesData:S,argsData:I,default:R},Symbol.toStringTag,{value:"Module"}));export{r as D,U as T,l as V};
//# sourceMappingURL=tabs.stories-32a37620.js.map