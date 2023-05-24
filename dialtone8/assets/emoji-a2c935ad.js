import{I as t}from"./icon_constants-83c02e68.js";import{e as s,g as n,h as l,i as r,j as m,k as u,l as d}from"./emoji-1f0f2b27.js";import{D as c}from"./skeleton-8a392920.js";import{n as h}from"./_plugin-vue2_normalizer-2bbd088e.js";const p={name:"DtEmoji",components:{DtSkeleton:c},props:{code:{type:String,default:null},size:{type:String,default:"500",validator:a=>Object.keys(t).includes(a)},imgClass:{type:[String,Object,Array],default:""},ariaLabel:{type:String,default:null},showSkeleton:{type:Boolean,default:!0}},data(){return{emojiData:null,imgLoading:!1}},computed:{emojiDataValid(){return!!this.emojiData},emojiSrc(){var a;return this.emojiDataValid?(a=this.emojiData)!=null&&a.custom?s+this.emojiData.key+this.emojiData.extension:["100","200"].includes(this.size)?n+this.emojiData.key+l:r+this.emojiData.key+m:"invalid"},emojiAlt(){if(this.emojiDataValid)return this.emojiData.unicode_output?u(this.emojiData.unicode_output):this.emojiData.name},emojiLabel(){return this.emojiDataValid?this.ariaLabel?this.ariaLabel:this.emojiData.name:"Invalid Emoji"},emojiSize(){return t[this.size]}},watch:{code:{handler:function(){this.getEmojiData()},immediate:!0},emojiSrc:{handler:async function(){this.imgLoading=!0}}},methods:{getEmojiData(){this.emojiData=d(this.code)},imageLoaded(){this.imgLoading=!1},imageErrored(){this.imgLoading=!1}}};var f=function(){var e=this,i=e._self._c;return i("span",{class:e.emojiSize},[i("dt-skeleton",{directives:[{name:"show",rawName:"v-show",value:e.imgLoading&&e.showSkeleton,expression:"imgLoading && showSkeleton"}],class:e.emojiSize,attrs:{offset:0,"shape-option":{shape:"square",contentClass:e.emojiSize,size:"auto"}}}),i("img",{directives:[{name:"show",rawName:"v-show",value:!e.imgLoading,expression:"!imgLoading"}],ref:"emojiImg",class:["d-icon",e.emojiSize,e.imgClass],attrs:{"aria-label":e.emojiLabel,alt:e.emojiAlt,title:e.emojiLabel,src:e.emojiSrc},on:{load:e.imageLoaded,error:e.imageErrored}})],1)},j=[],o=h(p,f,j,!1,null,null,null,null);const S=o.exports;o.exports.__docgenInfo={displayName:"DtEmoji",description:"Renders an emoji from a shortcode such as :smile: or unicode character such as 😄",tags:{see:[{description:"https://dialpad.design/components/emoji.html",title:"see"}]},exportName:"default",props:[{name:"code",description:`Supports shortcode ex: :smile: or unicode ex: 😄. Will display the resulting emoji.
<a class="d-link" href="https://emojipedia.org/joypixels/" target="_blank">JoyPixels</a>
for all supported shortcode/unicode or the docs for setting up custom emojis.`,type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"size",description:`The size of the emoji. Can be any of the icon size utility classes from
<a class="d-link" href="https://dialpad.design/components/icon.html" target="_blank"> Dialpad Icon Size</a>`,tags:{},values:["100","200","300","400","500","600","700","800"],type:{name:"string"},defaultValue:{func:!1,value:"'500'"}},{name:"imgClass",description:`Additional class name for the emoji img element.
Can accept String, Object, and Array, i.e. has the
same API as Vue's built-in handling of the class attribute.`,type:{name:"string|object|array"},defaultValue:{func:!1,value:"''"}},{name:"ariaLabel",description:`Will be read out on a screen reader for this emoji. You must use this prop if you want your emoji to be i18n
Compatible as Dialtone Vue will not translate it by itself. If you do not set this prop the aria-label will
be set to the english description of the emoji. You can retrieve the description for an emoji yourself via the
getEmojiData() function`,type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"showSkeleton",description:"Shows a skeleton loader while the emoji asset is loading.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji/emoji.vue"]};export{S as D};
//# sourceMappingURL=emoji-a2c935ad.js.map
