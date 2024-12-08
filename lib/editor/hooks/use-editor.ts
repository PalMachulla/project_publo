"use client";

import { useMemo, useState, useCallback } from 'react';
import { createEditor, Descendant } from 'slate';
import { withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import { withShortcuts } from '../plugins/with-shortcuts';
import { withHTML } from '../plugins/with-html';
import { INITIAL_EDITOR_VALUE } from '../constants';

export function useEditor() {
  const [value, setValue] = useState<Descendant[]>(INITIAL_EDITOR_VALUE);
  
  const editor = useMemo(() => {
    const e = withHistory(withReact(createEditor()));
    return withHTML(withShortcuts(e));
  }, []);

  const handleChange = useCallback((newValue: Descendant[]) => {
    setValue(newValue);
    // Here you could trigger autosave or other side effects
  }, []);

  return {
    editor,
    value,
    onChange: handleChange,
  };
}