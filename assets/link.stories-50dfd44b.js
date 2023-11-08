import{c as _}from"./storybook_utils-cf049d2e.js";import{a as o}from"./chunk-AY7I2SME-5eb1ab46.js";import{D as l}from"./link-fde1f7cd.js";import{n as k}from"./_plugin-vue2_normalizer-2bbd088e.js";import{L as i,I as D}from"./link_constants-8ea95ec9.js";const h={name:"DtLinkDefault",components:{DtLink:l},inheritAttrs:!1};var T=function(){var e=this,n=e._self._c;return n("div",[n("dt-link",{attrs:{href:e.$attrs.href,kind:e.$attrs.kind,rel:e.$attrs.rel},on:{click:e.$attrs.onClick,focusin:e.$attrs.onFocusIn,focusout:e.$attrs.onFocusOut}},[e._v(" "+e._s(e.$attrs.default)+" ")])],1)},L=[],v=k(h,T,L,!1,null,null,null,null);const x=v.exports;v.exports.__docgenInfo={displayName:"DtLinkDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/link/link_default.story.vue"]};const F={name:"DtLinkVariants",components:{DtLink:l},data(){return{LINK_VARIANTS:i}},computed:{filteredKindClasses(){return i.filter(t=>t!==D)}}};var V=function(){var e=this,n=e._self._c;return n("div",[e._l(e.filteredKindClasses,function(s){return n("dt-link",{key:s,staticClass:"d-tt-capitalize d-mr8",attrs:{href:"#",kind:s}},[e._v(" "+e._s(s)+" link ")])}),n("div",{staticClass:"d-bgc-purple-600"},[n("dt-link",{staticClass:"d-tt-capitalize",attrs:{kind:"inverted",href:"#"}},[e._v(" Inverted link ")])],1)],2)},$=[],y=k(F,V,$,!1,null,null,null,null);const N=y.exports;y.exports.__docgenInfo={displayName:"DtLinkVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/link/link_variants.story.vue"]};const g={default:"Default link",href:"#",kind:"",rel:void 0,onClick:o("click"),onFocusIn:o("focusin"),onFocusOut:o("focusout")},b={default:{control:"text",table:{type:{summary:"VNode"}}},kind:{options:i,control:{type:"select"}},href:{description:"HTML a href attribute",type:{summary:"string"},table:{category:"html attributes"},control:"text"},rel:{description:`HTML a rel attribute. Relationship between the location in the document containing the hyperlink
        and the destination resource.`,type:{summary:"string"},table:{category:"html attributes"},control:"text"},onClick:{table:{disable:!0}},onFocusIn:{table:{disable:!0}},onFocusOut:{table:{disable:!0}},click:{description:"Native click event",table:{type:{summary:"event"}}},focusin:{description:"Native focusin event",table:{type:{summary:"event"}}},focusout:{description:"Native focusout event",table:{type:{summary:"event"}}}},C={title:"Components/Link",component:l,args:g,argTypes:b,excludeStories:/.*Data$/},I=(t,{argTypes:e})=>_(t,e,x),S=(t,{argTypes:e})=>_(t,e,N),a={render:I,args:{}},r={render:S,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}};var c,u,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,m,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(m=r.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const O=["argsData","argTypesData","Default","Variants"],K=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Variants:r,__namedExportsOrder:O,argTypesData:b,argsData:g,default:C},Symbol.toStringTag,{value:"Module"}));export{a as D,K as L,r as V};
//# sourceMappingURL=link.stories-50dfd44b.js.map
