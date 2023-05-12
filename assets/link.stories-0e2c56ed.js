import{c as _}from"./storybook_utils-720f34d4.js";import{a as o}from"./chunk-OPEUWD42-a3b45fd8.js";import{D as l}from"./link-ea758f3d.js";import{n as k}from"./_plugin-vue2_normalizer-2bbd088e.js";import{a as i,I as D}from"./link_constants-51338c78.js";const h={name:"DtLinkDefault",components:{DtLink:l},inheritAttrs:!1};var T=function(){var e=this,n=e._self._c;return n("div",[n("dt-link",{attrs:{href:e.href,kind:e.kind,rel:e.rel},on:{click:e.onClick,focusin:e.onFocusIn,focusout:e.onFocusOut}},[e._v(" "+e._s(e.defaultSlot)+" ")])],1)},L=[],v=k(h,T,L,!1,null,null,null,null);const x=v.exports;v.exports.__docgenInfo={displayName:"DtLinkDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/link/link_default.story.vue"]};const F={name:"DtLinkVariants",components:{DtLink:l},data(){return{LINK_VARIANTS:i}},computed:{filteredKindClasses(){return i.filter(t=>t!==D)}}};var V=function(){var e=this,n=e._self._c;return n("div",[e._l(e.filteredKindClasses,function(s){return n("dt-link",{key:s,staticClass:"d-tt-capitalize d-mr8",attrs:{href:"#",kind:s}},[e._v(" "+e._s(s)+" link ")])}),n("div",{staticClass:"d-bgc-purple-600"},[n("dt-link",{staticClass:"d-tt-capitalize",attrs:{kind:"inverted",href:"#"}},[e._v(" Inverted link ")])],1)],2)},N=[],y=k(F,V,N,!1,null,null,null,null);const C=y.exports;y.exports.__docgenInfo={displayName:"DtLinkVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/link/link_variants.story.vue"]};const g={default:"Default link",href:"#",kind:"",rel:void 0,onClick:o("click"),onFocusIn:o("focusin"),onFocusOut:o("focusout")},b={default:{control:"text",table:{type:{summary:"VNode"}}},kind:{options:i,control:{type:"select"}},href:{description:"HTML a href attribute",type:{summary:"string"},table:{category:"html attributes"},control:"text"},rel:{description:`HTML a rel attribute. Relationship between the location in the document containing the hyperlink
        and the destination resource.`,type:{summary:"string"},table:{category:"html attributes"},control:"text"},onClick:{table:{disable:!0}},onFocusIn:{table:{disable:!0}},onFocusOut:{table:{disable:!0}},click:{description:"Native click event",table:{type:{summary:"event"}}},focusin:{description:"Native focusin event",table:{type:{summary:"event"}}},focusout:{description:"Native focusout event",table:{type:{summary:"event"}}}},I={title:"Components/Link",component:l,args:g,argTypes:b,excludeStories:/.*Data$/},S=(t,{argTypes:e})=>_(t,e,x),O=(t,{argTypes:e})=>_(t,e,C),a={render:S,args:{}},r={render:O,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}};var c,u,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(f=(m=r.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const w=["argsData","argTypesData","Default","Variants"],K=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Variants:r,__namedExportsOrder:w,argTypesData:b,argsData:g,default:I},Symbol.toStringTag,{value:"Module"}));export{a as D,K as L,r as V};
//# sourceMappingURL=link.stories-0e2c56ed.js.map
