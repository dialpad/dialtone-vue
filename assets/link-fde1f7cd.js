import{L as a,a as s}from"./link_constants-8ea95ec9.js";import{n as r}from"./_plugin-vue2_normalizer-2bbd088e.js";const o={name:"DtLink",props:{kind:{type:String,default:"",validator(t){return a.includes(t)}}},emits:["click","focusin","focusout"],data(){return{LINK_KIND_MODIFIERS:s}}};var l=function(){var e=this,i=e._self._c;return i("a",e._g({class:["d-link",e.LINK_KIND_MODIFIERS[e.kind]],attrs:{"data-qa":"dt-link",href:"href"in e.$attrs?e.$attrs.href:"javascript:void(0)"}},e.$listeners),[e._t("default")],2)},c=[],n=r(o,l,c,!1,null,null,null,null);const u=n.exports;n.exports.__docgenInfo={displayName:"DtLink",description:"A link is a navigational element that can be found on its own, within other text, or directly following content.",tags:{property:[{title:"property",type:{name:"String"},name:"href",description:"attribute"},{title:"property",type:{name:"String"},name:"rel",description:"attribute"}],see:[{description:"https://dialpad.design/components/link.html",title:"see"}]},exportName:"default",props:[{name:"kind",description:"Applies the link variant styles",tags:{},values:["null","danger","warning","success","muted","inverted"],type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"click",description:"Native click event",type:{names:["PointerEvent | KeyboardEvent"]}},{name:"focusin",description:"Native focus in event",type:{names:["FocusEvent"]}},{name:"focusout",description:"Native focus out event",type:{names:["FocusEvent"]}}],slots:[{name:"default",description:"Slot for main content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/link/link.vue"]};export{u as D};
//# sourceMappingURL=link-fde1f7cd.js.map
