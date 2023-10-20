import{D as I}from"./button-4525c5ab.js";import{D as A}from"./icon-0e5360a4.js";import{u as i,b as m,w as f,m as y,x as O,o as a,p as l,f as n,g as d,z as V,A as h,k as r,y as p,d as D,v as B,e as E,T}from"./vue.esm-bundler-5f4c5b12.js";import{M as x}from"./modal-f96ddab9.js";import{g as j,E as c,h as M}from"./utils-24086939.js";import{D as N}from"./lazy_show-94c78d4e.js";import{a as F,S as L}from"./sr_only_close_button-a11d39ea.js";import{N as P}from"./notice-415e175e.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";const b={default:"",danger:"d-modal--danger"},g={default:"",full:"d-modal--full"},v={error:"d-modal__banner--critical",info:"d-modal__banner--info",success:"d-modal__banner--success",warning:"d-modal__banner--warning",base:"d-modal__banner--general"},_={name:"DtModal",components:{DtLazyShow:N,DtButton:I,DtIcon:A,SrOnlyCloseButton:F},mixins:[x,L],props:{closeButtonProps:{type:Object,required:!0,validator:e=>!!e.ariaLabel},copy:{type:String,default:""},describedById:{type:String,default:""},labelledById:{type:String,default:function(){return j()}},show:{type:Boolean,default:!1},title:{type:String,default:""},bannerTitle:{type:String,default:""},kind:{type:String,default:"default",validator:e=>Object.keys(b).includes(e)},size:{type:String,default:"default",validator:e=>Object.keys(g).includes(e)},modalClass:{type:[String,Object,Array],default:""},dialogClass:{type:[String,Object,Array],default:""},contentClass:{type:[String,Object,Array],default:""},bannerKind:{type:String,default:"warning",validate(e){return P.includes(e)}},bannerClass:{type:[String,Object,Array],default:""},hideClose:{type:Boolean,default:!1},closeOnClick:{type:Boolean,default:!0},fixedHeaderFooter:{type:Boolean,default:!0}},emits:["click","keydown","update:show"],data(){return{MODAL_KIND_MODIFIERS:b,MODAL_SIZE_MODIFIERS:g,MODAL_BANNER_KINDS:v,EVENT_KEYNAMES:c,hasSlotContent:M}},computed:{modalListeners(){return{click:e=>{this.closeOnClick&&(e.target===e.currentTarget&&this.close(),this.$emit("click",e))},keydown:e=>{switch(e.code){case c.esc:case c.escape:this.close();break;case c.tab:this.trapFocus(e);break}this.$emit("keydown",e)},"after-enter":e=>{e.target===e.currentTarget&&this.setFocusAfterTransition()}}},open(){return`${!this.show}`},hasFooterSlot(){return!!this.$slots.footer},bannerKindClass(){return v[this.bannerKind]}},watch:{show:{immediate:!0,handler(e){var u;e?this.previousActiveElement=document.activeElement:((u=this.previousActiveElement)==null||u.focus(),this.previousActiveElement=null)}},$props:{immediate:!0,deep:!0,handler(){this.validateProps()}}},methods:{close(){this.$emit("update:show",!1)},setFocusAfterTransition(){this.focusFirstElement()},trapFocus(e){this.show&&this.focusTrappedTabPress(e)},validateProps(){this.hideClose&&!this.visuallyHiddenClose&&console.error(`If hideClose prop is true, visuallyHiddenClose and visuallyHiddenCloseLabel props
        need to be set so the component always includes a close button`)}}},H=["aria-describedby","aria-labelledby"],q=["id"],K=["id"],R={key:4,class:"d-modal__footer"};function U(e,u,t,W,s,o){const w=i("dt-icon"),C=i("dt-button"),S=i("sr-only-close-button"),k=i("dt-lazy-show");return a(),m(k,y({transition:"d-zoom",show:t.show,class:["d-modal",s.MODAL_KIND_MODIFIERS[t.kind],s.MODAL_SIZE_MODIFIERS[t.size],t.modalClass],"data-qa":"dt-modal","aria-hidden":o.open},O(o.modalListeners)),{default:f(()=>[t.show&&(s.hasSlotContent(e.$slots.banner)||t.bannerTitle)?(a(),l("div",{key:0,"data-qa":"dt-modal-banner",class:r(["d-modal__banner",t.bannerClass,o.bannerKindClass])},[n(" @slot Slot for the banner, defaults to bannerTitle prop "),d(e.$slots,"banner",{},()=>[V(h(t.bannerTitle),1)])],2)):n("v-if",!0),p(T,{appear:"",name:"d-modal__dialog",persisted:""},{default:f(()=>[D(E("div",{class:r(["d-modal__dialog",{"d-modal__dialog--scrollable":t.fixedHeaderFooter},t.dialogClass]),role:"dialog","aria-modal":"true","aria-describedby":t.describedById,"aria-labelledby":t.labelledById},[s.hasSlotContent(e.$slots.header)?(a(),l("div",{key:0,id:t.labelledById,class:"d-modal__header","data-qa":"dt-modal-title"},[n(' @slot Slot for dialog header section, taking the place of any "title" text prop '),d(e.$slots,"header")],8,q)):(a(),l("h2",{key:1,id:t.labelledById,class:"d-modal__header","data-qa":"dt-modal-title"},h(t.title),9,K)),s.hasSlotContent(e.$slots.default)?(a(),l("div",{key:2,class:r(["d-modal__content",t.contentClass]),"data-qa":"dt-modal-copy"},[n(' @slot Default slot for dialog body section, taking the place of any "copy" text prop '),d(e.$slots,"default")],2)):(a(),l("p",{key:3,class:r(["d-modal__content",t.contentClass]),"data-qa":"dt-modal-copy"},h(t.copy),3)),o.hasFooterSlot?(a(),l("footer",R,[n(" @slot Slot for dialog footer content, often containing cancel and confirm buttons. "),d(e.$slots,"footer")])):n("v-if",!0),t.hideClose?n("v-if",!0):(a(),m(C,y({key:5,class:"d-modal__close",circle:"",size:"lg",importance:"clear","aria-label":t.closeButtonProps.ariaLabel},t.closeButtonProps,{onClick:o.close}),{icon:f(()=>[p(w,{name:"close",size:"400"})]),_:1},16,["aria-label","onClick"])),e.showVisuallyHiddenClose?(a(),m(S,{key:6,"visually-hidden-close-label":e.visuallyHiddenCloseLabel,onClose:o.close},null,8,["visually-hidden-close-label","onClose"])):n("v-if",!0)],10,H),[[B,t.show]])]),_:3})]),_:3},16,["show","class","aria-hidden"])}const ae=z(_,[["render",U],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/modal/modal.vue"]]);_.__docgenInfo={description:`Modals focus the user’s attention exclusively on one task or piece of information
via a window that sits on top of the page content.`,displayName:"DtModal",tags:{see:[{description:"https://dialpad.design/components/modal.html",title:"see"}]},exportName:"default",props:[{name:"visuallyHiddenClose",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"If true, a hidden close button is included for screen readers",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"visuallyHiddenCloseLabel",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"Label for the visually hidden close button\nRequired if visuallyHiddenClose is set to `true`",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"closeButtonProps",description:`A set of props to be passed into the modal's close button.
Requires an 'ariaLabel' property.`,type:{name:"object"},required:!0},{name:"copy",description:"Body text to display as the modal's main content.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"describedById",description:`Id to use for the dialog's aria-describedby.
Recommended only if the dialog content itself isn't enough to give full context,
as screen readers should recite the dialog contents by default before any aria-description.`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"labelledById",description:"Id to use for the dialog's aria-labelledby.",type:{name:"string"},defaultValue:{func:!0,value:"function () { return getUniqueString(); }"}},{name:"show",description:`Whether the modal should be shown.
Parent component can sync on this value to control the modal's visibility.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",description:"Title text to display in the modal header.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"bannerTitle",description:"Title text to display in the modal banner.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"kind",description:"The theme of the modal. kind - default or danger,",tags:{},values:["default","danger"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}},{name:"size",description:"The size of the modal. size - default or full,",tags:{},values:["default","full"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}},{name:"modalClass",description:`Additional class name for the root modal element.
Can accept String, Object, and Array, i.e. has the
same API as Vue's built-in handling of the class attribute.`,type:{name:"string|object|array"},defaultValue:{func:!1,value:"''"}},{name:"dialogClass",description:`Additional class name for the dialog element within the modal.
Can accept String, Object, and Array, i.e. has the
same API as Vue's built-in handling of the class attribute.`,type:{name:"string|object|array"},defaultValue:{func:!1,value:"''"}},{name:"contentClass",description:`Additional class name for the content element within the modal.
Can accept String, Object, and Array, i.e. has the
same API as Vue's built-in handling of the class attribute.`,type:{name:"string|object|array"},defaultValue:{func:!1,value:"''"}},{name:"bannerKind",description:"Sets the color of the banner.",tags:{},values:["base","error","info","success","warning"],type:{name:"string"},defaultValue:{func:!1,value:"'warning'"}},{name:"bannerClass",description:`Additional class name for the banner element within the modal.
Can accept String, Object, and Array, i.e. has the
same API as Vue's built-in handling of the class attribute.`,type:{name:"string|object|array"},defaultValue:{func:!1,value:"''"}},{name:"hideClose",description:"Hides the close button on the modal",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"closeOnClick",description:"Whether the modal will close when you click outside of the dialog on the overlay.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"fixedHeaderFooter",description:"Scrollable modal that allows scroll the modal content keeping the header and footer fixed",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"click",description:"Native button click event",type:{names:["PointerEvent | KeyboardEvent"]}},{name:"keydown",description:"Native keydown event",type:{names:["KeyboardEvent"]}},{name:"update:show",description:`The modal will emit a "false" boolean value for this event when the user performs a modal-closing action.
Parent components can sync on this value to create a 2-way binding to control modal visibility.`,type:{names:["Boolean"]}}],slots:[{name:"banner",description:"Slot for the banner, defaults to bannerTitle prop"},{name:"header",description:'Slot for dialog header section, taking the place of any "title" text prop'},{name:"default",description:'Default slot for dialog body section, taking the place of any "copy" text prop'},{name:"footer",description:"Slot for dialog footer content, often containing cancel and confirm buttons."}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/modal.js","/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/sr_only_close_button.js","/home/runner/work/dialtone-vue/dialtone-vue/components/modal/modal.vue"]};export{ae as D,g as M,b as a};
//# sourceMappingURL=modal-13a93063.js.map
