import{D as n}from"./emoji-80930338.js";import{f as p,d as l}from"./emoji-8cc1c740.js";import{h as o}from"./vue.esm-bundler-356a911e.js";import{I as m}from"./icon_constants-7afdb11e.js";import{_ as c}from"./_plugin-vue_export-helper-c27b6911.js";const a={name:"DtEmojiTextWrapper",components:{DtEmoji:n},inheritAttrs:!1,props:{elementType:{type:String,default:"div"},size:{type:String,default:"500",validator:e=>Object.keys(m).includes(e)}},data(){return{loadingEmojiJson:!0}},async created(){this.loadingEmojiJson=!1},methods:{replaceDtEmojis(e,t){const s=new RegExp(`(${e.join("|")})`,"g");return t.split(s).map(i=>e.includes(i)?o(n,{...this.$attrs,class:"d-mx4 d-d-inline-block",size:this.size,code:i}):i)},searchVNodes(e){var s;if(typeof e=="string")return this.searchCodes(e);if(typeof e.type=="symbol")return this.searchCodes(e.children);if((s=e.props)!=null&&s.innerHTML)return this.searchVNodes(e.props.innerHTML);const t=Array.isArray(e.children)?e.children:[e.children];return o(e.type,e.props,t.map(r=>this.searchVNodes(r)))},replaceVueComponentVNodeContent(e){},searchCodes(e){const t=p(e),s=l(e),r=[...t,...s];return r.length===0?e:this.replaceDtEmojis(r,e)}},render(){const e=this.$slots.default?this.$slots.default():[];return o(this.elementType,{"data-qa":"emoji-text-wrapper",class:this.$attrs.class},this.loadingEmojiJson?e:e.map(t=>this.searchVNodes(t)))}},_=c(a,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_text_wrapper/emoji_text_wrapper.vue"]]);a.__docgenInfo={displayName:"DtEmojiTextWrapper",description:"Wrapper to find and replace shortcodes like :smile: or unicode chars such as 😄 with our custom Emojis implementation.",tags:{see:[{description:"https://dialpad.design/components/emoji_text_wrapper.html",title:"see"}]},exportName:"default",props:[{name:"elementType",description:"Element type (tag name) to use for the wrapper.",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"size",description:"The icon size to render the emojis at: 100 to 800",type:{name:"string"},defaultValue:{func:!1,value:"'500'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_text_wrapper/emoji_text_wrapper.vue"]};export{_ as D};
//# sourceMappingURL=emoji_text_wrapper-e8c907ca.js.map
