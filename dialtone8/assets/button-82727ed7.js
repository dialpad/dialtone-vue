import{L as l}from"./link_constants-51338c78.js";import{n as c}from"./_plugin-vue2_normalizer-2bbd088e.js";const i={xs:"d-btn--xs",sm:"d-btn--sm",md:"",lg:"d-btn--lg",xl:"d-btn--xl"},o={default:"",muted:"d-btn--muted",danger:"d-btn--danger",inverted:"d-btn--inverted"},u={clear:"",primary:"d-btn--primary",outlined:"d-btn--outlined"},f=["submit","reset","button"],r={left:"d-btn__icon--left",right:"d-btn__icon--right",top:"d-btn__icon--top",bottom:"d-btn__icon--bottom"},p=[{circle:!0,kind:"default",importance:"primary",message:s(!0,"default","primary")},{circle:!0,kind:"danger",importance:"outlined",message:s(!0,"danger","outlined")},{circle:!0,kind:"muted",importance:"primary",message:s(!0,"muted","primary")},{circle:!1,kind:"muted",importance:"primary",message:s(!1,"muted","primary")}],g={xs:"200",sm:"200",md:"300",lg:"400",xl:"500"};function s(t,e,n){return`You cannot have a ${t?"circle ":""}button with kind: ${e} and importance: ${n} as it does not exist in our design system. See https://dialpad.design/components/button.html for a list of available button styles`}const m={name:"DtButton",props:{circle:{type:Boolean,default:!1},iconPosition:{type:String,default:"left",validator:t=>Object.keys(r).includes(t)},importance:{type:String,default:"primary",validator:t=>Object.keys(u).includes(t)},link:{type:Boolean,default:!1},linkKind:{type:String,default:"default",validator:t=>Object.keys(l).includes(t)},disabled:{type:Boolean,default:!1},type:{type:String,default:"button",validator:t=>f.includes(t)},width:{type:String,default:null},size:{type:String,default:"md",validator:t=>Object.keys(i).includes(t)},labelClass:{type:[String,Array,Object],default:""},loading:{type:Boolean,default:!1},kind:{type:String,default:"default",validator:t=>Object.keys(o).includes(t)},assertiveOnFocus:{type:Boolean,default:!1},active:{type:Boolean,default:!1}},emits:["click","focusin","focusout"],data(){return{ICON_POSITION_MODIFIERS:r,isInFocus:!1}},computed:{buttonListeners(){return this.assertiveOnFocus?{...this.$listeners,focusin:t=>{this.isInFocus=!0},focusout:t=>{this.isInFocus=!1}}:this.$listeners},computedAriaLive(){return this.assertiveOnFocus&&this.isInFocus?"assertive":this.$attrs.ariaLive}},watch:{$props:{deep:!0,immediate:!0,handler(){}}},methods:{buttonClasses(){return this.link?["d-link",l[this.linkKind],i[this.size]]:["d-btn",u[this.importance],o[this.kind],i[this.size],{"d-btn--circle":this.circle,"d-btn--loading":this.loading,"d-btn--icon-only":this.isIconOnly(),"d-btn--vertical":this.isVerticalIconLayout(),"d-btn--active":this.active}]},isInvalidPropCombination(t,e,n){for(const a of p)if(t===a.circle&&e===a.kind&&n===a.importance)return console.error(a.message),!1;return!0},shouldRenderIcon(){return this.$slots.icon&&!this.link},isIconOnly(){return this.shouldRenderIcon()&&!this.$slots.default},isVerticalIconLayout(){return this.shouldRenderIcon()&&!this.isIconOnly()&&["top","bottom"].includes(this.iconPosition)}}};var b=function(){var e=this,n=e._self._c;return n("button",e._g({class:["base-button__button",e.buttonClasses()],style:{width:e.width},attrs:{"data-qa":"dt-button",type:e.type,disabled:e.disabled,"aria-live":e.computedAriaLive,"aria-label":e.loading?"loading":e.$attrs["aria-label"]}},e.buttonListeners),[e.shouldRenderIcon()?n("span",{class:["base-button__icon","d-btn__icon",e.ICON_POSITION_MODIFIERS[e.iconPosition]],attrs:{"data-qa":"dt-button-icon"}},[e._t("icon")],2):e._e(),e.$slots.default?n("span",{class:["d-btn__label","base-button__label",e.labelClass],attrs:{"data-qa":"dt-button-label"}},[e._t("default")],2):e._e()])},h=[],d=c(m,b,h,!1,null,null,null,null);const _=d.exports;d.exports.__docgenInfo={displayName:"DtButton",description:`A button is a UI element which allows users to take an action throughout the app.
It is important a button is identifiable, consistent, and communicates its actions clearly,
and is appropriately sized to its action.`,tags:{see:[{description:"https://dialpad.design/components/button.html",title:"see"}]},exportName:"default",props:[{name:"circle",description:"Whether the button is a circle or not.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"iconPosition",description:"The position of the icon slot within the button.",tags:{},values:["left","right","top","bottom"],type:{name:"string"},defaultValue:{func:!1,value:"'left'"}},{name:"importance",description:"The fill and outline of the button associated with its visual importance.",tags:{},values:["clear","outlined","primary"],type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"link",description:"Whether the button should be styled as a link or not.",tags:{see:[{description:"DtLink",title:"see"}]},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"linkKind",description:"The color of the link and button if the button is styled as a link.",tags:{see:[{description:"DtLink",title:"see"}]},values:["default","warning","danger","success","muted","inverted"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}},{name:"disabled",description:`HTML button disabled attribute
<a
  class="d-link"
  href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#disabled"
  target="_blank"
>
  (Reference)
</a>`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"type",description:`HTML button type attribute
<a
  class="d-link"
  href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type"
  target="_blank"
>
  (Reference)
</a>`,tags:{},values:["button","submit","reset"],type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"width",description:`Button width, accepts
<a class="d-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS/width" target="_blank">
  CSS width attribute
</a>
values`,type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"size",description:"The size of the button.",tags:{},values:["xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"labelClass",description:"Used to customize the label container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"loading",description:"Whether the button should display a loading animation or not.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"kind",description:"The color of the button.",tags:{},values:["default","muted","danger","inverted"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}},{name:"assertiveOnFocus",description:`Determines whether a screenreader reads live updates of
the button content to the user while the button
is in focus. default is to not.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"active",description:`Determines whether the button should have active styling
default is false.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click",description:"Native button click event",type:{names:["PointerEvent | KeyboardEvent"]}},{name:"focusin",description:"Native button focus in event",type:{names:["FocusEvent"]}},{name:"focusout",description:"Native button focus out event",type:{names:["FocusEvent"]}}],slots:[{name:"icon",description:"Button icon"},{name:"default",description:"Content within button"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/button/button.vue"]};export{g as B,_ as D,r as I,u as a,i as b,o as c,f as d};
//# sourceMappingURL=button-82727ed7.js.map
