import{a as x}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as T}from"./storybook_utils-182ea7b7.js";import{D as u,C as L}from"./top_banner_info-147527ba.js";import{s as p,o as f,k as _,f as k,u as o,C as O,w as e,e as n,x as t,F as v}from"./vue.esm-bundler-81c53cfe.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{D as z}from"./button-878f62d6.js";import{D as M}from"./icon-8dfe7109.js";const $={name:"DtRecipeTopBannerInfoDefault",components:{DtRecipeTopBannerInfo:u}},A=["innerHTML"],E=["innerHTML"],F={key:1},H=n("span",{class:"d-fw-medium"},"Caller ID: ",-1),j=["innerHTML"];function P(a,r,B,N,S,R){const s=p("dt-recipe-top-banner-info");return f(),_(v,null,[k(`
    We can bind the data that the user entered into the storybook controls to props by using a property of the same name
    as the storybook control defined in the corresponding \`.story.js\` file.
  `),o(s,{"color-code":a.$attrs.colorCode},O({default:e(()=>[a.defaultSlot?(f(),_("span",{key:0,innerHTML:a.defaultSlot},null,8,E)):(f(),_("span",F,[H,t(" Aerolabs Support (415) 583-3482 ")]))]),_:2},[a.$attrs.left?{name:"left",fn:e(()=>[n("span",{innerHTML:a.$attrs.left},null,8,A)]),key:"0"}:{name:"left",fn:e(()=>[n("span",{class:"d-fw-bold"}," Active Call ")]),key:"1"},a.$attrs.right?{name:"right",fn:e(()=>[n("span",{innerHTML:a.$attrs.right},null,8,j)]),key:"2"}:{name:"right",fn:e(()=>[n("span",{class:"d-fw-bold"}," Recording ON ")]),key:"3"}]),1032,["color-code"])],2112)}const W=w($,[["render",P],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/notices/top_banner_info/top_banner_info_default.story.vue"]]);$.__docgenInfo={displayName:"DtRecipeTopBannerInfoDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/notices/top_banner_info/top_banner_info_default.story.vue"]};const C={name:"DtRecipeTopBannerInfoVariants",components:{DtButton:z,DtRecipeTopBannerInfo:u,DtIcon:M}},Y={class:"d-stack8"},J=n("span",{class:"d-fw-bold"}," Active Call ",-1),q=n("span",{class:"d-fw-bold"}," Active Call ",-1),G=n("span",null,[n("span",{class:"d-fw-medium"},"Caller ID: "),t(" Aerolabs Support (415) 583-3482 ")],-1),K=n("span",{class:"d-fw-bold"}," Admin is listening in ",-1),Q=n("span",{class:"d-fw-bold"}," Connecting Call ",-1),U=n("span",null,[n("span",{class:"d-fw-medium"},"Your caller ID: "),t(" (415) 555-1234 ")],-1),X=n("span",{class:"d-fw-bold"}," Ringing... ",-1),Z=n("span",null,[n("span",{class:"d-fw-medium"},"Your caller ID:"),t(" (415) 555-1234 ")],-1),ee=n("span",{class:"d-fw-bold"},"Joseph Lumaban",-1),ne=n("div",{class:"d-fc-critical-strong d-fw-semibold"},[t(" On hold "),n("span",{class:"d-fw-normal"},"00:08")],-1);function oe(a,r,B,N,S,R){const s=p("dt-icon"),l=p("dt-button"),c=p("dt-recipe-top-banner-info");return f(),_(v,null,[k(`
    We can bind the data that the user entered into the storybook controls to props by using a property of the same name
    as the storybook control defined in the corresponding \`.story.js\` file.
  `),n("div",Y,[o(c,{class:"","color-code":"gold200"},{left:e(()=>[J,t(" 3:21 ")]),default:e(()=>[o(l,{importance:"clear","icon-position":"right",size:"xs",kind:"muted",class:"d-px4 d-py0"},{icon:e(()=>[o(s,{name:"arrow-up",size:"200"})]),default:e(()=>[t(" Show 2 calls on hold ")]),_:1})]),_:1}),o(c,{class:"","color-code":"red200"},{left:e(()=>[q,t(" 3:21 ")]),right:e(()=>[K,t(" 0:21 ")]),default:e(()=>[G]),_:1}),o(c,{class:"","color-code":"black100"},{left:e(()=>[Q]),default:e(()=>[U]),_:1}),o(c,{class:"","color-code":"green100"},{left:e(()=>[X]),default:e(()=>[Z]),_:1}),o(c,{"color-code":"gold100"},{left:e(()=>[ee,ne]),right:e(()=>[o(l,{importance:"clear","icon-position":"right",size:"xs",kind:"muted",class:"d-fc-primary d-p0 d-fw-bold"},{default:e(()=>[t(" Click to answer ")]),_:1}),t(" and put the active call on hold ")]),default:e(()=>[n("div",null,[o(l,{importance:"clear",kind:"muted"},{icon:e(()=>[o(s,{name:"park",size:"300"})]),default:e(()=>[t(" Park ")]),_:1}),o(l,{importance:"clear",kind:"muted"},{icon:e(()=>[o(s,{name:"transfer",size:"300"})]),default:e(()=>[t(" Transfer ")]),_:1}),o(l,{importance:"clear",kind:"danger",class:"d-fc-critical-strong"},{icon:e(()=>[o(s,{name:"phone-hang-up",size:"300"})]),default:e(()=>[t(" End Call ")]),_:1})])]),_:1})])],2112)}const te=w(C,[["render",oe],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/notices/top_banner_info/top_banner_info_variants.story.vue"]]);C.__docgenInfo={displayName:"DtRecipeTopBannerInfoVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/notices/top_banner_info/top_banner_info_variants.story.vue"]};const I={colorCode:"green300",onEvent:x("event")},V={colorCode:{description:"Background color of the banner",options:L,control:{type:"select"}},default:{description:"Display content in the center of the banner",table:{type:{summary:"VNode"}},control:{type:"text"}},left:{name:"left",table:{type:{summary:"VNode"}},control:{type:"text"}},right:{name:"right",table:{type:{summary:"VNode"}},control:{type:"text"}},onEvent:{table:{disable:!0}}},ae={title:"Recipes/Notices/Top Banner Info",component:u,args:I,argTypes:V,excludeStories:/.*Data$/},se=(a,{argTypes:r})=>T(a,r,W),re=(a,{argTypes:r})=>T(a,r,te),i={render:se,args:{}},d={render:re,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}};var m,h,b;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var g,y,D;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
        }]
      }
    }
  }
}`,...(D=(y=d.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};const le=["argsData","argTypesData","Default","Variants"],me=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Variants:d,__namedExportsOrder:le,argTypesData:V,argsData:I,default:ae},Symbol.toStringTag,{value:"Module"}));export{i as D,me as T,d as V};
//# sourceMappingURL=top_banner_info.stories-a566eb0e.js.map
