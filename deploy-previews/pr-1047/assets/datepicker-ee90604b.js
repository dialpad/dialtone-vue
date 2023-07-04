import{j as e}from"./jsx-dev-runtime-9e4a3821.js";import{M as u,S as t,C as r,b as o}from"./index-dc185fcc.js";import{D as m,a,W as c}from"./datepicker.stories-afc24e11.js";import{u as s}from"./index-392e3372.js";import"./iframe-c0f4f094.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./chunk-OPEUWD42-a3b45fd8.js";import"./storybook_utils-7153c87a.js";import"./vue.esm-bundler-238c0022.js";import"./utils-c2ddd234.js";import"./icon-370c3176.js";import"./icon_constants-7fcd4857.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./popover-65a1ea55.js";import"./tippy_utils-e4c34e91.js";import"./lazy_show-2bdd2bcd.js";import"./modal-f96ddab9.js";import"./button-290b3d5b.js";import"./link_constants-51338c78.js";import"./sr_only_close_button-73cea551.js";function l(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",ul:"ul",li:"li",h3:"h3",pre:"pre"},s(),i.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(u,{of:m},void 0,!1,{fileName:"<source.js>",lineNumber:4,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"datepicker",children:"Datepicker"},void 0,!1,{fileName:"<source.js>",lineNumber:6,columnNumber:1},this),`
`,e.jsxDEV(t,{children:e.jsxDEV(n.p,{children:"Datepicker component will provide a calendar to select a date."},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:8,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:12,columnNumber:1},this),`
`,e.jsxDEV(r,{of:a},void 0,!1,{fileName:"<source.js>",lineNumber:14,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"variants",children:"Variants"},void 0,!1,{fileName:"<source.js>",lineNumber:16,columnNumber:1},this),`
`,e.jsxDEV(r,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:18,columnNumber:1},this),`
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
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:68,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtDatepicker } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:70,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:70,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"example-usage",children:"Example usage"},void 0,!1,{fileName:"<source.js>",lineNumber:74,columnNumber:1},this),`
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
`},void 0,!1,{fileName:"<source.js>",lineNumber:76,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:76,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"example-usage-with-popover",children:"Example usage with Popover"},void 0,!1,{fileName:"<source.js>",lineNumber:93,columnNumber:1},this),`
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
`},void 0,!1,{fileName:"<source.js>",lineNumber:95,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:95,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function B(i={}){const{wrapper:n}=Object.assign({},s(),i.components);return n?e.jsxDEV(n,Object.assign({},i,{children:e.jsxDEV(l,i,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):l(i)}export{B as default};
//# sourceMappingURL=datepicker-ee90604b.js.map
