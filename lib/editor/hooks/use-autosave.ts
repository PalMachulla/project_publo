"use client";

import { useCallback, useEffect } from 'react';
import { Descendant } from 'slate';
import { useToast } from '@/components/ui/use-toast';

export function useAutosave(content: Descendant[], documentId?: string) {
  const { toast } = useToast();

  const saveContent = useCallback(async () => {
    // Here you would implement the actual save logic
    // For now, we'll just show a toast
    toast({
      title: "Document saved",
      description: "All changes have been saved to the cloud",
    });
  }, [toast]);

  useEffect(() => {
    const saveInterval = setInterval(saveContent, 30000); // Autosave every 30 seconds
    return () => clearInterval(saveInterval);
  }, [saveContent]);

  return {
    saveContent,
  };
}