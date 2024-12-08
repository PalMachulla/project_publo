import { Editor, Element, Transforms, Text } from 'slate';
import { CustomEditor } from './types';

export const isFormatActive = (editor: CustomEditor, format: keyof Omit<Text, 'text'>) => {
  const [match] = Editor.nodes(editor, {
    match: n => Text.isText(n) && n[format] === true,
    universal: true,
  });
  
  return !!match;
};

export const toggleFormat = (editor: CustomEditor, format: keyof Omit<Text, 'text'>) => {
  const isActive = isFormatActive(editor, format);
  Transforms.setNodes(
    editor,
    { [format]: isActive ? null : true },
    { match: Text.isText, split: true }
  );
};

export const isBlockActive = (editor: CustomEditor, format: string, blockType = 'type') => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: n => !Editor.isEditor(n) && Element.isElement(n) && n[blockType] === format,
    })
  );

  return !!match;
};

export const toggleBlock = (editor: CustomEditor, format: string) => {
  const isActive = isBlockActive(editor, format);
  const newProperties: Partial<Element> = {
    type: isActive ? 'paragraph' : format,
  };

  Transforms.setNodes(editor, newProperties);
};