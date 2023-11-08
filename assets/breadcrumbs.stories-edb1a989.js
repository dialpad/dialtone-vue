import{c as b}from"./storybook_utils-cf049d2e.js";import{D as n}from"./breadcrumbs-99724056.js";import{h as y}from"./utils-9173caed.js";import{n as p}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as h}from"./breadcrumb_item-23f042bd.js";const x={name:"DtBreadcrumbsDefault",components:{DtBreadcrumbs:n,htmlFragment:y}};var $=function(){var e=this,r=e._self._c;return r("div",{class:[{"d-bgc-purple-600":e.inverted}]},[r("dt-breadcrumbs",{staticClass:"d-py16 d-px12",attrs:{breadcrumbs:e.$attrs.breadcrumbs,inverted:e.$attrs.inverted}},[e.$attrs.default?r("html-fragment",{attrs:{html:e.$attrs.default}}):e._e()],1)],1)},B=[],f=p(x,$,B,!1,null,null,null,null);const T=f.exports;f.exports.__docgenInfo={displayName:"DtBreadcrumbsDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs_default.story.vue"]};const V={name:"DtBreadcrumbsVariants",components:{DtBreadcrumbs:n,DtBreadcrumbItem:h}};var S=function(){var e=this,r=e._self._c;return r("div",[r("dt-breadcrumbs",{staticClass:"d-py16 d-px12",attrs:{breadcrumbs:e.$attrs.breadcrumbs}}),r("div",{staticClass:"d-bgc-purple-600 d-py16 d-px12"},[r("dt-breadcrumbs",{attrs:{inverted:"",breadcrumbs:e.$attrs.breadcrumbs}})],1),r("dt-breadcrumbs",{staticClass:"d-py16 d-px12"},e._l(e.$attrs.breadcrumbs,function(o,D){return r("dt-breadcrumb-item",e._b({key:o.label+D},"dt-breadcrumb-item",o,!1))}),1)],1)},C=[],_=p(V,S,C,!1,null,null,null,null);const F=_.exports;_.exports.__docgenInfo={displayName:"DtBreadcrumbsVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs_variants.story.vue"]};const g={breadcrumbs:[{href:"#",label:"Root"},{href:"#",label:"Section"},{href:"#",label:"Section"},{href:"#",label:"Section"},{href:"#",label:"Current Page",selected:!0}]},v={default:{control:"text",table:{type:{summary:"VNode"}}},breadcrumbs:{control:"object",table:{defaultValue:{summary:"{ href: string, label: string }[]"}}}},k={title:"Components/Breadcrumbs",component:n,args:g,argTypes:v,excludeStories:/.*Data$/},N=(a,{argTypes:e})=>b(a,e,T),w=(a,{argTypes:e})=>b(a,e,F),t={render:N,args:{}},s={render:w,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"landmark-unique",enabled:!1}]}}}};var l,c,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(i=(u=s.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const P=["argsData","argTypesData","Default","Variants"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Variants:s,__namedExportsOrder:P,argTypesData:v,argsData:g,default:k},Symbol.toStringTag,{value:"Module"}));export{z as B,t as D,s as V};
//# sourceMappingURL=breadcrumbs.stories-edb1a989.js.map
