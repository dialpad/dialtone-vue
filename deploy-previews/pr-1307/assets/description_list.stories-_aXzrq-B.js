import{c as V}from"./storybook_utils-XrTpeJKJ.js";import{b}from"./stack_constants-45i7xhSZ.js";import{n as T}from"./_plugin-vue2_normalizer-XBmYDgEh.js";const I=["row","column"],R=t=>t.term?typeof t.term=="string":!1,j=t=>t.description?typeof t.description=="string":!1,z=t=>Array.isArray(t)?t.every(e=>!(typeof e!="object"||!R(e)||!j(e))):!1,A={name:"DtDescriptionList",props:{direction:{type:String,default:"row",validator:t=>I.includes(t)},items:{type:Array,default:()=>[],validator:t=>z(t),required:!0},gap:{type:String,default:"400",validator:t=>b.includes(t)},termClass:{type:[String,Array,Object],default:""},descriptionClass:{type:[String,Array,Object],default:""}},computed:{dtClass(){return["dt-description-list__term",this.termClass]},ddClass(){return["dt-description-list__description",this.descriptionClass]},getDirectionClass(){return`dt-description-list--${this.direction}`},getGapClass(){return`dt-description-list--gap-${this.gap}`}}};var S=function(){var e=this,s=e._self._c;return s("dl",{class:["dt-description-list",e.getDirectionClass,e.getGapClass]},[e._l(e.items,function(n){return[s("dt",{key:`dt-${n.term}`,class:e.dtClass},[e._v(" "+e._s(n.term)+" ")]),s("dd",{key:`dd-${n.term}`,class:e.ddClass},[e._v(" "+e._s(n.description)+" ")])]})],2)},k=[];S._withStripped=!0;var l=T(A,S,k,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list.vue";const w=l.exports;l.exports.__docgenInfo={displayName:"DtDescriptionList",exportName:"default",description:"",tags:{},props:[{name:"direction",description:"The direction for the list",tags:{},values:["row","column"],type:{name:"string"},defaultValue:{func:!1,value:"'row'"}},{name:"items",description:"A list of items that represent the term and the description",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"gap",description:"Set the space between the elements",tags:{},values:["0","100","200","300","400","500","600"],type:{name:"string"},defaultValue:{func:!1,value:"'400'"}},{name:"termClass",description:"Used to customize the term element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"descriptionClass",description:"Used to customize the description element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list.vue"]};const q={name:"DtDescriptionListDefault",components:{DtDescriptionList:w}};var x=function(){var e=this,s=e._self._c;return s("dt-description-list",{attrs:{gap:e.$attrs.gap,items:e.$attrs.items,direction:e.$attrs.direction,"term-class":e.$attrs.termClass,"description-class":e.$attrs.descriptionClass}})},O=[];x._withStripped=!0;var c=T(q,x,O,!1,null,null,null,null);c.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list_default.story.vue";const E=c.exports;c.exports.__docgenInfo={displayName:"DtDescriptionListDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list_default.story.vue"]};const L={items:{control:"object",table:{defaultValue:{summary:"{ term: string, description: string }[]"}}},direction:{options:["row","column"],control:{type:"radio"}},gap:{options:b,control:{type:"select"}}},$={direction:"row",gap:"400",items:[{term:"Customer Intent",description:"Hello, I'm looking to return my TV"},{term:"Reason",description:"Refound"},{term:"Country",description:"England"},{term:"Random",description:"Value"}]},F={items:[{term:"Customer Intent",description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`},{term:"Three word term",description:` Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`},{term:"Country",description:"England"},{term:"Random",description:"Value"}]},N=()=>({template:`<div
      style="width: var(--dt-size-925);
      overflow: hidden;
      resize: horizontal;
      height: auto;
      border: 1px solid var(--dt-color-border-subtle);
      padding: var(--dt-space-450);
      borderRadius: var(--dt-size-radius-400);"
      >
      <story />
    </div>`}),G={title:"Components/Description List",component:w,args:$,argTypes:L,decorators:[N],excludeStories:/.*Data$/},P=(t,{argTypes:e})=>V(t,e,E),r={render:P,args:{}},i={...r,args:{direction:"column"}},a={...r,args:{...r.args,items:F.items}},o={...r,args:{...r.args,termClass:["d-fw-bold","d-fc-disabled"]}};var d,u,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,f,_;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Default,
  args: {
    direction: 'column'
  }
}`,...(_=(f=i.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var g,v,D;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    items: argsDataLongText.items
  }
}`,...(D=(v=a.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var y,h,C;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    termClass: ['d-fw-bold', 'd-fc-disabled']
  }
}`,...(C=(h=o.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const U=["argTypesData","argsData","Default","ColumnDirection","LongText","WithStyles"],M=Object.freeze(Object.defineProperty({__proto__:null,ColumnDirection:i,Default:r,LongText:a,WithStyles:o,__namedExportsOrder:U,argTypesData:L,argsData:$,default:G},Symbol.toStringTag,{value:"Module"}));export{i as C,M as D,a as L,r as a};
//# sourceMappingURL=description_list.stories-_aXzrq-B.js.map
