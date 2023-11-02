import{c as h}from"./storybook_utils-82e80e48.js";import{b as L}from"./stack_constants-4f71ebff.js";import{D as y}from"./description_list-8188785b.js";import{n as S}from"./_plugin-vue2_normalizer-2bbd088e.js";const w={name:"DtDescriptionListDefault",components:{DtDescriptionList:y}};var b=function(){var t=this,C=t._self._c;return C("dt-description-list",{attrs:{gap:t.gap,items:t.items,direction:t.direction,"term-class":t.termClass,"description-class":t.descriptionClass}})},z=[];b._withStripped=!0;var a=S(w,b,z,!1,null,null,null,null);a.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list_default.story.vue";const R=a.exports;a.exports.__docgenInfo={displayName:"DtDescriptionListDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list_default.story.vue"]};const T={items:{control:"object",table:{defaultValue:{summary:"{ term: string, description: string }[]"}}},direction:{options:["row","column"],control:{type:"radio"}},gap:{options:L,control:{type:"select"}}},x={direction:"row",gap:"400",items:[{term:"Customer Intent",description:"Hello, I'm looking to return my TV"},{term:"Reason",description:"Refound"},{term:"Country",description:"England"},{term:"Random",description:"Value"}]},q={items:[{term:"Customer Intent",description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
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
    </div>`}),E={title:"Components/Description List",component:y,args:x,argTypes:T,decorators:[V],excludeStories:/.*Data$/},F=(i,{argTypes:t})=>h(i,t,R),e={render:F,args:{}},r={...e,args:{direction:"column"}},o={...e,args:{...e.args,items:q.items}},s={...e,args:{...e.args,termClass:["d-fw-bold","d-fc-disabled"]}};var n,c,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Default,
  args: {
    direction: 'column'
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    items: argsDataLongText.items
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var D,_,v;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    termClass: ['d-fw-bold', 'd-fc-disabled']
  }
}`,...(v=(_=s.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};const I=["argTypesData","argsData","Default","ColumnDirection","LongText","WithStyles"],N=Object.freeze(Object.defineProperty({__proto__:null,ColumnDirection:r,Default:e,LongText:o,WithStyles:s,__namedExportsOrder:I,argTypesData:T,argsData:x,default:E},Symbol.toStringTag,{value:"Module"}));export{r as C,N as D,o as L,e as a};
//# sourceMappingURL=description_list.stories-bcc80f49.js.map
