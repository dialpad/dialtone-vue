import{j as e}from"./jsx-runtime-16a0ba86.js";import{M as s}from"./index-37741477.js";import{u as i}from"./index-e9e5887e.js";import"./iframe-82c0e324.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-4745f7b8.js";import"./index-356e4a49.js";function t(o){const n=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",code:"code",pre:"pre",a:"a"},i(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Docs/Storybook/Getting Started"}),`
`,e.jsx(n.h1,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(n.h2,{id:"what-is-storybook",children:"What is Storybook?"}),`
`,e.jsx(n.p,{children:`Storybook provides a harness for rendering Vue components and acts as the bridge between
engineers and designers when working with a component library and design system.
It provides the engineer an opportunity to visualize all of the states, props, data, and events
related to a component before using it in code. Storybook can also auto-generate component
documentation and becomes a great time-saver when it comes to building up a large and robust
component library.`}),`
`,e.jsx(n.h2,{id:"dialtone-vue-setup",children:"Dialtone Vue Setup"}),`
`,e.jsx(n.h3,{id:"npm_auth_token",children:"NPM_AUTH_TOKEN"}),`
`,e.jsxs(n.p,{children:["Ensure that ",e.jsx(n.code,{children:"NPM_AUTH_TOKEN"})," is set in your path. You will need to set the token to an NPM authentication token which has read level access to the ",e.jsx(n.code,{children:"@dialpad"})," organization."]}),`
`,e.jsx(n.h3,{id:"install-dependencies",children:"Install Dependencies"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install
`})}),`
`,e.jsx(n.h2,{id:"storybook-setup",children:"Storybook Setup"}),`
`,e.jsx(n.h3,{id:"running-storybook-locally",children:"Running Storybook Locally"}),`
`,e.jsxs(n.p,{children:["Runs storybook locally at ",e.jsx(n.code,{children:"localhost:9010"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`cd dialtone-vue

npm run storybook
`})}),`
`,e.jsx(n.h3,{id:"building-storybook",children:"Building Storybook"}),`
`,e.jsxs(n.p,{children:["Outputs the bundled storybook to ",e.jsx(n.code,{children:"dialtone-vue/storybook-static"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`cd dialtone-vue

npm run storybook:build
`})}),`
`,e.jsx(n.h3,{id:"deploying-storybook",children:"Deploying Storybook"}),`
`,e.jsxs(n.p,{children:["Storybook is deployed automatically from the master branch to ",e.jsx(n.a,{href:"https://dialtone-vue.netlify.app",target:"_blank",rel:"nofollow noopener noreferrer",children:"Netlify"}),"."]}),`
`,e.jsx(n.h2,{id:"modifying-storybook-build-config",children:"Modifying Storybook Build Config"}),`
`,e.jsxs(n.p,{children:[`Most of the time we shouldn't need to modify Storybook's build config, both of the
UI and the Canvas have been configured to support Dialtone classes and asset imports.
However, if for whatever reason we need to modify the build configs, they can be found
in `,e.jsx(n.code,{children:"dialtone-vue/.storybook/main.js"}),"."]})]})}function y(o={}){const{wrapper:n}=Object.assign({},i(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(t,o)})):t(o)}export{y as default};
//# sourceMappingURL=getting_started-811c56b7.js.map
