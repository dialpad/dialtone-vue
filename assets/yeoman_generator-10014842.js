import{j as e}from"./jsx-runtime-2b01d98f.js";import{M as i}from"./index-e030c76a.js";import{u as a}from"./index-ed447fcc.js";import"./iframe-5f03b20c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";function o(t){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",h3:"h3",h4:"h4"},a(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Docs/Component Driven Development/Yeoman Generator"}),`
`,e.jsx(n.h1,{id:"dialtone-vue-yeoman-generator",children:"Dialtone Vue Yeoman Generator"}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["We can use the Dialtone Vue ",e.jsx(n.a,{href:"https://yeoman.io/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Yeoman"}),` Generator to initialize a new component within the Dialtone Vue
project.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# From Dialtone Vue root directory
npm run install:all
npx yo dialtone-vue
`})}),`
`,e.jsxs(n.p,{children:[`After running the command above you will be prompted for the name of the new component that you would like to create. It
is recommended that the name has the following format `,e.jsx(n.code,{children:"DtMyComponent"}),"."]}),`
`,e.jsx(n.p,{children:"The generator will then display all of the files that have been initialized."}),`
`,e.jsx(n.h2,{id:"maintenance",children:"Maintenance"}),`
`,e.jsx(n.h3,{id:"updating-the-generator",children:"Updating The Generator"}),`
`,e.jsxs(n.p,{children:["Update(s) to the generator can be applied within the following file ",e.jsx(n.code,{children:"generator-dialtone-vue/generators/app/index.js"}),"."]}),`
`,e.jsx(n.h3,{id:"creating--updating-templates",children:"Creating / Updating Template(s)"}),`
`,e.jsxs(n.p,{children:["The templates used by the generator are located in the following directory ",e.jsx(n.code,{children:"generator-dialtone-vue/generators/app/templates"}),`.
These templates are written in `,e.jsx(n.a,{href:"https://ejs.co/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Embedded JavaScript"})," ",e.jsx(n.code,{children:".ejs"}),"."]}),`
`,e.jsx(n.h4,{id:"variables",children:"Variables"}),`
`,e.jsxs(n.p,{children:["Variables can be added to these templates using the following format ",e.jsx(n.code,{children:"<%= myVariableName %>"}),`. In order to use the
variable it will have to be defined in the generator `,e.jsx(n.code,{children:"generator-dialtone-vue/generators/app/index.js"}),"."]}),`
`,e.jsx(n.h4,{id:"documentation",children:"Documentation"}),`
`,e.jsxs(n.p,{children:[`After making any addition(s) / change(s) to any of the Yeoman Generator template file(s), please also apply your
addition(s) / change(s) to the documentation template(s) located within the `,e.jsx(n.code,{children:"docs/templates"})," directory."]}),`
`,e.jsx(n.h2,{id:"did-we-miss-anything",children:"Did we miss anything?"}),`
`,e.jsx(n.p,{children:`This is a living document that is constantly being updated, feel free to suggest new additions and changes by opening
a PR and assigning to one of the project's contributors.`})]})}function x(t={}){const{wrapper:n}=Object.assign({},a(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(o,t)})):o(t)}export{x as default};
//# sourceMappingURL=yeoman_generator-10014842.js.map