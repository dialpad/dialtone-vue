import{j as e}from"./jsx-runtime-907b39ce.js";import{M as a,S as l,d as o,e as s,f as c}from"./index-ab40e3a4.js";import"./tooltip-525ed1d3.js";import{T as d,D as h,V as p,F as m}from"./tooltip.stories-d8cbe247.js";import{u as r}from"./index-d0dd72e6.js";import"./iframe-7ebd2d8b.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./tippy_utils-dcd4636d.js";import"./storybook_utils-6c24aced.js";import"./vue.esm-ba2ca387.js";import"./lazy_show-ac5fd1cd.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./button-82727ed7.js";import"./link_constants-51338c78.js";import"./chunk-OPEUWD42-a3b45fd8.js";function i(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",ol:"ol",li:"li",strong:"strong",a:"a",h3:"h3",code:"code",pre:"pre"},r(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:d}),`
`,e.jsx(t.h1,{id:"tooltip",children:"Tooltip"}),`
`,e.jsx(l,{children:e.jsx(t.p,{children:`A tooltip is a floating label that briefly explains an action, function, or an element.
Its content is exclusively text and shouldn't be vital information for users.
If richer media is desired, consider using a popover instead.`})}),`
`,e.jsx(t.h2,{id:"default",children:"Default"}),`
`,e.jsx(t.p,{children:`The tooltip, also known as infotip or hint, is a common graphical user interface element in which, when hovering over a
screen element or component, a text box displays information about that element (such as a description of a button's
function, or what an abbreviation stands for). The tooltip is displayed continuously as long as the user hovers over the
element`}),`
`,e.jsx(t.p,{children:"A tooltip has two slots:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"the anchor"})," required slot"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"the default"})," slot (which could be replaced with prop message)"]}),`
`]}),`
`,e.jsx(o,{children:e.jsx(s,{of:h})}),`
`,e.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(o,{children:e.jsx(s,{of:p})}),`
`,e.jsx(t.h2,{id:"flip",children:"Flip"}),`
`,e.jsx(o,{children:e.jsx(s,{of:m})}),`
`,e.jsx(t.h2,{id:"props--slots",children:"Props & Slots"}),`
`,e.jsx(c,{}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:[`Reads out the tooltip content as a supplementary description for its trigger when the trigger is focused.
See also `,e.jsx(t.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.1/#tooltip",target:"_blank",rel:"nofollow noopener noreferrer",children:"wai aria practices 1.1"}),"."]}),`
`,e.jsx(t.h3,{id:"general-info",children:"General info"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Twelve directions are offered:"})," three on each face of the tooltip."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Inverted:"})," Inverts styles to work on dark backgrounds."]}),`
`]}),`
`,e.jsx(t.h3,{id:"anchor",children:"Anchor"}),`
`,e.jsxs(t.p,{children:[`The anchor element that activates the tooltip should be fully accessible by keyboard. The easiest way to do this is by
using an element like an `,e.jsx(t.code,{children:"DtButton"}),` that is already accessible. When pressing the 'ESC' key in a focused tooltip,
tooltip will be closed.`]}),`
`,e.jsxs(t.p,{children:["There are some required ARIA attributes for the anchor element (such as ",e.jsx(t.code,{children:"aria-hidden"})," set based on ",e.jsx(t.code,{children:"open"}),`).
To make this as straightforward as possible, these ARIA attributes are passed
with the correct values as the `,e.jsx(t.code,{children:"attrs"})," to the anchor slot. Applying them is as simple as using ",e.jsx(t.code,{children:"v-bind"}),"."]}),`
`,e.jsx(t.h3,{id:"focus--keyboard",children:"Focus & Keyboard"}),`
`,e.jsx(t.p,{children:`Due to the different contexts in which a tooltip can be used, focus management and
keyboard shortcut ESC is provided.
You are encouraged to consult the ARIA documentation for the particular role`}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h3,{id:"import",children:"Import"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { DtTooltip, TOOLTIP_TIPPY_DIRECTIONS } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(t.h3,{id:"arrow-directions",children:"Arrow Directions"}),`
`,e.jsx(t.p,{children:`'top' is assigned by default.
Twelve directions are offered: three on each face of the tooltip.`}),`
`,e.jsx(t.h3,{id:"fallback-placements",children:"Fallback Placements"}),`
`,e.jsxs(t.p,{children:["The tooltip uses ",e.jsx(t.a,{href:"https://atomiks.github.io/tippyjs/v6/headless-tippy/",target:"_blank",rel:"nofollow noopener noreferrer",children:"headless-tippy"}),` and
`,e.jsx(t.a,{href:"https://popper.js.org/docs/v2/modifiers/flip/",target:"_blank",rel:"nofollow noopener noreferrer",children:"popper"}),`, if the tooltip opens in a placement where it will
be clipped, it will move to a new position. It will do this automatically by default, but if you want to
manually specify which position it will move to in what order you can do so via the fallbackPlacements prop.`]}),`
`,e.jsx(t.h3,{id:"default-1",children:"Default"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<dt-tooltip>
    Message
    <template #anchor>
      Anchor
    </template>
</dt-tooltip>
`})}),`
`,e.jsx(t.h3,{id:"open-state",children:"Open state"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<dt-tooltip
    message="Message"
    :show="true"
>
    <template #anchor>
      <dt-button
        importance="outlined"
      >
        Open default state
      </dt-button>
    </template>
</dt-tooltip>
`})}),`
`,e.jsx(t.h3,{id:"top-start",children:"top-start"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<dt-tooltip
    placement="top-start"
    message="Message"
>
    <template #anchor>
        <dt-button>
            top-start
        </dt-button>
    </template>
</dt-tooltip>
`})}),`
`,e.jsx(t.h3,{id:"top",children:"top"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<dt-tooltip
    placement="top"
    message="Message"
    >
    <template #anchor>
        <dt-button importance="outlined" class="d-w128">
            top
        </dt-button>
    </template>
</dt-tooltip>
`})})]})}function F(n={}){const{wrapper:t}=Object.assign({},r(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(i,n)})):i(n)}export{F as default};
//# sourceMappingURL=tooltip-edab0e4b.js.map
