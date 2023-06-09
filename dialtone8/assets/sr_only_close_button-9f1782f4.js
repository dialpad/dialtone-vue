import{D as t}from"./icon-405b7e51.js";import{D as n}from"./button-82727ed7.js";import{n as a}from"./_plugin-vue2_normalizer-2bbd088e.js";const m={props:{visuallyHiddenClose:{type:Boolean,default:!1},visuallyHiddenCloseLabel:{type:String,default:null}},watch:{$props:{immediate:!0,deep:!0,handler(){this.validateVisuallyHiddenCloseProps()}}},computed:{showVisuallyHiddenClose(){return this.visuallyHiddenClose&&this.visuallyHiddenCloseLabel!=null}},methods:{validateVisuallyHiddenCloseProps(){this.visuallyHiddenClose&&!this.visuallyHiddenCloseLabel&&console.error(`If visuallyHiddenClose prop is true, the component includes
           a visually hidden close button and you must set the visuallyHiddenCloseLabel prop.`)}}},i={name:"SrOnlyCloseButton",components:{DtIcon:t,DtButton:n},props:{visuallyHiddenCloseLabel:{type:String,default:null}},methods:{close(){this.$emit("close")}}};var r=function(){var e=this,s=e._self._c;return s("dt-button",{staticClass:"d-vi-visible-sr",attrs:{id:"sr-only-close-button","data-qa":"dt-sr-only-close-button","aria-label":e.visuallyHiddenCloseLabel},on:{click:e.close,keydown:function(l){return!l.type.indexOf("key")&&e._k(l.keyCode,"space",32,l.key,[" ","Spacebar"])?null:(l.preventDefault(),l.stopPropagation(),e.close.apply(null,arguments))}}},[s("dt-icon",{attrs:{name:"close"}})],1)},d=[],o=a(i,r,d,!1,null,null,null,null);const f=o.exports;o.exports.__docgenInfo={displayName:"SrOnlyCloseButton",exportName:"default",description:"",tags:{},props:[{name:"visuallyHiddenCloseLabel",description:"Label for the visually hidden close button\nRequired if visuallyHiddenClose is set to `true`",type:{name:"string"},defaultValue:{func:!1,value:"null"}}],events:[{name:"close"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/sr_only_close_button.vue"]};export{m as S,f as a};
//# sourceMappingURL=sr_only_close_button-9f1782f4.js.map
