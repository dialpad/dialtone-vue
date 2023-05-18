import{c as S}from"./storybook_utils-2a3c9efe.js";import{D as H}from"./card-bf2d171f.js";import{D as L}from"./icon-5d4e954b.js";import{D as W}from"./button-82727ed7.js";import{n as M}from"./_plugin-vue2_normalizer-2bbd088e.js";const V={name:"DtCardDefault",components:{DtCard:H,DtButton:W,DtIcon:L},props:{showHeader:{type:Boolean,default:!1},showFooter:{type:Boolean,default:!1},variants:{type:Boolean,default:!1},maxHeight:{type:String,default:null}}};var k=function(){var e=this,t=e._self._c;return t("dt-card",{staticClass:"d-w264",attrs:{"container-class":e.containerClass,"header-class":e.headerClass,"content-class":e.contentClass,"footer-class":e.footerClass,"max-height":e.maxHeight},scopedSlots:e._u([e.showHeader&&e.variants?{key:"header",fn:function(){return[t("p",[e._v("Header")]),t("dt-button",{attrs:{size:"xs",importance:"clear","aria-label":"Menu button"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("dt-icon",{attrs:{name:"more-vertical",size:"100"}})]},proxy:!0}],null,!1,2577683190)})]},proxy:!0}:e.header?{key:"header",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.header)}})]},proxy:!0}:null,{key:"content",fn:function(){return[e.content?t("div",[t("span",{domProps:{innerHTML:e._s(e.content)}})]):t("div",{attrs:{tabindex:"0"}},[t("p",{staticClass:"d-fs-200 d-fw-bold"},[e._v(" Lorem ipsum ")]),t("p",{staticClass:"d-fs-100"},[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum molestie semper. Morbi finibus nulla turpis, nec molestie mi rutrum. ")])])]},proxy:!0},e.showFooter&e.variants?{key:"footer",fn:function(){return[t("dt-button",[e._v(" Button 1 ")]),t("dt-button",{staticClass:"d-ml8"},[e._v(" Button 2 ")])]},proxy:!0}:e.footer?{key:"footer",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.footer)}})]},proxy:!0}:null],null,!0)})},B=[],C=M(V,k,B,!1,null,null,null,null);const N=C.exports;C.exports.__docgenInfo={displayName:"DtCardDefault",exportName:"default",description:"",tags:{},props:[{name:"showHeader",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showFooter",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"variants",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxHeight",type:{name:"string"},defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/card/card_default.story.vue"]};const F={},T={showFooter:{table:{disable:!0}},showHeader:{table:{disable:!0}},variants:{table:{disable:!0}},content:{control:"text",table:{type:{summary:"VNode"}}},footer:{control:"text",table:{type:{summary:"VNode"}}},header:{control:"text",table:{type:{summary:"VNode"}}}},z={title:"Components/Card",component:H,args:F,argTypes:T,excludeStories:/.*Data$/},l=(u,{argTypes:e})=>S(u,e,N),r={render:l,args:{},parameters:{docs:{source:{code:`
  <dt-card class="d-w264">
    <template #content>
      <p class="d-fs-200 d-fw-bold">Lorem ipsum</p>
      <p class="d-fs-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec fermentum molestie semper. Morbi finibus nulla turpis, nec molestie mi rutrum.</p>
    </template>
  </dt-card>`}}}},a={render:l,args:{showHeader:!0,variants:!0}},s={render:l,args:{showFooter:!0,variants:!0}},o={render:l,args:{showHeader:!0,showFooter:!0,variants:!0}},n={render:l,args:{maxHeight:"50px"}};var c,d,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: \`
  <dt-card class="d-w264">
    <template #content>
      <p class="d-fs-200 d-fw-bold">Lorem ipsum</p>
      <p class="d-fs-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec fermentum molestie semper. Morbi finibus nulla turpis, nec molestie mi rutrum.</p>
    </template>
  </dt-card>\`
      }
    }
  }
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,p,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showHeader: true,
    variants: true
  }
}`,...(f=(p=a.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var h,g,_;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showFooter: true,
    variants: true
  }
}`,...(_=(g=s.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var b,y,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showHeader: true,
    showFooter: true,
    variants: true
  }
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var D,x,w;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    maxHeight: '50px'
  }
}`,...(w=(x=n.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const P=["argsData","argTypesData","Default","WithHeader","WithFooter","WithHeaderAndFooter","WithScrollableContent"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:r,WithFooter:s,WithHeader:a,WithHeaderAndFooter:o,WithScrollableContent:n,__namedExportsOrder:P,argTypesData:T,argsData:F,default:z},Symbol.toStringTag,{value:"Module"}));export{R as C,r as D,a as W,s as a,o as b,n as c};
//# sourceMappingURL=card.stories-874f5cfa.js.map
