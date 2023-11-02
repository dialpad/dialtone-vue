import{c as h}from"./storybook_utils-1ccaacc9.js";import{b as L}from"./stack_constants-4f71ebff.js";import{D as b}from"./description_list-def75c29.js";import{t as S,o as $,b as w}from"./vue.esm-bundler-807df745.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";const v={name:"DtDescriptionListDefault",components:{DtDescriptionList:b}};function k(t,a,j,F,O,A){const C=S("dt-description-list");return $(),w(C,{gap:t.$attrs.gap,items:t.$attrs.items,direction:t.$attrs.direction,"term-class":t.$attrs.termClass,"description-class":t.$attrs.descriptionClass},null,8,["gap","items","direction","term-class","description-class"])}const q=x(v,[["render",k],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list_default.story.vue"]]);v.__docgenInfo={displayName:"DtDescriptionListDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list_default.story.vue"]};const y={items:{control:"object",table:{defaultValue:{summary:"{ term: string, description: string }[]"}}},direction:{options:["row","column"],control:{type:"radio"}},gap:{options:L,control:{type:"select"}}},T={direction:"row",gap:"400",items:[{term:"Customer Intent",description:"Hello, I'm looking to return my TV"},{term:"Reason",description:"Refound"},{term:"Country",description:"England"},{term:"Random",description:"Value"}]},z={items:[{term:"Customer Intent",description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`},{term:"Three word term",description:` Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`},{term:"Country",description:"England"},{term:"Random",description:"Value"}]},R=()=>({template:`<div
      style="width: var(--dt-size-925);
      overflow: hidden;
      resize: horizontal;
      height: auto;
      border: 1px solid var(--dt-color-border-subtle);
      padding: var(--dt-space-450);
      borderRadius: var(--dt-size-radius-400);"
      >
      <story />
    </div>`}),V={title:"Components/Description List",component:b,args:T,argTypes:y,decorators:[R],excludeStories:/.*Data$/},E=(t,{argTypes:a})=>h(t,a,q),e={render:E,args:{}},r={...e,args:{direction:"column"}},o={...e,args:{...e.args,items:z.items}},s={...e,args:{...e.args,termClass:["d-fw-bold","d-fc-disabled"]}};var i,n,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(_=(D=s.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const I=["argTypesData","argsData","Default","ColumnDirection","LongText","WithStyles"],H=Object.freeze(Object.defineProperty({__proto__:null,ColumnDirection:r,Default:e,LongText:o,WithStyles:s,__namedExportsOrder:I,argTypesData:y,argsData:T,default:V},Symbol.toStringTag,{value:"Module"}));export{r as C,H as D,o as L,e as a};
//# sourceMappingURL=description_list.stories-f8de7680.js.map
