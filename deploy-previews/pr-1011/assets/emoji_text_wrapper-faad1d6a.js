import{D as i}from"./emoji-64227f3f.js";import{f as a,d as l}from"./emoji-1f0f2b27.js";import{I as p}from"./icon_constants-7577383f.js";import{n as m}from"./_plugin-vue2_normalizer-2bbd088e.js";const c={name:"DtEmojiTextWrapper",components:{DtEmoji:i},inheritAttrs:!1,props:{elementType:{type:String,default:"div"},size:{type:String,default:"500",validator:e=>Object.keys(p).includes(e)}},data(){return{loadingEmojiJson:!0}},async created(){this.loadingEmojiJson=!1},methods:{replaceDtEmojis(e,t){const s=new RegExp(`(${e.join("|")})`,"g");return t.split(s).map(o=>e.includes(o)?this.$createElement(i,{attrs:{class:"d-mx4 d-d-inline-block"},props:{code:o,size:this.size,...this.$attrs}}):o)},searchVNodes(e){if(!e.tag&&e.text)return this.searchCodes(e.text);const t=e.children?e.children.map(s=>this.searchVNodes(s)):[];return this.$createElement(e.tag,e.data,t)},replaceVueComponentVNodeContent(e){},searchCodes(e){const t=a(e),s=l(e),n=[...t,...s];return n.length===0?e:this.replaceDtEmojis(n,e)}},render(e){const t=this.$slots.default||[];return e(this.elementType,this.loadingEmojiJson?t:t.map(s=>this.searchVNodes(s)))}},d=null,u=null;var r=m(c,d,u,!1,null,null,null,null);r.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_text_wrapper/emoji_text_wrapper.vue";const g=r.exports;r.exports.__docgenInfo={displayName:"DtEmojiTextWrapper",description:"Wrapper to find and replace shortcodes like :smile: or unicode chars such as 😄 with our custom Emojis implementation.",tags:{see:[{description:"https://dialpad.design/components/emoji_text_wrapper.html",title:"see"}]},exportName:"default",props:[{name:"elementType",description:"Element type (tag name) to use for the wrapper.",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"size",description:"The icon size to render the emojis at: 100 to 800",type:{name:"string"},defaultValue:{func:!1,value:"'500'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_text_wrapper/emoji_text_wrapper.vue"]};export{g as D};
//# sourceMappingURL=emoji_text_wrapper-faad1d6a.js.map
