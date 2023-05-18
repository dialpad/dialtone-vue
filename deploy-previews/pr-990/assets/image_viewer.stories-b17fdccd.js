import{c as f}from"./storybook_utils-f783fd62.js";import{D as s,i as C}from"./fry-7387b33f.js";import{a as w,o as b,b as T,f as $,d as l}from"./vue.esm-bundler-15aa0fd7.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";import{a as k}from"./chunk-OPEUWD42-a3b45fd8.js";const y={name:"DtImageViewerDefault",components:{DtImageViewer:s},data:function(){return{isOpen:this.open}},watch:{open:function(e){this.isOpen=e}}};function O(e,o,x,V,n,A){const r=w("dt-image-viewer");return b(),T(r,{open:e.isOpen,"onUpdate:open":o[0]||(o[0]=I=>e.isOpen=I),"image-src":e.$attrs.imageSrc,"image-alt":e.$attrs.imageAlt,"close-aria-label":e.$attrs.closeAriaLabel,"image-button-class":e.$attrs.imageButtonClass,"aria-label":e.$attrs.ariaLabel,onOpened:e.$attrs.onOpened},null,8,["open","image-src","image-alt","close-aria-label","image-button-class","aria-label","onOpened"])}const L=_(y,[["render",O],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/image_viewer/image_viewer_default.story.vue"]]);y.__docgenInfo={displayName:"DtImageViewerDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/image_viewer/image_viewer_default.story.vue"]};const i=""+new URL("test-078acfea.jpg",import.meta.url).href,v={name:"DtImageViewerVariants",components:{DtImageViewer:s},data(){return{test:i,fry:C}}},S={class:"d-stack16"};function B(e,o,x,V,n,A){const r=w("dt-image-viewer");return b(),$("div",S,[l(r,{"image-src":n.test,"image-alt":"Alt Text","close-aria-label":"Close","image-button-class":"d-wmn64 d-hmn64 w-wmx332 d-hmx332","aria-label":"Click to open image"},null,8,["image-src"]),l(r,{"image-src":n.fry,"image-alt":"Alt Text","close-aria-label":"Close","image-button-class":"d-wmn64 d-hmn64 w-wmx332 d-hmx332","aria-label":"Click to open image"},null,8,["image-src"])])}const N=_(v,[["render",B],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/image_viewer/image_viewer_variants.story.vue"]]);v.__docgenInfo={displayName:"DtImageViewerVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/image_viewer/image_viewer_variants.story.vue"]};const h={onOpened:k("opened"),imageSrc:i,imageAlt:"Image Alt Text",closeAriaLabel:"Close",imageButtonClass:"d-wmn64 d-hmn64 w-wmx332 d-hmx332",ariaLabel:"Click to open image"},D={imageSrc:{description:"Url for the image",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},imageAlt:{description:"Alt for image",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},imageButtonClass:{description:"Image button class",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},ariaLabel:{description:"Aria label for image button",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},closeAriaLabel:{description:"Aria label for close",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},onOpened:{table:{disable:!0}},"update:open":{table:{disable:!0}},opened:{description:"emitted when popover is shown or hidden.",table:{type:{summary:"event"}}}},F={title:"Components/Image Viewer",component:s,args:h,argTypes:D,excludeStories:/.*Data$/},j=e=>f(e,L),P=e=>f(e,N),a={render:j,args:{imageSrc:i,imageAlt:"Image Alt Text",closeAriaLabel:"Close",imageButtonClass:"d-wmn64 d-hmn64 w-wmx332 d-hmx332",ariaLabel:"Click to open image"}},t={render:P,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"aria-allowed-attr",enabled:!1}]}}}};var m,p,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    imageSrc: defaultImage,
    imageAlt: 'Image Alt Text',
    closeAriaLabel: 'Close',
    imageButtonClass: 'd-wmn64 d-hmn64 w-wmx332 d-hmx332',
    ariaLabel: 'Click to open image'
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var g,d,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const U=["argsData","argTypesData","Default","Variants"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Variants:t,__namedExportsOrder:U,argTypesData:D,argsData:h,default:F},Symbol.toStringTag,{value:"Module"}));export{a as D,G as I,t as V,h as a,D as b};
//# sourceMappingURL=image_viewer.stories-b17fdccd.js.map
