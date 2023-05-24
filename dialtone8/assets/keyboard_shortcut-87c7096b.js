import{D as d}from"./icon-4b4aba70.js";import{n as i}from"./_plugin-vue2_normalizer-2bbd088e.js";const r={"{win}":"layout-grid","{arrow-right}":"arrow-right","{arrow-left}":"arrow-left","{arrow-up}":"arrow-up","{arrow-down}":"arrow-down","{cmd}":"command"},c={"{plus}":"plus"},m=Object.keys(r),l={name:"DtKeyboardShortcut",components:{DtIcon:d},props:{inverted:{type:Boolean,default:!1},shortcut:{type:String,required:!0},screenReaderText:{type:String,default:null}},data(){return{SHORTCUTS_ICON_ALIASES:r,separator:/\+/gi}},computed:{icons(){return{...r,...c}},shortcutWithSeparator(){return this.shortcut.replace(this.separator,"{plus}")},formattedShortcut(){return Object.keys(r).reduce((n,e)=>n.replace(new RegExp("{"+e+"}","gi"),r[e]),this.shortcutWithSeparator)},formattedShortcutSplit(){const n=Object.keys(this.icons).join("|"),e=new RegExp(`(${n})`,"gi");return this.formattedShortcut.split(e).filter(Boolean)}}};var u=function(){var e=this,o=e._self._c;return o("kbd",{class:["d-d-inline-flex","d-ff-custom","d-ai-center","d-jc-center","d-box-border","d-px4","d-ba","d-bar4","d-fs-100",e.inverted?"d-bc-inverted-moderate":"d-bc-default"]},[e.screenReaderText?o("span",{staticClass:"sr-only"},[e._v(" "+e._s(e.screenReaderText)+" ")]):e._e(),e._l(e.formattedShortcutSplit,function(t,a){return[e.icons[t]?o("dt-icon",{key:`${a}-${t}`,class:[e.inverted?"d-fc-secondary-inverted":"d-fc-tertiary","d-mr2"],attrs:{name:e.icons[t],size:"100","aria-hidden":"true"}}):o("span",{key:`${a}-${t}`,class:[e.inverted?"d-fc-secondary-inverted":"d-fc-tertiary","d-mr2"],attrs:{"aria-hidden":"true"},domProps:{innerHTML:e._s(t)}})]})],2)},p=[],s=i(l,u,p,!1,null,null,null,null);const y=s.exports;s.exports.__docgenInfo={displayName:"DtKeyboardShortcut",description:"This component displays a visual representation of a keyboard shortcut to the user.",tags:{see:[{description:"https://dialpad.design/components/keyboard_shortcut.html",title:"see"}]},exportName:"default",props:[{name:"inverted",description:"If true, applies inverted styles.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"shortcut",description:`Include any of these tokens in your string to render the corresponding symbol:
{cmd} {win} {arrow-right} {arrow-left} {arrow-up} {arrow-down}`,type:{name:"string"},required:!0},{name:"screenReaderText",description:"Text entered here will be read by assistive technology. If null this component will be ignored by AT.",type:{name:"string"},defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/keyboard_shortcut/keyboard_shortcut.vue"]};export{y as D,m as S};
//# sourceMappingURL=keyboard_shortcut-87c7096b.js.map
