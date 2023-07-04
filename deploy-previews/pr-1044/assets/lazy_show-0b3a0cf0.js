import{n as i}from"./_plugin-vue2_normalizer-2bbd088e.js";const o={name:"DtLazyShow",props:{show:{type:Boolean,default:!1},transition:{type:String,default:null},appear:{type:Boolean,default:!1}},data(){return{initialized:!!this.show}},computed:{isCSSEnabled(){return!0}},watch:{show:function(n){!n||this.initialized||(this.initialized=!0)}}};var s=function(){var e=this,a=e._self._c;return a("transition",e._g({attrs:{name:e.transition,appear:e.appear,css:e.isCSSEnabled}},e.$listeners),[a("div",e._g({directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},e.$listeners),[e.initialized?e._t("default"):e._e()],2)])},l=[];s._withStripped=!0;var t=i(o,s,l,!1,null,null,null,null);t.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/lazy_show/lazy_show.vue";const u=t.exports;t.exports.__docgenInfo={displayName:"DtLazyShow",description:"Lazy Show is a utility component that prevents its children from being rendered until the first time it is shown.",tags:{see:[{description:"https://dialpad.design/components/lazy_show.html",title:"see"}]},exportName:"default",props:[{name:"show",description:"Whether the child slot is shown.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"transition",description:"A valid Vue enter/leave CSS transition name.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"appear",description:"Enable/Disable transition animation",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default",description:"Slot for main content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/lazy_show/lazy_show.vue"]};export{u as D};
//# sourceMappingURL=lazy_show-0b3a0cf0.js.map