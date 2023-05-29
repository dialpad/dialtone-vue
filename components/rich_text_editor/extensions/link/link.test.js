import { mount, createLocalVue } from '@vue/test-utils';
import DtRichTextEditor from '../../rich_text_editor.vue';
import { EditorContent } from '@tiptap/vue-2';

// Wrappers
let wrapper;
let editorEl;

// Test Environment
let propsData;
let attrs;
let slots;
let listeners;
const localVue = createLocalVue();

// Constants
const baseProps = {
  value: 'initial value',
  inputAriaLabel: 'aria-label text',
  link: true,
  inputClass: 'qa-editor',
};

// these are not all prefixes and suffixes, but some common ones
const allowedPrefixes = `~!$%^&*()+>?:"{}|[]\\;',./`.split('');
const allowedSuffixes = `~!@#$%^&*()+<>?:"{}|[]\\',.`.split('');
const punctuationMarks = `!?.,:;'"`.split('');
// these are reserved for mentions and channel hashtags
const disallowedPrefixes = ['@', '#'];

// Helpers
const _setChildWrappers = () => {
  editorEl = document.getElementsByClassName('qa-editor')[0];
};

const _setValue = async (value) => {
  editorEl.innerHTML = value;
  await wrapper.vm.$nextTick();
};

const _getLinksFromJSON = () => {
  const json = wrapper.vm.editor.getJSON();
  const links = [];

  for (const paragraph of json.content) {
    for (const textNode of paragraph.content) {
      if (!textNode.marks?.some(mark => mark.type === 'Link')) {
        continue;
      }
      links.push(textNode);
    }
  }

  return links;
};

const _mountWrapper = () => {
  // remove the previous element if it exists or otherwise we'll end up with
  // multiple elements when re-mounting.
  editorEl?.remove();
  wrapper = mount(DtRichTextEditor, {
    propsData,
    components: { EditorContent },
    listeners,
    attrs,
    slots,
    localVue,
    attachTo: document.body,
  });
};

