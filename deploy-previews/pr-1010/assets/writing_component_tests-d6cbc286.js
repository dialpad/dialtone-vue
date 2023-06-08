import{j as e}from"./jsx-runtime-4b96310f.js";import{M as o}from"./index-11d1f215.js";import{u as r}from"./index-f391c92b.js";import"./iframe-99b692ce.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";function g(t={}){const{wrapper:s}=Object.assign({},r(),t.components);return s?e.jsx(s,Object.assign({},t,{children:e.jsx(i,{})})):i();function i(){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",h6:"h6",pre:"pre"},r(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Docs/Component Driven Development/Unit Tests"}),`
`,e.jsx(n.h1,{id:"component-unit-tests",children:"Component Unit Tests"}),`
`,e.jsx(n.h2,{id:"how-do-we-write-unit-tests",children:"How do we write unit tests"}),`
`,e.jsxs(n.p,{children:["We use the ",e.jsx(n.a,{href:"https://vitest.dev/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Vitest"})," unit testing framework and ",e.jsx(n.a,{href:"https://vue-test-utils.vuejs.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"@vue/test-utils"}),`
to test our components.`]}),`
`,e.jsx(n.h2,{id:"where-to-add-unit-tests",children:"Where to add unit tests"}),`
`,e.jsxs(n.p,{children:["Unit tests in the ",e.jsx(n.code,{children:"Dialtone Vue"}),` project are written in the component sub directory with the following naming
structure `,e.jsx(n.code,{children:"<COMPONENT_NAME>.test.js"}),". If a test requires a ",e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/Test_fixture",target:"_blank",rel:"nofollow noopener noreferrer",children:"fixture"}),`,
then it is added to the `,e.jsx(n.code,{children:"tests/fixtures"})," directory."]}),`
`,e.jsx(n.h2,{id:"what-should-be-tested",children:"What should be tested"}),`
`,e.jsx(n.h3,{id:"logic",children:"Logic"}),`
`,e.jsx(n.h4,{id:"data",children:"Data"}),`
`,e.jsx(n.p,{children:"We should ensure that the data layer of our components is tested."}),`
`,e.jsx(n.h5,{id:"props",children:"Props"}),`
`,e.jsx(n.p,{children:`We should assert that the props are correctly used within the component. This can include displaying the correct variant
when a given set of props are provided or presenting the user with a given message.`}),`
`,e.jsx(n.h4,{id:"interactivity",children:"Interactivity"}),`
`,e.jsx(n.h5,{id:"reactivity",children:"Reactivity"}),`
`,e.jsx(n.p,{children:`Ensure that the component correctly updates when there is an interaction. It is recommended that we test the output of
the component rather than the component's data.`}),`
`,e.jsx(n.h6,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`describe('MyComponent Tests', () => {
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
`})}),`
`,e.jsx(n.h5,{id:"events",children:"Events"}),`
`,e.jsx(n.p,{children:"We also need to validate that the correct custom events are being emitted from our component when we interact with it."}),`
`,e.jsx(n.h6,{id:"example-1",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`describe('MyComponent Tests', () => {
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
`})}),`
`,e.jsx(n.h4,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.h5,{id:"focus-management",children:"Focus Management"}),`
`,e.jsx(n.p,{children:"We should assert that any manually controlled focus is correctly managed."}),`
`,e.jsx(n.h6,{id:"example-2",children:"Example"}),`
`,e.jsx(n.p,{children:`If the component moves focus when a menu is opened, we should assert that the focus has moved onto the correct element
within the menu.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`describe('MyComponent Tests', () => {
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
`})}),`
`,e.jsx(n.h5,{id:"aria-roles-states-and-properties",children:"ARIA Roles, States and Properties"}),`
`,e.jsx(n.p,{children:"We should assert that the correct ARIA states, roles and properties are set within our component."}),`
`,e.jsx(n.h5,{id:"text-alternatives",children:"Text Alternatives"}),`
`,e.jsx(n.p,{children:`We should test text alternatives to ensure that visual elements in our component also have descriptive text alternatives
for screen readers.`}),`
`,e.jsx(n.h6,{id:"example-3",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`describe('MyComponent Tests', () => {
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
`})}),`
`,e.jsx(n.h5,{id:"announcements",children:"Announcements"}),`
`,e.jsx(n.p,{children:`We should also test that the correct announcements are present when interacting with the component. These are crucial in
providing information to visually impaired users.`}),`
`,e.jsx(n.h3,{id:"presentation",children:"Presentation"}),`
`,e.jsx(n.h4,{id:"snapshot-testing",children:"Snapshot Testing"}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"TODO: Pending Future Discussion"})}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsx(n.h3,{id:"test-descriptions",children:"Test Descriptions"}),`
`,e.jsxs(n.p,{children:["Each ",e.jsx(n.code,{children:"describe"})," should inform us on either what is being tested or the current state of the environment. Each ",e.jsx(n.code,{children:"it"}),`
should describe what we are validating.`]}),`
`,e.jsx(n.h4,{id:"example-4",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`describe('My Component Tests', () => {
  describe('When some description of the current environment', () => {
    it('Some expectation that we have asserted', () => {});
  });
});
`})}),`
`,e.jsx(n.h3,{id:"single-assertions",children:"Single Assertions"}),`
`,e.jsx(n.p,{children:`We should aim to have a single assertion for each test. There are cases when we will have to use multiple assertions for
a test, these cases should be considered to be exceptions to the guideline.`}),`
`,e.jsx("h4",{style:{color:"blue"},children:"Acceptable"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`it('1 equals 1 and 2 equals 2', () => {
  expect(1).toBe(1);
  expect(2).toBe(2);
});
`})}),`
`,e.jsx("h4",{style:{color:"green"},children:"Preferred"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`it('1 equals 1', () => {
  expect(1).toBe(1);
});

it('2 equals 2', () => {
  expect(2).toBe(2);
});
`})}),`
`,e.jsx(n.h3,{id:"dry",children:"DRY"}),`
`,e.jsxs(n.p,{children:[`We should ensure that repeated assertions are moved into a shared example in order to reduce repeated code. Shared
examples should have the following naming structure `,e.jsx(n.code,{children:"itBehavesLike<SOME EXPECTATION>"}),`. If an example can be shared
across test files then we can add it to the following directory `,e.jsx(n.code,{children:"tests/shared_examples"}),"."]}),`
`,e.jsx("h4",{style:{color:"red"},children:"Bad"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`describe('My Tests', () => {
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
`})}),`
`,e.jsx("h4",{style:{color:"green"},children:"Good"}),`
`,e.jsx(n.h4,{id:"closure-example",children:"Closure Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const itBehavesLikeEqualsItself = (num) => {
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
`})}),`
`,e.jsx(n.h4,{id:"one-by-one-example",children:"One By One Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const itBehavesLikeEquals = (num) => ({
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
`})}),`
`,e.jsx(n.h3,{id:"test-isolation",children:"Test Isolation"}),`
`,e.jsx(n.p,{children:`We should ensure that tests are run in isolation. Ensure that if we modify the test environment, that it is restored
after the test(s) are complete. Test(s) should pass no matter which order they are executed in.`}),`
`,e.jsx(n.h4,{id:"setup",children:"Setup"}),`
`,e.jsxs(n.p,{children:["We can make use of ",e.jsx(n.code,{children:"beforeEach"})," and ",e.jsx(n.code,{children:"before / beforeAll"})," to set up our tests."]}),`
`,e.jsx(n.h4,{id:"teardown",children:"Teardown"}),`
`,e.jsxs(n.p,{children:["We can make use of ",e.jsx(n.code,{children:"afterEach"})," and ",e.jsx(n.code,{children:"after / afterAll"})," to restore the test environment to its original state."]}),`
`,e.jsx(n.h1,{id:"did-we-miss-anything",children:"Did we miss anything?"}),`
`,e.jsx(n.p,{children:`This is a living document that is constantly being updated, feel free to suggest new additions and changes by opening
a PR and assigning to one of the project's contributors.`})]})}}export{g as default};
//# sourceMappingURL=writing_component_tests-d6cbc286.js.map
