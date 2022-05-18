import emojiToolkit from 'emoji-toolkit';

export { default as emojiJson } from '@/node_modules/emoji-toolkit/emoji.json';

export function setEmojiAssetUrl (url, fileExtension = '.svg') {
  if (!url.endsWith('/')) {
    url = url + '/';
  }
  emojiToolkit.imagePathPNG = url;
  emojiToolkit.fileExtension = fileExtension;
}
