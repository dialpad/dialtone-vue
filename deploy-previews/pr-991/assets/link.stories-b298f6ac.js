import{c as k}from"./storybook_utils-b160963d.js";import{a as s}from"./chunk-OPEUWD42-a3b45fd8.js";import{D as l}from"./link-4fdbe64c.js";import{n as y}from"./_plugin-vue2_normalizer-2bbd088e.js";import{a as i,I as T}from"./link_constants-51338c78.js";const L={name:"DtLinkDefault",components:{DtLink:l},inheritAttrs:!1};var g=function(){var e=this,n=e._self._c;return n("div",[n("dt-link",{attrs:{href:e.href,kind:e.kind,rel:e.rel},on:{click:e.onClick,focusin:e.onFocusIn,focusout:e.onFocusOut}},[e._v(" "+e._s(e.defaultSlot)+" ")])],1)},x=[];g._withStripped=!0;var c=y(L,g,x,!1,null,null,null,null);c.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/link/link_default.story.vue";const F=c.exports;c.exports.__docgenInfo={displayName:"DtLinkDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/link/link_default.story.vue"]};const V={name:"DtLinkVariants",components:{DtLink:l},data(){return{LINK_VARIANTS:i}},computed:{filteredKindClasses(){return i.filter(t=>t!==T)}}};var h=function(){var e=this,n=e._self._c;return n("div",[e._l(e.filteredKindClasses,function(o){return n("dt-link",{key:o,staticClass:"d-tt-capitalize d-mr8",attrs:{href:"#",kind:o}},[e._v(" "+e._s(o)+" link ")])}),n("div",{staticClass:"d-bgc-purple-600"},[n("dt-link",{staticClass:"d-tt-capitalize",attrs:{kind:"inverted",href:"#"}},[e._v(" Inverted link ")])],1)],2)},N=[];h._withStripped=!0;var u=y(V,h,N,!1,null,null,null,null);u.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/link/link_variants.story.vue";const C=u.exports;u.exports.__docgenInfo={displayName:"DtLinkVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/link/link_variants.story.vue"]};const b={default:"Default link",href:"#",kind:"",rel:void 0,onClick:s("click"),onFocusIn:s("focusin"),onFocusOut:s("focusout")},D={default:{control:"text",table:{type:{summary:"VNode"}}},kind:{options:i,control:{type:"select"}},href:{description:"HTML a href attribute",type:{summary:"string"},table:{category:"html attributes"},control:"text"},rel:{description:`HTML a rel attribute. Relationship between the location in the document containing the hyperlink
        and the destination resource.`,type:{summary:"string"},table:{category:"html attributes"},control:"text"},onClick:{table:{disable:!0}},onFocusIn:{table:{disable:!0}},onFocusOut:{table:{disable:!0}},click:{description:"Native click event",table:{type:{summary:"event"}}},focusin:{description:"Native focusin event",table:{type:{summary:"event"}}},focusout:{description:"Native focusout event",table:{type:{summary:"event"}}}},I={title:"Components/Link",component:l,args:b,argTypes:D,excludeStories:/.*Data$/},S=(t,{argTypes:e})=>k(t,e,F),w=(t,{argTypes:e})=>k(t,e,C),r={render:S,args:{}},a={render:w,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}};var d,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,_,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(_=a.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};const O=["argsData","argTypesData","Default","Variants"],K=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:a,__namedExportsOrder:O,argTypesData:D,argsData:b,default:I},Symbol.toStringTag,{value:"Module"}));export{r as D,K as L,a as V};
//# sourceMappingURL=link.stories-b298f6ac.js.map
