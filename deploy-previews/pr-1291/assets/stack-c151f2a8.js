import{j as e}from"./jsx-dev-runtime-12909368.js";import{M as r,b as u,e as m}from"./index-141c419e.js";import"./stack-987140d6.js";import{S as a}from"./stack.stories-f670888b.js";import{u as l}from"./index-c2fde493.js";import"./iframe-1455b407.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./stack_constants-4f71ebff.js";import"./vue.esm-bundler-807df745.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./storybook_utils-1ccaacc9.js";import"./utils-491d6e59.js";function s(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre",h4:"h4"},l(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(r,{of:a},void 0,!1,{fileName:"<source.js>",lineNumber:6,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"stack",children:"Stack"},void 0,!1,{fileName:"<source.js>",lineNumber:8,columnNumber:1},this),`
`,e.jsxDEV(u,{children:e.jsxDEV(n.p,{children:"Stack is a layout component used to group elements together and apply a space between them."},void 0,!1,{fileName:"<source.js>",lineNumber:11,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:14,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["Stack base style starts without spacing between elements, on column direction and ",e.jsxDEV(n.code,{children:"div"},void 0,!1,{fileName:"<source.js>",lineNumber:16,columnNumber:83},this)," as HTML element."]},void 0,!0,{fileName:"<source.js>",lineNumber:16,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots--props",children:"Slots & Props"},void 0,!1,{fileName:"<source.js>",lineNumber:18,columnNumber:1},this),`
`,e.jsxDEV(m,{},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:22,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"available-gap",children:"Available Gap"},void 0,!1,{fileName:"<source.js>",lineNumber:24,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`[0, 100, 200, 300, 400, 500, 600]
`},void 0,!1,{fileName:"<source.js>",lineNumber:26,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:26,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"available-directions",children:"Available Directions"},void 0,!1,{fileName:"<source.js>",lineNumber:30,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`['column', 'column-reverse', 'row', 'row-reverse']
`},void 0,!1,{fileName:"<source.js>",lineNumber:32,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:32,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"available-breakpoints",children:"Available Breakpoints"},void 0,!1,{fileName:"<source.js>",lineNumber:36,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`| Prefix | Max Width |
| -- | ------ |
| sm | 480px  |
| md | 640px  |
| lg | 980px  |
| xl | 1264px |`},void 0,!1,{fileName:"<source.js>",lineNumber:38,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"direction-object-structure",children:"Direction Object Structure"},void 0,!1,{fileName:"<source.js>",lineNumber:45,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`{
  default: string,
  sm: string,
  md: string,
  lg: string,
  xl: string,
}
`},void 0,!1,{fileName:"<source.js>",lineNumber:47,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:47,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"examples",children:"Examples"},void 0,!1,{fileName:"<source.js>",lineNumber:57,columnNumber:1},this),`
`,e.jsxDEV(n.h4,{id:"stacks-column-at-small-screen-size-and-column-reverse-at-large-screen",children:"Stacks column at small screen size and column reverse at large screen"},void 0,!1,{fileName:"<source.js>",lineNumber:59,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-stack :direction="{'default': 'row', 'sm': 'column', 'lg': 'column-reverse'}" as="article" gap="100">
  <div>Stack item 1</div>
  <div>Stack item 2</div>
</dt-stack>
`},void 0,!1,{fileName:"<source.js>",lineNumber:61,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:61,columnNumber:1},this),`
`,e.jsxDEV(n.h4,{id:"stacks-row-with-gap-300-in-a-section-html-element",children:"Stacks row with gap 300 in a section HTML element"},void 0,!1,{fileName:"<source.js>",lineNumber:68,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-stack direction="row" as="section" gap="300">
  <div>Stack item 1</div>
  <div>Stack item 2</div>
</dt-stack>
`},void 0,!1,{fileName:"<source.js>",lineNumber:70,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:70,columnNumber:1},this),`
`,e.jsxDEV(n.h4,{id:"stacks-row-with-gap-300-and-stacks-in-row-reverse-the-second-element-with-gap-600",children:"Stacks row with gap 300 and stacks in row reverse the second element with gap 600"},void 0,!1,{fileName:"<source.js>",lineNumber:77,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-stack direction="row" as="section" gap="300">
  <div>Stack item 1</div>
  <div>
    <div>Stack item 2</div>
      <dt-stack direction="row-reverse" gap="600">
          <div>Stack item 3</div>
          <div>Stack item 4</div>
      </dt-stack>
  </div>
</dt-stack>
`},void 0,!1,{fileName:"<source.js>",lineNumber:79,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:79,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:92,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtStack } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:94,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:94,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"default",children:"Default"},void 0,!1,{fileName:"<source.js>",lineNumber:98,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-stack direction="column" as="div" gap="0">
  <div>Stack item 1</div>
  <div>Stack item 2</div>
</dt-stack>
`},void 0,!1,{fileName:"<source.js>",lineNumber:100,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:100,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function k(i={}){const{wrapper:n}=Object.assign({},l(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(s,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):s(i)}export{k as default};
//# sourceMappingURL=stack-c151f2a8.js.map
