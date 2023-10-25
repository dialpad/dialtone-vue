import{c as h}from"./storybook_utils-d9dec137.js";import{a as s}from"./chunk-AY7I2SME-5eb1ab46.js";import{D as d}from"./link-eb563172.js";import{u as b,o as r,p as i,y as D,w as l,z as c,A as v,F as w,B as x,b as O,e as B}from"./vue.esm-bundler-29004354.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";import{L as u,I as z}from"./link_constants-8ea95ec9.js";const T={name:"DtLinkDefault",components:{DtLink:d},inheritAttrs:!1};function A(e,N,C,I,S,p){const a=b("dt-link");return r(),i("div",null,[D(a,{href:e.$attrs.href,kind:e.$attrs.kind,rel:e.$attrs.rel,onClick:e.$attrs.onClick,onFocusin:e.$attrs.onFocusIn,onFocusout:e.$attrs.onFocusOut},{default:l(()=>[c(v(e.defaultSlot),1)]),_:1},8,["href","kind","rel","onClick","onFocusin","onFocusout"])])}const E=F(T,[["render",A]]);T.__docgenInfo={displayName:"DtLinkDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/link/link_default.story.vue"]};const $={name:"DtLinkVariants",components:{DtLink:d},data(){return{LINK_VARIANTS:u}},computed:{filteredKindClasses(){return u.filter(e=>e!==z)}}},K={class:"d-bgc-purple-600"};function M(e,N,C,I,S,p){const a=b("dt-link");return r(),i("div",null,[(r(!0),i(w,null,x(p.filteredKindClasses,o=>(r(),O(a,{key:o,href:"#",kind:o,class:"d-tt-capitalize d-mr8"},{default:l(()=>[c(v(o)+" link ",1)]),_:2},1032,["kind"]))),128)),B("div",K,[D(a,{kind:"inverted",href:"#",class:"d-tt-capitalize"},{default:l(()=>[c(" Inverted link ")]),_:1})])])}const P=F($,[["render",M]]);$.__docgenInfo={displayName:"DtLinkVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/link/link_variants.story.vue"]};const L={default:"Default link",href:"#",kind:"",rel:void 0,onClick:s("click"),onFocusIn:s("focusin"),onFocusOut:s("focusout")},V={default:{control:"text",table:{type:{summary:"VNode"}}},kind:{options:u,control:{type:"select"}},href:{description:"HTML a href attribute",type:{summary:"string"},table:{category:"html attributes"},control:"text"},rel:{description:`HTML a rel attribute. Relationship between the location in the document containing the hyperlink
        and the destination resource.`,type:{summary:"string"},table:{category:"html attributes"},control:"text"},onClick:{table:{disable:!0}},onFocusIn:{table:{disable:!0}},onFocusOut:{table:{disable:!0}},click:{description:"Native click event",table:{type:{summary:"event"}}},focusin:{description:"Native focusin event",table:{type:{summary:"event"}}},focusout:{description:"Native focusout event",table:{type:{summary:"event"}}}},R={title:"Components/Link",component:d,args:L,argTypes:V,excludeStories:/.*Data$/},j=e=>h(e,E),H=e=>h(e,P),t={render:j,args:{}},n={render:H,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}};var m,f,k;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(k=(f=t.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var _,y,g;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const q=["argsData","argTypesData","Default","Variants"],Y=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Variants:n,__namedExportsOrder:q,argTypesData:V,argsData:L,default:R},Symbol.toStringTag,{value:"Module"}));export{t as D,Y as L,n as V};
//# sourceMappingURL=link.stories-8b84cac7.js.map
