import{c as v}from"./storybook_utils-5e2f75ca.js";import{b as x}from"./stack_constants-4f71ebff.js";import{D as f}from"./description_list-96f98ee8.js";import"./vue.esm-bundler-807df745.js";const C={name:"DtDescriptionListDefault",components:{DtDescriptionList:f}};C.__docgenInfo={displayName:"DtDescriptionListDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list_default.story.vue"]};const b={items:{control:"object",table:{defaultValue:{summary:"{ term: string, description: string }[]"}}},direction:{options:["row","column"],control:{type:"radio"}},gap:{options:x,control:{type:"select"}}},y={direction:"row",gap:"400",items:[{term:"Customer Intent",description:"Hello, I'm looking to return my TV"},{term:"Reason",description:"Refound"},{term:"Country",description:"England"},{term:"Random",description:"Value"}]},L={items:[{term:"Customer Intent",description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`},{term:"Three word term",description:` Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`},{term:"Country",description:"England"},{term:"Random",description:"Value"}]},S=()=>({template:`<div
      style="width: var(--dt-size-925);
      overflow: hidden;
      resize: horizontal;
      height: auto;
      border: 1px solid var(--dt-color-border-subtle);
      padding: var(--dt-space-450);
      borderRadius: var(--dt-size-radius-400);"
      >
      <story />
    </div>`}),h={title:"Components/Description List",component:f,args:y,argTypes:b,decorators:[S],excludeStories:/.*Data$/},w=(_,{argTypes:T})=>v(_,T),e={render:w,args:{}},t={...e,args:{direction:"column"}},r={...e,args:{...e.args,items:L.items}},o={...e,args:{...e.args,termClass:["d-fw-bold","d-fc-disabled"]}};var s,a,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var n,c,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Default,
  args: {
    direction: 'column'
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,m,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    items: argsDataLongText.items
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,D;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    termClass: ['d-fw-bold', 'd-fc-disabled']
  }
}`,...(D=(g=o.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};const q=["argTypesData","argsData","Default","ColumnDirection","LongText","WithStyles"],I=Object.freeze(Object.defineProperty({__proto__:null,ColumnDirection:t,Default:e,LongText:r,WithStyles:o,__namedExportsOrder:q,argTypesData:b,argsData:y,default:h},Symbol.toStringTag,{value:"Module"}));export{t as C,I as D,r as L,e as a};
//# sourceMappingURL=description_list.stories-c9bca75a.js.map
