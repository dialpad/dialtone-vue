import{j as e}from"./jsx-dev-runtime-61a6748b.js";import{M as r}from"./index-67c05572.js";import{u as t}from"./index-4383bf44.js";import"./iframe-f6f86927.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";function i(s){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",h6:"h6",pre:"pre"},t(),s.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(r,{title:"Docs/Component Driven Development/Unit Tests"},void 0,!1,{fileName:"<source.js>",lineNumber:3,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"component-unit-tests",children:"Component Unit Tests"},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"how-do-we-write-unit-tests",children:"How do we write unit tests"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["We use the ",e.jsxDEV(n.a,{href:"https://vitest.dev/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Vitest"},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:12},this)," unit testing framework and ",e.jsxDEV(n.a,{href:"https://vue-test-utils.vuejs.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"@vue/test-utils"},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:69},this),`
to test our components.`]},void 0,!0,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"where-to-add-unit-tests",children:"Where to add unit tests"},void 0,!1,{fileName:"<source.js>",lineNumber:12,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["Unit tests in the ",e.jsxDEV(n.code,{children:"Dialtone Vue"},void 0,!1,{fileName:"<source.js>",lineNumber:14,columnNumber:19},this),` project are written in the component sub directory with the following naming
structure `,e.jsxDEV(n.code,{children:"<COMPONENT_NAME>.test.js"},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:11},this),". If a test requires a ",e.jsxDEV(n.a,{href:"https://en.wikipedia.org/wiki/Test_fixture",target:"_blank",rel:"nofollow noopener noreferrer",children:"fixture"},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:60},this),`,
then it is added to the `,e.jsxDEV(n.code,{children:"tests/fixtures"},void 0,!1,{fileName:"<source.js>",lineNumber:16,columnNumber:25},this)," directory."]},void 0,!0,{fileName:"<source.js>",lineNumber:14,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"what-should-be-tested",children:"What should be tested"},void 0,!1,{fileName:"<source.js>",lineNumber:18,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"logic",children:"Logic"},void 0,!1,{fileName:"<source.js>",lineNumber:20,columnNumber:1},this),`
`,e.jsxDEV(n.h4,{id:"data",children:"Data"},void 0,!1,{fileName:"<source.js>",lineNumber:22,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"We should ensure that the data layer of our components is tested."},void 0,!1,{fileName:"<source.js>",lineNumber:24,columnNumber:1},this),`
`,e.jsxDEV(n.h5,{id:"props",children:"Props"},void 0,!1,{fileName:"<source.js>",lineNumber:26,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`We should assert that the props are correctly used within the component. This can include displaying the correct variant
when a given set of props are provided or presenting the user with a given message.`},void 0,!1,{fileName:"<source.js>",lineNumber:28,columnNumber:1},this),`
`,e.jsxDEV(n.h4,{id:"interactivity",children:"Interactivity"},void 0,!1,{fileName:"<source.js>",lineNumber:31,columnNumber:1},this),`
`,e.jsxDEV(n.h5,{id:"reactivity",children:"Reactivity"},void 0,!1,{fileName:"<source.js>",lineNumber:33,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`Ensure that the component correctly updates when there is an interaction. It is recommended that we test the output of
the component rather than the component's data.`},void 0,!1,{fileName:"<source.js>",lineNumber:35,columnNumber:1},this),`
`,e.jsxDEV(n.h6,{id:"example",children:"Example"},void 0,!1,{fileName:"<source.js>",lineNumber:38,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`describe('MyComponent Tests', () => {
  let wrapper;
  let button;

  const propsData = {
    some: 'prop',
  };

  beforeEach(() => {
    wrapper = shallowMount(MyComponent, { propsData });
    button = wrapper.find('[data-qa="button"]');
  });

  it('Updates the button text', () => {
    button.trigger('click');

    expect(button.text()).toBe('Button text');
  });
});
`},void 0,!1,{fileName:"<source.js>",lineNumber:40,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:40,columnNumber:1},this),`
`,e.jsxDEV(n.h5,{id:"events",children:"Events"},void 0,!1,{fileName:"<source.js>",lineNumber:62,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"We also need to validate that the correct custom events are being emitted from our component when we interact with it."},void 0,!1,{fileName:"<source.js>",lineNumber:64,columnNumber:1},this),`
`,e.jsxDEV(n.h6,{id:"example-1",children:"Example"},void 0,!1,{fileName:"<source.js>",lineNumber:66,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`describe('MyComponent Tests', () => {
  let wrapper;

  const propsData = {
    some: 'prop',
  };

  beforeEach(() => {
    wrapper = shallowMount(MyComponent, { propsData });
  });

  it('Emits myCustomEvent', () => {
    wrapper.vm.$emit('myCustomEvent');

    expect(wrapper.emitted().myCustomEvent.length).toBe(1);
  });
});
`},void 0,!1,{fileName:"<source.js>",lineNumber:68,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:68,columnNumber:1},this),`
`,e.jsxDEV(n.h4,{id:"accessibility",children:"Accessibility"},void 0,!1,{fileName:"<source.js>",lineNumber:88,columnNumber:1},this),`
`,e.jsxDEV(n.h5,{id:"focus-management",children:"Focus Management"},void 0,!1,{fileName:"<source.js>",lineNumber:90,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"We should assert that any manually controlled focus is correctly managed."},void 0,!1,{fileName:"<source.js>",lineNumber:92,columnNumber:1},this),`
`,e.jsxDEV(n.h6,{id:"example-2",children:"Example"},void 0,!1,{fileName:"<source.js>",lineNumber:94,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`If the component moves focus when a menu is opened, we should assert that the focus has moved onto the correct element
within the menu.`},void 0,!1,{fileName:"<source.js>",lineNumber:96,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`describe('MyComponent Tests', () => {
  let wrapper;
  let button;

  const propsData = {
    some: 'prop',
  };

  beforeEach(() => {
    wrapper = shallowMount(MyComponent, {
      propsData,
      attachTo: document.body,
    });
    button = wrapper.find('[data-qa="button"]');
  });

  it('Moves focus onto first dropdown menu item', () => {
    button.trigger('click');

    const firstMenuItem = wrapper.find('#first-menu-item-id');
    expect(document.activeElement).toBe(firstMenuItem.element);
  });
});
`},void 0,!1,{fileName:"<source.js>",lineNumber:99,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:99,columnNumber:1},this),`
`,e.jsxDEV(n.h5,{id:"aria-roles-states-and-properties",children:"ARIA Roles, States and Properties"},void 0,!1,{fileName:"<source.js>",lineNumber:125,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"We should assert that the correct ARIA states, roles and properties are set within our component."},void 0,!1,{fileName:"<source.js>",lineNumber:127,columnNumber:1},this),`
`,e.jsxDEV(n.h5,{id:"text-alternatives",children:"Text Alternatives"},void 0,!1,{fileName:"<source.js>",lineNumber:129,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`We should test text alternatives to ensure that visual elements in our component also have descriptive text alternatives
for screen readers.`},void 0,!1,{fileName:"<source.js>",lineNumber:131,columnNumber:1},this),`
`,e.jsxDEV(n.h6,{id:"example-3",children:"Example"},void 0,!1,{fileName:"<source.js>",lineNumber:134,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`describe('MyComponent Tests', () => {
  let wrapper;
  let img;

  const propsData = {
    some: 'prop',
  };

  beforeEach(() => {
    wrapper = shallowMount(MyComponent, { propsData });
    img = wrapper.find('[data-qa="img"]');
  });

  it('Has an appropriate alt attribute', () => {
    assert.strictEqual(img.attributes('alt'), 'Some description of the image');
    expect(img.attributes('alt')).toBe('Some description of the image');
  });
});
`},void 0,!1,{fileName:"<source.js>",lineNumber:136,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:136,columnNumber:1},this),`
`,e.jsxDEV(n.h5,{id:"announcements",children:"Announcements"},void 0,!1,{fileName:"<source.js>",lineNumber:157,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`We should also test that the correct announcements are present when interacting with the component. These are crucial in
providing information to visually impaired users.`},void 0,!1,{fileName:"<source.js>",lineNumber:159,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"presentation",children:"Presentation"},void 0,!1,{fileName:"<source.js>",lineNumber:162,columnNumber:1},this),`
`,e.jsxDEV(n.h4,{id:"snapshot-testing",children:"Snapshot Testing"},void 0,!1,{fileName:"<source.js>",lineNumber:164,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:e.jsxDEV(n.code,{children:"TODO: Pending Future Discussion"},void 0,!1,{fileName:"<source.js>",lineNumber:166,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:166,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"best-practices",children:"Best Practices"},void 0,!1,{fileName:"<source.js>",lineNumber:168,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"test-descriptions",children:"Test Descriptions"},void 0,!1,{fileName:"<source.js>",lineNumber:170,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["Each ",e.jsxDEV(n.code,{children:"describe"},void 0,!1,{fileName:"<source.js>",lineNumber:172,columnNumber:6},this)," should inform us on either what is being tested or the current state of the environment. Each ",e.jsxDEV(n.code,{children:"it"},void 0,!1,{fileName:"<source.js>",lineNumber:172,columnNumber:111},this),`
should describe what we are validating.`]},void 0,!0,{fileName:"<source.js>",lineNumber:172,columnNumber:1},this),`
`,e.jsxDEV(n.h4,{id:"example-4",children:"Example"},void 0,!1,{fileName:"<source.js>",lineNumber:175,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`describe('My Component Tests', () => {
  describe('When some description of the current environment', () => {
    it('Some expectation that we have asserted', () => {});
  });
});
`},void 0,!1,{fileName:"<source.js>",lineNumber:177,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:177,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"single-assertions",children:"Single Assertions"},void 0,!1,{fileName:"<source.js>",lineNumber:185,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`We should aim to have a single assertion for each test. There are cases when we will have to use multiple assertions for
a test, these cases should be considered to be exceptions to the guideline.`},void 0,!1,{fileName:"<source.js>",lineNumber:187,columnNumber:1},this),`
`,e.jsxDEV("h4",{style:{color:"blue"},children:"Acceptable"},void 0,!1,{fileName:"<source.js>",lineNumber:190,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`it('1 equals 1 and 2 equals 2', () => {
  expect(1).toBe(1);
  expect(2).toBe(2);
});
`},void 0,!1,{fileName:"<source.js>",lineNumber:192,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:192,columnNumber:1},this),`
`,e.jsxDEV("h4",{style:{color:"green"},children:"Preferred"},void 0,!1,{fileName:"<source.js>",lineNumber:199,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`it('1 equals 1', () => {
  expect(1).toBe(1);
});

it('2 equals 2', () => {
  expect(2).toBe(2);
});
`},void 0,!1,{fileName:"<source.js>",lineNumber:201,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:201,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"dry",children:"DRY"},void 0,!1,{fileName:"<source.js>",lineNumber:211,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`We should ensure that repeated assertions are moved into a shared example in order to reduce repeated code. Shared
examples should have the following naming structure `,e.jsxDEV(n.code,{children:"itBehavesLike<SOME EXPECTATION>"},void 0,!1,{fileName:"<source.js>",lineNumber:214,columnNumber:53},this),`. If an example can be shared
across test files then we can add it to the following directory `,e.jsxDEV(n.code,{children:"tests/shared_examples"},void 0,!1,{fileName:"<source.js>",lineNumber:215,columnNumber:65},this),"."]},void 0,!0,{fileName:"<source.js>",lineNumber:213,columnNumber:1},this),`
`,e.jsxDEV("h4",{style:{color:"red"},children:"Bad"},void 0,!1,{fileName:"<source.js>",lineNumber:217,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`describe('My Tests', () => {
  let num;

  describe('When num is 1', () => {
    num = 1;

    it('equals itself', () => {
      expect(num).toBe(num);
    });
  });

  describe('When num is 2', () => {
    num = 2;

    it('equals itself', () => {
      expect(num).toBe(num);
    });
  });
});
`},void 0,!1,{fileName:"<source.js>",lineNumber:219,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:219,columnNumber:1},this),`
`,e.jsxDEV("h4",{style:{color:"green"},children:"Good"},void 0,!1,{fileName:"<source.js>",lineNumber:241,columnNumber:1},this),`
`,e.jsxDEV(n.h4,{id:"closure-example",children:"Closure Example"},void 0,!1,{fileName:"<source.js>",lineNumber:243,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`const itBehavesLikeEqualsItself = (num) => {
  it('equals itself', () => {
    expect(num).toBe(num);
  });
};

describe('My Tests', () => {
  let num;

  describe('When num is 1', () => {
    num = 1;

    itBehavesLikeEqualsItself(num);
  });

  describe('When num is 2', () => {
    num = 2;

    itBehavesLikeEqualsItself(num);
  });
});
`},void 0,!1,{fileName:"<source.js>",lineNumber:245,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:245,columnNumber:1},this),`
`,e.jsxDEV(n.h4,{id:"one-by-one-example",children:"One By One Example"},void 0,!1,{fileName:"<source.js>",lineNumber:269,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-js",children:`const itBehavesLikeEquals = (num) => ({
  itself: expectation => {
    expect(num).toBe(expectation);
  },
});

describe('My Tests', () => {
  let num;

  describe('When num is 1', () => {
    num = 1;

    it('equals itself', () => {
      itBehavesLikeEquals(num).itself(num);
    });
  });

  describe('When num is 2', () => {
    num = 2;

    it('equals itself', () => {
      itBehavesLikeEquals(num).itself(num);
    });
  });
});
`},void 0,!1,{fileName:"<source.js>",lineNumber:271,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:271,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"test-isolation",children:"Test Isolation"},void 0,!1,{fileName:"<source.js>",lineNumber:299,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`We should ensure that tests are run in isolation. Ensure that if we modify the test environment, that it is restored
after the test(s) are complete. Test(s) should pass no matter which order they are executed in.`},void 0,!1,{fileName:"<source.js>",lineNumber:301,columnNumber:1},this),`
`,e.jsxDEV(n.h4,{id:"setup",children:"Setup"},void 0,!1,{fileName:"<source.js>",lineNumber:304,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["We can make use of ",e.jsxDEV(n.code,{children:"beforeEach"},void 0,!1,{fileName:"<source.js>",lineNumber:306,columnNumber:20},this)," and ",e.jsxDEV(n.code,{children:"before / beforeAll"},void 0,!1,{fileName:"<source.js>",lineNumber:306,columnNumber:37},this)," to set up our tests."]},void 0,!0,{fileName:"<source.js>",lineNumber:306,columnNumber:1},this),`
`,e.jsxDEV(n.h4,{id:"teardown",children:"Teardown"},void 0,!1,{fileName:"<source.js>",lineNumber:308,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["We can make use of ",e.jsxDEV(n.code,{children:"afterEach"},void 0,!1,{fileName:"<source.js>",lineNumber:310,columnNumber:20},this)," and ",e.jsxDEV(n.code,{children:"after / afterAll"},void 0,!1,{fileName:"<source.js>",lineNumber:310,columnNumber:36},this)," to restore the test environment to its original state."]},void 0,!0,{fileName:"<source.js>",lineNumber:310,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"did-we-miss-anything",children:"Did we miss anything?"},void 0,!1,{fileName:"<source.js>",lineNumber:312,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`This is a living document that is constantly being updated, feel free to suggest new additions and changes by opening
a PR and assigning to one of the project's contributors.`},void 0,!1,{fileName:"<source.js>",lineNumber:314,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function p(s={}){const{wrapper:n}=Object.assign({},t(),s.components);return n?e.jsxDEV(n,Object.assign({},s,{children:e.jsxDEV(i,s,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):i(s)}export{p as default};
//# sourceMappingURL=writing_component_tests-504a0b92.js.map
