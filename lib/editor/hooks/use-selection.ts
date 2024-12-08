"use client";

import { useCallback, useState } from 'react';
import { Range } from 'slate';

export function useSelection() {
  const [selection, setSelection] = useState<Range | null>(null);

  const handleSelectionChange = useCallback((newSelection: Range | null) => {
    setSelection(newSelection);
  }, []);

  return {
    selection,
    setSelection: handleSelectionChange,
  };
}