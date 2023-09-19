import{c as v}from"./storybook_utils-f3a25a1b.js";import{D as z}from"./link-54181f43.js";import{I as G,M as H}from"./link_constants-51338c78.js";import{k as s,o as t,d,l as b,m as g,j as y,x as F,q as J,t as Q,p as h,n as D,e as M,F as x,g as O,v as B}from"./vue.esm-bundler-356a911e.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import{u as W,b as X}from"./utils-401150e1.js";const Y="d-breadcrumbs__item--selected",Z="d-breadcrumbs--inverted",A={name:"DtBreadcrumbItem",components:{DtLink:z},inheritAttrs:!1,props:{inverted:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},label:{type:String,default:""}},data(){return{BREADCRUMB_ITEM_SELECTED_MODIFIER:Y}},computed:{linkKind(){return this.inverted?G:H},ariaCurrent(){return this.selected?"location":void 0}}};function ee(e,o,r,_,l,n){const a=s("dt-link");return t(),d("li",{"data-qa":"dt-breadcrumb-item",class:D(["d-breadcrumbs__item",{[l.BREADCRUMB_ITEM_SELECTED_MODIFIER]:r.selected}])},[b(a,h({kind:n.linkKind,"aria-current":n.ariaCurrent,"data-qa":"breadcrumb-item"},e.$attrs),{default:g(()=>[y(" @slot default slot for breadcrumb item's label "),F(e.$slots,"default",{},()=>[J(Q(r.label),1)])]),_:3},16,["kind","aria-current"])],2)}const k=f(A,[["render",ee],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumb_item.vue"]]);A.__docgenInfo={displayName:"DtBreadcrumbItem",exportName:"default",description:"",tags:{},props:[{name:"inverted",description:"Passed through to link. If true, applies inverted styles to the link.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"selected",description:"Applies selected styles to the breadcrumb",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",description:"Describes the breadcrumb. Overridden by default slot",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default",description:"default slot for breadcrumb item's label"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumb_item.vue"]};const q={name:"DtBreadcrumbs",components:{DtBreadcrumbItem:k},props:{breadcrumbs:{type:Array,default:()=>[],validate(e){return e.every(({href:o,label:r})=>o!==void 0&&r!==void 0)}},inverted:{type:Boolean,default:!1},ariaLabel:{type:String,default:"breadcrumb"}},data(){return{BREADCRUMBS_INVERTED_MODIFIER:Z}},methods:{getBreadcrumbItemKey(e){return`breadcrumbs-item-${e}-${W.getUniqueString()}`}}},re=["aria-label"];function ae(e,o,r,_,l,n){const a=s("dt-breadcrumb-item");return t(),d("nav",{"aria-label":r.ariaLabel,"data-qa":"dt-breadcrumbs",class:D(["d-breadcrumbs",{[l.BREADCRUMBS_INVERTED_MODIFIER]:r.inverted}])},[M("ol",null,[y(" @slot default slot for breadcrumbs content "),F(e.$slots,"default",{},()=>[(t(!0),d(x,null,O(r.breadcrumbs,(u,p)=>(t(),B(a,h({key:n.getBreadcrumbItemKey(p),inverted:r.inverted},u),null,16,["inverted"]))),128))])])],10,re)}const I=f(q,[["render",ae],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs.vue"]]);q.__docgenInfo={displayName:"DtBreadcrumbs",description:`Breadcrumbs are links used to provide context for the currently-viewed page
and where it is located within the overall site structure.`,tags:{see:[{description:"https://dialpad.design/components/breadcrumbs.html",title:"see"}]},exportName:"default",props:[{name:"breadcrumbs",description:"A provided list of breadcrumbs. Overridden by default slot",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"inverted",description:"Passed through to link. If true, applies inverted styles to the link.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"ariaLabel",description:"Descriptive label for the navigation content.",type:{name:"string"},defaultValue:{func:!1,value:"'breadcrumb'"}}],slots:[{name:"default",description:"default slot for breadcrumbs content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs.vue"]};const L={name:"DtBreadcrumbsDefault",components:{DtBreadcrumbs:I,htmlFragment:X}};function te(e,o,r,_,l,n){const a=s("html-fragment"),u=s("dt-breadcrumbs");return t(),d("div",{class:D([{"d-bgc-purple-600":e.$attrs.inverted}])},[b(u,{class:"d-py16 d-px12",breadcrumbs:e.$attrs.breadcrumbs,inverted:e.$attrs.inverted},{default:g(()=>[e.defaultSlot?(t(),B(a,{key:0,html:e.defaultSlot},null,8,["html"])):y("v-if",!0)]),_:1},8,["breadcrumbs","inverted"])],2)}const ne=f(L,[["render",te],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs_default.story.vue"]]);L.__docgenInfo={displayName:"DtBreadcrumbsDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs_default.story.vue"]};const P={name:"DtBreadcrumbsVariants",components:{DtBreadcrumbs:I,DtBreadcrumbItem:k}},se={class:"d-bgc-purple-600 d-py16 d-px12"};function de(e,o,r,_,l,n){const a=s("dt-breadcrumbs"),u=s("dt-breadcrumb-item");return t(),d("div",null,[b(a,{class:"d-py16 d-px12",breadcrumbs:e.$attrs.breadcrumbs},null,8,["breadcrumbs"]),M("div",se,[b(a,{inverted:"",breadcrumbs:e.$attrs.breadcrumbs},null,8,["breadcrumbs"])]),b(a,{class:"d-py16 d-px12"},{default:g(()=>[(t(!0),d(x,null,O(e.$attrs.breadcrumbs,(p,K)=>(t(),B(u,h({key:p.label+K},p),null,16))),128))]),_:1})])}const oe=f(P,[["render",de],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs_variants.story.vue"]]);P.__docgenInfo={displayName:"DtBreadcrumbsVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs_variants.story.vue"]};const U={breadcrumbs:[{href:"#",label:"Root"},{href:"#",label:"Section"},{href:"#",label:"Section"},{href:"#",label:"Section"},{href:"#",label:"Current Page",selected:!0}]},j={default:{control:"text",table:{type:{summary:"VNode"}}},breadcrumbs:{control:"object",table:{defaultValue:{summary:"{ url: string, label: string }[]"}}}},le={title:"Components/Breadcrumbs",component:I,args:U,argTypes:j,excludeStories:/.*Data$/},ue=e=>v(e,ne),ce=e=>v(e,oe),me=e=>v(e,k),c={render:ue,args:{}},m={render:ce,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"landmark-unique",enabled:!1}]}}}},i={render:me,args:{},parameters:{a11y:{config:{rules:[{id:"listitem",enabled:!1}]}}}};var E,V,$;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...($=(V=c.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var T,S,N;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(N=(S=m.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var R,w,C;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(C=(w=i.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const ie=["argsData","argTypesData","Default","Variants","BreadcrumbItem"],ye=Object.freeze(Object.defineProperty({__proto__:null,BreadcrumbItem:i,Default:c,Variants:m,__namedExportsOrder:ie,argTypesData:j,argsData:U,default:le},Symbol.toStringTag,{value:"Module"}));export{ye as B,c as D,m as V,i as a};
//# sourceMappingURL=breadcrumbs.stories-6adb7312.js.map