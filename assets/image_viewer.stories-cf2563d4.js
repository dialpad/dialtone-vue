import{c as d}from"./storybook_utils-4cdf99b7.js";import{D as o}from"./image_viewer-3a21cf52.js";import{n as u}from"./_plugin-vue2_normalizer-2bbd088e.js";import{f as v}from"./fry-269daf43.js";import{a as x}from"./chunk-AY7I2SME-5eb1ab46.js";const h={name:"DtImageViewerDefault",components:{DtImageViewer:o},data:function(){return{isOpen:this.open}},watch:{open:function(a){this.isOpen=a}}};var D=function(){var e=this,t=e._self._c;return t("dt-image-viewer",{attrs:{"image-src":e.imageSrc,"image-alt":e.imageAlt,"close-aria-label":e.closeAriaLabel,"image-button-class":e.imageButtonClass,"aria-label":e.ariaLabel,open:e.isOpen},on:{"update:open":function(y){e.isOpen=y},opened:e.onOpened}})},I=[],f=u(h,D,I,!1,null,null,null,null);const A=f.exports;f.exports.__docgenInfo={displayName:"DtImageViewerDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/image_viewer/image_viewer_default.story.vue"]};const s=""+new URL("test-078acfea.jpg",import.meta.url).href,C={name:"DtImageViewerVariants",components:{DtImageViewer:o},data(){return{test:s,fry:v}}};var V=function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-stack16"},[t("dt-image-viewer",{attrs:{"image-src":e.test,"image-alt":"Alt Text","close-aria-label":"Close","image-button-class":"d-wmn64 d-hmn64 w-wmx332 d-hmx332","aria-label":"Click to open image"}}),t("dt-image-viewer",{attrs:{"image-src":e.fry,"image-alt":"Alt Text","close-aria-label":"Close","image-button-class":"d-wmn64 d-hmn64 w-wmx332 d-hmx332","aria-label":"Click to open image"}})],1)},T=[],_=u(C,V,T,!1,null,null,null,null);const L=_.exports;_.exports.__docgenInfo={displayName:"DtImageViewerVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/image_viewer/image_viewer_variants.story.vue"]};const w={onOpened:x("opened"),imageSrc:s,imageAlt:"Image Alt Text",closeAriaLabel:"Close",imageButtonClass:"d-wmn64 d-hmn64 w-wmx332 d-hmx332",ariaLabel:"Click to open image"},b={imageSrc:{description:"Url for the image",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},imageAlt:{description:"Alt for image",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},imageButtonClass:{description:"Image button class",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},ariaLabel:{description:"Aria label for image button",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},closeAriaLabel:{description:"Aria label for close",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},onOpened:{table:{disable:!0}},"update:open":{table:{disable:!0}},opened:{description:"emitted when popover is shown or hidden.",table:{type:{summary:"event"}}}},S={title:"Components/Image Viewer",component:o,args:w,argTypes:b,excludeStories:/.*Data$/},O=(a,{argTypes:e})=>d(a,e,A),k=(a,{argTypes:e})=>d(a,e,L),r={render:O,args:{imageSrc:s,imageAlt:"Image Alt Text",closeAriaLabel:"Close",imageButtonClass:"d-wmn64 d-hmn64 w-wmx332 d-hmx332",ariaLabel:"Click to open image"}},n={render:k,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"aria-allowed-attr",enabled:!1}]}}}};var i,l,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const F=["argsData","argTypesData","Default","Variants"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:n,__namedExportsOrder:F,argTypesData:b,argsData:w,default:S},Symbol.toStringTag,{value:"Module"}));export{r as D,R as I,n as V};
//# sourceMappingURL=image_viewer.stories-cf2563d4.js.map