import{I as l}from"./icon_constants-b5cc196e.js";import{e as c,g as h,h as f,i as j,j as g,k as p,l as D}from"./emoji-8cc1c740.js";import{D as y}from"./skeleton-18db3887.js";import{a as b,f as S,e as r,v as m,d as v,n as o,g as k,o as _}from"./vue.esm-bundler-15aa0fd7.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";const d={name:"DtEmoji",components:{DtSkeleton:y},props:{code:{type:String,default:null},size:{type:String,default:"500",validator:a=>Object.keys(l).includes(a)},imgClass:{type:[String,Object,Array],default:""},ariaLabel:{type:String,default:null},showSkeleton:{type:Boolean,default:!0}},data(){return{emojiData:null,imgLoading:!1}},computed:{emojiDataValid(){return!!this.emojiData},emojiSrc(){var a;return this.emojiDataValid?(a=this.emojiData)!=null&&a.custom?c+this.emojiData.key+this.emojiData.extension:["100","200"].includes(this.size)?h+this.emojiData.key+f:j+this.emojiData.key+g:"invalid"},emojiAlt(){if(this.emojiDataValid)return this.emojiData.unicode_output?p(this.emojiData.unicode_output):this.emojiData.name},emojiLabel(){return this.emojiDataValid?this.ariaLabel?this.ariaLabel:this.emojiData.name:"Invalid Emoji"},emojiSize(){return l[this.size]}},watch:{code:{handler:function(){this.getEmojiData()},immediate:!0},emojiSrc:{handler:async function(){this.imgLoading=!0}}},methods:{getEmojiData(){this.emojiData=D(this.code)},imageLoaded(){this.imgLoading=!1},imageErrored(){this.imgLoading=!1}}},E=["aria-label","alt","title","src"];function z(a,i,s,w,n,e){const u=b("dt-skeleton");return _(),S("span",{class:o(e.emojiSize)},[r(v(u,{offset:0,class:o(e.emojiSize),"shape-option":{shape:"square",contentClass:e.emojiSize,size:"auto"}},null,8,["class","shape-option"]),[[m,n.imgLoading&&s.showSkeleton]]),r(k("img",{ref:"emojiImg",class:o(["d-icon",e.emojiSize,s.imgClass]),"aria-label":e.emojiLabel,alt:e.emojiAlt,title:e.emojiLabel,src:e.emojiSrc,onLoad:i[0]||(i[0]=(...t)=>e.imageLoaded&&e.imageLoaded(...t)),onError:i[1]||(i[1]=(...t)=>e.imageErrored&&e.imageErrored(...t))},null,42,E),[[m,!n.imgLoading]])],2)}const N=L(d,[["render",z],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji/emoji.vue"]]);d.__docgenInfo={displayName:"DtEmoji",description:"Renders an emoji from a shortcode such as :smile: or unicode character such as 😄",tags:{see:[{description:"https://dialpad.design/components/emoji.html",title:"see"}]},exportName:"default",props:[{name:"code",description:`Supports shortcode ex: :smile: or unicode ex: 😄. Will display the resulting emoji.
<a class="d-link" href="https://emojipedia.org/joypixels/" target="_blank">JoyPixels</a>
for all supported shortcode/unicode or the docs for setting up custom emojis.`,type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"size",description:`The size of the emoji. Can be any of the icon size utility classes from
<a class="d-link" href="https://dialpad.design/components/icon.html" target="_blank"> Dialpad Icon Size</a>`,tags:{},values:["100","200","300","400","500","600","700","800"],type:{name:"string"},defaultValue:{func:!1,value:"'500'"}},{name:"imgClass",description:`Additional class name for the emoji img element.
Can accept String, Object, and Array, i.e. has the
same API as Vue's built-in handling of the class attribute.`,type:{name:"string|object|array"},defaultValue:{func:!1,value:"''"}},{name:"ariaLabel",description:`Will be read out on a screen reader for this emoji. You must use this prop if you want your emoji to be i18n
Compatible as Dialtone Vue will not translate it by itself. If you do not set this prop the aria-label will
be set to the english description of the emoji. You can retrieve the description for an emoji yourself via the
getEmojiData() function`,type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"showSkeleton",description:"Shows a skeleton loader while the emoji asset is loading.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji/emoji.vue"]};export{N as D};
//# sourceMappingURL=emoji-c3c30f2b.js.map
