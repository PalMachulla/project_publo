"use client";

import { useState, useCallback } from 'react';

export function useDocumentTitle(initialTitle = 'Untitled Document') {
  const [title, setTitle] = useState(initialTitle);

  const handleTitleChange = useCallback((newTitle: string) => {
    setTitle(newTitle);
    // Here you could add logic to save the title to a backend
  }, []);

  return {
    title,
    setTitle: handleTitleChange,
  };
}