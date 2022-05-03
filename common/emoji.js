import EmojiToolkit from 'emoji-toolkit';

export function setEmojiAssetUrl (url, fileExtension = '.svg') {
  if (!url.endsWith('/')) {
    url = url + '/';
  }
  EmojiToolkit.imagePathPNG = url;
  EmojiToolkit.fileExtension = fileExtension;
}
