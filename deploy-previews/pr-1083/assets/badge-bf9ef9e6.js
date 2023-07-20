import{D as l}from"./icon-76bd8468.js";import{n as c}from"./_plugin-vue2_normalizer-2bbd088e.js";const d={default:"",info:"d-badge--info",success:"d-badge--success",warning:"d-badge--warning",critical:"d-badge--critical",bulletin:"d-badge--bulletin",ai:"d-badge--ai"},o={label:"",count:"d-badge--count"},i={"black-400":"d-badge--decorate-black-400","black-500":"d-badge--decorate-black-500","black-900":"d-badge--decorate-black-900","red-200":"d-badge--decorate-red-200","red-300":"d-badge--decorate-red-300","red-400":"d-badge--decorate-red-400","purple-200":"d-badge--decorate-purple-200","purple-300":"d-badge--decorate-purple-300","purple-400":"d-badge--decorate-purple-400","purple-500":"d-badge--decorate-purple-500","blue-200":"d-badge--decorate-blue-200","blue-300":"d-badge--decorate-blue-300","blue-400":"d-badge--decorate-blue-400","green-300":"d-badge--decorate-green-300","green-400":"d-badge--decorate-green-400","green-500":"d-badge--decorate-green-500","gold-300":"d-badge--decorate-gold-300","gold-400":"d-badge--decorate-gold-400","gold-500":"d-badge--decorate-gold-500","magenta-200":"d-badge--decorate-magenta-200","magenta-300":"d-badge--decorate-magenta-300","magenta-400":"d-badge--decorate-magenta-400"},s={name:"DtBadge",components:{DtIcon:l},props:{iconLeft:{type:String,default:""},iconRight:{type:String,default:""},text:{type:String,default:""},kind:{type:String,default:"label",validator:t=>Object.keys(o).includes(t)},type:{type:String,default:"default",validator:t=>Object.keys(d).includes(t)},decoration:{type:String,default:void 0,validator:t=>Object.keys(i).includes(t)},labelClass:{type:[String,Array,Object],default:""}},data(){return{BADGE_TYPE_MODIFIERS:d,BADGE_KIND_MODIFIERS:o,BADGE_DECORATION_MODIFIERS:i}},computed:{hasIcons(){return this.iconLeft!==""||this.iconRight!==""}},watch:{$props:{immediate:!0,deep:!0,handler(){this.validateProps()}}},methods:{validateProps(){this.validateTypePropCombination(),this.validateDecorationPropCombination()},validateTypePropCombination(){this.type==="ai"&&this.kind==="count"&&console.error("DtBadge error: type: 'ai' with kind: 'count' is an invalid combination.")},validateDecorationPropCombination(){this.decoration&&((this.kind!=="label"||this.type!=="default")&&console.error("DtBadge error: decoration prop can only be used with kind: 'label' and type: 'default'."),this.hasIcons&&console.error("DtBadge error: decoration prop cannot be used with iconLeft or iconRight."))}}};var r=function(){var e=this,a=e._self._c;return a("span",{class:["d-badge",e.BADGE_TYPE_MODIFIERS[e.type],e.BADGE_KIND_MODIFIERS[e.kind],e.BADGE_DECORATION_MODIFIERS[e.decoration]],attrs:{"data-qa":"dt-badge"}},[e.decoration?a("span",{staticClass:"d-badge__decorative"}):e._e(),e.iconLeft||e.type==="ai"?a("span",{staticClass:"d-badge__icon-left"},[a("dt-icon",{attrs:{name:e.iconLeft||"dialpad-ai",size:"200"}})],1):e._e(),a("span",{class:["d-badge__label",e.labelClass]},[e._t("default",function(){return[e._v(" "+e._s(e.text)+" ")]})],2),e.iconRight?a("span",{staticClass:"d-badge__icon-right"},[a("dt-icon",{attrs:{name:e.iconRight,size:"200"}})],1):e._e()])},g=[];r._withStripped=!0;var n=c(s,r,g,!1,null,null,null,null);n.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/badge/badge.vue";const b=n.exports;n.exports.__docgenInfo={displayName:"DtBadge",description:`A badge is a compact UI element that provides brief, descriptive information about an element.
It is terse, ideally one word.`,tags:{see:[{description:"https://dialpad.design/components/badge.html",title:"see"}]},exportName:"default",props:[{name:"iconLeft",description:`Icon on the left side of the badge. Supports any valid icon name from the icon catalog at
https://dialpad.design/components/icon.html#icon-catalog. If type:'ai' is set, the ai icon
will automatically be shown here, but this can be overridden by setting this prop.`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"iconRight",description:`Icon on the right side of the badge. Supports any valid icon name from the icon catalog at
https://dialpad.design/components/icon.html#icon-catalog`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"text",description:"Text for the badge content",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"kind",description:"The kind of badge which determines the styling",tags:{},values:["label","count"],type:{name:"string"},defaultValue:{func:!1,value:"'label'"}},{name:"type",description:"Color for the badge background",tags:{},values:["default","info","success","warning","critical","bulletin","ai"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}},{name:"decoration",description:`Decoration for the badge. This can be only used with kind: label and type: default
with no iconLeft and iconRight`,tags:{},values:["default","black-400","black-500","black-900","red-200","red-300","red-400","purple-200","purple-300","purple-400","purple-500","blue-200","blue-300","blue-400","green-300","green-400","green-500","gold-300","gold-400","gold-500","magenta-200","magenta-300","magenta-400"],type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"labelClass",description:"Used to customize the label container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default",description:"Slot for badge content, defaults to text prop"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/badge/badge.vue"]};export{d as B,b as D,i as a,o as b};
//# sourceMappingURL=badge-bf9ef9e6.js.map
