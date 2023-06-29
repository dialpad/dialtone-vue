import{j as e}from"./jsx-runtime-664ec1d5.js";import{M as s,S as l,C as a,b as c}from"./index-db46a520.js";import{D as d,a as p,W as h}from"./datepicker.stories-39a3a29b.js";import{u as i}from"./index-24bf02b1.js";import"./iframe-0873f32e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-a2047fb2.js";import"./vue.esm-bundler-3bf5edd9.js";import"./utils-b704f328.js";import"./icon-28829c6f.js";import"./icon_constants-8c90fe6d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./popover-3ee4e4c3.js";import"./tippy_utils-0155706c.js";import"./tippy.esm-65135068.js";import"./lazy_show-30f95b43.js";import"./modal-f96ddab9.js";import"./button-59f99281.js";import"./link_constants-51338c78.js";import"./sr_only_close_button-ad6999cc.js";function R(t={}){const{wrapper:r}=Object.assign({},i(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(o,{})})):o();function o(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",ul:"ul",li:"li",h3:"h3",pre:"pre"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(n.h1,{id:"datepicker",children:"Datepicker"}),`
`,e.jsx(l,{children:e.jsx(n.p,{children:"Datepicker component will provide a calendar to select a date."})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(a,{of:p}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(a,{of:h}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(c,{}),`
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
`})})]})}}export{R as default};
//# sourceMappingURL=datepicker-c8cc303b.js.map
