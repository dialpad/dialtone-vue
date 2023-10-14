import{s as y,p as l,f as a,k as c,g as f,m as g,x as I,o as u}from"./vue.esm-bundler-a1916ad5.js";import{h as _}from"./utils-3a75643c.js";import{a as m}from"./link_constants-8ea95ec9.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const r={xs:"d-btn--xs",sm:"d-btn--sm",md:"",lg:"d-btn--lg",xl:"d-btn--xl"},p={default:"",muted:"d-btn--muted",danger:"d-btn--danger",inverted:"d-btn--inverted"},b={clear:"",primary:"d-btn--primary",outlined:"d-btn--outlined"},O=["submit","reset","button"],h={left:"d-btn__icon--left",right:"d-btn__icon--right",top:"d-btn__icon--top",bottom:"d-btn__icon--bottom"},S=[{circle:!0,kind:"default",importance:"primary",message:o(!0,"default","primary")},{circle:!0,kind:"danger",importance:"outlined",message:o(!0,"danger","outlined")},{circle:!0,kind:"muted",importance:"primary",message:o(!0,"muted","primary")},{circle:!1,kind:"muted",importance:"primary",message:o(!1,"muted","primary")}],D={xs:"200",sm:"200",md:"300",lg:"400",xl:"500"};function o(e,s,t){return`You cannot have a ${e?"circle ":""}button with kind: ${s} and importance: ${t} as it does not exist in our design system. See https://dialpad.design/components/button.html for a list of available button styles`}const v={name:"DtButton",inheritAttrs:!1,props:{circle:{type:Boolean,default:!1},iconPosition:{type:String,default:"left",validator:e=>Object.keys(h).includes(e)},importance:{type:String,default:"primary",validator:e=>Object.keys(b).includes(e)},link:{type:Boolean,default:!1},linkKind:{type:String,default:"default",validator:e=>Object.keys(m).includes(e)},disabled:{type:Boolean,default:!1},type:{type:String,default:"button",validator:e=>O.includes(e)},width:{type:String,default:null},size:{type:String,default:"md",validator:e=>Object.keys(r).includes(e)},labelClass:{type:[String,Array,Object],default:""},loading:{type:Boolean,default:!1},kind:{type:String,default:"default",validator:e=>Object.keys(p).includes(e)},assertiveOnFocus:{type:Boolean,default:!1},active:{type:Boolean,default:!1}},emits:["focusin","focusout"],data(){return{ICON_POSITION_MODIFIERS:h,isInFocus:!1,hasSlotContent:_}},computed:{buttonListeners(){return{focusin:e=>{this.isInFocus=this.assertiveOnFocus,this.$emit("focusin",e)},focusout:e=>{this.isInFocus=!1,this.$emit("focusout",e)}}},computedAriaLive(){return this.assertiveOnFocus&&this.isInFocus?"assertive":this.$attrs.ariaLive}},watch:{$props:{deep:!0,immediate:!0,handler(){this.circle&&this.link&&y("You cannot enable circle and link at the same time",this),this.isInvalidPropCombination(this.circle,this.kind,this.importance)}}},methods:{buttonClasses(){return this.link?["d-link",m[this.linkKind],r[this.size]]:["d-btn",b[this.importance],p[this.kind],r[this.size],{"d-btn--circle":this.circle,"d-btn--loading":this.loading,"d-btn--icon-only":this.isIconOnly(),"d-btn--vertical":this.isVerticalIconLayout(),"d-btn--active":this.active}]},isInvalidPropCombination(e,s,t){for(const n of S)if(e===n.circle&&s===n.kind&&t===n.importance)return console.warn(n.message),!1;return!0},shouldRenderIcon(){return this.$slots.icon&&!this.link},isIconOnly(){return this.shouldRenderIcon()&&!this.$slots.default},isVerticalIconLayout(){return this.shouldRenderIcon()&&!this.isIconOnly()&&["top","bottom"].includes(this.iconPosition)}}},T=["type","disabled","aria-live","aria-label"];function w(e,s,t,n,d,i){return u(),l("button",g({class:["base-button__button",i.buttonClasses()],"data-qa":"dt-button",type:t.type,disabled:t.disabled,style:{width:t.width},"aria-live":i.computedAriaLive,"aria-label":t.loading?"loading":e.$attrs["aria-label"]},e.$attrs,I(i.buttonListeners,!0)),[a(" NOTE(cormac): This span is needed since we can't apply styles to slots. "),i.shouldRenderIcon()?(u(),l("span",{key:0,"data-qa":"dt-button-icon",class:c(["base-button__icon","d-btn__icon",d.ICON_POSITION_MODIFIERS[t.iconPosition]])},[a(" @slot Button icon "),f(e.$slots,"icon")],2)):a("v-if",!0),d.hasSlotContent(e.$slots.default)?(u(),l("span",{key:1,"data-qa":"dt-button-label",class:c(["d-btn__label","base-button__label",t.labelClass])},[a(" @slot Content within button "),f(e.$slots,"default")],2)):a("v-if",!0)],16,T)}const F=k(v,[["render",w],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/button/button.vue"]]);v.__docgenInfo={displayName:"DtButton",description:`A button is a UI element which allows users to take an action throughout the app.
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
default is false.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"focusin",description:"Native button focus in event",type:{names:["FocusEvent"]}},{name:"focusout",description:"Native button focus out event",type:{names:["FocusEvent"]}}],slots:[{name:"icon",description:"Button icon"},{name:"default",description:"Content within button"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/button/button.vue"]};export{D as B,F as D,h as I,b as a,r as b,p as c,O as d};
//# sourceMappingURL=button-4eaede26.js.map