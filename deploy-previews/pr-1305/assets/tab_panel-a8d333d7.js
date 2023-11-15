import{M as l}from"./modal-f96ddab9.js";import{d as o,v as r,k as d,f as u,g as m,p as c,o as b}from"./vue.esm-bundler-3a36b22d.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";const s={name:"DtTabPanel",mixins:[l],inject:["groupContext"],props:{id:{type:String,required:!0},tabId:{type:String,required:!0},hidden:{type:Boolean,default:!1},tabPanelClass:{type:[String,Array,Object],default:""}},data(){return{isFirstElementFocusable:!1}},computed:{hidePanel(){return this.groupContext.selected!==this.id||this.hidden}},async mounted(){const t=await this.getFirstFocusableElement(this.$el);t?this.isFirstElementFocusable=this.isFirstElementOfPanel(t):this.isFirstElementFocusable=!1},methods:{isFirstElementOfPanel(t){let a=t,e=!0;for(;a;){if(a.previousElementSibling!==null){e=!1;break}a=a.parentNode!==this.$el?a.parentNode:null}return e}}},p=["id","tabindex","aria-labelledby","aria-hidden"];function h(t,a,e,g,i,n){return o((b(),d("div",{id:`dt-panel-${e.id}`,role:"tabpanel",tabindex:i.isFirstElementFocusable?-1:0,"aria-labelledby":`dt-tab-${e.tabId}`,"aria-hidden":`${n.hidePanel}`,class:c([{"d-d-none":n.hidePanel},e.tabPanelClass]),"data-qa":"dt-tab-panel"},[u(" @slot Default slot for Tab Panel "),m(t.$slots,"default")],10,p)),[[r,!e.hidden]])}const y=f(s,[["render",h],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/tabs/tab_panel.vue"]]);s.__docgenInfo={description:"Tabs allow users to navigation between grouped content in different views while within the same page context.",displayName:"DtTabPanel",tags:{see:[{description:"https://dialpad.design/components/tabs.html",title:"see"}]},exportName:"default",props:[{name:"id",description:"Id of the panel",type:{name:"string"},required:!0},{name:"tabId",description:"Id of the associated tab",type:{name:"string"},required:!0},{name:"hidden",description:"If true, hides the tab content",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"tabPanelClass",description:"Used to customize the tab element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default",description:"Default slot for Tab Panel"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/modal.js","/home/runner/work/dialtone-vue/dialtone-vue/components/tabs/tab_panel.vue"]};export{y as D};
//# sourceMappingURL=tab_panel-a8d333d7.js.map
