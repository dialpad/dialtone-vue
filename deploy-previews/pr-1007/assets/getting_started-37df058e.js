import{j as e}from"./jsx-dev-runtime-4ba33a7d.js";import{M as r}from"./index-7fef2517.js";import{u as s}from"./index-7fa95ffa.js";import"./iframe-d080d1e7.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";function o(i){const n=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",code:"code",pre:"pre",a:"a"},s(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(r,{title:"Docs/Storybook/Getting Started"},void 0,!1,{fileName:"<source.js>",lineNumber:3,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"getting-started",children:"Getting Started"},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"what-is-storybook",children:"What is Storybook?"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`Storybook provides a harness for rendering Vue components and acts as the bridge between
engineers and designers when working with a component library and design system.
It provides the engineer an opportunity to visualize all of the states, props, data, and events
related to a component before using it in code. Storybook can also auto-generate component
documentation and becomes a great time-saver when it comes to building up a large and robust
component library.`},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"dialtone-vue-setup",children:"Dialtone Vue Setup"},void 0,!1,{fileName:"<source.js>",lineNumber:16,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"npm_auth_token",children:"NPM_AUTH_TOKEN"},void 0,!1,{fileName:"<source.js>",lineNumber:18,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["Ensure that ",e.jsxDEV(n.code,{children:"NPM_AUTH_TOKEN"},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:13},this)," is set in your path. You will need to set the token to an NPM authentication token which has read level access to the ",e.jsxDEV(n.code,{children:"@dialpad"},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:148},this)," organization."]},void 0,!0,{fileName:"<source.js>",lineNumber:20,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"install-dependencies",children:"Install Dependencies"},void 0,!1,{fileName:"<source.js>",lineNumber:22,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-bash",children:`npm install
`},void 0,!1,{fileName:"<source.js>",lineNumber:24,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:24,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"storybook-setup",children:"Storybook Setup"},void 0,!1,{fileName:"<source.js>",lineNumber:28,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"running-storybook-locally",children:"Running Storybook Locally"},void 0,!1,{fileName:"<source.js>",lineNumber:30,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["Runs storybook locally at ",e.jsxDEV(n.code,{children:"localhost:9010"},void 0,!1,{fileName:"<source.js>",lineNumber:32,columnNumber:27},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:32,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-shell",children:`cd dialtone-vue

npm run storybook
`},void 0,!1,{fileName:"<source.js>",lineNumber:34,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:34,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"building-storybook",children:"Building Storybook"},void 0,!1,{fileName:"<source.js>",lineNumber:40,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["Outputs the bundled storybook to ",e.jsxDEV(n.code,{children:"dialtone-vue/storybook-static"},void 0,!1,{fileName:"<source.js>",lineNumber:42,columnNumber:34},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:42,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-shell",children:`cd dialtone-vue

npm run storybook:build
`},void 0,!1,{fileName:"<source.js>",lineNumber:44,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:44,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"deploying-storybook",children:"Deploying Storybook"},void 0,!1,{fileName:"<source.js>",lineNumber:50,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["Storybook is deployed automatically from the master branch to ",e.jsxDEV(n.a,{href:"https://dialtone-vue.netlify.app",target:"_blank",rel:"nofollow noopener noreferrer",children:"Netlify"},void 0,!1,{fileName:"<source.js>",lineNumber:52,columnNumber:63},this),"."]},void 0,!0,{fileName:"<source.js>",lineNumber:52,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"modifying-storybook-build-config",children:"Modifying Storybook Build Config"},void 0,!1,{fileName:"<source.js>",lineNumber:54,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`Most of the time we shouldn't need to modify Storybook's build config, both of the
UI and the Canvas have been configured to support Dialtone classes and asset imports.
However, if for whatever reason we need to modify the build configs, they can be found
in `,e.jsxDEV(n.code,{children:"dialtone-vue/.storybook/main.js"},void 0,!1,{fileName:"<source.js>",lineNumber:59,columnNumber:4},this),"."]},void 0,!0,{fileName:"<source.js>",lineNumber:56,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function j(i={}){const{wrapper:n}=Object.assign({},s(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(o,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):o(i)}export{j as default};
//# sourceMappingURL=getting_started-37df058e.js.map
