import{c as L}from"./storybook_utils-82e80e48.js";import{n as D}from"./_plugin-vue2_normalizer-2bbd088e.js";const w=["row","column"];const b={name:"DtDescriptionList",props:{direction:{type:String,default:"row",validator:r=>w.includes(r)},items:{type:Array,default:()=>[]}},computed:{getDirectionClass(){return`dt-description-list--${this.direction}`}}};var y=function(){var e=this,i=e._self._c;return i("dl",{class:["dt-description-list",e.getDirectionClass]},[e._l(e.items,function(c){return[i("dt",{staticClass:"dt-description-list__term"},[e._v(" "+e._s(c.term)+" ")]),i("dd",{staticClass:"dt-description-list__description"},[e._v(" "+e._s(c.description)+" ")])]})],2)},S=[];y._withStripped=!0;var n=D(b,y,S,!1,null,null,null,null);n.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list.vue";const h=n.exports;n.exports.__docgenInfo={displayName:"DtDescriptionList",exportName:"default",description:"",tags:{},props:[{name:"direction",description:"The direction for the list",tags:{},values:["row","column"],type:{name:"string"},defaultValue:{func:!1,value:"'row'"}},{name:"items",description:"A list of (key, value) that represent the term and the description",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list.vue"]};const I={name:"DtDescriptionListDefault",components:{DtDescriptionList:h}};var T=function(){var e=this,i=e._self._c;return i("dt-description-list",{attrs:{items:e.items,direction:e.direction}})},R=[];T._withStripped=!0;var a=D(I,T,R,!1,null,null,null,null);a.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list_default.story.vue";const V=a.exports;a.exports.__docgenInfo={displayName:"DtDescriptionListDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list_default.story.vue"]};const x={items:{control:"object",table:{defaultValue:{summary:"{ term: string, description: string }[]"}}}},C={direction:"row",items:[{term:"Customer Intent",description:"Hello, I'm looking to return my TV"},{term:"Reason",description:"Refound"},{term:"Country",description:"England"},{term:"Random",description:"Value"}]},k={items:[{term:"Customer Intent",description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
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
    </div>`}),E={title:"Components/Description List",component:h,args:C,argTypes:x,decorators:[z],excludeStories:/.*Data$/},F=(r,{argTypes:e})=>L(r,e,V),t={render:F,args:{}},o={...t,args:{direction:"column"}},s={...t,args:{...t.args,items:k.items}};var l,d,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,m,_;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Default,
  args: {
    direction: 'column'
  }
}`,...(_=(m=o.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};var f,g,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    items: argsDataLongText.items
  }
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const N=["argTypesData","argsData","Default","ColumnDirection","LongText"],O=Object.freeze(Object.defineProperty({__proto__:null,ColumnDirection:o,Default:t,LongText:s,__namedExportsOrder:N,argTypesData:x,argsData:C,default:E},Symbol.toStringTag,{value:"Module"}));export{o as C,O as D,s as L,t as a};
//# sourceMappingURL=description_list.stories-2d285b6f.js.map
