import{j as n}from"./jsx-runtime-26109360.js";import{M as i}from"./index-f5d93dd1.js";import{u as s}from"./index-f0f8fc5b.js";import"./iframe-393f04f1.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-2ac5aadd.js";import"./index-356e4a49.js";function C(e={}){const{wrapper:o}=Object.assign({},s(),e.components);return o?n.jsx(o,Object.assign({},e,{children:n.jsx(a,{})})):a();function a(){const t=Object.assign({h1:"h1",pre:"pre",code:"code",h3:"h3"},s(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Docs/Templates/MDX Documentation"}),`
`,n.jsx(t.h1,{id:"mdx-documentation-template",children:"MDX Documentation Template"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-jsx",children:`    // MDX Documentation Template
    import { Canvas, Story, Subtitle, Controls, Meta } from '@storybook/blocks';

    # My Component

    <Subtitle>
      Some description of the component functionality.
    </Subtitle>

    ## Base Style

    Some description of how to use the base component, potential gotchas and limitations.

    <Canvas>
      <Story of={ComponentStories.Default} />
    </Canvas>

    ## Variants

    <Canvas>
      <Story of={ComponentStories.Variants} />
    </Canvas>

    ## Slots, Props & Events

    <Controls />

    ## Usage

    ### Import

    \`\`\`jsx
    import { DtMyComponent } from '@dialpad/dialtone-vue';
`})}),`
`,n.jsx(t.h3,{id:"with-some-variant",children:"With Some Variant"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-vue",children:`<dt-my-component
  some="variant"
/>
`})}),`
`,n.jsx(t.h3,{id:"with-some-other-variant",children:"With Some Other Variant"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-vue",children:`<dt-my-component
  some-other="variant"
/>
`})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{})})]})}}export{C as default};
//# sourceMappingURL=mdx_documentation-b8c52357.js.map
