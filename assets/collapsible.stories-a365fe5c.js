import{a as p}from"./chunk-AY7I2SME-c7b6cf8a.js";import{D as o}from"./collapsible-c51344d7.js";import{c as m}from"./storybook_utils-e1aad9b5.js";import{n as d}from"./_plugin-vue2_normalizer-2bbd088e.js";const f={name:"DtCollapsibleDefaultStory",components:{DtCollapsible:o},data(){return{isOpen:this.open}},watch:{open(s){this.isOpen=s}}};var b=function(){var e=this,t=e._self._c;return t("dt-collapsible",{attrs:{id:e.id,"anchor-text":e.anchorText,"max-height":e.maxHeight,"max-width":e.maxWidth,open:e.isOpen,"initial-focus-element":"first","element-type":e.elementType,"content-element-type":e.contentElementType,"anchor-class":e.anchorClass,"content-class":e.contentClass,"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledBy},on:{opened:e.onOpened},scopedSlots:e._u([{key:"anchor",fn:function({attrs:c}){return e.anchor?[t("div",e._b({domProps:{innerHTML:e._s(e.anchor)}},"div",c,!1))]:void 0}}],null,!0)},[t("template",{slot:"content"},[e.content?t("div",{domProps:{innerHTML:e._s(e.content)}}):t("div",{staticClass:"d-ai-center d-fs-16"},[t("p",[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et ex risus. In id pellentesque tellus. In hac habitasse platea dictumst. Suspendisse nec egestas nulla. Nam fermentum nisi sit amet arcu fringilla, in porta libero volutpat. Proin ac odio egestas, luctus magna a, luctus leo. Maecenas eget orci vel nibh sollicitudin maximus quis at quam. Curabitur imperdiet lacus nec malesuada pharetra. Nullam leo mi, suscipit at arcu vitae, vestibulum rutrum eros. ")]),t("p",[e._v(" Mauris convallis, elit quis imperdiet aliquet, elit elit tincidunt dui, at tincidunt ligula metus ac tortor. Vestibulum vehicula, nibh pulvinar consequat faucibus, turpis metus tempus dui, eu facilisis risus risus at ipsum. Praesent feugiat nibh non ipsum facilisis, volutpat ullamcorper dui vehicula. Nunc mollis dui porta purus tristique aliquam sed at turpis. Phasellus in aliquet sem, sed consequat turpis. Suspendisse potenti. Aenean vitae leo quam. Fusce ipsum nulla, egestas at eros sit amet, consectetur consectetur turpis. Fusce sit amet tellus rutrum, sollicitudin ante porta, consequat dolor. Quisque ut nulla iaculis, eleifend neque in, euismod massa. Sed pulvinar erat nec interdum porttitor. Pellentesque interdum tincidunt nisl, nec finibus augue faucibus sit amet. Morbi vestibulum rhoncus tristique. Duis at vehicula nulla. Sed hendrerit est id lacus placerat cursus. Cras in lacus sit amet ligula ullamcorper vehicula vitae porttitor est. ")])])])],2)},h=[],r=d(f,b,h,!1,null,null,null,null);const v=r.exports;r.exports.__docgenInfo={displayName:"DtCollapsibleDefaultStory",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/collapsible/collapsible_default.story.vue"]};const u={anchorText:"Click me to toggle Content",onOpened:p("opened")},_={anchor:{control:"text",table:{type:{summary:"VNode"}}},content:{control:"text",table:{type:{summary:"VNode"}}},anchorText:{description:"Text on the anchor if slot is unused.",table:{type:{summary:"string"}},control:{type:"text"}},id:{table:{defaultValue:{summary:"generated unique ID"}}},opened:{description:"Emitted whenever the content is collapsed or expanded.",table:{type:{summary:"event"}}},"update:open":{table:{disable:!0}}},g={title:"Components/Collapsible",component:o,argTypes:_,args:u,excludeStories:/.Data$/},y=(s,{argTypes:e})=>m(s,e,v),a={render:y,args:{maxWidth:"512px"}};var i,n,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    maxWidth: '512px'
  }
}`,...(l=(n=a.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const x=["argsData","Default"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:x,argsData:u,default:g},Symbol.toStringTag,{value:"Module"}));export{S as C,a as D};
//# sourceMappingURL=collapsible.stories-a365fe5c.js.map
