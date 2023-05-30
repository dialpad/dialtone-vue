import{n as o}from"./_plugin-vue2_normalizer-2bbd088e.js";const w=3e6,s={circle:"d-bar-circle",square:"d-bar2"},x=["body","heading"],D={sm:"24px",md:"32px",lg:"48px"},f={sm:"d-h16",md:"d-h24",lg:"d-h32"},m={computed:{skeletonOffset(){const t=this.$refs.skeleton;if(!t)return this.offset;const{top:e,height:a}=t.getBoundingClientRect();return e+a/2},skeletonStyle(){const t={};if(this.skeletonOffset===-1||!this.animate&&this.animationDuration===-1)return t;const e=this.skeletonOffset*w/1e3,a=this.animationDuration===-1?1e3:this.animationDuration;return t.animationDelay=`${e}ms`,t.animationDuration=`${a}ms`,t}}},O={name:"DtSkeletonShape",mixins:[m],props:{shape:{type:String,default:"circle",validator:t=>Object.keys(s).includes(t)},size:{type:String,default:"md"},animationDuration:{type:Number,default:-1},animate:{type:Boolean,default:!0},offset:{type:Number,default:1},contentClass:{type:[String,Object,Array],default:""}},data(){return{SKELETON_SHAPES:s}},computed:{shapeStyles(){const t=D[this.size]||this.size;return{...this.skeletonStyle,"min-width":t,"max-width":t,"min-height":t,"max-height":t}}}};var h=function(){var e=this,a=e._self._c;return a("div",{ref:"skeleton",class:["skeleton-placeholder",e.SKELETON_SHAPES[e.shape],{"skeleton-placeholder--animate":e.animate},e.contentClass],style:e.shapeStyles,attrs:{"data-qa":"skeleton-shape"}})},V=[];h._withStripped=!0;var l=o(O,h,V,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton-shape.vue";const c=l.exports;l.exports.__docgenInfo={description:"",displayName:"DtSkeletonShape",tags:{},exportName:"default",props:[{name:"shape",description:"Defines the shape of the skeleton, accepts circle or square.",tags:{},values:["circle","square"],type:{name:"string"},defaultValue:{func:!1,value:"'circle'"}},{name:"size",description:"Size of the shape",tags:{},values:["xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"animationDuration",description:"Duration time of the animation (ms), set -1 for an infinite animation.",type:{name:"number"},defaultValue:{func:!1,value:"-1"}},{name:"animate",description:'This property has higher priority than "option.animate"',tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"offset",description:`RippleDuration controls how long the delay is for the animation of a
placeholder 1000 pixels from the top of the page. Each placeholder
from the top down will have a delay duration from 0 to this offset.
The delay of each placeholder animation is based on how far down the page
the placeholder is rendered. This is a linear relationship. The unit
is milliseconds.`,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"contentClass",description:"Additional class name for the content.",type:{name:"string|object|array"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/skeleton.js","/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton-shape.vue"]};const N={name:"DtSkeletonText",mixins:[m],props:{type:{type:String,default:"body",validator:t=>x.includes(t)},headingHeight:{type:String,default:"md",validator:t=>Object.keys(f).includes(t)},width:{type:String,default:"100%"},animationDuration:{type:Number,default:-1},animate:{type:Boolean,default:!1},offset:{type:Number,default:1},contentClass:{type:String,default:""}},data(){return{SKELETON_HEADING_HEIGHTS:f}}};var y=function(){var e=this,a=e._self._c;return e.type==="body"?a("div",{ref:"skeleton",class:["d-h8","d-bar2","skeleton-placeholder",{"skeleton-placeholder--animate":e.animate},e.contentClass],style:{width:e.width,...e.skeletonStyle},attrs:{"data-qa":"skeleton-text-body"}}):e.type==="heading"?a("div",{ref:"skeleton",class:[e.SKELETON_HEADING_HEIGHTS[e.headingHeight],"d-bar2","skeleton-placeholder",{"skeleton-placeholder--animate":e.animate},e.contentClass],style:{width:e.width,...e.skeletonStyle},attrs:{"data-qa":"skeleton-text-heading"}}):e._e()},T=[];y._withStripped=!0;var r=o(N,y,T,!1,null,null,null,null);r.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton-text.vue";const g=r.exports;r.exports.__docgenInfo={description:"",displayName:"DtSkeletonText",tags:{},exportName:"default",props:[{name:"type",description:"Skeleton type",tags:{},values:["body","heading"],type:{name:"string"},defaultValue:{func:!1,value:"'body'"}},{name:"headingHeight",description:"Heading height",tags:{},values:["sm","md","lg"],type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"width",description:"Width of the skeleton",type:{name:"string"},defaultValue:{func:!1,value:"'100%'"}},{name:"animationDuration",description:"Duration time of the animation (ms), set -1 for an infinite animation.",type:{name:"number"},defaultValue:{func:!1,value:"-1"}},{name:"animate",description:'This property has higher priority than "option.animate"',tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"offset",description:`RippleDuration controls how long the delay is for the animation of a
placeholder 1000 pixels from the top of the page. Each placeholder
from the top down will have a delay duration from 0 to this offset.
The delay of each placeholder animation is based on how far down the page
the placeholder is rendered. This is a linear relationship. The unit
is milliseconds.`,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"contentClass",description:"Additional class name for the content.",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/skeleton.js","/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton-text.vue"]};const i=t=>t!==""&&!Number.isNaN(Number(t)),E={name:"DtSkeletonParagraph",components:{DtSkeletonText:g},props:{rows:{type:[Number,String],default:3,validator:i},animate:{type:Boolean,default:!0},minWidth:{type:[Number,String],default:30,validator:i},maxWidth:{type:[Number,String],default:100,validator:i},width:{type:[String,Array],default:null},randomWidth:{type:Boolean,default:!1},offset:{type:Number,default:1},animationDuration:{type:Number,default:-1},contentClass:{type:String,default:""},rowClass:{type:String,default:""}},computed:{integerRows(){return Number(this.rows)}},methods:{randomWidthPercentage(){const t=Math.min(this.minWidth,this.maxWidth),e=Math.max(this.minWidth,this.maxWidth);return`${Math.round(Math.random()*(e-t))+t}%`},getSizeParagraphRow(t){const e=this.width,a=Array.isArray(e),n=e==null?void 0:e[t-1],S=t===this.rows;return this.randomWidth?this.randomWidthPercentage():e&&!a?e:e&&a&&n?n:S?"38%":"100%"}}};var v=function(){var e=this,a=e._self._c;return a("div",{class:["d-w100p",e.contentClass],attrs:{contentClass:"","data-qa":"skeleton-paragraph"}},e._l(e.integerRows,function(n){return a("dt-skeleton-text",{key:n,class:[{"d-mb12":n!==e.integerRows}],attrs:{"data-qa":"skeleton-paragraph-row","content-class":e.rowClass,animate:e.animate,offset:e.offset,"animation-duration":e.animationDuration,width:e.getSizeParagraphRow(n)}})}),1)},C=[];v._withStripped=!0;var p=o(E,v,C,!1,null,null,null,null);p.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton-paragraph.vue";const _=p.exports;p.exports.__docgenInfo={displayName:"DtSkeletonParagraph",exportName:"default",description:"",tags:{},props:[{name:"rows",description:"Quantity of rows to display",type:{name:"number|string"},defaultValue:{func:!1,value:"3"}},{name:"animate",description:'This property has higher priority than "option.animate"',tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"minWidth",description:"Controls the min width of paragraphs",type:{name:"number|string"},defaultValue:{func:!1,value:"30"}},{name:"maxWidth",description:"Controls the max width of paragraphs",type:{name:"number|string"},defaultValue:{func:!1,value:"100"}},{name:"width",description:"Controls the width of paragraphs",type:{name:"string|array"},defaultValue:{func:!1,value:"null"}},{name:"randomWidth",description:"If true, row widths will be random",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"offset",description:`RippleDuration controls how long the delay is for the animation of a
placeholder 1000 pixels from the top of the page. Each placeholder
from the top down will have a delay duration from 0 to this offset.
The delay of each placeholder animation is based on how far down the page
the placeholder is rendered. This is a linear relationship. The unit
is milliseconds.`,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"animationDuration",description:"Duration time of the animation (ms), set -1 for an infinite animation.",type:{name:"number"},defaultValue:{func:!1,value:"-1"}},{name:"contentClass",description:"Additional class name for the content.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"rowClass",description:"Additional class name for the row.",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton-paragraph.vue"]};const I={name:"DtSkeletonListItem",components:{DtSkeletonShape:c,DtSkeletonParagraph:_},props:{shape:{type:String,default:"circle",validator:t=>Object.keys(s).includes(t)},shapeSize:{type:String,default:"md"},paragraphs:{type:Object,default:()=>({rows:3,randomWidth:!0})},animationDuration:{type:Number,default:-1},animate:{type:Boolean,default:!0},offset:{type:Number,default:1},shapeClass:{type:String,default:""},contentClass:{type:String,default:""}}};var k=function(){var e=this,a=e._self._c;return a("div",{class:["d-d-flex",{"d-ai-center":e.paragraphs.rows===1},e.contentClass],attrs:{"data-qa":"skeleton-list-item"}},[a("dt-skeleton-shape",{staticClass:"d-mr8",attrs:{size:e.shapeSize,shape:e.shape,"animation-duration":e.animationDuration,animate:e.animate,offset:e.offset,"content-class":e.shapeClass}}),a("div",{staticClass:"d-d-flex d-fd-column d-w100p"},[a("dt-skeleton-paragraph",e._b({attrs:{"animation-duration":e.animationDuration,animate:e.animate,offset:e.offset}},"dt-skeleton-paragraph",e.paragraphs,!1))],1)],1)},$=[];k._withStripped=!0;var u=o(I,k,$,!1,null,null,null,null);u.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton-list-item.vue";const j=u.exports;u.exports.__docgenInfo={displayName:"DtSkeletonListItem",exportName:"default",description:"",tags:{},props:[{name:"shape",description:"Defines the shape of the skeleton, accepts circle or square.",tags:{},values:["circle","square"],type:{name:"string"},defaultValue:{func:!1,value:"'circle'"}},{name:"shapeSize",description:"Size of the shape",tags:{},values:["xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"paragraphs",description:`Object containing quantity of paragraphs to display
and a randomWidth boolean.`,type:{name:"object"},defaultValue:{func:!1,value:`{
  rows: 3,
  randomWidth: true
}`}},{name:"animationDuration",description:"Duration time of the animation (ms), set -1 for an infinite animation.",type:{name:"number"},defaultValue:{func:!1,value:"-1"}},{name:"animate",description:'This property has higher priority than "option.animate"',tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"offset",description:`RippleDuration controls how long the delay is for the animation of a
placeholder 1000 pixels from the top of the page. Each placeholder
from the top down will have a delay duration from 0 to this offset.
The delay of each placeholder animation is based on how far down the page
the placeholder is rendered. This is a linear relationship. The unit
is milliseconds.`,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"shapeClass",description:"Additional class name for the shape.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"contentClass",description:"Additional class name for the content.",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton-list-item.vue"]};const R={name:"DtSkeleton",components:{DtSkeletonText:g,DtSkeletonShape:c,DtSkeletonListItem:j,DtSkeletonParagraph:_},props:{paragraphOption:{type:[Object,Boolean],default:null},listItemOption:{type:[Object,Boolean],default:null},textOption:{type:Object,default:null},shapeOption:{type:[Object,Boolean],default:null},animationDuration:{type:Number,default:-1},ariaLabel:{type:String,default:""},animate:{type:Boolean,default:!0},offset:{type:Number,default:1}},computed:{validationOptions(){return{paragraphOption:this.paragraphOption,listItemOption:this.listItemOption,textOption:this.textOption,shapeOption:this.shapeOption}}},watch:{$props:{immediate:!0,handler:"validator"}},methods:{validator(){const t=Object.entries(this.validationOptions).filter(([e,a])=>a);if(t.length>=2){const e=`Use only one of ${t.map(([a])=>a).join(" | ")} options at the same time`;console.error(e)}}}};var b=function(){var e=this,a=e._self._c;return a("div",{attrs:{"aria-busy":"true",role:"status","aria-label":e.ariaLabel}},[e.listItemOption?a("dt-skeleton-list-item",e._b({attrs:{"animation-duration":e.animationDuration,animate:e.animate,offset:e.offset}},"dt-skeleton-list-item",e.listItemOption===!0?{}:e.listItemOption,!1)):e.shapeOption?a("dt-skeleton-shape",e._b({attrs:{"animation-duration":e.animationDuration,animate:e.animate,offset:e.offset}},"dt-skeleton-shape",e.shapeOption===!0?{}:e.shapeOption,!1)):e.paragraphOption?a("dt-skeleton-paragraph",e._b({attrs:{"animation-duration":e.animationDuration,animate:e.animate,offset:e.offset}},"dt-skeleton-paragraph",e.paragraphOption===!0?{}:e.paragraphOption,!1)):a("dt-skeleton-text",e._b({attrs:{"animation-duration":e.animationDuration,animate:e.animate,offset:e.offset}},"dt-skeleton-text",e.textOption||{},!1))],1)},A=[];b._withStripped=!0;var d=o(R,b,A,!1,null,null,null,null);d.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton.vue";const L=d.exports;d.exports.__docgenInfo={displayName:"DtSkeleton",description:`Skeleton loader is a non-interactive placeholder that displays a preview of the UI to visually communicate
that content is in the process of loading. Skeleton is used to provide a low fidelity
representation of the user interface (UI) before content appears on the page.`,tags:{see:[{description:"https://dialpad.design/components/skeleton.html",title:"see"}]},exportName:"default",props:[{name:"paragraphOption",description:`Set this prop to have the skeleton render as multiple lines of text.
Set only one option prop at a time.`,type:{name:"object|boolean"},defaultValue:{func:!1,value:"null"}},{name:"listItemOption",description:`Set this prop to have the skeleton render as a list item with an avatar and wrapping text.
Set only one option prop at a time.`,type:{name:"object|boolean"},defaultValue:{func:!1,value:"null"}},{name:"textOption",description:`Set this prop to have the skeleton render as a single line of text.
Set only one option prop at a time.`,type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"shapeOption",description:`Set this prop to have the skeleton render as a specific shape.
Set only one option prop at a time.`,type:{name:"object|boolean"},defaultValue:{func:!1,value:"null"}},{name:"animationDuration",description:"Duration time of the animation (ms), set -1 for an infinite animation.",type:{name:"number"},defaultValue:{func:!1,value:"-1"}},{name:"ariaLabel",description:"Descriptive label for the content.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"animate",description:'This property has higher priority than "option.animate"',tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"offset",description:`RippleDuration controls how long the delay is for the animation of a
placeholder 1000 pixels from the top of the page. Each placeholder
from the top down will have a delay duration from 0 to this offset.
The delay of each placeholder animation is based on how far down the page
the placeholder is rendered. This is a linear relationship. The unit
is milliseconds.`,type:{name:"number"},defaultValue:{func:!1,value:"1"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton.vue"]};export{L as D,f as S};
//# sourceMappingURL=skeleton-28563e4f.js.map
