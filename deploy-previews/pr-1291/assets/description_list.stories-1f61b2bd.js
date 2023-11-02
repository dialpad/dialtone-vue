import{c as C}from"./storybook_utils-5e2f75ca.js";import{b as h}from"./stack_constants-4f71ebff.js";import{D as _}from"./description_list-96f98ee8.js";import{t as L,o as S,b as $}from"./vue.esm-bundler-807df745.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";const b={name:"DtDescriptionListDefault",components:{DtDescriptionList:_}};function x(t,I,j,F,O,A){const T=L("dt-description-list");return S(),$(T,{gap:t.$attrs.gap,items:t.$attrs.items,direction:t.$attrs.direction,"term-class":t.$attrs.termClass,"description-class":t.$attrs.descriptionClass},null,8,["gap","items","direction","term-class","description-class"])}const k=w(b,[["render",x],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list_default.story.vue"]]);b.__docgenInfo={displayName:"DtDescriptionListDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list_default.story.vue"]};const v={items:{control:"object",table:{defaultValue:{summary:"{ term: string, description: string }[]"}}},direction:{options:["row","column"],control:{type:"radio"}},gap:{options:h,control:{type:"select"}}},y={direction:"row",gap:"400",items:[{term:"Customer Intent",description:"Hello, I'm looking to return my TV"},{term:"Reason",description:"Refound"},{term:"Country",description:"England"},{term:"Random",description:"Value"}]},q={items:[{term:"Customer Intent",description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`},{term:"Three word term",description:` Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`},{term:"Country",description:"England"},{term:"Random",description:"Value"}]},z=()=>({template:`<div
      style="width: var(--dt-size-925);
      overflow: hidden;
      resize: horizontal;
      height: auto;
      border: 1px solid var(--dt-color-border-subtle);
      padding: var(--dt-space-450);
      borderRadius: var(--dt-size-radius-400);"
      >
      <story />
    </div>`}),R={title:"Components/Description List",component:_,args:y,argTypes:v,decorators:[z],excludeStories:/.*Data$/},V=t=>C(t,k),e={render:V,args:{}},r={...e,args:{direction:"column"}},o={...e,args:{...e.args,items:q.items}},s={...e,args:{...e.args,termClass:["d-fw-bold","d-fc-disabled"]}};var a,i,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var c,d,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Default,
  args: {
    direction: 'column'
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    items: argsDataLongText.items
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,f,D;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    termClass: ['d-fw-bold', 'd-fc-disabled']
  }
}`,...(D=(f=s.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};const E=["argTypesData","argsData","Default","ColumnDirection","LongText","WithStyles"],H=Object.freeze(Object.defineProperty({__proto__:null,ColumnDirection:r,Default:e,LongText:o,WithStyles:s,__namedExportsOrder:E,argTypesData:v,argsData:y,default:R},Symbol.toStringTag,{value:"Module"}));export{r as C,H as D,o as L,e as a};
//# sourceMappingURL=description_list.stories-1f61b2bd.js.map
