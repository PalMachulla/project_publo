"use client";

import isHotkey from 'is-hotkey';
import { KeyboardEvent } from 'react';
import { Editor } from 'slate';
import { CustomEditor } from '../types';
import { toggleFormat, toggleBlock } from '../formatting';
import { HOTKEYS } from '../constants';

export const useHotkeys = (editor: CustomEditor) => {
  return (event: KeyboardEvent<HTMLDivElement>) => {
    for (const hotkey in HOTKEYS) {
      if (isHotkey(hotkey, event)) {
        event.preventDefault();
        const format = HOTKEYS[hotkey];
        
        if (['bold', 'italic', 'underline'].includes(format)) {
          toggleFormat(editor, format);
        } else {
          toggleBlock(editor, format);
        }
      }
    }
  };
};