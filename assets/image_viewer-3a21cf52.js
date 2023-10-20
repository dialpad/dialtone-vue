import{M as o}from"./modal-600bd46a.js";import{E as s}from"./utils-5c9c602d.js";import{D as r}from"./icon-9c3e9b89.js";import{D as l}from"./button-4cf26c8f.js";import{P as u}from"./index.esm-8e1c03ab.js";import{n as m}from"./_plugin-vue2_normalizer-2bbd088e.js";const c={name:"DtImageViewer",components:{Portal:u,DtButton:l,DtIcon:r},mixins:[o],props:{open:{type:Boolean,default:null},imageSrc:{type:String,required:!0},imageAlt:{type:String,required:!0},imageButtonClass:{type:String,required:!1,default:""},ariaLabel:{type:String,required:!0},closeAriaLabel:{type:String,required:!0}},emits:["opened","update:open"],data(){return{showCloseButton:!0,isOpen:!1}},computed:{modalListeners(){return{...this.$listeners,click:t=>{t.target===t.currentTarget&&this.close()},keydown:t=>{switch(t.code){case s.esc:case s.escape:this.close();break;case s.tab:this.trapFocus(t);break}}}}},watch:{isOpen:{immediate:!0,handler(t){var e;t?this.previousActiveElement=document.activeElement:((e=this.previousActiveElement)==null||e.focus(),this.previousActiveElement=null)}},open:{handler:function(t){t!==null&&(this.isOpen=t)},immediate:!0}},methods:{openModal(){this.open===null&&(this.isOpen=!0,this.showCloseButton=!0,this.$emit("opened",!0),setTimeout(()=>{this.focusAfterOpen()}))},close(){this.isOpen=!1,this.$emit("opened",!1),this.open!==null&&this.$emit("update:open",!1)},focusAfterOpen(){var t;(t=this.$refs.closeImage)==null||t.$el.focus()},trapFocus(t){this.isOpen&&this.focusTrappedTabPress(t)}}};var d=function(){var e=this,i=e._self._c;return i("div",[i("dt-button",{staticClass:"d-p0 d-c-zoom-in",attrs:{"data-qa":"dt-image-viewer-preview","aria-label":e.ariaLabel,importance:"clear"},on:{click:e.openModal}},[i("img",{class:e.imageButtonClass,attrs:{src:e.imageSrc,alt:e.imageAlt}})]),e.isOpen?i("portal",[i("div",e._g({staticClass:"d-modal",attrs:{"aria-hidden":e.isOpen?"false":"true","data-qa":"dt-modal"},on:{mouseover:function(a){e.showCloseButton=!0},mouseleave:function(a){e.showCloseButton=!1},focusin:function(a){e.showCloseButton=!0},focusout:function(a){e.showCloseButton=!1}}},e.modalListeners),[i("div",{staticClass:"d-p0 d-bar0 d-wmx80p d-hmx80p",attrs:{"data-qa":"dt-image-viewer-full",role:"dialog","aria-modal":"true"}},[i("img",{staticClass:"d-wmx100p d-hmx100p",attrs:{src:e.imageSrc,alt:e.imageAlt}})]),i("transition",{attrs:{name:"fade"}},[e.showCloseButton?i("dt-button",{ref:"closeImage",staticClass:"d-modal__close",attrs:{"data-qa":"dt-image-viewer-close-btn",circle:"",size:"lg",importance:"clear",kind:"inverted","aria-label":e.closeAriaLabel},on:{click:e.close},scopedSlots:e._u([{key:"icon",fn:function(){return[i("dt-icon",{staticClass:"d-fc-neutral-white",attrs:{name:"close",size:"400"}})]},proxy:!0}],null,!1,2813460049)}):e._e()],1)],1)]):e._e()],1)},p=[],n=m(c,d,p,!1,null,null,null,null);const y=n.exports;n.exports.__docgenInfo={description:`This mixin provides the methods to automatically trap tab focus within
the component this mixin is on, meaning it is not possible to tab out
of the component without dismissing it.

Useful for accessibility reasons on things like important actionable alerts.

Use focusFirstElement to focus on the first tabbable element within your component, and call
focusTrappedTabPress every time tab is pressed to trap tab within this
component.

Note that focusFirstElement WILL focus elements with tabindex="-1",
however focusTrappedTabPress will not.`,displayName:"DtImageViewer",tags:{},exportName:"default",props:[{name:"open",description:`Controls whether the image modal is shown. Leaving this null will have the image modal
trigger on click by default.
If you set this value, the default trigger behavior will be disabled and you can control it as you need.
Supports .sync modifier`,tags:{},values:["null","true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"null"}},{name:"imageSrc",description:"URL of the image to be shown",type:{name:"string"},required:!0},{name:"imageAlt",description:"Alt text of image",type:{name:"string"},required:!0},{name:"imageButtonClass",description:"Image Class",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"ariaLabel",description:"Aria label",type:{name:"string"},required:!0},{name:"closeAriaLabel",description:"Aria label for close button",type:{name:"string"},required:!0}],events:[{name:"opened",description:"Emitted when popover is shown or hidden",type:{names:["Boolean"]}},{name:"update:open",description:"Event fired to sync the open prop with the parent component",type:{names:["undefined"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/modal.js","/home/runner/work/dialtone-vue/dialtone-vue/components/image_viewer/image_viewer.vue"]};export{y as D};
//# sourceMappingURL=image_viewer-3a21cf52.js.map
