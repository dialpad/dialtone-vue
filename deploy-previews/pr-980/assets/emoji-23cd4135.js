import{I as o}from"./icon_constants-0085b0a1.js";import{e as n,g as r,h as l,i as m,j as u,k as d,l as c}from"./emoji-1f0f2b27.js";import{D as h}from"./skeleton-28563e4f.js";import{n as p}from"./_plugin-vue2_normalizer-2bbd088e.js";const f={name:"DtEmoji",components:{DtSkeleton:h},props:{code:{type:String,default:null},size:{type:String,default:"500",validator:i=>Object.keys(o).includes(i)},imgClass:{type:[String,Object,Array],default:""},ariaLabel:{type:String,default:null},showSkeleton:{type:Boolean,default:!0}},data(){return{emojiData:null,imgLoading:!1}},computed:{emojiDataValid(){return!!this.emojiData},emojiSrc(){var i;return this.emojiDataValid?(i=this.emojiData)!=null&&i.custom?n+this.emojiData.key+this.emojiData.extension:["100","200"].includes(this.size)?r+this.emojiData.key+l:m+this.emojiData.key+u:"invalid"},emojiAlt(){if(this.emojiDataValid)return this.emojiData.unicode_output?d(this.emojiData.unicode_output):this.emojiData.name},emojiLabel(){return this.emojiDataValid?this.ariaLabel?this.ariaLabel:this.emojiData.name:"Invalid Emoji"},emojiSize(){return o[this.size]}},watch:{code:{handler:function(){this.getEmojiData()},immediate:!0},emojiSrc:{handler:async function(){this.imgLoading=!0}}},methods:{getEmojiData(){this.emojiData=c(this.code)},imageLoaded(){this.imgLoading=!1},imageErrored(){this.imgLoading=!1}}};var s=function(){var e=this,a=e._self._c;return a("span",{class:e.emojiSize},[a("dt-skeleton",{directives:[{name:"show",rawName:"v-show",value:e.imgLoading&&e.showSkeleton,expression:"imgLoading && showSkeleton"}],class:e.emojiSize,attrs:{offset:0,"shape-option":{shape:"square",contentClass:e.emojiSize,size:"auto"}}}),a("img",{directives:[{name:"show",rawName:"v-show",value:!e.imgLoading,expression:"!imgLoading"}],ref:"emojiImg",class:["d-icon",e.emojiSize,e.imgClass],attrs:{"aria-label":e.emojiLabel,alt:e.emojiAlt,title:e.emojiLabel,src:e.emojiSrc},on:{load:e.imageLoaded,error:e.imageErrored}})],1)},j=[];s._withStripped=!0;var t=p(f,s,j,!1,null,null,null,null);t.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/emoji/emoji.vue";const S=t.exports;t.exports.__docgenInfo={displayName:"DtEmoji",description:"Renders an emoji from a shortcode such as :smile: or unicode character such as 😄",tags:{see:[{description:"https://dialpad.design/components/emoji.html",title:"see"}]},exportName:"default",props:[{name:"code",description:`Supports shortcode ex: :smile: or unicode ex: 😄. Will display the resulting emoji.
See <a href="https://emojipedia.org/joypixels/" target="_blank">JoyPixels</a>
 for all supported shortcode/unicode or the docs for setting up custom emojis.`,type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"size",description:`The size of the emoji. Can be any of the icon size utility classes from
<a href="https://dialpad.design/components/icon.html" target="_blank"> Dialpad Icon Size</a>`,tags:{},values:["100","200","300","400","500","600","700","800"],type:{name:"string"},defaultValue:{func:!1,value:"'500'"}},{name:"imgClass",description:`Additional class name for the emoji img element.
Can accept String, Object, and Array, i.e. has the
same API as Vue's built-in handling of the class attribute.`,type:{name:"string|object|array"},defaultValue:{func:!1,value:"''"}},{name:"ariaLabel",description:`Will be read out on a screen reader for this emoji. You must use this prop if you want your emoji to be i18n
Compatible as Dialtone Vue will not translate it by itself. If you do not set this prop the aria-label will
be set to the english description of the emoji. You can retrieve the description for an emoji yourself via the
getEmojiData() function`,type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"showSkeleton",description:"Shows a skeleton loader while the emoji asset is loading.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji/emoji.vue"]};export{S as D};
//# sourceMappingURL=emoji-23cd4135.js.map
