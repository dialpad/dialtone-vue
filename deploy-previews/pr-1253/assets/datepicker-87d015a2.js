import{j as e}from"./jsx-dev-runtime-b06df658.js";import{M as u,b as t,C as i,e as o}from"./index-7a50a5b0.js";import{D as m,a,W as d}from"./datepicker.stories-a7128e80.js";import{u as l}from"./index-c38c0bf8.js";import"./iframe-d7e2b2b9.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-cba466d5.js";import"./index-356e4a49.js";import"./storybook_utils-1aebbd64.js";import"./vue.esm-eff6e72e.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./DtDatepicker-d3fe5a4d.js";import"./icon-8e6c79ec.js";import"./icon_constants-79465167.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./popover-13bf9f3a.js";import"./tippy_utils-e4c34e91.js";import"./lazy_show-0b3a0cf0.js";import"./index.esm-be2d025a.js";import"./modal-600bd46a.js";import"./button-6471bfba.js";import"./link_constants-8ea95ec9.js";import"./sr_only_close_button-2fe2fa8e.js";function s(r){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",ul:"ul",li:"li",h3:"h3",em:"em",pre:"pre"},l(),r.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(u,{of:m},void 0,!1,{fileName:"<source.js>",lineNumber:4,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"datepicker",children:"Datepicker"},void 0,!1,{fileName:"<source.js>",lineNumber:6,columnNumber:1},this),`
`,e.jsxDEV(t,{children:e.jsxDEV(n.p,{children:"Datepicker component will provide a calendar to select a date."},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:8,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:12,columnNumber:1},this),`
`,e.jsxDEV(i,{of:a},void 0,!1,{fileName:"<source.js>",lineNumber:14,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"variants",children:"Variants"},void 0,!1,{fileName:"<source.js>",lineNumber:16,columnNumber:1},this),`
`,e.jsxDEV(i,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:18,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:1},this),`
`,e.jsxDEV(o,{},void 0,!1,{fileName:"<source.js>",lineNumber:22,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:24,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["We recommend to wrap the datepicker in a ",e.jsxDEV(n.code,{children:"dt-popover"},void 0,!1,{fileName:"<source.js>",lineNumber:26,columnNumber:42},this)," component."]},void 0,!0,{fileName:"<source.js>",lineNumber:26,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"It is required to provide the component with proper labels for i18n and accessibility."},void 0,!1,{fileName:"<source.js>",lineNumber:28,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["The component will return a ",e.jsxDEV(n.a,{href:"https://www.w3schools.com/js/js_dates.asp",target:"_blank",rel:"nofollow noopener noreferrer",children:"Date object"},void 0,!1,{fileName:"<source.js>",lineNumber:30,columnNumber:29},this)," object when a date is selected."]},void 0,!0,{fileName:"<source.js>",lineNumber:30,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["For the ",e.jsxDEV(n.code,{children:"withPopover"},void 0,!1,{fileName:"<source.js>",lineNumber:32,columnNumber:9},this)," variant it is necessary to provide the ",e.jsxDEV(n.code,{children:'initial-focus-element="#prevYearButton"'},void 0,!1,{fileName:"<source.js>",lineNumber:32,columnNumber:62},this),` prop
to the `,e.jsxDEV(n.code,{children:"dt-popover"},void 0,!1,{fileName:"<source.js>",lineNumber:33,columnNumber:8},this)," component."]},void 0,!0,{fileName:"<source.js>",lineNumber:32,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"With this we accomplish the requirement to have the previous year button focused when the datepicker is opened."},void 0,!1,{fileName:"<source.js>",lineNumber:35,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"accessibility",children:"Accessibility"},void 0,!1,{fileName:"<source.js>",lineNumber:37,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"Keyboard navigation with arrow and tab keys for datepicker component."},void 0,!1,{fileName:"<source.js>",lineNumber:39,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["It will switch between ",e.jsxDEV(n.code,{children:"month-year-picker"},void 0,!1,{fileName:"<source.js>",lineNumber:41,columnNumber:24},this)," and ",e.jsxDEV(n.code,{children:"calendar"},void 0,!1,{fileName:"<source.js>",lineNumber:41,columnNumber:48},this)," with ",e.jsxDEV(n.code,{children:"TAB"},void 0,!1,{fileName:"<source.js>",lineNumber:41,columnNumber:64},this),"."]},void 0,!0,{fileName:"<source.js>",lineNumber:41,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["It will move around all calendar days with ",e.jsxDEV(n.code,{children:"arrow-keys"},void 0,!1,{fileName:"<source.js>",lineNumber:43,columnNumber:44},this),"."]},void 0,!0,{fileName:"<source.js>",lineNumber:43,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["It will jump from ",e.jsxDEV(n.code,{children:"month-year-picker"},void 0,!1,{fileName:"<source.js>",lineNumber:45,columnNumber:19},this)," to ",e.jsxDEV(n.code,{children:"calendar"},void 0,!1,{fileName:"<source.js>",lineNumber:45,columnNumber:42},this)," with ",e.jsxDEV(n.code,{children:"DOWN"},void 0,!1,{fileName:"<source.js>",lineNumber:45,columnNumber:58},this)," arrow key."]},void 0,!0,{fileName:"<source.js>",lineNumber:45,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["It will jump to ",e.jsxDEV(n.code,{children:"month-year-picker"},void 0,!1,{fileName:"<source.js>",lineNumber:47,columnNumber:17},this)," when there is no more days at the bottom or top of the calendar."]},void 0,!0,{fileName:"<source.js>",lineNumber:47,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["It will change year or month with ",e.jsxDEV(n.code,{children:"ENTER"},void 0,!1,{fileName:"<source.js>",lineNumber:49,columnNumber:35},this)," or ",e.jsxDEV(n.code,{children:"SPACE"},void 0,!1,{fileName:"<source.js>",lineNumber:49,columnNumber:46},this)," (native event)"]},void 0,!0,{fileName:"<source.js>",lineNumber:49,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["It will select day with ",e.jsxDEV(n.code,{children:"ENTER"},void 0,!1,{fileName:"<source.js>",lineNumber:51,columnNumber:25},this)," or ",e.jsxDEV(n.code,{children:"SPACE"},void 0,!1,{fileName:"<source.js>",lineNumber:51,columnNumber:36},this)," (native event)"]},void 0,!0,{fileName:"<source.js>",lineNumber:51,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"It will start with focus on previous-year on mounted"},void 0,!1,{fileName:"<source.js>",lineNumber:53,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"Screen reader will say"},void 0,!1,{fileName:"<source.js>",lineNumber:55,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["In ",e.jsxDEV(n.code,{children:"month-year-picker"},void 0,!1,{fileName:"<source.js>",lineNumber:57,columnNumber:4},this),":"]},void 0,!0,{fileName:"<source.js>",lineNumber:57,columnNumber:1},this),`
`,e.jsxDEV(n.ul,{children:[`
`,e.jsxDEV(n.li,{children:"Change to previous year, 2022"},void 0,!1,{fileName:"<source.js>",lineNumber:59,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:"Change to previous month, july"},void 0,!1,{fileName:"<source.js>",lineNumber:60,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:"Change to next month, september"},void 0,!1,{fileName:"<source.js>",lineNumber:61,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:"Change to next year, 2024"},void 0,!1,{fileName:"<source.js>",lineNumber:62,columnNumber:1},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:59,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["In ",e.jsxDEV(n.code,{children:"calendar"},void 0,!1,{fileName:"<source.js>",lineNumber:64,columnNumber:4},this),":"]},void 0,!0,{fileName:"<source.js>",lineNumber:64,columnNumber:1},this),`
`,e.jsxDEV(n.ul,{children:[`
`,e.jsxDEV(n.li,{children:"Select day 20 July 2023"},void 0,!1,{fileName:"<source.js>",lineNumber:66,columnNumber:1},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:66,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"date-formats",children:"Date formats"},void 0,!1,{fileName:"<source.js>",lineNumber:68,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"We are providing the following functions to format dates:"},void 0,!1,{fileName:"<source.js>",lineNumber:70,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`formatLong(date): returns Thursday, September 2, 2022
formatMedium(date): returns September 2, 2022
formatShort(date, showWeekday=true): returns Thu, Sep 2, 2022, Sep 2, 2022 (showWeekday=false)
formatNoYear(date, abbreviated=false): returns September 2, Sep 2 (abbreviated=true)
formatNumerical(date): returns `,e.jsxDEV(n.em,{children:"MM/DD/YY"},void 0,!1,{fileName:"<source.js>",lineNumber:76,columnNumber:32},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:72,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:78,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtDatepicker } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:80,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:80,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"example-usage",children:"Example usage"},void 0,!1,{fileName:"<source.js>",lineNumber:84,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`const prevMonthLabel = 'Previous month';
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
`},void 0,!1,{fileName:"<source.js>",lineNumber:86,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:86,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"example-usage-with-popover",children:"Example usage with Popover"},void 0,!1,{fileName:"<source.js>",lineNumber:103,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`const prevMonthLabel = 'Previous month';
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
`},void 0,!1,{fileName:"<source.js>",lineNumber:105,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:105,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function T(r={}){const{wrapper:n}=Object.assign({},l(),r.components);return n?e.jsxDEV(n,Object.assign({},r,{children:e.jsxDEV(s,r,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):s(r)}export{T as default};
//# sourceMappingURL=datepicker-87d015a2.js.map
