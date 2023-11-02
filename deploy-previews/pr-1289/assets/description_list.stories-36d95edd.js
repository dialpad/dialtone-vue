import{c as C}from"./storybook_utils-82e80e48.js";import{D as b}from"./description_list-8188785b.js";import{n as L}from"./_plugin-vue2_normalizer-2bbd088e.js";const S={name:"DtDescriptionListDefault",components:{DtDescriptionList:b}};var y=function(){var t=this,h=t._self._c;return h("dt-description-list",{attrs:{gap:t.gap,items:t.items,direction:t.direction,"term-class":t.termClass,"description-class":t.descriptionClass}})},w=[];y._withStripped=!0;var a=L(S,y,w,!1,null,null,null,null);a.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list_default.story.vue";const z=a.exports;a.exports.__docgenInfo={displayName:"DtDescriptionListDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list_default.story.vue"]};const x={items:{control:"object",table:{defaultValue:{summary:"{ term: string, description: string }[]"}}}},T={direction:"row",gap:"400",items:[{term:"Customer Intent",description:"Hello, I'm looking to return my TV"},{term:"Reason",description:"Refound"},{term:"Country",description:"England"},{term:"Random",description:"Value"}]},R={items:[{term:"Customer Intent",description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`},{term:"Three word term",description:` Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`},{term:"Country",description:"England"},{term:"Random",description:"Value"}]},q=()=>({template:`<div
      style="width: var(--dt-size-925);
      overflow: hidden;
      resize: horizontal;
      height: auto;
      border: 1px solid var(--dt-color-border-subtle);
      padding: var(--dt-space-450);
      borderRadius: var(--dt-size-radius-400);"
      >
      <story />
    </div>`}),V={title:"Components/Description List",component:b,args:T,argTypes:x,decorators:[q],excludeStories:/.*Data$/},E=(i,{argTypes:t})=>C(i,t,z),e={render:E,args:{}},r={...e,args:{direction:"column"}},s={...e,args:{...e.args,items:R.items}},o={...e,args:{...e.args,termClass:["d-fw-bold","d-fc-disabled"]}};var n,c,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,m,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Default,
  args: {
    direction: 'column'
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    items: argsDataLongText.items
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var D,_,v;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    termClass: ['d-fw-bold', 'd-fc-disabled']
  }
}`,...(v=(_=o.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};const F=["argTypesData","argsData","Default","ColumnDirection","LongText","WithStyles"],O=Object.freeze(Object.defineProperty({__proto__:null,ColumnDirection:r,Default:e,LongText:s,WithStyles:o,__namedExportsOrder:F,argTypesData:x,argsData:T,default:V},Symbol.toStringTag,{value:"Module"}));export{r as C,O as D,s as L,e as a};
//# sourceMappingURL=description_list.stories-36d95edd.js.map
