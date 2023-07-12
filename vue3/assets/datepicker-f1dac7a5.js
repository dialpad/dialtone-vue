import{j as e}from"./jsx-runtime-14f9c5f9.js";import{M as i,S as s,C as r,b as l}from"./index-e4d2618a.js";import{D as c,a as d,W as p}from"./datepicker.stories-ca504613.js";import{u as a}from"./index-e2e7da94.js";import"./iframe-205005b8.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-8d7a2403.js";import"./vue.esm-bundler-00d79a38.js";import"./utils-d2c6fc19.js";import"./icon-24a41200.js";import"./icon_constants-84bb757e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./popover-af3d0962.js";import"./tippy_utils-dcd4636d.js";import"./lazy_show-20ca5343.js";import"./modal-f96ddab9.js";import"./button-df070c17.js";import"./link_constants-51338c78.js";import"./sr_only_close_button-65ed13a8.js";function o(t){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",ul:"ul",li:"li",h3:"h3",em:"em",pre:"pre"},a(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
`,e.jsx(n.h1,{id:"datepicker",children:"Datepicker"}),`
`,e.jsx(s,{children:e.jsx(n.p,{children:"Datepicker component will provide a calendar to select a date."})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["We recommend to wrap the datepicker in a ",e.jsx(n.code,{children:"dt-popover"})," component."]}),`
`,e.jsx(n.p,{children:"It is required to provide the component with proper labels for i18n and accessibility."}),`
`,e.jsxs(n.p,{children:["The component will return a ",e.jsx(n.a,{href:"https://www.w3schools.com/js/js_dates.asp",target:"_blank",rel:"nofollow noopener noreferrer",children:"Date object"})," object when a date is selected."]}),`
`,e.jsxs(n.p,{children:["For the ",e.jsx(n.code,{children:"withPopover"})," variant it is necessary to provide the ",e.jsx(n.code,{children:'initial-focus-element="#prevYearButton"'}),` prop
to the `,e.jsx(n.code,{children:"dt-popover"})," component."]}),`
`,e.jsx(n.p,{children:"With this we accomplish the requirement to have the previous year button focused when the datepicker is opened."}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:"Keyboard navigation with arrow and tab keys for datepicker component."}),`
`,e.jsxs(n.p,{children:["It will switch between ",e.jsx(n.code,{children:"month-year-picker"})," and ",e.jsx(n.code,{children:"calendar"})," with ",e.jsx(n.code,{children:"TAB"}),"."]}),`
`,e.jsxs(n.p,{children:["It will move around all calendar days with ",e.jsx(n.code,{children:"arrow-keys"}),"."]}),`
`,e.jsxs(n.p,{children:["It will jump from ",e.jsx(n.code,{children:"month-year-picker"})," to ",e.jsx(n.code,{children:"calendar"})," with ",e.jsx(n.code,{children:"DOWN"})," arrow key."]}),`
`,e.jsxs(n.p,{children:["It will jump to ",e.jsx(n.code,{children:"month-year-picker"})," when there is no more days at the bottom or top of the calendar."]}),`
`,e.jsxs(n.p,{children:["It will change year or month with ",e.jsx(n.code,{children:"ENTER"})," or ",e.jsx(n.code,{children:"SPACE"})," (native event)"]}),`
`,e.jsxs(n.p,{children:["It will select day with ",e.jsx(n.code,{children:"ENTER"})," or ",e.jsx(n.code,{children:"SPACE"})," (native event)"]}),`
`,e.jsx(n.p,{children:"It will start with focus on previous-year on mounted"}),`
`,e.jsx(n.p,{children:"Screen reader will say"}),`
`,e.jsxs(n.p,{children:["In ",e.jsx(n.code,{children:"month-year-picker"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Change to previous year, 2022"}),`
`,e.jsx(n.li,{children:"Change to previous month, july"}),`
`,e.jsx(n.li,{children:"Change to next month, september"}),`
`,e.jsx(n.li,{children:"Change to next year, 2024"}),`
`]}),`
`,e.jsxs(n.p,{children:["In ",e.jsx(n.code,{children:"calendar"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Select day 20 July 2023"}),`
`]}),`
`,e.jsx(n.h3,{id:"date-formats",children:"Date formats"}),`
`,e.jsx(n.p,{children:"We are providing the following functions to format dates:"}),`
`,e.jsxs(n.p,{children:[`formatLong(date): returns Thursday, September 2, 2022
formatMedium(date): returns September 2, 2022
formatShort(date, showWeekday=true): returns Thu, Sep 2, 2022, Sep 2, 2022 (showWeekday=false)
formatNoYear(date, abbreviated=false): returns September 2, Sep 2 (abbreviated=true)
formatNumerical(date): returns `,e.jsx(n.em,{children:"MM/DD/YY"})]}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DtDatepicker } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.h3,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const prevMonthLabel = 'Previous month';
const nextMonthLabel = 'Next month';
const prevYearLabel = 'Previous year';
const nextYearLabel = 'Next year';
const date: new Date();

<dt-datepicker
  :prev-month-label="prevMonthLabel"
  :next-month-label="nextMonthLabel"
  :prev-year-label="prevYearLabel"
  :next-year-label="nextYearLabel"
  :selected-date="date"
  @selected-date="selectedDateHandler()"
/>
`})}),`
`,e.jsx(n.h3,{id:"example-usage-with-popover",children:"Example usage with Popover"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const prevMonthLabel = 'Previous month';
const nextMonthLabel = 'Next month';
const prevYearLabel = 'Previous year';
const nextYearLabel = 'Next year';
const date = new Date();
const datepickerOpened = false;

<dt-popover
  :open="datepickerOpened"
  initial-focus-element="#prevYearButton"
  padding="none"
  @opened="(open) => { datepickerOpened = open }"
>
  <template #anchor>
    <dt-button
      size="sm"
      circle
      importance="clear"
      aria-label="Open datepicker"
      @click="toggleDatepicker"
    >
      <template #icon>
        <dt-icon
          name="calendar"
          size="300"
        />
      </template>
    </dt-button>
  </template>
  <template #content>
    <dt-datepicker
      :prev-month-label="prevMonthLabel"
      :next-month-label="nextMonthLabel"
      :prev-year-label="prevYearLabel"
      :next-year-label="nextYearLabel"
      :selected-date="date"
      @selected-date="selectedDateHandler()"
    />
  </template>
</dt-popover>
`})})]})}function B(t={}){const{wrapper:n}=Object.assign({},a(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(o,t)})):o(t)}export{B as default};
//# sourceMappingURL=datepicker-f1dac7a5.js.map