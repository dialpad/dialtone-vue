import{M as v}from"./modal-f96ddab9.js";import{E as r}from"./utils-4a13a80a.js";import{D as w}from"./icon-1cfe388c.js";import{u as c,p as b,x as l,w as u,b as p,e as n,T as y,m as _,y as C,C as k,f,o as m,k as B}from"./vue.esm-bundler-735640fd.js";import{D as x}from"./button-4346d584.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";const h={name:"DtImageViewer",components:{DtButton:x,DtIcon:w},mixins:[v],props:{open:{type:Boolean,default:null},imageSrc:{type:String,required:!0},imageAlt:{type:String,required:!0},imageButtonClass:{type:String,required:!1,default:""},ariaLabel:{type:String,required:!0},closeAriaLabel:{type:String,required:!0}},emits:["opened","update:open"],data(){return{showCloseButton:!0,isOpen:!1}},computed:{modalListeners(){return{click:e=>{e.target===e.currentTarget&&this.close()},keydown:e=>{switch(e.code){case r.esc:case r.escape:this.close();break;case r.tab:this.trapFocus(e);break}}}}},watch:{isOpen:{immediate:!0,handler(e){var t;e?this.previousActiveElement=document.activeElement:((t=this.previousActiveElement)==null||t.focus(),this.previousActiveElement=null)}},open:{handler:function(e){e!==null&&(this.isOpen=e)},immediate:!0}},methods:{openModal(){this.open===null&&(this.isOpen=!0,this.showCloseButton=!0,this.$emit("opened",!0),setTimeout(()=>{this.focusAfterOpen()}))},close(){this.isOpen=!1,this.$emit("opened",!1),this.open!==null&&this.$emit("update:open",!1)},focusAfterOpen(){var e;(e=this.$refs.closeImage)==null||e.$el.focus()},trapFocus(e){this.isOpen&&this.focusTrappedTabPress(e)}}},q=["src","alt"],E=["aria-hidden"],T={"data-qa":"dt-image-viewer-full",class:"d-p0 d-bar0 d-wmx80p d-hmx80p",role:"dialog","aria-modal":"true"},L=["src","alt"];function S(e,t,i,I,o,a){const d=c("dt-button"),g=c("dt-icon");return m(),b("div",null,[l(d,{"data-qa":"dt-image-viewer-preview",class:"d-p0 d-c-zoom-in","aria-label":i.ariaLabel,importance:"clear",onClick:a.openModal},{default:u(()=>[n("img",{class:B(i.imageButtonClass),src:i.imageSrc,alt:i.imageAlt},null,10,q)]),_:1},8,["aria-label","onClick"]),o.isOpen?(m(),p(k,{key:0,to:"body"},[n("div",_({"aria-hidden":o.isOpen?"false":"true",class:"d-modal","data-qa":"dt-modal"},C(a.modalListeners,!0),{onMouseover:t[0]||(t[0]=s=>o.showCloseButton=!0),onMouseleave:t[1]||(t[1]=s=>o.showCloseButton=!1),onFocusin:t[2]||(t[2]=s=>o.showCloseButton=!0),onFocusout:t[3]||(t[3]=s=>o.showCloseButton=!1)}),[n("div",T,[n("img",{class:"d-wmx100p d-hmx100p",src:i.imageSrc,alt:i.imageAlt},null,8,L)]),l(y,{name:"fade"},{default:u(()=>[o.showCloseButton?(m(),p(d,{key:0,ref:"closeImage","data-qa":"dt-image-viewer-close-btn",class:"d-modal__close",circle:"",size:"lg",importance:"clear",kind:"inverted","aria-label":i.closeAriaLabel,onClick:a.close},{icon:u(()=>[l(g,{class:"d-fc-neutral-white",name:"close",size:"400"})]),_:1},8,["aria-label","onClick"])):f("v-if",!0)]),_:1})],16,E)])):f("v-if",!0)])}const z=A(h,[["render",S],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/image_viewer/image_viewer.vue"]]);h.__docgenInfo={description:`This mixin provides the methods to automatically trap tab focus within
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
Supports .sync modifier`,tags:{},values:["null","true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"null"}},{name:"imageSrc",description:"URL of the image to be shown",type:{name:"string"},required:!0},{name:"imageAlt",description:"Alt text of image",type:{name:"string"},required:!0},{name:"imageButtonClass",description:"Image Class",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"ariaLabel",description:"Aria label",type:{name:"string"},required:!0},{name:"closeAriaLabel",description:"Aria label for close button",type:{name:"string"},required:!0}],events:[{name:"opened",description:"Emitted when popover is shown or hidden",type:{names:["Boolean"]}},{name:"update:open",description:"Event fired to sync the open prop with the parent component",type:{names:["undefined"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/modal.js","/home/runner/work/dialtone-vue/dialtone-vue/components/image_viewer/image_viewer.vue"]};export{z as D};
//# sourceMappingURL=image_viewer-877cfd5a.js.map
