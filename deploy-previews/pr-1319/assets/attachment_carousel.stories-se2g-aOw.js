import{a as N}from"./chunk-AY7I2SME-4UylTnhF.js";import{c as B}from"./storybook_utils-dy5aucTw.js";import{D as x}from"./icon-34MKq-Bw.js";import{D as T}from"./button-SQvTdlhI.js";import{D as F}from"./image_viewer-xuIwMFxE.js";import{o as s,k as l,A as O,e as f,s as o,u as i,f as m,b as k,w as b,F as I,G as V,d as v,v as A,I as z}from"./vue.esm-bundler-PY0rQjII.js";import{_ as h}from"./_plugin-vue_export-helper-x3n3nnut.js";const C={name:"DtProgressBar",props:{progressbarAriaLabel:{type:String,required:!0},progress:{type:Number,default:20}},data:()=>({circleCircumference:50}),computed:{cssVars(){return{"--stroke-dashoffset":this.circleCircumference-this.circleCircumference*this.progress/100,"--stroke-dasharray":this.circleCircumference}}},mounted(){this.circleCircumference=this.$refs.progressbarCircle.getTotalLength()}},W=["aria-label","aria-valuenow"],E={ref:"progressbarCircle",r:"8",cx:"12",cy:"12",class:"progress-bar__circle"},P=f("circle",{r:"8",cx:"12",cy:"12",class:"progress-bar__circle"},null,-1);function U(e,r,t,_,d,a){return s(),l("div",{role:"progressbar","aria-label":t.progressbarAriaLabel,tabindex:"-1","aria-valuenow":t.progress,"aria-valuemin":"0","aria-valuemax":"100"},[(s(),l("svg",{class:"progress-bar d-w24 d-h24",style:O(a.cssVars)},[f("circle",E,null,512),P],4))],8,W)}const G=h(C,[["render",U],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/attachment_carousel/media_components/progress_bar.vue"]]);C.__docgenInfo={displayName:"DtProgressBar",exportName:"default",description:"",tags:{},props:[{name:"progressbarAriaLabel",type:{name:"string"},required:!0},{name:"progress",type:{name:"number"},defaultValue:{func:!1,value:"20"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/attachment_carousel/media_components/progress_bar.vue"]};const D={name:"DtImageCarousel",components:{DtImageViewer:F,DtButton:T,DtIcon:x,DtProgressBar:G},props:{mediaItem:{type:Object,required:!0},index:{type:Number,required:!0},closeAriaLabel:{type:String,required:!0},clickToOpenAriaLabel:{type:String,required:!0},progressbarAriaLabel:{type:String,required:!0}},emits:["remove-media"],methods:{removeMediaItem(e){this.$emit("remove-media",e)}}},H={class:"dt-attachment-image"},J={class:"dt-attachment-image__top-right"};function K(e,r,t,_,d,a){const n=o("dt-image-viewer"),g=o("dt-progress-bar"),c=o("dt-icon"),u=o("dt-button");return s(),l("li",H,[i(n,{"image-button-class":"dt-attachment-image__image-viewer","image-src":t.mediaItem.path,"image-alt":t.mediaItem.altText,"close-aria-label":t.closeAriaLabel,"aria-label":t.clickToOpenAriaLabel},null,8,["image-src","image-alt","close-aria-label","aria-label"]),m(" Loader / Close button "),f("div",J,[t.mediaItem.isUploading?(s(),k(g,{key:0,class:"dt-attachment-image__progress-bar",progress:t.mediaItem.progress,"progressbar-aria-label":t.progressbarAriaLabel},null,8,["progress","progressbar-aria-label"])):m("v-if",!0),i(u,{id:`closeButton-${t.index}`,tabindex:"0",class:"dt-attachment-image__close-button",circle:"",size:"xs",importance:"clear","aria-label":t.closeAriaLabel,onClick:r[0]||(r[0]=M=>a.removeMediaItem(t.index))},{icon:b(()=>[i(c,{name:"close",size:"200"})]),_:1},8,["id","aria-label"])])])}const Q=h(D,[["render",K],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/attachment_carousel/media_components/image_carousel.vue"]]);D.__docgenInfo={displayName:"DtImageCarousel",exportName:"default",description:"",tags:{},props:[{name:"mediaItem",type:{name:"object"},required:!0},{name:"index",type:{name:"number"},required:!0},{name:"closeAriaLabel",type:{name:"string"},required:!0},{name:"clickToOpenAriaLabel",type:{name:"string"},required:!0},{name:"progressbarAriaLabel",type:{name:"string"},required:!0}],events:[{name:"remove-media",description:"Emitted when media close button is clicked to remove the image",type:{names:["Number"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/attachment_carousel/media_components/image_carousel.vue"]};const X=64,S={name:"DtRecipeAttachmentCarousel",components:{DtButton:T,DtIcon:x,DtImageCarousel:Q},mixins:[],props:{mediaList:{type:Array,default:()=>[]},closeAriaLabel:{type:String,required:!0},clickToOpenAriaLabel:{type:String,required:!0},progressbarAriaLabel:{type:String,required:!0},leftArrowAriaLabel:{type:String,required:!0},rightArrowAriaLabel:{type:String,required:!0}},emits:["remove-media"],data(){return{showCloseButton:{},showRightArrow:!0,showLeftArrow:!1,isMounted:!1}},computed:{filteredMediaList(){return this.mediaList.filter(e=>e.type==="image"||e.type==="video")}},mounted:function(){this.showLeftArrow=this.$refs.carousel.scrollLeft>0,this.showRightArrow=this.$refs.carousel.scrollWidth>this.$refs.carousel.clientWidth},methods:{onItemFocus(e){e.currentTarget.scrollIntoView({behavior:"smooth"})},mediaComponent(e){switch(e){case"image":return"dt-image-carousel";default:return null}},removeMediaItem(e){this.showRightArrow=this.$refs.carousel.scrollWidth>this.$refs.carousel.clientWidth+X,this.$emit("remove-media",e)},closeButton(e,r){this.showCloseButton[r]=e},handleScroll(){const e=this.$refs.carousel;this.showLeftArrow=e.scrollLeft>0,this.showRightArrow=e.scrollLeft+e.clientWidth!==e.scrollWidth},leftScroll(){this.$refs.carousel.scrollTo({left:this.$refs.carousel.scrollLeft-100,behavior:"smooth"})},rightScroll(){this.$refs.carousel.scrollTo({left:this.$refs.carousel.scrollLeft+100,behavior:"smooth"})}}},Y={class:"dt-attachment-carousel",role:"presentation"};function Z(e,r,t,_,d,a){const n=o("dt-icon"),g=o("dt-button");return s(),l("div",Y,[t.mediaList.length>0?(s(),l("ul",{key:0,ref:"carousel",class:"dt-attachment-carousel__media-list",onScroll:r[0]||(r[0]=(...c)=>a.handleScroll&&a.handleScroll(...c))},[m(" media list "),(s(!0),l(I,null,V(a.filteredMediaList,(c,u)=>(s(),k(z(a.mediaComponent(c.type)),{key:`media-${u}`,index:u,"media-item":c,"close-aria-label":t.closeAriaLabel,"click-to-open-aria-label":t.clickToOpenAriaLabel,"progressbar-aria-label":t.progressbarAriaLabel,onRemoveMedia:M=>a.removeMediaItem(u),onFocusin:a.onItemFocus},null,40,["index","media-item","close-aria-label","click-to-open-aria-label","progressbar-aria-label","onRemoveMedia","onFocusin"]))),128))],544)):m("v-if",!0),m(" Carousel Arrows "),v(i(g,{tabindex:"-1","aria-label":t.leftArrowAriaLabel,class:"dt-attachment-carousel__arrow dt-attachment-carousel__arrow--left",circle:"",size:"xs",importance:"clear",onClick:a.leftScroll},{icon:b(()=>[i(n,{name:"arrow-left",size:"100"})]),_:1},8,["aria-label","onClick"]),[[A,d.showLeftArrow]]),v(i(g,{tabindex:"-1","aria-label":t.rightArrowAriaLabel,class:"dt-attachment-carousel__arrow dt-attachment-carousel__arrow--right",circle:"",size:"xs",importance:"clear",onClick:a.rightScroll},{icon:b(()=>[i(n,{name:"arrow-right",size:"100"})]),_:1},8,["aria-label","onClick"]),[[A,d.showRightArrow]])])}const q=h(S,[["render",Z],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/attachment_carousel/attachment_carousel.vue"]]);S.__docgenInfo={displayName:"DtRecipeAttachmentCarousel",exportName:"default",description:"",tags:{},props:[{name:"mediaList",description:"media - object array of media objects",tags:{type:[{title:"type",type:{name:"Array"}}]},type:{name:"Array"},defaultValue:{func:!1,value:"[]"}},{name:"closeAriaLabel",type:{name:"string"},required:!0},{name:"clickToOpenAriaLabel",type:{name:"string"},required:!0},{name:"progressbarAriaLabel",type:{name:"string"},required:!0},{name:"leftArrowAriaLabel",type:{name:"string"},required:!0},{name:"rightArrowAriaLabel",type:{name:"string"},required:!0}],events:[{name:"remove-media",description:"Emitted when popover is shown or hidden",type:{names:["Number"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/attachment_carousel/attachment_carousel.vue"]};const R={name:"DtRecipeAttachmentCarouselDefault",components:{DtRecipeAttachmentCarousel:q},methods:{removeMedia(e){this.$attrs.mediaList.splice(e,1),this.$attrs.onRemoveMedia(e)}}};function ee(e,r,t,_,d,a){const n=o("dt-recipe-attachment-carousel");return s(),l(I,null,[m(`
    We can bind the data that the user entered into the storybook controls to props by using a property of the same name
    as the storybook control defined in the corresponding \`.story.js\` file.
  `),i(n,{"media-list":e.$attrs.mediaList,"close-aria-label":e.$attrs.closeAriaLabel,"click-to-open-aria-label":e.$attrs.clickToOpenAriaLabel,"progressbar-aria-label":e.$attrs.progressbarAriaLabel,"left-arrow-aria-label":e.$attrs.leftArrowAriaLabel,"right-arrow-aria-label":e.$attrs.rightArrowAriaLabel,onRemoveMedia:a.removeMedia},null,8,["media-list","close-aria-label","click-to-open-aria-label","progressbar-aria-label","left-arrow-aria-label","right-arrow-aria-label","onRemoveMedia"])],2112)}const te=h(R,[["render",ee],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/attachment_carousel/attachment_carousel_default.story.vue"]]);R.__docgenInfo={displayName:"DtRecipeAttachmentCarouselDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/attachment_carousel/attachment_carousel_default.story.vue"]};const ae=[{type:"image",path:"https://vue.dialpad.design/assets/test-078acfea.jpg",altText:"Image Alt Text"},{type:"image",isUploading:!0,progress:97,path:"https://vue.dialpad.design/assets/test-078acfea.jpg",altText:"Image Alt Text"},{type:"image",path:"https://vue.dialpad.design/assets/fry-21e0f1a9.gif",altText:"Image Alt Text"},{type:"image",path:"https://vue.dialpad.design/assets/test-078acfea.jpg",altText:"Image Alt Text"},{type:"image",path:"https://vue.dialpad.design/assets/test-078acfea.jpg",altText:"Image Alt Text"},{type:"image",path:"https://vue.dialpad.design/assets/test-078acfea.jpg",altText:"Image Alt Text"},{type:"image",path:"https://vue.dialpad.design/assets/test-078acfea.jpg",altText:"Image Alt Text"},{type:"image",path:"https://vue.dialpad.design/assets/test-078acfea.jpg",altText:"Image Alt Text"},{type:"image",path:"https://vue.dialpad.design/assets/test-078acfea.jpg",altText:"Image Alt Text"},{type:"image",path:"https://vue.dialpad.design/assets/test-078acfea.jpg",altText:"Image Alt Text"},{type:"image",path:"https://vue.dialpad.design/assets/test-078acfea.jpg",altText:"Image Alt Text"},{type:"image",path:"https://vue.dialpad.design/assets/test-078acfea.jpg",altText:"Image Alt Text"},{type:"image",path:"https://vue.dialpad.design/assets/test-078acfea.jpg",altText:"Image Alt Text"}],$={onRemoveMedia:{table:{disable:!0}}},j={mediaList:ae,closeAriaLabel:"Close",clickToOpenAriaLabel:"Click to open",progressbarAriaLabel:"Uploading",rightArrowAriaLabel:"Next",leftArrowAriaLabel:"Previous",onRemoveMedia:N("remove-media")},re={title:"Recipes/Conversation View/Attachment Carousel",component:q,args:j,argTypes:$,excludeStories:/.*Data$/},se=(e,{argTypes:r})=>B(e,r,te),p={render:se,args:{}};var y,w,L;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(L=(w=p.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};const ie=["argTypesData","argsData","Default"],pe=Object.freeze(Object.defineProperty({__proto__:null,Default:p,__namedExportsOrder:ie,argTypesData:$,argsData:j,default:re},Symbol.toStringTag,{value:"Module"}));export{pe as D,p as a};
//# sourceMappingURL=attachment_carousel.stories-se2g-aOw.js.map
