import{j as e}from"./jsx-dev-runtime-316c37ab.js";import{M as l}from"./index-7cddfa6c.js";import{u as o}from"./index-2b5f8074.js";import"./iframe-d4ce809b.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";function s(i){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",h3:"h3",ul:"ul",li:"li",h4:"h4",h5:"h5",pre:"pre"},o(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(l,{title:"Docs/Storybook/Writing Documentation"},void 0,!1,{fileName:"<source.js>",lineNumber:3,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"writing-documentation",children:"Writing Documentation"},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"how-to-write-mdx-documentation",children:"How to write MDX documentation"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[e.jsxDEV(n.a,{href:"(https://storybook.js.org/docs/vue/api/mdx)",children:"MDX"},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),` is a standard file format that combines
`,e.jsxDEV(n.a,{href:"https://guides.github.com/features/mastering-markdown/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Markdown"},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:1},this)," with ",e.jsxDEV(n.a,{href:"https://facebook.github.io/jsx/",target:"_blank",rel:"nofollow noopener noreferrer",children:"JSX"},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:73},this),`. It
allows us to create beautiful, interactive documentation with ease.`]},void 0,!0,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"where-will-the-documentation-appear",children:"Where will the documentation appear"},void 0,!1,{fileName:"<source.js>",lineNumber:13,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["The MDX documentation will appear in a tab at the top of the storybook component explorer next to the ",e.jsxDEV(n.code,{children:"Canvas"},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:103},this)," tab."]},void 0,!0,{fileName:"<source.js>",lineNumber:15,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"what-should-be-documented",children:"What should be documented"},void 0,!1,{fileName:"<source.js>",lineNumber:17,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"component-description",children:"Component description"},void 0,!1,{fileName:"<source.js>",lineNumber:19,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`Each component and component variant should have a description which provides information on the functionality that the
component provides. The description can also include any details that we deem useful which include but are not limited
to:`},void 0,!1,{fileName:"<source.js>",lineNumber:21,columnNumber:1},this),`
`,e.jsxDEV(n.ul,{children:[`
`,e.jsxDEV(n.li,{children:"Usage recommendations"},void 0,!1,{fileName:"<source.js>",lineNumber:25,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:"Limitations"},void 0,!1,{fileName:"<source.js>",lineNumber:26,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:"Gotchas"},void 0,!1,{fileName:"<source.js>",lineNumber:27,columnNumber:1},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:25,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:29,columnNumber:1},this),`
`,e.jsxDEV(n.h4,{id:"how-to-import",children:"How to import"},void 0,!1,{fileName:"<source.js>",lineNumber:31,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"All components should include clear instructions on how to import them."},void 0,!1,{fileName:"<source.js>",lineNumber:33,columnNumber:1},this),`
`,e.jsxDEV(n.h5,{id:"example",children:"Example"},void 0,!1,{fileName:"<source.js>",lineNumber:35,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`import { MyComponent } from '@dialpad/component';
`},void 0,!1,{fileName:"<source.js>",lineNumber:37,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:37,columnNumber:1},this),`
`,e.jsxDEV(n.h4,{id:"how-to-use",children:"How to use"},void 0,!1,{fileName:"<source.js>",lineNumber:41,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"We should also provide instructions on how to use the components that we have created."},void 0,!1,{fileName:"<source.js>",lineNumber:43,columnNumber:1},this),`
`,e.jsxDEV(n.h5,{id:"example-1",children:"Example"},void 0,!1,{fileName:"<source.js>",lineNumber:45,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<my-component some="prop">
  Default Slot
</my-component>
`},void 0,!1,{fileName:"<source.js>",lineNumber:47,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:47,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"props",children:e.jsxDEV(n.a,{href:"https://v3.vuejs.org/guide/component-props.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Props"},void 0,!1,{fileName:"<source.js>",lineNumber:53,columnNumber:5},this)},void 0,!1,{fileName:"<source.js>",lineNumber:53,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`Each component should have a section which lists all of the props which the component can accept. In addition to listing
the props, we also need to provide documentation on the default value for the prop and a brief description about the
prop which includes accepted types.`},void 0,!1,{fileName:"<source.js>",lineNumber:55,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["You can either manually provide this documentation or use the ",e.jsxDEV(n.code,{children:"Controls"},void 0,!1,{fileName:"<source.js>",lineNumber:59,columnNumber:63},this),` component to provide some auto generated
documentation.`]},void 0,!0,{fileName:"<source.js>",lineNumber:59,columnNumber:1},this),`
`,e.jsxDEV(n.h4,{id:"controls-example",children:"Controls Example"},void 0,!1,{fileName:"<source.js>",lineNumber:62,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<Controls />
`},void 0,!1,{fileName:"<source.js>",lineNumber:64,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:64,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["Note: ",e.jsxDEV(n.code,{children:"PRIMARY_STORY"},void 0,!1,{fileName:"<source.js>",lineNumber:68,columnNumber:7},this)," is imported from ",e.jsxDEV(n.code,{children:"@storybook/addon-docs/blocks"},void 0,!1,{fileName:"<source.js>",lineNumber:68,columnNumber:40},this),"."]},void 0,!0,{fileName:"<source.js>",lineNumber:68,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"slots",children:e.jsxDEV(n.a,{href:"https://v3.vuejs.org/guide/component-slots.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Slots"},void 0,!1,{fileName:"<source.js>",lineNumber:70,columnNumber:5},this)},void 0,!1,{fileName:"<source.js>",lineNumber:70,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`Each component should have a section which lists all of the slots which the component can accept. In addition to
listing the slots, if there are any named slots please provide a brief description about the slot. It is assumed that
the default slot will be used to pass children.`},void 0,!1,{fileName:"<source.js>",lineNumber:72,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"events",children:e.jsxDEV(n.a,{href:"https://v3.vuejs.org/guide/component-custom-events.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Events"},void 0,!1,{fileName:"<source.js>",lineNumber:76,columnNumber:5},this)},void 0,!1,{fileName:"<source.js>",lineNumber:76,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["In the ",e.jsxDEV(n.code,{children:"Events"},void 0,!1,{fileName:"<source.js>",lineNumber:78,columnNumber:8},this)," section we will list and document any custom events that are emitted from the component."]},void 0,!0,{fileName:"<source.js>",lineNumber:78,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"did-we-miss-anything",children:"Did we miss anything?"},void 0,!1,{fileName:"<source.js>",lineNumber:80,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`This is a living document that is constantly being updated, feel free to suggest new additions and changes by opening
a PR and assigning to one of the project's contributors.`},void 0,!1,{fileName:"<source.js>",lineNumber:82,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function p(i={}){const{wrapper:n}=Object.assign({},o(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(s,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):s(i)}export{p as default};
//# sourceMappingURL=writing_docs-5416a2b8.js.map
