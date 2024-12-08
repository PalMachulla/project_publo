"use client";

import { Editor, Transforms, Element } from 'slate';
import { CustomEditor } from '../types';

export const withHTML = (editor: CustomEditor) => {
  const { insertData } = editor;

  editor.insertData = (data) => {
    const html = data.getData('text/html');

    if (html) {
      const parsed = new DOMParser().parseFromString(html, 'text/html');
      const fragment = deserializeHTML(parsed.body);
      Transforms.insertFragment(editor, fragment);
      return;
    }

    insertData(data);
  };

  return editor;
};

const deserializeHTML = (el: HTMLElement) => {
  if (el.nodeType === 3) {
    return { text: el.textContent || '' };
  } else if (el.nodeType !== 1) {
    return null;
  }

  const children = Array.from(el.childNodes)
    .map(node => deserializeHTML(node as HTMLElement))
    .flat()
    .filter(Boolean);

  switch (el.nodeName) {
    case 'BODY':
      return children;
    case 'BR':
      return { text: '\n' };
    case 'BLOCKQUOTE':
      return { type: 'block-quote', children };
    case 'P':
      return { type: 'paragraph', children };
    case 'H1':
      return { type: 'heading-one', children };
    case 'H2':
      return { type: 'heading-two', children };
    case 'H3':
      return { type: 'heading-three', children };
    case 'UL':
      return { type: 'bulleted-list', children };
    case 'OL':
      return { type: 'numbered-list', children };
    case 'LI':
      return { type: 'list-item', children };
    default:
      return { text: el.textContent || '' };
  }
};