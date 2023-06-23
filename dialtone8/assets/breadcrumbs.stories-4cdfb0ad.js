import{u as R,h as V,c as u}from"./storybook_utils-31ede21d.js";import{D as k}from"./link-ea758f3d.js";import{I as S,M as $}from"./link_constants-51338c78.js";import{n as d}from"./_plugin-vue2_normalizer-2bbd088e.js";const C="d-breadcrumbs__item--selected",F="d-breadcrumbs--inverted",M={name:"DtBreadcrumbItem",components:{DtLink:k},inheritAttrs:!1,props:{inverted:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},label:{type:String,default:""}},data(){return{BREADCRUMB_ITEM_SELECTED_MODIFIER:C}},computed:{linkKind(){return this.inverted?S:$},ariaCurrent(){return this.selected?"location":void 0}}};var N=function(){var e=this,r=e._self._c;return r("li",{class:["d-breadcrumbs__item",{[e.BREADCRUMB_ITEM_SELECTED_MODIFIER]:e.selected}],attrs:{"data-qa":"dt-breadcrumb-item"}},[r("dt-link",e._b({attrs:{kind:e.linkKind,"aria-current":e.ariaCurrent,"data-qa":"breadcrumb-item"}},"dt-link",e.$attrs,!1),[e._t("default",function(){return[e._v(" "+e._s(e.label)+" ")]})],2)],1)},w=[],h=d(M,N,w,!1,null,null,null,null);const c=h.exports;h.exports.__docgenInfo={displayName:"DtBreadcrumbItem",exportName:"default",description:"",tags:{},props:[{name:"inverted",description:"Passed through to link. If true, applies inverted styles to the link.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"selected",description:"Applies selected styles to the breadcrumb",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",description:"Describes the breadcrumb. Overridden by default slot",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default",description:"default slot for breadcrumb item's label"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumb_item.vue"]};const O={name:"DtBreadcrumbs",components:{DtBreadcrumbItem:c},props:{breadcrumbs:{type:Array,default:()=>[],validate(a){return a.every(({href:e,label:r})=>e!==void 0&&r!==void 0)}},inverted:{type:Boolean,default:!1},ariaLabel:{type:String,default:"breadcrumb"}},data(){return{BREADCRUMBS_INVERTED_MODIFIER:F}},methods:{getBreadcrumbItemKey(a){return`breadcrumbs-item-${a}-${R.getUniqueString()}`}}};var A=function(){var e=this,r=e._self._c;return r("nav",{class:["d-breadcrumbs",{[e.BREADCRUMBS_INVERTED_MODIFIER]:e.inverted}],attrs:{"aria-label":e.ariaLabel,"data-qa":"dt-breadcrumbs"}},[r("ol",[e._t("default",function(){return e._l(e.breadcrumbs,function(l,o){return r("dt-breadcrumb-item",e._g(e._b({key:e.getBreadcrumbItemKey(o),attrs:{inverted:e.inverted}},"dt-breadcrumb-item",l,!1),e.$listeners))})})],2)])},q=[],B=d(O,A,q,!1,null,null,null,null);const i=B.exports;B.exports.__docgenInfo={displayName:"DtBreadcrumbs",description:`Breadcrumbs are links used to provide context for the currently-viewed page
and where it is located within the overall site structure.`,tags:{see:[{description:"https://dialpad.design/components/breadcrumbs.html",title:"see"}]},exportName:"default",props:[{name:"breadcrumbs",description:"A provided list of breadcrumbs. Overridden by default slot",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"inverted",description:"Passed through to link. If true, applies inverted styles to the link.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"ariaLabel",description:"Descriptive label for the navigation content.",type:{name:"string"},defaultValue:{func:!1,value:"'breadcrumb'"}}],slots:[{name:"default",description:"default slot for breadcrumbs content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs.vue"]};const L={name:"DtBreadcrumbsDefault",components:{DtBreadcrumbs:i,htmlFragment:V}};var P=function(){var e=this,r=e._self._c;return r("div",{class:[{"d-bgc-purple-600":e.inverted}]},[r("dt-breadcrumbs",{staticClass:"d-py16 d-px12",attrs:{breadcrumbs:e.breadcrumbs,inverted:e.inverted}},[e.defaultSlot?r("html-fragment",{attrs:{html:e.defaultSlot}}):e._e()],1)],1)},U=[],I=d(L,P,U,!1,null,null,null,null);const K=I.exports;I.exports.__docgenInfo={displayName:"DtBreadcrumbsDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs_default.story.vue"]};const j={name:"DtBreadcrumbsVariants",components:{DtBreadcrumbs:i,DtBreadcrumbItem:c}};var z=function(){var e=this,r=e._self._c;return r("div",[r("dt-breadcrumbs",{staticClass:"d-py16 d-px12",attrs:{breadcrumbs:e.breadcrumbs}}),r("div",{staticClass:"d-bgc-purple-600 d-py16 d-px12"},[r("dt-breadcrumbs",{attrs:{inverted:"",breadcrumbs:e.breadcrumbs}})],1),r("dt-breadcrumbs",{staticClass:"d-py16 d-px12"},e._l(e.breadcrumbs,function(l,o){return r("dt-breadcrumb-item",e._b({key:l.label+o},"dt-breadcrumb-item",l,!1))}),1)],1)},G=[],E=d(j,z,G,!1,null,null,null,null);const H=E.exports;E.exports.__docgenInfo={displayName:"DtBreadcrumbsVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs_variants.story.vue"]};const x={breadcrumbs:[{href:"#",label:"Root"},{href:"#",label:"Section"},{href:"#",label:"Section"},{href:"#",label:"Section"},{href:"#",label:"Current Page",selected:!0}]},T={default:{control:"text",table:{type:{summary:"VNode"}}},breadcrumbs:{control:"object",table:{defaultValue:{summary:"{ url: string, label: string }[]"}}}},J={title:"Components/Breadcrumbs",component:i,args:x,argTypes:T,excludeStories:/.*Data$/},Q=(a,{argTypes:e})=>u(a,e,K),W=(a,{argTypes:e})=>u(a,e,H),X=(a,{argTypes:e})=>u(a,e,c),t={render:Q,args:{}},s={render:W,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"landmark-unique",enabled:!1}]}}}},n={render:X,args:{},parameters:{a11y:{config:{rules:[{id:"listitem",enabled:!1}]}}}};var m,b,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(p=(b=t.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var f,_,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(_=s.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var g,y,D;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(D=(y=n.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};const Y=["argsData","argTypesData","Default","Variants","BreadcrumbItem"],te=Object.freeze(Object.defineProperty({__proto__:null,BreadcrumbItem:n,Default:t,Variants:s,__namedExportsOrder:Y,argTypesData:T,argsData:x,default:J},Symbol.toStringTag,{value:"Module"}));export{te as B,t as D,s as V,n as a};
//# sourceMappingURL=breadcrumbs.stories-4cdfb0ad.js.map