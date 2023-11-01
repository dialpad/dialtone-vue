import{c as I}from"./storybook_utils-82e80e48.js";import{b as d}from"./stack_constants-4f71ebff.js";import{n as T}from"./_plugin-vue2_normalizer-2bbd088e.js";const R=["row","column"],j=t=>t.term?typeof t.term=="string":!1,z=t=>t.description?typeof t.description=="string":!1,A=t=>Array.isArray(t)?t.every(e=>!(typeof e!="object"||!j(e)||!z(e))):!1;const q={name:"DtDescriptionList",props:{direction:{type:String,default:"row",validator:t=>R.includes(t)},items:{type:Array,default:()=>[],validator:t=>A(t),required:!0},gap:{type:String,default:"400",validator:t=>d.includes(t)},termClass:{type:[String,Array,Object],default:""},descriptionClass:{type:[String,Array,Object],default:""}},computed:{getDirectionClass(){return`dt-description-list--${this.direction}`},getGapClass(){return d.includes(this.gap)?`dt-description-list--gap-${this.gap}`:null}}};var S=function(){var e=this,s=e._self._c;return s("dl",{class:["dt-description-list",e.getDirectionClass,e.getGapClass]},[e._l(e.items,function(c){return[s("dt",{class:["dt-description-list__term",e.termClass]},[e._v(" "+e._s(c.term)+" ")]),s("dd",{class:["dt-description-list__description",e.descriptionClass]},[e._v(" "+e._s(c.description)+" ")])]})],2)},O=[];S._withStripped=!0;var o=T(q,S,O,!1,null,null,null,null);o.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list.vue";const x=o.exports;o.exports.__docgenInfo={displayName:"DtDescriptionList",exportName:"default",description:"",tags:{},props:[{name:"direction",description:"The direction for the list",tags:{},values:["row","column"],type:{name:"string"},defaultValue:{func:!1,value:"'row'"}},{name:"items",description:"A list of (key, value) that represent the term and the description",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"gap",description:"Set the space between the elements",tags:{},values:["0","100","200","300","400","500","600"],type:{name:"string"},defaultValue:{func:!1,value:"'400'"}},{name:"termClass",description:"Used to customize the term element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"descriptionClass",description:"Used to customize the description element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list.vue"]};const $={name:"DtDescriptionListDefault",components:{DtDescriptionList:x}};var w=function(){var e=this,s=e._self._c;return s("dt-description-list",{attrs:{gap:e.gap,items:e.items,direction:e.direction,"term-class":e.termClass,"description-class":e.descriptionClass}})},k=[];w._withStripped=!0;var l=T($,w,k,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list_default.story.vue";const E=l.exports;l.exports.__docgenInfo={displayName:"DtDescriptionListDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list_default.story.vue"]};const L={items:{control:"object",table:{defaultValue:{summary:"{ term: string, description: string }[]"}}}},V={direction:"row",gap:"400",items:[{term:"Customer Intent",description:"Hello, I'm looking to return my TV"},{term:"Reason",description:"Refound"},{term:"Country",description:"England"},{term:"Random",description:"Value"}]},F={items:[{term:"Customer Intent",description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
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
    </div>`}),G={title:"Components/Description List",component:x,args:V,argTypes:L,decorators:[N],excludeStories:/.*Data$/},P=(t,{argTypes:e})=>I(t,e,E),r={render:P,args:{}},i={...r,args:{direction:"column"}},a={...r,args:{...r.args,items:F.items}},n={...r,args:{...r.args,termClass:["d-fw-bold","d-fc-disabled"]}};var u,p,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,_,g;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Default,
  args: {
    direction: 'column'
  }
}`,...(g=(_=i.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};var v,D,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    items: argsDataLongText.items
  }
}`,...(y=(D=a.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var h,C,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    termClass: ['d-fw-bold', 'd-fc-disabled']
  }
}`,...(b=(C=n.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const U=["argTypesData","argsData","Default","ColumnDirection","LongText","WithStyles"],M=Object.freeze(Object.defineProperty({__proto__:null,ColumnDirection:i,Default:r,LongText:a,WithStyles:n,__namedExportsOrder:U,argTypesData:L,argsData:V,default:G},Symbol.toStringTag,{value:"Module"}));export{i as C,M as D,a as L,r as a};
//# sourceMappingURL=description_list.stories-3e6b8648.js.map
