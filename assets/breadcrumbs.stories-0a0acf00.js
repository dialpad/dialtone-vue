import{i as y,h as b}from"./storybook_utils-52560a53.js";import{D as n}from"./breadcrumbs-1f7fd1af.js";import{n as p}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as h}from"./breadcrumb_item-23f042bd.js";const x={name:"DtBreadcrumbsDefault",components:{DtBreadcrumbs:n,htmlFragment:y}};var B=function(){var e=this,r=e._self._c;return r("div",{class:[{"d-bgc-purple-600":e.inverted}]},[r("dt-breadcrumbs",{staticClass:"d-py16 d-px12",attrs:{breadcrumbs:e.breadcrumbs,inverted:e.inverted}},[e.defaultSlot?r("html-fragment",{attrs:{html:e.defaultSlot}}):e._e()],1)],1)},S=[],f=p(x,B,S,!1,null,null,null,null);const T=f.exports;f.exports.__docgenInfo={displayName:"DtBreadcrumbsDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs_default.story.vue"]};const V={name:"DtBreadcrumbsVariants",components:{DtBreadcrumbs:n,DtBreadcrumbItem:h}};var C=function(){var e=this,r=e._self._c;return r("div",[r("dt-breadcrumbs",{staticClass:"d-py16 d-px12",attrs:{breadcrumbs:e.breadcrumbs}}),r("div",{staticClass:"d-bgc-purple-600 d-py16 d-px12"},[r("dt-breadcrumbs",{attrs:{inverted:"",breadcrumbs:e.breadcrumbs}})],1),r("dt-breadcrumbs",{staticClass:"d-py16 d-px12"},e._l(e.breadcrumbs,function(o,D){return r("dt-breadcrumb-item",e._b({key:o.label+D},"dt-breadcrumb-item",o,!1))}),1)],1)},F=[],_=p(V,C,F,!1,null,null,null,null);const k=_.exports;_.exports.__docgenInfo={displayName:"DtBreadcrumbsVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs_variants.story.vue"]};const g={breadcrumbs:[{href:"#",label:"Root"},{href:"#",label:"Section"},{href:"#",label:"Section"},{href:"#",label:"Section"},{href:"#",label:"Current Page",selected:!0}]},v={default:{control:"text",table:{type:{summary:"VNode"}}},breadcrumbs:{control:"object",table:{defaultValue:{summary:"{ href: string, label: string }[]"}}}},N={title:"Components/Breadcrumbs",component:n,args:g,argTypes:v,excludeStories:/.*Data$/},$=(a,{argTypes:e})=>b(a,e,T),w=(a,{argTypes:e})=>b(a,e,k),t={render:$,args:{}},s={render:w,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"landmark-unique",enabled:!1}]}}}};var l,c,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,u,i;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {},
  parameters: {
    options: {
      showPanel: false
    },
    a11y: {
      config: {
        rules: [{
          id: 'landmark-unique',
          enabled: false
        }]
      }
    }
  }
}`,...(i=(u=s.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const P=["argsData","argTypesData","Default","Variants"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Variants:s,__namedExportsOrder:P,argTypesData:v,argsData:g,default:N},Symbol.toStringTag,{value:"Module"}));export{q as B,t as D,s as V};
//# sourceMappingURL=breadcrumbs.stories-0a0acf00.js.map