/* eslint-disable vitest/expect-expect */ // I am expecting you big dummy
describe('DtRichTextEditor Link Extension tests', () => {
  // Shared Examples
  const expectNoLinks = () => {
    expect(_getLinksFromJSON().length).toBe(0);
  };

  const expectLinksWithTexts = (...args) => {
    expect(_getLinksFromJSON().length).toEqual(args.length);
    args.forEach((linkText, i) => {
      expect(_getLinksFromJSON()[i].text).toEqual(linkText);
    });
  };

  // Test Setup
  beforeAll(() => {
    global.Range.prototype.getClientRects = vi.fn(() => [{}]);
    global.Range.prototype.getBoundingClientRect = vi.fn(() => [{}]);
    global.scrollBy = vi.fn();
  });

  beforeEach(async () => {
    propsData = baseProps;
    _mountWrapper();
    await wrapper.vm.$nextTick();
    _setChildWrappers();
  });

  // Test Teardown
  afterEach(() => {
    propsData = baseProps;
    slots = {};
  });

  describe('Functionality Tests', () => {
    describe('URLs', () => {
      describe('without a protocol', () => {
        it('should not linkify non-URL content', async () => {
          await _setValue('check out dialpad,com it is cool');
          expectNoLinks();
          await _setValue('check out dialpad com it is cool');
          expectNoLinks();
          await _setValue('check out dialpadcom it is cool');
          expectNoLinks();
          await _setValue('check out dialpad..com it is cool');
          expectNoLinks();
          await _setValue('check out dialpad.comm it is cool');
          expectNoLinks();
        });

        it('should linkify with valid content', async () => {
          await _setValue('check out dialpad.com it is cool');
          expectLinksWithTexts('dialpad.com');
          await _setValue('check out dialpad.com, and fspot.us!');
          expectLinksWithTexts('dialpad.com', 'fspot.us');
        });

        describe('with a prefix', () => {
          for (const prefix of allowedPrefixes) {
            it(`should linkify despite ${prefix} prefix`, async () => {
              await _setValue(`check out ${prefix}dialpad.com it is cool`);
              expectLinksWithTexts('dialpad.com');
            });
          }

          for (const prefix of disallowedPrefixes) {
            it(`should not linkify with ${prefix} prefix`, async () => {
              await _setValue(`check out ${prefix}dialpad.com it is cool`);
              expectNoLinks();
            });
          }
        });

        describe('with a suffix', () => {
          for (const suffix of allowedSuffixes) {
            it(`should linkify despite ${suffix} suffix`, async () => {
              await _setValue(`check out dialpad.com${suffix} it is cool`);
              expectLinksWithTexts('dialpad.com');
            });
          }
        });
      });

      describe('with a protocol', () => {
        it('should not linkify non-URL content', async () => {
          // the hostname is still a valid link, so expect it without the
          // invalid protocol part
          await _setValue('check out https:://dialpad.com it is cool');
          expectLinksWithTexts('dialpad.com');
          await _setValue('check out https:/dialpad.com it is cool');
          expectLinksWithTexts('dialpad.com');
          await _setValue('check out https//dialpad.com it is cool');
          expectLinksWithTexts('dialpad.com');
          await _setValue('check out ://dialpad.com it is cool');
          expectLinksWithTexts('dialpad.com');
        });

        it('should linkify with valid content', async () => {
          await _setValue('check out https://dialpad.com it is cool');
          expectLinksWithTexts('https://dialpad.com');
          await _setValue('check out https://dialpad.com, and http://fspot.us!');
          expectLinksWithTexts('https://dialpad.com', 'http://fspot.us');
          await _setValue('check out our web socket ws://dialpad.com!');
          expectLinksWithTexts('ws://dialpad.com');
        });

        describe('with a prefix', () => {
          for (const prefix of allowedPrefixes) {
            it(`should linkify despite ${prefix} prefix`, async () => {
              await _setValue(`check out ${prefix}https://dialpad.com it is cool`);
              expectLinksWithTexts('https://dialpad.com');
            });
          }

          for (const prefix of disallowedPrefixes) {
            it(`should not linkify with ${prefix} prefix`, async () => {
              await _setValue(`check out ${prefix}https://dialpad.com it is cool`);
              expectNoLinks();
            });
          }
        });

        describe('with a punctuation mark suffix', () => {
          // this regex includes most suffix characters as a part of the match,
          // but it shouldn't do so for punctuation marks
          for (const suffix of punctuationMarks) {
            it(`should linkify despite ${suffix} suffix`, async () => {
              await _setValue(`check out https://dialpad.com${suffix} it is cool`);
              expectLinksWithTexts('https://dialpad.com');
            });
          }
        });
      });
    });

    describe('IPv4 Addresses', () => {
      it('should not linkify invalid IP addresses', async () => {
        await _setValue('I live at 192.158.1.999 how about you?');
        expectNoLinks();
        await _setValue('I live at 192.1581.38 how about you?');
        expectNoLinks();
        await _setValue('I live at 192.158.1.38a how about you?');
        expectNoLinks();
        await _setValue('I live at 2001:db8:3333:4444:5555:6666:7777:8888 how about you?');
        expectNoLinks();
      });

      it('should linkify with valid content', async () => {
        await _setValue('I live at 192.158.1.38 how about you?');
        expectLinksWithTexts('192.158.1.38');
        await _setValue('I live at 192.158.1.38 and 127.0.0.1 how about you?');
        expectLinksWithTexts('192.158.1.38', '127.0.0.1');
      });

      describe('with a prefix', () => {
        for (const prefix of allowedPrefixes) {
          it(`should linkify despite ${prefix} prefix`, async () => {
            await _setValue(`I live at ${prefix}192.158.1.38 how about you?`);
            expectLinksWithTexts('192.158.1.38');
          });
        }

        for (const prefix of disallowedPrefixes) {
          it(`should not linkify with ${prefix} prefix`, async () => {
            await _setValue(`I live at ${prefix}192.158.1.38 how about you?`);
            expectNoLinks();
          });
        }
      });

      describe('with a suffix', () => {
        for (const suffix of allowedSuffixes) {
          it(`should linkify despite ${suffix} suffix`, async () => {
            await _setValue(`I live at 192.158.1.38${suffix} how about you?`);
            expectLinksWithTexts('192.158.1.38');
          });
        }
      });
    });

    describe('Email Addresses', () => {
      it('should not linkify invalid email addresses', async () => {
        await _setValue('message me at noreply@dialpad,com!');
        expectNoLinks();
        await _setValue('message me at noreply@dialpad com!');
        expectNoLinks();
        await _setValue('message me at noreply@dialpadcom!');
        expectNoLinks();
        await _setValue('message me at noreply@dialpad..com!');
        expectNoLinks();
        await _setValue('message me at noreply@dialpad.comm!');
        expectNoLinks();
        await _setValue('message me at mailto:noreply@dialpad.comm!');
        expectNoLinks();
        await _setValue('message me at noreply(at)dialpad.com!');
        // still linkifies the valid URL
        expectLinksWithTexts('dialpad.com');
      });

      it('should linkify with valid content', async () => {
        await _setValue('message me at noreply@dialpad.com!');
        expectLinksWithTexts('noreply@dialpad.com');
        await _setValue('message me at noreply@dialpad.com or mailto:no.reply@fspot.us!');
        expectLinksWithTexts('noreply@dialpad.com', 'mailto:no.reply@fspot.us');
      });

      it('should linkify with URL params', async () => {
        await _setValue('message me at noreply@dialpad.com?subject=Hey&body=Hi!');
        expectLinksWithTexts('noreply@dialpad.com?subject=Hey&body=Hi');
        await _setValue('message me at mailto:noreply@dialpad.com?subject=Hey&body=Hi!');
        expectLinksWithTexts('mailto:noreply@dialpad.com?subject=Hey&body=Hi');
      });

      describe('with a prefix', () => {
        for (const prefix of allowedPrefixes) {
          it(`should linkify despite ${prefix} prefix`, async () => {
            await _setValue(`check out ${prefix}dialpad.com it is cool`);
            expectLinksWithTexts('dialpad.com');
          });
        }

        for (const prefix of disallowedPrefixes) {
          it(`should not linkify with ${prefix} prefix`, async () => {
            await _setValue(`check out ${prefix}dialpad.com it is cool`);
            expectNoLinks();
          });
        }
      });

      describe('Phone Numbers', () => {
        it('should not linkify invalid phone numbers', async () => {
          await _setValue('call me at 714,410,7035 any time!');
          expectNoLinks();
          await _setValue('call me at 410703 any time!');
          expectNoLinks();
          await _setValue('call me at 714 any time!');
          expectNoLinks();
          await _setValue('call me at 714:410:7035 any time!');
          expectNoLinks();
          await _setValue('call me at +1714410703514521 any time!');
          expectNoLinks();
          // this is normally a valid format, but not for us...
          await _setValue('call me at 714.410.7035 any time!');
          expectNoLinks();
        });

        it('should linkify with valid content', async () => {
          await _setValue('call me at (714) 410-7035 any time!');
          expectLinksWithTexts('(714) 410-7035');
          await _setValue('call me at +17144107035 any time!');
          expectLinksWithTexts('+17144107035');
          await _setValue('call me at 714-410-7035 any time!');
          expectLinksWithTexts('714-410-7035');
          await _setValue('call me at 714 410 7035 any time!');
          expectLinksWithTexts('714 410 7035');
        });

        describe('with a prefix', () => {
          // remove few characters from the prefix list that are allowed in phone numbers
          const allowedPhonePrefixes = allowedPrefixes.filter(c => !'()+'.split('').includes(c));
          for (const prefix of allowedPhonePrefixes) {
            it(`should linkify despite ${prefix} prefix`, async () => {
              await _setValue(`check out ${prefix}(714) 410-7035 it is cool`);
              expectLinksWithTexts('(714) 410-7035');
            });
          }

          for (const prefix of disallowedPrefixes) {
            it(`should not linkify with ${prefix} prefix`, async () => {
              await _setValue(`check out ${prefix}(714) 410-7035 it is cool`);
              expectNoLinks();
            });
          }
        });
      });

      describe('with a suffix', () => {
        for (const suffix of allowedSuffixes) {
          it(`should linkify despite ${suffix} suffix`, async () => {
            await _setValue(`check out (714) 410-7035${suffix} it is cool`);
            expectLinksWithTexts('(714) 410-7035');
          });
        }
      });
    });
  });

  describe('Reactivity Tests', () => {
    describe('User Input Tests', () => {
      describe('When user inputs a value', () => {
        it('should linkify when typing a link', async () => {
          await _setValue('check out dialpad.c');
          expectNoLinks();
          // match .co TLD
          await _setValue('check out dialpad.co');
          expectLinksWithTexts('dialpad.co');
          // when typing it into a .com TLD the match should update since it's still valid
          await _setValue('check out dialpad.com');
          expectLinksWithTexts('dialpad.com');
        });

        it('should remove the link when typing and the link is no longer valid', async () => {
          // valid link with .co TLD
          await _setValue('check out dialpad.co');
          expectLinksWithTexts('dialpad.co');
          // when typing it into an invalid .co8 TLD should remove link
          await _setValue('check out dialpad.co8');
          expectNoLinks();
        });

        it('should linkify when copy-pasting a link', async () => {
          await _setValue('check out');
          expectNoLinks();
          await _setValue('check out dialpad.com it is cool');
          expectLinksWithTexts('dialpad.com');
        });

        it('updates links when mutating the content so that a new link forms', async () => {
          await _setValue('check out dialpad.com, and fspot.us!');
          expectLinksWithTexts('dialpad.com', 'fspot.us');
          // "select" and remove ".com, and fspot" from the middle
          await _setValue('check out dialpad.us!');
          expectLinksWithTexts('dialpad.us');
          // add whitespace in the middle of the link
          await _setValue('check out dial pad.us!');
          expectLinksWithTexts('pad.us');
        });

        // this is an edge case and there is special code in place to handle it,
        // changing a whitespace separated phone number from invalid to valid
        it('adds links when mutating a whitespace separated phone number', async () => {
          await _setValue('call me at 714 4.0 7035 any time!');
          expectNoLinks();
          await _setValue('call me at 714 410 7035 any time!');
          expectLinksWithTexts('714 410 7035');
        });
      });
    });
  });
});
