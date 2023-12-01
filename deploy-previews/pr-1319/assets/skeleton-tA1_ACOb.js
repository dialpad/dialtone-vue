import{o as n,k as r,p as h,A as y,f as C,s,F as I,G as j,b as m,u as k,e as A,m as f}from"./vue.esm-bundler-PY0rQjII.js";import{_ as p}from"./_plugin-vue_export-helper-x3n3nnut.js";const W=3e6,g={circle:"d-bar-circle",square:"d-bar2"},z=["body","heading"],L={sm:"24px",md:"32px",lg:"48px"},v={sm:"d-h16",md:"d-h24",lg:"d-h32"},_={computed:{skeletonOffset(){const t=this.$refs.skeleton;if(!t)return this.offset;const{top:a,height:e}=t.getBoundingClientRect();return a+e/2},skeletonStyle(){const t={};if(this.skeletonOffset===-1||!this.animate&&this.animationDuration===-1)return t;const a=this.skeletonOffset*W/1e3,e=this.animationDuration===-1?1e3:this.animationDuration;return t.animationDelay=`${a}ms`,t.animationDuration=`${e}ms`,t}}},S={name:"DtSkeletonShape",mixins:[_],props:{shape:{type:String,default:"circle",validator:t=>Object.keys(g).includes(t)},size:{type:String,default:"md"},animationDuration:{type:Number,default:-1},animate:{type:Boolean,default:!0},offset:{type:Number,default:1},contentClass:{type:[String,Object,Array],default:""}},data(){return{SKELETON_SHAPES:g}},computed:{shapeStyles(){const t=L[this.size]||this.size;return{...this.skeletonStyle,"min-width":t,"max-width":t,"min-height":t,"max-height":t}}}};function B(t,a,e,i,o,l){return n(),r("div",{ref:"skeleton","data-qa":"skeleton-shape",class:h(["skeleton-placeholder",o.SKELETON_SHAPES[e.shape],{"skeleton-placeholder--animate":e.animate},e.contentClass]),style:y(l.shapeStyles)},null,6)}const b=p(S,[["render",B],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton-shape.vue"]]);S.__docgenInfo={description:"",displayName:"DtSkeletonShape",tags:{},exportName:"default",props:[{name:"shape",description:"Defines the shape of the skeleton, accepts circle or square.",tags:{},values:["circle","square"],type:{name:"string"},defaultValue:{func:!1,value:"'circle'"}},{name:"size",description:"Size of the shape",tags:{},values:["xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"animationDuration",description:"Duration time of the animation (ms), set -1 for an infinite animation.",type:{name:"number"},defaultValue:{func:!1,value:"-1"}},{name:"animate",description:'This property has higher priority than "option.animate"',tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"offset",description:`RippleDuration controls how long the delay is for the animation of a
placeholder 1000 pixels from the top of the page. Each placeholder
from the top down will have a delay duration from 0 to this offset.
The delay of each placeholder animation is based on how far down the page
the placeholder is rendered. This is a linear relationship. The unit
is milliseconds.`,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"contentClass",description:"Additional class name for the content.",type:{name:"string|object|array"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/skeleton.js","/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton-shape.vue"]};const w={name:"DtSkeletonText",mixins:[_],props:{type:{type:String,default:"body",validator:t=>z.includes(t)},headingHeight:{type:String,default:"md",validator:t=>Object.keys(v).includes(t)},width:{type:String,default:"100%"},animationDuration:{type:Number,default:-1},animate:{type:Boolean,default:!1},offset:{type:Number,default:1},contentClass:{type:String,default:""}},data(){return{SKELETON_HEADING_HEIGHTS:v}}};function P(t,a,e,i,o,l){return e.type==="body"?(n(),r("div",{key:0,ref:"skeleton","data-qa":"skeleton-text-body",class:h(["d-skeleton-text","skeleton-placeholder",{"skeleton-placeholder--animate":e.animate},e.contentClass]),style:y({width:e.width,...t.skeletonStyle})},null,6)):e.type==="heading"?(n(),r("div",{key:1,ref:"skeleton","data-qa":"skeleton-text-heading",class:h([o.SKELETON_HEADING_HEIGHTS[e.headingHeight],"d-skeleton-text--heading","skeleton-placeholder",{"skeleton-placeholder--animate":e.animate},e.contentClass]),style:y({width:e.width,...t.skeletonStyle})},null,6)):C("v-if",!0)}const x=p(w,[["render",P],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton-text.vue"]]);w.__docgenInfo={description:"",displayName:"DtSkeletonText",tags:{},exportName:"default",props:[{name:"type",description:"Skeleton type",tags:{},values:["body","heading"],type:{name:"string"},defaultValue:{func:!1,value:"'body'"}},{name:"headingHeight",description:"Heading height",tags:{},values:["sm","md","lg"],type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"width",description:"Width of the skeleton",type:{name:"string"},defaultValue:{func:!1,value:"'100%'"}},{name:"animationDuration",description:"Duration time of the animation (ms), set -1 for an infinite animation.",type:{name:"number"},defaultValue:{func:!1,value:"-1"}},{name:"animate",description:'This property has higher priority than "option.animate"',tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"offset",description:`RippleDuration controls how long the delay is for the animation of a
placeholder 1000 pixels from the top of the page. Each placeholder
from the top down will have a delay duration from 0 to this offset.
The delay of each placeholder animation is based on how far down the page
the placeholder is rendered. This is a linear relationship. The unit
is milliseconds.`,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"contentClass",description:"Additional class name for the content.",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/skeleton.js","/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton-text.vue"]};const c=t=>t!==""&&!Number.isNaN(Number(t)),D={name:"DtSkeletonParagraph",components:{DtSkeletonText:x},props:{rows:{type:[Number,String],default:3,validator:c},animate:{type:Boolean,default:!0},minWidth:{type:[Number,String],default:30,validator:c},maxWidth:{type:[Number,String],default:100,validator:c},width:{type:[String,Array],default:null},randomWidth:{type:Boolean,default:!1},offset:{type:Number,default:1},animationDuration:{type:Number,default:-1},contentClass:{type:String,default:""},rowClass:{type:String,default:""}},computed:{integerRows(){return Number(this.rows)}},methods:{randomWidthPercentage(){const t=Math.min(this.minWidth,this.maxWidth),a=Math.max(this.minWidth,this.maxWidth);return`${Math.round(Math.random()*(a-t))+t}%`},getSizeParagraphRow(t){const a=this.width,e=Array.isArray(a),i=a==null?void 0:a[t-1],o=t===this.rows;return this.randomWidth?this.randomWidthPercentage():a&&!e?a:a&&e&&i?i:o?"38%":"100%"}}};function H(t,a,e,i,o,l){const d=s("dt-skeleton-text");return n(),r("div",{class:h(["d-skeleton-paragraph",e.contentClass]),contentClass:"","data-qa":"skeleton-paragraph"},[(n(!0),r(I,null,j(l.integerRows,u=>(n(),m(d,{key:u,"data-qa":"skeleton-paragraph-row","content-class":e.rowClass,animate:e.animate,offset:e.offset,"animation-duration":e.animationDuration,width:l.getSizeParagraphRow(u)},null,8,["content-class","animate","offset","animation-duration","width"]))),128))],2)}const O=p(D,[["render",H],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton-paragraph.vue"]]);D.__docgenInfo={displayName:"DtSkeletonParagraph",exportName:"default",description:"",tags:{},props:[{name:"rows",description:"Quantity of rows to display",type:{name:"number|string"},defaultValue:{func:!1,value:"3"}},{name:"animate",description:'This property has higher priority than "option.animate"',tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"minWidth",description:"Controls the min width of paragraphs",type:{name:"number|string"},defaultValue:{func:!1,value:"30"}},{name:"maxWidth",description:"Controls the max width of paragraphs",type:{name:"number|string"},defaultValue:{func:!1,value:"100"}},{name:"width",description:"Controls the width of paragraphs",type:{name:"string|array"},defaultValue:{func:!1,value:"null"}},{name:"randomWidth",description:"If true, row widths will be random",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"offset",description:`RippleDuration controls how long the delay is for the animation of a
placeholder 1000 pixels from the top of the page. Each placeholder
from the top down will have a delay duration from 0 to this offset.
The delay of each placeholder animation is based on how far down the page
the placeholder is rendered. This is a linear relationship. The unit
is milliseconds.`,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"animationDuration",description:"Duration time of the animation (ms), set -1 for an infinite animation.",type:{name:"number"},defaultValue:{func:!1,value:"-1"}},{name:"contentClass",description:"Additional class name for the content.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"rowClass",description:"Additional class name for the row.",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton-paragraph.vue"]};const V={name:"DtSkeletonListItem",components:{DtSkeletonShape:b,DtSkeletonParagraph:O},props:{shape:{type:String,default:"circle",validator:t=>Object.keys(g).includes(t)},shapeSize:{type:String,default:"md"},paragraphs:{type:Object,default:()=>({rows:3,randomWidth:!0})},animationDuration:{type:Number,default:-1},animate:{type:Boolean,default:!0},offset:{type:Number,default:1},shapeClass:{type:String,default:""},contentClass:{type:String,default:""}}},R={class:"d-skeleton-list-item__paragraph-container"};function q(t,a,e,i,o,l){const d=s("dt-skeleton-shape"),u=s("dt-skeleton-paragraph");return n(),r("div",{"data-qa":"skeleton-list-item",class:h(["d-skeleton-list-item",{"d-skeleton-list-item--single":e.paragraphs.rows===1},e.contentClass])},[k(d,{class:"d-skeleton-list-item__shape",size:e.shapeSize,shape:e.shape,"animation-duration":e.animationDuration,animate:e.animate,offset:e.offset,"content-class":e.shapeClass},null,8,["size","shape","animation-duration","animate","offset","content-class"]),A("div",R,[k(u,f(e.paragraphs,{"animation-duration":e.animationDuration,animate:e.animate,offset:e.offset}),null,16,["animation-duration","animate","offset"])])],2)}const F=p(V,[["render",q],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton-list-item.vue"]]);V.__docgenInfo={displayName:"DtSkeletonListItem",exportName:"default",description:"",tags:{},props:[{name:"shape",description:"Defines the shape of the skeleton, accepts circle or square.",tags:{},values:["circle","square"],type:{name:"string"},defaultValue:{func:!1,value:"'circle'"}},{name:"shapeSize",description:"Size of the shape",tags:{},values:["xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"paragraphs",description:`Object containing quantity of paragraphs to display
and a randomWidth boolean.`,type:{name:"object"},defaultValue:{func:!1,value:`{
  rows: 3,
  randomWidth: true
}`}},{name:"animationDuration",description:"Duration time of the animation (ms), set -1 for an infinite animation.",type:{name:"number"},defaultValue:{func:!1,value:"-1"}},{name:"animate",description:'This property has higher priority than "option.animate"',tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"offset",description:`RippleDuration controls how long the delay is for the animation of a
placeholder 1000 pixels from the top of the page. Each placeholder
from the top down will have a delay duration from 0 to this offset.
The delay of each placeholder animation is based on how far down the page
the placeholder is rendered. This is a linear relationship. The unit
is milliseconds.`,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"shapeClass",description:"Additional class name for the shape.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"contentClass",description:"Additional class name for the content.",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton-list-item.vue"]};const N={name:"DtSkeleton",components:{DtSkeletonText:x,DtSkeletonShape:b,DtSkeletonListItem:F,DtSkeletonParagraph:O},props:{paragraphOption:{type:[Object,Boolean],default:null},listItemOption:{type:[Object,Boolean],default:null},textOption:{type:Object,default:null},shapeOption:{type:[Object,Boolean],default:null},animationDuration:{type:Number,default:-1},ariaLabel:{type:String,default:""},animate:{type:Boolean,default:!0},offset:{type:Number,default:1}},computed:{validationOptions(){return{paragraphOption:this.paragraphOption,listItemOption:this.listItemOption,textOption:this.textOption,shapeOption:this.shapeOption}}},watch:{$props:{immediate:!0,handler:"validator"}},methods:{validator(){const t=Object.entries(this.validationOptions).filter(([a,e])=>e);if(t.length>=2){const a=`Use only one of ${t.map(([e])=>e).join(" | ")} options at the same time`;console.error(a)}}}},K=["aria-label"];function G(t,a,e,i,o,l){const d=s("dt-skeleton-list-item"),u=s("dt-skeleton-shape"),T=s("dt-skeleton-paragraph"),E=s("dt-skeleton-text");return n(),r("div",{"aria-busy":"true",role:"status","aria-label":e.ariaLabel},[e.listItemOption?(n(),m(d,f({key:0},e.listItemOption===!0?{}:e.listItemOption,{"animation-duration":e.animationDuration,animate:e.animate,offset:e.offset}),null,16,["animation-duration","animate","offset"])):e.shapeOption?(n(),m(u,f({key:1},e.shapeOption===!0?{}:e.shapeOption,{"animation-duration":e.animationDuration,animate:e.animate,offset:e.offset}),null,16,["animation-duration","animate","offset"])):e.paragraphOption?(n(),m(T,f({key:2},e.paragraphOption===!0?{}:e.paragraphOption,{"animation-duration":e.animationDuration,animate:e.animate,offset:e.offset}),null,16,["animation-duration","animate","offset"])):(n(),m(E,f({key:3},e.textOption||{},{"animation-duration":e.animationDuration,animate:e.animate,offset:e.offset}),null,16,["animation-duration","animate","offset"]))],8,K)}const Q=p(N,[["render",G],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton.vue"]]);N.__docgenInfo={displayName:"DtSkeleton",description:`Skeleton loader is a non-interactive placeholder that displays a preview of the UI to visually communicate
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
is milliseconds.`,type:{name:"number"},defaultValue:{func:!1,value:"1"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton.vue"]};export{Q as D,v as S};
//# sourceMappingURL=skeleton-tA1_ACOb.js.map
