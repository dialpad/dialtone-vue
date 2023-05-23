import{j as e}from"./jsx-dev-runtime-186d2b52.js";import{M as t,S as u,C as s,a as l,b as a}from"./index-fa2dca47.js";import{P as m,D as c,V as d}from"./popover.stories-a13987dd.js";import{u as o}from"./index-76d23e7e.js";import"./iframe-56f7c72f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./popover-ece9c333.js";import"./tippy_utils-e4c34e91.js";import"./storybook_utils-b160963d.js";import"./vue.esm-eff6e72e.js";import"./lazy_show-0b3a0cf0.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./index.esm-be2d025a.js";import"./modal-f96ddab9.js";import"./button-9102a84a.js";import"./link_constants-51338c78.js";import"./icon-779593c7.js";import"./icon_constants-f866c22d.js";import"./sr_only_close_button-e6688b8d.js";import"./dropdown_separator-f673fc18.js";import"./keyboard_list_navigation-8c116ee6.js";import"./list_item-53bd4052.js";import"./dropdown_constants-d0cadac9.js";import"./tooltip-e4faeb9e.js";import"./chunk-OPEUWD42-a3b45fd8.js";function r(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",h3:"h3",a:"a",code:"code",strong:"strong",em:"em",pre:"pre",ol:"ol"},o(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(t,{of:m},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"popovers",children:"Popovers"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(u,{children:e.jsxDEV(n.p,{children:"A Popover displays a content overlay when its anchor element is activated."},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:13,columnNumber:1},this),`
`,e.jsxDEV(n.ul,{children:[`
`,e.jsxDEV(n.li,{children:"Activating the anchor will display a white content box with rounded corners, and a box shadow."},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:["The popover may optionally have a header / footer.",`
`,e.jsxDEV(n.ul,{children:[`
`,e.jsxDEV(n.li,{children:`Header / Footer is always placed at the top and bottom of the popover frame respectively and will remain in place as
the main content is scrolled.`},void 0,!1,{fileName:"<source.js>",lineNumber:17,columnNumber:3},this),`
`,e.jsxDEV(n.li,{children:"Header / Footer will remain in place as the main content is scrolled."},void 0,!1,{fileName:"<source.js>",lineNumber:19,columnNumber:3},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:17,columnNumber:3},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:16,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:`Setting the max height of the popover will make the content scrollable. Otherwise the popover will size to fit its
content`},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:1},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:15,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(l,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:24,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:23,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"variants",children:"Variants"},void 0,!1,{fileName:"<source.js>",lineNumber:27,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"fallback-placements",children:"Fallback Placements"},void 0,!1,{fileName:"<source.js>",lineNumber:29,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["The popover uses ",e.jsxDEV(n.a,{href:"https://atomiks.github.io/tippyjs/v6/headless-tippy/",target:"_blank",rel:"nofollow noopener noreferrer",children:"headless-tippy"},void 0,!1,{fileName:"<source.js>",lineNumber:31,columnNumber:18},this),` and
`,e.jsxDEV(n.a,{href:"https://popper.js.org/docs/v2/modifiers/flip/",target:"_blank",rel:"nofollow noopener noreferrer",children:"popper"},void 0,!1,{fileName:"<source.js>",lineNumber:32,columnNumber:1},this),`, if the popover opens in a placement where it will
be clipped, it will move to a new position. It will do this automatically by default, but if you want to
manually specify which position it will move to in what order you can do so via the fallbackPlacements prop.`]},void 0,!0,{fileName:"<source.js>",lineNumber:31,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"padding",children:"Padding"},void 0,!1,{fileName:"<source.js>",lineNumber:36,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["Padding options for the popover content are provided via size classes ",e.jsxDEV(n.code,{children:"small"},void 0,!1,{fileName:"<source.js>",lineNumber:38,columnNumber:71},this),"/",e.jsxDEV(n.code,{children:"medium"},void 0,!1,{fileName:"<source.js>",lineNumber:38,columnNumber:79},this),"/",e.jsxDEV(n.code,{children:"large"},void 0,!1,{fileName:"<source.js>",lineNumber:38,columnNumber:88},this),` in order to standardize
the look of the popover content between usages. To remove the padding from the content, you can pass `,e.jsxDEV(n.code,{children:"none"},void 0,!1,{fileName:"<source.js>",lineNumber:39,columnNumber:102},this),`. Setting
`,e.jsxDEV(n.code,{children:"none"},void 0,!1,{fileName:"<source.js>",lineNumber:40,columnNumber:1},this)," will also allow you to set custom padding via utility classes (Ex: you only want padding on the left.)."]},void 0,!0,{fileName:"<source.js>",lineNumber:38,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"variants-1",children:"Variants"},void 0,!1,{fileName:"<source.js>",lineNumber:42,columnNumber:1},this),`
`,e.jsxDEV(s,{children:e.jsxDEV(l,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:45,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:44,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:48,columnNumber:1},this),`
`,e.jsxDEV(a,{},void 0,!1,{fileName:"<source.js>",lineNumber:50,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"basic-usage",children:"Basic Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:52,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`Popovers may be used standalone, or to create a dropdown menu or other complex control.
Setting the `,e.jsxDEV(n.code,{children:"modal"},void 0,!1,{fileName:"<source.js>",lineNumber:55,columnNumber:13},this),` prop will set an invisible overlay which will prevent interaction with anything rendered outside
of the popover. Note we also have the `,e.jsxDEV(n.a,{href:"/story/components-modal--default",children:"dt-modal"},void 0,!1,{fileName:"<source.js>",lineNumber:56,columnNumber:39},this),` component which should be used
for fullscreen modals that are not displayed relative to the anchor.`]},void 0,!0,{fileName:"<source.js>",lineNumber:54,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["A popover has 2 main required slots: the ",e.jsxDEV(n.strong,{children:"anchor"},void 0,!1,{fileName:"<source.js>",lineNumber:59,columnNumber:42},this)," and the ",e.jsxDEV(n.strong,{children:"content"},void 0,!1,{fileName:"<source.js>",lineNumber:59,columnNumber:61},this),"."]},void 0,!0,{fileName:"<source.js>",lineNumber:59,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["The ",e.jsxDEV(n.strong,{children:"anchor"},void 0,!1,{fileName:"<source.js>",lineNumber:61,columnNumber:5},this),` is the control that the content will be positioned relative to and triggers the visibility of the
content. Normally a button, the anchor can be any `,e.jsxDEV(n.em,{children:"interactive"},void 0,!1,{fileName:"<source.js>",lineNumber:62,columnNumber:51},this),` element that could control the visibility of the popover
content. For example, the anchor could be an input element with a conditionally displayed `,e.jsxDEV(n.code,{children:"listbox"},void 0,!1,{fileName:"<source.js>",lineNumber:63,columnNumber:91},this),` content element to
implement an auto-suggest form component.`]},void 0,!0,{fileName:"<source.js>",lineNumber:61,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["The ",e.jsxDEV(n.strong,{children:"content"},void 0,!1,{fileName:"<source.js>",lineNumber:66,columnNumber:5},this),` slot will be rendered lazily when the popover is open. By default, the popover content will
be opened when the anchor is clicked, and closed when clicking outside the content or on `,e.jsxDEV(n.code,{children:"ESC"},void 0,!1,{fileName:"<source.js>",lineNumber:67,columnNumber:90},this),` key press. You may
override this behaviour by using `,e.jsxDEV(n.code,{children:".sync"},void 0,!1,{fileName:"<source.js>",lineNumber:68,columnNumber:34},this)," on the open prop (or ",e.jsxDEV(n.code,{children:"v-model:open"},void 0,!1,{fileName:"<source.js>",lineNumber:68,columnNumber:63},this),` in Vue 3) in which you can open or close
the content using whichever condition you wish.`]},void 0,!0,{fileName:"<source.js>",lineNumber:66,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:71,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtPopover } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:73,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:73,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"basic-usage-with-named-slots",children:"Basic usage with named slots"},void 0,!1,{fileName:"<source.js>",lineNumber:77,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<dt-popover>
  <template #anchor="{ attrs }">
    <dt-button
      v-bind="attrs"
    >
      Click to open
    </dt-button>
  </template>
  <template #content>
    <p>I will be displayed in the popover!</p>
  </template>
</dt-popover>
`},void 0,!1,{fileName:"<source.js>",lineNumber:79,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:79,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"force-close-all-opened-instances",children:"Force close all opened instances"},void 0,!1,{fileName:"<source.js>",lineNumber:94,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`When the popover is open, it will attach an event listener into the window object, so you can close the instances
dispatching the `,e.jsxDEV(n.code,{children:"dt-popover-close"},void 0,!1,{fileName:"<source.js>",lineNumber:97,columnNumber:17},this)," event in the window object:"]},void 0,!0,{fileName:"<source.js>",lineNumber:96,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`const e = new Event('dt-popover-close');
window.dispatchEvent(e);
`},void 0,!1,{fileName:"<source.js>",lineNumber:99,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:99,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"accessibility",children:"Accessibility"},void 0,!1,{fileName:"<source.js>",lineNumber:104,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`Popovers, in their current implementation, are accessible when used as interactive components.
Content will be read to screen reader users, and the popover markup by is appended to the `,e.jsxDEV(n.code,{children:"<body>"},void 0,!1,{fileName:"<source.js>",lineNumber:107,columnNumber:91},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:106,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`There are a few important considerations to ensure popover controls are accessible.
The popover, by default:`},void 0,!1,{fileName:"<source.js>",lineNumber:109,columnNumber:1},this),`
`,e.jsxDEV(n.ul,{children:[`
`,e.jsxDEV(n.li,{children:['the popover content will have a generic role of "dialog" ( ',e.jsxDEV(n.code,{children:"menu"},void 0,!1,{fileName:"<source.js>",lineNumber:112,columnNumber:62},this),", ",e.jsxDEV(n.code,{children:"listbox"},void 0,!1,{fileName:"<source.js>",lineNumber:112,columnNumber:70},this)," also possible roles as well)."]},void 0,!0,{fileName:"<source.js>",lineNumber:112,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:`on open, focus will be transferred to the first focusable element within the popover, after close the triggering
element will be focused.`},void 0,!1,{fileName:"<source.js>",lineNumber:113,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:["It is possible to include a screen reader visible only close button setting ",e.jsxDEV(n.code,{children:"visually-hidden-close"},void 0,!1,{fileName:"<source.js>",lineNumber:115,columnNumber:79},this),`
and `,e.jsxDEV(n.code,{children:"visually-hidden-close-label"},void 0,!1,{fileName:"<source.js>",lineNumber:116,columnNumber:5},this)," props."]},void 0,!0,{fileName:"<source.js>",lineNumber:115,columnNumber:1},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:112,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"anchor",children:"Anchor"},void 0,!1,{fileName:"<source.js>",lineNumber:118,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`The anchor element that activates the popover should be fully accessible by keyboard. The easiest way to do this is by
using an element like an `,e.jsxDEV(n.code,{children:"DtButton"},void 0,!1,{fileName:"<source.js>",lineNumber:121,columnNumber:26},this),` that is already accessible. The user should also be able to close the popover
content using the `,e.jsxDEV(n.code,{children:"ESC"},void 0,!1,{fileName:"<source.js>",lineNumber:122,columnNumber:19},this)," key for most ARIA roles."]},void 0,!0,{fileName:"<source.js>",lineNumber:120,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["There are some required ARIA attributes for the anchor element (such as ",e.jsxDEV(n.code,{children:"aria-expanded"},void 0,!1,{fileName:"<source.js>",lineNumber:124,columnNumber:73},this)," set based on ",e.jsxDEV(n.code,{children:"open"},void 0,!1,{fileName:"<source.js>",lineNumber:124,columnNumber:102},this),` and
`,e.jsxDEV(n.code,{children:"aria-haspopup"},void 0,!1,{fileName:"<source.js>",lineNumber:125,columnNumber:1},this)," that matches the ",e.jsxDEV(n.code,{children:"role"},void 0,!1,{fileName:"<source.js>",lineNumber:125,columnNumber:34},this),`). To make this as straightforward as possible, these ARIA attributes are passed
with the correct values as the `,e.jsxDEV(n.code,{children:"attrs"},void 0,!1,{fileName:"<source.js>",lineNumber:126,columnNumber:32},this)," slot-scope to the anchor slot. Applying them is as simple as using ",e.jsxDEV(n.code,{children:"v-bind"},void 0,!1,{fileName:"<source.js>",lineNumber:126,columnNumber:107},this),":"]},void 0,!0,{fileName:"<source.js>",lineNumber:124,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`<template #anchor="{ attrs }">
  <dt-button v-bind="attrs">I'm accessible now!</dt-button>
</template>
`},void 0,!1,{fileName:"<source.js>",lineNumber:128,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:128,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"By default, the dialog content will be labeled by the entire anchor element. To change this, you can do one of 2 things:"},void 0,!1,{fileName:"<source.js>",lineNumber:134,columnNumber:1},this),`
`,e.jsxDEV(n.ol,{children:[`
`,e.jsxDEV(n.li,{children:["Pass ",e.jsxDEV(n.code,{children:"aria-label"},void 0,!1,{fileName:"<source.js>",lineNumber:136,columnNumber:9},this),", which is the text label that will be applied to the dialog content."]},void 0,!0,{fileName:"<source.js>",lineNumber:136,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:["Pass ",e.jsxDEV(n.code,{children:"aria-labelledby"},void 0,!1,{fileName:"<source.js>",lineNumber:137,columnNumber:9},this),", which is an ID of the element that should be used as the descriptive label."]},void 0,!0,{fileName:"<source.js>",lineNumber:137,columnNumber:1},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:136,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"keyboard-support",children:"Keyboard support"},void 0,!1,{fileName:"<source.js>",lineNumber:139,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"The below keyboard functionality is automatically implemented when using the popover component:"},void 0,!1,{fileName:"<source.js>",lineNumber:141,columnNumber:1},this),`
`,e.jsxDEV(n.ul,{children:[`
`,e.jsxDEV(n.li,{children:["The user can dismiss the popover pressing the ",e.jsxDEV(n.code,{children:"ESC"},void 0,!1,{fileName:"<source.js>",lineNumber:143,columnNumber:49},this),` key, after that the focus will be returned to the element
that launched it.`]},void 0,!0,{fileName:"<source.js>",lineNumber:143,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:["The user can traverse focusable elements using the ",e.jsxDEV(n.code,{children:"TAB"},void 0,!1,{fileName:"<source.js>",lineNumber:145,columnNumber:54},this),` key. If the popover has a defined header, the focus will be
moved to the header buttons after the last focusable element inside content's container.`]},void 0,!0,{fileName:"<source.js>",lineNumber:145,columnNumber:1},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:143,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`Additionally you must use the "initialFocusElement" prop to set which element is initially focused when the popover
opens. You can set this to "first" to focus the first focusable element, "dialog" to focus the dialog itself, a string
starting with '#' to focus an element by id within the dialog or  you may pass in an HTMLElement directly.
If set to "none" the focus will remain on the anchor, however this is invalid behavior if the popover is modal.`},void 0,!1,{fileName:"<source.js>",lineNumber:148,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"references",children:"References"},void 0,!1,{fileName:"<source.js>",lineNumber:153,columnNumber:1},this),`
`,e.jsxDEV(n.ul,{children:[`
`,e.jsxDEV(n.li,{children:[e.jsxDEV(n.a,{href:"https://atomiks.github.io/tippyjs/",target:"_blank",rel:"nofollow noopener noreferrer",children:"tippyjs"},void 0,!1,{fileName:"<source.js>",lineNumber:155,columnNumber:3},this),", ",e.jsxDEV(n.a,{href:"https://popper.js.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"popper.js"},void 0,!1,{fileName:"<source.js>",lineNumber:155,columnNumber:50},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:155,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:[e.jsxDEV(n.a,{href:"https://developer.apple.com/design/human-interface-guidelines/ios/views/popovers/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Apple. Human Interface Guidelines"},void 0,!1,{fileName:"<source.js>",lineNumber:156,columnNumber:3},this),`
, `,e.jsxDEV(n.a,{href:"https://react-spectrum.adobe.com/react-aria/useOverlayTrigger.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Spectrum. Accessibility overlay trigger"},void 0,!1,{fileName:"<source.js>",lineNumber:157,columnNumber:3},this),`,
`,e.jsxDEV(n.a,{href:"https://slack.design/articles/accessibility-a-powerful-design-tool/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Slack Design. Accessibility, a powerful design tool"},void 0,!1,{fileName:"<source.js>",lineNumber:158,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:156,columnNumber:1},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:155,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function L(i={}){const{wrapper:n}=Object.assign({},o(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(r,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):r(i)}export{L as default};
//# sourceMappingURL=popover-b7894916.js.map
