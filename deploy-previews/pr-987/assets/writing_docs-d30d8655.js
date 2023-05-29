import{j as e}from"./jsx-runtime-2a29c14f.js";import{M as r}from"./index-c9307b8a.js";import{u as s}from"./index-eb59e45d.js";import"./iframe-df8c0d84.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";function g(o={}){const{wrapper:t}=Object.assign({},s(),o.components);return t?e.jsx(t,Object.assign({},o,{children:e.jsx(i,{})})):i();function i(){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",h3:"h3",ul:"ul",li:"li",h4:"h4",h5:"h5",pre:"pre"},s(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Docs/Storybook/Writing Documentation"}),`
`,e.jsx(n.h1,{id:"writing-documentation",children:"Writing Documentation"}),`
`,e.jsx(n.h2,{id:"how-to-write-mdx-documentation",children:"How to write MDX documentation"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"(https://storybook.js.org/docs/vue/api/mdx)",children:"MDX"}),` is a standard file format that combines
`,e.jsx(n.a,{href:"https://guides.github.com/features/mastering-markdown/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Markdown"})," with ",e.jsx(n.a,{href:"https://facebook.github.io/jsx/",target:"_blank",rel:"nofollow noopener noreferrer",children:"JSX"}),`. It
allows us to create beautiful, interactive documentation with ease.`]}),`
`,e.jsx(n.h2,{id:"where-will-the-documentation-appear",children:"Where will the documentation appear"}),`
`,e.jsxs(n.p,{children:["The MDX documentation will appear in a tab at the top of the storybook component explorer next to the ",e.jsx(n.code,{children:"Canvas"})," tab."]}),`
`,e.jsx(n.h2,{id:"what-should-be-documented",children:"What should be documented"}),`
`,e.jsx(n.h3,{id:"component-description",children:"Component description"}),`
`,e.jsx(n.p,{children:`Each component and component variant should have a description which provides information on the functionality that the
component provides. The description can also include any details that we deem useful which include but are not limited
to:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Usage recommendations"}),`
`,e.jsx(n.li,{children:"Limitations"}),`
`,e.jsx(n.li,{children:"Gotchas"}),`
`]}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h4,{id:"how-to-import",children:"How to import"}),`
`,e.jsx(n.p,{children:"All components should include clear instructions on how to import them."}),`
`,e.jsx(n.h5,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { MyComponent } from '@dialpad/component';
`})}),`
`,e.jsx(n.h4,{id:"how-to-use",children:"How to use"}),`
`,e.jsx(n.p,{children:"We should also provide instructions on how to use the components that we have created."}),`
`,e.jsx(n.h5,{id:"example-1",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<my-component some="prop">
  Default Slot
</my-component>
`})}),`
`,e.jsx(n.h3,{id:"props",children:e.jsx(n.a,{href:"https://v3.vuejs.org/guide/component-props.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Props"})}),`
`,e.jsx(n.p,{children:`Each component should have a section which lists all of the props which the component can accept. In addition to listing
the props, we also need to provide documentation on the default value for the prop and a brief description about the
prop which includes accepted types.`}),`
`,e.jsxs(n.p,{children:["You can either manually provide this documentation or use the ",e.jsx(n.code,{children:"Controls"}),` component to provide some auto generated
documentation.`]}),`
`,e.jsx(n.h4,{id:"controls-example",children:"Controls Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Controls />
`})}),`
`,e.jsxs(n.p,{children:["Note: ",e.jsx(n.code,{children:"PRIMARY_STORY"})," is imported from ",e.jsx(n.code,{children:"@storybook/addon-docs"}),"."]}),`
`,e.jsx(n.h3,{id:"slots",children:e.jsx(n.a,{href:"https://v3.vuejs.org/guide/component-slots.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Slots"})}),`
`,e.jsx(n.p,{children:`Each component should have a section which lists all of the slots which the component can accept. In addition to
listing the slots, if there are any named slots please provide a brief description about the slot. It is assumed that
the default slot will be used to pass children.`}),`
`,e.jsx(n.h3,{id:"events",children:e.jsx(n.a,{href:"https://v3.vuejs.org/guide/component-custom-events.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Events"})}),`
`,e.jsxs(n.p,{children:["In the ",e.jsx(n.code,{children:"Events"})," section we will list and document any custom events that are emitted from the component."]}),`
`,e.jsx(n.h1,{id:"did-we-miss-anything",children:"Did we miss anything?"}),`
`,e.jsx(n.p,{children:`This is a living document that is constantly being updated, feel free to suggest new additions and changes by opening
a PR and assigning to one of the project's contributors.`})]})}}export{g as default};
//# sourceMappingURL=writing_docs-d30d8655.js.map
