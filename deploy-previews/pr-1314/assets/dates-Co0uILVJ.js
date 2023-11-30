import{j as n}from"./jsx-dev-runtime-66DEIT8l.js";import{M as s,g as o}from"./index-JiGhQck6.js";import{u as i}from"./index-EWvoOh1q.js";import"./iframe-0etXrrgj.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-aKxH7ZY0.js";import"./index-1QZrJT68.js";import"./index-PPLHz8o0.js";const r=`# Module: dates

## Functions

### durationInHHMM

▸ **durationInHHMM**(\`durationInSeconds\`): \`string\`

Converts a call duration in total number of seconds to a human readable string
such as 'less than a minute' or '4 hours 34 minutes'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| \`durationInSeconds\` | \`number\` | The duration of the call in seconds |

#### Returns

\`string\`

A human readable string representing the duration of the call

#### Defined in

[common/dates.js:74](https://github.com/dialpad/dialtone-vue/blob/256e08d/common/dates.js#L74)

___

### getDateMedium

▸ **getDateMedium**(\`date\`): \`string\`

This formats a date to the Dialtone standard medium date format as shown here:
https://dialpad.design/guides/writing-guidelines/#formats-by-length

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| \`date\` | \`Date\` | A javascript date object |

#### Returns

\`string\`

A string in the format of 'September 2, 2022'

#### Defined in

[common/dates.js:64](https://github.com/dialpad/dialtone-vue/blob/256e08d/common/dates.js#L64)

___

### relativeDate

▸ **relativeDate**(\`date\`): \`string\`

Returns the distance between the passed in date and now in a human readable format, typically used
when showing a history of items in a log such as a feed list.

datefns does not support 'today' and 'yesterday' without showing time so we use Intl for these cases.

examples below to explain
the different potential formats:

If current day:
Today

If previous day:
Yesterday

Older than yesterday, but in the same calendar week:
Monday

Older than the most recent calendar week, but in the same year:
Monday, October 14

older than a calendar year:
October 14, 2022

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| \`date\` | \`Date\` | The timestamp of the item's date |

#### Returns

\`string\`

A human readable string representing the distance between the date and now

#### Defined in

[common/dates.js:126](https://github.com/dialpad/dialtone-vue/blob/256e08d/common/dates.js#L126)

___

### setDateLocale

▸ **setDateLocale**(\`locale\`): \`void\`

Sets the locale for date-fns. This should be called before any date-fns functions are called.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| \`locale\` | \`Locale\` | A date-fns locale object |

#### Returns

\`void\`

#### Defined in

[common/dates.js:54](https://github.com/dialpad/dialtone-vue/blob/256e08d/common/dates.js#L54)
`;function a(e){return n.jsxDEV(n.Fragment,{children:[n.jsxDEV(s,{title:"Functions/Date and Time"},void 0,!1,{fileName:"<source.js>",lineNumber:4,columnNumber:1},this),`
`,n.jsxDEV(o,{children:r},void 0,!1,{fileName:"<source.js>",lineNumber:6,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function g(e={}){const{wrapper:t}=Object.assign({},i(),e.components);return t?n.jsxDEV(t,Object.assign({},e,{children:n.jsxDEV(a,e,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):a()}export{g as default};
//# sourceMappingURL=dates-Co0uILVJ.js.map
