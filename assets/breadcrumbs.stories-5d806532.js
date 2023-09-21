import{i as S,h as o}from"./storybook_utils-0b506883.js";import{D as l,a as v}from"./breadcrumbs-be7dd233.js";import{n as D}from"./_plugin-vue2_normalizer-2bbd088e.js";const V={name:"DtBreadcrumbsDefault",components:{DtBreadcrumbs:l,htmlFragment:S}};var C=function(){var e=this,r=e._self._c;return r("div",{class:[{"d-bgc-purple-600":e.inverted}]},[r("dt-breadcrumbs",{staticClass:"d-py16 d-px12",attrs:{breadcrumbs:e.breadcrumbs,inverted:e.inverted}},[e.defaultSlot?r("html-fragment",{attrs:{html:e.defaultSlot}}):e._e()],1)],1)},F=[],y=D(V,C,F,!1,null,null,null,null);const I=y.exports;y.exports.__docgenInfo={displayName:"DtBreadcrumbsDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs_default.story.vue"]};const k={name:"DtBreadcrumbsVariants",components:{DtBreadcrumbs:l,DtBreadcrumbItem:v}};var N=function(){var e=this,r=e._self._c;return r("div",[r("dt-breadcrumbs",{staticClass:"d-py16 d-px12",attrs:{breadcrumbs:e.breadcrumbs}}),r("div",{staticClass:"d-bgc-purple-600 d-py16 d-px12"},[r("dt-breadcrumbs",{attrs:{inverted:"",breadcrumbs:e.breadcrumbs}})],1),r("dt-breadcrumbs",{staticClass:"d-py16 d-px12"},e._l(e.breadcrumbs,function(c,T){return r("dt-breadcrumb-item",e._b({key:c.label+T},"dt-breadcrumb-item",c,!1))}),1)],1)},$=[],h=D(k,N,$,!1,null,null,null,null);const w=h.exports;h.exports.__docgenInfo={displayName:"DtBreadcrumbsVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs_variants.story.vue"]};const B={breadcrumbs:[{href:"#",label:"Root"},{href:"#",label:"Section"},{href:"#",label:"Section"},{href:"#",label:"Section"},{href:"#",label:"Current Page",selected:!0}]},x={default:{control:"text",table:{type:{summary:"VNode"}}},breadcrumbs:{control:"object",table:{defaultValue:{summary:"{ url: string, label: string }[]"}}}},P={title:"Components/Breadcrumbs",component:l,args:B,argTypes:x,excludeStories:/.*Data$/},j=(a,{argTypes:e})=>o(a,e,I),O=(a,{argTypes:e})=>o(a,e,w),R=(a,{argTypes:e})=>o(a,e,v),t={render:j,args:{}},s={render:O,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"landmark-unique",enabled:!1}]}}}},n={render:R,args:{},parameters:{a11y:{config:{rules:[{id:"listitem",enabled:!1}]}}}};var d,m,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var i,b,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(b=s.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var f,_,g;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: BreadcrumbItemTemplate,
  args: {},
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'listitem',
          enabled: false
        }]
      }
    }
  }
}`,...(g=(_=n.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const q=["argsData","argTypesData","Default","Variants","BreadcrumbItem"],A=Object.freeze(Object.defineProperty({__proto__:null,BreadcrumbItem:n,Default:t,Variants:s,__namedExportsOrder:q,argTypesData:x,argsData:B,default:P},Symbol.toStringTag,{value:"Module"}));export{A as B,t as D,s as V,n as a};
//# sourceMappingURL=breadcrumbs.stories-5d806532.js.map
