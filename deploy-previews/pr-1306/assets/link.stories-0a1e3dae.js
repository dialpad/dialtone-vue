import{c as h}from"./storybook_utils-182ea7b7.js";import{a as i}from"./chunk-AY7I2SME-5eb1ab46.js";import{D as p}from"./link-76dbdeb2.js";import{s as b,o as r,k as l,u as D,w as c,x as u,y as F,F as S,z as x,b as O,e as z}from"./vue.esm-bundler-81c53cfe.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import{L as d,I as B}from"./link_constants-8ea95ec9.js";const $={name:"DtLinkDefault",components:{DtLink:p},inheritAttrs:!1};function E(e,t,C,I,w,m){const o=b("dt-link");return r(),l("div",null,[D(o,{href:e.$attrs.href,kind:e.$attrs.kind,rel:e.$attrs.rel,onClick:e.$attrs.onClick,onFocusin:e.$attrs.onFocusIn,onFocusout:e.$attrs.onFocusOut},{default:c(()=>[u(F(e.defaultSlot),1)]),_:1},8,["href","kind","rel","onClick","onFocusin","onFocusout"])])}const A=T($,[["render",E],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/link/link_default.story.vue"]]);$.__docgenInfo={displayName:"DtLinkDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/link/link_default.story.vue"]};const L={name:"DtLinkVariants",components:{DtLink:p},data(){return{LINK_VARIANTS:d}},computed:{filteredKindClasses(){return d.filter(e=>e!==B)}}},K={class:"d-bgc-purple-600"};function M(e,t,C,I,w,m){const o=b("dt-link");return r(),l("div",null,[(r(!0),l(S,null,x(m.filteredKindClasses,s=>(r(),O(o,{key:s,href:"#",kind:s,class:"d-tt-capitalize d-mr8"},{default:c(()=>[u(F(s)+" link ",1)]),_:2},1032,["kind"]))),128)),z("div",K,[D(o,{kind:"inverted",href:"#",class:"d-tt-capitalize"},{default:c(()=>[u(" Inverted link ")]),_:1})])])}const P=T(L,[["render",M],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/link/link_variants.story.vue"]]);L.__docgenInfo={displayName:"DtLinkVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/link/link_variants.story.vue"]};const V={default:"Default link",href:"#",kind:"",rel:void 0,onClick:i("click"),onFocusIn:i("focusin"),onFocusOut:i("focusout")},N={default:{control:"text",table:{type:{summary:"VNode"}}},kind:{options:d,control:{type:"select"}},href:{description:"HTML a href attribute",type:{summary:"string"},table:{category:"html attributes"},control:"text"},rel:{description:`HTML a rel attribute. Relationship between the location in the document containing the hyperlink
        and the destination resource.`,type:{summary:"string"},table:{category:"html attributes"},control:"text"},onClick:{table:{disable:!0}},onFocusIn:{table:{disable:!0}},onFocusOut:{table:{disable:!0}},click:{description:"Native click event",table:{type:{summary:"event"}}},focusin:{description:"Native focusin event",table:{type:{summary:"event"}}},focusout:{description:"Native focusout event",table:{type:{summary:"event"}}}},R={title:"Components/Link",component:p,args:V,argTypes:N,excludeStories:/.*Data$/},j=(e,{argTypes:t})=>h(e,t,A),H=(e,{argTypes:t})=>h(e,t,P),n={render:j,args:{}},a={render:H,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}};var f,k,_;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(_=(k=n.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var y,v,g;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(g=(v=a.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const q=["argsData","argTypesData","Default","Variants"],Y=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Variants:a,__namedExportsOrder:q,argTypesData:N,argsData:V,default:R},Symbol.toStringTag,{value:"Module"}));export{n as D,Y as L,a as V};
//# sourceMappingURL=link.stories-0a1e3dae.js.map
