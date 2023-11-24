import{a as C}from"./chunk-AY7I2SME-4UylTnhF.js";import{c as g}from"./storybook_utils-XrTpeJKJ.js";import{T as v,a as O,b as $,c as P,D as T}from"./tab-fOiIqReH.js";import{n as o}from"./_plugin-vue2_normalizer-XBmYDgEh.js";import{D as y}from"./tab_panel-faou5YQz.js";const L={name:"DtTabGroup",provide(){return{groupContext:this.provideObj,changeContentPanel:this.changeContentPanel,setFocus:this.setFocus}},props:{label:{type:String,default:""},selected:{type:String,default:""},disabled:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1},borderless:{type:Boolean,default:!1},size:{type:String,default:"default",validate(a){return v.includes(a)}},tabListClass:{type:[String,Array,Object],default:""},tabListChildProps:{type:Object,default:()=>({})}},emits:["change"],data(){return{provideObj:{selected:"",disabled:!1},focusId:null,tabs:[],TAB_LIST_SIZE_MODIFIERS:O,TAB_LIST_KIND_MODIFIERS:$,TAB_LIST_IMPORTANCE_MODIFIERS:P}},watch:{disabled:{immediate:!0,handler(){this.provideObj.disabled=this.disabled}},selected:{immediate:!0,handler(){this.provideObj.selected=this.selected}}},mounted(){this.updateSelected()},beforeUpdate(){this.updateSelected()},methods:{updateSelected(){this.provideObj.selected||(this.provideObj.selected=this.selected),this.tabs=this.getTabChildren()},setFocus(a){this.focusId=a},getTabChildren(){return this.$children.map(({$el:a})=>a).filter(({className:a})=>a.includes("d-tab")).map(a=>{var e,t;return{context:a,panelId:(e=a.getAttribute("aria-controls"))==null?void 0:e.replace("dt-panel-",""),id:(t=a.getAttribute("id"))==null?void 0:t.replace("dt-tab-",""),isSelected:a.getAttribute("aria-selected")==="true"}})},onChange(){this.$emit("change",{...this.provideObj})},changeContentPanel({selected:a,selectOverride:e}){this.provideObj.selected=a,e||this.onChange()},tabLeft(){const{index:a,tabs:e}=this.getIndexAndTabs();if(a===-1)return;const t=a-1<0?e.length-1:a-1;this.selectFocusOnTab(t,e)},tabRight(){const{index:a,tabs:e}=this.getIndexAndTabs();if(a===-1)return;const t=a+1>e.length-1?0:a+1;this.selectFocusOnTab(t,e)},selectFocusOnTab(a,e){const{context:t}=e[a];t.focus()},selectTab(){const{tabs:a,index:e}=this.getIndexAndTabs();this.selectTabByIndex(e,a)},selectTabByIndex(a,e){const{context:t,panelId:s}=e[a];this.provideObj.selected=s,t.focus()},getIndexAndTabs(){const a=this.tabs.findIndex(e=>this.focusId?e.id===`${this.focusId}`:e.isSelected);return{tabs:this.tabs,index:a}},onHomeButton(){var a,e;this.tabs.length!==0&&((e=(a=this.tabs[0])==null?void 0:a.context)==null||e.focus())},onEndButton(){var a,e;this.tabs.length!==0&&((e=(a=this.tabs[this.tabs.length-1])==null?void 0:a.context)==null||e.focus())}}};var I=function(){var e=this,t=e._self._c;return t("div",{attrs:{"data-qa":"dt-tab-group"}},[t("div",e._b({class:["d-tablist",e.TAB_LIST_SIZE_MODIFIERS[e.size],{[e.TAB_LIST_KIND_MODIFIERS.inverted]:e.inverted,[e.TAB_LIST_IMPORTANCE_MODIFIERS.borderless]:e.borderless},e.tabListClass],attrs:{role:"tablist","aria-label":e.label},on:{keyup:[function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"left",37,s.key,["Left","ArrowLeft"])||"button"in s&&s.button!==0?null:e.tabLeft.apply(null,arguments)},function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"right",39,s.key,["Right","ArrowRight"])||"button"in s&&s.button!==2?null:e.tabRight.apply(null,arguments)},function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.selectTab.apply(null,arguments)},function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"space",32,s.key,[" ","Spacebar"])?null:e.selectTab.apply(null,arguments)}],keydown:[function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"home",void 0,s.key,void 0)?null:e.onHomeButton.apply(null,arguments)},function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"end",void 0,s.key,void 0)?null:e.onEndButton.apply(null,arguments)}]}},"div",e.tabListChildProps,!1),[e._t("tabs")],2),e._t("default")],2)},w=[];I._withStripped=!0;var i=o(L,I,w,!1,null,null,null,null);i.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/tabs/tab_group.vue";const d=i.exports;i.exports.__docgenInfo={displayName:"DtTabGroup",description:"Tabs allow users to navigation between grouped content in different views while within the same page context.",tags:{see:[{description:"https://dialpad.design/components/tabs.html",title:"see"}]},exportName:"default",props:[{name:"label",description:"Identifies the tab group",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"selected",description:"The id of the selected tab panel which should be displayed",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",description:"If true, disables the tab group",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inverted",description:"If true, applies inverted styles to the tab group",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"borderless",description:"If true, applies borderless styles to the tab group",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"If provided, applies size styles to the tab group",tags:{},values:["default","sm"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}},{name:"tabListClass",description:"Pass through classes, used to customize the tab list",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"tabListChildProps",description:"Pass through props, used to customize the tab list",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],events:[{name:"change",description:"Change tab event with the arguments: selected id of the current tab and disabled value",type:{names:["Object"]}}],slots:[{name:"tabs",description:"Slot for Tabs"},{name:"default",description:"Default slot for Panel"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tabs/tab_group.vue"]};const B={name:"DtTabsDefault",components:{DtTabGroup:d,DtTab:T,DtTabPanel:y}};var S=function(){var e=this,t=e._self._c;return t("div",{class:{"d-bgc-purple-600":e.$attrs.inverted}},[t("dt-tab-group",{attrs:{size:e.$attrs.size,inverted:e.$attrs.inverted,borderless:e.$attrs.borderless,disabled:e.$attrs.disabled,"tab-list-class":e.$attrs.tabListClass,"tab-list-child-props":e.$attrs.tabListChildProps},on:{change:e.$attrs.onChange}},[t("template",{slot:"tabs"},[t("dt-tab",{attrs:{id:"1","panel-id":"2",selected:""}},[e.$attrs.tabs?t("p",{domProps:{innerHTML:e._s(e.$attrs.tabs)}}):t("p",[e._v(" First ")])]),t("dt-tab",{attrs:{id:"3","panel-id":"4"}},[e.$attrs.tabs?t("p",{domProps:{innerHTML:e._s(e.$attrs.tabs)}}):t("p",[e._v(" Second ")])]),t("dt-tab",{attrs:{id:"5","panel-id":"6",label:"Third Label"}},[e.$attrs.tabs?t("p",{domProps:{innerHTML:e._s(e.$attrs.tabs)}}):t("p",[e._v(" Third ")])])],1),t("div",{class:{"d-fc-neutral-white":e.$attrs.inverted}},[t("dt-tab-panel",{attrs:{id:"2","tab-id":"1"}},[e.$attrs.default?t("p",{domProps:{innerHTML:e._s(e.$attrs.default)}}):t("p",[e._v(" First Panel ")])]),t("dt-tab-panel",{attrs:{id:"4","tab-id":"3"}},[e.$attrs.default?t("p",{domProps:{innerHTML:e._s(e.$attrs.default)}}):t("p",[e._v(" Second Panel ")])]),t("dt-tab-panel",{attrs:{id:"6","tab-id":"5"}},[e.$attrs.default?t("p",{domProps:{innerHTML:e._s(e.$attrs.default)}}):t("p",[e._v(" Third Panel ")])])],1)],2)],1)},F=[];S._withStripped=!0;var u=o(B,S,F,!1,null,null,null,null);u.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/tabs/tabs_default.story.vue";const A=u.exports;u.exports.__docgenInfo={displayName:"DtTabsDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tabs/tabs_default.story.vue"]};const V={name:"DtTabsVariants",components:{DtTabGroup:d,DtTab:T,DtTabPanel:y},data(){return{variantsTabs:[{description:"Default tabs",propsToBind:{}},{description:"Inverted tabs",propsToBind:{inverted:!0}},{description:"Small size tabs",propsToBind:{size:"sm"}},{description:"Borderless tabs",propsToBind:{borderless:!0}},{description:"Importance tabs",propsToBind:{importance:!0}},{description:"Disabled tabs",propsToBind:{disabled:!0}}]}}};var x=function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-stack32"},e._l(e.variantsTabs,function(s,n){return t("div",{key:n},[t("p",{staticClass:"d-fw-bold d-mb8"},[e._v(" "+e._s(s.description)+" ")]),t("dt-tab-group",e._b({class:["d-mb8",{"d-bgc-purple-600 d-p2":s.propsToBind.inverted}]},"dt-tab-group",s.propsToBind,!1),[t("template",{slot:"tabs"},[t("dt-tab",{attrs:{id:`${n}1`,"panel-id":`${n}2`,selected:""}},[e._v(" First ")]),t("dt-tab",{attrs:{id:`${n}3`,"panel-id":`${n}4`}},[e._v(" Second ")]),t("dt-tab",{attrs:{id:`${n}5`,"panel-id":`${n}6`,label:"Third Label"}},[e._v(" Third ")])],1),t("div",{class:{"d-fc-neutral-white":s.propsToBind.inverted}},[t("dt-tab-panel",{attrs:{id:`${n}2`,"tab-id":`${n}1`}},[t("p",[e._v("First Panel")])]),t("dt-tab-panel",{attrs:{id:`${n}4`,"tab-id":`${n}3`}},[t("p",[e._v("Second Panel")])]),t("dt-tab-panel",{attrs:{id:`${n}6`,"tab-id":`${n}5`}},[t("p",[e._v("Third Panel")])])],1)],2)],1)}),0)},E=[];x._withStripped=!0;var p=o(V,x,E,!1,null,null,null,null);p.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/tabs/tabs_variants.story.vue";const j=p.exports;p.exports.__docgenInfo={displayName:"DtTabsVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tabs/tabs_variants.story.vue"]};const D={size:"default",onChange:C("change")},k={default:{control:"text",table:{type:{summary:"VNode"}}},tabs:{control:"text",table:{type:{summary:"VNode"}}},size:{options:v,control:{type:"select"}},onChange:{table:{disable:!0}},change:{description:"Change tab event with the arguments: `selected` id of the current tab and `disabled` value",table:{type:{summary:"event"}}}},M={title:"Components/Tabs",component:d,args:D,argTypes:k,excludeStories:/.*Data$/},R=(a,{argTypes:e})=>g(a,e,A),z=(a,{argTypes:e})=>g(a,e,j),r={render:R,args:{}},l={render:z,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var c,b,f;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var m,h,_;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(_=(h=l.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};const N=["argsData","argTypesData","Default","Variants"],U=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:l,__namedExportsOrder:N,argTypesData:k,argsData:D,default:M},Symbol.toStringTag,{value:"Module"}));export{r as D,U as T,l as V};
//# sourceMappingURL=tabs.stories-mFuY2-7G.js.map