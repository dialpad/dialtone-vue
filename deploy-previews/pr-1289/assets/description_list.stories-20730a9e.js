import{c as L}from"./storybook_utils-82e80e48.js";import{b as c}from"./stack_constants-4f71ebff.js";import{n as y}from"./_plugin-vue2_normalizer-2bbd088e.js";const S=["row","column"];const b={name:"DtDescriptionList",props:{direction:{type:String,default:"row",validator:r=>S.includes(r)},items:{type:Array,default:()=>[]},gap:{type:String,default:"400",validator:r=>c.includes(r)}},computed:{getDirectionClass(){return`dt-description-list--${this.direction}`},getGapClass(){return c.includes(this.gap)?`dt-description-list--gap-${this.gap}`:null}}};var h=function(){var e=this,i=e._self._c;return i("dl",{class:["dt-description-list",e.getDirectionClass,e.getGapClass]},[e._l(e.items,function(l){return[i("dt",{staticClass:"dt-description-list__term"},[e._v(" "+e._s(l.term)+" ")]),i("dd",{staticClass:"dt-description-list__description"},[e._v(" "+e._s(l.description)+" ")])]})],2)},I=[];h._withStripped=!0;var n=y(b,h,I,!1,null,null,null,null);n.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list.vue";const T=n.exports;n.exports.__docgenInfo={displayName:"DtDescriptionList",exportName:"default",description:"",tags:{},props:[{name:"direction",description:"The direction for the list",tags:{},values:["row","column"],type:{name:"string"},defaultValue:{func:!1,value:"'row'"}},{name:"items",description:"A list of (key, value) that represent the term and the description",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"gap",description:"Set the space between the elements",tags:{},values:["0","100","200","300","400","500","600"],type:{name:"string"},defaultValue:{func:!1,value:"'400'"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list.vue"]};const R={name:"DtDescriptionListDefault",components:{DtDescriptionList:T}};var x=function(){var e=this,i=e._self._c;return i("dt-description-list",{attrs:{gap:e.gap,items:e.items,direction:e.direction}})},V=[];x._withStripped=!0;var a=y(R,x,V,!1,null,null,null,null);a.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list_default.story.vue";const $=a.exports;a.exports.__docgenInfo={displayName:"DtDescriptionListDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list_default.story.vue"]};const C={items:{control:"object",table:{defaultValue:{summary:"{ term: string, description: string }[]"}}}},w={direction:"row",gap:"400",items:[{term:"Customer Intent",description:"Hello, I'm looking to return my TV"},{term:"Reason",description:"Refound"},{term:"Country",description:"England"},{term:"Random",description:"Value"}]},k={items:[{term:"Customer Intent",description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
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
    </div>`}),E={title:"Components/Description List",component:T,args:w,argTypes:C,decorators:[z],excludeStories:/.*Data$/},F=(r,{argTypes:e})=>L(r,e,$),t={render:F,args:{}},s={...t,args:{direction:"column"}},o={...t,args:{...t.args,items:k.items}};var d,u,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,_,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Default,
  args: {
    direction: 'column'
  }
}`,...(g=(_=s.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};var f,v,D;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    items: argsDataLongText.items
  }
}`,...(D=(v=o.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const N=["argTypesData","argsData","Default","ColumnDirection","LongText"],j=Object.freeze(Object.defineProperty({__proto__:null,ColumnDirection:s,Default:t,LongText:o,__namedExportsOrder:N,argTypesData:C,argsData:w,default:E},Symbol.toStringTag,{value:"Module"}));export{s as C,j as D,o as L,t as a};
//# sourceMappingURL=description_list.stories-20730a9e.js.map
