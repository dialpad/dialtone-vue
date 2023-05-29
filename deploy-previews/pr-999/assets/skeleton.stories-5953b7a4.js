import{c}from"./storybook_utils-bfad7e03.js";import{D as o,S as L}from"./skeleton-18db3887.js";import{g as T}from"./utils-66883e36.js";import{a as u,o as b,b as z,f as O,g as e,d as s}from"./vue.esm-bundler-15aa0fd7.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";const g={name:"DtSkeletonDefault",components:{DtSkeleton:o},data:()=>({key:""}),watch:{$props:{deep:!0,handler:"updateKey"}},methods:{updateKey(){this.key=T("skeleton-default")}}};function x(a,w,y,v,S,D){const t=u("dt-skeleton");return b(),z(t,{key:a.key,"paragraph-option":a.$attrs.paragraphOption,"list-item-option":a.$attrs.listItemOption,"text-option":a.$attrs.textOption,"shape-option":a.$attrs.shapeOption,"animation-duration":a.$attrs.animationDuration,"aria-label":a.$attrs.ariaLabel,animate:a.$attrs.animate,offset:a.$attrs.offset},null,8,["paragraph-option","list-item-option","text-option","shape-option","animation-duration","aria-label","animate","offset"])}const V=f(g,[["render",x],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton_default.story.vue"]]);g.__docgenInfo={displayName:"DtSkeletonDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton_default.story.vue"]};const _={name:"DtSkeletonVariants",components:{DtSkeleton:o},data(){return{headingSize:Object.keys(L),loading:!0}}},C=e("h2",{class:"d-mb32"}," Prefabricated shapes ",-1),I={class:"d-mb64 d-d-flex"},N={class:"d-p4 d-fl1 d-w25p"},H=e("h3",null,"Avatars",-1),E=e("p",{class:"d-mb24"}," Default sizes matches avatar. Size is customizable when needed. ",-1),P=e("p",null,"S (24x24px)",-1),q=e("p",null,"M (32x32px)",-1),B=e("p",null,"L (48x48px)",-1),W={class:"d-p4 d-fl1 d-w25p"},A=e("h3",null,"Image / Icon",-1),F=e("p",{class:"d-mb24"}," Size is customizable. ",-1),M={class:"d-p4 d-fl1 d-w25p"},j=e("h3",null,"Text: Body",-1),K=e("p",{class:"d-mb24"},null,-1),G={class:"d-p4 d-fl1 d-w25p"},U=e("h3",null,"Text: Headings",-1),J=e("p",{class:"d-mb24"}," Line-lengths is customizable. ",-1),Q=e("p",null,"S (height: 16px)",-1),R=e("p",null,"M (height: 24px)",-1),X=e("p",null,"L (height: 32px)",-1),Y=e("h2",{class:"d-mb32"}," Prefabricated combinations ",-1),Z={class:"d-mb64 d-d-flex"},aa={class:"d-p4 d-fl1 d-w50p"},ea=e("h3",null,"Text List",-1),ta=e("p",{class:"d-mb24"},null,-1),sa=e("h3",{class:"d-pt16"}," Avatar + Name ",-1),na=e("p",{class:"d-mb24"},null,-1),ia=e("h3",{class:"d-pt16"}," Icon + Text ",-1),oa=e("p",{class:"d-mb24"},null,-1),la=e("h3",{class:"d-pt16"}," Messages / Transcript / Comment ",-1),ra=e("p",{class:"d-mb24"},null,-1),da={class:"d-p4 d-fl1 d-w50p"},pa=e("h3",null,"Text: Paragraphs",-1),ma=e("p",{class:"d-mb24"}," Line-lengths and amount of lines are customizable. ",-1);function ha(a,w,y,v,S,D){const t=u("dt-skeleton");return b(),O("div",null,[C,e("section",I,[e("div",N,[H,E,P,s(t,{"shape-option":{size:"sm",shape:"circle"},animate:a.$attrs.animate,class:"d-mb24","aria-label":a.$attrs.ariaLabel},null,8,["animate","aria-label"]),q,s(t,{"shape-option":{shape:"circle"},animate:a.$attrs.animate,class:"d-mb24","aria-label":a.$attrs.ariaLabel},null,8,["animate","aria-label"]),B,s(t,{"shape-option":{size:"lg",shape:"circle"},animate:a.$attrs.animate,"aria-label":a.$attrs.ariaLabel},null,8,["animate","aria-label"])]),e("div",W,[A,F,s(t,{"shape-option":{shape:"square"},animate:a.$attrs.animate,class:"d-mb24","aria-label":a.$attrs.ariaLabel},null,8,["animate","aria-label"])]),e("div",M,[j,K,s(t,{"aria-label":a.$attrs.ariaLabel,animate:a.$attrs.animate,"text-option":{width:"120px"},offset:.5},null,8,["aria-label","animate","offset"])]),e("div",G,[U,J,Q,s(t,{"text-option":{type:"heading",width:"160px",headingHeight:"sm"},animate:a.$attrs.animate,class:"d-mb24","aria-label":a.$attrs.ariaLabel},null,8,["animate","aria-label"]),R,s(t,{"text-option":{type:"heading",headingHeight:"md",width:"240px"},animate:a.$attrs.animate,class:"d-mb24","aria-label":a.$attrs.ariaLabel},null,8,["animate","aria-label"]),X,s(t,{"text-option":{type:"heading",headingHeight:"lg",width:"320px"},animate:a.$attrs.animate,"aria-label":a.$attrs.ariaLabel},null,8,["animate","aria-label"])])]),Y,e("section",Z,[e("div",aa,[ea,ta,s(t,{"aria-label":a.$attrs.ariaLabel,"text-option":{width:"120px"},animate:a.$attrs.animate,offset:.5,class:"d-mb16"},null,8,["aria-label","animate","offset"]),s(t,{"aria-label":a.$attrs.ariaLabel,"text-option":{width:"120px"},animate:a.$attrs.animate,offset:.5,class:"d-mb16"},null,8,["aria-label","animate","offset"]),s(t,{"aria-label":a.$attrs.ariaLabel,"text-option":{width:"120px"},animate:a.$attrs.animate,offset:.5,class:"d-mb16"},null,8,["aria-label","animate","offset"]),s(t,{"aria-label":a.$attrs.ariaLabel,"text-option":{width:"120px"},animate:a.$attrs.animate,offset:.5,class:"d-mb16"},null,8,["aria-label","animate","offset"]),sa,na,s(t,{offset:.6,"list-item-option":{shapeSize:"sm",paragraphs:{rows:1}},animate:a.$attrs.animate,"aria-label":a.$attrs.ariaLabel},null,8,["offset","animate","aria-label"]),ia,oa,s(t,{offset:.6,"list-item-option":{shapeSize:"2rem",shape:"square",paragraphs:{rows:1}},animate:a.$attrs.animate,"aria-label":a.$attrs.ariaLabel},null,8,["offset","animate","aria-label"]),la,ra,s(t,{offset:.6,"list-item-option":{shapeSize:"3.6rem",paragraphs:{rows:4,width:["120px","311px","371px","279px"]}},animate:a.$attrs.animate,"aria-label":a.$attrs.ariaLabel},null,8,["offset","list-item-option","animate","aria-label"])]),e("div",da,[pa,ma,s(t,{"paragraph-option":{rows:5,randomWidth:!1},animate:a.$attrs.animate,"aria-label":a.$attrs.ariaLabel,offset:.5},null,8,["animate","aria-label","offset"])])])])}const ca=f(_,[["render",ha],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton_variants.story.vue"]]);_.__docgenInfo={displayName:"DtSkeletonVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/skeleton/skeleton_variants.story.vue"]};const $={ariaLabel:""},k={paragraphOption:{table:{type:{detail:`{
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
        }`}}}},ua={title:"Components/Skeleton",component:o,argTypes:k,args:$,excludeStories:/.*Data$/},ba=a=>c(a,V),fa=a=>c(a,ca),n={render:ba,decorators:[()=>({template:'<div style="width: 500px"><story /></div>'})],args:{}},i={render:fa,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var l,r,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: DefaultTemplate,
  decorators: [() => ({
    template: '<div style="width: 500px"><story /></div>'
  })],
  args: {}
}`,...(d=(r=n.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};var p,m,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(m=i.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const ga=["argsData","argTypesData","Default","Variants"],va=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Variants:i,__namedExportsOrder:ga,argTypesData:k,argsData:$,default:ua},Symbol.toStringTag,{value:"Module"}));export{n as D,va as S,i as V,$ as a,k as b};
//# sourceMappingURL=skeleton.stories-5953b7a4.js.map
