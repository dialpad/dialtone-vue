import{c as C}from"./storybook_utils-XrTpeJKJ.js";import{b as L}from"./stack_constants-45i7xhSZ.js";import{D as v}from"./description_list-qQG62u0x.js";import{n as h}from"./_plugin-vue2_normalizer-XBmYDgEh.js";const S={name:"DtDescriptionListDefault",components:{DtDescriptionList:v}};var w=function(){var t=this,x=t._self._c;return x("dt-description-list",{attrs:{gap:t.$attrs.gap,items:t.$attrs.items,direction:t.$attrs.direction,"term-class":t.$attrs.termClass,"description-class":t.$attrs.descriptionClass}})},z=[],b=h(S,w,z,!1,null,null,null,null);const R=b.exports;b.exports.__docgenInfo={displayName:"DtDescriptionListDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list_default.story.vue"]};const y={items:{control:"object",table:{defaultValue:{summary:"{ term: string, description: string }[]"}}},direction:{options:["row","column"],control:{type:"radio"}},gap:{options:L,control:{type:"select"}}},T={direction:"row",gap:"400",items:[{term:"Customer Intent",description:"Hello, I'm looking to return my TV"},{term:"Reason",description:"Refound"},{term:"Country",description:"England"},{term:"Random",description:"Value"}]},$={items:[{term:"Customer Intent",description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
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
    </div>`}),V={title:"Components/Description List",component:v,args:T,argTypes:y,decorators:[q],excludeStories:/.*Data$/},E=(a,{argTypes:t})=>C(a,t,R),e={render:E,args:{}},r={...e,args:{direction:"column"}},s={...e,args:{...e.args,items:$.items}},o={...e,args:{...e.args,termClass:["d-fw-bold","d-fc-disabled"]}};var i,n,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var l,d,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Default,
  args: {
    direction: 'column'
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    items: argsDataLongText.items
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,D,_;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    termClass: ['d-fw-bold', 'd-fc-disabled']
  }
}`,...(_=(D=o.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const F=["argTypesData","argsData","Default","ColumnDirection","LongText","WithStyles"],A=Object.freeze(Object.defineProperty({__proto__:null,ColumnDirection:r,Default:e,LongText:s,WithStyles:o,__namedExportsOrder:F,argTypesData:y,argsData:T,default:V},Symbol.toStringTag,{value:"Module"}));export{r as C,A as D,s as L,e as a};
//# sourceMappingURL=description_list.stories-PJ14XdDR.js.map
