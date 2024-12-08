"use client";

import { useSlate } from 'slate-react';
import { Toggle } from "@/components/ui/toggle";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Link,
  Image
} from "lucide-react";
import { toggleFormat, isFormatActive } from '@/lib/editor/formatting';

export function Toolbar() {
  const editor = useSlate();

  const handleFormat = (format: 'bold' | 'italic' | 'underline') => {
    toggleFormat(editor, format);
  };

  return (
    <div className="flex items-center gap-1 px-6 py-2 border-b bg-card">
      <Toggle 
        pressed={isFormatActive(editor, 'bold')}
        onPressedChange={() => handleFormat('bold')}
        aria-label="Toggle bold"
      >
        <Bold className="w-4 h-4" />
      </Toggle>
      <Toggle 
        pressed={isFormatActive(editor, 'italic')}
        onPressedChange={() => handleFormat('italic')}
        aria-label="Toggle italic"
      >
        <Italic className="w-4 h-4" />
      </Toggle>
      <Toggle 
        pressed={isFormatActive(editor, 'underline')}
        onPressedChange={() => handleFormat('underline')}
        aria-label="Toggle underline"
      >
        <Underline className="w-4 h-4" />
      </Toggle>
      <div className="w-px h-6 bg-border mx-2" />
      <Toggle aria-label="Align left">
        <AlignLeft className="w-4 h-4" />
      </Toggle>
      <Toggle aria-label="Align center">
        <AlignCenter className="w-4 h-4" />
      </Toggle>
      <Toggle aria-label="Align right">
        <AlignRight className="w-4 h-4" />
      </Toggle>
      <div className="w-px h-6 bg-border mx-2" />
      <Toggle aria-label="Bullet list">
        <List className="w-4 h-4" />
      </Toggle>
      <Toggle aria-label="Numbered list">
        <ListOrdered className="w-4 h-4" />
      </Toggle>
      <div className="w-px h-6 bg-border mx-2" />
      <Toggle aria-label="Insert link">
        <Link className="w-4 h-4" />
      </Toggle>
      <Toggle aria-label="Insert image">
        <Image className="w-4 h-4" />
      </Toggle>
    </div>
  );
}