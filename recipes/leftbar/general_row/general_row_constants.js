export const LEFTBAR_GENERAL_ROW_TYPES = {
  INBOX: 'inbox',
  CONTACTS: 'contacts',
  CHANNELS: 'channels',
  THREADS: 'threads',
  LOCKED_CHANNEL: 'locked channel',
  CONTACT_CENTER: 'contact center',
  DIALBOT: 'dialbot',
};

export const LEFTBAR_GENERAL_ROW_ICON_MAPPING = {
  [LEFTBAR_GENERAL_ROW_TYPES.INBOX]: 'inbox',
  [LEFTBAR_GENERAL_ROW_TYPES.CONTACTS]: 'contacts',
  [LEFTBAR_GENERAL_ROW_TYPES.CHANNELS]: 'hash',
  [LEFTBAR_GENERAL_ROW_TYPES.THREADS]: 'thread',
  [LEFTBAR_GENERAL_ROW_TYPES.LOCKED_CHANNEL]: 'lock',
  [LEFTBAR_GENERAL_ROW_TYPES.CONTACT_CENTER]: 'stop-filled',
  'channel bold': 'hash-bold',
};

export const LEFTBAR_GENERAL_ROW_CONTACT_CENTER_COLORS = {
  purple: 'd-fc-purple-300',
  blue: 'd-fc-blue-300',
  green: 'd-fc-green-300',
  red: 'd-fc-red-300',
  magenta: 'd-fc-magenta-300',
  gold: 'd-fc-gold-300',
};

export default {
  LEFTBAR_GENERAL_ROW_TYPES,
  LEFTBAR_GENERAL_ROW_ICON_MAPPING,
};
