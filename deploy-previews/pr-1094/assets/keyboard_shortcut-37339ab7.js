import{D as h}from"./icon-fe5f3947.js";import{k as m,d as o,t as f,j as y,F as l,g as _,n as c,o as e,v as S}from"./vue.esm-bundler-356a911e.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";const a={"{win}":"layout-grid","{arrow-right}":"arrow-right","{arrow-left}":"arrow-left","{arrow-up}":"arrow-up","{arrow-down}":"arrow-down","{cmd}":"command"},b={"{plus}":"plus"},A=Object.keys(a),u={name:"DtKeyboardShortcut",components:{DtIcon:h},props:{inverted:{type:Boolean,default:!1},shortcut:{type:String,required:!0},screenReaderText:{type:String,default:null}},data(){return{SHORTCUTS_ICON_ALIASES:a,separator:/\+/gi}},computed:{icons(){return{...a,...b}},shortcutWithSeparator(){return this.shortcut.replace(this.separator,"{plus}")},formattedShortcut(){return Object.keys(a).reduce((s,t)=>s.replace(new RegExp("{"+t+"}","gi"),a[t]),this.shortcutWithSeparator)},formattedShortcutSplit(){const s=Object.keys(this.icons).join("|"),t=new RegExp(`(${s})`,"gi");return this.formattedShortcut.split(t).filter(Boolean)}}},v={key:0,class:"sr-only"},w=["innerHTML"];function k(s,t,r,T,x,d){const p=m("dt-icon");return e(),o("kbd",{class:c(["d-d-inline-flex","d-ff-custom","d-ai-center","d-jc-center","d-box-border","d-px4","d-ba","d-bar4","d-fs-100",r.inverted?"d-bc-moderate-inverted":"d-bc-default"])},[r.screenReaderText?(e(),o("span",v,f(r.screenReaderText),1)):y("v-if",!0),(e(!0),o(l,null,_(d.formattedShortcutSplit,(n,i)=>(e(),o(l,null,[d.icons[n]?(e(),S(p,{key:`${i}-${n}`,name:d.icons[n],size:"100","aria-hidden":"true",class:c([r.inverted?"d-fc-secondary-inverted":"d-fc-tertiary","d-mr2"])},null,8,["name","class"])):(e(),o("span",{key:`${i}-${n}`,"aria-hidden":"true",class:c([r.inverted?"d-fc-secondary-inverted":"d-fc-tertiary","d-mr2"]),innerHTML:n},null,10,w))],64))),256))],2)}const C=g(u,[["render",k],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/keyboard_shortcut/keyboard_shortcut.vue"]]);u.__docgenInfo={displayName:"DtKeyboardShortcut",description:"This component displays a visual representation of a keyboard shortcut to the user.",tags:{see:[{description:"https://dialpad.design/components/keyboard_shortcut.html",title:"see"}]},exportName:"default",props:[{name:"inverted",description:"If true, applies inverted styles.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"shortcut",description:`Include any of these tokens in your string to render the corresponding symbol:
{cmd} {win} {arrow-right} {arrow-left} {arrow-up} {arrow-down}`,type:{name:"string"},required:!0},{name:"screenReaderText",description:"Text entered here will be read by assistive technology. If null this component will be ignored by AT.",type:{name:"string"},defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/keyboard_shortcut/keyboard_shortcut.vue"]};export{C as D,A as S};
//# sourceMappingURL=keyboard_shortcut-37339ab7.js.map
