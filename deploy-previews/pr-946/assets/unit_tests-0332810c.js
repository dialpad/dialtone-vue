import{j as n}from"./jsx-runtime-d0cfdf37.js";import{M as i}from"./index-7bea37cd.js";import{u as r}from"./index-ccdc0789.js";import"./iframe-d25afdb2.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-544d6d08.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-3c489ce7.js";import"./index-356e4a49.js";function T(e={}){const{wrapper:o}=Object.assign({},r(),e.components);return o?n.jsx(o,Object.assign({},e,{children:n.jsx(s,{})})):s();function s(){const t=Object.assign({h1:"h1",pre:"pre",code:"code"},r(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Docs/Templates/Unit Tests"}),`
`,n.jsx(t.h1,{id:"unit-tests-template",children:"Unit Tests Template"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-js",children:`import { assert } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
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
      localVue: testContext.localVue,
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
    testContext.localVue = createLocalVue();
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
`})})]})}}export{T as default};
//# sourceMappingURL=unit_tests-0332810c.js.map
