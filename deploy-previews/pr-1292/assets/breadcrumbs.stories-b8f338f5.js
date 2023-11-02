import{c as f}from"./storybook_utils-6d48caaf.js";import{D as n}from"./breadcrumbs-7b150863.js";import{h as x}from"./utils-5c0bb241.js";import{n as _}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as $}from"./breadcrumb_item-30fa3087.js";const B={name:"DtBreadcrumbsDefault",components:{DtBreadcrumbs:n,htmlFragment:x}};var v=function(){var e=this,r=e._self._c;return r("div",{class:[{"d-bgc-purple-600":e.inverted}]},[r("dt-breadcrumbs",{staticClass:"d-py16 d-px12",attrs:{breadcrumbs:e.$attrs.breadcrumbs,inverted:e.$attrs.inverted}},[e.$attrs.default?r("html-fragment",{attrs:{html:e.$attrs.default}}):e._e()],1)],1)},S=[];v._withStripped=!0;var o=_(B,v,S,!1,null,null,null,null);o.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs_default.story.vue";const T=o.exports;o.exports.__docgenInfo={displayName:"DtBreadcrumbsDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs_default.story.vue"]};const V={name:"DtBreadcrumbsVariants",components:{DtBreadcrumbs:n,DtBreadcrumbItem:$}};var g=function(){var e=this,r=e._self._c;return r("div",[r("dt-breadcrumbs",{staticClass:"d-py16 d-px12",attrs:{breadcrumbs:e.$attrs.breadcrumbs}}),r("div",{staticClass:"d-bgc-purple-600 d-py16 d-px12"},[r("dt-breadcrumbs",{attrs:{inverted:"",breadcrumbs:e.$attrs.breadcrumbs}})],1),r("dt-breadcrumbs",{staticClass:"d-py16 d-px12"},e._l(e.$attrs.breadcrumbs,function(d,h){return r("dt-breadcrumb-item",e._b({key:d.label+h},"dt-breadcrumb-item",d,!1))}),1)],1)},w=[];g._withStripped=!0;var l=_(V,g,w,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs_variants.story.vue";const k=l.exports;l.exports.__docgenInfo={displayName:"DtBreadcrumbsVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs_variants.story.vue"]};const D={breadcrumbs:[{href:"#",label:"Root"},{href:"#",label:"Section"},{href:"#",label:"Section"},{href:"#",label:"Section"},{href:"#",label:"Current Page",selected:!0}]},y={default:{control:"text",table:{type:{summary:"VNode"}}},breadcrumbs:{control:"object",table:{defaultValue:{summary:"{ href: string, label: string }[]"}}}},C={title:"Components/Breadcrumbs",component:n,args:D,argTypes:y,excludeStories:/.*Data$/},F=(a,{argTypes:e})=>f(a,e,T),N=(a,{argTypes:e})=>f(a,e,k),t={render:F,args:{}},s={render:N,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"landmark-unique",enabled:!1}]}}}};var c,u,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var i,b,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(b=s.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};const P=["argsData","argTypesData","Default","Variants"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Variants:s,__namedExportsOrder:P,argTypesData:y,argsData:D,default:C},Symbol.toStringTag,{value:"Module"}));export{z as B,t as D,s as V};
//# sourceMappingURL=breadcrumbs.stories-b8f338f5.js.map
