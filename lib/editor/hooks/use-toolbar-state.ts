"use client";

import { useMemo } from 'react';
import { Editor } from 'slate';
import { CustomEditor } from '../types';
import { isFormatActive, isBlockActive } from '../formatting';

export function useToolbarState(editor: CustomEditor) {
  const state = useMemo(() => ({
    bold: isFormatActive(editor, 'bold'),
    italic: isFormatActive(editor, 'italic'),
    underline: isFormatActive(editor, 'underline'),
    'heading-one': isBlockActive(editor, 'heading-one'),
    'heading-two': isBlockActive(editor, 'heading-two'),
    'heading-three': isBlockActive(editor, 'heading-three'),
    'bulleted-list': isBlockActive(editor, 'bulleted-list'),
    'numbered-list': isBlockActive(editor, 'numbered-list'),
    'block-quote': isBlockActive(editor, 'block-quote'),
  }), [editor]);

  return state;
}