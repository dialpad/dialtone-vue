import{j as e}from"./jsx-dev-runtime-61a6748b.js";import{M as u}from"./index-67c05572.js";import{D as l}from"./components-d794dea6.js";import{u as r}from"./index-4383bf44.js";import"./iframe-f6f86927.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";function s(i){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3",pre:"pre"},r(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(u,{title:"Docs/Storybook/File Structure"},void 0,!1,{fileName:"<source.js>",lineNumber:4,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"file-structure",children:"File Structure"},void 0,!1,{fileName:"<source.js>",lineNumber:6,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"file-naming",children:"File Naming"},void 0,!1,{fileName:"<source.js>",lineNumber:8,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"File names are used to determine which story or documentation page are to be registered for Storybook to display."},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["All files that end with ",e.jsxDEV(n.code,{children:"*.story.vue"},void 0,!1,{fileName:"<source.js>",lineNumber:12,columnNumber:25},this)," will get parsed as single file component story templates."]},void 0,!0,{fileName:"<source.js>",lineNumber:12,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["All files that end with ",e.jsxDEV(n.code,{children:"*.stories.js"},void 0,!1,{fileName:"<source.js>",lineNumber:14,columnNumber:25},this)," will get parsed as stories."]},void 0,!0,{fileName:"<source.js>",lineNumber:14,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["All files that end with ",e.jsxDEV(n.code,{children:"*.mdx"},void 0,!1,{fileName:"<source.js>",lineNumber:16,columnNumber:25},this)," will get parsed as documentation."]},void 0,!0,{fileName:"<source.js>",lineNumber:16,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"For your stories to be registered, they must adhere to the naming scheme just described."},void 0,!1,{fileName:"<source.js>",lineNumber:18,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"folder-structure",children:"Folder Structure"},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["All documentation stories should be placed in the ",e.jsxDEV(n.code,{children:"dialtone-vue/docs"},void 0,!1,{fileName:"<source.js>",lineNumber:22,columnNumber:51},this),` directory following
a predictable structure to emulate the Storybook sidebar directory (although this does mean
they are implicitly mapped, more on this later).`]},void 0,!0,{fileName:"<source.js>",lineNumber:22,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["Individual component stories should be colocated in their respective subdirectories containing the ",e.jsxDEV(n.code,{children:".stories.js"},void 0,!1,{fileName:"<source.js>",lineNumber:26,columnNumber:100},this),", ",e.jsxDEV(n.code,{children:".mdx"},void 0,!1,{fileName:"<source.js>",lineNumber:26,columnNumber:115},this),`
`,e.jsxDEV(n.code,{children:"<COMPONENT_NAME>_default.story.vue"},void 0,!1,{fileName:"<source.js>",lineNumber:27,columnNumber:1},this)," files."]},void 0,!0,{fileName:"<source.js>",lineNumber:26,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"example",children:"Example"},void 0,!1,{fileName:"<source.js>",lineNumber:29,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{children:`# In dialtone-vue:

docs/
  component_driven_development/
    writing_component_tests.mdx
    ...
  storybook/
    getting_started.mdx
    ...
  welcome.mdx
  ...
components/
  input
    input.stories.js
    input.mdx
  notice/
    notice_default.story.vue
    notice.stories.js
    notice.mdx
  ...
`},void 0,!1,{fileName:"<source.js>",lineNumber:31,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:31,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"storybook-sidebar",children:"Storybook sidebar"},void 0,!1,{fileName:"<source.js>",lineNumber:54,columnNumber:1},this),`
`,e.jsxDEV(l,{src:"https://static.dialpadcdn.comdialtone/sidebar.png"},void 0,!1,{fileName:"<source.js>",lineNumber:56,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"naming-hierarchy",children:"Naming Hierarchy"},void 0,!1,{fileName:"<source.js>",lineNumber:58,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:e.jsxDEV(n.code,{children:"TODO"},void 0,!1,{fileName:"<source.js>",lineNumber:60,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:60,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"sorting",children:"Sorting"},void 0,!1,{fileName:"<source.js>",lineNumber:62,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:e.jsxDEV(n.code,{children:"TODO"},void 0,!1,{fileName:"<source.js>",lineNumber:64,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:64,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function x(i={}){const{wrapper:n}=Object.assign({},r(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(s,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):s(i)}export{x as default};
//# sourceMappingURL=file_structure-69052543.js.map
