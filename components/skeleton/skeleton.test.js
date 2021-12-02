import { assert } from 'chai';
import { createLocalVue, mount } from '@vue/test-utils';
import DtSkeleton from './skeleton.vue';

describe('DtSkeleton Tests', function () {
  // Wrappers
  let wrapper;
  let skeletonTextLabel;
  let skeletonTextHeading;
  let skeletonParagraph;
  let skeletonParagraphRows;
  let skeletonListItem;
  let skeletonShape;

  const _setWrappers = () => {
    skeletonTextLabel = wrapper.find('[data-qa="skeleton-text-label"]');
    skeletonTextHeading = wrapper.find('[data-qa="skeleton-text-heading"]');
    skeletonParagraph = wrapper.find('[data-qa="skeleton-paragraph"]');
    skeletonParagraphRows = wrapper.findAll('[data-qa="skeleton-paragraph-row"]');
    skeletonListItem = wrapper.findAll('[data-qa="skeleton-list-item"]');
    skeletonShape = wrapper.findAll('[data-qa="skeleton-shape"]');
  };

  const _mountWrapper = (propsData, slots) => {
    wrapper = mount(DtSkeleton, {
      localVue: createLocalVue(),
      propsData,
      slots,
    });
    _setWrappers();
  };

  describe('Presentation Tests', function () {
    it('should render the component', function () {
      _mountWrapper();
      assert.exists(wrapper, 'wrapper exists');
    });

    describe('Skeleton text', function () {
      it('should render the skeleton label', function () {
        assert.isTrue(skeletonTextLabel.exists());
      });

      it('should render the skeleton heading', async function () {
        _mountWrapper({
          textOption: {
            type: 'heading',
          },
        });
        assert.isTrue(skeletonTextHeading.exists());
      });
    });

    describe('Skeleton paragraph', function () {
      before(function () {
        _mountWrapper({
          paragraphOption: true,
        });
      });

      it('should render the skeleton paragraph', async function () {
        assert.isTrue(skeletonParagraph.exists());
      });

      it('should render rows', async function () {
        assert.equal(skeletonParagraphRows.length, 3);
      });
    });

    describe('Skeleton list item', function () {
      before(function () {
        _mountWrapper({
          listItemOption: true,
        }, {
          'list-item': 'list-item-slot',
        });
      });

      it('should render the skeleton list item', async function () {
        assert.isTrue(skeletonListItem.exists());
      });

      it('should render skeleton paragraph', async function () {
        assert.isTrue(skeletonParagraph.exists());
      });

      it('should render skeleton shape', async function () {
        assert.isTrue(skeletonShape.exists());
        assert.strictEqual(wrapper.text(), 'list-item-slot');
      });

      it('should render list item slot', async function () {
        assert.strictEqual(wrapper.text(), 'list-item-slot');
      });
    });

    describe('Skeleton shape', function () {
      before(function () {
        _mountWrapper({
          shapeOption: true,
        });
      });

      it('should render skeleton shape', async function () {
        assert.isTrue(skeletonShape.exists());
      });
    });
  });

  describe('Accessibility Tests', function () {
    describe('When an area-label is provided', function () {
      before(function () {
        _mountWrapper({
          ariaLabel: 'ariaLabel',
        });
      });

      it('should be set area-label value', function () {
        assert.strictEqual(wrapper.attributes('aria-label'), 'ariaLabel');
      });
    });
  });
});
