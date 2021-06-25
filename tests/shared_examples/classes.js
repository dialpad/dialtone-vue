import { assert } from 'chai';

export function itBehavesLikeHasCorrectClass (element, className) {
  assert.isTrue(element.classes(className));
}

export function itBehavesLikeDoesntHaveClass (element, className) {
  assert.isFalse(element.classes(className));
}

export default {
  itBehavesLikeHasCorrectClass,
  itBehavesLikeDoesntHaveClass,
};
