import{c as L}from"./storybook_utils-182ea7b7.js";import{b as h}from"./stack_constants-4f71ebff.js";import{D as b}from"./description_list-13c5d62c.js";import{s as S,o as $,b as x}from"./vue.esm-bundler-2fc8d911.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";const y={name:"DtDescriptionListDefault",components:{DtDescriptionList:b}};function q(t,a,j,F,O,A){const C=S("dt-description-list");return $(),x(C,{gap:t.$attrs.gap,items:t.$attrs.items,direction:t.$attrs.direction,"term-class":t.$attrs.termClass,"description-class":t.$attrs.descriptionClass},null,8,["gap","items","direction","term-class","description-class"])}const z=w(y,[["render",q]]);y.__docgenInfo={displayName:"DtDescriptionListDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list_default.story.vue"]};const T={items:{control:"object",table:{defaultValue:{summary:"{ term: string, description: string }[]"}}},direction:{options:["row","column"],control:{type:"radio"}},gap:{options:h,control:{type:"select"}}},v={direction:"row",gap:"400",items:[{term:"Customer Intent",description:"Hello, I'm looking to return my TV"},{term:"Reason",description:"Refound"},{term:"Country",description:"England"},{term:"Random",description:"Value"}]},R={items:[{term:"Customer Intent",description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`},{term:"Three word term",description:` Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`},{term:"Country",description:"England"},{term:"Random",description:"Value"}]},V=()=>({template:`<div
      style="width: var(--dt-size-925);
      overflow: hidden;
      resize: horizontal;
      height: auto;
      border: 1px solid var(--dt-color-border-subtle);
      padding: var(--dt-space-450);
      borderRadius: var(--dt-size-radius-400);"
      >
      <story />
    </div>`}),k={title:"Components/Description List",component:b,args:v,argTypes:T,decorators:[V],excludeStories:/.*Data$/},E=(t,{argTypes:a})=>L(t,a,z),e={render:E,args:{}},r={...e,args:{direction:"column"}},o={...e,args:{...e.args,items:R.items}},s={...e,args:{...e.args,termClass:["d-fw-bold","d-fc-disabled"]}};var i,n,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var d,l,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Default,
  args: {
    direction: 'column'
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,u,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    items: argsDataLongText.items
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,D,_;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    termClass: ['d-fw-bold', 'd-fc-disabled']
  }
}`,...(_=(D=s.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const I=["argTypesData","argsData","Default","ColumnDirection","LongText","WithStyles"],H=Object.freeze(Object.defineProperty({__proto__:null,ColumnDirection:r,Default:e,LongText:o,WithStyles:s,__namedExportsOrder:I,argTypesData:T,argsData:v,default:k},Symbol.toStringTag,{value:"Module"}));export{r as C,H as D,o as L,e as a};
//# sourceMappingURL=description_list.stories-2278ff3e.js.map
