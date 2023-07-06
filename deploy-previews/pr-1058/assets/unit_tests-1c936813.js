import{j as n}from"./jsx-dev-runtime-4c270cf2.js";import{M as r}from"./index-d199e41d.js";import{u as o}from"./index-fdaae682.js";import"./iframe-094d9d7c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";function s(e){const t=Object.assign({h1:"h1",pre:"pre",code:"code"},o(),e.components);return n.jsxDEV(n.Fragment,{children:[n.jsxDEV(r,{title:"Docs/Templates/Unit Tests"},void 0,!1,{fileName:"<source.js>",lineNumber:3,columnNumber:1},this),`
`,n.jsxDEV(t.h1,{id:"unit-tests-template",children:"Unit Tests Template"},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,n.jsxDEV(t.pre,{children:n.jsxDEV(t.code,{className:"language-js",children:`import { assert } from 'chai';
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
`},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function D(e={}){const{wrapper:t}=Object.assign({},o(),e.components);return t?n.jsxDEV(t,Object.assign({},e,{children:n.jsxDEV(s,e,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):s(e)}export{D as default};
//# sourceMappingURL=unit_tests-1c936813.js.map
