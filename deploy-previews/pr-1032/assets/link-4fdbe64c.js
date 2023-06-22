import{a,L as s}from"./link_constants-51338c78.js";import{n as r}from"./_plugin-vue2_normalizer-2bbd088e.js";const l={name:"DtLink",props:{kind:{type:String,default:"",validator(n){return a.includes(n)}}},emits:["click","focusin","focusout"],data(){return{LINK_KIND_MODIFIERS:s}}};var i=function(){var e=this,o=e._self._c;return o("a",e._g({class:["d-link",e.LINK_KIND_MODIFIERS[e.kind]],attrs:{"data-qa":"dt-link"}},e.$listeners),[e._t("default")],2)},c=[];i._withStripped=!0;var t=r(l,i,c,!1,null,null,null,null);t.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/link/link.vue";const d=t.exports;t.exports.__docgenInfo={displayName:"DtLink",description:"A link is a navigational element that can be found on its own, within other text, or directly following content.",tags:{property:[{title:"property",type:{name:"String"},name:"href",description:"attribute"},{title:"property",type:{name:"String"},name:"rel",description:"attribute"}],see:[{description:"https://dialpad.design/components/link.html",title:"see"}]},exportName:"default",props:[{name:"kind",description:"Applies the link variant styles",tags:{},values:["null","danger","warning","success","muted","inverted"],type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"click",description:"Native click event",type:{names:["PointerEvent | KeyboardEvent"]}},{name:"focusin",description:"Native focus in event",type:{names:["FocusEvent"]}},{name:"focusout",description:"Native focus out event",type:{names:["FocusEvent"]}}],slots:[{name:"default",description:"Slot for main content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/link/link.vue"]};export{d as D};
//# sourceMappingURL=link-4fdbe64c.js.map