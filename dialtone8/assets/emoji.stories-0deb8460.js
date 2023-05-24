import{c as j}from"./storybook_utils-fe18e457.js";import{I as T}from"./icon_constants-83c02e68.js";import{D as i}from"./emoji-a2c935ad.js";import{n as z}from"./_plugin-vue2_normalizer-2bbd088e.js";const y={name:"DtEmojiDefault",components:{DtEmoji:i}};var h=function(){var s=this,e=s._self._c;return e("dt-emoji",{attrs:{code:s.code,size:s.size,"img-class":s.imgClass,"aria-label":s.ariaLabel,"show-skeleton":s.showSkeleton}})},S=[],v=z(y,h,S,!1,null,null,null,null);const x=v.exports;v.exports.__docgenInfo={displayName:"DtEmojiDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji/emoji_default.story.vue"]};const F={name:"DtEmojiDefault",components:{DtEmoji:i}};var I=function(){var s=this,e=s._self._c;return e("div",[e("div",[e("dt-emoji",{attrs:{id:"emoji-size100",code:":smile:",size:"100"}}),e("label",{attrs:{for:"emoji-size100"}},[s._v("size 100")])],1),e("div",[e("dt-emoji",{attrs:{id:"emoji-size200",code:":smile:",size:"200"}}),e("label",{attrs:{for:"emoji-size200"}},[s._v("size 200")])],1),e("div",[e("dt-emoji",{attrs:{id:"emoji-size300",code:":smile:",size:"300"}}),e("label",{attrs:{for:"emoji-size300"}},[s._v("size 300")])],1),e("div",[e("dt-emoji",{attrs:{id:"emoji-size400",code:":smile:",size:"400"}}),e("label",{attrs:{for:"emoji-size400"}},[s._v("size 400")])],1),e("div",[e("dt-emoji",{attrs:{id:"emoji-size500",code:":smile:",size:"500"}}),e("label",{attrs:{for:"emoji-size500"}},[s._v("size 500")])],1),e("div",[e("dt-emoji",{attrs:{id:"emoji-size600",code:":smile:",size:"600"}}),e("label",{attrs:{for:"emoji-size600"}},[s._v("size 600")])],1),e("div",[e("dt-emoji",{attrs:{id:"emoji-size700",code:":smile:",size:"700"}}),e("label",{attrs:{for:"emoji-size700"}},[s._v("size 700")])],1),e("div",[e("dt-emoji",{attrs:{id:"emoji-size800",code:":smile:",size:"800"}}),e("label",{attrs:{for:"emoji-size800"}},[s._v("size 800")])],1)])},V=[],D=z(F,I,V,!1,null,null,null,null);const w=D.exports;D.exports.__docgenInfo={displayName:"DtEmojiDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji/emoji_variants.story.vue"]};const g={code:":smile:"},b={size:{options:Object.keys(T),control:{type:"select"}}},C={title:"Components/Emoji",component:i,args:g,argTypes:b,excludeStories:/.*Data$/},E=(o,{argTypes:s})=>j(o,s,x),O=(o,{argTypes:s})=>j(o,s,w),t={render:E,args:{}},a={render:E,args:{code:":shipit:"}},r={render:O,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var n,m,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var c,d,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    code: ':shipit:'
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,_,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {},
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  }
}`,...(f=(_=r.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};const k=["argsData","argTypesData","Default","CustomEmoji","Variants"],M=Object.freeze(Object.defineProperty({__proto__:null,CustomEmoji:a,Default:t,Variants:r,__namedExportsOrder:k,argTypesData:b,argsData:g,default:C},Symbol.toStringTag,{value:"Module"}));export{t as D,M as E,r as V};
//# sourceMappingURL=emoji.stories-0deb8460.js.map
