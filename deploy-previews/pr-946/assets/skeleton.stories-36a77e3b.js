import{n as b,a as x,c as h}from"./_plugin-vue2_normalizer-bbedbd26.js";import{D as n,S as k}from"./skeleton-6bfe2369.js";const C={name:"DtSkeletonDefault",components:{DtSkeleton:n},data:()=>({key:""}),watch:{$props:{deep:!0,handler:"updateKey"}},methods:{updateKey(){this.key=x("skeleton-default")}}};var g=function(){var a=this,t=a._self._c;return t("dt-skeleton",{key:a.key,attrs:{"paragraph-option":a.paragraphOption,"list-item-option":a.listItemOption,"text-option":a.textOption,"shape-option":a.shapeOption,"animation-duration":a.animationDuration,"aria-label":a.ariaLabel,animate:a.animate,offset:a.offset}})},y=[];g._withStripped=!0;var r=b(C,g,y,!1,null,null,null,null);r.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton_default.story.vue";const w=r.exports;r.exports.__docgenInfo={displayName:"DtSkeletonDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton_default.story.vue"]};const S={name:"DtSkeletonVariants",components:{DtSkeleton:n},data(){return{headingSize:Object.keys(k),loading:!0}}};var f=function(){var a=this,t=a._self._c;return t("div",[t("h2",{staticClass:"d-mb32"},[a._v(" Prefabricated shapes ")]),t("section",{staticClass:"d-mb64 d-d-flex"},[t("div",{staticClass:"d-p4 d-fl1 d-w25p"},[t("h3",[a._v("Avatars")]),t("p",{staticClass:"d-mb24"},[a._v(" Default sizes matches avatar. Size is customizable when needed. ")]),t("p",[a._v("S (24x24px)")]),t("dt-skeleton",{staticClass:"d-mb24",attrs:{"shape-option":{size:"sm",shape:"circle"},animate:a.animate,"aria-label":a.ariaLabel}}),t("p",[a._v("M (32x32px)")]),t("dt-skeleton",{staticClass:"d-mb24",attrs:{"shape-option":{shape:"circle"},animate:a.animate,"aria-label":a.ariaLabel}}),t("p",[a._v("L (48x48px)")]),t("dt-skeleton",{attrs:{"shape-option":{size:"lg",shape:"circle"},animate:a.animate,"aria-label":a.ariaLabel}})],1),t("div",{staticClass:"d-p4 d-fl1 d-w25p"},[t("h3",[a._v("Image / Icon")]),t("p",{staticClass:"d-mb24"},[a._v(" Size is customizable. ")]),t("dt-skeleton",{staticClass:"d-mb24",attrs:{"shape-option":{shape:"square"},animate:a.animate,"aria-label":a.ariaLabel}})],1),t("div",{staticClass:"d-p4 d-fl1 d-w25p"},[t("h3",[a._v("Text: Body")]),t("p",{staticClass:"d-mb24"}),t("dt-skeleton",{attrs:{"aria-label":a.ariaLabel,animate:a.animate,"text-option":{width:"120px"},offset:.5}})],1),t("div",{staticClass:"d-p4 d-fl1 d-w25p"},[t("h3",[a._v("Text: Headings")]),t("p",{staticClass:"d-mb24"},[a._v(" Line-lengths is customizable. ")]),t("p",[a._v("S (height: 16px)")]),t("dt-skeleton",{staticClass:"d-mb24",attrs:{"text-option":{type:"heading",width:"160px",headingHeight:"sm"},animate:a.animate,"aria-label":a.ariaLabel}}),t("p",[a._v("M (height: 24px)")]),t("dt-skeleton",{staticClass:"d-mb24",attrs:{"text-option":{type:"heading",headingHeight:"md",width:"240px"},animate:a.animate,"aria-label":a.ariaLabel}}),t("p",[a._v("L (height: 32px)")]),t("dt-skeleton",{attrs:{"text-option":{type:"heading",headingHeight:"lg",width:"320px"},animate:a.animate,"aria-label":a.ariaLabel}})],1)]),t("h2",{staticClass:"d-mb32"},[a._v(" Prefabricated combinations ")]),t("section",{staticClass:"d-mb64 d-d-flex"},[t("div",{staticClass:"d-p4 d-fl1 d-w50p"},[t("h3",[a._v("Text List")]),t("p",{staticClass:"d-mb24"}),t("dt-skeleton",{staticClass:"d-mb16",attrs:{"aria-label":a.ariaLabel,"text-option":{width:"120px"},animate:a.animate,offset:.5}}),t("dt-skeleton",{staticClass:"d-mb16",attrs:{"aria-label":a.ariaLabel,"text-option":{width:"120px"},animate:a.animate,offset:.5}}),t("dt-skeleton",{staticClass:"d-mb16",attrs:{"aria-label":a.ariaLabel,"text-option":{width:"120px"},animate:a.animate,offset:.5}}),t("dt-skeleton",{staticClass:"d-mb16",attrs:{"aria-label":a.ariaLabel,"text-option":{width:"120px"},animate:a.animate,offset:.5}}),t("h3",{staticClass:"d-pt16"},[a._v(" Avatar + Name ")]),t("p",{staticClass:"d-mb24"}),t("dt-skeleton",{attrs:{offset:.6,"list-item-option":{shapeSize:"sm",paragraphs:{rows:1}},animate:a.animate,"aria-label":a.ariaLabel}}),t("h3",{staticClass:"d-pt16"},[a._v(" Icon + Text ")]),t("p",{staticClass:"d-mb24"}),t("dt-skeleton",{attrs:{offset:.6,"list-item-option":{shapeSize:"2rem",shape:"square",paragraphs:{rows:1}},animate:a.animate,"aria-label":a.ariaLabel}}),t("h3",{staticClass:"d-pt16"},[a._v(" Messages / Transcript / Comment ")]),t("p",{staticClass:"d-mb24"}),t("dt-skeleton",{attrs:{offset:.6,"list-item-option":{shapeSize:"3.6rem",paragraphs:{rows:4,width:["120px","311px","371px","279px"]}},animate:a.animate,"aria-label":a.ariaLabel}})],1),t("div",{staticClass:"d-p4 d-fl1 d-w50p"},[t("h3",[a._v("Text: Paragraphs")]),t("p",{staticClass:"d-mb24"},[a._v(" Line-lengths and amount of lines are customizable. ")]),t("dt-skeleton",{attrs:{"paragraph-option":{rows:5,randomWidth:!1},animate:a.animate,"aria-label":a.ariaLabel,offset:.5}})],1)])])},D=[];f._withStripped=!0;var o=b(S,f,D,!1,null,null,null,null);o.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton_variants.story.vue";const T=o.exports;o.exports.__docgenInfo={displayName:"DtSkeletonVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton_variants.story.vue"]};const _={ariaLabel:""},v={paragraphOption:{table:{type:{detail:`{
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
        }`}}}},L={title:"Components/Skeleton",component:n,argTypes:v,args:_,excludeStories:/.*Data$/},z=(i,{argTypes:a})=>h(i,a,w),O=(i,{argTypes:a})=>h(i,a,T),e=z.bind({});e.decorators=[()=>({template:'<div style="width: 500px"><story /></div>'})];e.args={};const s=O.bind({});s.args={};s.parameters={options:{showPanel:!1},controls:{disable:!0}};var l,p,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`(args, {
  argTypes
}) => createTemplateFromVueFile(args, argTypes, DtSkeletonDefaultTemplate)`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,c,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`(args, {
  argTypes
}) => createTemplateFromVueFile(args, argTypes, DtSkeletonVariantsTemplate)`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const V=["argsData","argTypesData","Default","Variants"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Variants:s,__namedExportsOrder:V,argTypesData:v,argsData:_,default:L},Symbol.toStringTag,{value:"Module"}));export{e as D,H as S,s as V,_ as a,v as b};
//# sourceMappingURL=skeleton.stories-36a77e3b.js.map
