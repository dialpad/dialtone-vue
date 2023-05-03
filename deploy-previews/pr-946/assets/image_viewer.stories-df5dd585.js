import{c as _}from"./storybook_utils-1ef620d9.js";import{D as o,_ as h}from"./fry-b39c45cc.js";import{n as f}from"./_plugin-vue2_normalizer-2bbd088e.js";import{a as D}from"./chunk-OPEUWD42-0dc0813d.js";const A={name:"DtImageViewerDefault",components:{DtImageViewer:o},data:function(){return{isOpen:this.open}},watch:{open:function(a){this.isOpen=a}}};var w=function(){var e=this,t=e._self._c;return t("dt-image-viewer",{attrs:{"image-src":e.imageSrc,"image-alt":e.imageAlt,"close-aria-label":e.closeAriaLabel,"image-button-class":e.imageButtonClass,"aria-label":e.ariaLabel,open:e.isOpen},on:{"update:open":function(x){e.isOpen=x},opened:e.onOpened}})},C=[];w._withStripped=!0;var s=f(A,w,C,!1,null,null,null,null);s.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/image_viewer/image_viewer_default.story.vue";const I=s.exports;s.exports.__docgenInfo={displayName:"DtImageViewerDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/image_viewer/image_viewer_default.story.vue"]};const i=""+new URL("test-078acfea.jpg",import.meta.url).href,V={name:"DtImageViewerVariants",components:{DtImageViewer:o},data(){return{test:i,fry:h}}};var v=function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-stack16"},[t("dt-image-viewer",{attrs:{"image-src":e.test,"image-alt":"Alt Text","close-aria-label":"Close","image-button-class":"d-wmn64 d-hmn64 w-wmx332 d-hmx332","aria-label":"Click to open image"}}),t("dt-image-viewer",{attrs:{"image-src":e.fry,"image-alt":"Alt Text","close-aria-label":"Close","image-button-class":"d-wmn64 d-hmn64 w-wmx332 d-hmx332","aria-label":"Click to open image"}})],1)},T=[];v._withStripped=!0;var l=f(V,v,T,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/image_viewer/image_viewer_variants.story.vue";const S=l.exports;l.exports.__docgenInfo={displayName:"DtImageViewerVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/image_viewer/image_viewer_variants.story.vue"]};const b={onOpened:D("opened"),imageSrc:i,imageAlt:"Image Alt Text",closeAriaLabel:"Close",imageButtonClass:"d-wmn64 d-hmn64 w-wmx332 d-hmx332",ariaLabel:"Click to open image"},y={imageSrc:{description:"Url for the image",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},imageAlt:{description:"Alt for image",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},imageButtonClass:{description:"Image button class",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},ariaLabel:{description:"Aria label for image button",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},closeAriaLabel:{description:"Aria label for close",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},onOpened:{table:{disable:!0}},"update:open":{table:{disable:!0}},opened:{description:"emitted when popover is shown or hidden.",table:{type:{summary:"event"}}}},L={title:"Components/Image Viewer",component:o,args:b,argTypes:y,excludeStories:/.*Data$/},k=(a,{argTypes:e})=>_(a,e,I),O=(a,{argTypes:e})=>_(a,e,S),r={render:k,args:{imageSrc:i,imageAlt:"Image Alt Text",closeAriaLabel:"Close",imageButtonClass:"d-wmn64 d-hmn64 w-wmx332 d-hmx332",ariaLabel:"Click to open image"}},n={render:O,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"aria-allowed-attr",enabled:!1}]}}}};var m,c,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    imageSrc: defaultImage,
    imageAlt: 'Image Alt Text',
    closeAriaLabel: 'Close',
    imageButtonClass: 'd-wmn64 d-hmn64 w-wmx332 d-hmx332',
    ariaLabel: 'Click to open image'
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,g,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const F=["argsData","argTypesData","Default","Variants"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:n,__namedExportsOrder:F,argTypesData:y,argsData:b,default:L},Symbol.toStringTag,{value:"Module"}));export{r as D,P as I,n as V,b as a,y as b};
//# sourceMappingURL=image_viewer.stories-df5dd585.js.map
