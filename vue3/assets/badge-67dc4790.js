import{D as b}from"./icon-90db3229.js";import{u as p,p as t,g as o,x as l,e as f,f as m,k as r,o as n,z as h,A as y}from"./vue.esm-bundler-24d82261.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const c={default:"",info:"d-badge--info",success:"d-badge--success",warning:"d-badge--warning",critical:"d-badge--critical",bulletin:"d-badge--bulletin",ai:"d-badge--ai"},s={label:"",count:"d-badge--count"},g={"black-400":"d-badge--decorate-black-400","black-500":"d-badge--decorate-black-500","black-900":"d-badge--decorate-black-900","red-200":"d-badge--decorate-red-200","red-300":"d-badge--decorate-red-300","red-400":"d-badge--decorate-red-400","purple-200":"d-badge--decorate-purple-200","purple-300":"d-badge--decorate-purple-300","purple-400":"d-badge--decorate-purple-400","purple-500":"d-badge--decorate-purple-500","blue-200":"d-badge--decorate-blue-200","blue-300":"d-badge--decorate-blue-300","blue-400":"d-badge--decorate-blue-400","green-300":"d-badge--decorate-green-300","green-400":"d-badge--decorate-green-400","green-500":"d-badge--decorate-green-500","gold-300":"d-badge--decorate-gold-300","gold-400":"d-badge--decorate-gold-400","gold-500":"d-badge--decorate-gold-500","magenta-200":"d-badge--decorate-magenta-200","magenta-300":"d-badge--decorate-magenta-300","magenta-400":"d-badge--decorate-magenta-400"},u={name:"DtBadge",components:{DtIcon:b},props:{iconLeft:{type:String,default:""},iconRight:{type:String,default:""},text:{type:String,default:""},kind:{type:String,default:"label",validator:a=>Object.keys(s).includes(a)},type:{type:String,default:"default",validator:a=>Object.keys(c).includes(a)},decoration:{type:String,default:void 0,validator:a=>Object.keys(g).includes(a)},labelClass:{type:[String,Array,Object],default:""}},data(){return{BADGE_TYPE_MODIFIERS:c,BADGE_KIND_MODIFIERS:s,BADGE_DECORATION_MODIFIERS:g}},computed:{hasIcons(){return this.iconLeft!==""||this.iconRight!==""}},watch:{$props:{immediate:!0,deep:!0,handler(){this.validateProps()}}},methods:{validateProps(){this.validateTypePropCombination(),this.validateDecorationPropCombination()},validateTypePropCombination(){this.type==="ai"&&this.kind==="count"&&console.error("DtBadge error: type: 'ai' with kind: 'count' is an invalid combination.")},validateDecorationPropCombination(){this.decoration&&((this.kind!=="label"||this.type!=="default")&&console.error("DtBadge error: decoration prop can only be used with kind: 'label' and type: 'default'."),this.hasIcons&&console.error("DtBadge error: decoration prop cannot be used with iconLeft or iconRight."))}}},v={key:0,class:"d-badge__decorative"},k={key:1,class:"d-badge__icon-left"},D={key:2,class:"d-badge__icon-right"};function I(a,S,e,E,d,B){const i=p("dt-icon");return n(),t("span",{class:r(["d-badge",d.BADGE_TYPE_MODIFIERS[e.type],d.BADGE_KIND_MODIFIERS[e.kind],d.BADGE_DECORATION_MODIFIERS[e.decoration]]),"data-qa":"dt-badge"},[e.decoration?(n(),t("span",v)):o("",!0),e.iconLeft||e.type==="ai"?(n(),t("span",k,[l(i,{name:e.iconLeft||"dialpad-ai",size:"200"},null,8,["name"])])):o("",!0),f("span",{class:r(["d-badge__label",e.labelClass])},[m(a.$slots,"default",{},()=>[h(y(e.text),1)])],2),e.iconRight?(n(),t("span",D,[l(i,{name:e.iconRight,size:"200"},null,8,["name"])])):o("",!0)],2)}const C=_(u,[["render",I]]);u.__docgenInfo={displayName:"DtBadge",description:`A badge is a compact UI element that provides brief, descriptive information about an element.
It is terse, ideally one word.`,tags:{see:[{description:"https://dialpad.design/components/badge.html",title:"see"}]},exportName:"default",props:[{name:"iconLeft",description:`Icon on the left side of the badge. Supports any valid icon name from the icon catalog at
https://dialpad.design/components/icon.html#icon-catalog. If type:'ai' is set, the ai icon
will automatically be shown here, but this can be overridden by setting this prop.`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"iconRight",description:`Icon on the right side of the badge. Supports any valid icon name from the icon catalog at
https://dialpad.design/components/icon.html#icon-catalog`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"text",description:"Text for the badge content",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"kind",description:"The kind of badge which determines the styling",tags:{},values:["label","count"],type:{name:"string"},defaultValue:{func:!1,value:"'label'"}},{name:"type",description:"Color for the badge background",tags:{},values:["default","info","success","warning","critical","bulletin","ai"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}},{name:"decoration",description:`Decoration for the badge. This can be only used with kind: label and type: default
with no iconLeft and iconRight`,tags:{},values:["default","black-400","black-500","black-900","red-200","red-300","red-400","purple-200","purple-300","purple-400","purple-500","blue-200","blue-300","blue-400","green-300","green-400","green-500","gold-300","gold-400","gold-500","magenta-200","magenta-300","magenta-400"],type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"labelClass",description:"Used to customize the label container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default",description:"Slot for badge content, defaults to text prop"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/badge/badge.vue"]};export{c as B,C as D,g as a,s as b};
//# sourceMappingURL=badge-67dc4790.js.map
