import{c as g}from"./storybook_utils-c9ca045c.js";import{a as s}from"./chunk-AY7I2SME-5eb1ab46.js";import{D as d}from"./link-3014620a.js";import{u as h,o,p as i,y as b,w as l,z as c,A as D,F as S,B as x,b as O,e as B}from"./vue.esm-bundler-a1916ad5.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";import{L as u,I as z}from"./link_constants-8ea95ec9.js";const T={name:"DtLinkDefault",components:{DtLink:d},inheritAttrs:!1};function A(e,N,C,I,w,p){const a=h("dt-link");return o(),i("div",null,[b(a,{href:e.$attrs.href,kind:e.$attrs.kind,rel:e.$attrs.rel,onClick:e.$attrs.onClick,onFocusin:e.$attrs.onFocusIn,onFocusout:e.$attrs.onFocusOut},{default:l(()=>[c(D(e.defaultSlot),1)]),_:1},8,["href","kind","rel","onClick","onFocusin","onFocusout"])])}const E=F(T,[["render",A],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/link/link_default.story.vue"]]);T.__docgenInfo={displayName:"DtLinkDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/link/link_default.story.vue"]};const $={name:"DtLinkVariants",components:{DtLink:d},data(){return{LINK_VARIANTS:u}},computed:{filteredKindClasses(){return u.filter(e=>e!==z)}}},K={class:"d-bgc-purple-600"};function M(e,N,C,I,w,p){const a=h("dt-link");return o(),i("div",null,[(o(!0),i(S,null,x(p.filteredKindClasses,r=>(o(),O(a,{key:r,href:"#",kind:r,class:"d-tt-capitalize d-mr8"},{default:l(()=>[c(D(r)+" link ",1)]),_:2},1032,["kind"]))),128)),B("div",K,[b(a,{kind:"inverted",href:"#",class:"d-tt-capitalize"},{default:l(()=>[c(" Inverted link ")]),_:1})])])}const P=F($,[["render",M],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/link/link_variants.story.vue"]]);$.__docgenInfo={displayName:"DtLinkVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/link/link_variants.story.vue"]};const L={default:"Default link",href:"#",kind:"",rel:void 0,onClick:s("click"),onFocusIn:s("focusin"),onFocusOut:s("focusout")},V={default:{control:"text",table:{type:{summary:"VNode"}}},kind:{options:u,control:{type:"select"}},href:{description:"HTML a href attribute",type:{summary:"string"},table:{category:"html attributes"},control:"text"},rel:{description:`HTML a rel attribute. Relationship between the location in the document containing the hyperlink
        and the destination resource.`,type:{summary:"string"},table:{category:"html attributes"},control:"text"},onClick:{table:{disable:!0}},onFocusIn:{table:{disable:!0}},onFocusOut:{table:{disable:!0}},click:{description:"Native click event",table:{type:{summary:"event"}}},focusin:{description:"Native focusin event",table:{type:{summary:"event"}}},focusout:{description:"Native focusout event",table:{type:{summary:"event"}}}},R={title:"Components/Link",component:d,args:L,argTypes:V,excludeStories:/.*Data$/},j=e=>g(e,E),H=e=>g(e,P),t={render:j,args:{}},n={render:H,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}};var m,f,k;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(k=(f=t.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var _,y,v;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const q=["argsData","argTypesData","Default","Variants"],Y=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Variants:n,__namedExportsOrder:q,argTypesData:V,argsData:L,default:R},Symbol.toStringTag,{value:"Module"}));export{t as D,Y as L,n as V};
//# sourceMappingURL=link.stories-f9f47a06.js.map
