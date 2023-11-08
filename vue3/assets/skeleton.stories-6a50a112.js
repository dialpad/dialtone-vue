import{c as u}from"./storybook_utils-182ea7b7.js";import{D as l,S as v}from"./skeleton-35a1d81f.js";import{g as T}from"./utils-b9178890.js";import{s as b,o as f,b as z,k as O,e,u as s}from"./vue.esm-bundler-2fc8d911.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";const _={name:"DtSkeletonDefault",components:{DtSkeleton:l},data:()=>({key:""}),watch:{$props:{deep:!0,handler:"updateKey"}},methods:{updateKey(){this.key=T("skeleton-default")}}};function x(a,n,k,S,D,L){const t=b("dt-skeleton");return f(),z(t,{key:a.key,"paragraph-option":a.$attrs.paragraphOption,"list-item-option":a.$attrs.listItemOption,"text-option":a.$attrs.textOption,"shape-option":a.$attrs.shapeOption,"animation-duration":a.$attrs.animationDuration,"aria-label":a.$attrs.ariaLabel,animate:a.$attrs.animate,offset:a.$attrs.offset},null,8,["paragraph-option","list-item-option","text-option","shape-option","animation-duration","aria-label","animate","offset"])}const V=g(_,[["render",x]]);_.__docgenInfo={displayName:"DtSkeletonDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton_default.story.vue"]};const $={name:"DtSkeletonVariants",components:{DtSkeleton:l},data(){return{headingSize:Object.keys(v),loading:!0}}},C=e("h2",{class:"d-mb32"}," Prefabricated shapes ",-1),I={class:"d-mb64 d-d-flex"},N={class:"d-p4 d-fl1 d-w25p"},H=e("h3",null,"Avatars",-1),E=e("p",{class:"d-mb24"}," Default sizes matches avatar. Size is customizable when needed. ",-1),P=e("p",null,"S (24x24px)",-1),q=e("p",null,"M (32x32px)",-1),B=e("p",null,"L (48x48px)",-1),W={class:"d-p4 d-fl1 d-w25p"},A=e("h3",null,"Image / Icon",-1),F=e("p",{class:"d-mb24"}," Size is customizable. ",-1),M={class:"d-p4 d-fl1 d-w25p"},j=e("h3",null,"Text: Body",-1),K=e("p",{class:"d-mb24"},null,-1),G={class:"d-p4 d-fl1 d-w25p"},U=e("h3",null,"Text: Headings",-1),J=e("p",{class:"d-mb24"}," Line-lengths is customizable. ",-1),Q=e("p",null,"S (height: 16px)",-1),R=e("p",null,"M (height: 24px)",-1),X=e("p",null,"L (height: 32px)",-1),Y=e("h2",{class:"d-mb32"}," Prefabricated combinations ",-1),Z={class:"d-mb64 d-d-flex"},aa={class:"d-p4 d-fl1 d-w50p"},ea=e("h3",null,"Text List",-1),ta=e("p",{class:"d-mb24"},null,-1),sa=e("h3",{class:"d-pt16"}," Avatar + Name ",-1),na=e("p",{class:"d-mb24"},null,-1),ia=e("h3",{class:"d-pt16"}," Icon + Text ",-1),oa=e("p",{class:"d-mb24"},null,-1),la=e("h3",{class:"d-pt16"}," Messages / Transcript / Comment ",-1),ra=e("p",{class:"d-mb24"},null,-1),pa={class:"d-p4 d-fl1 d-w50p"},da=e("h3",null,"Text: Paragraphs",-1),ma=e("p",{class:"d-mb24"}," Line-lengths and amount of lines are customizable. ",-1);function ha(a,n,k,S,D,L){const t=b("dt-skeleton");return f(),O("div",null,[C,e("section",I,[e("div",N,[H,E,P,s(t,{"shape-option":{size:"sm",shape:"circle"},animate:a.$attrs.animate,class:"d-mb24","aria-label":a.$attrs.ariaLabel},null,8,["animate","aria-label"]),q,s(t,{"shape-option":{shape:"circle"},animate:a.$attrs.animate,class:"d-mb24","aria-label":a.$attrs.ariaLabel},null,8,["animate","aria-label"]),B,s(t,{"shape-option":{size:"lg",shape:"circle"},animate:a.$attrs.animate,"aria-label":a.$attrs.ariaLabel},null,8,["animate","aria-label"])]),e("div",W,[A,F,s(t,{"shape-option":{shape:"square"},animate:a.$attrs.animate,class:"d-mb24","aria-label":a.$attrs.ariaLabel},null,8,["animate","aria-label"])]),e("div",M,[j,K,s(t,{"aria-label":a.$attrs.ariaLabel,animate:a.$attrs.animate,"text-option":{width:"120px"},offset:.5},null,8,["aria-label","animate"])]),e("div",G,[U,J,Q,s(t,{"text-option":{type:"heading",width:"160px",headingHeight:"sm"},animate:a.$attrs.animate,class:"d-mb24","aria-label":a.$attrs.ariaLabel},null,8,["animate","aria-label"]),R,s(t,{"text-option":{type:"heading",headingHeight:"md",width:"240px"},animate:a.$attrs.animate,class:"d-mb24","aria-label":a.$attrs.ariaLabel},null,8,["animate","aria-label"]),X,s(t,{"text-option":{type:"heading",headingHeight:"lg",width:"320px"},animate:a.$attrs.animate,"aria-label":a.$attrs.ariaLabel},null,8,["animate","aria-label"])])]),Y,e("section",Z,[e("div",aa,[ea,ta,s(t,{"aria-label":a.$attrs.ariaLabel,"text-option":{width:"120px"},animate:a.$attrs.animate,offset:.5,class:"d-mb16"},null,8,["aria-label","animate"]),s(t,{"aria-label":a.$attrs.ariaLabel,"text-option":{width:"120px"},animate:a.$attrs.animate,offset:.5,class:"d-mb16"},null,8,["aria-label","animate"]),s(t,{"aria-label":a.$attrs.ariaLabel,"text-option":{width:"120px"},animate:a.$attrs.animate,offset:.5,class:"d-mb16"},null,8,["aria-label","animate"]),s(t,{"aria-label":a.$attrs.ariaLabel,"text-option":{width:"120px"},animate:a.$attrs.animate,offset:.5,class:"d-mb16"},null,8,["aria-label","animate"]),sa,na,s(t,{offset:.6,"list-item-option":{shapeSize:"sm",paragraphs:{rows:1}},animate:a.$attrs.animate,"aria-label":a.$attrs.ariaLabel},null,8,["animate","aria-label"]),ia,oa,s(t,{offset:.6,"list-item-option":{shapeSize:"2rem",shape:"square",paragraphs:{rows:1}},animate:a.$attrs.animate,"aria-label":a.$attrs.ariaLabel},null,8,["animate","aria-label"]),la,ra,s(t,{offset:.6,"list-item-option":{shapeSize:"3.6rem",paragraphs:{rows:4,width:["120px","311px","371px","279px"]}},animate:a.$attrs.animate,"aria-label":a.$attrs.ariaLabel},null,8,["animate","aria-label"])]),e("div",pa,[da,ma,s(t,{"paragraph-option":{rows:5,randomWidth:!1},animate:a.$attrs.animate,"aria-label":a.$attrs.ariaLabel,offset:.5},null,8,["animate","aria-label"])])])])}const ca=g($,[["render",ha]]);$.__docgenInfo={displayName:"DtSkeletonVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton_variants.story.vue"]};const w={ariaLabel:""},y={paragraphOption:{table:{type:{detail:`{
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
        }`}}}},ua={title:"Components/Skeleton",component:l,argTypes:y,args:w,excludeStories:/.*Data$/},ba=(a,{argTypes:n})=>u(a,n,V),fa=(a,{argTypes:n})=>u(a,n,ca),i={render:ba,decorators:[()=>({template:'<div style="width: 500px"><story /></div>'})],args:{}},o={render:fa,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var r,p,d;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: DefaultTemplate,
  decorators: [() => ({
    template: '<div style="width: 500px"><story /></div>'
  })],
  args: {}
}`,...(d=(p=i.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,h,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(h=o.parameters)==null?void 0:h.docs)==null?void 0:c.source}}};const ga=["argsData","argTypesData","Default","Variants"],Sa=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Variants:o,__namedExportsOrder:ga,argTypesData:y,argsData:w,default:ua},Symbol.toStringTag,{value:"Module"}));export{i as D,Sa as S,o as V};
//# sourceMappingURL=skeleton.stories-6a50a112.js.map
