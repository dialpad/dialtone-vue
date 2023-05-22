import{u as w,h as $,c as u}from"./storybook_utils-605a9b8f.js";import{D as C}from"./link-4fdbe64c.js";import{I as F,M}from"./link_constants-51338c78.js";import{n as d}from"./_plugin-vue2_normalizer-2bbd088e.js";const N="d-breadcrumbs__item--selected",O="d-breadcrumbs--inverted",A={name:"DtBreadcrumbItem",components:{DtLink:C},inheritAttrs:!1,props:{inverted:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},label:{type:String,default:""}},data(){return{BREADCRUMB_ITEM_SELECTED_MODIFIER:N}},computed:{linkKind(){return this.inverted?F:M},ariaCurrent(){return this.selected?"location":void 0}}};var k=function(){var e=this,r=e._self._c;return r("li",{class:["d-breadcrumbs__item",{[e.BREADCRUMB_ITEM_SELECTED_MODIFIER]:e.selected}],attrs:{"data-qa":"dt-breadcrumb-item"}},[r("dt-link",e._b({attrs:{kind:e.linkKind,"aria-current":e.ariaCurrent,"data-qa":"breadcrumb-item"}},"dt-link",e.$attrs,!1),[e._t("default",function(){return[e._v(" "+e._s(e.label)+" ")]})],2)],1)},q=[];k._withStripped=!0;var c=d(A,k,q,!1,null,null,null,null);c.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumb_item.vue";const i=c.exports;c.exports.__docgenInfo={displayName:"DtBreadcrumbItem",exportName:"default",description:"",tags:{},props:[{name:"inverted",description:"Passed through to link. If true, applies inverted styles to the link.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"selected",description:"Applies selected styles to the breadcrumb",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",description:"Describes the breadcrumb. Overridden by default slot",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default",description:"default slot for breadcrumb item's label"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumb_item.vue"]};const L={name:"DtBreadcrumbs",components:{DtBreadcrumbItem:i},props:{breadcrumbs:{type:Array,default:()=>[],validate(t){return t.every(({href:e,label:r})=>e!==void 0&&r!==void 0)}},inverted:{type:Boolean,default:!1},ariaLabel:{type:String,default:"breadcrumb"}},data(){return{BREADCRUMBS_INVERTED_MODIFIER:O}},methods:{getBreadcrumbItemKey(t){return`breadcrumbs-item-${t}-${w.getUniqueString()}`}}};var S=function(){var e=this,r=e._self._c;return r("nav",{class:["d-breadcrumbs",{[e.BREADCRUMBS_INVERTED_MODIFIER]:e.inverted}],attrs:{"aria-label":e.ariaLabel,"data-qa":"dt-breadcrumbs"}},[r("ol",[e._t("default",function(){return e._l(e.breadcrumbs,function(l,o){return r("dt-breadcrumb-item",e._g(e._b({key:e.getBreadcrumbItemKey(o),attrs:{inverted:e.inverted}},"dt-breadcrumb-item",l,!1),e.$listeners))})})],2)])},P=[];S._withStripped=!0;var m=d(L,S,P,!1,null,null,null,null);m.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs.vue";const b=m.exports;m.exports.__docgenInfo={displayName:"DtBreadcrumbs",description:`Breadcrumbs are links used to provide context for the currently-viewed page
and where it is located within the overall site structure.`,tags:{see:[{description:"https://dialpad.design/components/breadcrumbs.html",title:"see"}]},exportName:"default",props:[{name:"breadcrumbs",description:"A provided list of breadcrumbs. Overridden by default slot",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"inverted",description:"Passed through to link. If true, applies inverted styles to the link.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"ariaLabel",description:"Descriptive label for the navigation content.",type:{name:"string"},defaultValue:{func:!1,value:"'breadcrumb'"}}],slots:[{name:"default",description:"default slot for breadcrumbs content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs.vue"]};const U={name:"DtBreadcrumbsDefault",components:{DtBreadcrumbs:b,htmlFragment:$}};var x=function(){var e=this,r=e._self._c;return r("div",{class:[{"d-bgc-purple-600":e.inverted}]},[r("dt-breadcrumbs",{staticClass:"d-py16 d-px12",attrs:{breadcrumbs:e.breadcrumbs,inverted:e.inverted}},[e.defaultSlot?r("html-fragment",{attrs:{html:e.defaultSlot}}):e._e()],1)],1)},K=[];x._withStripped=!0;var p=d(U,x,K,!1,null,null,null,null);p.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs_default.story.vue";const j=p.exports;p.exports.__docgenInfo={displayName:"DtBreadcrumbsDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs_default.story.vue"]};const z={name:"DtBreadcrumbsVariants",components:{DtBreadcrumbs:b,DtBreadcrumbItem:i}};var T=function(){var e=this,r=e._self._c;return r("div",[r("dt-breadcrumbs",{staticClass:"d-py16 d-px12",attrs:{breadcrumbs:e.breadcrumbs}}),r("div",{staticClass:"d-bgc-purple-600 d-py16 d-px12"},[r("dt-breadcrumbs",{attrs:{inverted:"",breadcrumbs:e.breadcrumbs}})],1),r("dt-breadcrumbs",{staticClass:"d-py16 d-px12"},e._l(e.breadcrumbs,function(l,o){return r("dt-breadcrumb-item",e._b({key:l.label+o},"dt-breadcrumb-item",l,!1))}),1)],1)},G=[];T._withStripped=!0;var f=d(z,T,G,!1,null,null,null,null);f.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs_variants.story.vue";const H=f.exports;f.exports.__docgenInfo={displayName:"DtBreadcrumbsVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs_variants.story.vue"]};const R={breadcrumbs:[{href:"#",label:"Root"},{href:"#",label:"Section"},{href:"#",label:"Section"},{href:"#",label:"Section"},{href:"#",label:"Current Page",selected:!0}]},V={default:{control:"text",table:{type:{summary:"VNode"}}},breadcrumbs:{control:"object",table:{defaultValue:{summary:"{ url: string, label: string }[]"}}}},J={title:"Components/Breadcrumbs",component:b,args:R,argTypes:V,excludeStories:/.*Data$/},Q=(t,{argTypes:e})=>u(t,e,j),W=(t,{argTypes:e})=>u(t,e,H),X=(t,{argTypes:e})=>u(t,e,i),a={render:Q,args:{}},n={render:W,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"landmark-unique",enabled:!1}]}}}},s={render:X,args:{},parameters:{a11y:{config:{rules:[{id:"listitem",enabled:!1}]}}}};var _,v,g;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(g=(v=a.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var y,h,D;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(D=(h=n.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var B,I,E;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(E=(I=s.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};const Y=["argsData","argTypesData","Default","Variants","BreadcrumbItem"],ae=Object.freeze(Object.defineProperty({__proto__:null,BreadcrumbItem:s,Default:a,Variants:n,__namedExportsOrder:Y,argTypesData:V,argsData:R,default:J},Symbol.toStringTag,{value:"Module"}));export{ae as B,a as D,n as V,s as a};
//# sourceMappingURL=breadcrumbs.stories-f2ce9c80.js.map
