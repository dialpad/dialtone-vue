import{a as O}from"./chunk-AY7I2SME-c7b6cf8a.js";import{c as I}from"./storybook_utils-255cd4a4.js";import{d,e as n,x as u,n as F,o as p,k as f,j as V,l as t,J as M,m as e,q as a,F as B}from"./vue.esm-bundler-6a14dfd3.js";import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";import{D as j}from"./button-3250ad24.js";import{D as A}from"./icon-bd60410b.js";const N=["green300","green100","red200","red100","gold100","gold200","black100","white"];const S={name:"DtRecipeTopBannerInfo",props:{colorCode:{type:String,default:"green300",validator:function(o){return N.includes(o)}}},computed:{bannerInfoClass(){return[{green300:"d-bgc-success",green100:"d-bgc-success",red200:"d-bgc-critical",red100:"d-bgc-critical",gold200:"d-bgc-warning",gold100:"d-bgc-warning",black100:"d-bgc-info",white:"d-bgc-primary"}[this.colorCode]]}}},E={class:"d-top-banner-info__left"},H={class:"d-top-banner-info__middle d-my4"},P={class:"d-top-banner-info__right d-ta-right"};function q(o,b,h,y,v,_){return p(),d("div",{class:F(["d-fs-100 d-d-flex d-top-banner-info d-jc-space-between d-ai-center d-fc-primary",_.bannerInfoClass]),"data-qa":"banner-info"},[n("div",E,[u(o.$slots,"left")]),n("div",H,[u(o.$slots,"default")]),n("div",P,[u(o.$slots,"right")])],2)}const g=m(S,[["render",q],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/notices/top_banner_info/top_banner_info.vue"]]);S.__docgenInfo={displayName:"DtRecipeTopBannerInfo",exportName:"default",description:"",tags:{},props:[{name:"colorCode",description:"color of the banner background",type:{name:"string"},defaultValue:{func:!1,value:"'green300'"},values:["green300","green100","red200","red100","gold100","gold200","black100","white"]}],slots:[{name:"left"},{name:"default"},{name:"right"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/notices/top_banner_info/top_banner_info.vue"]};const R={name:"DtRecipeTopBannerInfoDefault",components:{DtRecipeTopBannerInfo:g}},J=["innerHTML"],W=["innerHTML"],Y={key:1},G=n("span",{class:"d-fw-medium"},"Caller ID: ",-1),K=["innerHTML"];function Q(o,b,h,y,v,_){const s=f("dt-recipe-top-banner-info");return p(),d(B,null,[V(`
    We can bind the data that the user entered into the storybook controls to props by using a property of the same name
    as the storybook control defined in the corresponding \`.story.js\` file.
  `),t(s,{"color-code":o.$attrs.colorCode},M({default:e(()=>[o.defaultSlot?(p(),d("span",{key:0,innerHTML:o.defaultSlot},null,8,W)):(p(),d("span",Y,[G,a(" Aerolabs Support (415) 583-3482 ")]))]),_:2},[o.$attrs.left?{name:"left",fn:e(()=>[n("span",{innerHTML:o.$attrs.left},null,8,J)]),key:"0"}:{name:"left",fn:e(()=>[n("span",{class:"d-fw-bold"}," Active Call ")]),key:"1"},o.$attrs.right?{name:"right",fn:e(()=>[n("span",{innerHTML:o.$attrs.right},null,8,K)]),key:"2"}:{name:"right",fn:e(()=>[n("span",{class:"d-fw-bold"}," Recording ON ")]),key:"3"}]),1032,["color-code"])],2112)}const U=m(R,[["render",Q],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/notices/top_banner_info/top_banner_info_default.story.vue"]]);R.__docgenInfo={displayName:"DtRecipeTopBannerInfoDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/notices/top_banner_info/top_banner_info_default.story.vue"]};const x={name:"DtRecipeTopBannerInfoVariants",components:{DtButton:j,DtRecipeTopBannerInfo:g,DtIcon:A}},X={class:"d-stack8"},Z=n("span",{class:"d-fw-bold"}," Active Call ",-1),ee=n("span",{class:"d-fw-bold"}," Active Call ",-1),ne=n("span",null,[n("span",{class:"d-fw-medium"},"Caller ID: "),a(" Aerolabs Support (415) 583-3482 ")],-1),oe=n("span",{class:"d-fw-bold"}," Admin is listening in ",-1),te=n("span",{class:"d-fw-bold"}," Connecting Call ",-1),ae=n("span",null,[n("span",{class:"d-fw-medium"},"Your caller ID: "),a(" (415) 555-1234 ")],-1),se=n("span",{class:"d-fw-bold"}," Ringing... ",-1),re=n("span",null,[n("span",{class:"d-fw-medium"},"Your caller ID:"),a(" (415) 555-1234 ")],-1),ie=n("span",{class:"d-fw-bold"},"Joseph Lumaban",-1),le=n("div",{class:"d-fc-critical-strong d-fw-semibold"},[a(" On hold "),n("span",{class:"d-fw-normal"},"00:08")],-1);function ce(o,b,h,y,v,_){const s=f("dt-icon"),r=f("dt-button"),i=f("dt-recipe-top-banner-info");return p(),d(B,null,[V(`
    We can bind the data that the user entered into the storybook controls to props by using a property of the same name
    as the storybook control defined in the corresponding \`.story.js\` file.
  `),n("div",X,[t(i,{class:"","color-code":"gold200"},{left:e(()=>[Z,a(" 3:21 ")]),default:e(()=>[t(r,{importance:"clear","icon-position":"right",size:"xs",kind:"muted",class:"d-px4 d-py0"},{icon:e(()=>[t(s,{name:"arrow-up",size:"200"})]),default:e(()=>[a(" Show 2 calls on hold ")]),_:1})]),_:1}),t(i,{class:"","color-code":"red200"},{left:e(()=>[ee,a(" 3:21 ")]),right:e(()=>[oe,a(" 0:21 ")]),default:e(()=>[ne]),_:1}),t(i,{class:"","color-code":"black100"},{left:e(()=>[te]),default:e(()=>[ae]),_:1}),t(i,{class:"","color-code":"green100"},{left:e(()=>[se]),default:e(()=>[re]),_:1}),t(i,{"color-code":"gold100"},{left:e(()=>[ie,le]),right:e(()=>[t(r,{importance:"clear","icon-position":"right",size:"xs",kind:"muted",class:"d-fc-primary d-p0 d-fw-bold"},{default:e(()=>[a(" Click to answer ")]),_:1}),a(" and put the active call on hold ")]),default:e(()=>[n("div",null,[t(r,{importance:"clear",kind:"muted"},{icon:e(()=>[t(s,{name:"park",size:"300"})]),default:e(()=>[a(" Park ")]),_:1}),t(r,{importance:"clear",kind:"muted"},{icon:e(()=>[t(s,{name:"transfer",size:"300"})]),default:e(()=>[a(" Transfer ")]),_:1}),t(r,{importance:"clear",kind:"danger",class:"d-fc-critical-strong"},{icon:e(()=>[t(s,{name:"phone-hang-up",size:"300"})]),default:e(()=>[a(" End Call ")]),_:1})])]),_:1})])],2112)}const de=m(x,[["render",ce],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/notices/top_banner_info/top_banner_info_variants.story.vue"]]);x.__docgenInfo={displayName:"DtRecipeTopBannerInfoVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/notices/top_banner_info/top_banner_info_variants.story.vue"]};const z={colorCode:"green300",onEvent:O("event")},L={colorCode:{description:"Background color of the banner",options:N,control:{type:"select"}},default:{description:"Display content in the center of the banner",table:{type:{summary:"VNode"}},control:{type:"text"}},left:{name:"left",table:{type:{summary:"VNode"}},control:{type:"text"}},right:{name:"right",table:{type:{summary:"VNode"}},control:{type:"text"}},onEvent:{table:{disable:!0}}},pe={title:"Recipes/Notices/Top Banner Info",component:g,args:z,argTypes:L,excludeStories:/.*Data$/},fe=o=>I(o,U),_e=o=>I(o,de),l={render:fe,args:{}},c={render:_e,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"color-contrast",enabled:!1},{id:"duplicate-id",enabled:!1}]}}}};var k,w,D;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(D=(w=l.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var $,T,C;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {},
  parameters: {
    options: {
      showPanel: false
    },
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }, {
          id: 'duplicate-id',
          enabled: false
        }]
      }
    }
  }
}`,...(C=(T=c.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const ue=["argsData","argTypesData","Default","Variants"],ke=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Variants:c,__namedExportsOrder:ue,argTypesData:L,argsData:z,default:pe},Symbol.toStringTag,{value:"Module"}));export{l as D,ke as T,c as V};
//# sourceMappingURL=top_banner_info.stories-0b7c8cdb.js.map
