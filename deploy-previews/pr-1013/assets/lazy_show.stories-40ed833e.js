import{D as i}from"./lazy_show-0b3a0cf0.js";import{D as u}from"./button-9102a84a.js";import{n as p}from"./_plugin-vue2_normalizer-2bbd088e.js";import{c as d}from"./storybook_utils-be1af372.js";const m={name:"LazyShowDefault",components:{DtLazyShow:i,DtButton:u},props:{show:{type:Boolean,default:!1}},data(){return{isShown:this.show||!1}},watch:{show(t){this.isShown=t}}};var c=function(){var e=this,a=e._self._c;return a("div",[a("dt-button",{on:{click:function(v){e.isShown=!e.isShown}}},[e._v(" Toggle ")]),a("dt-lazy-show",{attrs:{show:e.isShown,transition:e.transition}},[a("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/dQw4w9WgXcQ",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1)},f=[];c._withStripped=!0;var r=p(m,c,f,!1,null,null,null,null);r.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/lazy_show/lazy_show_default.story.vue";const w=r.exports;r.exports.__docgenInfo={displayName:"LazyShowDefault",exportName:"default",description:"",tags:{},props:[{name:"show",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/lazy_show/lazy_show_default.story.vue"]};const h={default:{control:"text",table:{category:"slots",type:{summary:"VNode"}}},transition:{options:["","fade","slide-down","pop","shake"],control:{type:"select"}}},_={title:"Utilities/Lazy Show",component:i,argTypes:h,excludeStories:/.Data$/},y=(t,{argTypes:e})=>d(t,e,w),o={render:y,args:{}};var s,n,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: Template,
  args: {}
}`,...(l=(n=o.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const S=["Default"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:S,default:_},Symbol.toStringTag,{value:"Module"}));export{x as L};
//# sourceMappingURL=lazy_show.stories-40ed833e.js.map
