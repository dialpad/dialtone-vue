import{c as f}from"./storybook_utils-dy5aucTw.js";import{D as n}from"./image_viewer-BqRL0c9Z.js";import{s as w,o as b,b as C,k as T,u as l}from"./vue.esm-bundler-pfnFGw-8.js";import{_ as y}from"./_plugin-vue_export-helper-x3n3nnut.js";import{f as $}from"./fry-tJxUcw5g.js";import{a as k}from"./chunk-AY7I2SME-4UylTnhF.js";const _={name:"DtImageViewerDefault",components:{DtImageViewer:n},data:function(){return{isOpen:this.open}},watch:{open:function(e){this.isOpen=e}}};function O(e,a,x,I,s,V){const o=w("dt-image-viewer");return b(),C(o,{open:e.isOpen,"onUpdate:open":a[0]||(a[0]=A=>e.isOpen=A),"image-src":e.$attrs.imageSrc,"image-alt":e.$attrs.imageAlt,"close-aria-label":e.$attrs.closeAriaLabel,"image-button-class":e.$attrs.imageButtonClass,"aria-label":e.$attrs.ariaLabel,onOpened:e.$attrs.onOpened},null,8,["open","image-src","image-alt","close-aria-label","image-button-class","aria-label","onOpened"])}const L=y(_,[["render",O]]);_.__docgenInfo={displayName:"DtImageViewerDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/image_viewer/image_viewer_default.story.vue"]};const i=""+new URL("test-mtc3yI39.jpg",import.meta.url).href,h={name:"DtImageViewerVariants",components:{DtImageViewer:n},data(){return{test:i,fry:$}}},S={class:"d-stack16"};function B(e,a,x,I,s,V){const o=w("dt-image-viewer");return b(),T("div",S,[l(o,{"image-src":s.test,"image-alt":"Alt Text","close-aria-label":"Close","image-button-class":"d-wmn64 d-hmn64 w-wmx332 d-hmx332","aria-label":"Click to open image"},null,8,["image-src"]),l(o,{"image-src":s.fry,"image-alt":"Alt Text","close-aria-label":"Close","image-button-class":"d-wmn64 d-hmn64 w-wmx332 d-hmx332","aria-label":"Click to open image"},null,8,["image-src"])])}const N=y(h,[["render",B]]);h.__docgenInfo={displayName:"DtImageViewerVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/image_viewer/image_viewer_variants.story.vue"]};const v={onOpened:k("opened"),imageSrc:i,imageAlt:"Image Alt Text",closeAriaLabel:"Close",imageButtonClass:"d-wmn64 d-hmn64 w-wmx332 d-hmx332",ariaLabel:"Click to open image"},D={imageSrc:{description:"Url for the image",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},imageAlt:{description:"Alt for image",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},imageButtonClass:{description:"Image button class",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},ariaLabel:{description:"Aria label for image button",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},closeAriaLabel:{description:"Aria label for close",table:{category:"props",type:{summary:"string"}},control:{type:"text"}},onOpened:{table:{disable:!0}},"update:open":{table:{disable:!0}},opened:{description:"emitted when popover is shown or hidden.",table:{type:{summary:"event"}}}},F={title:"Components/Image Viewer",component:n,args:v,argTypes:D,excludeStories:/.*Data$/},j=(e,{argTypes:a})=>f(e,a,L),P=(e,{argTypes:a})=>f(e,a,N),t={render:j,args:{imageSrc:i,imageAlt:"Image Alt Text",closeAriaLabel:"Close",imageButtonClass:"d-wmn64 d-hmn64 w-wmx332 d-hmx332",ariaLabel:"Click to open image"}},r={render:P,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"aria-allowed-attr",enabled:!1}]}}}};var m,p,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    imageSrc: defaultImage,
    imageAlt: 'Image Alt Text',
    closeAriaLabel: 'Close',
    imageButtonClass: 'd-wmn64 d-hmn64 w-wmx332 d-hmx332',
    ariaLabel: 'Click to open image'
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var g,d,u;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const U=["argsData","argTypesData","Default","Variants"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Variants:r,__namedExportsOrder:U,argTypesData:D,argsData:v,default:F},Symbol.toStringTag,{value:"Module"}));export{t as D,H as I,r as V};
//# sourceMappingURL=image_viewer.stories-vzjY560-.js.map
