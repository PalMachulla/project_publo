import { Editor, Element, Transforms, Range, Point } from 'slate';
import { CustomEditor } from '../types';

const SHORTCUTS = {
  '*': 'bulleted-list',
  '-': 'bulleted-list',
  '1.': 'numbered-list',
  '>': 'block-quote',
  '#': 'heading-one',
  '##': 'heading-two',
  '###': 'heading-three',
};

export const withShortcuts = (editor: CustomEditor) => {
  const { deleteBackward, insertText } = editor;

  editor.insertText = (text) => {
    const { selection } = editor;

    if (text === ' ' && selection && Range.isCollapsed(selection)) {
      const { anchor } = selection;
      const block = Editor.above(editor, {
        match: n => Element.isElement(n) && Editor.isBlock(editor, n),
      });
      const path = block ? block[1] : [];
      const start = Editor.start(editor, path);
      const range = { anchor, focus: start };
      const beforeText = Editor.string(editor, range);
      const type = SHORTCUTS[beforeText];

      if (type) {
        Transforms.select(editor, range);
        Transforms.delete(editor);
        
        if (type === 'bulleted-list' || type === 'numbered-list') {
          const list = { type, children: [{ type: 'list-item', children: [{ text: '' }] }] };
          Transforms.insertNodes(editor, list);
        } else {
          Transforms.setNodes(editor, { type });
        }
        return;
      }
    }

    insertText(text);
  };

  editor.deleteBackward = (...args) => {
    const { selection } = editor;

    if (selection && Range.isCollapsed(selection)) {
      const match = Editor.above(editor, {
        match: n => Element.isElement(n) && Editor.isBlock(editor, n),
      });

      if (match) {
        const [node, path] = match;
        const start = Editor.start(editor, path);

        if (
          Element.isElement(node) &&
          node.type !== 'paragraph' &&
          Point.equals(selection.anchor, start)
        ) {
          Transforms.setNodes(editor, { type: 'paragraph' });
          return;
        }
      }
    }

    deleteBackward(...args);
  };

  return editor;
};