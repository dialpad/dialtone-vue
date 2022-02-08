import tippy from 'tippy.js';
import { getArrowDetected, hideOnEsc } from '../tooltip/modifiers';
import { findFirstFocusableNode } from '../utils';

const ABSOLUTE_POSITIONING_SAFE_AREA = { left: 200, right: 200, top: 0, bottom: 0 };

export const BASE_TIPPY_DIRECTIONS = [
  'bottom', 'bottom-start', 'bottom-end',
  'right', 'right-start', 'right-end',
  'left', 'left-start', 'left-end',
  'top', 'top-start', 'top-end',
];

export const BASE_TIPPY_ABSOLUTE_POSITIONING = [
  'bottom-center', 'bottom-start', 'bottom-end',
  'middle-center', 'middle-start', 'middle-end',
  'top-center', 'top-start', 'top-end',
];

export const createTippy = (anchorElement, options) => {
  const { contentElement } = { ...options };
  delete options.contentElement;
  return tippy(anchorElement, {
    ...options,
    render: () => getContentWrapper(contentElement),
    plugins: [hideOnEsc],
  });
};

export const getPopperOptions = ({
  boundary = 'clippingParents',
  flip = [],
  onChangePlacement = () => {},
  hasHideModifierEnabled = false,
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
      {
        name: 'hide',
        enabled: hasHideModifierEnabled,
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

export const getAnchor = (anchorWrapper, tabIndex = '0') => {
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

export const getAbsolutePosition = (placement) => {
  const positions = {
    'bottom-center': {
      left: (window.innerWidth / 2),
      top: window.innerHeight,
    },
    'bottom-start': {
      left: ABSOLUTE_POSITIONING_SAFE_AREA.left,
      top: window.innerHeight,
    },
    'bottom-end': {
      left: window.innerWidth - ABSOLUTE_POSITIONING_SAFE_AREA.right,
      top: window.innerHeight,
    },
    'middle-center': {
      left: (window.innerWidth / 2),
      top: (window.innerHeight / 2),
    },
    'middle-start': {
      left: ABSOLUTE_POSITIONING_SAFE_AREA.left,
      top: (window.innerHeight / 2),
    },
    'middle-end': {
      left: window.innerWidth - ABSOLUTE_POSITIONING_SAFE_AREA.right,
      top: (window.innerHeight / 2),
    },
    'top-center': {
      left: (window.innerWidth / 2),
      top: ABSOLUTE_POSITIONING_SAFE_AREA.top,
    },
    'top-start': {
      left: ABSOLUTE_POSITIONING_SAFE_AREA.left,
      top: ABSOLUTE_POSITIONING_SAFE_AREA.top,
    },
    'top-end': {
      left: window.innerWidth - ABSOLUTE_POSITIONING_SAFE_AREA.right,
      top: ABSOLUTE_POSITIONING_SAFE_AREA.top,
    },
  };
  return positions[placement];
};
