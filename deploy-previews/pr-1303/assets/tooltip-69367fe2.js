import{j as e}from"./jsx-dev-runtime-e94ec84b.js";import{M as o,b as u,C as s,d as l,e as a}from"./index-e1a93643.js";import"./tooltip-9ec79026.js";import{T as m,D as c,V as d,F as f,C as h}from"./tooltip.stories-e1d55f8e.js";import{u as t}from"./index-447e0f1a.js";import"./iframe-724732da.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";import"./tippy_utils-89aa4eb5.js";import"./utils-ddad74ee.js";import"./vue.esm-bundler-81c53cfe.js";import"./lazy_show-9ef36b08.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./storybook_utils-182ea7b7.js";import"./button-878f62d6.js";import"./link_constants-8ea95ec9.js";import"./icon-8dfe7109.js";import"./icon_constants-e5cbd7a1.js";import"./chunk-AY7I2SME-5eb1ab46.js";function r(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ol:"ol",li:"li",strong:"strong",code:"code",a:"a",h3:"h3",pre:"pre"},t(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(o,{of:m},void 0,!1,{fileName:"<source.js>",lineNumber:6,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"tooltip",children:"Tooltip"},void 0,!1,{fileName:"<source.js>",lineNumber:8,columnNumber:1},this),`
`,e.jsxDEV(u,{children:e.jsxDEV(n.p,{children:`A tooltip is a floating label that briefly explains an action, function, or an element.
Its content is exclusively text and shouldn't be vital information for users.
If richer media is desired, consider using a popover instead.`},void 0,!1,{fileName:"<source.js>",lineNumber:11,columnNumber:5},this)},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"default",children:"Default"},void 0,!1,{fileName:"<source.js>",lineNumber:16,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`The tooltip, also known as infotip or hint, is a common graphical user interface element in which, when hovering over a
screen element or component, a text box displays information about that element (such as a description of a button's
function, or what an abbreviation stands for). The tooltip is displayed continuously as long as the user hovers over the
element`},void 0,!1,{fileName:"<source.js>",lineNumber:18,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"A tooltip has two slots:"},void 0,!1,{fileName:"<source.js>",lineNumber:23,columnNumber:1},this),`
`,e.jsxDEV(n.ol,{children:[`
`,e.jsxDEV(n.li,{children:[e.jsxDEV(n.strong,{children:"the anchor"},void 0,!1,{fileName:"<source.js>",lineNumber:25,columnNumber:4},this)," required slot"]},void 0,!0,{fileName:"<source.js>",lineNumber:25,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:[e.jsxDEV(n.strong,{children:"the default"},void 0,!1,{fileName:"<source.js>",lineNumber:26,columnNumber:4},this)," slot (which could be replaced with prop message)"]},void 0,!0,{fileName:"<source.js>",lineNumber:26,columnNumber:1},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:25,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(l,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:29,columnNumber:5},this)},void 0,!1,{fileName:"<source.js>",lineNumber:28,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"variants",children:"Variants"},void 0,!1,{fileName:"<source.js>",lineNumber:32,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(l,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:35,columnNumber:5},this)},void 0,!1,{fileName:"<source.js>",lineNumber:34,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"flip",children:"Flip"},void 0,!1,{fileName:"<source.js>",lineNumber:38,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(l,{of:f},void 0,!1,{fileName:"<source.js>",lineNumber:41,columnNumber:5},this)},void 0,!1,{fileName:"<source.js>",lineNumber:40,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"dinamically-change-the-position-when-the-content-changes",children:"Dinamically change the position when the content changes"},void 0,!1,{fileName:"<source.js>",lineNumber:44,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["This is achieved by setting the property ",e.jsxDEV(n.code,{children:"sticky"},void 0,!1,{fileName:"<source.js>",lineNumber:46,columnNumber:42},this),' to "popper"']},void 0,!0,{fileName:"<source.js>",lineNumber:46,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(l,{of:h},void 0,!1,{fileName:"<source.js>",lineNumber:49,columnNumber:5},this)},void 0,!1,{fileName:"<source.js>",lineNumber:48,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"props--slots",children:"Props & Slots"},void 0,!1,{fileName:"<source.js>",lineNumber:52,columnNumber:1},this),`
`,e.jsxDEV(a,{},void 0,!1,{fileName:"<source.js>",lineNumber:54,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"accessibility",children:"Accessibility"},void 0,!1,{fileName:"<source.js>",lineNumber:56,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`Reads out the tooltip content as a supplementary description for its trigger when the trigger is focused.
See also `,e.jsxDEV(n.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.1/#tooltip",target:"_blank",rel:"nofollow noopener noreferrer",children:"wai aria practices 1.1"},void 0,!1,{fileName:"<source.js>",lineNumber:59,columnNumber:10},this),"."]},void 0,!0,{fileName:"<source.js>",lineNumber:58,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"general-info",children:"General info"},void 0,!1,{fileName:"<source.js>",lineNumber:61,columnNumber:1},this),`
`,e.jsxDEV(n.ol,{children:[`
`,e.jsxDEV(n.li,{children:[e.jsxDEV(n.strong,{children:"Twelve directions are offered:"},void 0,!1,{fileName:"<source.js>",lineNumber:63,columnNumber:4},this)," three on each face of the tooltip."]},void 0,!0,{fileName:"<source.js>",lineNumber:63,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:[e.jsxDEV(n.strong,{children:"Inverted:"},void 0,!1,{fileName:"<source.js>",lineNumber:64,columnNumber:4},this)," Inverts styles to work on dark backgrounds."]},void 0,!0,{fileName:"<source.js>",lineNumber:64,columnNumber:1},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:63,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"anchor",children:"Anchor"},void 0,!1,{fileName:"<source.js>",lineNumber:66,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`The anchor element that activates the tooltip should be fully accessible by keyboard. The easiest way to do this is by
using an element like an `,e.jsxDEV(n.code,{children:"DtButton"},void 0,!1,{fileName:"<source.js>",lineNumber:69,columnNumber:26},this),` that is already accessible. When pressing the 'ESC' key in a focused tooltip,
tooltip will be closed.`]},void 0,!0,{fileName:"<source.js>",lineNumber:68,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["There are some required ARIA attributes for the anchor element (such as ",e.jsxDEV(n.code,{children:"aria-hidden"},void 0,!1,{fileName:"<source.js>",lineNumber:72,columnNumber:73},this)," set based on ",e.jsxDEV(n.code,{children:"open"},void 0,!1,{fileName:"<source.js>",lineNumber:72,columnNumber:100},this),`).
To make this as straightforward as possible, these ARIA attributes are passed
with the correct values as the `,e.jsxDEV(n.code,{children:"attrs"},void 0,!1,{fileName:"<source.js>",lineNumber:74,columnNumber:32},this)," to the anchor slot. Applying them is as simple as using ",e.jsxDEV(n.code,{children:"v-bind"},void 0,!1,{fileName:"<source.js>",lineNumber:74,columnNumber:96},this),"."]},void 0,!0,{fileName:"<source.js>",lineNumber:72,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"focus--keyboard",children:"Focus & Keyboard"},void 0,!1,{fileName:"<source.js>",lineNumber:76,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`Due to the different contexts in which a tooltip can be used, focus management and
keyboard shortcut ESC is provided.
You are encouraged to consult the ARIA documentation for the particular role`},void 0,!1,{fileName:"<source.js>",lineNumber:78,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:82,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:84,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtTooltip, TOOLTIP_TIPPY_DIRECTIONS } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:86,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:86,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"arrow-directions",children:"Arrow Directions"},void 0,!1,{fileName:"<source.js>",lineNumber:90,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`'top' is assigned by default.
Twelve directions are offered: three on each face of the tooltip.`},void 0,!1,{fileName:"<source.js>",lineNumber:92,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"fallback-placements",children:"Fallback Placements"},void 0,!1,{fileName:"<source.js>",lineNumber:95,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["The tooltip uses ",e.jsxDEV(n.a,{href:"https://atomiks.github.io/tippyjs/v6/headless-tippy/",target:"_blank",rel:"nofollow noopener noreferrer",children:"headless-tippy"},void 0,!1,{fileName:"<source.js>",lineNumber:97,columnNumber:18},this),` and
`,e.jsxDEV(n.a,{href:"https://popper.js.org/docs/v2/modifiers/flip/",target:"_blank",rel:"nofollow noopener noreferrer",children:"popper"},void 0,!1,{fileName:"<source.js>",lineNumber:98,columnNumber:1},this),`, if the tooltip opens in a placement where it will
be clipped, it will move to a new position. It will do this automatically by default, but if you want to
manually specify which position it will move to in what order you can do so via the fallbackPlacements prop.`]},void 0,!0,{fileName:"<source.js>",lineNumber:97,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"default-1",children:"Default"},void 0,!1,{fileName:"<source.js>",lineNumber:102,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-tooltip>
    Message
    <template #anchor>
      Anchor
    </template>
</dt-tooltip>
`},void 0,!1,{fileName:"<source.js>",lineNumber:104,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:104,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"open-state",children:"Open state"},void 0,!1,{fileName:"<source.js>",lineNumber:113,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-tooltip
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
`},void 0,!1,{fileName:"<source.js>",lineNumber:115,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:115,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"top-start",children:"top-start"},void 0,!1,{fileName:"<source.js>",lineNumber:130,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-tooltip
    placement="top-start"
    message="Message"
>
    <template #anchor>
        <dt-button>
            top-start
        </dt-button>
    </template>
</dt-tooltip>
`},void 0,!1,{fileName:"<source.js>",lineNumber:132,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:132,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"top",children:"top"},void 0,!1,{fileName:"<source.js>",lineNumber:145,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-tooltip
    placement="top"
    message="Message"
    >
    <template #anchor>
        <dt-button importance="outlined" class="d-w128">
            top
        </dt-button>
    </template>
</dt-tooltip>
`},void 0,!1,{fileName:"<source.js>",lineNumber:147,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:147,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function F(i={}){const{wrapper:n}=Object.assign({},t(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(r,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):r(i)}export{F as default};
//# sourceMappingURL=tooltip-69367fe2.js.map
