import tippy from 'tippy.js';
import { getArrowDetected, hideOnEsc } from '../tooltip/modifiers';
import { findFirstFocusableNode } from '../utils';

export const createTippy = (anchorWrapper, options) => {
  const anchorElement = getAnchor(anchorWrapper, options.tabIndex);
  return tippy(anchorElement, {
    ...options,
    render: () => getContentWrapper(options.contentElement),
    plugins: [hideOnEsc],
  });
};

export const getPopperOptions = ({
  boundary = 'clippingParents',
  flip = ['right', 'bottom'],
  onChangePlacement = () => {},
} = {}) => {
  return {
    modifiers: [
      {
        name: 'flip',
        options: {
          fallbackPlacements: flip,
          boundary,
        },
      },
      getArrowDetected(({ state }) => {
        onChangePlacement(state.placement);
      }),
    ],
  };
};

const createAnchor = (anchorWrapper, tabIndex) => {
  const span = document.createElement('span');
  span.setAttribute('tabindex', tabIndex);
  span.innerText = anchorWrapper.innerText || '';
  anchorWrapper.innerText = '';
  anchorWrapper.appendChild(span);
  return span;
};

const getAnchor = (anchorWrapper, tabIndex = '0') => {
  const anchor = anchorWrapper.children[0];
  if (!anchor) return createAnchor(anchorWrapper);
  if (!findFirstFocusableNode(anchor)) {
    anchor.setAttribute('tabindex', tabIndex);
  }
  return anchor;
};

export const getContentWrapper = content => {
  // The recommended structure is to use the popper as an outer wrapper
  const popper = document.createElement('div');
  popper.className = 'tippy-box d-ps-absolute';
  popper.appendChild(content);
  return {
    popper,
  };
};
