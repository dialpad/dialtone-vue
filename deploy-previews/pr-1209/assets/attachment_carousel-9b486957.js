import{D as w}from"./icon-d93ddec9.js";import{o as i,p as u,D as k,e as f,u as c,x as d,f as n,b as g,d as x,v as B,w as _,F as D,B as I,l as q}from"./vue.esm-bundler-735640fd.js";import{D as y}from"./button-4346d584.js";import{D as S}from"./image_viewer-70f0a55e.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";const A={name:"DtProgressBar",props:{progressbarAriaLabel:{type:String,required:!0},progress:{type:Number,default:20}},data:()=>({circleCircumference:50}),computed:{cssVars(){return{"--stroke-dashoffset":this.circleCircumference-this.circleCircumference*this.progress/100,"--stroke-dasharray":this.circleCircumference}}},mounted(){this.circleCircumference=this.$refs.progressbarCircle.getTotalLength()}},M=["aria-label","aria-valuenow"],N={ref:"progressbarCircle",r:"8",cx:"12",cy:"12",class:"progress-bar__circle"},T=f("circle",{r:"8",cx:"12",cy:"12",class:"progress-bar__circle"},null,-1);function O(r,e,t,b,o,s){return i(),u("div",{role:"progressbar","aria-label":t.progressbarAriaLabel,tabindex:"-1","aria-valuenow":t.progress,"aria-valuemin":"0","aria-valuemax":"100"},[(i(),u("svg",{class:"progress-bar d-w24 d-h24",style:k(s.cssVars)},[f("circle",N,null,512),T],4))],8,M)}const R=v(A,[["render",O],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/attachment_carousel/media_components/progress_bar.vue"]]);A.__docgenInfo={displayName:"DtProgressBar",exportName:"default",description:"",tags:{},props:[{name:"progressbarAriaLabel",type:{name:"string"},required:!0},{name:"progress",type:{name:"number"},defaultValue:{func:!1,value:"20"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/attachment_carousel/media_components/progress_bar.vue"]};const C={name:"DtImageCarousel",components:{DtImageViewer:S,DtButton:y,DtIcon:w,DtProgressBar:R},props:{mediaItem:{type:Object,required:!0},index:{type:Number,required:!0},closeAriaLabel:{type:String,required:!0},clickToOpenAriaLabel:{type:String,required:!0},progressbarAriaLabel:{type:String,required:!0}},emits:["remove-media"],data(){return{showCloseButton:!1}},methods:{removeMediaItem(r){this.$emit("remove-media",r)},focusOut(r){var e;if(((e=r.relatedTarget)==null?void 0:e.id)==="closeButton-".concat(this.index)){this.showCloseButton=!0;return}this.showCloseButton=!1}}},F={class:"dt-image-carousel--top-right"};function V(r,e,t,b,o,s){const p=c("dt-image-viewer"),h=c("dt-progress-bar"),a=c("dt-icon"),m=c("dt-button");return i(),u("div",{role:"presentation",class:"dt-image-carousel",onFocusin:e[1]||(e[1]=l=>o.showCloseButton=!0),onFocusout:e[2]||(e[2]=(...l)=>s.focusOut&&s.focusOut(...l)),onMouseenter:e[3]||(e[3]=l=>o.showCloseButton=!0),onMouseleave:e[4]||(e[4]=l=>o.showCloseButton=!1)},[d(p,{"image-button-class":"dt-image-carousel--image-viewer","image-src":t.mediaItem.path,"image-alt":t.mediaItem.altText,"close-aria-label":t.closeAriaLabel,"aria-label":t.clickToOpenAriaLabel},null,8,["image-src","image-alt","close-aria-label","aria-label"]),n(" Loader / Close button "),f("div",F,[t.mediaItem.isUploading&&!o.showCloseButton?(i(),g(h,{key:0,class:"dt-image-carousel--progress-bar",progress:t.mediaItem.progress,"progressbar-aria-label":t.progressbarAriaLabel},null,8,["progress","progressbar-aria-label"])):n("v-if",!0),x(d(m,{id:`closeButton-${t.index}`,tabindex:"0",class:"dt-image-carousel--close-button",circle:"",size:"xs",importance:"clear","aria-label":t.closeAriaLabel,onClick:e[0]||(e[0]=l=>s.removeMediaItem(t.index))},{icon:_(()=>[d(a,{name:"close",size:"200"})]),_:1},8,["id","aria-label"]),[[B,o.showCloseButton]])])],32)}const z=v(C,[["render",V],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/attachment_carousel/media_components/image_carousel.vue"]]);C.__docgenInfo={displayName:"DtImageCarousel",exportName:"default",description:"",tags:{},props:[{name:"mediaItem",type:{name:"object"},required:!0},{name:"index",type:{name:"number"},required:!0},{name:"closeAriaLabel",type:{name:"string"},required:!0},{name:"clickToOpenAriaLabel",type:{name:"string"},required:!0},{name:"progressbarAriaLabel",type:{name:"string"},required:!0}],events:[{name:"remove-media",description:"Emitted when media close button is clicked to remove the image",type:{names:["Number"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/attachment_carousel/media_components/image_carousel.vue"]};const W=64,L={name:"DtRecipeAttachmentCarousel",components:{DtButton:y,DtIcon:w,DtImageCarousel:z},mixins:[],props:{mediaList:{type:Array,default:()=>[]},closeAriaLabel:{type:String,required:!0},clickToOpenAriaLabel:{type:String,required:!0},progressbarAriaLabel:{type:String,required:!0}},emits:["remove-media"],data(){return{showCloseButton:{},showCarouselArrows:!1,showRightArrow:!0,showLeftArrow:!1,isMounted:!1}},computed:{filteredMediaList(){return this.mediaList.filter(r=>r.type==="image"||r.type==="video")}},mounted:function(){this.showLeftArrow=this.$refs.carousel.scrollLeft>0,this.showRightArrow=this.$refs.carousel.scrollWidth>this.$refs.carousel.clientWidth},methods:{mediaComponent(r){switch(r){case"image":return"dt-image-carousel";default:return null}},removeMediaItem(r){this.showRightArrow=this.$refs.carousel.scrollWidth>this.$refs.carousel.clientWidth+W,this.$emit("remove-media",r)},closeButton(r,e){this.showCloseButton[e]=r},handleScroll(){const r=this.$refs.carousel;this.showLeftArrow=r.scrollLeft>0,this.showRightArrow=r.scrollLeft+r.clientWidth!==r.scrollWidth},leftScroll(){this.$refs.carousel.scrollTo({left:this.$refs.carousel.scrollLeft-100,behavior:"smooth"})},rightScroll(){this.$refs.carousel.scrollTo({left:this.$refs.carousel.scrollLeft+100,behavior:"smooth"})}}};function E(r,e,t,b,o,s){const p=c("dt-icon"),h=c("dt-button");return i(),u("div",{class:"dt-attachment-carousel",role:"presentation",onMouseenter:e[1]||(e[1]=a=>o.showCarouselArrows=!0),onMouseleave:e[2]||(e[2]=a=>o.showCarouselArrows=!1),onFocusin:e[3]||(e[3]=a=>o.showCarouselArrows=!0),onFocusout:e[4]||(e[4]=a=>o.showCarouselArrows=!1)},[t.mediaList.length>0?(i(),u("div",{key:0,ref:"carousel",class:"dt-attachment-carousel--media-list",onScroll:e[0]||(e[0]=(...a)=>s.handleScroll&&s.handleScroll(...a))},[n(" media list "),(i(!0),u(D,null,I(s.filteredMediaList,(a,m)=>(i(),g(q(s.mediaComponent(a.type)),{key:`media-${m}`,index:m,"media-item":a,"close-aria-label":t.closeAriaLabel,"click-to-open-aria-label":t.clickToOpenAriaLabel,"progressbar-aria-label":t.progressbarAriaLabel,onRemoveMedia:l=>s.removeMediaItem(m)},null,40,["index","media-item","close-aria-label","click-to-open-aria-label","progressbar-aria-label","onRemoveMedia"]))),128))],544)):n("v-if",!0),n(" Carousel Arrows "),o.showLeftArrow&&o.showCarouselArrows?(i(),g(h,{key:1,tabindex:"-1",class:"dt-attachment-carousel--left-arrow",circle:"",size:"xs",importance:"clear",onClick:s.leftScroll},{icon:_(()=>[d(p,{name:"arrow-left",size:"100"})]),_:1},8,["onClick"])):n("v-if",!0),o.showRightArrow&&o.showCarouselArrows?(i(),g(h,{key:2,tabindex:"-1",class:"dt-attachment-carousel--right-arrow",circle:"",size:"xs",importance:"clear",onClick:s.rightScroll},{icon:_(()=>[d(p,{name:"arrow-right",size:"100"})]),_:1},8,["onClick"])):n("v-if",!0)],32)}const G=v(L,[["render",E],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/attachment_carousel/attachment_carousel.vue"]]);L.__docgenInfo={displayName:"DtRecipeAttachmentCarousel",exportName:"default",description:"",tags:{},props:[{name:"mediaList",description:"media - object array of media objects",tags:{type:[{title:"type",type:{name:"Array"}}]},type:{name:"Array"},defaultValue:{func:!1,value:"[]"}},{name:"closeAriaLabel",type:{name:"string"},required:!0},{name:"clickToOpenAriaLabel",type:{name:"string"},required:!0},{name:"progressbarAriaLabel",type:{name:"string"},required:!0}],events:[{name:"remove-media",description:"Emitted when popover is shown or hidden",type:{names:["Number"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/attachment_carousel/attachment_carousel.vue"]};export{G as D};
//# sourceMappingURL=attachment_carousel-9b486957.js.map
