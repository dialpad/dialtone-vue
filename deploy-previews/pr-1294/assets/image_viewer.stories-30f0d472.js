import{c as _}from"./storybook_utils-996a989f.js";import{D as o}from"./image_viewer-cf7a9a45.js";import{n as f}from"./_plugin-vue2_normalizer-2bbd088e.js";import{f as h}from"./fry-269daf43.js";import{a as D}from"./chunk-AY7I2SME-5eb1ab46.js";const I={name:"DtImageViewerDefault",components:{DtImageViewer:o},data:function(){return{isOpen:this.$attrs.open}},watch:{open:function(a){this.isOpen=a}}};var w=function(){var e=this,t=e._self._c;return t("dt-image-viewer",{attrs:{"image-src":e.$attrs.imageSrc,"image-alt":e.$attrs.imageAlt,"close-aria-label":e.$attrs.closeAriaLabel,"image-button-class":e.$attrs.imageButtonClass,"aria-label":e.$attrs.ariaLabel,open:e.isOpen},on:{"update:open":function(x){e.isOpen=x},opened:e.$attrs.onOpened}})},A=[];w._withStripped=!0;var s=f(I,w,A,!1,null,null,null,null);s.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/image_viewer/image_viewer_default.story.vue";const C=s.exports;s.exports.__docgenInfo={displayName:"DtImageViewerDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/image_viewer/image_viewer_default.story.vue"]};const i=""+new URL("test-078acfea.jpg",import.meta.url).href,V={name:"DtImageViewerVariants",components:{DtImageViewer:o},data(){return{test:i,fry:h}}};var v=function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-stack16"},[t("dt-image-viewer",{attrs:{"image-src":e.test,"image-alt":"Alt Text","close-aria-label":"Close","image-button-class":"d-wmn64 d-hmn64 w-wmx332 d-hmx332","aria-label":"Click to open image"}}),t("dt-image-viewer",{attrs:{"image-src":e.fry,"image-alt":"Alt Text","close-aria-label":"Close","image-button-class":"d-wmn64 d-hmn64 w-wmx332 d-hmx332","aria-label":"Click to open image"}})],1)},T=[];v._withStripped=!0;var l=f(V,v,T,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/image_viewer/image_viewer_variants.story.vue";const S=l.exports;l.exports.__docgenInfo={displayName:"DtImageViewerVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/image_viewer/image_viewer_variants.story.vue"]};const b={onOpened:D("opened"),imageSrc:i,imageAlt:"Image Alt Text",closeAriaLabel:"Close",imageButtonClass:"d-wmn64 d-hmn64 w-wmx332 d-hmx332",ariaLabel:"Click to open image"},y={imageSrc:{description:"Url for the image",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},imageAlt:{description:"Alt for image",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},imageButtonClass:{description:"Image button class",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},ariaLabel:{description:"Aria label for image button",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},closeAriaLabel:{description:"Aria label for close",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},onOpened:{table:{disable:!0}},"update:open":{table:{disable:!0}},opened:{description:"emitted when popover is shown or hidden.",table:{type:{summary:"event"}}}},$={title:"Components/Image Viewer",component:o,args:b,argTypes:y,excludeStories:/.*Data$/},L=(a,{argTypes:e})=>_(a,e,C),k=(a,{argTypes:e})=>_(a,e,S),r={render:L,args:{imageSrc:i,imageAlt:"Image Alt Text",closeAriaLabel:"Close",imageButtonClass:"d-wmn64 d-hmn64 w-wmx332 d-hmx332",ariaLabel:"Click to open image"}},n={render:k,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"aria-allowed-attr",enabled:!1}]}}}};var m,c,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const O=["argsData","argTypesData","Default","Variants"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:n,__namedExportsOrder:O,argTypesData:y,argsData:b,default:$},Symbol.toStringTag,{value:"Module"}));export{r as D,R as I,n as V};
//# sourceMappingURL=image_viewer.stories-30f0d472.js.map
