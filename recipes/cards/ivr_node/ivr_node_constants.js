import IconDialpad from '@dialpad/dialtone/lib/dist/vue/icons/IconDialpad';
import IconPhoneDialer from '@dialpad/dialtone/lib/dist/vue/icons/IconPhoneDialer';
import IconVolumeUp from '@dialpad/dialtone/lib/dist/vue/icons/IconVolumeUp';
import IconPhoneTransfer from '@dialpad/dialtone/lib/dist/vue/icons/IconPhoneTransfer';
import IconCallEndArrow from '@dialpad/dialtone/lib/dist/vue/icons/IconCallEndArrow';
import IconCallMerge from '@dialpad/dialtone/lib/dist/vue/icons/IconCallMerge';
import IconExpertNode from '@dialpad/dialtone/lib/dist/vue/icons/IconExpertNode';
import IconBranch from '@dialpad/dialtone/lib/dist/vue/icons/IconBranch';

export const IVR_NODE_PROMPT_MENU = 'promptmenu';
export const IVR_NODE_PROMPT_COLLECT = 'promptcollect';
export const IVR_NODE_PROMPT_PLAY = 'promptplay';
export const IVR_NODE_EXPERT = 'gotoexpert';
export const IVR_NODE_GO_TO = 'goto';
export const IVR_NODE_BRANCH = 'branch';
export const IVR_NODE_TRANSFER = 'transfer';
export const IVR_NODE_HANGUP = 'hangup';

export const IVR_NODE_ICON_TYPES = {
  [IVR_NODE_PROMPT_MENU]: IconDialpad,
  [IVR_NODE_PROMPT_COLLECT]: IconPhoneDialer,
  [IVR_NODE_PROMPT_PLAY]: IconVolumeUp,
  [IVR_NODE_EXPERT]: IconExpertNode,
  [IVR_NODE_BRANCH]: IconBranch,
  [IVR_NODE_GO_TO]: IconCallMerge,
  [IVR_NODE_TRANSFER]: IconPhoneTransfer,
  [IVR_NODE_HANGUP]: IconCallEndArrow,
};

export const IVR_NODE_LABELS = {
  [IVR_NODE_PROMPT_MENU]: 'Menu',
  [IVR_NODE_PROMPT_COLLECT]: 'Collect',
  [IVR_NODE_PROMPT_PLAY]: 'Play',
  [IVR_NODE_EXPERT]: 'Expert',
  [IVR_NODE_BRANCH]: 'Branch',
  [IVR_NODE_GO_TO]: 'Go-to',
  [IVR_NODE_TRANSFER]: 'Transfer',
  [IVR_NODE_HANGUP]: 'Hangup',
};
