import{c as E}from"./storybook_utils-dy5aucTw.js";import{b as V}from"./stack_constants-45i7xhSZ.js";import{k as c,F as p,G as N,p as d,o as l,e as m,y as f,s as O,b as R}from"./vue.esm-bundler-PY0rQjII.js";import{_ as $}from"./_plugin-vue_export-helper-x3n3nnut.js";const F=["row","column"],B=e=>e.term?typeof e.term=="string":!1,G=e=>e.description?typeof e.description=="string":!1,P=e=>Array.isArray(e)?e.every(r=>!(typeof r!="object"||!B(r)||!G(r))):!1,x={name:"DtDescriptionList",props:{direction:{type:String,default:"row",validator:e=>F.includes(e)},items:{type:Array,default:()=>[],validator:e=>P(e),required:!0},gap:{type:String,default:"400",validator:e=>V.includes(e)},termClass:{type:[String,Array,Object],default:""},descriptionClass:{type:[String,Array,Object],default:""}},computed:{dtClass(){return["dt-description-list__term",this.termClass]},ddClass(){return["dt-description-list__description",this.descriptionClass]},getDirectionClass(){return`dt-description-list--${this.direction}`},getGapClass(){return`dt-description-list--gap-${this.gap}`}}};function U(e,r,u,A,q,s){return l(),c("dl",{class:d(["dt-description-list",s.getDirectionClass,s.getGapClass])},[(l(!0),c(p,null,N(u.items,a=>(l(),c(p,{key:a.term},[m("dt",{class:d(s.dtClass)},f(a.term),3),m("dd",{class:d(s.ddClass)},f(a.description),3)],64))),128))],2)}const k=$(x,[["render",U],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list.vue"]]);x.__docgenInfo={displayName:"DtDescriptionList",exportName:"default",description:"",tags:{},props:[{name:"direction",description:"The direction for the list",tags:{},values:["row","column"],type:{name:"string"},defaultValue:{func:!1,value:"'row'"}},{name:"items",description:"A list of items that represent the term and the description",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"gap",description:"Set the space between the elements",tags:{},values:["0","100","200","300","400","500","600"],type:{name:"string"},defaultValue:{func:!1,value:"'400'"}},{name:"termClass",description:"Used to customize the term element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"descriptionClass",description:"Used to customize the description element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list.vue"]};const I={name:"DtDescriptionListDefault",components:{DtDescriptionList:k}};function W(e,r,u,A,q,s){const a=O("dt-description-list");return l(),R(a,{gap:e.$attrs.gap,items:e.$attrs.items,direction:e.$attrs.direction,"term-class":e.$attrs.termClass,"description-class":e.$attrs.descriptionClass},null,8,["gap","items","direction","term-class","description-class"])}const H=$(I,[["render",W],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list_default.story.vue"]]);I.__docgenInfo={displayName:"DtDescriptionListDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list_default.story.vue"]};const j={items:{control:"object",table:{defaultValue:{summary:"{ term: string, description: string }[]"}}},direction:{options:["row","column"],control:{type:"radio"}},gap:{options:V,control:{type:"select"}}},z={direction:"row",gap:"400",items:[{term:"Customer Intent",description:"Hello, I'm looking to return my TV"},{term:"Reason",description:"Refound"},{term:"Country",description:"England"},{term:"Random",description:"Value"}]},K={items:[{term:"Customer Intent",description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`},{term:"Three word term",description:` Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`},{term:"Country",description:"England"},{term:"Random",description:"Value"}]},M=()=>({template:`<div
      style="width: var(--dt-size-925);
      overflow: hidden;
      resize: horizontal;
      height: auto;
      border: 1px solid var(--dt-color-border-subtle);
      padding: var(--dt-space-450);
      borderRadius: var(--dt-size-radius-400);"
      >
      <story />
    </div>`}),J={title:"Components/Description List",component:k,args:z,argTypes:j,decorators:[M],excludeStories:/.*Data$/},Q=(e,{argTypes:r})=>E(e,r,H),t={render:Q,args:{}},i={...t,args:{direction:"column"}},o={...t,args:{...t.args,items:K.items}},n={...t,args:{...t.args,termClass:["d-fw-bold","d-fc-disabled"]}};var g,_,D;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(D=(_=t.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var y,v,C;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Default,
  args: {
    direction: 'column'
  }
}`,...(C=(v=i.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var h,b,T;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    items: argsDataLongText.items
  }
}`,...(T=(b=o.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var S,w,L;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    termClass: ['d-fw-bold', 'd-fc-disabled']
  }
}`,...(L=(w=n.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};const X=["argTypesData","argsData","Default","ColumnDirection","LongText","WithStyles"],re=Object.freeze(Object.defineProperty({__proto__:null,ColumnDirection:i,Default:t,LongText:o,WithStyles:n,__namedExportsOrder:X,argTypesData:j,argsData:z,default:J},Symbol.toStringTag,{value:"Module"}));export{i as C,re as D,o as L,t as a};
//# sourceMappingURL=description_list.stories--rOo-AVh.js.map
