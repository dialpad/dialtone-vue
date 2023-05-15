import{c as L}from"./storybook_utils-58c64c5e.js";import{D as C}from"./card-5e4a62ed.js";import{D as W}from"./icon-525487a4.js";import{D as k}from"./button-b421fc95.js";import{n as M}from"./_plugin-vue2_normalizer-2bbd088e.js";const V={name:"DtCardDefault",components:{DtCard:C,DtButton:k,DtIcon:W},props:{showHeader:{type:Boolean,default:!1},showFooter:{type:Boolean,default:!1},variants:{type:Boolean,default:!1},maxHeight:{type:String,default:null}}};var F=function(){var e=this,t=e._self._c;return t("dt-card",{staticClass:"d-w264",attrs:{"container-class":e.containerClass,"header-class":e.headerClass,"content-class":e.contentClass,"footer-class":e.footerClass,"max-height":e.maxHeight},scopedSlots:e._u([e.showHeader&&e.variants?{key:"header",fn:function(){return[t("p",[e._v("Header")]),t("dt-button",{attrs:{size:"xs",importance:"clear","aria-label":"Menu button"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("dt-icon",{attrs:{name:"more-vertical",size:"100"}})]},proxy:!0}],null,!1,2577683190)})]},proxy:!0}:e.header?{key:"header",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.header)}})]},proxy:!0}:null,{key:"content",fn:function(){return[e.content?t("div",[t("span",{domProps:{innerHTML:e._s(e.content)}})]):t("div",{attrs:{tabindex:"0"}},[t("p",{staticClass:"d-fs-200 d-fw-bold"},[e._v(" Lorem ipsum ")]),t("p",{staticClass:"d-fs-100"},[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum molestie semper. Morbi finibus nulla turpis, nec molestie mi rutrum. ")])])]},proxy:!0},e.showFooter&e.variants?{key:"footer",fn:function(){return[t("dt-button",[e._v(" Button 1 ")]),t("dt-button",{staticClass:"d-ml8"},[e._v(" Button 2 ")])]},proxy:!0}:e.footer?{key:"footer",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.footer)}})]},proxy:!0}:null],null,!0)})},B=[];F._withStripped=!0;var u=M(V,F,B,!1,null,null,null,null);u.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/card/card_default.story.vue";const N=u.exports;u.exports.__docgenInfo={displayName:"DtCardDefault",exportName:"default",description:"",tags:{},props:[{name:"showHeader",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showFooter",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"variants",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxHeight",type:{name:"string"},defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/card/card_default.story.vue"]};const S={},T={showFooter:{table:{disable:!0}},showHeader:{table:{disable:!0}},variants:{table:{disable:!0}},content:{control:"text",table:{type:{summary:"VNode"}}},footer:{control:"text",table:{type:{summary:"VNode"}}},header:{control:"text",table:{type:{summary:"VNode"}}}},z={title:"Components/Card",component:C,args:S,argTypes:T,excludeStories:/.*Data$/},l=(c,{argTypes:e})=>L(c,e,N),r={render:l,args:{},parameters:{docs:{source:{code:`
  <dt-card class="d-w264">
    <template #content>
      <p class="d-fs-200 d-fw-bold">Lorem ipsum</p>
      <p class="d-fs-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec fermentum molestie semper. Morbi finibus nulla turpis, nec molestie mi rutrum.</p>
    </template>
  </dt-card>`}}}},a={render:l,args:{showHeader:!0,variants:!0}},o={render:l,args:{showFooter:!0,variants:!0}},s={render:l,args:{showHeader:!0,showFooter:!0,variants:!0}},n={render:l,args:{maxHeight:"50px"}};var d,i,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,f,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showHeader: true,
    variants: true
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var _,g,v;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showFooter: true,
    variants: true
  }
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,b,D;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showHeader: true,
    showFooter: true,
    variants: true
  }
}`,...(D=(b=s.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var w,x,H;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    maxHeight: '50px'
  }
}`,...(H=(x=n.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};const P=["argsData","argTypesData","Default","WithHeader","WithFooter","WithHeaderAndFooter","WithScrollableContent"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:r,WithFooter:o,WithHeader:a,WithHeaderAndFooter:s,WithScrollableContent:n,__namedExportsOrder:P,argTypesData:T,argsData:S,default:z},Symbol.toStringTag,{value:"Module"}));export{R as C,r as D,a as W,o as a,s as b,n as c};
//# sourceMappingURL=card.stories-e2f1a110.js.map
