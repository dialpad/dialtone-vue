import{j as e}from"./jsx-runtime-3679461c.js";import{M as s}from"./index-0c18a3ef.js";import{D as r}from"./components-ce33a762.js";import{u as o}from"./index-64dd570d.js";import"./iframe-44fc3919.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";function i(t){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3",pre:"pre"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Docs/Storybook/File Structure"}),`
`,e.jsx(n.h1,{id:"file-structure",children:"File Structure"}),`
`,e.jsx(n.h2,{id:"file-naming",children:"File Naming"}),`
`,e.jsx(n.p,{children:"File names are used to determine which story or documentation page are to be registered for Storybook to display."}),`
`,e.jsxs(n.p,{children:["All files that end with ",e.jsx(n.code,{children:"*.story.vue"})," will get parsed as single file component story templates."]}),`
`,e.jsxs(n.p,{children:["All files that end with ",e.jsx(n.code,{children:"*.stories.js"})," will get parsed as stories."]}),`
`,e.jsxs(n.p,{children:["All files that end with ",e.jsx(n.code,{children:"*.mdx"})," will get parsed as documentation."]}),`
`,e.jsx(n.p,{children:"For your stories to be registered, they must adhere to the naming scheme just described."}),`
`,e.jsx(n.h2,{id:"folder-structure",children:"Folder Structure"}),`
`,e.jsxs(n.p,{children:["All documentation stories should be placed in the ",e.jsx(n.code,{children:"dialtone-vue/docs"}),` directory following
a predictable structure to emulate the Storybook sidebar directory (although this does mean
they are implicitly mapped, more on this later).`]}),`
`,e.jsxs(n.p,{children:["Individual component stories should be colocated in their respective subdirectories containing the ",e.jsx(n.code,{children:".stories.js"}),", ",e.jsx(n.code,{children:".mdx"}),`
`,e.jsx(n.code,{children:"<COMPONENT_NAME>_default.story.vue"})," files."]}),`
`,e.jsx(n.h3,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`# In dialtone-vue:

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
`})}),`
`,e.jsx(n.h3,{id:"storybook-sidebar",children:"Storybook sidebar"}),`
`,e.jsx(r,{src:"https://static.dialpadcdn.comdialtone/sidebar.png"}),`
`,e.jsx(n.h2,{id:"naming-hierarchy",children:"Naming Hierarchy"}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"TODO"})}),`
`,e.jsx(n.h2,{id:"sorting",children:"Sorting"}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"TODO"})})]})}function g(t={}){const{wrapper:n}=Object.assign({},o(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(i,t)})):i(t)}export{g as default};
//# sourceMappingURL=file_structure-f8fd403a.js.map