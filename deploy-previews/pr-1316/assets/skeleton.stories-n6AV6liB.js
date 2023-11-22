import{c as u}from"./storybook_utils-XrTpeJKJ.js";import{D as r,S as x}from"./skeleton-_o26DcK5.js";import{g as $}from"./utils-pRacJSLF.js";import{n as b}from"./_plugin-vue2_normalizer-XBmYDgEh.js";const k={name:"DtSkeletonDefault",components:{DtSkeleton:r},data:()=>({key:""}),watch:{$props:{deep:!0,handler:"updateKey"}},methods:{updateKey(){this.key=$("skeleton-default")}}};var f=function(){var t=this,a=t._self._c;return a("dt-skeleton",{key:t.key,attrs:{"paragraph-option":t.$attrs.paragraphOption,"list-item-option":t.$attrs.listItemOption,"text-option":t.$attrs.textOption,"shape-option":t.$attrs.shapeOption,"animation-duration":t.$attrs.animationDuration,"aria-label":t.$attrs.ariaLabel,animate:t.$attrs.animate,offset:t.$attrs.offset}})},C=[];f._withStripped=!0;var i=b(k,f,C,!1,null,null,null,null);i.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton_default.story.vue";const w=i.exports;i.exports.__docgenInfo={displayName:"DtSkeletonDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton_default.story.vue"]};const y={name:"DtSkeletonVariants",components:{DtSkeleton:r},data(){return{headingSize:Object.keys(x),loading:!0}}};var g=function(){var t=this,a=t._self._c;return a("div",[a("h2",{staticClass:"d-mb32"},[t._v(" Prefabricated shapes ")]),a("section",{staticClass:"d-mb64 d-d-flex"},[a("div",{staticClass:"d-p4 d-fl1 d-w25p"},[a("h3",[t._v("Avatars")]),a("p",{staticClass:"d-mb24"},[t._v(" Default sizes matches avatar. Size is customizable when needed. ")]),a("p",[t._v("S (24x24px)")]),a("dt-skeleton",{staticClass:"d-mb24",attrs:{"shape-option":{size:"sm",shape:"circle"},animate:t.$attrs.animate,"aria-label":t.$attrs.ariaLabel}}),a("p",[t._v("M (32x32px)")]),a("dt-skeleton",{staticClass:"d-mb24",attrs:{"shape-option":{shape:"circle"},animate:t.$attrs.animate,"aria-label":t.$attrs.ariaLabel}}),a("p",[t._v("L (48x48px)")]),a("dt-skeleton",{attrs:{"shape-option":{size:"lg",shape:"circle"},animate:t.$attrs.animate,"aria-label":t.$attrs.ariaLabel}})],1),a("div",{staticClass:"d-p4 d-fl1 d-w25p"},[a("h3",[t._v("Image / Icon")]),a("p",{staticClass:"d-mb24"},[t._v(" Size is customizable. ")]),a("dt-skeleton",{staticClass:"d-mb24",attrs:{"shape-option":{shape:"square"},animate:t.$attrs.animate,"aria-label":t.$attrs.ariaLabel}})],1),a("div",{staticClass:"d-p4 d-fl1 d-w25p"},[a("h3",[t._v("Text: Body")]),a("p",{staticClass:"d-mb24"}),a("dt-skeleton",{attrs:{"aria-label":t.$attrs.ariaLabel,animate:t.$attrs.animate,"text-option":{width:"120px"},offset:.5}})],1),a("div",{staticClass:"d-p4 d-fl1 d-w25p"},[a("h3",[t._v("Text: Headings")]),a("p",{staticClass:"d-mb24"},[t._v(" Line-lengths is customizable. ")]),a("p",[t._v("S (height: 16px)")]),a("dt-skeleton",{staticClass:"d-mb24",attrs:{"text-option":{type:"heading",width:"160px",headingHeight:"sm"},animate:t.$attrs.animate,"aria-label":t.$attrs.ariaLabel}}),a("p",[t._v("M (height: 24px)")]),a("dt-skeleton",{staticClass:"d-mb24",attrs:{"text-option":{type:"heading",headingHeight:"md",width:"240px"},animate:t.$attrs.animate,"aria-label":t.$attrs.ariaLabel}}),a("p",[t._v("L (height: 32px)")]),a("dt-skeleton",{attrs:{"text-option":{type:"heading",headingHeight:"lg",width:"320px"},animate:t.$attrs.animate,"aria-label":t.$attrs.ariaLabel}})],1)]),a("h2",{staticClass:"d-mb32"},[t._v(" Prefabricated combinations ")]),a("section",{staticClass:"d-mb64 d-d-flex"},[a("div",{staticClass:"d-p4 d-fl1 d-w50p"},[a("h3",[t._v("Text List")]),a("p",{staticClass:"d-mb24"}),a("dt-skeleton",{staticClass:"d-mb16",attrs:{"aria-label":t.$attrs.ariaLabel,"text-option":{width:"120px"},animate:t.$attrs.animate,offset:.5}}),a("dt-skeleton",{staticClass:"d-mb16",attrs:{"aria-label":t.$attrs.ariaLabel,"text-option":{width:"120px"},animate:t.$attrs.animate,offset:.5}}),a("dt-skeleton",{staticClass:"d-mb16",attrs:{"aria-label":t.$attrs.ariaLabel,"text-option":{width:"120px"},animate:t.$attrs.animate,offset:.5}}),a("dt-skeleton",{staticClass:"d-mb16",attrs:{"aria-label":t.$attrs.ariaLabel,"text-option":{width:"120px"},animate:t.$attrs.animate,offset:.5}}),a("h3",{staticClass:"d-pt16"},[t._v(" Avatar + Name ")]),a("p",{staticClass:"d-mb24"}),a("dt-skeleton",{attrs:{offset:.6,"list-item-option":{shapeSize:"sm",paragraphs:{rows:1}},animate:t.$attrs.animate,"aria-label":t.$attrs.ariaLabel}}),a("h3",{staticClass:"d-pt16"},[t._v(" Icon + Text ")]),a("p",{staticClass:"d-mb24"}),a("dt-skeleton",{attrs:{offset:.6,"list-item-option":{shapeSize:"2rem",shape:"square",paragraphs:{rows:1}},animate:t.$attrs.animate,"aria-label":t.$attrs.ariaLabel}}),a("h3",{staticClass:"d-pt16"},[t._v(" Messages / Transcript / Comment ")]),a("p",{staticClass:"d-mb24"}),a("dt-skeleton",{attrs:{offset:.6,"list-item-option":{shapeSize:"3.6rem",paragraphs:{rows:4,width:["120px","311px","371px","279px"]}},animate:t.$attrs.animate,"aria-label":t.$attrs.ariaLabel}})],1),a("div",{staticClass:"d-p4 d-fl1 d-w50p"},[a("h3",[t._v("Text: Paragraphs")]),a("p",{staticClass:"d-mb24"},[t._v(" Line-lengths and amount of lines are customizable. ")]),a("dt-skeleton",{attrs:{"paragraph-option":{rows:5,randomWidth:!1},animate:t.$attrs.animate,"aria-label":t.$attrs.ariaLabel,offset:.5}})],1)])])},S=[];g._withStripped=!0;var o=b(y,g,S,!1,null,null,null,null);o.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton_variants.story.vue";const D=o.exports;o.exports.__docgenInfo={displayName:"DtSkeletonVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton_variants.story.vue"]};const _={ariaLabel:""},v={paragraphOption:{table:{type:{detail:`{
          rows?: number | string | 3,
          animate?: boolean | false,
          minWidth?: number | string | 30,
          maxWidth?: number | string | 100,
          width?: string, Array<string> | null,
          randomWidth?: boolean | false,
          offset?: number | 1,
          animationDuration?: number| -1,
          contentClass?: string | '',
          rowClass?: string | '',
        }`}}},listItemOption:{table:{type:{detail:`{
          shape?: string<circle | square> | 'circle',
          shapeSize?: string<sm | md | lg> | string <'{n}px|%|rem'>,
          shapeClass?: string | '',
          animate?: boolean | false,
          paragraphs?: paragraphOption | { rows: 3, randomWidth: true }
          offset?: number | 1,
          animationDuration?: number| -1,
          contentClass?: string | '',
        }`}}},textOption:{table:{type:{detail:`null | {
          type?: string <body | heading> | 'body',
          headingHeight?: string<sm | md | lg | xl> | 'md',
          width?: string | '100%',
          contentClass?: string | '',
          offset?: number | 1,
          animate?: boolean | false,
          animationDuration?: number| -1
        }`}}},shapeOption:{table:{type:{detail:`{
          shape?: string<circle | square> | 'circle',
          size?: string<sm | md | lg> | string <'{n}px|%|rem'>,
          animate?: boolean | false,
          offset?: number | 1,
          animationDuration?: number| -1,
          contentClass?: string | '',
        }`}}}},L={title:"Components/Skeleton",component:r,argTypes:v,args:_,excludeStories:/.*Data$/},T=(e,{argTypes:t})=>u(e,t,w),z=(e,{argTypes:t})=>u(e,t,D),s={render:T,decorators:[()=>({template:'<div style="width: 500px"><story /></div>'})],args:{}},n={render:z,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var l,p,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: DefaultTemplate,
  decorators: [() => ({
    template: '<div style="width: 500px"><story /></div>'
  })],
  args: {}
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,c,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(c=n.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const O=["argsData","argTypesData","Default","Variants"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Variants:n,__namedExportsOrder:O,argTypesData:v,argsData:_,default:L},Symbol.toStringTag,{value:"Module"}));export{s as D,F as S,n as V};
//# sourceMappingURL=skeleton.stories-n6AV6liB.js.map
