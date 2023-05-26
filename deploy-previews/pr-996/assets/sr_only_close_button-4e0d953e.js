import{D as a}from"./icon-2be5d650.js";import{a as o,o as i,b as d,w as r,d as u,y as c,A as p}from"./vue.esm-bundler-15aa0fd7.js";import{D as m}from"./button-586a189e.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";const L={props:{visuallyHiddenClose:{type:Boolean,default:!1},visuallyHiddenCloseLabel:{type:String,default:null}},watch:{$props:{immediate:!0,deep:!0,handler(){this.validateVisuallyHiddenCloseProps()}}},computed:{showVisuallyHiddenClose(){return this.visuallyHiddenClose&&this.visuallyHiddenCloseLabel!=null}},methods:{validateVisuallyHiddenCloseProps(){this.visuallyHiddenClose&&!this.visuallyHiddenCloseLabel&&console.error(`If visuallyHiddenClose prop is true, the component includes
           a visually hidden close button and you must set the visuallyHiddenCloseLabel prop.`)}}},l={name:"SrOnlyCloseButton",components:{DtIcon:a,DtButton:m},props:{visuallyHiddenCloseLabel:{type:String,default:null}},emits:["close"],methods:{close(){this.$emit("close")}}};function v(_,f,s,C,h,e){const t=o("dt-icon"),n=o("dt-button");return i(),d(n,{id:"sr-only-close-button","data-qa":"dt-sr-only-close-button",class:"d-vi-visible-sr","aria-label":s.visuallyHiddenCloseLabel,onClick:e.close,onKeydown:c(p(e.close,["prevent","stop"]),["space"])},{default:r(()=>[u(t,{name:"close"})]),_:1},8,["aria-label","onClick","onKeydown"])}const S=y(l,[["render",v],["__file","/home/runner/work/dialtone-vue/dialtone-vue/common/sr_only_close_button.vue"]]);l.__docgenInfo={displayName:"SrOnlyCloseButton",exportName:"default",description:"",tags:{},props:[{name:"visuallyHiddenCloseLabel",description:"Label for the visually hidden close button\nRequired if visuallyHiddenClose is set to `true`",type:{name:"string"},defaultValue:{func:!1,value:"null"}}],events:[{name:"close"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/sr_only_close_button.vue"]};export{L as S,S as a};
//# sourceMappingURL=sr_only_close_button-4e0d953e.js.map