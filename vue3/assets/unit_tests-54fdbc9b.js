import{j as n}from"./jsx-runtime-72761ca2.js";import{M as r}from"./index-e24b55ab.js";import{u as o}from"./index-cb6b3689.js";import"./iframe-d14cd55a.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-4745f7b8.js";import"./index-356e4a49.js";function s(e){const t=Object.assign({h1:"h1",pre:"pre",code:"code"},o(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Docs/Templates/Unit Tests"}),`
`,n.jsx(t.h1,{id:"unit-tests-template",children:"Unit Tests Template"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-js",children:`import { assert } from 'chai';
import { shallowMount } from '@vue/test-utils';
import DtMyComponent from './my_component.vue';

// Constants
const basePropsData = {};

describe('DtMyComponent Tests', function () {
  let testContext;
  // Wrappers
  let wrapper;
  let childContainer;

  // Environment
  let propsData = basePropsData;
  let attrs = {};
  let slots = {};
  let provide = {};

  // Helpers
  const _setChildWrappers = () => {
    childContainer = wrapper.find('[data-qa="child-container"]');
  };

  const _setWrappers = () => {
    wrapper = shallowMount(DtMyComponent, {
      propsData,
      attrs,
      slots,
      provide,

    });
    _setChildWrappers();
  };

  // Shared Examples
  const itBehavesLikeSomeExpectation = () => {
    it('should be equal', function () { assert.strictEqual(1, 1); });
  };

  // Setup
  before(function () {
    testContext = {};

  });
  beforeEach(function () {});

  // Teardown
  afterEach(function () {
    propsData = basePropsData;
    attrs = {};
    slots = {};
    provide = {};
  });
  after(function () {});

  describe('Presentation Tests', function () {
    /*
     * Test(s) to ensure that the component is correctly rendering
     */

    describe('When some description of the current environment', function () {});
  });

  describe('Accessibility Tests', function () {
    /*
     * Test(s) to ensure that the component is accessible
     */

    describe('When some description of the current environment', function () {});
  });

  describe('Interactivity Tests', function () {
    /*
     * Test(s) to ensure that the component correctly handles user input
     */

    describe('When some description of the current environment', function () {});
  });

  describe('Validation Tests', function () {
    /*
     * Test(s) to ensure that custom validators are working as expected
     */

    describe('When some description of the current environment', function () {});
  });

  describe('Extendability Tests', function () {
    /*
     * Test(s) to ensure that the component can be correctly extended
     */

    describe('When some description of the current environment', function () {});
  });
});
`})})]})}function b(e={}){const{wrapper:t}=Object.assign({},o(),e.components);return t?n.jsx(t,Object.assign({},e,{children:n.jsx(s,e)})):s(e)}export{b as default};
//# sourceMappingURL=unit_tests-54fdbc9b.js.map