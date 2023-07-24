import{M as b}from"./modal-f96ddab9.js";import{E as r}from"./utils-bfbb1d3e.js";import{D as v}from"./icon-252a6ded.js";import{k as c,d as w,l,m,v as p,e as n,A as y,p as _,z as C,Z as k,j as f,o as u,n as A}from"./vue.esm-bundler-2337cf2c.js";import{D as B}from"./button-352f7b66.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";const h={name:"DtImageViewer",components:{DtButton:B,DtIcon:v},mixins:[b],props:{open:{type:Boolean,default:null},imageSrc:{type:String,required:!0},imageAlt:{type:String,required:!0},imageButtonClass:{type:String,required:!1,default:""},ariaLabel:{type:String,required:!0},closeAriaLabel:{type:String,required:!0}},emits:["opened","update:open"],data(){return{showCloseButton:!0,isOpen:!1}},computed:{modalListeners(){return{click:e=>{e.target===e.currentTarget&&this.close()},keydown:e=>{switch(e.code){case r.esc:case r.escape:this.close();break;case r.tab:this.trapFocus(e);break}}}}},watch:{isOpen:{immediate:!0,handler(e){var t;e?this.previousActiveElement=document.activeElement:((t=this.previousActiveElement)==null||t.focus(),this.previousActiveElement=null)}},open:{handler:function(e){e!==null&&(this.isOpen=e)},immediate:!0}},methods:{openModal(){this.open===null&&(this.isOpen=!0,this.showCloseButton=!0,this.$emit("opened",!0),setTimeout(()=>{this.focusAfterOpen()}))},close(){this.isOpen=!1,this.$emit("opened",!1),this.open!==null&&this.$emit("update:open",!1)},focusAfterOpen(){var e;(e=this.$refs.closeImage)==null||e.$el.focus()},trapFocus(e){this.isOpen&&this.focusTrappedTabPress(e)}}},q=["src","alt"],E=["aria-hidden"],L={"data-qa":"dt-image-viewer-full",class:"d-p0 d-bar0 d-wmx80p d-hmx80p",role:"dialog","aria-modal":"true"},T=["src","alt"];function S(e,t,o,I,i,s){const d=c("dt-button"),g=c("dt-icon");return u(),w("div",null,[l(d,{"data-qa":"dt-image-viewer-preview",class:"d-p0 d-c-zoom-in","aria-label":o.ariaLabel,importance:"clear",onClick:s.openModal},{default:m(()=>[n("img",{class:A(o.imageButtonClass),src:o.imageSrc,alt:o.imageAlt},null,10,q)]),_:1},8,["aria-label","onClick"]),i.isOpen?(u(),p(k,{key:0,to:"body"},[n("div",_({"aria-hidden":i.isOpen?"false":"true",class:"d-modal","data-qa":"dt-modal"},C(s.modalListeners,!0),{onMouseover:t[0]||(t[0]=a=>i.showCloseButton=!0),onMouseleave:t[1]||(t[1]=a=>i.showCloseButton=!1),onFocusin:t[2]||(t[2]=a=>i.showCloseButton=!0),onFocusout:t[3]||(t[3]=a=>i.showCloseButton=!1)}),[n("div",L,[n("img",{class:"d-wmx100p d-hmx100p",src:o.imageSrc,alt:o.imageAlt},null,8,T)]),l(y,{name:"fade"},{default:m(()=>[i.showCloseButton?(u(),p(d,{key:0,ref:"closeImage","data-qa":"dt-image-viewer-close-btn",class:"d-modal__close",circle:"",size:"lg",importance:"clear",kind:"inverted","aria-label":o.closeAriaLabel,onClick:s.close},{icon:m(()=>[l(g,{name:"close",size:"400"})]),_:1},8,["aria-label","onClick"])):f("",!0)]),_:1})],16,E)])):f("",!0)])}const z=x(h,[["render",S]]);h.__docgenInfo={description:`This mixin provides the methods to automatically trap tab focus within
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
Supports .sync modifier`,tags:{},values:["null","true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"null"}},{name:"imageSrc",description:"URL of the image to be shown",type:{name:"string"},required:!0},{name:"imageAlt",description:"Alt text of image",type:{name:"string"},required:!0},{name:"imageButtonClass",description:"Image Class",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"ariaLabel",description:"Aria label",type:{name:"string"},required:!0},{name:"closeAriaLabel",description:"Aria label for close button",type:{name:"string"},required:!0}],events:[{name:"opened",description:"Emitted when popover is shown or hidden",type:{names:["Boolean"]}},{name:"update:open",description:"Event fired to sync the open prop with the parent component",type:{names:["undefined"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/modal.js","/home/runner/work/dialtone-vue/dialtone-vue/components/image_viewer/image_viewer.vue"]};const P=""+new URL("fry-21e0f1a9.gif",import.meta.url).href;export{z as D,P as i};
//# sourceMappingURL=fry-c0927502.js.map
