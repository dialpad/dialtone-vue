import{c as d}from"./storybook_utils-XrTpeJKJ.js";import{D as s,f as v}from"./fry-f6OqCZxp.js";import{n as u}from"./_plugin-vue2_normalizer-XBmYDgEh.js";import{a as x}from"./chunk-AY7I2SME-4UylTnhF.js";const h={name:"DtImageViewerDefault",components:{DtImageViewer:s},data:function(){return{isOpen:this.$attrs.open}},watch:{open:function(a){this.isOpen=a}}};var D=function(){var e=this,t=e._self._c;return t("dt-image-viewer",{attrs:{"image-src":e.$attrs.imageSrc,"image-alt":e.$attrs.imageAlt,"close-aria-label":e.$attrs.closeAriaLabel,"image-button-class":e.$attrs.imageButtonClass,"aria-label":e.$attrs.ariaLabel,open:e.isOpen},on:{"update:open":function(y){e.isOpen=y},opened:e.$attrs.onOpened}})},I=[],f=u(h,D,I,!1,null,null,null,null);const A=f.exports;f.exports.__docgenInfo={displayName:"DtImageViewerDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/image_viewer/image_viewer_default.story.vue"]};const o=""+new URL("test-mtc3yI39.jpg",import.meta.url).href,C={name:"DtImageViewerVariants",components:{DtImageViewer:s},data(){return{test:o,fry:v}}};var V=function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-stack16"},[t("dt-image-viewer",{attrs:{"image-src":e.test,"image-alt":"Alt Text","close-aria-label":"Close","image-button-class":"d-wmn64 d-hmn64 w-wmx332 d-hmx332","aria-label":"Click to open image"}}),t("dt-image-viewer",{attrs:{"image-src":e.fry,"image-alt":"Alt Text","close-aria-label":"Close","image-button-class":"d-wmn64 d-hmn64 w-wmx332 d-hmx332","aria-label":"Click to open image"}})],1)},T=[],_=u(C,V,T,!1,null,null,null,null);const $=_.exports;_.exports.__docgenInfo={displayName:"DtImageViewerVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/image_viewer/image_viewer_variants.story.vue"]};const w={onOpened:x("opened"),imageSrc:o,imageAlt:"Image Alt Text",closeAriaLabel:"Close",imageButtonClass:"d-wmn64 d-hmn64 w-wmx332 d-hmx332",ariaLabel:"Click to open image"},b={imageSrc:{description:"Url for the image",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},imageAlt:{description:"Alt for image",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},imageButtonClass:{description:"Image button class",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},ariaLabel:{description:"Aria label for image button",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},closeAriaLabel:{description:"Aria label for close",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},onOpened:{table:{disable:!0}},"update:open":{table:{disable:!0}},opened:{description:"emitted when popover is shown or hidden.",table:{type:{summary:"event"}}}},L={title:"Components/Image Viewer",component:s,args:w,argTypes:b,excludeStories:/.*Data$/},S=(a,{argTypes:e})=>d(a,e,A),O=(a,{argTypes:e})=>d(a,e,$),r={render:S,args:{imageSrc:o,imageAlt:"Image Alt Text",closeAriaLabel:"Close",imageButtonClass:"d-wmn64 d-hmn64 w-wmx332 d-hmx332",ariaLabel:"Click to open image"}},n={render:O,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"aria-allowed-attr",enabled:!1}]}}}};var i,l,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    imageSrc: defaultImage,
    imageAlt: 'Image Alt Text',
    closeAriaLabel: 'Close',
    imageButtonClass: 'd-wmn64 d-hmn64 w-wmx332 d-hmx332',
    ariaLabel: 'Click to open image'
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,p,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {},
  parameters: {
    options: {
      showPanel: false
    },
    a11y: {
      config: {
        rules: [{
          id: 'aria-allowed-attr',
          enabled: false
        }]
      }
    }
  }
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const k=["argsData","argTypesData","Default","Variants"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:n,__namedExportsOrder:k,argTypesData:b,argsData:w,default:L},Symbol.toStringTag,{value:"Module"}));export{r as D,P as I,n as V};
//# sourceMappingURL=image_viewer.stories-Azx82_Xc.js.map
