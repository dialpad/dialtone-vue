/* eslint-disable mocha/no-top-level-hooks */
class ObserverMock {
  observe () {
    // do nothing
  }

  unobserve () {
    // do nothing
  }

  disconnect () {
    // do nothing
  }
}

before(function () {
  // RequestAnimationFrame and cancelAnimationFrame are undefined in the scope
  // Need to mock them to avoid error
  global.IntersectionObserver = ObserverMock;
  global.ResizeObserver = ObserverMock;
});

after(function () {
  global.IntersectionObserver = null;
  global.ResizeObserver = null;
});
