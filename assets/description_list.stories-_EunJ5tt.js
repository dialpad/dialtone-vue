import{c as w}from"./storybook_utils-XrTpeJKJ.js";import{b as C}from"./stack_constants-45i7xhSZ.js";import{n as h}from"./_plugin-vue2_normalizer-XBmYDgEh.js";const $=["row","column"],V=t=>t.term?typeof t.term=="string":!1,I=t=>t.description?typeof t.description=="string":!1,R=t=>Array.isArray(t)?t.every(e=>!(typeof e!="object"||!V(e)||!I(e))):!1,j={name:"DtDescriptionList",props:{direction:{type:String,default:"row",validator:t=>$.includes(t)},items:{type:Array,default:()=>[],validator:t=>R(t),required:!0},gap:{type:String,default:"400",validator:t=>C.includes(t)},termClass:{type:[String,Array,Object],default:""},descriptionClass:{type:[String,Array,Object],default:""}},computed:{dtClass(){return["dt-description-list__term",this.termClass]},ddClass(){return["dt-description-list__description",this.descriptionClass]},getDirectionClass(){return`dt-description-list--${this.direction}`},getGapClass(){return`dt-description-list--gap-${this.gap}`}}};var z=function(){var e=this,s=e._self._c;return s("dl",{class:["dt-description-list",e.getDirectionClass,e.getGapClass]},[e._l(e.items,function(o){return[s("dt",{key:`dt-${o.term}`,class:e.dtClass},[e._v(" "+e._s(o.term)+" ")]),s("dd",{key:`dd-${o.term}`,class:e.ddClass},[e._v(" "+e._s(o.description)+" ")])]})],2)},A=[],b=h(j,z,A,!1,null,null,null,null);const T=b.exports;b.exports.__docgenInfo={displayName:"DtDescriptionList",exportName:"default",description:"",tags:{},props:[{name:"direction",description:"The direction for the list",tags:{},values:["row","column"],type:{name:"string"},defaultValue:{func:!1,value:"'row'"}},{name:"items",description:"A list of items that represent the term and the description",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"gap",description:"Set the space between the elements",tags:{},values:["0","100","200","300","400","500","600"],type:{name:"string"},defaultValue:{func:!1,value:"'400'"}},{name:"termClass",description:"Used to customize the term element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"descriptionClass",description:"Used to customize the description element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list.vue"]};const q={name:"DtDescriptionListDefault",components:{DtDescriptionList:T}};var O=function(){var e=this,s=e._self._c;return s("dt-description-list",{attrs:{gap:e.$attrs.gap,items:e.$attrs.items,direction:e.$attrs.direction,"term-class":e.$attrs.termClass,"description-class":e.$attrs.descriptionClass}})},E=[],S=h(q,O,E,!1,null,null,null,null);const F=S.exports;S.exports.__docgenInfo={displayName:"DtDescriptionListDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list_default.story.vue"]};const x={items:{control:"object",table:{defaultValue:{summary:"{ term: string, description: string }[]"}}},direction:{options:["row","column"],control:{type:"radio"}},gap:{options:C,control:{type:"select"}}},L={direction:"row",gap:"400",items:[{term:"Customer Intent",description:"Hello, I'm looking to return my TV"},{term:"Reason",description:"Refound"},{term:"Country",description:"England"},{term:"Random",description:"Value"}]},N={items:[{term:"Customer Intent",description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`},{term:"Three word term",description:` Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`},{term:"Country",description:"England"},{term:"Random",description:"Value"}]},k=()=>({template:`<div
      style="width: var(--dt-size-925);
      overflow: hidden;
      resize: horizontal;
      height: auto;
      border: 1px solid var(--dt-color-border-subtle);
      padding: var(--dt-space-450);
      borderRadius: var(--dt-size-radius-400);"
      >
      <story />
    </div>`}),G={title:"Components/Description List",component:T,args:L,argTypes:x,decorators:[k],excludeStories:/.*Data$/},P=(t,{argTypes:e})=>w(t,e,F),r={render:P,args:{}},a={...r,args:{direction:"column"}},i={...r,args:{...r.args,items:N.items}},n={...r,args:{...r.args,termClass:["d-fw-bold","d-fc-disabled"]}};var l,c,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Default,
  args: {
    direction: 'column'
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,g,_;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    items: argsDataLongText.items
  }
}`,...(_=(g=i.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var D,y,v;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    termClass: ['d-fw-bold', 'd-fc-disabled']
  }
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const U=["argTypesData","argsData","Default","ColumnDirection","LongText","WithStyles"],M=Object.freeze(Object.defineProperty({__proto__:null,ColumnDirection:a,Default:r,LongText:i,WithStyles:n,__namedExportsOrder:U,argTypesData:x,argsData:L,default:G},Symbol.toStringTag,{value:"Module"}));export{a as C,M as D,i as L,r as a};
//# sourceMappingURL=description_list.stories-_EunJ5tt.js.map
