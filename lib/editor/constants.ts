export const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+1': 'heading-one',
  'mod+2': 'heading-two',
  'mod+3': 'heading-three',
  'mod+shift+7': 'numbered-list',
  'mod+shift+8': 'bulleted-list',
  'mod+shift+.': 'block-quote',
} as const;

export const INITIAL_EDITOR_VALUE = [
  {
    type: 'paragraph' as const,
    children: [{ text: '' }],
  },
];