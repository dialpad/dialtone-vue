import{D as h}from"./icon-z49A8j_D.js";import{s as m,k as n,y,g as _,F as u,G as f,p as i,o as e,b as S}from"./vue.esm-bundler-pfnFGw-8.js";import{_ as g}from"./_plugin-vue_export-helper-x3n3nnut.js";const a={"{win}":"layout-grid","{arrow-right}":"arrow-right","{arrow-left}":"arrow-left","{arrow-up}":"arrow-up","{arrow-down}":"arrow-down","{cmd}":"command"},b={"{plus}":"plus"},A=Object.keys(a),l={name:"DtKeyboardShortcut",components:{DtIcon:h},props:{inverted:{type:Boolean,default:!1},shortcut:{type:String,required:!0},screenReaderText:{type:String,default:null}},data(){return{SHORTCUTS_ICON_ALIASES:a,separator:/\+/gi}},computed:{icons(){return{...a,...b}},shortcutWithSeparator(){return this.shortcut.replace(this.separator,"{plus}")},formattedShortcut(){return Object.keys(a).reduce((s,t)=>s.replace(new RegExp("{"+t+"}","gi"),a[t]),this.shortcutWithSeparator)},formattedShortcutSplit(){const s=Object.keys(this.icons).join("|"),t=new RegExp(`(${s})`,"gi");return this.formattedShortcut.split(t).filter(Boolean)}}},k={key:0,class:"sr-only"},w=["innerHTML"];function v(s,t,r,T,x,c){const p=m("dt-icon");return e(),n("kbd",{class:i(["d-keyboard-shortcut",{"d-keyboard-shortcut--inverted":r.inverted}])},[r.screenReaderText?(e(),n("span",k,y(r.screenReaderText),1)):_("",!0),(e(!0),n(u,null,f(c.formattedShortcutSplit,(o,d)=>(e(),n(u,null,[c.icons[o]?(e(),S(p,{key:`${d}-${o}`,name:c.icons[o],size:"100","aria-hidden":"true",class:i(["d-keyboard-shortcut__icon",{"d-keyboard-shortcut__icon--inverted":r.inverted}])},null,8,["name","class"])):(e(),n("span",{key:`${d}-${o}`,"aria-hidden":"true",class:i(["d-keyboard-shortcut__item",{"d-keyboard-shortcut__item--inverted":r.inverted}]),innerHTML:o},null,10,w))],64))),256))],2)}const C=g(l,[["render",v]]);l.__docgenInfo={displayName:"DtKeyboardShortcut",description:"This component displays a visual representation of a keyboard shortcut to the user.",tags:{see:[{description:"https://dialpad.design/components/keyboard_shortcut.html",title:"see"}]},exportName:"default",props:[{name:"inverted",description:"If true, applies inverted styles.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"shortcut",description:`Include any of these tokens in your string to render the corresponding symbol:
{cmd} {win} {arrow-right} {arrow-left} {arrow-up} {arrow-down}`,type:{name:"string"},required:!0},{name:"screenReaderText",description:"Text entered here will be read by assistive technology. If null this component will be ignored by AT.",type:{name:"string"},defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/keyboard_shortcut/keyboard_shortcut.vue"]};export{C as D,A as S};
//# sourceMappingURL=keyboard_shortcut-u0-KcN3Q.js.map
